import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { urologyData } from '@/data/specialties/urology';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function SpecialtyPage() {
    const router = useRouter();

    const { specialty } = router.query;

    const specialtyDataMap = {
        urology: urologyData,
        // cardiology: cardiologyData,
    };

    const specialtyData = specialtyDataMap[specialty];

    useEffect(() => {
        if (specialty && !specialtyData) {
            router.replace('/404');
        }
    }, [specialty, specialtyData, router]);
    if (!specialtyData) return null;

    const { conditions, procedures, symptoms } = specialtyData;
    const specialtyTitle = specialty.charAt(0).toUpperCase() + specialty.slice(1);

    // Structured data for SEO
    const specialtySchema = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": specialtyTitle,
        "url": `https://mydocsy.com/specialties/${specialty}`,
        "description": `Explore ${specialtyTitle} conditions, procedures, and symptoms at Docsy.`,
        "mainEntity": [
            ...conditions.list.map((c) => ({
                "@type": "MedicalCondition",
                "name": c.title,
                "url": `https://mydocsy.com/specialties/${specialty}/conditions/${c.slug}`,
                "description": c.meta.description,
            })),
            ...procedures.list.map((p) => ({
                "@type": "MedicalProcedure",
                "name": p.title,
                "url": `https://mydocsy.com/specialties/${specialty}/procedures/${p.slug}`,
                "description": p.meta.description,
            })),
            ...symptoms.list.map((s) => ({
                "@type": "MedicalSymptom",
                "name": s.title,
                "url": `https://mydocsy.com/specialties/${specialty}/symptoms/${s.slug}`,
                "description": s.hero?.intro || '',
            })),
        ],
    };

    // Breadcrumbs
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialtyTitle },
    ];

    return (
        <>
            <SEO
                title={`${specialtyTitle} | Docsy`}
                description={`Explore ${specialtyTitle} conditions, procedures, and symptoms.`}
                url={`https://mydocsy.com/specialties/${specialty}`}
                schemaMarkup={specialtySchema}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbItems} />

                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">{specialtyTitle}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            {`Explore ${specialtyTitle} conditions, procedures, and symptoms.`}
                        </p>
                    </div>
                </section>

                {/* Conditions */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Conditions</h2>
                        <a
                            href={`/specialties/${specialty}/conditions`}
                            className="text-teal-600 font-medium hover:underline"
                        >
                            View All
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conditions.list.map((condition) => (
                            <div
                                key={condition.id}
                                className="bg-white border-gray rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{condition.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {condition.overview?.whatItIs || 'Overview coming soon.'}
                                </p>
                                <a
                                    href={`/specialties/${specialty}/conditions/${condition.slug}`}
                                    className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Procedures */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Procedures</h2>
                        <a
                            href={`/specialties/${specialty}/procedures`}
                            className="text-teal-600 font-medium hover:underline"
                        >
                            View All
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {procedures.list.map((procedure) => (
                            <div
                                key={procedure.id}
                                className="bg-white border-gray rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{procedure.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {procedure.overview?.whatItIs || 'Overview coming soon.'}
                                </p>
                                <a
                                    href={`/specialties/${specialty}/procedures/${procedure.slug}`}
                                    className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Symptoms */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Symptoms</h2>
                        <a
                            href={`/specialties/${specialty}/symptoms`}
                            className="text-teal-600 font-medium hover:underline"
                        >
                            View All
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {symptoms.list.map((symptom) => (
                            <div
                                key={symptom.id}
                                className="bg-white border-gray rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{symptom.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {symptom.hero?.intro || 'Overview coming soon.'}
                                </p>
                                <a
                                    href={`/specialties/${specialty}/symptoms/${symptom.slug}`}
                                    className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
