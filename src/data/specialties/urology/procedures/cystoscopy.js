const cystoscopy = {
    id: "cystoscopy",
    title: "Cystoscopy",
    slug: "cystoscopy",

    meta: {
        title: "Cystoscopy: Procedure & Indications | MyDocsy",
        description:
            "Cystoscopy allows direct visualization of the bladder and urethra."
    },

    overview: {
        whatItIs:
            "A thin camera is passed into the bladder through the urethra.",
        anesthesia: "Local / sedation",
        hospitalStay: "Outpatient"
    },

    indications: [
        "Blood in urine",
        "Recurrent UTIs"
    ],

    suitability: [
        "Diagnostic evaluation"
    ],

    benefits: [
        "Direct diagnosis"
    ],

    risks: [
        "Temporary discomfort",
        "UTI"
    ],

    relations: {
        symptoms: ["blood-in-urine", "recurrent-uti"],
        conditions: ["urologic-cancers"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default cystoscopy;
