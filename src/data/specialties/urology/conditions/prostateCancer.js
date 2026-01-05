const prostateCancer = {
    id: "prostate-cancer",
    title: "Prostate Cancer",
    slug: "prostate-cancer",

    meta: {
        title: "Prostate Cancer: Screening & Treatment | MyDocsy",
        description:
            "Prostate cancer is often slow-growing and treatable when detected early."
    },

    overview: {
        whatItIs:
            "Prostate cancer arises from abnormal growth of prostate cells.",
        keyPoint:
            "Early-stage prostate cancer often has excellent outcomes."
    },


    evaluation: {
        steps: [
            "PSA testing",
            "MRI prostate",
            "Prostate biopsy"
        ]
    },

    treatmentPathways: [
        {
            id: "active-surveillance",
            title: "Active surveillance",
            procedures: []
        },
        {
            id: "definitive-treatment",
            title: "Definitive treatment",
            procedures: []
        }
    ],

    relations: {
        symptoms: ["difficulty-urinating", "blood-in-urine"],
        procedures: []
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default prostateCancer;
