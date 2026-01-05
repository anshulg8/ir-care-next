import { useRouter } from 'next/router';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { urologyData } from '@/data/specialties/urology';

export default function ConditionDetailPage() {
    const router = useRouter();
    const { specialty, slug } = router.query;

    if (!specialty || !slug) return null;

    const specialtyMap = { urology: urologyData };
    const specialtyData = specialtyMap[specialty];

    if (!specialtyData) {
        router.replace('/404');
        return null;
    }

    const condition = specialtyData.conditions.bySlug[slug];
    if (!condition) {
        router.replace('/404');
        return null;
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: 'Urology', href: `/specialties/${specialty}` },
        { label: 'Conditions', href: `/specialties/${specialty}/conditions` },
        { label: condition.title }
    ];

    return (
        <>
            <SEO
                title={condition.meta.title}
                description={condition.meta.description}
                url={`https://mydocsy.com/specialties/${specialty}/conditions/${slug}`}
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "MedicalCondition",
                    "name": condition.title,
                    "description": condition.meta.description
                }}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <Breadcrumbs items={breadcrumbs} />

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {condition.title}
                </h1>
                <p className="text-gray-600 mb-8">
                    {condition.meta.description}
                </p>

                {condition.overview && (
                    <section className="bg-white border rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                        <p>{condition.overview.whatItIs}</p>
                        {condition.overview.keyPoint && (
                            <p className="mt-3 text-teal-600 font-medium">
                                {condition.overview.keyPoint}
                            </p>
                        )}
                    </section>
                )}

                {condition.evaluation?.steps && (
                    <section className="bg-white border rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Evaluation</h2>
                        <ul className="list-decimal list-inside space-y-1">
                            {condition.evaluation.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {condition.treatmentPathways?.length > 0 && (
                    <section className="bg-white border rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Treatment Options</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {condition.treatmentPathways.map(tp => (
                                <div key={tp.id} className="border rounded-md p-4">
                                    <h3 className="font-semibold mb-2">{tp.title}</h3>
                                    {tp.procedures.length > 0 ? (
                                        <ul className="list-disc list-inside text-sm">
                                            {tp.procedures.map(p => (
                                                <li key={p}>{p}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-500">
                                            Conservative / medical management
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
