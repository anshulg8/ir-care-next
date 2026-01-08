// src/pages/specialties/[specialty]/index.jsx
import React from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';

async function loadSpecialtyMeta(specialty) {
    try {
        const conditions = await import(`@/data/specialties/${specialty}/conditions/_meta.js`).then(m => m.default);
        const procedures = await import(`@/data/specialties/${specialty}/procedures/_meta.js`).then(m => m.default);
        const symptoms = await import(`@/data/specialties/${specialty}/symptoms/_meta.js`).then(m => m.default);

        const transformMeta = meta =>
            Object.values(meta).map(itemMeta => ({
                slug: itemMeta.page.slug.split('/').pop(),
                title: itemMeta.metadata.title.split(':')[0],
                overview: { whatItIs: itemMeta.metadata.description.split('. ')[0] + '.' },
            }));

        return {
            conditions: transformMeta(conditions),
            procedures: transformMeta(procedures),
            symptoms: transformMeta(symptoms),
        };
    } catch (error) {
        console.error(`Failed to load meta for specialty=${specialty}`, error);
        return { conditions: [], procedures: [], symptoms: [] };
    }
}

export default function SpecialtyIndexPage({ specialty, data }) {
    const router = useRouter();
    if (router.isFallback) return <div>Loading...</div>;
    if (!data) return <div className="text-center py-10 text-gray-600">Specialty not found.</div>;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1) },
    ];

    return (
        <>
            <SEO
                title={`${specialty.charAt(0).toUpperCase() + specialty.slice(1)} | Docsy`}
                description={`Browse conditions, procedures, and symptoms for ${specialty}.`}
                url={`https://mydocsy.com/specialties/${specialty}`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />

                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">{specialty.charAt(0).toUpperCase() + specialty.slice(1)}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Browse conditions, procedures, and symptoms in {specialty}.
                        </p>
                    </div>
                </section>

                {['conditions', 'procedures', 'symptoms'].map(category => (
                    <div key={category} className="my-10">
                        {/* Title + View All container */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-teal-600">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            {data[category].length > 3 && (
                                <a
                                    href={`/specialties/${specialty}/${category}`}
                                    className="text-teal-600 font-medium hover:underline"
                                >
                                    View All
                                </a>
                            )}
                        </div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data[category].slice(0, 3).map(item => (
                                <div
                                    key={item.slug}
                                    className="bg-white border-gray rounded-md shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
                                >
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600 mb-4">{item.overview?.whatItIs || 'Overview coming soon.'}</p>
                                    <a
                                        href={`/specialties/${specialty}/${category}/${item.slug}`}
                                        className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}

// Dynamically generate paths based on actual specialty folders
export async function getStaticPaths() {
    const specialtiesDir = path.join(process.cwd(), 'src/data/specialties');
    const specialties = fs.readdirSync(specialtiesDir).filter(f =>
        fs.lstatSync(path.join(specialtiesDir, f)).isDirectory()
    );

    const paths = specialties.map(s => ({
        params: { specialty: s }
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { specialty } = params;
    const data = await loadSpecialtyMeta(specialty);
    return { props: { specialty, data }, revalidate: 60 };
}
