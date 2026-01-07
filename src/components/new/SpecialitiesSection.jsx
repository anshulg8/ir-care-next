import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const specialties = [
    {
        id: 1,
        title: 'Proctology',
        description: 'Diagnosis and treatment for digestive and colorectal issues.',
        image: 'https://img.pristyncare.com/category-disease-image/Proctology_20(1).png',
        link: '/specialties/proctology',
    },
    {
        id: 2,
        title: 'Laparoscopy',
        description: 'Minimally invasive surgeries for quick recovery.',
        image: 'https://img.pristyncare.com/category-disease-image/Laparoscopy_20(1).png',
        link: '/specialties/laparoscopy',
    },
    {
        id: 3,
        title: 'ENT (Ear, Nose, Throat)',
        description: 'Comprehensive care for all ENT conditions.',
        image: 'https://img.pristyncare.com/category-disease-image%2FENT.jpg',
        link: '/specialties/ent',
    },
    {
        id: 4,
        title: 'Laparoscopy2',
        description: 'Minimally invasive surgeries for quick recovery.',
        image: 'https://img.pristyncare.com/category-disease-image/Laparoscopy_20(1).png',
        link: '/specialties/laparoscopy',
    },
    {
        id: 5,
        title: 'ENT (Ear, Nose, Throat)2',
        description: 'Comprehensive care for all ENT conditions.',
        image: 'https://img.pristyncare.com/category-disease-image%2FENT.jpg',
        link: '/specialties/ent',
    },
];

const SpecialtiesSection = () => {
    return (
        <section className="bg-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
                    Our <span className="text-teal-600">Specialties</span>
                </h2>

                <div
                    className="grid gap-4 sm:gap-5
                               grid-cols-1
                               sm:grid-cols-2
                               lg:grid-cols-3"
                >
                    {specialties.map((spec) => (
                        <Link key={spec.id} href={spec.link} className="group">
                            <div
                                className="h-full bg-gray-50 rounded-xl shadow-sm
                                           hover:shadow-md transition-shadow
                                           flex sm:flex-col gap-3 sm:gap-3
                                           p-3 sm:p-4"
                            >
                                {/* Image */}
                                <div
                                    className="w-20 h-20
                                               sm:w-full sm:h-32
                                               rounded-lg overflow-hidden
                                               bg-gray-200 flex-shrink-0"
                                >
                                    <img
                                        src={spec.image}
                                        alt={spec.title}
                                        className="w-full h-full object-cover
                                                   group-hover:scale-105 transition-transform"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-lg sm:text-lg font-semibold text-gray-900 mb-1">
                                        {spec.title}
                                    </h3>

                                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                                        {spec.description}
                                    </p>

                                    <div className="mt-auto flex items-center text-teal-600 font-semibold text-sm">
                                        <span>View</span>
                                        <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
