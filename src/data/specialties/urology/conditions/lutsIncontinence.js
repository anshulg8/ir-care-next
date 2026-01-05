const lutsIncontinence = {
    id: "luts-incontinence",
    title: "Urinary Incontinence (LUTS)",
    slug: "luts-incontinence",

    meta: {
        title: "Urinary Incontinence: Causes & Treatment | MyDocsy",
        description:
            "Urinary incontinence includes stress, urge, and mixed leakage. Learn evaluation and non-surgical treatments."
    },

    overview: {
        whatItIs:
            "Urinary incontinence is involuntary leakage of urine due to bladder or pelvic floor dysfunction.",
        keyPoint:
            "Most incontinence cases can be managed without surgery."
    },

    evaluation: {
        steps: [
            "Bladder diary",
            "Urine test",
            "Ultrasound if required"
        ]
    },

    treatmentPathways: [
        {
            id: "conservative",
            title: "Pelvic floor therapy",
            procedures: ["pelvic-floor-biofeedback"]
        }
    ],

    relations: {
        symptoms: ["urine-leakage", "frequent-urination"],
        procedures: ["pelvic-floor-biofeedback"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default lutsIncontinence;
