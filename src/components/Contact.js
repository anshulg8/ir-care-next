import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Contact<span className="text-teal-600"> Us</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Missed Call / Callback */}
                    <div className="bg-blue-50 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Request Callback</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Give a missed call or reach us directly at:</p>
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-blue-600 bg-white px-4 py-2 rounded-lg shadow-xs border border-blue-200">
                                {PHONE_NUMBER}
                            </span>
                        </div>
                    </div>

                    {/* WhatsApp / Call Now */}
                    <div className="bg-green-50 p-8 rounded-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Speak Now</h3>
                        </div>
                        <p className="text-gray-600 mb-6">24/7 WhatsApp & Phone Support</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                            >
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.52 3.48A11.83 11.83 0 0 0 12.02 0C5.58 0 .2 5.37.2 11.97c0 2.11.56 4.17 1.63 5.97L0 24l6.29-1.64c1.73.94 3.68 1.43 5.73 1.43h.01c6.43 0 11.81-5.37 11.81-11.97 0-3.19-1.25-6.19-3.52-8.34zm-8.5 18.84c-1.68 0-3.32-.45-4.75-1.3l-.34-.2-3.74.98.99-3.65-.22-.36c-1.02-1.65-1.56-3.57-1.56-5.53 0-5.43 4.41-9.84 9.84-9.84 2.63 0 5.11 1.04 6.97 2.9a9.77 9.77 0 0 1 2.89 6.95c.01 5.42-4.41 9.84-9.83 9.84zm5.38-7.4c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-..57-.09 1.05-.52 1.2-1.03.15-.52.15-.96.1-1.05-.05-.1-.2-.15-.43-.25z" />
                                </svg>
                                WhatsApp
                            </a>
                            <div className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                                <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {PHONE_NUMBER}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
