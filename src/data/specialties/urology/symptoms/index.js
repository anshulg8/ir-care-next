import frequentUrination from "./frequentUrination";
import difficultyUrinating from "./difficultyUrinating";
import urineLeakage from "./urineLeakage";
import recurrentUti from "./recurrentUti";
import flankPain from "./flankPain";
import bloodInUrine from "./bloodInUrine";

export const symptomsList = [
    frequentUrination,
    difficultyUrinating,
    urineLeakage,
    recurrentUti,
    flankPain,
    bloodInUrine
];

export const symptomsById = Object.fromEntries(
    symptomsList.map(s => [s.id, s])
);

export const symptomsBySlug = Object.fromEntries(
    symptomsList.map(s => [s.slug, s])
);
