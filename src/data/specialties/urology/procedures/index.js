import pae from "./pae";
import rezum from "./rezum";
import turp from "./turp";
import holep from "./holep";
import rirs from "./rirs";
import ursl from "./ursl";
import miniPcnl from "./miniPcnl";
import pelvicFloorBiofeedback from "./pelvicFloorBiofeedback";
import kidneyTumorAblation from "./kidneyTumorAblation";
import cryoablation from "./cryoablation";
import focalTherapy from "./focalTherapy";

const proceduresPages = [
    pae,
    rezum,
    turp,
    holep,
    rirs,
    ursl,
    miniPcnl,
    pelvicFloorBiofeedback,
    kidneyTumorAblation,
    cryoablation,
    focalTherapy
];

export const procedures = {
    list: proceduresPages.map((page) => ({
        title: page.blocks[0]?.title || page.metadata?.title || page.title,
        slug: page.page?.slug?.split("/").pop(),
        overview: {
            whatItIs: page.metadata?.content || page.metadata?.description || "Overview coming soon."
        },
        id: page.id || page.page?.slug?.split("/").pop(),
    })),
    bySlug: proceduresPages.reduce((acc, page) => {
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