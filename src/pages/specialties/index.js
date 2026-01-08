// src/pages/specialties/index.jsx
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import SEO from '@/components/SEO';

export default function SpecialtiesIndex({ specialties }) {
    return (
        <>
            <SEO
                title="Specialties | MyDocsy"
                description="Browse medical specialties."
                url="https://mydocsy.com/specialties"
            />

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Page Title */}
                <h1 className="text-3xl font-bold mb-8 text-center">Specialties</h1>

                {/* Specialties Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {specialties.map((s) => (
                        <Link
                            key={s}
                            href={`/specialties/${s}`}
                            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between h-full"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2 capitalize">
                                {s}
                            </h2>
                            <p className="text-gray-600">
                                Explore {s.charAt(0).toUpperCase() + s.slice(1)} conditions and procedures.
                            </p>
                            <span className="mt-4 inline-block text-teal-600 font-medium hover:underline">
                                View Specialty →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const specialtiesDir = path.join(process.cwd(), 'src/data/specialties');
    const specialties = fs
        .readdirSync(specialtiesDir)
        .filter((f) => fs.lstatSync(path.join(specialtiesDir, f)).isDirectory());

    return { props: { specialties }, revalidate: 60 };
}
