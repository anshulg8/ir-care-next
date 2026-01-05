const rirs = {
    id: "rirs",

    title: "RIRS (Retrograde Intrarenal Surgery)",
    slug: "rirs",

    meta: {
        title: "RIRS for Kidney Stones | MyDocsy",
        description:
            "RIRS is a minimally invasive procedure to remove kidney stones."
    },

    overview: {
        whatItIs:
            "Flexible endoscope is passed through urine passage to fragment stones.",
        anesthesia: "General",
        hospitalStay: "Day care / overnight"
    },

    indications: [
        "Kidney stones up to 2 cm"
    ],

    suitability: [
        "Non-infected stones"
    ],

    benefits: [
        "No incision",
        "Quick recovery"
    ],

    risks: [
        "Infection",
        "Need for stent"
    ],

    relations: {
        symptoms: ["flank-pain"],
        conditions: ["kidney-stones"]
    },

    cta: {
        primary: "book-consult",
        secondary: ["whatsapp"]
    }
};

export default rirs;
