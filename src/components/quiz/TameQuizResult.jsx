import React from 'react';
import { proceduresArray } from '../../data.js';
import ScoreTag from './ScoreTag.jsx';

const TameQuizResult = ({ score, maxScore }) => {
    let severity = '';
    if (score <= 4) severity = 'mild';
    else if (score <= 7.5) severity = 'moderate';
    else if (score <= 9) severity = 'severe';
    else severity = 'verySevere';

    const procedure = proceduresArray.find(p => p.slug === 'tame');

    return (
        <div className="font-sans leading-relaxed text-gray-700 text-lg">
            <ScoreTag score={`${score}/${maxScore}`} severity={severity} />

            {severity === 'mild' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Good news! Your pain is still in an early phase.</h2>

                    <h3 className="text-xl font-semibold my-3">Understanding Your Pain</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Your joint discomfort is likely due to early inflammation or mild mechanical (physical) stress on the joint, common with daily activity.</li>
                        <li>At this stage, cartilage and tissues are intact, and your body’s healing response is active.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">What Does This Mean? </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Most people (up to <b>80%</b>) experiencing mild joint pain respond excellently to conservative methods - physiotherapy, targeted exercises, lifestyle adjustments, and simple anti-inflammatory treatments – without needing any long-term pills or surgery.</li>
                        <li>Acting now significantly reduces your risk of progressing to chronic inflammation or structural joint damage.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Evidence-Based Next Steps:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Consistent Exercise:</b> Clinical studies show regular guided exercise reduces pain by <b>30-40%</b> and can delay or even prevent chronic progression.</li>
                        <li><b>Nutrition Optimization:</b> Anti-inflammatory diets (rich in omega-3 fatty acids, antioxidants) reduce inflammatory markers and pain symptoms significantly.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Recommended Action:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Retake the quiz if your pain persists &gt;3 months. </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>

                </section>
            )}

            {severity === 'moderate' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Your pain is significantly impacting your daily life—understanding your options now is crucial.</h2>

                    <h3 className="text-xl font-semibold my-3">What’s Happening in Your Body:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>At moderate severity, persistent inflammation has started damaging tissues near your joint. Small blood vessels around your joint become chronically inflamed and start growing in size and number (neo-angiogenesis), increasing pain signals to your brain.</li>
                        <li>At this stage, conservative therapies alone (physiotherapy, exercise, lifestyle changes) often provide only temporary relief.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Why Act Promptly?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Without targeted intervention, moderate joint pain can accelerate towards severe joint degeneration or chronic disability.</li>
                        <li>Early advanced intervention significantly increases chances of full recovery and restoration of daily activities.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Why Act Promptly?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Without targeted intervention, moderate joint pain can accelerate towards severe joint degeneration or chronic disability.</li>
                        <li>Early advanced intervention significantly increases chances of full recovery and restoration of daily activities.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Clinically Validated Treatment: TAME </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Trans-Arterial Micro-Embolization (TAME)</b> is a minimally invasive, highly targeted procedure.</li>
                        <li>Proven in clinical studies to reduce joint pain scores by up to <b>70%</b> within weeks, lasting 6 months or more. </li>
                        <li>
                            Procedure Details:
                            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                <li>Duration: <b>&lt;45 minutes</b></li>
                                <li>Hospital stay: <b>None</b></li>
                                <li>Recovery: <b>&lt;24 hours</b></li>
                                <li>No cuts, stitches, or general anesthesia required</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Who Should Consider TAME?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Patients with moderate chronic joint pain not sufficiently relieved by physiotherapy or medications alone.</li>
                        <li>MRI or ultrasound imaging usually confirms suitability by detecting inflammation and abnormal vessel formation.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>

                </section>
            )}

            {severity === 'severe' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">
                        Immediate action is essential for your severe pain – your joint health requires urgent attention.
                    </h2>

                    <h3 className="text-xl font-semibold my-3">The Reality of Severe Joint Pain</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>
                            Severe pain indicates chronic inflammatory damage with extensive abnormal micro-vessel growth around your joint,
                            which will likely get worse over time.
                        </li>
                        <li>
                            Persistent severe pain significantly interferes with daily life, sleep quality, emotional health, and overall wellbeing.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Why Conservative Treatments Fail at This Stage?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>
                            With severe joint pain, conventional treatments (medications, injections, physiotherapy) typically offer limited effectiveness or temporary relief – clinical evidence shows only <b>10–20%</b> long-term effectiveness.
                        </li>
                        <li>
                            Without targeted treatment, many patients often move towards more invasive surgeries (joint replacements) – which carry higher risks, longer recoveries, and substantial costs.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Clinically Proven Intervention: TAME</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>
                            <b>Trans-Arterial Micro-Embolization (TAME)</b> precisely eliminates the inflamed vessels feeding your joint pain.
                        </li>
                        <li>
                            Studies confirm TAME can deliver rapid, profound pain relief in over <b>80%</b> of suitable patients, with significant improvement often within days to weeks.
                        </li>
                        <li>
                            Procedure Benefits:
                            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                <li>Minimally invasive – tiny wrist puncture, no large cuts.</li>
                                <li>No general anesthesia, no hospitalization.</li>
                                <li>Quick recovery – less than 45 mins procedure, most patients return home same day.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>
                </section>
            )}

            {severity === 'verySevere' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">
                        You are experiencing very severe, debilitating pain which requires urgent specialized care.
                    </h2>

                    <h3 className="text-xl font-semibold my-3">Why is Your Pain So Intense?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Very severe pain suggests advanced inflammation, significant structural joint damage, extensive microvascular proliferation (tiny vessels feeding the pain, increasing in size and number), and possibly nerve sensitization (central pain sensitization, where pain severity keeps increasing as your nervous system becomes increasingly sensitive to these signals).</li>
                        <li> At this stage, daily activities become extremely limited, deeply affecting your quality of life and emotional wellbeing.</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Immediate Risks & Consequences</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>
                            Without intervention, severe joint degeneration and damage can occur rapidly, leading to permanent joint damage or disability.
                        </li>
                        <li>
                            Chronic severe pain often leads to sleep disorders, anxiety, depression, and serious effects on your professional/personal life.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Why Immediate TAME Evaluation is Critical?</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>
                            <b>TAME procedure</b> offers a highly effective solution even in advanced cases – over <b>85%</b> of patients experience significant relief.
                        </li>
                        <li>
                            Rapid improvement is often observed within days, helping reverse many severe impacts on daily life and functionality.
                        </li>
                        <li>
                            It is minimally invasive – avoiding the risks, costs, and recovery time associated with open surgery or joint replacement.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Urgent Next Step:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Emergency evaluation slots available this week.</li>
                        <li>
                            Fast-track teleconsultation with Docsy’s Lead Interventional Radiologist for immediate MRI/Image evaluation.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>
                </section>
            )}
        </div>
    );
};

export default TameQuizResult;
