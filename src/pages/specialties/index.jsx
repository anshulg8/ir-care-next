import React from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BASE_URL, PHONE_NUMBER, WHATSAPP_LINK } from '@/constants';
import { urologyData } from '@/data/specialties/urology';
import { FaPhone } from 'react-icons/fa6';
// Add other specialties as you create them

const specialtiesList = [
    urologyData,
    // Add other specialties here
];

export default function SpecialtiesIndex() {
    // Breadcrumbs for SEO & navigation
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Specialties' }, // current page, no href
    ];

    return (
        <>
            {/* SEO */}
            <SEO
                title="Our Specialties | Docsy"
                description="Explore our medical specialties, conditions, and procedures. Find expert care across a wide range of healthcare domains."
                url={`${BASE_URL}/specialties`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Breadcrumbs */}
                <Breadcrumbs items={breadcrumbItems} />

                {/* Hero Section */}
                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Our <span className="text-teal-600">Specialties</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Browse specialties, learn about conditions, and discover procedures for better patient outcomes.
                        </p>
                    </div>
                </section>

                {/* Specialties Grid */}
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {specialtiesList.map((specialty) => (
                                <Link
                                    key={specialty.specialty}
                                    href={`/specialties/${specialty.specialty}`}
                                    className="bg-white p-6 rounded-lg shadow-sm border-gray hover:shadow-md transition flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 capitalize">
                                            {specialty.specialty}
                                        </h3>
                                        <p className="text-gray-700">
                                            {specialty.conditions.list[0]?.meta.description || 'Explore conditions & procedures.'}
                                        </p>
                                    </div>
                                    <span className="mt-4 inline-block text-teal-600 font-medium">
                                        View Specialty →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section moved **outside** the max-w-6xl wrapper */}
            <section className="bg-teal-600 py-20 px-6 text-white text-center w-full">
                <h2 className="text-2xl font-bold mb-4">Need guidance on choosing a specialty?</h2>
                <p className="mb-6">Book a consultation with our expert team and get personalized advice.</p>
                {/* <a
                    href="/book-consult"
                    className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                >
                    Book a Consult
                </a> */}

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* 📞 Call Now Button */}
                    <a
                        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                        className="bg-white text-teal-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center w-full sm:w-auto"
                    >
                        <FaPhone className="h-5 w-5 mr-2" />
                        Call Now: {PHONE_NUMBER}
                    </a>
                </div>
            </section>
        </>

    );
}
