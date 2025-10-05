import React from 'react';
import { BASE_URL, DEFAULT_PAGE_DESCRIPTION, PHONE_NUMBER, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import SEO from './SEO';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Docsy",
        "url": `${BASE_URL}/contact`,
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": PHONE_NUMBER,
                "contactType": "customer support",
                "areaServed": ["IN", "AE"],
                "availableLanguage": ["English", "Hindi"],
            },
            {
                "@type": "ContactPoint",
                "url": WHATSAPP_LINK,
                "contactType": "customer support",
                "areaServed": ["IN", "AE"],
                "availableLanguage": ["English", "Hindi"],
                "contactOption": "Chat"
            }
        ],
        "sameAs": [WHATSAPP_LINK]
    };

    return (
        <>
            <SEO
                title="Contact Us | Docsy"
                description={DEFAULT_PAGE_DESCRIPTION}
                url={`${BASE_URL || ''}/contact`}
                schemaMarkup={contactSchema}
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Contact<span className="text-teal-600"> Us</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* 📞 Phone Support */}
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <FaPhone className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Give us a missed call to request a callback or call us directly:
                            </p>
                            <div className="flex flex-col gap-4">
                                <a
                                    href={`tel:${PHONE_NUMBER}`}>
                                    <div className="text-2xl font-bold text-blue-600 bg-white px-4 py-2 rounded-lg shadow-xs border border-blue-200 w-full sm:w-auto text-center">
                                        {PHONE_NUMBER}
                                    </div>
                                </a>
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center w-full sm:w-auto"
                                >
                                    <FaPhone className="h-5 w-5 mr-2" />
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* 💬 WhatsApp Support */}
                        <div className="bg-green-50 p-8 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <FaWhatsapp className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">WhatsApp Support</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Chat with us 24/7 on WhatsApp for support or queries:
                            </p>
                            <div className="flex flex-col gap-4">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="text-2xl font-bold text-green-600 bg-white px-4 py-2 rounded-lg shadow-xs border border-green-200 w-full sm:w-auto text-center">

                                        {WHATSAPP_NUMBER}

                                    </div>
                                </a>
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center w-full sm:w-auto"
                                >
                                    <FaWhatsapp className="h-5 w-5 mr-2" />
                                    Start Chat
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default Contact;
