import { PHONE_NUMBER } from "@/constants";
import { featuredDoctors } from "@/data";
import { useState } from "react";
import { FaPhone, FaCalendarCheck } from "react-icons/fa6";


const DoctorScrollList = () => {
    const [showAll, setShowAll] = useState(false);
    const [showSpecialty, setShowSpecialty] = useState({});

    const visibleDoctors = showAll ? featuredDoctors : featuredDoctors.slice(0, 2);

    return (
        <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
            <div className="space-y-4 px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    Our <span className="text-teal-600">Doctors</span>
                </h2>
                {visibleDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="flex flex-col gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        {/* Top section: Image + Info */}
                        <div className="flex gap-3">
                            {/* Doctor Image */}
                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                <img
                                    src={doctor.image.src}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Doctor Info */}
                            <div className="flex-1 flex flex-col gap-1">
                                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                                <p className="text-sm text-gray-600">{doctor.designation}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm line-through text-gray-400">
                                        ₹2500
                                    </span>
                                    <span className="text-sm text-green-600 font-semibold">
                                        Free Consultation
                                    </span>
                                </div>

                                {/* Rating & Experience */}
                                <div className="flex justify-between items-center mt-1 text-sm text-gray-700">
                                    <span>⭐ 4.5/5</span>
                                    <span>{doctor.experience}+ yrs exp</span>
                                </div>
                            </div>
                        </div>

                        {/* Doctor Specialty with inline See More */}
                        {doctor.specialty && (
                            <div className="mt-1 text-sm text-gray-700 inline">
                                <span>
                                    {showSpecialty[doctor.id] || doctor.specialty.length <= 50
                                        ? doctor.specialty
                                        : `${doctor.specialty.slice(0, 50)}`}
                                </span>
                                {doctor.specialty.length > 50 && (
                                    <>
                                        {!showSpecialty[doctor.id] && <span>...</span>}
                                        <button
                                            onClick={() =>
                                                setShowSpecialty((prev) => ({
                                                    ...prev,
                                                    [doctor.id]: !prev[doctor.id],
                                                }))
                                            }
                                            className="text-teal-600 font-medium text-xs hover:underline inline"
                                        >
                                            {showSpecialty[doctor.id] ? ' See Less' : ' See More'}
                                        </button>
                                    </>
                                )}
                            </div>
                        )}


                        {/* Hospital icons with smaller top margin */}
                        {doctor.hospitalIcons?.length > 0 && (
                            <div className="mt-1 max-w-full overflow-x-auto">
                                <div className="flex gap-2 min-w-max pr-2">
                                    {doctor.hospitalIcons.map((icon, i) => (
                                        <img
                                            key={i}
                                            src={icon.src}
                                            alt="Hospital"
                                            className="h-6 w-auto object-contain flex-shrink-0"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Bottom section: Buttons in same row */}
                        <div className="flex gap-2 mt-3">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex-none w-32 flex items-center justify-center gap-2 bg-[#ff8300] text-white py-2.5 rounded-lg font-semibold text-sm"
                            >
                                <FaPhone />
                                Call
                            </a>
                            <button
                                className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-lg font-semibold text-sm"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <FaCalendarCheck />
                                Book Free
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            {/* {!showAll && featuredDoctors.length > 3 && (
                <div className="text-center py-3">
                    <button
                        onClick={() => setShowAll(true)}
                        className="text-teal-600 font-semibold hover:underline text-sm"
                    >
                        Show More
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default DoctorScrollList;
