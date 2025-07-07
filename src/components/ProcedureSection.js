import React from 'react';
import Link from 'next/link';
import { proceduresArray } from '../data.js';

const ProcedureSection = () => {
    return (
        <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Advanced <span className="text-teal-600">Minimally Invasive</span> Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        FDA/EU-approved procedures with faster recovery and better outcomes
                    </p>
                </div>

                {/* Cards Section */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* For Mobile: Horizontal Scrollable Cards */}
                    <div className="flex space-x-6 overflow-x-auto md:space-x-8 md:overflow-x-visible">
                        {proceduresArray.map((procedure) => (
                            <div
                                key={procedure.id}
                                className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 w-80 flex-shrink-0"
                            >
                                {/* Decorative ribbon */}
                                <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    FDA Approved
                                </div>

                                {/* Image placeholder */}
                                <div className="h-48 bg-gradient-to-r from-teal-100 to-teal-50 flex items-center justify-center">
                                    <span className="text-6xl">🩺</span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 flex-1">
                                            {procedure.name}
                                        </h3>
                                        <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                            1-2 hrs {/* Placeholder for duration */}
                                        </div>
                                    </div>

                                    <p className="text-teal-600 font-medium mb-4">
                                        For: {procedure.for}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {procedure.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-gray-600 text-sm">4.9 (120+ reviews)</span>
                                        </div>

                                        <Link href={`/procedures/${procedure.slug}`}>
                                            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                                                {procedure.cta}
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Procedures Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/procedures"
                        className="inline-block text-teal-600 text-lg font-semibold hover:underline"
                    >
                        View All Procedures &rarr;
                    </Link>
                </div>

                {/* Comparative CTA */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-3 rounded-full shadow-xs">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-700 mr-3">Not sure which procedure you need?</span>

                        <Link href="/ir-applications">
                            <button className="text-teal-600 hover:text-teal-800 font-medium">
                                Compare Treatments →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcedureSection;
