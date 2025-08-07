import React from 'react';
import { CheckCircle, Stethoscope, Link2, ShieldCheck, BookUser, HeartPulse, LayoutDashboard, FileText, PhoneCall } from 'lucide-react';
import { BASE_URL } from '@/constants';
import SEO from '@/components/SEO';

const features = [
    {
        icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
        title: 'Evidence-first triage',
        description: 'All interventions vetted against Indian Society of Interventional Radiology (ISVIR) guidelines.*',
    },
    {
        icon: <BookUser className="w-6 h-6 text-teal-600" />,
        title: 'Shared-care earnings',
        description: 'Receive automated payouts for follow-ups and care navigation, not just the first consult.',
    },
    {
        icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
        title: 'Prestige & learning',
        description: 'Private masterclasses, early access to new-tech briefings, peer networking.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        title: 'Non-poaching pledge',
        description: 'We contractually return your patient to you for all non-IR care—always.',
    },
];

const toolkit = [
    {
        icon: <LayoutDashboard className="w-6 h-6 text-teal-600" />,
        label: 'Real-time case-tracking dashboard',
    },
    {
        icon: <FileText className="w-6 h-6 text-teal-600" />,
        label: 'Co-branded patient education sheets',
    },
    {
        icon: <PhoneCall className="w-6 h-6 text-teal-600" />,
        label: '24/7 clinician hotline for complex queries',
    },
];

const EliteDoctorsCircle = () => {
    return (
        <>
            <SEO
                title="Elite Doctors Circle | Refer With Confidence | Docsy"
                description="Join an invite-only circle to co-manage IR cases, earn shared-care revenue, and ensure evidence-based outcomes for every patient."
                url={`${BASE_URL}/partners/doctors`}
            />

            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Refer With Confidence. Grow With Integrity.</h1>
                    <p className="text-lg text-gray-600">
                        Become part of an invite-only circle that lets you keep the primary relationship,
                        share follow-up revenue, and guarantee evidence-based IR care for every patient.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Why Clinicians Join</h2>
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
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Join the Circle</h3>
                            <p className="text-sm text-gray-600">Digital contract & credential check.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Refer</h3>
                            <p className="text-sm text-gray-600">Through your personalised portal or e-fax.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Co-manage</h3>
                            <p className="text-sm text-gray-600">Recovery via our app; payouts land quarterly.</p>
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
                    <div className="bg-white p-8 rounded-xl shadow-md relative">
                        <svg className="absolute -top-5 left-6 w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.17 5.59C4.23 7.38 2 10.65 2 14.29 2 18.97 5.91 23 11 23c1.31 0 2.58-.26 3.74-.73-.64-.96-1.02-2.15-1.02-3.42 0-3.31 2.69-6 6-6 .73 0 1.43.13 2.07.36A10.002 10.002 0 0 0 7.17 5.59Z" />
                        </svg>
                        <blockquote className="italic text-gray-800 text-lg">
                            “Docsy’s protocol keeps my patients safe and my time protected.”
                        </blockquote>
                        <p className="text-sm text-gray-500 mt-4">— Dr K. Mehta, Diabetologist</p>
                        <p className="text-xs text-gray-400 mt-2">NABH-accredited centres | ISO 27001 data security</p>
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Reserve a 15-minute strategy call</h2>
                    <p className="mb-6">Get a printable “Referral Workflow Cheat-Sheet” immediately after booking.</p>
                    <a
                        href="/book-call"
                        className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Book Your Call
                    </a>
                </div>
            </section>
        </>
    );
};

export default EliteDoctorsCircle;
