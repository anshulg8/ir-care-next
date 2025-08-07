import React from 'react';
import { CheckCircle, HeartPulse, Plane, BookOpenCheck, FileText, Users, Stethoscope, BadgeCheck, UserCheck } from 'lucide-react';
import { BASE_URL } from '@/constants';
import SEO from '@/components/SEO';

const features = [
    {
        icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
        title: 'Top-quartile pay',
        description: 'Minimal after-hours load; urgent cases routed to a dedicated night pool.',
    },
    {
        icon: <BadgeCheck className="w-6 h-6 text-teal-600" />,
        title: 'Latest tech exposure',
        description: 'If it’s FDA-approved and evidence-backed, you’ll use it first.',
    },
    {
        icon: <Plane className="w-6 h-6 text-teal-600" />,
        title: 'Mobility & freedom',
        description: 'Travel to centres of excellence or have the mobile suite come to you.',
    },
    {
        icon: <BookOpenCheck className="w-6 h-6 text-teal-600" />,
        title: 'Academic growth',
        description: 'In-house research cell, funded studies, virtual MDT boards.',
    },
];

const toolkit = [
    {
        icon: <UserCheck className="w-6 h-6 text-teal-600" />,
        label: 'Credentialing portal & malpractice cover',
    },
    {
        icon: <FileText className="w-6 h-6 text-teal-600" />,
        label: 'Case-based learning series',
    },
    {
        icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
        label: 'Relocation & travel facilitation',
    },
];

const AdvanceIRCareer = () => {
    return (
        <>
            <SEO
                title="Advance Your IR Career | Docsy for Clinicians"
                description="Join Docsy's IR network and gain access to high-complexity cases, latest devices, and academic opportunities—without burnout."
                url={`${BASE_URL}/partners/ir-doctors`}
            />

            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Cutting-Edge IR—Minus the Burnout.</h1>
                    <p className="text-lg text-gray-600">
                        Docsy supplies a steady stream of ethically indicated cases, mobile advanced equipment,
                        and research opportunities—so you can focus on medicine, not marketing.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Why Clinicians Choose Docsy</h2>
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
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Apply Online</h3>
                            <p className="text-sm text-gray-600">Upload CV & licences.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Peer Review</h3>
                            <p className="text-sm text-gray-600">Advisory board vets credentials within a week.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Operate</h3>
                            <p className="text-sm text-gray-600">Choose rosters that fit your lifestyle; Docsy handles everything else.</p>
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
                            “Joining Docsy let me double my complex-case exposure without sacrificing weekends.”
                        </blockquote>
                        <p className="text-sm text-gray-500 mt-4">— Dr R. Nair, IR Consultant</p>
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Book a confidential call</h2>
                    <p className="mb-6">Receive our three-step onboarding guide.</p>
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

export default AdvanceIRCareer;
