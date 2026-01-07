import frequentUrination from "./frequentUrination";
import difficultyUrinating from "./difficultyUrinating";
import urineLeakage from "./urineLeakage";
import recurrentUti from "./recurrentUti";
import flankPain from "./flankPain";
import bloodInUrine from "./bloodInUrine";

const symptomsPages = [
    frequentUrination,
    difficultyUrinating,
    urineLeakage,
    recurrentUti,
    flankPain,
    bloodInUrine
];

export const symptoms = {
    list: symptomsPages.map((page) => ({
        title: page.blocks[0]?.title || page.metadata?.title || page.title,
        slug: page.page?.slug?.split("/").pop(),
        overview: {
            whatItIs: page.metadata?.content || page.metadata?.description || "Overview coming soon."
        },
        id: page.id || page.page?.slug?.split("/").pop(),
    })),
    bySlug: symptomsPages.reduce((acc, page) => {
        const slug = page.page?.slug?.split("/").pop();
        if (slug) {
            acc[slug] = {
                ...page,
                overview: {
                    whatItIs: page.metadata?.content || page.metadata?.description || "Overview coming soon."
                }
            };
        }
        return acc;
    }, {})
};