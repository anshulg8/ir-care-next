import bph from "./bph";
import kidneyStones from "./kidneyStones";
import lutsIncontinence from "./lutsIncontinence";
import kidneyTumor from "./kidneyTumor";
import prostateCancer from "./prostateCancer";
import urologicCancers from "./urologicCancers";

const conditionsPages = [
    bph,
    kidneyStones,
    lutsIncontinence,
    kidneyTumor,
    prostateCancer,
    urologicCancers
];

export const conditions = {
    list: conditionsPages.map((page) => ({
        title: page.blocks[0]?.title || page.metadata?.title || page.title,
        slug: page.page?.slug?.split("/").pop(),
        overview: {
            whatItIs: page.blocks[0]?.content || page.metadata?.description || "Overview coming soon."
        },
        id: page.id || page.page?.slug?.split("/").pop(),
    })),
    bySlug: conditionsPages.reduce((acc, page) => {
        const slug = page.page?.slug?.split("/").pop();
        if (slug) {
            acc[slug] = {
                ...page,
                overview: {
                    whatItIs: page.blocks[0]?.content || page.metadata?.description || "Overview coming soon."
                }
            };
        }
        return acc;
    }, {})
};