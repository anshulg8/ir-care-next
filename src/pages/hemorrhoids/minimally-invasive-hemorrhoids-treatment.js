import HeroSection from '../../components/lp/HeroSection';
import CtaBlock from '../../components/lp/CtaBlock';
import TrustStrip from '../../components/lp/TrustStrip';
import OurDoctors from '../../components/lp/OurDoctors';
import BenefitsSection from '../../components/lp/BenefitsSection';
import BottomCTA from '../../components/lp/BottomCTA';
import FeatureHighlights from '../../components/lp/FeatureHighlights';
import ComparisonTable from '../../components/lp/ComparisonTable';
import WhatIsPAE from '../../components/lp/WhatIsPae';
import ProcedureInfoSection from '../../components/lp/ProcedureInfoSection';
import VideoSection from '../../components/lp/VideoSection';
import FaqSection from '../../components/lp/FaqSection';
import StickyCTAButtons from '@/components/lp/StickyCTAButtons';
import pilesImage from '@/assets/piles-169.png';
import { consultants, proceduresArray } from '@/data';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';
import DoctorScrollList from '@/components/new/DoctorScrollList';

const heading = 'No Cuts. No Pain. Try Gentle HAE Treatment Today';
const bulletPoints = [
    'Experienced Senior Doctors (20+ years expertise)',
    'No Surgery, No General Anesthesia',
    '45–60‑Minute Procedure, Go Home Same Day'
];

const benefits = [
    {
        title: 'Benefits of Gentle HAE Treatment',
        points: [
            'No Hospital Stay—Walk Out Same Day',
            'No Cutting, No Risk to Bowel Control',
            'Over 90% See Less Bleeding & Swelling',
        ],
        bg: '#fff9f2',
    },
    {
        title: 'Why Avoid Surgery or Band Treatment?',
        points: [
            'Pain After Surgery and Long Healing Time',
            'Possible Loss of Bowel Control or Damage',
            'Risk of Scars or Return of Hemorrhoids',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Only Senior Experts with 20+ Years’ Experience',
            '6 Top Clinics with Advanced Imaging Technology',
            'Full Help with Insurance and Claims',
            'Free Travel Arrangements, Meals for Family',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who Should Consider HAE?',
        points: [
            'People with Regular Bleeding from Piles (Internal Hemorrhoids)',
            'Those Who Want to Avoid Surgery or Painful Options',
            'Not Fit for Surgery or Strong Anesthesia',
            'Want Quick Relief and Fast Return to Normal Life',
            'Worried About Bowel Control or Cuts/Scars',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: '20+ Years Doctor Experience' },
    { icon: '✂️', label: '100% Non‑Surgical Piles Relief' },
    { icon: '🔒', label: 'Bowel Control Fully Protected' },
    { icon: '🏥', label: '6 NABH‑Approved Clinics' },
];

const comparisonRows = [
    ['Only Local Numbing (awake during HAE)', 'No', 'Yes'],
    ['Cutting or Tissue Removal', 'Yes', 'No'],
    ['Damage or Scars in Anal Area', 'Yes', 'No'],
    ['Hospital Stay & Long Bed Rest', 'Yes', 'No'],
    ['Risk of Losing Bowel Control', 'Yes', 'No'],
    ['Painful and Long Recovery', 'Yes', 'No'],
];

const title = "No Surgery. Just Relief. Return Home the Same Day";
const description = "HAE (Hemorrhoid Artery Embolization) is a simple, non-surgical option instead of painful surgery or banding. It works by gently blocking the blood flow to swollen veins (piles), helping them shrink. No cuts, no hospital stay—just fast relief and full control, with a smooth and easy recovery.";

const procedureInfoSections = [
    {
        title: 'Getting Ready for Your HAE Procedure',
        points: [
            'Quick scan (CT or Doppler) before the procedure',
            'Stop any blood-thinning medicines if advised',
            'No food or drink for 6 hours before the procedure',
            'Share your health history and medication list',
            'Quick registration—no overnight stay needed',
        ],
    },
    {
        title: 'What Happens During the HAE Procedure',
        points: [
            'Doctor places a thin tube in the wrist or groin area with numbing only',
            'Using X-ray guidance, blood vessels feeding the piles are targeted',
            'Tiny particles are used to block blood supply—no cutting',
            'You stay awake and comfortable during the 45–60 minute procedure',
        ],
    },
    {
        title: 'What to Expect After HAE?',
        points: [
            'Go home within a few hours',
            'Back to work or light tasks in 1–2 days',
            'Mild soreness in the groin or lower tummy may occur',
            'Less bleeding in a few days, full relief in 2 to 6 weeks',
        ],
    },
];

const videoTitle = 'Real Relief with HAE – Watch Patient Stories';
const videoLink = 'https://www.youtube.com/embed/9zEgpuenvLU'

const primaryCTA = 'Speak to a General Surgeon for Free';
const secondaryCTA = 'Book Free Appointment';
const formCTA = 'Submit & Speak to a Surgeon for Free';
const primaryStickyCTA = 'Speak to a General Surgeon';

export default function Page2() {
    return (
        <>
            <SEO
                title={`${title} | Docsy`}
                description={`${description} | Docsy`}
                url={`${BASE_URL || ''}/m/landing`}
            // schemaMarkup={procedure.schemaMarkup}
            />
            <HeroSection heading={heading} bulletPoints={bulletPoints} doctor={consultants[2]} />
            <CtaBlock heading="Book a Free Consultation" primaryCTA={primaryCTA} formCTA={formCTA} procedure="HAE" />
            <TrustStrip />
            {/* <OurDoctors /> */}
            <DoctorScrollList />
            <BenefitsSection benefits={benefits} />
            <BottomCTA sectionId={"afterBenefits"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA sectionId={"afterComparison"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <WhatIsPAE title={title} description={description} image={pilesImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[2].faqs} />
            <BottomCTA sectionId={"afterFaqs"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons primaryStickyCTA={primaryStickyCTA} secondaryCTA={secondaryCTA} />
        </>
    );
}
