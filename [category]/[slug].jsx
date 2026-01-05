import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';
import { urologyData } from '@/data/specialties/urology';
import GoogleFormSubmit from '@/components/GoogleFormSubmit';

export default function ItemPage() {
    const router = useRouter();
    const { specialty, category, slug } = router.query;

    if (!specialty || !category || !slug) return <div>Loading...</div>;

    const dataMap = { urology: urologyData };
    const specialtyData = dataMap[specialty];
    const item = specialtyData?.[category]?.bySlug?.[slug];

    if (!item)
        return <div className="text-center py-10 text-gray-600">Item not found</div>;

    // Breadcrumbs for UI
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/specialties/${specialty}/${category}` },
        { label: item.title }, // current page, no href
    ];

    // Breadcrumbs JSON-LD for SEO
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: crumb.label,
            ...(crumb.href && { item: `https://mydocsy.com${crumb.href}` }),
        })),
    };

    return (
        <>
            <SEO
                title={`${item.title} | ${specialty.charAt(0).toUpperCase() + specialty.slice(1)} | Docsy`}
                description={item.meta.description}
                url={`https://mydocsy.com/specialties/${specialty}/${category}/${slug}`}
                schemaMarkup={breadcrumbSchema} // ⚡ fixed here
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />

                {/* Title & Description */}
                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">{item.title}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            {item.meta.description}
                        </p>
                    </div>
                </section>

                {/* Overview */}
                {item.overview && (
                    <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>

                        <p className="text-gray-700 mb-4">{item.overview.whatItIs}</p>

                        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                            {item.overview.anesthesia && (
                                <div>
                                    <span className="font-medium">Anesthesia:</span> {item.overview.anesthesia}
                                </div>
                            )}
                            {item.overview.hospitalStay && (
                                <div>
                                    <span className="font-medium">Hospital stay:</span> {item.overview.hospitalStay}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* <GoogleFormSubmit procedure={`${specialty}-${category}-${slug}`} /> */}

                {item.indications?.length > 0 && (
                    <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Indications</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {item.indications.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {item.suitability?.length > 0 && (
                    <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who Is It Suitable For?</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {item.suitability.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {item.benefits?.length > 0 && (
                    <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefits</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {item.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {item.risks?.length > 0 && (
                    <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Risks & Considerations</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {item.risks.map((risk, i) => (
                                <li key={i}>{risk}</li>
                            ))}
                        </ul>
                    </section>
                )}


                {/* Symptoms / Patterns */}
                {
                    item.sections?.patterns && (
                        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border-gray">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Symptoms / Patterns</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {item.sections.patterns.map(pattern => (
                                    <li key={pattern.id}>{pattern.title}</li>
                                ))}
                            </ul>
                        </section>
                    )
                }

                {/* Evaluation / Steps */}
                {
                    item.evaluation?.steps && (
                        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border-gray">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Evaluation</h2>
                            <ul className="list-decimal list-inside space-y-1 text-gray-700">
                                {item.evaluation.steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>
                        </section>
                    )
                }

                {/* Treatment Pathways */}
                {
                    item.treatmentPathways?.length > 0 && (
                        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border-gray">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Treatment Pathways</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {item.treatmentPathways.map(pathway => (
                                    <div key={pathway.id} className="p-4 border-gray rounded-md hover:shadow-md transition">
                                        <h3 className="font-semibold text-gray-900 mb-2">{pathway.title}</h3>
                                        {pathway.procedures.length > 0 ? (
                                            <ul className="list-disc list-inside text-gray-700">
                                                {pathway.procedures.map(proc => (
                                                    <li key={proc}>{proc}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600">-</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                }

                {/* CTA Buttons */}
                {
                    item.cta && (
                        <div className="flex flex-wrap gap-4 mb-8">
                            {item.cta.primary && (
                                <button className="px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition">
                                    {item.cta.primary.replace('-', ' ')}
                                </button>
                            )}
                            {item.cta.secondary?.map(sec => (
                                <button
                                    key={sec}
                                    className="px-6 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition"
                                >
                                    {sec.replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    )
                }
            </div >
        </>
    );
}
