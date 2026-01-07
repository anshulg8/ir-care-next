import Link from 'next/link';
import { useState } from "react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/constants";

function handleCTA(action) {
    switch (action) {
        case "call":
        case "book":
            window.location.href = `tel:${PHONE_NUMBER}`;
            break;

        case "whatsapp":
        case "upload":
        default:
            window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
            break;
    }
}

export function BlockRenderer({ block, compact = false }) {
    const sectionClass = compact
        ? "mb-2"
        : "mb-12 max-w-4xl mx-auto px-4";

    switch (block.type) {
        case 'text':
            return (
                <section className={sectionClass}>
                    {block.title && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-left">
                            {block.title}
                        </h2>
                    )}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                        {block.content}
                    </p>
                </section>
            );

        case 'list':
            return (
                <section className={sectionClass}>
                    {block.title && (
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-left">
                            {block.title}
                        </h3>
                    )}
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
                        {block.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>
            );

        case 'links':
            return (
                <section className={sectionClass}>
                    {block.title && (
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-left">
                            {block.title}
                        </h3>
                    )}
                    <ul className="space-y-1">
                        {block.items.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className="text-teal-600 font-medium hover:underline"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            );

        case 'cta':
            return (
                <section className={compact ? "mb-2" : "mb-12 flex flex-wrap gap-4 justify-center"}>
                    {block.items.map((cta, i) => (
                        <button
                            key={i}
                            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700 transition"
                            onClick={() => handleCTA(cta.action)}
                        >
                            {cta.label}
                        </button>
                    ))}
                </section>
            );

        case 'faq': {
            const [openIndex, setOpenIndex] = useState(null);

            const toggleFaq = (index) => {
                setOpenIndex(openIndex === index ? null : index);
            };

            return (
                <section className={compact ? "mb-2" : "mb-12 max-w-4xl mx-auto px-4"}>
                    {block.title && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
                            {block.title}
                        </h2>
                    )}

                    <div className="space-y-3">
                        {block.items.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
                                >
                                    <span className="font-semibold text-gray-900">
                                        {faq.q}
                                    </span>
                                    <span className="text-teal-600 text-xl font-bold">
                                        {openIndex === i ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer */}
                                {openIndex === i && (
                                    <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            );
        }

        case 'composite':
            return (
                <section className="mb-12 max-w-4xl mx-auto px-4">
                    {block.title && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                            {block.title}
                        </h2>
                    )}

                    <div className="space-y-3">
                        {block.items.map((item, i) => (
                            <div
                                key={i}
                                className="w-full rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
                            >
                                {item.title && (
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                        {item.title}
                                    </h3>
                                )}

                                <div className="space-y-2">
                                    {item.body.map((childBlock, j) => (
                                        <BlockRenderer
                                            key={j}
                                            block={childBlock}
                                            compact
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            );

        default:
            return null;
    }
}
