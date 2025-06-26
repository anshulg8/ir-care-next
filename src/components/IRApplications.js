// src/pages/IRApplications.jsx
import React, { useState } from 'react';

const IRApplications = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const irConditions = [
        {
            name: "Liver Tumors",
            description: "Transarterial chemoembolization (TACE) and selective internal radiation therapy (Y-90 radioembolization) are targeted treatments that deliver chemotherapy or radiation directly to liver tumors while sparing surrounding healthy tissue.",
            traditional: "Liver resection surgery, Systemic chemotherapy, Liver transplantation (in eligible patients)",
            benefits: [
                "Preserves more healthy liver tissue compared to surgery",
                "Lower systemic toxicity than IV chemotherapy",
                "Can be repeated multiple times if tumors recur",
                "Improves progression-free survival in intermediate-stage hepatocellular carcinoma (HCC)"
            ]
        },
        {
            name: "Kidney Stones",
            description: "Percutaneous nephrolithotomy (PCNL) involves using a nephroscope through a small incision in the back to remove large or complex kidney stones that cannot be treated with non-invasive methods.",
            traditional: "Open stone surgery, Extracorporeal shock wave lithotripsy (ESWL), Ureteroscopy with laser lithotripsy",
            benefits: [
                "Minimally invasive approach for large or staghorn calculi",
                "Higher clearance rates for complex stones compared to ESWL",
                "Faster recovery and reduced pain versus open surgery",
                "Decreased need for multiple procedures"
            ]
        },
        {
            name: "Spinal Compression Fractures",
            description: "Vertebroplasty and kyphoplasty are image-guided procedures where bone cement is injected into fractured vertebrae, stabilizing the spine and alleviating pain due to osteoporosis or metastatic disease.",
            traditional: "Conservative therapy (bed rest, analgesics, bracing), Open spinal fusion (for severe or unstable fractures)",
            benefits: [
                "Rapid and significant pain relief in up to 90% of patients",
                "Improved mobility and reduced need for pain medications",
                "Outpatient or same-day procedure under conscious sedation",
                "Restores vertebral height (kyphoplasty) and prevents further collapse"
            ]
        },
        {
            name: "Uterine Fibroids",
            description: "Uterine fibroid embolization (UFE) blocks the blood supply to fibroids, causing them to shrink and symptoms to improve, while preserving the uterus.",
            traditional: "Hysterectomy, Myomectomy (surgical removal of fibroids)",
            benefits: [
                "Preserves the uterus and fertility potential",
                "Shorter recovery than surgical options",
                "90%+ symptom relief rate (bleeding, pressure)",
                "Lower complication rates compared to open surgery"
            ]
        },
        {
            name: "Peripheral Arterial Disease (PAD)",
            description: "Angioplasty and stenting are minimally invasive procedures used to restore blood flow in narrowed or blocked peripheral arteries, improving circulation and reducing symptoms like claudication.",
            traditional: "Bypass graft surgery, Conservative management with medications and exercise",
            benefits: [
                "Minimally invasive with lower procedural risk",
                "Immediate symptom relief in most cases",
                "Shorter recovery time compared to bypass surgery",
                "Can be performed on an outpatient basis"
            ]
        },
        {
            name: "Deep Vein Thrombosis (DVT)",
            description: "DVT involves the formation of a blood clot in a deep vein, typically in the legs, which can lead to complications like pulmonary embolism if not treated promptly.",
            traditional: "Anticoagulation therapy, Compression stockings, Surgical thrombectomy (in severe cases)",
            benefits: [
                "Minimally invasive approach to remove or dissolve clots",
                "Preserves vein function and reduces long-term complications",
                "Shorter recovery time compared to open surgery",
                "Can be performed under local anesthesia in many cases"
            ]
        },
        {
            name: "Pulmonary Embolism (PE)",
            description: "PE occurs when a blood clot travels to the lungs, blocking blood flow and potentially causing respiratory and cardiac complications.",
            traditional: "Anticoagulation therapy, Surgical embolectomy (in life-threatening cases)",
            benefits: [
                "Rapid restoration of blood flow to the lungs",
                "Minimally invasive technique with reduced recovery time",
                "Can be performed in patients who are not surgical candidates",
                "Lower risk of complications compared to open surgery"
            ]
        },
        {
            name: "Varicocele",
            description: "A varicocele is an enlargement of veins within the scrotum, often leading to infertility or testicular discomfort.",
            traditional: "Open surgical ligation, Laparoscopic surgery",
            benefits: [
                "Minimally invasive procedure with a high success rate",
                "Quick recovery time, often allowing same-day discharge",
                "Lower complication rates compared to traditional surgery",
                "Preserves fertility potential in many cases"
            ]
        },
        {
            name: "Benign Prostatic Hyperplasia (BPH)",
            description: "BPH is a non-cancerous enlargement of the prostate gland, leading to urinary symptoms such as frequent urination and difficulty starting urination.",
            traditional: "Medication therapy, Transurethral resection of the prostate (TURP), Open prostatectomy",
            benefits: [
                "Minimally invasive procedure with reduced risk of complications",
                "Quick recovery time, often with immediate symptom relief",
                "Preserves erectile and urinary function in many cases",
                "Can be performed under local anesthesia in many cases"
            ]
        },
        {
            name: "Pelvic Congestion Syndrome",
            description: "This condition involves chronic pelvic pain due to varicose veins in the pelvis, often affecting women of reproductive age.",
            traditional: "Conservative management (pain relief, physical therapy), Surgical ligation of veins",
            benefits: [
                "Minimally invasive approach with high success rates",
                "Significant reduction in pelvic pain and discomfort",
                "Quick recovery time, often with immediate symptom relief",
                "Can be performed under local anesthesia in many cases"
            ]
        },
        {
            name: "Gastrointestinal Bleeding",
            description: "GI bleeding can result from various causes, including ulcers, varices, or tumors, leading to significant blood loss and requiring prompt intervention.",
            traditional: "Endoscopic therapy, Surgical intervention (in severe cases)",
            benefits: [
                "Rapid control of bleeding with minimal invasiveness",
                "Preserves organ function and reduces need for transfusions",
                "Quick recovery time compared to open surgery",
                "Can be performed under local anesthesia in many cases"
            ]
        },
        {
            name: "Biliary Obstruction",
            description: "Obstruction of the bile ducts can lead to jaundice, infections, and liver damage if not treated promptly.",
            traditional: "Endoscopic retrograde cholangiopancreatography (ERCP), Surgical bypass procedures",
            benefits: [
                "Minimally invasive approach with reduced risk of complications",
                "Quick restoration of bile flow and alleviation of symptoms",
                "Can be performed in patients who are not surgical candidates",
                "Lower risk of infection compared to open surgery"
            ]
        },
        {
            name: "Ureteral Obstruction",
            description: "Blockage of the ureter can lead to hydronephrosis and impaired kidney function if not treated promptly.",
            traditional: "Open surgical correction, Nephrostomy tube placement",
            benefits: [
                "Minimally invasive procedure with high success rates",
                "Quick restoration of urine flow and alleviation of symptoms",
                "Can be performed under local anesthesia in many cases",
                "Lower risk of complications compared to open surgery"
            ]
        },
        {
            name: "Arteriovenous Malformations (AVMs)",
            description: "AVMs are abnormal tangles of blood vessels connecting arteries and veins, which can lead to bleeding, pain, or neurological deficits.",
            traditional: "Surgical resection, Stereotactic radiosurgery",
            benefits: [
                "Minimally invasive approach with reduced risk of complications",
                "High success rates in obliterating the malformation",
                "Quick recovery time compared to open surgery",
                "Can be performed under local anesthesia in many cases"
            ]
        },
        {
            name: "Lymphatic Malformations",
            description: "These are rare, congenital lesions involving the lymphatic vessels, which can cause swelling and discomfort.",
            traditional: "Surgical excision, Sclerotherapy",
            benefits: [
                "Minimally invasive procedure with high success rates",
                "Significant reduction in swelling and discomfort",
                "Quick recovery time, often with immediate symptom relief",
                "Can be performed under local anesthesia in many cases"
            ]
        }
    ];

    const filteredConditions = irConditions.filter(condition =>
        condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.traditional.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* <div className="mb-8">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div> */}

                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Interventional Radiology <span className="text-teal-600">Treatable Conditions</span>
                    </h1>

                    <div className="mb-12 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by condition or traditional treatment..."
                                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute right-4 top-4 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {filteredConditions.length > 0 ? (
                            filteredConditions.map((condition, index) => (
                                <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{condition.name}</h2>
                                    <p className="text-gray-600 mb-4">{condition.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">Traditional Methods:</h3>
                                            <p className="text-gray-700">{condition.traditional}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">IR Benefits:</h3>
                                            <ul className="space-y-2">
                                                {condition.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-700">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">No conditions found</h3>
                                <p className="mt-1 text-gray-500">Try searching with different terms</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IRApplications;