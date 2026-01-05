const bloodInUrine = {
    id: "blood-in-urine",
    title: "Blood in Urine (Hematuria)",
    slug: "blood-in-urine",

    meta: {
        title: "Blood in Urine: Causes & Evaluation | MyDocsy",
        description:
            "Blood in urine always needs evaluation. Learn causes and next steps."
    },

    hero: {
        heading: "Blood in urine is never normal",
        intro:
            "Even painless blood in urine needs timely evaluation."
    },

    sections: {
        patterns: [
            {
                id: "painless-blood",
                title: "Painless blood in urine",
                suggests: ["urologic-cancer"],
                summary:
                    "Needs urgent evaluation.",
                nextLinks: []
            }
        ]
    },

    relations: {
        conditions: ["kidney-stones", "urologic-cancers"],
        procedures: ["cystoscopy"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default bloodInUrine;
