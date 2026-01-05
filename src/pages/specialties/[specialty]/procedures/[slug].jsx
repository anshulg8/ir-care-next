import { useRouter } from 'next/router';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { urologyData } from '@/data/specialties/urology';

export default function ProcedureDetailPage() {
    const router = useRouter();
    const { specialty, slug } = router.query;

    if (!specialty || !slug) return null;

    const specialtyMap = { urology: urologyData };
    const specialtyData = specialtyMap[specialty];

    if (!specialtyData) {
        router.replace('/404');
        return null;
    }

    const procedure = specialtyData.procedures.bySlug[slug];
    if (!procedure) {
        router.replace('/404');
        return null;
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: 'Urology', href: `/specialties/${specialty}` },
        { label: 'Procedures', href: `/specialties/${specialty}/procedures` },
        { label: procedure.title }
    ];

    return (
        <>
            <SEO
                title={procedure.meta.title}
                description={procedure.meta.description}
                url={`https://mydocsy.com/specialties/${specialty}/procedures/${slug}`}
                schemaMarkup={{
                    "@context": "https://schema.org",
                    "@type": "MedicalProcedure",
                    "name": procedure.title,
                    "description": procedure.meta.description
                }}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <Breadcrumbs items={breadcrumbs} />

                <h1 className="text-4xl font-bold mb-4">{procedure.title}</h1>
                <p className="text-gray-600 mb-8">{procedure.meta.description}</p>

                <section className="bg-white border rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-3">About the Procedure</h2>
                    <p>{procedure.overview.whatItIs}</p>
                    <p className="mt-3 text-sm text-gray-600">
                        <strong>Anesthesia:</strong> {procedure.overview.anesthesia}<br />
                        <strong>Hospital stay:</strong> {procedure.overview.hospitalStay}
                    </p>
                </section>

                {procedure.indications && (
                    <section className="bg-white border rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Indications</h2>
                        <ul className="list-disc list-inside">
                            {procedure.indications.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </section>
                )}

                {procedure.benefits && (
                    <section className="bg-white border rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
                        <ul className="list-disc list-inside">
                            {procedure.benefits.map(b => <li key={b}>{b}</li>)}
                        </ul>
                    </section>
                )}

                {procedure.risks && (
                    <section className="bg-white border rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-3">Risks</h2>
                        <ul className="list-disc list-inside">
                            {procedure.risks.map(r => <li key={r}>{r}</li>)}
                        </ul>
                    </section>
                )}
            </div>
        </>
    );
}
