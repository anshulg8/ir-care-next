import React from 'react';
import { proceduresArray } from '../../data.js';
import ScoreTag from './ScoreTag.jsx';

const HaeQuizResult = ({ score, maxScore }) => {
    let severity = '';
    if (score <= 4) severity = 'mild';
    else if (score <= 9) severity = 'moderate';
    else if (score <= 14) severity = 'severe';
    else severity = 'verySevere';

    const procedure = proceduresArray.find(p => p.slug === 'hemorrhoidal-artery-embolization-hae');

    return (
        <div className="font-sans leading-relaxed text-gray-700 text-lg">
            <ScoreTag score={`${score}/${maxScore}`} severity={severity} />

            {severity === 'mild' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">🎯 Your Result: Good News, Early Stage </h2>
                    <p className="mb-4">
                        You’re experiencing mild hemorrhoidal symptoms—occasional discomfort, slight itching, or infrequent bleeding. At this stage, it’s essential to manage symptoms effectively to prevent progression.
                    </p>

                    <h3 className="text-xl font-semibold my-3">📖 What’s Happening in Your Body? </h3>
                    <p className="mb-4">
                        Hemorrhoids are swollen veins around your anus or lower rectum. Early symptoms usually reflect mild vascular swelling or slight irritation of delicate anal tissues.
                    </p>

                    <h3 className="text-xl font-semibold my-3">✅ Evidence-Based Practical Advice: </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Fiber-Rich Diet:</b> Reduces strain during bowel movements (target: 25–35 g/day). </li>
                        <li><b>Hydration:</b> Drink at least 2–3 liters of water daily. </li>
                        <li><b>Avoid Prolonged Sitting:</b> Take short breaks every 30–45 minutes. </li>
                        <li><b>Warm Sitz Baths:</b> 10 minutes/day significantly reduces symptoms. </li>
                    </ul>
                    <p className="mb-4">
                        <b>Evidence:</b> Studies show that early dietary and lifestyle intervention can halt progression in over 70% of mild cases.
                    </p>

                    <h3 className="text-xl font-semibold my-3">🚩 When to Seek Further Help: </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Increased bleeding frequency or volume</li>
                        <li>Persistent lumps after bowel movements</li>
                        <li>Significant pain or discomfort</li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>
                </section>
            )}

            {severity === 'moderate' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">🎯 Your Result: Moderate Symptoms, Act Now to Avoid Surgery </h2>
                    <p className="mb-4">
                        Your responses indicate moderate hemorrhoids - regular discomfort, frequent bleeding episodes, and occasional prolapse (visible lumps coming out of anus). At this stage, treatment can prevent worsening and avoid invasive surgery later.
                    </p>

                    <h3 className="text-xl font-semibold my-3">📖 Understanding Your Condition:</h3>
                    <p className="mb-4">
                        Moderate hemorrhoids signify chronic inflammation and persistent blood vessel swelling due to increased anal pressure. This leads to repeated symptoms affecting daily comfort and quality of life.
                    </p>
                    <h3 className="text-xl font-semibold my-3">Untreated Risks: </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Progression to severe disease requiring surgery. </li>
                        <li>Increased bleeding leading to anemia.</li>
                        <li>Chronic discomfort impacting daily life.</li>
                    </ul>

                    <div className="overflow-x-auto mb-8">
                        <table className="border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-left w-1/3 font-medium text-gray-700">Option </th>
                                    <th className="p-4 text-center font-medium text-teal-600" id="irProcedureName">Effectiveness </th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Pain & Recovery </th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Scar </th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Evidence </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200" id="comparisonTableBody">
                                <tr>
                                    <td className="p-4 text-left"><b>Lifestyle alone</b></td>
                                    <td className="p-4 text-center">less than 30%</td>
                                    <td className="p-4 text-center">Slow</td>
                                    <td className="p-4 text-center">No</td>
                                    <td className="p-4 text-center">(Garg et al., 2022)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-left"><b>Banding/Lasers</b></td>
                                    <td className="p-4 text-center">~ 50–60%</td>
                                    <td className="p-4 text-center">Mild</td>
                                    <td className="p-4 text-center">Yes</td>
                                    <td className="p-4 text-center">(Mott et al., Gastro, 2021) </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-left">HAE (Preferred) ✅</td>
                                    <td className="p-4 text-center">more than 90%</td>
                                    <td className="p-4 text-center">Daycare</td>
                                    <td className="p-4 text-center">Minimal</td>
                                    <td className="p-4 text-center">1–2 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>

                </section>
            )}

            {severity === 'severe' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">🎯 Your Result: Severe Symptoms, Prompt Action Recommended </h2>
                    <p className="mb-4">
                        You are dealing with severe hemorrhoidal symptoms - frequent bleeding, significant prolapse (coming out of anus frequently), persistent discomfort, or difficulty maintaining hygiene. Timely intervention can prevent irreversible complications.
                    </p>

                    <h2 className="text-2xl font-bold my-4">📖 What’s Happening In Your Body:</h2>
                    <p className="mb-4">
                        At this severe stage, the swollen veins (hemorrhoids) significantly protrude, bleed easily, and cause frequent irritation. Chronic bleeding can lead to anemia, fatigue, and reduced quality of life.
                    </p>

                    <h3 className="text-xl font-semibold my-3">Potential Complications if Untreated: </h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Severe anemia (blood loss causing weakness, shortness of breath) </li>
                        <li>Strangulated hemorrhoids (cutting off tissue supply due to obstruction and compression) requiring emergency surgery </li>
                        <li>Chronic pain, bleeding interfering with work and social life</li>
                    </ul>

                    <div className="overflow-x-auto mb-8">
                        <table className="border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-left w-1/3 font-medium text-gray-700">Method</th>
                                    <th className="p-4 text-center font-medium text-teal-600" id="irProcedureName">Success</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Hospital Stay</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Pain Level</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Recovery</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200" id="comparisonTableBody">
                                <tr>
                                    <td className="p-4 text-left">Conventional Surgery</td>
                                    <td className="p-4 text-center">~90%</td>
                                    <td className="p-4 text-center">1-3 days</td>
                                    <td className="p-4 text-center">High</td>
                                    <td className="p-4 text-center">2–3 weeks</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-left">Laser Surgery</td>
                                    <td className="p-4 text-center">~80%</td>
                                    <td className="p-4 text-center">Daycare</td>
                                    <td className="p-4 text-center">Moderate</td>
                                    <td className="p-4 text-center">1 week</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-left">HAE (Preferred) ✅</td>
                                    <td className="p-4 text-center">more than90%</td>
                                    <td className="p-4 text-center">Daycare</td>
                                    <td className="p-4 text-center">Minimal</td>
                                    <td className="p-4 text-center">1–2 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>
                </section>
            )}

            {severity === 'verySevere' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">🎯 Urgent Attention Required: Very Severe Symptoms </h2>
                    <p className="mb-4">
                        Your symptoms are extremely severe - daily bleeding, constant prolapse (tissue lumps coming out), and intense discomfort. Immediate medical intervention is strongly recommended to prevent serious health consequences.
                    </p>

                    <h2 className="text-2xl font-bold my-4">📖 What’s Happening In Your Body:</h2>
                    <p className="mb-4">
                        Advanced hemorrhoids represent significantly dilated blood vessels leading to severe bleeding, thrombosis (blood clots), and prolapse (constant lumps coming out of anus and not going back in). Without timely care, severe complications and hospitalization become likely.
                    </p>
                    <h3 className="text-xl font-semibold my-3">Immediate Risks:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Massive bleeding episodes - represent a potential medical emergency </li>
                        <li>Severe anemia (requiring blood transfusion)  </li>
                        <li>Infection or strangulation (i.e. lack of blood supply leading to potential tissue death) of hemorrhoids. </li>
                    </ul>

                    <div className="overflow-x-auto mb-8">
                        <table className="border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-left w-1/3 font-medium text-gray-700">Procedure</th>
                                    <th className="p-4 text-center font-medium text-teal-600" id="irProcedureName">Success Rate</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Invasiveness</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Recovery</th>
                                    <th className="p-4 text-center font-medium text-gray-700" id="traditionalProcedureName">Recommended?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200" id="comparisonTableBody">
                                <tr>
                                    <td className="p-4 text-left">Emergency Surgical Hemorrhoidectomy</td>
                                    <td className="p-4 text-center">High (~90%)</td>
                                    <td className="p-4 text-center">High</td>
                                    <td className="p-4 text-center">Weeks</td>
                                    <td className="p-4 text-center">Emergency</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-left"><b>Urgent HAE (Recommended) ✅</b></td>
                                    <td className="p-4 text-center">High (more than 90%)</td>
                                    <td className="p-4 text-center">Very Low</td>
                                    <td className="p-4 text-center">1–2 Days</td>
                                    <td className="p-4 text-center">Best Choice</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 className="text-xl font-semibold my-3">Next Step:</h3>
                </section>
            )}
        </div>
    );
};

export default HaeQuizResult;
