const holep = {
    id: "holep",
    title: "HoLEP (Holmium Laser Enucleation of Prostate)",
    slug: "holep",

    meta: {
        title: "HoLEP Laser Surgery for BPH | MyDocsy",
        description:
            "HoLEP is an advanced laser surgery suitable for large prostates."
    },

    overview: {
        whatItIs:
            "Laser enucleation removes the obstructing prostate tissue completely.",
        anesthesia: "Spinal / general",
        hospitalStay: "1–2 days"
    },

    indications: [
        "Moderate to severe BPH",
        "Large prostate size"
    ],

    suitability: [
        "Patients suitable for surgery"
    ],

    benefits: [
        "Durable results",
        "Minimal bleeding"
    ],

    risks: [
        "Temporary incontinence",
        "Retrograde ejaculation"
    ],

    relations: {
        symptoms: ["difficulty-urinating"],
        conditions: ["bph"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["candidacy-check"]
    }
};

export default holep;
