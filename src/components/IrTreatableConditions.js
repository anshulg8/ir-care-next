import React from 'react';
import Link from 'next/link';

const conditions = [
    {
        name: "Liver Tumors",
        description: "TACE and radioembolization for inoperable liver cancers",
        comparison: "Alternative to: Liver resection surgery (shorter recovery, preserves liver tissue)"
    },
    {
        name: "Kidney Stones",
        description: "Percutaneous nephrolithotomy for large stones",
        comparison: "Alternative to: Open surgery (smaller incision, faster recovery)"
    },
    {
        name: "Spinal Fractures",
        description: "Vertebroplasty/kyphoplasty for compression fractures",
        comparison: "Alternative to: Conservative management (immediate pain relief)"
    },
    {
        name: "Deep Vein Thrombosis",
        description: "Thrombectomy and thrombolysis for blood clots",
        comparison: "Alternative to: Blood thinners alone (faster clot removal)"
    },
    {
        name: "Aortic Aneurysms",
        description: "Endovascular repair (EVAR) without open surgery",
        comparison: "Alternative to: Open repair (lower mortality risk)"
    },
    {
        name: "Varicose Veins",
        description: "Endovenous laser/radiofrequency ablation",
        comparison: "Alternative to: Vein stripping (no general anesthesia needed)"
    }
];

const IrTreatableConditions = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Other Conditions Treated with <span className="text-teal-600">Interventional Radiology</span>
                </h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    While we specialize in the procedures above, IR can address many other conditions with minimal invasion
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-200 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{condition.name}</h3>
                            <p className="text-gray-600 mb-4">{condition.description}</p>
                            <div className="bg-teal-50 px-3 py-2 rounded-lg">
                                <p className="text-sm text-teal-800 font-medium">{condition.comparison}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/ir-applications"
                        className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                    >
                        Learn more about IR applications &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IrTreatableConditions;
