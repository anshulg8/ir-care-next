// import { urologyData } from "@/data/specialties/urology";

// // Central specialties object
// // Later, you can add proctology, cardiology, etc.
// const specialties = {
//     urology: urologyData,
// };

// export function getItem(specialty, category, slug) {
//     const specialtyData = specialties[specialty];
//     if (!specialtyData) return null;

//     const categoryData = specialtyData[category];
//     if (!categoryData) return null;

//     return categoryData.bySlug[slug] || null;
// }

// export function getAllPaths() {
//     const paths = [];

//     Object.entries(specialties).forEach(([specialtyKey, data]) => {
//         ["conditions", "procedures", "symptoms"].forEach((category) => {
//             const catData = data[category];
//             catData.list.forEach((item) => {
//                 paths.push({ specialty: specialtyKey, category, slug: item.slug });
//             });
//         });
//     });

//     return paths;
// }
