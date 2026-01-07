import { PHONE_NUMBER } from '@/constants';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const pointsData = [
    {
        title: '1: Comprehensive Care',
        description: 'Our doctors provide personalized treatment plans. We monitor your progress closely. You receive guidance at every step. Health advice is always tailored to you.',
    },
    {
        title: '2: Experienced Specialists',
        description: 'We have top specialists in various fields. Each doctor has years of hands-on experience. We ensure your care is guided by expertise. Our team is available for in-person and online consultations.',
    },
    {
        title: '3: Affordable Treatments',
        description: 'All services are competitively priced. Free consultation is available. We aim to provide high-quality care without heavy costs.',
    },
    {
        title: '4: Advanced Facilities',
        description: 'Our clinics and hospitals are equipped with the latest medical technology. You receive treatments using modern equipment. Your comfort and safety are our priorities.',
    },
];

const WhyDocsy = () => {
    return (
        <section className="max-w-md mx-auto bg-teal-50 p-4 sm:p-6 rounded-lg shadow-md space-y-6">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Why <span className="text-teal-600">Docsy</span>?
            </h2>

            {/* Subheading */}
            <p className="text-center text-gray-700 text-sm sm:text-base">
                Book your appointment with top specialists in just a few clicks.
            </p>

            {/* Book Free Appointment Button */}
            <div className="w-full">
                {/* <button
                    className="w-full bg-teal-600 text-white font-semibold py-3 rounded-lg text-lg hover:bg-teal-700 transition"
                    onClick={() => alert('Booking Free Appointment')}
                >
                    Book Free Appointment
                </button> */}

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#ff8300] text-white font-semibold py-3 rounded-lg shadow-sm active:scale-[0.98]"
                >
                    <FaPhoneAlt className="text-sm" />
                    Call Us Now
                </a>
            </div>

            {/* Points */}
            <div className="space-y-4">
                {pointsData.map((point, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                        <p className="text-gray-700 text-sm">{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyDocsy;
