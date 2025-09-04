import React, { useState } from 'react';
import { BASE_URL, DEFAULT_PAGE_DESCRIPTION, FB_URL, INSTA_URL, X_URL } from '@/constants';
import SEO from './SEO';

export default function About({ founders = [], advisors = [] }) {
    const [openBioIndex, setOpenBioIndex] = useState(null);
    const [openAdvisorBioIndex, setOpenAdvisorBioIndex] = useState(null);

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us | Docsy",
        "url": `${BASE_URL}/about`,
        "description": DEFAULT_PAGE_DESCRIPTION,
        "mainEntity": {
            "@type": "MedicalOrganization",
            "name": "Docsy",
            "url": BASE_URL,
            "description": "A healthcare platform focused on interventional radiology — offering modern, image-guided alternatives to conventional surgery across India and UAE.",
            "sameAs": [X_URL, INSTA_URL, FB_URL],
            "foundingDate": "2024",
            "areaServed": ["IN", "AE"],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": ["IN", "AE"]
            },
            "hasMission": {
                "@type": "CreativeWork",
                "name": "Our Mission",
                "description": "To empower patients through access to trusted interventional radiology care, and help them choose safe, effective treatments with shorter recovery times and fewer complications."
            },
            "hasOfferCatalog": {
                "@type": "CreativeWork",
                "name": "Our Vision",
                "description": "We envision a healthcare system where every patient has access to the least invasive and most advanced treatment options available, guided by expert care and digital convenience."
            }
        }
    };

    const toggleBio = (index) => {
        setOpenBioIndex(openBioIndex === index ? null : index);
    };

    const toggleAdvisorBio = (index) => {
        setOpenAdvisorBioIndex(openAdvisorBioIndex === index ? null : index);
    };

    return (
        <>
            <SEO
                title="About Us | Docsy"
                description={DEFAULT_PAGE_DESCRIPTION}
                url={`${BASE_URL}/about`}
                schemaMarkup={aboutSchema}
            />

            {/* Founding Team Section */}
            <section className="bg-white px-4 py-4 sm:py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                        Founding <span className="text-teal-600">Team</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 mb-6">
                        Physician-scientists and technologists with deep healthcare industry links across India, Middle East & USA.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto items-start">
                    {founders.map((person, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-sm border hover:shadow-md transition p-4"
                        >
                            <div className="flex flex-row items-start gap-4">
                                <div className="w-1/3 aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-md">
                                    <img
                                        src={person.image.src}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-2/3 flex flex-col justify-start">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                                    </div>

                                    {person.degrees && (
                                        <p className="text-sm text-teal-700 font-medium">{person.degrees}</p>
                                    )}

                                    <p className="text-sm text-gray-600 mt-1">{person.title}</p>

                                    {person.affiliations?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {person.affiliations.map((aff, i) => (
                                                <img
                                                    key={i}
                                                    src={aff.logo.src}
                                                    alt={aff.name}
                                                    className="h-5 sm:h-6 object-contain"
                                                    title={aff.name}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <button
                                        className="text-sm text-teal-600 underline hover:no-underline mt-3 font-medium self-start"
                                        onClick={() => toggleBio(index)}
                                    >
                                        {openBioIndex === index ? 'Hide Bio' : 'View Bio'}
                                    </button>
                                </div>
                            </div>

                            {openBioIndex === index && (
                                <div className="mt-4 border-t pt-3 text-sm leading-relaxed text-gray-700">
                                    <p className="whitespace-pre-line">{person.bio}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Advisors Section */}
            {advisors.length > 0 && (
                <section className="bg-gray-50 px-4 py-4 sm:py-6 mt-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            Clinical <span className="text-teal-600">Advisors</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 mb-6">
                            Global experts providing guidance across clinical strategy & ops, research and quality control.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto items-start">
                        {advisors.map((advisor, index) => (
                            <div
                                key={advisor.id}
                                className="bg-white rounded-md shadow-sm border hover:shadow-md transition p-4"
                            >
                                <div className="flex flex-row items-start gap-4">
                                    <div className="w-1/3 aspect-[3/4] overflow-hidden rounded-md">
                                        <img
                                            src={advisor.image.src}
                                            alt={advisor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="w-2/3 flex flex-col justify-start">
                                        <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                                        <p className="text-sm text-teal-700 font-medium">{advisor.designation}</p>

                                        <p className="text-sm text-gray-600 mt-1">
                                            <span className="font-medium">Experience:</span> {advisor.experience}+ yrs
                                        </p>

                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Specialty:</span> {advisor.specialty}
                                        </p>

                                        {advisor.hospitalIcons?.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {advisor.hospitalIcons.map((icon, i) => (
                                                    <img
                                                        key={i}
                                                        src={icon.src}
                                                        alt="Hospital Logo"
                                                        className="h-5 sm:h-6 object-contain"
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        <button
                                            className="text-sm text-teal-600 underline hover:no-underline mt-3 font-medium self-start"
                                            onClick={() => toggleAdvisorBio(index)}
                                        >
                                            {openAdvisorBioIndex === index ? 'Hide Credentials' : 'View Credentials'}
                                        </button>
                                    </div>
                                </div>

                                {openAdvisorBioIndex === index && (
                                    <div className="mt-4 border-t pt-3 text-sm leading-relaxed text-gray-700">
                                        <ul className="list-disc list-inside space-y-1">
                                            {advisor.credentials.map((cred, idx) => (
                                                <li key={idx}>{cred}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
