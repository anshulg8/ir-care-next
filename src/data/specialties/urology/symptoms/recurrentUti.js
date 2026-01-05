const recurrentUti = {
    id: "recurrent-uti",
    title: "Recurrent Urinary Tract Infection (UTI)",
    slug: "recurrent-uti",

    meta: {
        title: "Recurrent UTI: Causes, Tests & Prevention | MyDocsy",
        description:
            "Repeated urinary infections need structured evaluation. Learn causes, tests, and prevention strategies."
    },

    hero: {
        heading: "Repeated UTIs are not normal",
        intro:
            "If urinary infections keep recurring, it’s important to find the underlying cause rather than repeating antibiotics."
    },

    sections: {
        definition: {
            title: "What is considered recurrent UTI?",
            bullets: [
                "Two or more UTIs in 6 months",
                "Three or more UTIs in one year"
            ]
        },

        patterns: [
            {
                id: "burning-frequency",
                title: "Burning and frequency",
                suggests: ["infection"],
                summary:
                    "Needs urine culture before antibiotics.",
                nextLinks: []
            }
        ],

        evaluation: {
            title: "How recurrent UTI is evaluated",
            steps: [
                "Urine culture during symptoms",
                "Ultrasound of kidneys and bladder",
                "CT scan in selected cases",
                "Cystoscopy if indicated"
            ]
        }
    },

    relations: {
        conditions: ["kidney-stones", "bladder-dysfunction"],
        procedures: []
    },

    cta: {
        primary: "book-consult",
        secondary: ["upload-reports"]
    }
};

export default recurrentUti;
