import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { founders } from '@/data';

export default function About({ founders }) {
    const [openBioIndex, setOpenBioIndex] = useState(null);

    // TODO: LinkedIn

    const toggleBio = (index) => {
        setOpenBioIndex(openBioIndex === index ? null : index);
    };

    return (
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
                            {/* Image section (30%) */}
                            {/* <div className="w-1/3 aspect-[3/4] overflow-hidden rounded-md"> */}
                            <div className="w-1/3 aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-md">
                                <img
                                    src={person.image.src}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name, title, logos */}
                            <div className="w-2/3 flex flex-col justify-start">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>

                                    {/* {person.linkedIn && (
                                        <a
                                            href={person.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-blue-600"
                                            title="LinkedIn"
                                        >
                                            <FaLinkedin className="w-4 h-4" />
                                        </a>
                                    )} */}
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

                        {/* Bio full width below */}
                        {openBioIndex === index && (
                            <div className="mt-4 border-t pt-3 text-sm leading-relaxed text-gray-700">
                                <p className="whitespace-pre-line">{person.bio}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
