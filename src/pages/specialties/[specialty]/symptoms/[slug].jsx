import { useRouter } from 'next/router';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { urologyData } from '@/data/specialties/urology';

export default function SymptomDetailPage() {
    const router = useRouter();
    const { specialty, slug } = router.query;

    if (!specialty || !slug) return null;

    const specialtyMap = { urology: urologyData };
    const specialtyData = specialtyMap[specialty];

    if (!specialtyData) {
        router.replace('/404');
        return null;
    }

    const symptom = specialtyData.symptoms.bySlug[slug];
    if (!symptom) {
        router.replace('/404');
        return null;
    }

    const { meta, hero, sections, relations } = symptom;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: 'Urology', href: `/specialties/${specialty}` },
        { label: 'Symptoms', href: `/specialties/${specialty}/symptoms` },
        { label: symptom.title }
    ];

    return (
        <>
            <SEO
                title={meta.title}
                description={meta.description}
                url={`https://mydocsy.com/specialties/${specialty}/symptoms/${slug}`}
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "MedicalSymptom",
                    "name": symptom.title,
                    "description": meta.description
                }}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <Breadcrumbs items={breadcrumbs} />

                {/* Hero */}
                <section className="mb-10">
                    <h1 className="text-4xl font-bold mb-4">{hero.heading}</h1>
                    <p className="text-gray-600 max-w-3xl">{hero.intro}</p>
                </section>

                {/* Definition */}
                {sections?.definition && (
                    <section className="bg-white border rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            {sections.definition.title}
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            {sections.definition.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Patterns */}
                {sections?.patterns?.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-6">
                            Common patterns doctors look for
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {sections.patterns.map(pattern => (
                                <div
                                    key={pattern.id}
                                    className="border rounded-lg p-5 bg-white"
                                >
                                    <h3 className="font-semibold mb-2">
                                        {pattern.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {pattern.summary}
                                    </p>

                                    {pattern.nextLinks?.length > 0 && (
                                        <div className="text-sm">
                                            <span className="font-medium">
                                                Learn more:
                                            </span>
                                            <ul className="list-disc list-inside mt-1">
                                                {pattern.nextLinks.map(link => (
                                                    <li key={link}>
                                                        <Link
                                                            href={`/specialties/${link}`}
                                                            className="text-teal-600 hover:underline"
                                                        >
                                                            {link}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Red Flags */}
                {sections?.redFlags && (
                    <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
                        <h2 className="text-2xl font-semibold text-red-700 mb-4">
                            {sections.redFlags.title}
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-red-700">
                            {sections.redFlags.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Evaluation */}
                {sections?.evaluation && (
                    <section className="bg-white border rounded-lg p-6 mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            {sections.evaluation.title}
                        </h2>
                        <ol className="list-decimal list-inside space-y-1">
                            {sections.evaluation.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </section>
                )}

                {/* Self Care */}
                {sections?.selfCare && (
                    <section className="bg-white border rounded-lg p-6 mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            {sections.selfCare.title}
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            {sections.selfCare.actions.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Related Links */}
                {(relations?.conditions || relations?.procedures) && (
                    <section className="bg-teal-50 border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Related conditions & procedures
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 text-sm">
                            {relations.conditions && (
                                <div>
                                    <h3 className="font-medium mb-2">Conditions</h3>
                                    <ul className="list-disc list-inside">
                                        {relations.conditions.map(c => (
                                            <li key={c}>
                                                <Link
                                                    href={`/specialties/${specialty}/conditions/${c}`}
                                                    className="text-teal-600 hover:underline"
                                                >
                                                    {c.replace(/-/g, ' ')}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {relations.procedures && (
                                <div>
                                    <h3 className="font-medium mb-2">Procedures</h3>
                                    <ul className="list-disc list-inside">
                                        {relations.procedures.map(p => (
                                            <li key={p}>
                                                <Link
                                                    href={`/specialties/${specialty}/procedures/${p}`}
                                                    className="text-teal-600 hover:underline"
                                                >
                                                    {p.replace(/-/g, ' ')}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </div >
        </>
    );
}
