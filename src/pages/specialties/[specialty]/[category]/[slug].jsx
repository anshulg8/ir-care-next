import { useRouter } from 'next/router';
import { urologyData } from '@/data/specialties/urology';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BlockRenderer } from '@/components/BlockRenderer';

export default function DetailPage() {
    const router = useRouter();
    const { specialty, category, slug } = router.query;

    if (!specialty || !category || !slug) return <div>Loading...</div>;

    const dataMap = { urology: urologyData };
    const specialtyData = dataMap[specialty];

    const item = specialtyData?.[category]?.bySlug?.[slug];

    if (!item) return <div className="text-center py-10 text-gray-600">Item not found</div>;

    const { page, metadata, blocks, overview } = item;

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/specialties/${specialty}/${category}` },
        { label: metadata?.title || item.title }
    ];

    return (
        <>
            <SEO
                title={metadata?.title || item.title}
                description={metadata?.description || overview?.whatItIs || ''}
                url={`https://mydocsy.com${page?.slug || ''}`}
            />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <Breadcrumbs items={breadcrumbs} />

                {blocks?.length > 0 ? blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                )) : (
                    <p className="text-gray-600">Overview coming soon.</p>
                )}
            </div>
        </>
    );
}
