const urineLeakage = {
    id: "urine-leakage",
    title: "Urine Leakage (Incontinence)",
    slug: "urine-leakage",

    meta: {
        title:
            "Urine Leakage & Incontinence: Causes & Treatment Options | MyDocsy",
        description:
            "Urine leakage can occur with coughing, urgency, or continuously. Learn types, evaluation, and modern non-surgical treatments."
    },

    hero: {
        heading: "Urine leakage is common — and treatable",
        intro:
            "Many people live silently with urine leakage. Understanding the type of incontinence is the first step to effective treatment."
    },

    sections: {
        definition: {
            title: "Types of urine leakage",
            bullets: [
                "Stress incontinence (leakage with cough or exertion)",
                "Urge incontinence (leakage with sudden urgency)",
                "Mixed incontinence",
                "Continuous leakage (rare)"
            ]
        },

        patterns: [
            {
                id: "leak-with-cough",
                title: "Leakage with coughing or exercise",
                suggests: ["stress-incontinence"],
                summary:
                    "Often due to pelvic floor weakness.",
                nextLinks: ["/urology/procedures/pelvic-floor-biofeedback"]
            },
            {
                id: "urge-leakage",
                title: "Leakage with sudden urgency",
                suggests: ["urge-incontinence"],
                summary:
                    "Commonly related to overactive bladder.",
                nextLinks: []
            }
        ],

        evaluation: {
            title: "How incontinence is assessed",
            steps: [
                "Detailed symptom history",
                "Bladder diary",
                "Urine examination",
                "Ultrasound when indicated"
            ]
        }
    },

    relations: {
        conditions: ["luts-incontinence"],
        procedures: ["pelvic-floor-biofeedback"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default urineLeakage;
