const bph = {
    id: "bph",
    title: "Benign Prostate Enlargement (BPH)",
    slug: "bph",

    meta: {
        title: "Benign Prostate Enlargement (BPH) | MyDocsy",
        description:
            "BPH is a common non-cancerous prostate condition causing urinary symptoms in men. Learn evaluation and treatment options."
    },

    overview: {
        whatItIs:
            "Benign Prostate Enlargement (BPH) is a non-cancerous increase in prostate size that narrows the urine passage.",
        keyPoint:
            "BPH is not cancer but can significantly affect quality of life."
    },

    evaluation: {
        steps: [
            "Symptom scoring (LUTS)",
            "Urine routine test",
            "Ultrasound of kidneys, bladder, prostate",
            "Post-void residual urine",
            "PSA testing when indicated"
        ]
    },

    treatmentPathways: [
        {
            id: "medical",
            title: "Medications",
            procedures: []
        },
        {
            id: "minimally-invasive",
            title: "Minimally invasive procedures",
            procedures: ["pae", "rezum"]
        },
        {
            id: "surgical",
            title: "Surgical options",
            procedures: ["turp", "holep"]
        }
    ],

    relations: {
        symptoms: ["difficulty-urinating", "frequent-urination"],
        procedures: ["pae", "rezum", "turp", "holep"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["candidacy-check"]
    }
};

export default bph;
