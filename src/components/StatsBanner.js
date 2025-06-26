import React from 'react';

const StatsBanner = () => {
    return (
        <div className="bg-gray-50 mt-6 p-4 border border-gray-200 rounded-md shadow-sm">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center">
                {/* Rating */}
                <div className="flex flex-col items-center">
                    {/* <span className="text-base font-semibold text-orange-600">4.5 ★</span> */}
                    <span className="text-base font-semibold text-orange-600"> 4.5 <span className="text-yellow-400">★</span> </span>
                    <span className="text-xs text-gray-600">Center Reviews</span>
                </div>

                {/* Patients */}
                <div className="flex flex-col items-center">
                    <span className="text-base font-semibold text-orange-600">30K+ Patients</span>
                    <span className="text-xs text-gray-600">Treated by Our Doctors</span>
                </div>

                {/* Cities */}
                <div className="flex flex-col items-center">
                    <span className="text-base font-semibold text-orange-600">4 Cities</span>
                    <span className="text-xs text-gray-600">India & UAE</span>
                </div>

                {/* Surgeries */}
                <div className="flex flex-col items-center">
                    <span className="text-base font-semibold text-orange-600">60+ Keyhole</span>
                    <span className="text-xs text-gray-600">Surgeries Offered</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBanner;
