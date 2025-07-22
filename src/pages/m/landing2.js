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

const heading = 'Skip TURP Surgery — Discover Safer PAE Option';
const bulletPoints = [
    'Certified Doctors & USFDA Approved',
    'No Cuts, No Catheter, No Hospital Stay',
    'Only Patient Consent Required*'
]

const benefits = [
    {
        title: 'Benefits of Prostate Embolization',
        points: [
            '20 Min Procedure, Discharge in 3 Hrs',
            'No Wound, No General Anaesthesia',
            'All Men with BPH Are Eligible',
        ],
        bg: '#fff9f2',
    },
    {
        title: "Why Should You Avoid Traditional TURP Surgery?",
        points: [
            'Bleeding, Incontinence, or Stricture',
            'Side Effects: Catheter, Anaesthesia Risks',
            'Possible Sexual Complications',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Free Pickup & Drop',
            'NABH-Accredited PAE Clinics',
            'No Cost EMI on PAE',
            'Performed by Vascular Specialists',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'When Is PAE Eligible as a Medical Procedure?',
        points: ['Requires PAE Expert\'s Approval', 'Must Have Symptomatic BPH'],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: 'USFDA Approved Treatment' },
    { icon: '✂️', label: 'No Stitches or Hospital Stay' },
    { icon: '🔒', label: '100% Confidential & Private' },
    { icon: '🏥', label: 'Daycare Procedure – Go Home the same day' },
];

const comparisonRows = [
    ['Lifetime Follow-up Consultations', 'No', 'Yes'],
    ['24×7 Dedicated Care Buddy', 'No', 'Yes'],
    ['No Cost EMI', 'No', 'Yes'],
    ['Pickup & Drop Service', 'No', 'Yes'],
    ['Discharge Process', 'Slow', 'Fast'],
    ['Minimum Paperwork', 'No', 'Yes'],
];

const title = "What is PAE for Prostate?"
const description = "Prostatic Artery Embolization (PAE) is a modern, minimally invasive procedure used to treat Benign Prostatic Hyperplasia (BPH). Unlike TURP, PAE requires no hospital stay, stitches, or general anesthesia. It’s performed by an interventional radiologist who blocks blood flow to the prostate’s enlarged area, shrinking it naturally. It is USFDA-approved and recognized by the European Urology Association. PAE is outpatient, safe for elderly patients, and does not affect sexual function — a common concern with surgical options."

const procedureInfoSections = [
    {
        title: 'How to Prepare for Your PAE Appointment',
        points: [
            'Carry Government-Issued ID',
            'Inform Us About Current Medications',
            'Do Not Shave or Self-Prep',
            'Avoid Eating or Drinking 6 Hrs Prior',
        ],
    },
    {
        title: 'What Happens During the PAE Procedure',
        points: [
            'Full Privacy & Minimal Pain',
            'Procedure Time: ~45 Minutes',
            'Discharge on the same day',
        ],
    },
    {
        title: 'Post-Procedure Recovery Guide',
        points: [
            'Rest: Avoid Strain for a Day or Two',
            'Complete Your Prescribed Medicines',
            'Follow-Up as Advised by Doctor',
            'Avoid Sexual Activity for 1 Week',
        ],
    },
];

const videoTitle = 'Listen to our Experts'
const videoLink = 'https://www.youtube.com/embed/YH3CYQcihk0'

export default function Page2() {
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
