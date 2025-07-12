// utils/generateDoctorSchema.js

import { BASE_URL } from "@/constants";

export function generateDoctorSchema(doctors) {
    return doctors.map((doc) => {
        return {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": doc.name,
            "description": doc.designation,
            "image": doc.image?.src || undefined,
            "medicalSpecialty": doc.specialty,
            "url": `${BASE_URL}/doctors`,
            "affiliation": doc.hospitalIcons?.map(icon => ({
                "@type": "Hospital",
                "name": "Partner Hospital",
                "logo": {
                    "@type": "ImageObject",
                    "url": icon?.src
                }
            })),
            "alumniOf": doc.credentials?.map(cred => ({
                "@type": "EducationalOrganization",
                "name": cred
            })),
            "description": doc.credentials?.join(' ')
        };
    });
}
