import { useRouter } from 'next/router';
import { conditions } from '@/data/specialties/urology/conditions';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BlockRenderer } from '@/components/BlockRenderer';
import GoogleFormWithProcedureInput from '@/components/GoogleFormWithProcedureInput';

export default function ConditionDetailPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) return <div>Loading...</div>;

    const condition = conditions.bySlug[slug];
    if (!condition) return <div className="text-center py-10">Condition not found.</div>;

    const { page, metadata, blocks, overview } = condition;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: 'Urology', href: '/specialties/urology' },
        { label: 'Conditions', href: '/specialties/urology/conditions' },
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
                {/* <GoogleFormWithProcedureInput procedure={`${blocks[0].title}`} /> <br /> */}
                {/* <h1 className="text-3xl font-bold mb-6">{metadata.title}</h1>
                <p className="text-gray-600 mb-8">{overview?.whatItIs}</p> */}
                {blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
                {/* <GoogleFormWithProcedureInput procedure={`${blocks[0].title}`} /> */}
            </div>
        </>
    );
}
