import React from 'react';
import { proceduresArray } from '../../data.js';
import BenefitsCarousel from '../BenefitCarousel.js';
import ScoreTag from './ScoreTag.js';

const PaeQuizResult = ({ score, maxScore }) => {
    let severity = '';
    if (score <= 7) severity = 'mild';
    else if (score <= 19) severity = 'moderate';
    else severity = 'severe';

    const procedure = proceduresArray.find(p => p.slug == 'prostatic-artery-embolization-pae');

    return (
        <div className="font-sans leading-relaxed text-gray-700 text-lg">
            <ScoreTag score={`${score}/${maxScore}`} severity={severity} />

            {severity === 'mild' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Your Prostate Symptoms Are Mild – Here&apos;s How to Keep Them That Way.</h2>
                    <p className="mb-4">
                        Your prostate symptoms currently reflect <b>early-stage Benign Prostatic Hyperplasia (BPH)</b> — a natural enlargement of your prostate gland that commonly affects men after age 50 (and increasingly, in younger men too). Mild symptoms usually include occasional increased urinary urgency or minor changes in urine flow.
                    </p>
                    <h3 className="text-xl font-semibold my-3">What&apos;s Happening in Your Body:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>As you age, hormonal shifts (especially increased levels of dihydrotestosterone, DHT) cause your prostate to slowly grow.</li>
                        <li>Currently, your symptoms indicate minimal obstruction, but BPH often gradually progresses. Approximately <b>15% of men with mild symptoms see significant worsening within a year</b> without proper management.</li>
                    </ul>
                    <h3 className="text-xl font-semibold my-3">Next Steps Based on Latest Clinical Evidence:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><b>Lifestyle adjustments</b> (validated to slow disease progression): Limit drinking any fluids before bedtime, reduce caffeine and alcohol intake, and practice pelvic floor muscle exercises (Kegel exercises). </li>
                        <li><b>Annual monitoring recommended</b> to detect any early worsening of symptoms. </li>
                    </ul>
                </section>
            )}

            {severity === 'moderate' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Moderate Symptoms Detected – You Have Effective Options Beyond Medication.</h2>
                    <p className="mb-4">
                        Your responses suggest <b>moderate Benign Prostatic Hyperplasia (BPH)</b>. Typical symptoms at this stage include frequent night-time urination, weaker urinary flow, or incomplete bladder emptying, significantly affecting quality of life.
                    </p>
                    <h3 className="text-xl font-semibold my-3">What&apos;s Happening in Your Body:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Your enlarged prostate gland is pressing against your urethra (urine passage), causing bladder muscle strain. Prolonged strain can eventually weaken the bladder, potentially leading to retention or recurrent infections.</li>
                        <li>Without intervention, <b>about 40% of moderate cases progress within 3–5 years</b>.</li>
                    </ul>
                    <h3 className="text-xl font-semibold my-3">Treatment Choices:</h3>
                    <p className="mb-2 font-semibold">Medications:</p>
                    <p className="mb-4">
                        (Alpha-blockers, 5-alpha reductase inhibitors) can temporarily ease symptoms but have side-effects (fatigue, dizziness when suddenly sitting up, sexual dysfunction) and do not permanently stop prostate growth. While Alpha-blockers start working in 2-4 weeks, 5-alpha reductase inhibitors take a few months to start working – and both only work upto a certain stage in disease severity.
                    </p>
                    <p className="mb-2 font-semibold">PAE (Prostatic Artery Embolization):</p>
                    <p className="mb-4">
                        An FDA-approved, American Urology Association recommended minimally invasive outpatient procedure. It reduces prostate size without surgery, with minimal recovery time, and preserves sexual function. Clinical data (Journal of Urology, 2023) indicates <b>80-90% symptom improvement lasting 5+ years</b>.
                    </p>

                    <div className="my-8">
                        <BenefitsCarousel benefits={procedure.benefitDetails} />
                    </div>

                    <h3 className="text-xl font-semibold my-3">Why Consider PAE Now?</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>PAE treats the root cause—reducing prostate volume permanently—offering significant symptom relief with minimal risk. </li>
                        <li>Day-care procedure, no incisions or catheter, typically resume normal activities within 48 hours. </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Cost & Coverage:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Starting from ₹2.5 lakh (all-inclusive) for cash payment.  </li>
                        <li>Both cashless and reimbursement coverage available, covered by most premium insurance providers – billing amount may increase by 10-20% for some insurance companies.</li>
                    </ul>
                </section>
            )}

            {severity === 'severe' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Severe Prostate Symptoms Detected – Prompt Action Recommended.</h2>
                    <p className="mb-4">
                        Your symptom profile indicates <b>severe Benign Prostatic Hyperplasia (BPH)</b>. At this stage, symptoms severely impact daily life—frequent urgency, weak stream, nighttime awakenings, and high discomfort levels are common.
                    </p>
                    <h3 className="text-xl font-semibold my-3">Clinical Reality of Severe BPH:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>The significantly enlarged prostate gland obstructs urine flow, leading to constant bladder strain, significantly increasing risks like acute urinary retention (complete urinary blockage – a medical emergency requiring hospitalisation and insertion of catheter into penile opening and bladder), frequent urinary tract infections, and potentially irreversible bladder damage. </li>
                        <li>According to the European Association of Urology, severe BPH has a <b>50% risk of acute urinary retention</b> or other complications within 2 years if left untreated. </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Urgent Treatment Needed – Why PAE?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Prostatic Artery Embolization (PAE) is an advanced, minimally invasive treatment option designed precisely for severe cases. It is FDA-approved, and American Urology Association recommended, currently offered in almost all big centres in USA and Europe. Clinical trials report a <b>90% symptom improvement</b> with fewer risks compared to conventional surgery (TURP), including no surgical side effects like loss of urinary control, and no impact on sexual function (Journal of Vascular and Interventional Radiology, 2023).</li>
                        <li>Recovery is swift—patients usually discharged the same day with no catheter required, making it ideal for quick symptom relief and immediate quality-of-life enhancement.</li>
                    </ul>

                    <div className="my-8">
                        <BenefitsCarousel benefits={procedure.benefitDetails} />
                    </div>

                    <h3 className="text-xl font-semibold my-3">Cost Transparency & Coverage:</h3>
                    <p className="mb-4">
                        Procedure cost ranges between ₹2.5 lakh – ₹4.5 lakh, transparent pricing with easy EMI options and premium insurance coverage.
                    </p>
                </section>
            )}
        </div>
    );
};

export default PaeQuizResult;
