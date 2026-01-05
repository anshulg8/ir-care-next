const kidneyStones = {
    id: "kidney-stones",
    title: "Kidney Stones",
    slug: "kidney-stones",

    meta: {
        title: "Kidney Stones: Symptoms & Treatment | MyDocsy",
        description:
            "Kidney stones can cause severe pain, infection, or obstruction. Learn evaluation and modern treatment options."
    },

    overview: {
        whatItIs:
            "Kidney stones are hard mineral deposits that form in the kidneys and may obstruct urine flow.",
        keyPoint:
            "Stone size, location, and infection status guide treatment."
    },
    evaluation: {
        steps: [
            "Urine examination",
            "Ultrasound of kidneys and bladder",
            "CT scan for stone mapping"
        ]
    },

    treatmentPathways: [
        {
            id: "conservative",
            title: "Observation & medical therapy",
            procedures: []
        },
        {
            id: "endoscopic",
            title: "Endoscopic stone removal",
            procedures: ["ursl", "rirs"]
        },
        {
            id: "percutaneous",
            title: "Percutaneous stone removal",
            procedures: ["mini-pcnl"]
        }
    ],

    relations: {
        symptoms: ["flank-pain", "blood-in-urine", "recurrent-uti"],
        procedures: ["ursl", "rirs", "mini-pcnl"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default kidneyStones;
