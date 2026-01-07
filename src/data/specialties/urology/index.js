import { symptoms } from "./symptoms";
import { conditions } from "./conditions";
import { procedures } from "./procedures";

export const urologyData = {
    specialty: "urology",

    symptoms: {
        category: "symptoms",
        ...symptoms
    },

    conditions: {
        category: "conditions",
        ...conditions
    },

    procedures: {
        category: "procedures",
        ...procedures
    }
};
