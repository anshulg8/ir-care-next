const kidneyTumorAblation = {
    id: "kidney-tumor-ablation",

    title: "Kidney Tumor Ablation",
    slug: "kidney-tumor-ablation",

    meta: {
        title: "Kidney Tumor Ablation | MyDocsy",
        description:
            "Minimally invasive treatment for small kidney tumors."
    },

    overview: {
        whatItIs:
            "Tumor tissue is destroyed using heat or cold under imaging guidance.",
        anesthesia: "General / sedation",
        hospitalStay: "1–2 days"
    },

    indications: [
        "Small renal tumors"
    ],

    suitability: [
        "Patients unsuitable for surgery"
    ],

    benefits: [
        "Kidney preservation"
    ],

    risks: [
        "Incomplete ablation (rare)"
    ],

    relations: {
        symptoms: ["blood-in-urine"],
        conditions: ["kidney-tumor"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["upload-reports"]
    }
};

export default kidneyTumorAblation;
