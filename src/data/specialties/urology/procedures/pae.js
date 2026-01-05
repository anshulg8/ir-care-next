const pae = {
    id: "pae",

    title: "Prostate Artery Embolization (PAE)",
    slug: "pae",

    meta: {
        title: "Prostate Artery Embolization (PAE) | MyDocsy",
        description:
            "PAE is a minimally invasive, non-surgical treatment for enlarged prostate (BPH)."
    },

    overview: {
        whatItIs:
            "PAE reduces prostate size by blocking blood supply using image-guided techniques.",
        anesthesia: "Local anesthesia",
        hospitalStay: "Day care or overnight"
    },

    indications: [
        "Moderate to severe BPH symptoms",
        "Patients unfit or unwilling for surgery"
    ],

    suitability: [
        "Large prostate size",
        "Preserved bladder function"
    ],

    benefits: [
        "No surgical incision",
        "Lower sexual side effects",
        "Quick recovery"
    ],

    risks: [
        "Temporary urinary symptoms",
        "Rare non-target embolization"
    ],

    relations: {
        symptoms: ["difficulty-urinating", "frequent-urination"],
        conditions: ["bph"]
    },

    cta: {
        primary: "candidacy-check",
        secondary: ["book-consult"]
    }
};

export default pae;
