const kidneyTumor = {
    id: "kidney-tumor",
    title: "Kidney Tumor",
    slug: "kidney-tumor",

    meta: {
        title: "Kidney Tumor: Diagnosis & Treatment | MyDocsy",
        description:
            "Kidney tumors are often detected incidentally. Learn evaluation and kidney-preserving treatment options."
    },

    overview: {
        whatItIs:
            "A kidney tumor is an abnormal growth in the kidney, which may be benign or cancerous.",
        keyPoint:
            "Early detection allows kidney-sparing treatments."
    },

    evaluation: {
        steps: [
            "Contrast CT scan",
            "Blood tests",
            "Biopsy in selected cases"
        ]
    },

    treatmentPathways: [
        {
            id: "ablation",
            title: "Tumor ablation",
            procedures: ["kidney-tumor-ablation"]
        },
        {
            id: "surgery",
            title: "Surgical removal",
            procedures: []
        }
    ],

    relations: {
        symptoms: ["blood-in-urine", "flank-pain"],
        procedures: ["kidney-tumor-ablation"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["upload-reports"]
    }
};

export default kidneyTumor;
