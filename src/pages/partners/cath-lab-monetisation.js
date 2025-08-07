import React from 'react';
import { CheckCircle, HeartPulse, BookOpenCheck, ShieldCheck, FileText, Stethoscope, BarChart3, Users } from 'lucide-react';
import { BASE_URL } from '@/constants';
import SEO from '@/components/SEO';

const features = [
    {
        icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
        title: 'Incremental revenue',
        description: 'Hourly rentals plus inpatient spend.',
    },
    {
        icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
        title: 'Premium patient flow',
        description: 'High-acuity cases from India & the UAE.',
    },
    {
        icon: <BookOpenCheck className="w-6 h-6 text-teal-600" />,
        title: 'Staff upskilling',
        description: 'Docsy trains your nurses and techs to QCI-plus standards on cutting-edge devices.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        title: 'Zero marketing lift',
        description: 'We bring the cases, clinicians, and consumables.',
    },
];

const toolkit = [
    {
        icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
        label: 'Live utilisation dashboard',
    },
    {
        icon: <FileText className="w-6 h-6 text-teal-600" />,
        label: 'Co-branded promotional kit',
    },
    {
        icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
        label: 'Annual CME & skills labs',
    },
];

const CathLabMonetisation = () => {
    return (
        <>
            <SEO
                title="Cath-Lab Monetisation Partnership | Docsy for Hospitals"
                description="Fill downtime in your cath-lab with high-value IR procedures and receive full support."
                url={`${BASE_URL}/partners/cathlabs`}
            />

            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Turn Downtime Into Revenue.</h1>
                    <p className="text-lg text-gray-600">
                        Fill under-utilised cath-lab hours with insured IR cases—while your team learns the latest techniques on-site.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Why Facilities Partner</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div>{feature.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-teal-700 mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Capacity Scan</h3>
                            <p className="text-sm text-gray-600">We map your free slots & equipment.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Demand Match</h3>
                            <p className="text-sm text-gray-600">Algorithm books compatible cases into those slots.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">On-site Execution</h3>
                            <p className="text-sm text-gray-600">Visiting or local IRs operate; your team shadows and learns.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Your Toolkit</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {toolkit.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                                <div>{item.icon}</div>
                                <div className="text-gray-800 font-medium">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-teal-50 to-gray-100 py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <blockquote className="italic text-gray-800 text-lg">
                            “Reference site visits arranged on request.”
                        </blockquote>
                        <p className="text-sm text-gray-500 mt-4">All procedures follow ISVIR & NABH protocols</p>
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Book a discovery session</h2>
                    <p className="mb-6">Receive an ROI-calculator template for your lab.</p>
                    <a
                        href="/book-call"
                        className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Book Your Session
                    </a>
                </div>
            </section>
            <section className="bg-white text-center py-10 px-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                    ISVIR guideline references and detailed clinical protocols available upon request. <br /> All facilities NABH accredited; data infrastructure ISO 27001 certified.
                </p>
            </section>
        </>
    );
};

export default CathLabMonetisation;
