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
import prostateImage from '@/assets/prostate-169.png';
import { proceduresArray } from '@/data';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';

const heading = 'Skip Prostate Surgery — Choose Painless PAE Today';
const bulletPoints = [
    'Certified Top Doctors (20+ years experience)',
    'No Cuts, No Catheter, No Hospital Stay',
    '2-Hour Procedure with Same-Day Discharge'
]

const benefits = [
    {
        title: 'Benefits of Scar-Free PAE',
        points: [
            '2-Hour Procedure, Home Same Day',
            'No Wound, No General Anaesthesia, No Penile Catheter',
            'Most Men With BPH Are Eligible',
        ],
        bg: '#fff9f2',
    },
    {
        title: "Why Avoid TURP or Laser Surgery?",
        points: [
            '5% risk of permanent urine leakage',
            'Stricture (6% risk) can be life threatening, needs emergency surgery',
            '7% chance of permanent erectile dysfunction (sexual erection issue) after TURP',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Only Senior Vascular Specialists (20+ yrs exp)',
            '6 World-Class Centres with Latest US Technology',
            'End-to-End Insurance Claims Processing Handholding',
            'Free Pickup & Drop, Meals For Family',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who is a Good Candidate for PAE?',
        points: [
            'Patients with multiple conditions like Diabetes, Asthma, COPD, Heart disease',
            'Those who cannot undergo general anesthesia',
            'Older adults with high surgical risk',
            'Men who prefer to avoid surgery',
            'Those concerned about sexual side effects',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: '17+ Yrs Avg. Doctor Experience' },
    { icon: '✂️', label: '100% Surgery-Free BPH Relief' },
    { icon: '🔒', label: 'No Recovery Delay' },
    { icon: '🏥', label: '6 NABH-Certified Locations' },
];

const comparisonRows = [
    ['Fully awake in PAE(only Local Anaesthesia)', 'No', 'Yes'],
    ['Strictures leading to possibile emergency surgery', 'Yes', 'No'],
    ['Painful Penile Catheter 3 - 5 days post surgery', 'Yes', 'No'],
    ['Need to take pants off', 'Yes', 'No'],
    ['Sexual dysfunction possibility', 'Yes', 'No'],
    ['Risk of Nerve Damage', 'Yes', 'No'],
];

const title = "No Surgery. Just Relief. Walk Out Free"
const description = "Prostate Artery Embolization (PAE) is a US-FDA approved, superior, non-surgical alternative to TURP (including bipolar, channel & saline), GreenLight laser surgery and Rezum steam therapy. It shrinks the prostate via a pinhole procedure done by a vascular specialist—no cutting, no hospital stay, no catheter. Unlike TURP or it's other alternatives, PAE avoids the risk of permanent Erectile Dysfunction, Incontinence (urine leakage) or even potentially life-threatening Stricture complication."

const procedureInfoSections = [
    {
        title: 'How to Prepare for Your PAE Procedure',
        points: [
            'Blood and urine test before PAE',
            'MRI or Ultrasound to confirm',
            '6-hr fasting before your procedure',
            'Tell us all your medications',
            'Minimal paperwork, zero admission'
        ],
    },
    {
        title: 'What Happens During the PAE Procedure',
        points: [
            'Vascular Specialist inserts a thin tube via wrist or groin to block prostate arteries. Procedure is painless, lasts 1.5-2 hours, and uses no cuts or general anaesthesia.',
            'Only local anaesthesia used',
            'No pain or surgical incision',
            'Stay awake and relaxed throughout'
        ],
    },
    {
        title: 'What to Expect After PAE?',
        points: [
            'Discharge within 3–4 hours',
            'Resume work in 1–2 days, Back to Gym in a Week',
            'No catheter or bandage needed',
            'Sustained Improvement in Symptoms within 4-6 weeks, clinically same results as surgery'
        ],
    },
];

const videoTitle = 'Real Stories of Painless PAE – Watch Now'
const videoLink = 'https://www.youtube.com/embed/9zEgpuenvLU'

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
            <BottomCTA sectionId={"afterBenefits"} />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA sectionId={"afterComparison"} />
            <WhatIsPAE title={title} description={description} image={prostateImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[0].faqs} />
            <BottomCTA sectionId={"afterFaqs"} />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons />
        </>
    );
}
