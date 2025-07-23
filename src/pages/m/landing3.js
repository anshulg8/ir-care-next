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
import prostateImage from '../../assets/prostate-169.png';
import { proceduresArray } from '@/data';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';

const heading = 'Fast BPH Relief — No Hospital Stay';
const bulletPoints = [
    'Certified Top Doctors',
    'No Cuts, No Catheter, No Hospital Stay',
    'Free Cab Pickup & Drop, Meals for Family',
]

const benefits = [
    {
        title: 'Quick Recovery Without Surgery',
        points: [
            '2-Hour PAE, Back home the same day',
            'No Anaesthesia- Related Downtime',
            'Resume Normal Routine in 1–2 Days',
        ],
        bg: '#fff9f2',
    },
    {
        title: "TURP Slows Recovery, Adds Risk",
        points: [
            'TURP Slows Recovery, Adds Risk',
            '5% face risk of lifelong urine incontinence ',
            '6% develop stricture needing emergency surgery',
            '7% risk permanent sexual erection issues (ED)'
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Free Pickup & Drop Provided',
            'Nutritious Meals for Family',
            '20+ Yrs Experienced Specialists',
            'Only Senior Vascular Specialists'
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who is a Good Candidate for PAE?',
        points: [
            'Patients with multiple health conditions (comorbidities)',
            'Those who cannot undergo general anesthesia',
            'Older adults with high surgical risk',
            'Men who prefer to avoid surgery',
            'Those concerned about sexual side effects',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: 'Same - Day Discharge Process' },
    { icon: '✂️', label: 'USFDA-Approved Non-Surgical Care' },
    { icon: '🔒', label: 'Fast, Safe Recovery Protocol' },
    { icon: '🏥', label: 'Performed Only by Specialists' },
];

const comparisonRows = [
    ['Long Hospital Stay', 'Yes', 'No'],
    ['Return Same Day', 'No', 'Yes'],
    ['Painful Catheter Use', 'Yes', 'No'],
    ['Recovery Can Disrupt Work', 'Yes', 'No'],
    ['Sexual dysfunction possibility', 'Yes', 'No'],
    ['Minimizes Life Disruption', 'No', 'Yes'],
];

const title = "Go Home Same Day. No Recovery Time"
const description = "PAE is a modern, image-guided alternative to TURP and laser prostate surgery. Performed by a Vascular Specialist, it takes ~2 hours and avoids cuts, catheter, or long recovery. Patients walk out the same day."

const procedureInfoSections = [
    {
        title: 'How to Prepare for Your PAE Procedure',
        points: [
            'Blood and urine test required',
            'MRI/Ultrasound for confirmation',
            'No food 6 hours before PAE',
            'Share all ongoing medications',
            'Minimal prep, zero overnight stay(Unless Insurance Mandated (Daycare Coverage Not Provided)',
        ],
    },
    {
        title: 'What Happens During the PAE Procedure',
        points: [
            'Your Vascular Specialist inserts a microcatheter through the wrist/groin to block prostate arteries. No surgery, no pain, and you stay awake. Entire process lasts around 2 hours.',
            'Local anaesthesia, not general',
            'No pain or surgical incision',
            'You\'re awake the whole time',
        ],
    },
    {
        title: 'What to Expect After PAE?',
        points: [
            'Home same day—no admission',
            'Normal activity in 1–2 days',
            'No catheter or wound dressing',
            'Improvement within 2–4 weeks'
        ],
    },
];

const videoTitle = 'See How PSA + PAE Transformed Lives'
const videoLink = 'https://www.youtube.com/embed/YH3CYQcihk0'

export default function Page3() {
    return (
        <>
            <SEO
                title={`${title} | Docsy`}
                description={`${description} | Docsy`}
                url={`${BASE_URL || ''}/m/landing`}
            // schemaMarkup={procedure.schemaMarkup}
            />
            <HeroSection heading={heading} bulletPoints={bulletPoints} />
            <CtaBlock heading="Book a Free Consultation" />
            <TrustStrip />
            <OurDoctors />
            <BenefitsSection benefits={benefits} />
            <BottomCTA />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA />
            <WhatIsPAE title={title} description={description} image={prostateImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[0].faqs} />
            <BottomCTA />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons />
        </>
    );
}
