import React from 'react';
import CustomLink from '../components/CustomLink';
import Link from 'next/link';

const paeBlock = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold my-4">What Is PAE (Prostatic Artery Embolization)?</h2>
            <p className="mb-4 text-lg">
                PAE is the latest non-surgical treatment for enlarged prostate, highly popular in Europe and USA in the past 10 years. A hair-thin wire is guided from a tiny pinhole in your wrist to the prostate&apos;s blood vessels. Tiny particles are then inserted into the targeted vessels to block blood flow, shrinking the prostate over the next few weeks—delivering the same result as surgery but with no cuts, no anesthesia, no complications, and no hospital stay.
            </p>
            <p className="mb-8 text-lg">
                You&apos;re fully awake and home in a few hours — without even taking your pants off.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want further details on this latest procedure?
                <CustomLink procedure="PAE"> Speak to our doctors</CustomLink>  now - get full clarity with zero obligations.
            </div>

            <h2 className="text-2xl font-bold my-4">How Is a Large Prostate Affecting You?</h2>
            <p className="mb-8 text-lg">
                The prostate is a walnut-shaped organ surrounding your urinary passage. As men age, the prostate enlarges due to male hormones. This can block urine flow, causing a weak stream, frequent night urination, and disruptions to daily life. If untreated, it can lead to medical emergencies like acute retention (sudden urinary block), requiring emergency hospitalization and catheter insertion to drain the bladder.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/prostatic-artery-embolization-pae`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>

            <h2 className="text-2xl font-bold my-4">Your Treatment Options</h2>
            <h3 className="text-xl font-semibold mb-2">Early Stages:</h3>
            <p className="mb-4 text-lg">
                Pills (alpha blockers work in days, 5-alpha reductase inhibitors take months) help reduce symptoms temporarily but are ineffective in advanced stages.
            </p>

            <h3 className="text-xl font-semibold mb-2">Advanced Stages:</h3>
            <p className="mb-4 text-lg">
                At this point, physical size reduction is needed.
            </p>
            <p className="mb-8 text-lg">
                Traditional surgeries (TURP, laser, Rezum) remove part of the prostate via the penis using shaving, steam, or lasers. These come with risks — permanent sexual or urinary issues (5–10%) due to nerve damage, and a 3–5% chance of urethral stricture, a painful blockage caused by scar tissue.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="PAE"> Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">Why Choose PAE?</h2>
            <p className="mb-8 text-lg">
                PAE is a breakthrough used in the US &amp; Europe for over 15 years. It shrinks the prostate from within—without cutting or removing anything.
            </p>

            <h2 className="text-2xl font-bold my-4">Is PAE Right for You?</h2>
            <p className="mb-2 text-lg">PAE may be ideal if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Have moderate to severe prostate symptoms, and medications have stopped working</li>
                <li>Have a large prostate (&gt;80 cc) not suited for surgery</li>
                <li>Do not want permanent sexual or urinary side effects</li>
                <li>Need quick recovery within 1–2 days with minimal downtime</li>
                <li>Have health risks like heart/lung disease, obesity, sleep apnea, are on blood thinners, or allergic to anesthesia</li>
                <li>Already had pelvic surgery and can&apos;t undergo another</li>
            </ul>

            <p className="mb-2 text-lg">PAE may <strong>NOT</strong> be suitable if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Haven&apos;t tried medications yet (for early cases)</li>
                <li>Have a median lobe blocking the bladder (surgery needed)</li>
                <li>Have hardened or calcified arteries (PAE might not be feasible)</li>
                <li>Have a non-prostate cause for urinary issues</li>
                <li>Have severe kidney disease (cannot tolerate the contrast agent)</li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want to know if PAE is right for you?
                <CustomLink procedure="PAE"> Let our doctors</CustomLink> guide you.
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure where to start?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/prostatic-artery-embolization-pae`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>
        </div>
    );
};

export default paeBlock;
