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

const heading = 'No Cuts. No Pain. Choose Painless HAE Today';
const bulletPoints = [
    'Senior Interventional Radiologists (20+ years experience)',
    'No Incisions, No General Anesthesia, Preserve Anal Anatomy',
    '45–60‑Minute Procedure with Same‑Day Discharge'
];

const benefits = [
    {
        title: 'Benefits of Minimally Invasive HAE',
        points: [
            'Outpatient Procedure, Walk Home Same Day',
            'No Surgical Wound, No Risk to Continence',
            '90%+ Success in Reducing Bleeding & Swelling',
        ],
        bg: '#fff9f2',
    },
    {
        title: 'Why Avoid Hemorrhoidectomy or Banding?',
        points: [
            'Painful Recovery and Longer Downtime',
            'Risk of Incontinence or Anal Damage',
            'Scarring and Recurrence Risk',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Only Senior Interventional Specialists (20+ yrs exp)',
            '6 World‑Class Centres with US‑Grade Imaging Tech',
            'End‑to‑End Insurance & Claims Assistance',
            'Free Pickup & Drop, Meals For Family',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who Is a Good Candidate for HAE?',
        points: [
            'Patients with Persistent Bleeding from Internal Hemorrhoids',
            'Those Who Prefer to Avoid Surgery',
            'Not Cleared for Anesthesia or High-Risk for Surgery',
            'Looking for Fast Recovery & Less Pain',
            'Concerned About Bowel Control or Scarring',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: '20+ Yrs Avg. Doctor Experience' },
    { icon: '✂️', label: '100% Non‑Surgical Hemorrhoid Relief' },
    { icon: '🔒', label: 'No Interrupted Continence' },
    { icon: '🏥', label: '6 NABH‑Certified Locations' },
];

const comparisonRows = [
    ['Local Anesthesia Only (awake during HAE)', 'No', 'Yes'],
    ['Tissue Removed or Cut (surgical risk)', 'Yes', 'No'],
    ['Anal Trauma or Scarring', 'Yes', 'No'],
    ['Hospital Stay & Bed Rest', 'Yes', 'No'],
    ['Risk of Incontinence', 'Yes', 'No'],
    ['Long Painful Recovery', 'Yes', 'No'],
];

const title = "No Surgery. Just Relief. Head Home Same Day";
const description = "Hemorrhoidal Artery Embolization (HAE) is a minimally invasive, image‑guided alternative to hemorrhoidectomy or banding. Tiny embolic particles block the blood supply to internal hemorrhoids, causing them to shrink—no cuts, no hospital stay, and quick recovery, with preserved continence and long‑lasting relief.";

const procedureInfoSections = [
    {
        title: 'How to Prepare for Your HAE Procedure',
        points: [
            'Brief imaging (CT or Doppler) pre‑procedure',
            'Stop blood thinners if advised',
            '6‑hour fasting before procedure',
            'Share your medical history and meds',
            'Minimal paperwork—outpatient setup',
        ],
    },
    {
        title: 'What Happens During the HAE Procedure',
        points: [
            'Catheter inserted via wrist or groin under local anesthesia',
            'Guided by X‑ray to superior rectal arteries feeding hemorrhoids',
            'Embolic particles or coils injected to stop blood flow',
            'No cuts, no general anesthesia, stay awake comfortably',
        ],
    },
    {
        title: 'What to Expect After HAE?',
        points: [
            'Go home within hours',
            'Return to work or light activity in 1–2 days',
            'Mild groin or pelvic soreness possible for a few days',
            'Bleeding reduction within days; full relief in 2–6 weeks',
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
            <CtaBlock heading="Book a Free Consultation" primaryCTA={primaryCTA} formCTA={formCTA} />
            <TrustStrip />
            <OurDoctors />
            <BenefitsSection benefits={benefits} />
            <BottomCTA sectionId={"afterBenefits"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA sectionId={"afterComparison"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <WhatIsPAE title={title} description={description} image={pilesImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[0].faqs} />
            <BottomCTA sectionId={"afterFaqs"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons primaryStickyCTA={primaryStickyCTA} secondaryCTA={secondaryCTA} />
        </>
    );
}
