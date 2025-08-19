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
import fibroidImage from '@/assets/fibroids-169.png';
import { consultants, proceduresArray } from '@/data';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';

const heading = 'Shrink Fibroids—Uterus Intact with Painless UFE';
const bulletPoints = [
    'Expert Interventional Radiologists (20+ yrs experience)',
    'No Cuts, No Hysterectomy, Preserve Fertility',
    '1–2‑Hour Procedure with Same‑Day Discharge'
];

const benefits = [
    {
        title: 'Benefits of Scar‑Free UFE',
        points: [
            '1–2‑Hour Procedure, Home Same Day',
            'No Incisions, No General Anesthesia, Uterus Preserved',
            '85–90% Experience Lighter Periods & Less Pain',
        ],
        bg: '#fff9f2',
    },
    {
        title: 'Why Avoid Hysterectomy or Myomectomy?',
        points: [
            'Longer Recovery, Higher Complication Risk',
            'Potential Loss of Fertility with Hysterectomy',
            'Surgical Scarring and Hospital Stay',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Only Senior Vascular Specialists (20+ yrs exp)',
            '6 World‑Class Centres with Latest US‑CE Technology',
            'Full Insurance Claim Support & Patient Logistics',
            'Free Pickup & Drop, Meals For Family',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who is a Good Candidate for UFE?',
        points: [
            'Women with heavy bleeding or pelvic pressure',
            'Those who wish to preserve fertility',
            'Avoid major surgery or general anesthesia',
            'Prefer minimally invasive, fast‑recovery options',
            'Concerned about surgical risks or scarring',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: '20+ Yrs Avg. Doctor Experience' },
    { icon: '✂️', label: '100% Organ‑Preserving Embolization' },
    { icon: '🔒', label: 'Quick Return to Daily Life' },
    { icon: '🏥', label: '6 NABH‑Certified Locations' },
];

const comparisonRows = [
    ['Local Anesthesia (awake during UFE)', 'No', 'Yes'],
    ['Uterus Removed (hysterectomy risk)', 'Yes', 'No'],
    ['Large Abdominal Incision & Scar', 'Yes', 'No'],
    ['Hospital Stay & Bed Rest', 'Yes', 'No'],
    ['Long‑Term Fertility Loss', 'Yes', 'No'],
    ['Risk of Surgical Complications', 'Yes', 'No'],
];

const title = "No Hysterectomy. Just Relief. Return Home Same Day";
const description = "Uterine Fibroid Embolization (UFE) is a minimally invasive, effective alternative to hysterectomy or myomectomy. It’s a pin‑hole procedure performed by interventional radiologists that shrinks fibroids, preserves the uterus, avoids major surgery, and enables lighter periods and less pain—all with same‑day discharge and faster recovery.";

const procedureInfoSections = [
    {
        title: 'How to Prepare for Your UFE Procedure',
        points: [
            'Pelvic MRI or ultrasound imaging prior',
            'Complete blood work & gynecological evaluation',
            '6‑hour fasting on day of procedure',
            'Share your medications & medical history',
            'Minimal paperwork, outpatient setup only',
        ],
    },
    {
        title: 'What Happens During the UFE Procedure',
        points: [
            'Interventional Radiologist inserts tiny catheter via wrist or groin under local anesthesia',
            'Embolic agents block blood flow to fibroids—no cuts, no general anesthesia',
            'Procedure lasts 1–2 hours and is entirely pain‑free',
            'Stay awake and comfortable throughout',
        ],
    },
    {
        title: 'What to Expect After UFE?',
        points: [
            'Discharge within a few hours',
            'Desk work in a few days, full return within a week',
            'No incisions, no surgical recovery',
            'Noticeably lighter periods and reduced pelvic pressure within cycles, matching surgical outcomes',
        ],
    },
];

const videoTitle = 'Real Relief with UFE – Watch Real Patient Stories';
const videoLink = 'https://www.youtube.com/embed/9zEgpuenvLU'

const primaryCTA = 'Speak to a Gynecologist for Free';
const secondaryCTA = 'Book Free Appointment';
const formCTA = 'Submit & Speak to a Gynecologist for Free';
const primaryStickyCTA = 'Speak to a Gynecologist';

export default function Page2() {
    return (
        <>
            <SEO
                title={`${title} | Docsy`}
                description={`${description} | Docsy`}
                url={`${BASE_URL || ''}/m/landing`}
            // schemaMarkup={procedure.schemaMarkup}
            />
            <HeroSection heading={heading} bulletPoints={bulletPoints} doctor={consultants[1]} />
            <CtaBlock heading="Book a Free Consultation" primaryCTA={primaryCTA} formCTA={formCTA} />
            <TrustStrip />
            <OurDoctors />
            <BenefitsSection benefits={benefits} />
            <BottomCTA sectionId={"afterBenefits"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA sectionId={"afterComparison"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <WhatIsPAE title={title} description={description} image={fibroidImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[0].faqs} />
            <BottomCTA sectionId={"afterFaqs"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons primaryStickyCTA={primaryStickyCTA} secondaryCTA={secondaryCTA} />
        </>
    );
}
