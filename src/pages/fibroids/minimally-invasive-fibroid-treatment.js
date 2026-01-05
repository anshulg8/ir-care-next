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
import DoctorScrollList from '@/components/new/DoctorScrollList';

const heading = 'Shrink Fibroids—Keep Your Uterus with Pain-Free UFE';
const bulletPoints = [
    'Experienced Doctors (20+ Years in Treatment)',
    'No Surgery, No Uterus Removal, Fertility Safe',
    '1–2‑Hour Procedure, Go Home Same Day'
];

const benefits = [
    {
        title: 'Benefits of Scar‑Free UFE',
        points: [
            'Short 1–2 Hour Procedure, Discharge Same Day',
            'No Cuts, No Full Anesthesia, Uterus Stays Intact',
            '85–90% Report Lighter Periods & Less Pain',
        ],
        bg: '#fff9f2',
    },
    {
        title: 'Why Avoid Surgery to Remove Fibroids?',
        points: [
            'Takes Longer to Recover, Higher Risk of Side Effects',
            'Removing Uterus Means No Future Pregnancy',
            'Surgical Cuts, Scars, and Days in Hospital',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Only Senior Vascular Experts (20+ Years Experience)',
            '6 Leading Centres with Latest Global Technology',
            'Support with Insurance & All Travel Help',
            'Free Pickup & Drop, Food for Family Members',
        ],
        bg: '#faf8fd',
    },
    {
        title: 'Who Can Choose UFE?',
        points: [
            'Women with heavy periods or lower belly pressure',
            'Want to keep the option to have kids',
            'Don’t want big surgery or sleep-through anesthesia',
            'Prefer quicker, simpler treatments',
            'Worried about cuts, scars, or long hospital stays',
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: '20+ Years Doctor Experience' },
    { icon: '✂️', label: 'Keeps All Organs—No Removal' },
    { icon: '🔒', label: 'Back to Normal Life Quickly' },
    { icon: '🏥', label: '6 NABH‑Approved Centres' },
];

const comparisonRows = [
    ['Local Numbing (awake during UFE)', 'No', 'Yes'],
    ['Uterus Taken Out (surgical removal)', 'Yes', 'No'],
    ['Big Cut on Belly & Scar', 'Yes', 'No'],
    ['Need to Stay in Hospital', 'Yes', 'No'],
    ['Chance of Not Getting Pregnant Again', 'Yes', 'No'],
    ['Higher Chance of Surgery Problems', 'Yes', 'No'],
];

const title = "No Surgery. Just Relief. Go Home Same Day";
const description = "UFE (Uterine Fibroid Embolization) is a safe, simple way to shrink fibroids without surgery. It’s a small pinhole procedure done by expert doctors to block blood flow to fibroids. No uterus removal, no big cuts—just lighter periods, less pain, and same-day discharge with fast recovery.";

const procedureInfoSections = [
    {
        title: 'Getting Ready for Your UFE Procedure',
        points: [
            'Ultrasound or MRI of the pelvic area before treatment',
            'Basic blood tests and checkup by women’s health doctor',
            'Don’t eat or drink for 6 hours before the procedure',
            'Tell us about your health and medicines you take',
            'Quick paperwork, no hospital stay needed',
        ],
    },
    {
        title: 'What Happens During the UFE Procedure',
        points: [
            'Doctor inserts a tiny tube through the wrist or groin with numbing only',
            'Tiny particles block blood flow to fibroids—no cuts, no full sleep',
            'Takes 1–2 hours, completely pain-free',
            'You’re awake, relaxed, and monitored the whole time',
        ],
    },
    {
        title: 'What to Expect After UFE?',
        points: [
            'Leave clinic after a few hours of rest',
            'Back to desk work in a few days, full recovery in a week',
            'No stitches or wound healing needed',
            'Periods become lighter and pain lessens in a few months—just like with surgery',
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
            <CtaBlock heading="Book a Free Consultation" primaryCTA={primaryCTA} formCTA={formCTA} procedure="UFE" />
            <TrustStrip />
            {/* <OurDoctors /> */}
            <DoctorScrollList />
            <BenefitsSection benefits={benefits} />
            <BottomCTA sectionId={"afterBenefits"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <FeatureHighlights features={features} />
            <ComparisonTable rows={comparisonRows} />
            <BottomCTA sectionId={"afterComparison"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            <WhatIsPAE title={title} description={description} image={fibroidImage} />
            <ProcedureInfoSection procedureInfo={procedureInfoSections} />
            <VideoSection videoTitle={videoTitle} videoLink={videoLink} />
            <FaqSection faqs={proceduresArray[1].faqs} />
            <BottomCTA sectionId={"afterFaqs"} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
            {/* <DisclaimerSection /> */}
            <StickyCTAButtons primaryStickyCTA={primaryStickyCTA} secondaryCTA={secondaryCTA} />
        </>
    );
}
