import { useRouter } from 'next/router';
import { procedures } from '@/data/specialties/urology/procedures';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BlockRenderer } from '@/components/BlockRenderer';

export default function ProcedureDetailPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) return <div>Loading...</div>;

    const procedure = procedures.bySlug[slug];
    if (!procedure) return <div className="text-center py-10">Procedure not found.</div>;

    const { page, metadata, blocks, overview } = procedure;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: 'Urology', href: '/specialties/urology' },
        { label: 'Procedures', href: '/specialties/urology/procedures' },
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

                {/* <h1 className="text-3xl font-bold mb-6">{metadata.title}</h1>
                <p className="text-gray-600 mb-8">{overview?.whatItIs}</p> */}

                {blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
            </div>
        </>
    );
}
