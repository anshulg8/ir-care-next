import React from 'react';
import { featuredDoctors } from '../data';
import SEO from './SEO';
import { BASE_URL } from '@/constants';
import { generateDoctorSchema } from '@/utils/generateDoctorSchema';

const DoctorProfiles = () => {
    return (
        <>
            <SEO
                title="Find Expert Doctors Near You | Docsy"
                description="We are a patient-first platform committed to making minimally invasive, image-guided treatments more accessible to people everywhere. By partnering with best vetted interventional radiology (IR) centers and specialists, we provide safe, modern alternatives to traditional surgery."
                url={`${BASE_URL || ''}/doctors`}
                schemaMarkup={doctorSchemaMarkup.length === 1 ? doctorSchemaMarkup[0] : {
                    "@context": "https://schema.org",
                    "@graph": generateDoctorSchema(featuredDoctors)
                }}
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Our <span className="text-teal-600">Expert Doctors</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {featuredDoctors.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row">
                                    {doc.image.src ? (
                                        <div className="w-full md:w-48 aspect-[3/4] bg-gray-100">
                                            <img
                                                src={doc.image.src}
                                                alt={doc.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full md:w-48 h-64 bg-blue-100 flex items-center justify-center text-3xl text-teal-600 font-bold">
                                            {doc.name.split(" ")[1]?.charAt(0)}
                                        </div>
                                    )}
                                    <div className="p-6 flex-1">
                                        <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                                        <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                                            {doc.experience}+ Years Experience
                                        </p>
                                        <p className="text-teal-600 font-medium mb-3">{doc.designation}</p>
                                        <p className="text-gray-700 mb-4 text-sm">
                                            {doc.specialty || 'Specialized in cutting-edge Interventional Radiology treatments.'}
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            {doc.credentials.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Optional: display logos */}
                                        {doc.hospitalIcons?.length > 0 && (
                                            <div className="mt-4 overflow-x-auto">
                                                <div className="flex gap-4 min-w-max pr-2">
                                                    {doc.hospitalIcons.map((icon, i) => (
                                                        <img key={i} src={icon.src} alt="hospital" className="h-6 w-auto flex-shrink-0" />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};

export default DoctorProfiles;
