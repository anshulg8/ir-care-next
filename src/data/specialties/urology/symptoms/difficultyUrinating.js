const difficultyUrinating = {
    id: "difficulty-urinating",
    title: "Difficulty Urinating, Weak Stream & Straining",
    slug: "difficulty-urinating",

    meta: {
        title:
            "Difficulty Urinating & Weak Urine Stream: Causes & Treatment | MyDocsy",
        description:
            "Difficulty urinating, weak stream, or straining are common urinary symptoms in men. Learn causes, red flags, evaluation, and safe treatment pathways."
    },

    hero: {
        heading:
            "Difficulty urinating or weak urine stream: understanding what it means",
        intro:
            "Difficulty starting urine flow, straining, or a weak stream often develops gradually. Early evaluation can prevent bladder and kidney complications."
    },

    sections: {
        definition: {
            title: "How difficulty urinating commonly presents",
            bullets: [
                "Delay before urine starts",
                "Weak or thin urine stream",
                "Intermittent flow (stopping and starting)",
                "Straining to pass urine",
                "Feeling of incomplete bladder emptying"
            ]
        },

        patterns: [
            {
                id: "progressive-weak-stream",
                title: "Gradually worsening weak stream (men over 40)",
                suggests: ["bph"],
                summary:
                    "Most commonly caused by benign prostate enlargement.",
                nextLinks: ["/urology/conditions/bph"]
            },
            {
                id: "sudden-inability-to-urinate",
                title: "Sudden inability to pass urine",
                suggests: ["acute-retention"],
                summary:
                    "A medical emergency that needs immediate catheterization.",
                nextLinks: []
            },
            {
                id: "straining-with-frequency",
                title: "Straining with frequent urination",
                suggests: ["bph", "bladder-dysfunction"],
                summary:
                    "Can reflect bladder outlet obstruction or poor bladder contraction.",
                nextLinks: ["/urology/conditions/bph"]
            }
        ],

        redFlags: {
            title: "When to seek urgent care",
            items: [
                "Complete inability to urinate",
                "Painful bladder distension",
                "Fever with urinary obstruction",
                "Vomiting or flank pain"
            ]
        },

        evaluation: {
            title: "How this symptom is evaluated",
            steps: [
                "Symptom scoring (LUTS questionnaire)",
                "Urine routine examination",
                "Ultrasound of kidneys, bladder, and prostate",
                "Post-void residual measurement",
                "Uroflowmetry when required"
            ]
        }
    },

    relations: {
        conditions: ["bph"],
        procedures: ["pae", "rezum", "turp", "holep"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default difficultyUrinating;
