const flankPain = {
    id: "flank-pain",
    title: "Flank Pain / Stone Pain",
    slug: "flank-pain",

    meta: {
        title: "Flank Pain & Kidney Stones: Symptoms & Treatment | MyDocsy",
        description:
            "Severe flank pain may indicate kidney stones. Learn red flags and evaluation steps."
    },

    hero: {
        heading: "Severe flank pain should never be ignored",
        intro:
            "Sudden severe pain radiating to the groin often points to kidney stones."
    },

    sections: {
        patterns: [
            {
                id: "colicky-pain",
                title: "Sudden severe colicky pain",
                suggests: ["kidney-stones"],
                summary:
                    "Classic presentation of stone disease.",
                nextLinks: []
            }
        ],

        redFlags: {
            title: "Urgent symptoms",
            items: [
                "Fever with pain",
                "Vomiting",
                "Decreased urine output"
            ]
        }
    },

    relations: {
        conditions: ["kidney-stones"],
        procedures: ["rirs", "ursl", "mini-pcnl"]
    },

    cta: {
        primary: "whatsapp",
        secondary: ["book-consult"]
    }
};

export default flankPain;
