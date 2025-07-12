import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleFormSubmit from '../../components/GoogleFormSubmit';
import { docsyJourneySteps, proceduresMap } from '../../data.js';
import FAQSection from '../../components/FAQSection';
import BenefitCarousel from '../../components/BenefitCarousel';
import AppointmentModal from '../../components/AppointmentModal';
import StickyButtons from '../../components/StickyButtons';
import ContactFloatingButton from '../../components/ContactFloatingButton';
import DocsyJourney from '../../components/DocsyJourney';
import HTMLBlockRenderer from '../../components/HTMLBlockRenderer';
import { useModal } from '../../context/ModalContext';
import FeaturedDoctorsSection from '../../components/FeaturedDoctorsSection';
import TestimonialSection from '../../components/TestimonialSection';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';

const ProcedureDetailPage = (props) => {
    // const router = useRouter();
    // const { procedureId } = router.query;

    const { procedureId: routerSlug } = useRouter();
    const procedureId = props?.initialProcedureId || routerSlug;


    const [isMobile, setIsMobile] = useState(false);
    const [showStickyButtons, setShowStickyButtons] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const { openModal } = useModal();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowStickyButtons(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const procedure = proceduresMap[procedureId];

    useEffect(() => {
        if (procedure?.markdownPath) {
            setLoading(true);
            fetch(procedure.markdownPath)
                .then((res) => res.text())
                .then((text) => setMarkdownContent(text))
                .catch(() => {
                    setMarkdownContent('# Content Not Available\n\nDetailed content is not currently available.');
                })
                .finally(() => setLoading(false));
        }
    }, [procedure]);

    if (!procedure) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Procedure Not Found</h1>
                    <Link href="/procedures" className="text-teal-600 hover:text-teal-700">
                        Return to Procedures
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={`${procedure.name} | Docsy`}
                description={`${procedure.description} | Docsy`}
                url={`${BASE_URL || ''}/procedures/${procedure.slug}`}
            />
            <div className="min-h-screen bg-gray-50 py-12 pt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="p-8 pt-2">
                            <p className="text-4xl font-bold text-gray-900 mb-4">{procedure.title || procedure.name}</p>
                            <p className="text-xl font-bold text-gray-900 mb-4">{procedure.headline}</p>

                            <p className="text-xl text-gray-600 mb-4">
                                {isMobile && !showFullDescription ? (
                                    <>
                                        {procedure.description.slice(0, 120)}...
                                        <button
                                            onClick={() => setShowFullDescription(true)}
                                            className="ml-1 text-teal-600 font-medium underline inline"
                                        >
                                            See more
                                        </button>
                                    </>
                                ) : (
                                    procedure.description
                                )}
                            </p>

                            <GoogleFormSubmit procedure={procedure.name} />

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                                <p className="text-yellow-800 mb-4">
                                    Unsure whether you have symptoms? Get answers in 2 mins with a free, clinically validated test.
                                </p>
                                <Link
                                    href={`/quiz/${procedure.slug}`}
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                                >
                                    Take the Quiz
                                </Link>
                            </div>

                            <div className="my-8">
                                <BenefitCarousel benefits={procedure.benefitDetails} />
                            </div>

                            <FeaturedDoctorsSection />

                            <div className="container my-8">
                                <HTMLBlockRenderer type={procedure.htmlPath} />
                            </div>

                            {procedure.testimonials?.length > 0 && (
                                <TestimonialSection testimonials={procedure.testimonials} />
                            )}

                            <DocsyJourney steps={docsyJourneySteps} />

                            {procedure.faqs?.length > 0 && <FAQSection faqs={procedure.faqs} />}
                        </div>
                    </div>
                </div>

                <StickyButtons
                    onBookAppointment={() => openModal(procedure)}
                    onContactClick={() => setShowContactModal(true)}
                />

                <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
                <AppointmentModal />
            </div>
        </>
    );
};

export default ProcedureDetailPage;

// Get list of all slugs
export async function getStaticPaths() {
    const paths = Object.keys(proceduresMap).map((slug) => ({
        params: { procedureId: slug },
    }));

    return {
        paths,
        fallback: false, // or 'blocking' if you want on-demand generation
    };
}

export async function getStaticProps({ params }) {
    const procedure = proceduresMap[params.procedureId] || null;

    return {
        props: {
            initialProcedureId: params.procedureId,
        },
    };
}
