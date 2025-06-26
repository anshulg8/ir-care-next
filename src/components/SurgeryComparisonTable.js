import React from 'react';

const SurgeryComparisonTable = () => {
    const comparisonData = [
        ["Procedure Time", "2-4 hours", "30-90 mins"],
        ["Hospital Stay", "3-7 days", "Same-day discharge"],
        ["Anesthesia", "General", "Local/Sedation"],
        ["Scars", "Visible scars", "Pinhole incision"],
        ["Recovery Time", "4-8 weeks", "1-2 weeks"],
        ["Pain Level", "High", "Minimal"],
        ["Risk of Complications", "Moderate-High", "Very Low"],
        ["Cost", "₹2-5L", "₹1.5-4L (Insurance covered)"]
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Traditional Surgery vs.{" "}
                    <span className="text-teal-600">Our Minimally Invasive Approach</span>
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-teal-600 text-white">
                                <th className="p-4 text-left w-1/3">Factor</th>
                                <th className="p-4 text-center">Traditional Surgery</th>
                                <th className="p-4 text-center">Our IR Procedures</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {comparisonData.map(([factor, traditional, our], index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="p-4 font-medium">{factor}</td>
                                    <td className="p-4 text-center text-red-600">{traditional}</td>
                                    <td className="p-4 text-center text-green-600 font-semibold">{our}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SurgeryComparisonTable;
