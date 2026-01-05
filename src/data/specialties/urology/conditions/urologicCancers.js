const urologicCancers = {
    id: "urologic-cancers",
    title: "Urologic Cancers",
    slug: "urologic-cancers",

    meta: {
        title: "Urologic Cancers: Symptoms & Diagnosis | MyDocsy",
        description:
            "Includes cancers of the bladder, kidney, prostate, and urinary tract."
    },

    overview: {
        whatItIs:
            "Urologic cancers affect the urinary system and male reproductive organs.",
        keyPoint:
            "Blood in urine is a common early warning sign."
    },


    evaluation: {
        steps: [
            "Imaging studies",
            "Cystoscopy",
            "Biopsy"
        ]
    },

    treatmentPathways: [],

    relations: {
        symptoms: ["blood-in-urine"],
        procedures: ["cystoscopy"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default urologicCancers;
