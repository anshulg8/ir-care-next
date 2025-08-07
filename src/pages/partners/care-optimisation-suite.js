import React from 'react';
import { CheckCircle, HeartPulse, PhoneCall, ShieldCheck, FileText, Stethoscope } from 'lucide-react';
import { BASE_URL } from '@/constants';
import SEO from '@/components/SEO';

const features = [
    {
        icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
        title: 'Clinical gatekeeping',
        description: 'Each IR request undergoes peer review against ISVIR guidelines.*',
    },
    {
        icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
        title: 'Lower complication risk',
        description: 'Minimally invasive techniques shorten recovery and reduce readmissions.',
    },
    {
        icon: <PhoneCall className="w-6 h-6 text-teal-600" />,
        title: 'Member delight',
        description: 'Direct second-opinion hotline staffed by top Indian IR consultants.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        title: 'Transparent workflows',
        description: 'EDI-ready compatibility with your rules engine.',
    },
];

const toolkit = [
    {
        icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
        label: 'Named Medical Director & governance charter',
    },
    {
        icon: <FileText className="w-6 h-6 text-teal-600" />,
        label: 'Patient education microsite co-branded to your plan',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        label: 'Data-sharing agreement aligned to IRDAI norms',
    },
];

const IROptimisationSuite = () => {
    return (
        <>
            <SEO
                title="IR Optimisation Suite | Docsy for Health Insurers"
                description="Plug a peer-reviewed IR network into your plan and reduce claim friction."
                url={`${BASE_URL}/partners/insurers`}
            />

            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Better Outcomes, Cleaner Claims.</h1>
                    <p className="text-lg text-gray-600">
                        Add a multidisciplinary advisory board and guideline-driven IR network to your policy benefits—without adding overhead.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Why Insurers Adopt Docsy</h2>
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
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Benefit Plug-in</h3>
                            <p className="text-sm text-gray-600">Covered IR codes mapped to your policy rules.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Peer Review & Pre-auth</h3>
                            <p className="text-sm text-gray-600">Works inside your current portal.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Outcome Analytics</h3>
                            <p className="text-sm text-gray-600">Delivered quarterly to actuarial and wellness teams.</p>
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
                            “Advisory board roster shared post-NDA.”
                        </blockquote>
                        <p className="text-sm text-gray-500 mt-4">NABH & ISO 27001 certifications</p>
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Book a 15-min exploratory call</h2>
                    <p className="mb-6">Get a one-page overview of our governance model.</p>
                    <a
                        href="/book-call"
                        className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Book Your Call
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

export default IROptimisationSuite;
