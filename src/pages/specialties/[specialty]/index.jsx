import React from 'react';
import { useRouter } from 'next/router';
import { urologyData } from '@/data/specialties/urology';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function SpecialtyPage() {
    const router = useRouter();
    const { specialty } = router.query;

    if (!router.isReady) return <div>Loading...</div>;

    const specialtyDataMap = { urology: urologyData };
    const specialtyData = specialtyDataMap[specialty];

    if (!specialtyData) {
        router.replace('/404');
        return null;
    }

    const { conditions = { list: [] }, procedures = { list: [] }, symptoms = { list: [] } } = specialtyData;
    const specialtyTitle = specialty.charAt(0).toUpperCase() + specialty.slice(1);

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
                "description": c.meta?.description || '',
            })),
            ...procedures.list.map((p) => ({
                "@type": "MedicalProcedure",
                "name": p.title,
                "url": `https://mydocsy.com/specialties/${specialty}/procedures/${p.slug}`,
                "description": p.meta?.description || '',
            })),
            ...symptoms.list.map((s) => ({
                "@type": "MedicalSymptom",
                "name": s.title,
                "url": `https://mydocsy.com/specialties/${specialty}/symptoms/${s.slug}`,
                "description": s.hero?.intro || '',
            })),
        ],
    };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialtyTitle },
    ];

    // Helper for rendering cards with See More / See Less
    const Card = ({ item, baseUrl }) => {
        const [expanded, setExpanded] = React.useState(false);
        const text = item.overview?.whatItIs || 'Overview coming soon.';
        const isLong = text.length > 120;

        return (
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                    {isLong && !expanded ? `${text.slice(0, 120)}...` : text}
                    {isLong && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="ml-1 text-teal-600 font-medium hover:underline text-sm"
                        >
                            {expanded ? 'See less' : 'See more'}
                        </button>
                    )}
                </p>
                <a
                    href={`${baseUrl}/${item.slug}`}
                    className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                >
                    Learn More
                </a>
            </div>
        );
    };

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
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">{specialtyTitle}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            {`Explore ${specialtyTitle} conditions, procedures, and symptoms.`}
                        </p>
                    </div>
                </section>

                {/* Conditions */}
                {conditions.list.length > 0 && (
                    <section className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-teal-600">Conditions</h2>
                            <a
                                href={`/specialties/${specialty}/conditions`}
                                className="text-teal-600 font-medium hover:underline"
                            >
                                View All
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {conditions.list.slice(0, 6).map((c) => (
                                <Card key={c.slug} item={c} baseUrl={`/specialties/${specialty}/conditions`} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Procedures */}
                {procedures.list.length > 0 && (
                    <section className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-teal-600">Procedures</h2>
                            <a
                                href={`/specialties/${specialty}/procedures`}
                                className="text-teal-600 font-medium hover:underline"
                            >
                                View All
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {procedures.list.slice(0, 6).map((p) => (
                                <Card key={p.slug} item={p} baseUrl={`/specialties/${specialty}/procedures`} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Symptoms */}
                {symptoms.list.length > 0 && (
                    <section className="mb-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-teal-600">Symptoms</h2>
                            <a
                                href={`/specialties/${specialty}/symptoms`}
                                className="text-teal-600 font-medium hover:underline"
                            >
                                View All
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {symptoms.list.slice(0, 6).map((s) => (
                                <Card key={s.slug} item={s} baseUrl={`/specialties/${specialty}/symptoms`} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
