import React from 'react';
import SEO from '@/components/SEO';
import { BASE_URL, WHATSAPP_LINK } from '@/constants';
import { HeartPulse, Stethoscope, BookOpenCheck, ShieldCheck, Star, UserCheck } from 'lucide-react';

const CareNavigator = () => {
    return (
        <>
            <SEO
                title="Be a Care Navigator | MyDocsy"
                description="For doctors who can earn a patient’s trust, not just their time."
                url={`${BASE_URL}/care-navigator`}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-teal-700">Be a Care Navigator @MyDocsy</h1>
                    <h2 className="text-xl text-gray-700 font-medium">
                        For doctors who can earn a patient’s trust, not just their time.
                    </h2>
                </div>
            </section>

            {/* Our Promise */}
            <section className="py-20 bg-white px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Our Promise to Patients</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At <strong>MyDocsy</strong>, we guide people to the <strong>least invasive, most effective</strong> path to health—across IR, endovascular, day-care, and non-invasive options.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We’re the <strong>unbiased stakeholder</strong> in every decision. The rule is simple:
                    </p>
                    <p className="text-teal-700 font-semibold text-center text-lg mb-6">
                        “Advise like it’s your own family.”
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                        If that means recommending watchful waiting or physiotherapy over a procedure, that’s what we do.
                    </p>
                </div>
            </section>

            {/* The Role */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
                        The Role (Remote · Flexible · Part-time OK)
                    </h2>
                    <p className="text-gray-700 text-center mb-10">
                        You’ll lead <strong>Care Navigation</strong>—structured, evidence-based teleconsults that help patients understand their condition, choose the right care pathway, and follow through to recovery.
                    </p>

                    <div className="space-y-6">
                        <p className="text-gray-700 text-sm font-semibold uppercase tracking-wide">What this looks like in practice:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li><strong>Elicit &amp; Map:</strong> Take a rigorous history; capture comorbidities, meds, prior investigations, goals of care, financial constraints.</li>
                            <li><strong>Educate &amp; Align:</strong> Explain options in plain language; set expectations; communicate risks vs benefits with <strong>zero pressure</strong>.</li>
                            <li><strong>Plan &amp; Orchestrate:</strong> Build a personalized care plan using MyDocsy protocols; schedule next steps; coordinate diagnostics/consults.</li>
                            <li><strong>Coach &amp; Follow-Through:</strong> Maintain momentum with structured follow-ups; remove barriers; ensure adherence and recovery.</li>
                            <li><strong>Close the Loop:</strong> Document outcomes; update protocols with learnings; celebrate wins with the patient and team.</li>
                        </ul>
                        <p className="italic text-gray-700 mt-6">This is <strong>relationship medicine</strong> over the phone or video call.</p>
                    </div>
                </div>
            </section>

            {/* What Great Looks Like */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">What “Great” Looks Like Here</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>You <strong>listen longer than most</strong>—and your questions are better than their answers.</li>
                        <li>You can <strong>translate complexity</strong> into “what this means for you, uncle.”</li>
                        <li>You practice <strong>motivational interviewing</strong>; patients feel seen, not sold.</li>
                        <li>You’re <strong>comfortable with numbers</strong>: probabilities, NNT/ARR when relevant, time-to-benefit, and cost-of-care trade-offs.</li>
                        <li>You <strong>own the outcome</strong>, not the script.</li>
                    </ul>
                </div>
            </section>

            {/* Guardrails */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Guardrails That Matter (Ethics &gt; Everything)</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Family-Member Test:</strong> If you wouldn’t recommend it to your mother, don’t recommend it here.</li>
                        <li><strong>No perverse incentives:</strong> Zero targets that push unnecessary procedures.</li>
                        <li><strong>Conflict transparency:</strong> Patients first, always; disclose alternatives—even outside MyDocsy.</li>
                        <li><strong>Stop-the-Line Authority:</strong> If something feels off, you can pause a case. No escalation needed.</li>
                    </ul>
                </div>
            </section>

            {/* Measurement & Rewards */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">How You’ll Be Measured (and Rewarded)</h2>
                    <p className="text-gray-700 mb-6">
                        We reward <strong>outcomes and integrity</strong>, not call volume. Core scorecard:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Patient Trust &amp; Clarity:</strong> CSAT/NPS, “teach-back” comprehension rate</li>
                        <li><strong>Clinical Momentum:</strong> Appropriate next-step completion (tests/consults), time-to-decision</li>
                        <li><strong>Adherence &amp; Recovery:</strong> Protocol adherence, symptom improvement signals, no-show reduction</li>
                        <li><strong>Quality &amp; Safety:</strong> Documentation quality, correct triage/escalations, complaint/refund rate</li>
                        <li><strong>Equity &amp; Stewardship:</strong> Cost-appropriate care, avoidance of low-value interventions</li>
                    </ul>

                    <p className="text-gray-700 mt-6">
                        <strong>Compensation:</strong> Highly competitive per-consult based remuneration + <strong>outcome-based bonuses</strong> tied to the above metrics for part-time roles. Upside increases with panel size, complexity handled, and sustained outcomes. ~10% progress to full-time senior leadership based roles with extremely competitive base + team outcome-based bonuses.
                    </p>
                </div>
            </section>

            {/* Collaborators */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Your Collaborators</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Protocol Team:</strong> Specialists who maintain evidence-based pathways (you’ll help evolve these).</li>
                        <li><strong>Partner Clinicians:</strong> IRs, endovascular surgeons, pain specialists, gyn, uro, GI, rehab.</li>
                        <li><strong>Ops &amp; Data:</strong> Scheduling, insurance navigation, QA, and analytics to keep you effective.</li>
                        <li><strong>Founders:</strong> Physician-entrepreneurs who prioritize patient outcomes over vanity metrics.</li>
                    </ul>
                </div>
            </section>

            {/* Tooling */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Tooling You’ll Use (And Help Build)</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>NavigatorOS:</strong> EMR-lite + decision support that surfaces the next best action.</li>
                        <li><strong>Structured Playbooks:</strong> Evidence-based scripts that encourage free-form empathy, not rote lines.</li>
                        <li><strong>Follow-Up Engine:</strong> Smart cadences, reminders, and barrier-busting checklists.</li>
                        <li><strong>QA &amp; Coaching:</strong> Recorded consult reviews, calibrated scoring, rapid feedback loops.</li>
                    </ul>
                </div>
            </section>

            {/* Growth Path */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-gray-700">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Growth Path</h2>
                    <p className="mb-4">
                        <strong>Care Navigator → Senior Care Navigator→ Navigation Lead → Clinical Operations + Protocols Lead → City/Vertical Owner.</strong>
                    </p>
                    <p>
                        We scale people who scale outcomes. If you’re great (and ensure greatness in your team), growth is fast.
                    </p>
                </div>
            </section>

            {/* Ideal Candidate */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-gray-700">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Ideal Candidate Profile</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>MBBS or equivalent AYUSH degree.</strong> (Residents and exam-preppers welcome if you can commit limited but consistent hours over 1 year)</li>
                        <li><strong>Languages:</strong> Fluent English + Hindi; regional language a big plus and will be given preference.</li>
                        <li><strong>Traits:</strong> Empathic, structured, calm under pressure, insatiably curious, <strong>commercially savvy yet scrupulously ethical</strong>.</li>
                        <li><strong>Edge:</strong> You can handle objections, surface unspoken fears, and move a patient from uncertainty to informed action—<strong>without</strong> coercion.</li>
                    </ul>
                </div>
            </section>

            {/* Day in the Life */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-gray-700">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">A Day in the Life</h2>
                    For regular Follow Up patients:
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Review today’s panels for high intent patients →</li>
                        <li>Deep-dive into telehistory, create tentative treatment plan</li>
                        <li>Explain options (incl. non-procedural)</li>
                        <li>For almost converted patients: Agree on plan (with insurance coordination)</li>
                        <li>Schedule &amp; prep</li>
                        <li>Follow-ups to maintain momentum</li>
                        <li>For Post Procedure Patients: Recovery check-ins</li>
                        <li>Close the loop &amp; document learnings.</li>
                    </ol>
                </div>
            </section>

            {/* Training */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-gray-700">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Training &amp; Onboarding</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>3-week ramp:</strong> protocols, simulated consults, objection handling, documentation standards.</li>
                        <li><strong>Shadow → Supervised → Certified:</strong> You’ll get hands-on coaching and clear promotion criteria to Certification. Formal letters of certification and experience for international career progression (USMLE/PLAB route, etc) will be provided and customized by clinical superiors - if exceptional, directly from the founding team.</li>
                        <li><strong>Continuous CME:</strong> Case conferences, literature sprints, real-world outcomes reviews. Only self-initiative led, interest-based.</li>
                    </ul>
                </div>
            </section>

            {/* Why Join */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-gray-700">
                    <h2 className="text-2xl font-bold text-teal-700 mb-8 text-center">Why Join MyDocsy</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Do medicine the way it should be practiced:</strong> patient-first, data-driven, highly advanced and minimally invasive when appropriate.</li>
                        <li><strong>Flex work that counts:</strong> remote, predictable hours, meaningful outcomes.</li>
                        <li><strong>Serious upside:</strong> outcome-linked pay, rapid growth for high performers.</li>
                        <li><strong>Mission with spine:</strong> we’d rather lose revenue than lose trust.</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-teal-600 py-20 px-6 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Ready to practice ethical, high-leverage medicine?</h2>
                    <p className="text-gray-100 mb-8 leading-relaxed">
                        <strong>Apply in 5 minutes:</strong><br /><br />
                        • 60-second audio: explain BPH to a layperson in English and Hindi/native language (preference for regional language proficiency).<br />
                        • 5-line case note: a patient with heavy menstrual bleeding, anemic, fearful of surgery. Your plan.<br />
                        • Share availability (hours/week) and languages, and future plans.
                    </p>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Apply Now
                    </a>
                    <p className="text-sm text-gray-200 mt-4">
                        If you’re the doctor patients wish they could call again, we’re ready to hear you.
                    </p>
                </div>
            </section>
        </>
    );
};

export default CareNavigator;
