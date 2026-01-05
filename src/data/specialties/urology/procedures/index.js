import pae from "./pae";
import rezum from "./rezum";
import turp from "./turp";
import holep from "./holep";
import rirs from "./rirs";
import ursl from "./ursl";
import miniPcnl from "./miniPcnl";
import pelvicFloorBiofeedback from "./pelvicFloorBiofeedback";
import kidneyTumorAblation from "./kidneyTumorAblation";
import cystoscopy from "./cystoscopy";

export const proceduresList = [
    pae,
    rezum,
    turp,
    holep,
    rirs,
    ursl,
    miniPcnl,
    pelvicFloorBiofeedback,
    kidneyTumorAblation,
    cystoscopy
];

export const proceduresById = Object.fromEntries(
    proceduresList.map(p => [p.id, p])
);

export const proceduresBySlug = Object.fromEntries(
    proceduresList.map(p => [p.slug, p])
);
