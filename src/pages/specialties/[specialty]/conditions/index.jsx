// src/pages/specialties/[specialty]/conditions/index.jsx
import React from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';

async function loadMeta(specialty) {
    try {
        const module = await import(`@/data/specialties/${specialty}/conditions/_meta.js`);
        return module.default;
    } catch (error) {
        console.error(`Meta not found for specialty=${specialty}`, error);
        return null;
    }
}

function transformMetaToItems(meta) {
    if (!meta) return [];
    return Object.values(meta).map(itemMeta => ({
        slug: itemMeta.page.slug.split('/').pop(),
        id: itemMeta.page.slug.split('/').pop(),
        title: itemMeta.metadata.title.split(':')[0],
        overview: { whatItIs: itemMeta.metadata.description.split('. ')[0] + '.' },
    }));
}

export default function ConditionsIndexPage({ specialty, items }) {
    const router = useRouter();
    if (router.isFallback) return <div>Loading...</div>;
    if (!items?.length) return <div className="text-center py-10 text-gray-600">No conditions found.</div>;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: 'Conditions' },
    ];

    return (
        <>
            <SEO
                title={`Conditions | ${specialty.charAt(0).toUpperCase() + specialty.slice(1)} | Docsy`}
                description={`List of conditions in ${specialty}.`}
                url={`https://mydocsy.com/specialties/${specialty}/conditions`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />

                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">Conditions</span>
                        </h2>
                        <p className="text-lg text-gray-600">Browse conditions in {specialty}.</p>
                    </div>
                </section>

                <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                    {items.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between h-full"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-700 mb-4">{item.overview?.whatItIs || 'Overview coming soon.'}</p>
                            <a
                                href={`/specialties/${specialty}/conditions/${item.slug}`}
                                className="mt-auto inline-block text-teal-600 font-medium hover:underline"
                            >
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

// Dynamically generate paths based on specialty folders
export async function getStaticPaths() {
    const specialtiesDir = path.join(process.cwd(), 'src/data/specialties');
    const specialties = fs.readdirSync(specialtiesDir).filter(f =>
        fs.lstatSync(path.join(specialtiesDir, f)).isDirectory()
    );

    const paths = specialties.map(s => ({ params: { specialty: s } }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { specialty } = params;
    const meta = await loadMeta(specialty);
    const items = transformMetaToItems(meta);
    return { props: { specialty, items }, revalidate: 60 };
}
