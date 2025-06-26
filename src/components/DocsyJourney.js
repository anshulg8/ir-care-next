import React from "react";

const DocsyJourney = ({ steps }) => {
    if (!steps || steps.length === 0) return null;

    const formatWithBoldWithNewlines = (text) => {
        // First, split by newlines
        const lines = text.split(/\n/g);

        return lines.map((line, lineIndex) => {
            if (!line.trim()) return null;
            // Then, within each line, handle *bold* text
            const parts = line.split(/(\*[^*]+\*)/g); // Match *text*

            return (
                <p key={lineIndex} className="mb-2 last:mb-0">
                    {parts.map((part, partIndex) => {
                        if (part.startsWith("*") && part.endsWith("*")) {
                            return <strong key={partIndex}>{part.slice(1, -1)}</strong>;
                        }
                        return <React.Fragment key={partIndex}>{part}</React.Fragment>;
                    })}
                </p>
            );
        });
    };

    return (
        <section className="pt-4 pb-6 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Your <span className="text-teal-600">End-to-End Journey</span> With Docsy
                </h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    From first consultation to full recovery – we handle every detail
                </p>

                {/* Mobile Scroll Layout */}
                <div className="md:hidden overflow-x-auto -mx-4 px-4">
                    <div className="flex space-x-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex-shrink-0 w-80 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative">
                                <div className="flex items-center justify-start mb-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md border-4 border-white ${step.color}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 ml-4">{step.title}</h3>
                                </div>
                                <div className="text-gray-600 whitespace-pre-line">
                                    {formatWithBoldWithNewlines(step.desc)}
                                </div>
                                <p className="text-sm font-medium text-teal-600 mt-2">⏱ {step.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Timeline Layout */}
                <div className="hidden md:block relative">
                    <div className="absolute top-16 left-16 right-16 h-1 bg-teal-200"></div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md border-4 border-white ${step.color}`}>
                                    {step.icon}
                                </div>
                                <div className="mt-8 pt-16 pb-6 px-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <div className="text-gray-600 whitespace-pre-line">{formatWithBoldWithNewlines(step.desc)}</div>
                                    <p className="text-sm font-medium text-teal-600 mt-2">⏱ {step.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                {/* <div className="text-center mt-10">
                    Seeking treatment for yourself or a loved one? Take the first step. <br /><br />
                    <a
                        href="#book"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                        Book Free Appointment
                    </a>
                </div> */}
            </div>
        </section >
    );
};

export default DocsyJourney;
