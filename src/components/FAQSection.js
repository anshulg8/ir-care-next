import React, { useState } from 'react';

const FAQSection = ({ faqs = [] }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Frequently Asked <span className="text-teal-600">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to the most common questions our patients have about our procedures.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div
                                className="cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                                <span className="text-teal-600">
                                    {openFaq === faq.id ? "-" : "+"}
                                </span>
                            </div>
                            {openFaq === faq.id && (
                                <div className="p-6 bg-teal-50 text-gray-700 text-base">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
