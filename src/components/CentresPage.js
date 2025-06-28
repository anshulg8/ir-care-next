import React, { useState } from 'react';
import { centers } from '../data.js';
import SEO from './SEO.js';

const CentresPage = () => {
    const [selectedCity, setSelectedCity] = useState('Mumbai');
    const [selectedCenter, setSelectedCenter] = useState(null);

    // Get unique cities
    const cities = [...new Set(centers.map(center => center.city))];

    // Get centers for selected city
    const cityCenters = centers.filter(center => center.city === selectedCity);

    // Set default selected center if none is selected
    React.useEffect(() => {
        if (!selectedCenter && cityCenters.length > 0) {
            setSelectedCenter(cityCenters[0]);
        }
    }, [selectedCity, selectedCenter, cityCenters]);

    return (
        <>
            <SEO
                title="Our Professional Centres | Docsy"
                description="Search and book appointments with top-rated doctors. Fast, reliable, and easy healthcare access."
                url="https://refer.mydocsy.com"
            />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-teal-600">Centers</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            State-of-the-art facilities equipped with cutting-edge technology and staffed by expert medical professionals.
                        </p>
                    </div>

                    {/* City Selection */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => {
                                    setSelectedCity(city);
                                    setSelectedCenter(null);
                                }}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedCity === city
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-teal-50'
                                    }`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>

                    {/* Center Selection */}
                    <div className="flex justify-center space-x-4 mb-12">
                        {cityCenters.map((center) => (
                            <button
                                key={center.id}
                                onClick={() => setSelectedCenter(center)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedCenter?.id === center.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-teal-50'
                                    }`}
                            >
                                {center.name}
                            </button>
                        ))}
                    </div>

                    {/* Center Details */}
                    {selectedCenter && (
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative h-64">
                                <img
                                    src={selectedCenter.image}
                                    alt={selectedCenter.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">

                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedCenter.name}</h2>
                                    <p className="text-white/90">{selectedCenter.address}</p>

                                    {/* Rating and Reviews */}
                                    <div className="flex items-center mt-2 text-sm text-white/90">
                                        <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="mr-1 font-semibold">{selectedCenter.rating}</span>
                                        <span>({selectedCenter.reviews.toLocaleString()} Google reviews)</span>
                                    </div>

                                </div>
                            </div>

                            {/* Description */}
                            {selectedCenter.description && (
                                <div className="px-8 pt-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {selectedCenter.description}
                                    </p>
                                </div>
                            )}


                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Contact Information */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                                        <div className="space-y-3">
                                            <p className="flex items-center text-gray-600">
                                                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {selectedCenter.phone}
                                            </p>
                                            <p className="flex items-center text-gray-600">
                                                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {selectedCenter.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Specialties</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCenter.specialties.map((specialty, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technologies</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {selectedCenter.technologies.map((tech, index) => (
                                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    {tech.image && (
                                                        <img
                                                            src={tech.image}
                                                            alt={tech.name}
                                                            className="w-24 h-24 object-cover rounded-lg mr-4"
                                                        />
                                                    )}

                                                    <div>
                                                        <h4 className="font-bold text-gray-900">{tech.name}</h4>
                                                        <p className="text-gray-600 text-sm mt-1">{tech.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications & Accreditations</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {selectedCenter.certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                                                <svg className="h-6 w-6 text-teal-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Doctors */}
                                {selectedCenter.doctors && selectedCenter.doctors.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expert Team</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {selectedCenter.doctors.map((doctor, index) => (
                                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                                    <h4 className="font-bold text-gray-900">{doctor.name}</h4>
                                                    <p className="text-teal-600">{doctor.specialization}</p>
                                                    <p className="text-gray-600 text-sm mt-1">Experience: {doctor.experience}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CentresPage;
