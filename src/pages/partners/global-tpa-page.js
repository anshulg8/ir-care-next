import React from 'react';
import { Globe, Cpu, LayoutDashboard, FileText, ShieldCheck, BookOpenCheck } from 'lucide-react';
import { BASE_URL } from '@/constants';
import SEO from '@/components/SEO';

const features = [
    {
        icon: <Globe className="w-6 h-6 text-teal-600" />,
        title: 'Instant capacity',
        description: 'For minimally invasive oncology & vascular procedures sought by GCC, Africa, and SEA patients.',
    },
    {
        icon: <Cpu className="w-6 h-6 text-teal-600" />,
        title: 'Friction-free digital sync',
        description: 'REST/FHIR API, E-claims, and prior-auth widgets ready out of the box.',
    },
    {
        icon: <BookOpenCheck className="w-6 h-6 text-teal-600" />,
        title: 'White-label concierge',
        description: 'Offer our multilingual care-navigation team as a free value-add to your corporate and retail groups.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        title: 'Compliance & security',
        description: 'ISO 27001-certified hosting; audited data-flows available under NDA.',
    },
];

const toolkit = [
    {
        icon: <LayoutDashboard className="w-6 h-6 text-teal-600" />,
        label: 'Live authorisation dashboard',
    },
    {
        icon: <FileText className="w-6 h-6 text-teal-600" />,
        label: 'Co-branded outcome reports for corporate HR teams',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
        label: 'Quarterly utilisation reviews with our integration lead',
    },
];

const GlobalPatientAccessProgram = () => {
    return (
        <>
            <SEO
                title="Global Patient Access Program | Docsy Partners"
                description="Boost premium IR case volumes through secure, plug-and-play integrations."
                url={`${BASE_URL}/partners/global-access`}
            />

            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock High-Value Procedures—Seamlessly.</h1>
                    <p className="text-lg text-gray-600">
                        Boost premium and international case volumes through a plug-and-play IR ecosystem that slips into your existing ops stack.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-10 text-center">Why TPAs Love It</h2>
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
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Sandbox Access</h3>
                            <p className="text-sm text-gray-600">48 hours after NDA.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Smart Routing</h3>
                            <p className="text-sm text-gray-600">Each case matched to ideal Docsy centre.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-600">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Full Oversight</h3>
                            <p className="text-sm text-gray-600">Track milestones in real-time while we handle logistics.</p>
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
                            “Reference integrations available upon request.”
                        </blockquote>
                        <p className="text-sm text-gray-500 mt-4">Backed by a multi-specialty IR Advisory Board</p>
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Schedule a discovery demo</h2>
                    <p className="mb-6">Receive sandbox credentials & API docs.</p>
                    <a
                        href="/book-call"
                        className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Book a Demo
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

export default GlobalPatientAccessProgram;
