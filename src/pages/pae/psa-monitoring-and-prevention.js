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

const heading = 'Worried About High PSA? We Can Help';
const bulletPoints = [
    'Consult Senior Urologists',
    'Get Diagnosis - Prostate Cancer or Just Enlarged Prostate (BPH)?',
    '100% Confidential, Fast Reporting'
]

const benefits = [
    {
        title: 'Not Every High PSA Is Cancer',
        points: [
            'Identify BPH vs Cancer Accurately',
            'Avoid Panic. Get Correct Next Step',
            'Treatment Plan Tailored to You',
        ],
        bg: '#fff9f2',
    },
    {
        title: "What Happens If You Ignore PSA Rise?",
        points: [
            'Can Miss Early Cancer Warning Signs',
            'BPH May Worsen Without Timely Action',
            'Wrong Procedure Can Risk Complications',
        ],
        bg: '#f5f8fb',
    },
    {
        title: 'Why Choose Docsy?',
        points: [
            'Free Pickup & Drop Available',
            'Family Meals at All Our Centres',
            'Urologists & Vascular Specialists with 17+ Yrs Exp',
            'MRI/PSA Reviewed by Expert Clinical Team'
        ],
        bg: '#faf8fd',
    },
    {
        title: 'What Happens After High PSA is Detected?',
        points: [
            'Report Reviewed by Prostate Specialist',
            'We Plan Treatment Only If Needed'
        ],
        bg: '#fff9f2',
    },
];

const features = [
    { icon: '✅', label: 'Treatment Only After Right Diagnosis' },
    { icon: '✂️', label: 'Avoid Overdiagnosis or Surgery' },
    { icon: '🔒', label: '100% Private & Ethical' },
    { icon: '🏥', label: 'Expert PSA Interpretation' },
];

const comparisonRows = [
    ['Long Hospital Stay', 'Yes', 'No'],
    ['Return Same Day', 'No', 'Yes'],
    ['Painful Catheter Use', 'Yes', 'No'],
    ['Recovery Can Disrupt Work', 'Yes', 'No'],
    ['Sexual dysfunction possibility', 'Yes', 'No'],
    ['Offer Surgery-Free BPH Option', 'No', 'Yes'],
];

const title = "One PSA Test. Many Possibilities."
const description = "If your PSA is elevated, the cause might be cancer, infection, or BPH. We help you know the difference. If it turns out to be BPH, our Vascular Specialists offer PAE — a non-surgical, superior, low-risk option to restore quality of life without needing any cuts, catheter insertion or hospital stay. If cancer is detected instead, we guide you to the right specialists for further care."

const procedureInfoSections = [
    {
        title: 'What to Do After a PSA Test?',
        points: [
            'Send Us Your PSA/MRI/Ultrasound',
            'Our Team Confirms or Rules Out BPH',
            'Meet a Vascular Specialist for Advice',
            'We Recommend the Right Next Step',
            'No Unnecessary Scans or Treatment',
            'Expert-led guidance and care coordination if cancer is detected',
        ],
    },
    {
        title: 'If BPH, Here’s What Happens in PAE',
        points: [
            'Our Superspecialists guide you between choosing TURP surgery or the new, advanced PAE — a 2-hour, painless, non-surgical procedure that shrinks the prostate by inserting a pin-hole camera through your wrist.',
            'No General Anaesthesia Needed',
            'Stay Awake, Talk During Procedure',
            'Walk Out Same Day, No Admission'
        ],
    },
    {
        title: 'What’s Next After PSA Diagnosis?',
        points: [
            'We Track Progress With Free Follow-Ups at 1 month, 3 months and 6 months',
            'PAE Patients Improve Within Weeks',
            'Confidently Resume Daily Life',
        ],
    },
];

const videoTitle = 'See How PSA Guided the Right Treatment'
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
