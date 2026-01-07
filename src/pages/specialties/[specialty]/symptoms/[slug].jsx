import { useRouter } from 'next/router';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { urologyData } from '@/data/specialties/urology';
import { BlockRenderer } from '@/components/BlockRenderer';

export default function SymptomDetailPage() {
    const router = useRouter();
    const { specialty, slug } = router.query;

    if (!specialty || !slug) return <div>Loading...</div>;

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

    const { page, metadata, blocks } = symptom;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: 'Symptoms', href: `/specialties/${specialty}/symptoms` },
        { label: blocks[0].title },
    ];

    return (
        <>
            <SEO
                title={metadata.title}
                description={metadata.description}
                url={`https://mydocsy.com${page.slug}`}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <Breadcrumbs items={breadcrumbs} />

                {blocks.length > 0 ? (
                    blocks.map((block, i) => <BlockRenderer key={i} block={block} />)
                ) : (
                    <p className="text-gray-600">Content coming soon.</p>
                )}
            </div>
        </>
    );
}
