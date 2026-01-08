// src/pages/specialties/[specialty]/procedures/[slug].jsx
import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEO from '@/components/SEO';
import fs from "fs";
import path from "path";
import { titleCase } from '@/lib/utils';
import { BlockRenderer } from '@/components/BlockRenderer';

export default function ProcedurePage({ content }) {
    const router = useRouter();
    const { specialty, slug } = router.query;

    if (!content) {
        return (
            <div className="text-center py-10 text-gray-600">
                Content coming soon.
            </div>
        );
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Specialties', href: '/specialties' },
        { label: specialty.charAt(0).toUpperCase() + specialty.slice(1), href: `/specialties/${specialty}` },
        { label: 'Procedures', href: `/specialties/${specialty}/procedures` },
        { label: titleCase(slug) },
    ];

    return (
        <>
            <SEO
                title={content.metadata.title}
                description={content.metadata.description}
                url={`https://mydocsy.com/specialties/${specialty}/procedures/${slug}`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />
                {/* <h1 className="text-3xl font-bold mb-4">{content.metadata.title}</h1> */}

                <div className="prose max-w-full">
                    <div className="max-w-full">
                        {content.blocks.map((block, index) => (
                            <BlockRenderer key={index} block={block} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const baseDir = path.join(
        process.cwd(),
        "src/data/specialties/urology/procedures/content"
    );

    const slugs = fs
        .readdirSync(baseDir)
        .filter(f => f.endsWith(".js"))
        .map(f => f.replace(".js", ""));

    const paths = slugs.map(slug => ({
        params: { specialty: "urology", slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { specialty, slug } = params;

    try {
        const module = await import(`@/data/specialties/${specialty}/procedures/content/${slug}.js`);
        return { props: { content: module.default } };
    } catch (error) {
        console.warn(`Procedure content not found for slug=${slug}`);
        return { props: { content: null } };
    }
}
