import { medicalData } from "../../data";


export function loadMedicalPage({
    specialty,
    entityType,
    id,
}) {
    const specialtyData = medicalData[specialty];
    if (!specialtyData) return null;

    const entityKey = ENTITY_MAP[entityType];
    if (!entityKey) return null;

    const entityStore = specialtyData[entityKey];
    if (!entityStore) return null;

    const item = entityStore.byId[id];
    if (!item) return null;

    return item;
}
