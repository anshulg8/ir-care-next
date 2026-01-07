"use client";

import React from "react";
import { FaCheckCircle, FaUserMd, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER } from "../../constants";

const MobileDoctorIntro = () => {
    return (
        <section className="w-full bg-teal-50 px-4 py-6 md:hidden">
            <div className="max-w-md mx-auto space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    Book Appointments With <br /><span className="text-teal-600"> Our Expert Doctors </span>Near You
                </h2>

                {/* Bullet Points */}
                <ul className="space-y-4 text-gray-700 text-sm">
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>
                            Get consultation for <strong>50+ diseases</strong> across India
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <FaUserMd className="text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>
                            In-person and online consultation with experienced doctors
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <FaHandsHelping className="text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>
                            Extensive medical assistance throughout your treatment
                        </span>
                    </li>
                </ul>

                {/* Call Us Button */}
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#ff8300] text-white font-semibold py-3 rounded-lg shadow-sm active:scale-[0.98]"
                >
                    <FaPhoneAlt className="text-sm" />
                    Call Us
                </a>
            </div>

            {/* Trust Strip */}
            <div className="flex justify-between items-center text-center pt-3 border-t border-teal-100">
                <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900">3M+</div>
                    <div className="text-xs text-gray-600">
                        Patients treated
                    </div>
                </div>

                <div className="flex-1 border-l border-r border-teal-100 px-2">
                    <div className="text-lg font-bold text-gray-900">100K+</div>
                    <div className="text-xs text-gray-600">
                        Surgeries done
                    </div>
                </div>

                <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900">300+</div>
                    <div className="text-xs text-gray-600">
                        Surgery types
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileDoctorIntro;
