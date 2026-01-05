import {
    proceduresList,
    proceduresById,
    proceduresBySlug,
} from "./procedures";

import {
    conditionsList,
    conditionsById,
    conditionsBySlug,
} from "./conditions";

import {
    symptomsList,
    symptomsById,
    symptomsBySlug,
} from "./symptoms";

export const urologyData = {
    specialty: "urology",

    symptoms: {
        category: "symptoms",
        list: symptomsList,
        byId: symptomsById,
        bySlug: symptomsBySlug,
    },

    conditions: {
        category: "conditions",
        list: conditionsList,
        byId: conditionsById,
        bySlug: conditionsBySlug,
    },

    procedures: {
        category: "procedures",
        list: proceduresList,
        byId: proceduresById,
        bySlug: proceduresBySlug,
    },
};
