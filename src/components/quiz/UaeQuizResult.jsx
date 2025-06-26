import React from 'react';
import { proceduresArray } from '../../data.js';
import BenefitsCarousel from '../BenefitCarousel.jsx';
import ScoreTag from './ScoreTag.jsx';

const UaeQuizResult = ({ score, maxScore }) => {
    let severity = '';
    if (score >= 8 && score <= 15) severity = 'mild';
    else if (score >= 16 && score <= 23) severity = 'moderate';
    else if (score >= 24 && score <= 31) severity = 'severe';
    else if (score >= 32) severity = 'verySevere';

    const procedure = proceduresArray.find(p => p.slug === 'uterine-fibroid-embolization-ufe');

    return (
        <div className="font-sans leading-relaxed text-gray-700 text-lg">
            <ScoreTag score={`${score}/${maxScore}`} severity={severity} />
            {severity === 'mild' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Your fibroid symptoms are mild – here’s how you stay ahead.</h2>
                    <p className="mb-4">
                        Your quiz indicates you’re currently experiencing mild fibroid symptoms. Fibroids are non-cancerous growths arising from the muscular layer of your uterus, fueled primarily by estrogen. For many women like you, fibroids remain quiet or minimally bothersome, potentially requiring no immediate action apart from regular monitoring.
                    </p>
                    <h3 className="text-xl font-semibold my-3">What you should know:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Lifestyle modifications help:</b> Maintaining a healthy weight, regular physical activity, and balanced nutrition can stabilize estrogen levels and prevent fibroid growth. </li>
                        <li><b>Annual check-ups:</b> A yearly pelvic ultrasound ensures your fibroids remain stable. Rapid growth or worsening symptoms may warrant treatment down the line.</li>
                        <li><b>Know your red flags:</b> Heavy bleeding, increasing pelvic pain, urinary frequency, or sudden fertility issues can signal fibroid progression.</li>
                    </ul>
                </section>
            )}

            {severity === 'moderate' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Your fibroid symptoms are impacting daily life. You’re at the ideal stage for safe, uterus-preserving treatment.</h2>
                    <p className="mb-4">
                        Moderate symptoms mean your fibroids have grown enough to significantly affect your quality of life—heavy bleeding, discomfort, or fatigue might feel like “normal,” but it doesn’t have to be this way. This is a key decision-making moment for long-term relief.
                    </p>
                    <h3 className="text-xl font-semibold my-3">Why It Matters:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Fibroid Embolization (UFE)</b> is a clinically-proven, FDA-approved and American College of Gynecology recommended minimally invasive procedure that shrinks fibroids by blocking their blood supply, without removing your uterus. </li>
                        <li><b>Fertility protection:</b> Unlike open surgery (hysterectomy/myomectomy), UFE keeps your reproductive options open, important even if you’re undecided about pregnancy. </li>
                        <li><b>Symptom improvement:</b> Over 90% of women report symptom relief within 2–3 months after UFE, with a single-day hospital stay and minimal downtime. </li>
                    </ul>

                    <div className="my-8">
                        <BenefitsCarousel benefits={procedure.benefitDetails} />
                    </div>
                </section>
            )}

            {severity === 'severe' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Severe fibroid symptoms demand timely action. Act now to protect your health & regain your lifestyle.</h2>
                    <p className="mb-4">
                        Your severe symptom score means fibroids are heavily impacting your life. Other than the worsening pain during your periods, chronic heavy bleeding leads to anemia (low hemoglobin), persistent fatigue, compromised immunity, and reduced work productivity (New England Journal of Medicine, 2021).
                    </p>

                    <h3 className="text-xl font-semibold my-3">Why delaying treatment has consequences:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Progressive impact:</b> Fibroids rarely shrink spontaneously and often worsen without intervention. </li>
                        <li><b>Rapid, reliable relief:</b> Uterine Fibroid Embolization (UFE) is the recommended standard-of-care option in severe cases (European Journal of Radiology 2022 guidelines), avoiding invasive surgery, with 90% effectiveness in reducing bleeding within weeks. </li>
                        <li><b>Recovery time:</b> Unlike open surgery (myomectomy/hysterectomy), UFE’s minimally invasive approach allows rapid return to normal activities—often within days. </li>
                    </ul>

                    <div className="my-8">
                        <BenefitsCarousel benefits={procedure?.benefitDetails} />
                    </div>
                </section>
            )}

            {severity === 'verySevere' && (
                <section>
                    <h2 className="text-2xl font-bold my-4">Urgent intervention required—very severe fibroid symptoms are putting your health at significant risk.</h2>
                    <p className="mb-4">
                        Your score falls into the highest severity category, signaling intense fibroid-related distress: severe bleeding causing severe anemia, constant pelvic pressure (below lower abdomen) affecting daily function, and exhaustion harming your personal, social, and professional life.
                    </p>

                    <h3 className="text-xl font-semibold my-3">The risks of delaying treatment:</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li><b>Critical anemia & health risk:</b> Chronic blood loss can cause dangerously low hemoglobin levels, putting your rt and overall health at risk (American Journal of Obstetrics & Gynecology, 2021). </li>
                        <li><b>Compromised fertility potential:</b> Large or numerous fibroids may irreversibly harm uterine structure if not promptly treated, affecting future pregnancy outcomes. </li>
                        <li><b>Life disruption:</b> Severe fibroids profoundly affect emotional well-being, relationships, and career trajectory. </li>
                    </ul>

                    <h3 className="text-xl font-semibold my-3">Immediate recommended solution:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><b>Uterine Fibroid Embolization (UFE)</b> is the safest, minimally invasive, evidence-backed option to control severe symptoms and preserve fertility quickly. It’s endorsed by leading global fibroid experts (Royal College of Obstetricians & Gynaecologists, UK Guidelines, 2022). </li>
                        <li><b>Rapid improvement:</b> Bleeding and pain relief typically noticeable within weeks after UFE—avoiding open surgery’s long recovery.</li>
                    </ul>

                    <div className="my-8">
                        <BenefitsCarousel benefits={procedure?.benefitDetails} />
                    </div>
                </section>
            )}
        </div>
    );
};

export default UaeQuizResult;
