import bph from "./bph";
import kidneyStones from "./kidneyStones";
import lutsIncontinence from "./lutsIncontinence";
import kidneyTumor from "./kidneyTumor";
import prostateCancer from "./prostateCancer";
import urologicCancers from "./urologicCancers";

export const conditionsList = [
    bph,
    kidneyStones,
    lutsIncontinence,
    kidneyTumor,
    prostateCancer,
    urologicCancers
];

export const conditionsById = Object.fromEntries(
    conditionsList.map(c => [c.id, c])
);

export const conditionsBySlug = Object.fromEntries(
    conditionsList.map(c => [c.slug, c])
);
