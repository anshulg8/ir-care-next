import React from 'react';
import { useRouter } from 'next/router';
import { urologyData } from '@/data/specialties/urology';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';

export default function CategoryPage() {
    const router = useRouter();
    const { specialty } = router.query;
    const category = router.pathname.split('/').pop(); // 'conditions' / 'procedures' / 'symptoms'

    if (!specialty) return <div>Loading...</div>;

    const dataMap = { urology: urologyData };
    const specialtyData = dataMap[specialty];
    const items = specialtyData?.[category]?.list;

    if (!items) return <div className="text-center py-10 text-gray-600">No items found</div>;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: category.charAt(0).toUpperCase() + category.slice(1) },
    ];

    return (
        <>
            <SEO
                title={`${category.charAt(0).toUpperCase() + category.slice(1)} | ${specialty.charAt(0).toUpperCase() + specialty.slice(1)} | Docsy`}
                description={`List of ${category} in ${specialty}.`}
                url={`https://mydocsy.com/specialties/${specialty}/${category}`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />

                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Browse specialties, learn about conditions, and discover procedures for better patient outcomes.
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                        <div
                            key={item.id}
                            className="bg-white border-gray rounded-md shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
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
        </>
    );
}
