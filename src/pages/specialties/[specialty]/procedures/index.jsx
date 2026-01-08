import React from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

/**
 * Load meta for a specialty (descriptive only)
 */
async function loadMeta(specialty) {
    try {
        const module = await import(
            `@/data/specialties/${specialty}/procedures/_meta.js`
        );
        return module.default;
    } catch (error) {
        console.error(`Meta not found for specialty=${specialty}`, error);
        return null;
    }
}

export default function ProceduresIndexPage({ specialty, items }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!items?.length) {
        return (
            <div className="text-center py-10 text-gray-600">
                No procedures found.
            </div>
        );
    }

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Specialties", href: "/specialties" },
        {
            label: specialty.charAt(0).toUpperCase() + specialty.slice(1),
            href: `/specialties/${specialty}`,
        },
        { label: "Procedures" },
    ];

    return (
        <>
            <SEO
                title={`Procedures | ${specialty.charAt(0).toUpperCase() + specialty.slice(1)
                    } | Docsy`}
                description={`List of procedures in ${specialty}.`}
                url={`https://mydocsy.com/specialties/${specialty}/procedures`}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbs} />

                <section className="bg-white py-12 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-teal-600">Procedures</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Browse procedures in {specialty}.
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border-gray rounded-md shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {item.overview?.whatItIs || "Overview coming soon."}
                            </p>
                            <a
                                href={`/specialties/${specialty}/procedures/${item.slug}`}
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

/**
 * Only specialties define index routes
 */
export async function getStaticPaths() {
    const specialties = ["urology"]; // expand later via filesystem if desired

    return {
        paths: specialties.map((specialty) => ({
            params: { specialty },
        })),
        fallback: false,
    };
}

/**
 * Filesystem is authoritative.
 * Meta is filtered through filesystem slugs.
 */
export async function getStaticProps({ params }) {
    const { specialty } = params;

    // 1️⃣ Read filesystem slugs (authoritative)
    const contentDir = path.join(
        process.cwd(),
        "src/data/specialties",
        specialty,
        "procedures",
        "content"
    );

    let fileSlugs = [];
    try {
        fileSlugs = fs
            .readdirSync(contentDir)
            .filter((f) => f.endsWith(".js"))
            .map((f) => f.replace(".js", ""));
    } catch (error) {
        console.error(`Failed to read procedures for ${specialty}`, error);
    }

    // 2️⃣ Load meta (descriptive)
    const meta = await loadMeta(specialty);

    // 3️⃣ Build items ONLY when file exists
    const items = fileSlugs
        .map((slug) => {
            const metaEntry = Object.values(meta || {}).find((entry) =>
                entry.page.slug.endsWith(`/${slug}`)
            );

            if (!metaEntry) return null;

            return {
                id: slug,
                slug,
                title: metaEntry.metadata.title.split(":")[0],
                overview: {
                    whatItIs:
                        metaEntry.metadata.description.split(". ")[0] + ".",
                },
            };
        })
        .filter(Boolean);

    return {
        props: {
            specialty,
            items,
        },
    };
}
