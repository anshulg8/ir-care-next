import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { AWS_BOT_URL } from "@/constants";

// ✅ Detect final confirmation in bot's reply
function isFinalConfirmation(reply) {
    return (
        reply.includes("[FINAL_CONFIRMATION]") ||
        reply.toLowerCase().includes("i’ll schedule a doctor’s call") ||
        reply.toLowerCase().includes("i’ll schedule your appointment now")
    );
}

// ✅ Extract patient details (supports JSON block inside message)
function extractPatientData(reply) {
    // 1. Try JSON block inside message
    try {
        const jsonMatch = reply.match(/\{[\s\S]*\}/); // first {...} block
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return {
                name: parsed.name?.toString().trim() || "NA",
                age: parsed.age?.toString().trim() || "NA",
                location: parsed.location?.toString().trim() || "NA",
                contact: parsed.contact?.toString().trim() || "NA",
                notes: reply.trim(),
            };
        }
    } catch (e) {
        console.warn("⚠️ JSON parse failed, falling back to regex extraction");
    }

    // 2. Fallback regex extractions for plain text
    const nameMatch = reply.match(/Name:\s*(.+)/i);
    const ageMatch = reply.match(/Age:\s*(\d+)/i);
    const locationMatch = reply.match(/Location:\s*(.+)/i);
    const contactMatch = reply.match(/(?:Phone|Contact|Mobile):\s*(\d+)/i);

    return {
        name: nameMatch ? nameMatch[1].trim() : "NA",
        age: ageMatch ? ageMatch[1].trim() : "NA",
        location: locationMatch ? locationMatch[1].trim() : "NA",
        contact: contactMatch ? contactMatch[1].trim() : "NA",
        notes: reply.trim() || "NA",
    };
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);

    const [patientData, setPatientData] = useState({
        name: "NA",
        age: "NA",
        location: "NA",
        contact: "NA",
        notes: "NA",
    });

    // On mount → reset session and show greeting
    useEffect(() => {
        window.localStorage.removeItem("docsySessionId");
        setSessionId(null);

        setPatientData({
            name: "NA",
            age: "NA",
            location: "NA",
            contact: "NA",
            notes: "NA",
        });

        setMessages([
            {
                sender: "bot",
                text: "👋 Hi, I'm your pre-consultation assistant. Let me know if you need any help.",
            },
        ]);
    }, []);

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(`${AWS_BOT_URL}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, message: input }),
            });

            const data = await res.json();

            if (data.sessionId) {
                setSessionId(data.sessionId);
                window.localStorage.setItem("docsySessionId", data.sessionId);
            }

            let replyText = data.reply;

            // ✅ Save data only on FINAL_CONFIRMATION
            if (isFinalConfirmation(replyText)) {
                console.log("✅ Final confirmation detected in reply");

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "chatbot_event_submitted",
                    cta_source: "ChatBot",
                });

                const gclid = window.localStorage.getItem("gclid");

                replyText = replyText.replace("[FINAL_CONFIRMATION]", "").trim();

                const extracted = extractPatientData(replyText);

                console.log("📦 Extracted patientData:", extracted);
                setPatientData(extracted);

                await fetch(`${AWS_BOT_URL}/submit`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        sessionId,
                        ...extracted,
                        gclid,
                    }),
                });

                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: "✅ Thanks, I’ve collected your details. A doctor will reach out soon.",
                    },
                ]);

                setLoading(false);
                return;
            }

            const botMessage = { sender: "bot", text: replyText };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-90">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-35 right-0 w-14 h-14 rounded-l-xl bg-teal-600 text-white flex items-center justify-center shadow-lg hover:bg-teal-700 transition"
                >
                    <BiMessageRoundedCheck size={28} />
                </button>
            )}

            {isOpen && (
                <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col">
                    <div className="bg-teal-600 text-white p-3 rounded-t-2xl flex justify-between items-center">
                        <span className="font-semibold">Docsy Assistant</span>
                        <button onClick={() => setIsOpen(false)}>✖</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 max-w-[75%] rounded-lg text-sm ${msg.sender === "user"
                                    ? "bg-teal-500 text-white ml-auto"
                                    : "bg-gray-200 text-gray-900"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="text-gray-500 text-sm italic">
                                Docsy is typing...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-2 border-t flex items-center space-x-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
