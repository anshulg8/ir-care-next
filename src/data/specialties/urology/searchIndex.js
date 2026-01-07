// data/specialties/urology/searchIndex.js

import { urologyData } from ".";

export const urologySearchIndex = [
    // Procedures
    ...urologyData.procedures.list.map((item) => ({
        title: item.title || "",
        description: item.overview?.whatItIs || "",
        slug: item.slug || "",
        type: "procedure",
    })),

    // Conditions
    ...urologyData.conditions.list.map((item) => ({
        title: item.title || "",
        description: item.overview?.whatItIs || "",
        slug: item.slug || "",
        type: "condition",
    })),

    // Symptoms
    ...urologyData.symptoms.list.map((item) => ({
        title: item.title || "",
        description: item.overview?.whatItIs || "",
        slug: item.slug || "",
        type: "symptom",
    })),
];
