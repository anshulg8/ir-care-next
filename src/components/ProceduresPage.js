import React from 'react';
import Link from 'next/link';
import { proceduresArray } from '../data';
import SEO from './SEO';
import { BASE_URL } from '@/constants';

const ProceduresPage = () => {
    const procedures = proceduresArray;

    return (
        <>
            <SEO
                title="Our Procedures | Docsy"
                description="We are a patient-first platform committed to making minimally invasive, image-guided treatments more accessible to people everywhere. By partnering with best vetted interventional radiology (IR) centers and specialists, we provide safe, modern alternatives to traditional surgery."
                url={`${BASE_URL || ''}/procedures`}
            />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-teal-600">Procedures</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our range of minimally invasive procedures that offer faster recovery and better outcomes compared to traditional treatments.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {procedures.map((procedure) => (
                            <Link
                                key={procedure.slug}
                                href={`/procedures/${procedure.slug}`}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                                                {procedure.name}
                                            </h2>
                                            <p className="text-gray-600 line-clamp-2">
                                                {procedure.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 text-teal-500 shrink-0">
                                            {procedure.icon}
                                        </div>
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        {procedure.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start">
                                                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 text-teal-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-200">
                                        Learn more
                                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* New Link to Full IR Conditions Page */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/treatments"
                            className="inline-block text-teal-600 text-lg font-semibold hover:underline"
                        >
                            Browse other diseases that can be treated using IR &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProceduresPage;