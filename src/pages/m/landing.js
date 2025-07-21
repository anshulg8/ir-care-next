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

const heading = 'Best Prostate Control Clinic in Mumbai';
const bulletPoints = [
  'Certified Doctors and Clinics',
  '100% Legal, Confidential & Safe',
  "Only Patient's Consent Required",]

const benefits = [
  {
    title: 'Benefits of Procedure',
    points: [
      '20 mins procedure, Discharge in 3 hrs',
      'No Scar, No Wound, No side-effects',
      'All adult women (married/unmarried) can avail',
    ],
    bg: '#fff9f2',
  },
  {
    title: "Why pills shouldn't be taken without doctor's consultation?",
    points: [
      'Heavy Blood Loss',
      'Side Effects: Nausea, Dizziness, etc.',
      'Incomplete Birth Control',
    ],
    bg: '#f5f8fb',
  },
  {
    title: 'Why Docsy?',
    points: [
      'Free Pick & Drop',
      'Birth Control Licensed Clinics',
      'No Cost EMI Available',
      'Certified and Experienced Gynaecologists',
    ],
    bg: '#faf8fd',
  },
  {
    title: 'Legal Considerations for Birth Control',
    points: ['Above 18 years of Age', 'Pregnancy is from 5 to 20 weeks'],
    bg: '#fff9f2',
  },
];

const features = [
  { icon: '✅', label: 'USFDA Approved Procedures' },
  { icon: '✂️', label: 'No Stitches.' },
  { icon: '🔒', label: 'Complete Confidentiality' },
  { icon: '🏥', label: 'Day Care Procedure' },
];

const comparisonRows = [
  ['Lifetime Follow-up Consultations', 'No', 'Yes'],
  ['24×7 Dedicated Care Buddy', 'No', 'Yes'],
  ['No Cost EMI', 'No', 'Yes'],
  ['Pickup & Drop Service', 'No', 'Yes'],
  ['Discharge Process', 'Slow', 'Fast'],
  ['Minimum Paper Work', 'No', 'Yes'],
];

const title = "What is PAE?"
const description = "Prostatic Artery Embolization (PAE) is a minimally invasive procedure used to treat enlarged prostate or BPH. It involves blocking the arteries supplying blood to the prostate, causing it to shrink over time. This technique avoids the need for traditional surgery, has minimal downtime, and preserves sexual function. It’s a safe, outpatient alternative for men looking for long-term relief without invasive intervention."

const procedureInfoSections = [
  {
    title: 'How to Prepare for In-Clinic Birth Control',
    points: [
      'Carry your age proof',
      'Inform your doctor about all your current medications and supplements',
      'Do not shave the surgical site yourself',
      'Your doctor may ask you to stop eating anything solid/liquid (even water) for at least 4–6 hours before the surgery.',
      'Carry a pack of soft sanitary pads to use for post-surgical bleeding.',
    ],
  },
  {
    title: 'What to Expect During the Procedure',
    points: [
      'Complete Privacy',
      'Lasts for 45–60 minutes',
      'Discharge in 3 hrs after Birth Control',
    ],
  },
  {
    title: 'Care After the Procedure',
    points: [
      'Rest: Take a little break and let your body recover',
      'Complete your full course of medicines',
      'Do not skip your follow-ups',
      'Do not use tampons, but only soft sanitary pads',
    ],
  },
];

const videoTitle = 'Listen to our Experts'
const videoLink = 'https://www.youtube.com/embed/YH3CYQcihk0'

export default function Page() {
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
