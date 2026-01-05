const frequentUrination = {
    id: "frequent-urination",

    title: "Frequent Urination, Urgency & Nocturia",
    slug: "frequent-urination",

    meta: {
        title:
            "Frequent Urination, Urgency & Nocturia: Causes & Next Steps | MyDocsy",
        description:
            "Frequent urination, urgency, or waking at night can be caused by bladder overactivity, infection, prostate issues, or stones. Learn patterns, red flags, tests, and safe next steps."
    },

    hero: {
        heading:
            "Frequent urination, urgency, or waking at night: how to understand it safely",
        intro:
            "Frequent urination or urgency can quietly disrupt sleep, work, and confidence. Most causes are treatable when approached systematically."
    },

    sections: {
        definition: {
            title: "What does “frequent urination” actually mean?",
            bullets: [
                "Daytime frequency (urinating many times during the day)",
                "Urgency (sudden, hard-to-control urge)",
                "Nocturia (waking from sleep to urinate)",
                "Small voids (frequent trips with little urine)",
                "Urgency with leakage (urge incontinence)"
            ]
        },

        patterns: [
            {
                id: "burning-plus-frequency",
                title: "Frequency with burning or discomfort",
                suggests: ["recurrent-uti"],
                summary:
                    "Often suggests urinary infection or inflammation. Repeated episodes may not always be infection.",
                nextLinks: ["/urology/symptoms/recurrent-uti"]
            },
            {
                id: "urgency-with-or-without-leakage",
                title: "Sudden urgency with or without leakage",
                suggests: ["luts-incontinence"],
                summary:
                    "Common in women but can occur in men. Often related to overactive bladder or pelvic floor coordination.",
                nextLinks: [
                    "/urology/conditions/luts-incontinence",
                    "/urology/procedures/pelvic-floor-biofeedback"
                ]
            },
            {
                id: "nocturia-dominant",
                title: "Waking at night to urinate",
                suggests: ["luts-incontinence", "bph"],
                summary:
                    "May be bladder-related, sleep-related, or due to fluid shifts. In men, prostate obstruction can contribute.",
                nextLinks: ["/urology/conditions/bph"]
            },
            {
                id: "frequency-with-weak-stream",
                title: "Frequency with weak stream or straining (men)",
                suggests: ["bph"],
                summary:
                    "Often indicates bladder outlet obstruction due to prostate enlargement.",
                nextLinks: [
                    "/urology/symptoms/difficulty-urinating",
                    "/urology/conditions/bph"
                ]
            },
            {
                id: "frequency-with-pain-or-blood",
                title: "Frequency with flank pain or blood in urine",
                suggests: ["kidney-stones"],
                summary:
                    "Needs prompt evaluation to rule out stones or infection with obstruction.",
                nextLinks: [
                    "/urology/symptoms/flank-pain-stone",
                    "/urology/symptoms/blood-in-urine"
                ]
            }
        ],

        redFlags: {
            title: "When this is urgent",
            items: [
                "Fever or chills with urinary symptoms",
                "Inability to pass urine",
                "Severe flank pain with fever",
                "Heavy blood or clots in urine",
                "Vomiting, dehydration, fainting"
            ]
        },

        evaluation: {
            title: "What doctors usually check",
            steps: [
                "Detailed symptom history (day vs night, urgency, leakage)",
                "Urine routine and culture",
                "Ultrasound of kidneys and bladder",
                "Post-void residual urine measurement",
                "Additional tests only if needed (uroflow, CT scan)"
            ]
        },

        selfCare: {
            title: "What you can do right now",
            actions: [
                "Maintain a 24-hour bladder diary",
                "Adjust evening fluid timing",
                "Reduce caffeine and alcohol temporarily",
                "Avoid antibiotics without urine testing"
            ]
        }
    },

    relations: {
        conditions: ["luts-incontinence", "bph", "kidney-stones"],
        procedures: ["pelvic-floor-biofeedback", "pae"]
    },

    cta: {
        primary: "whatsapp",
        secondary: ["upload-reports", "book-consult"]
    }
};

export default frequentUrination;
