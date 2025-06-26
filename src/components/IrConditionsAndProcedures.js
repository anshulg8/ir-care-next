import React from 'react';
import { ourAllProcedures } from '../data';

const IrConditionsAndProcedures = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
                    Conditions & Procedures We Treat with <span className="text-teal-600">IR</span>
                </h2>

                <div className="space-y-12">
                    {ourAllProcedures.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-2xl font-semibold text-teal-700 mb-4 border-b border-teal-100 pb-1">
                                {item.Category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Typical Problems</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {item['Typical Problems'].map((problem, i) => (
                                            <li key={i}>{problem}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Key IR Solutions</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {item['Key IR Solutions'].map((solution, i) => (
                                            <li key={i}>{solution}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IrConditionsAndProcedures;
