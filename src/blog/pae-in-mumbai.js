import React from 'react';
import Link from 'next/link';

const EnlargedProstateMumbai = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            {/* <h1 className="text-3xl font-bold my-6">Living with an Enlarged Prostate in Mumbai? Here's What You Can Do</h1> */}

            <p className="mb-4 text-lg">
                If you&apos;re a man over 50 experiencing a weak urine stream, frequent nighttime urination, or the feeling of not fully emptying your bladder, you could be dealing with an enlarged prostate — medically known as Benign Prostatic Hyperplasia (BPH). Though not life-threatening, BPH can significantly impact daily life. The good news? You have options, including modern non-surgical treatments available right here in Mumbai.
            </p>

            <h2 className="text-2xl font-bold my-4">What Is an Enlarged Prostate?</h2>
            <p className="mb-4 text-lg">
                The prostate is a small gland located below the bladder that surrounds the urethra. As men age, it can enlarge and compress the urethra, affecting urine flow.
            </p>
            <p className="mb-4 text-lg">
                According to the <a className="text-blue-600 underline" href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostate-enlargement-bph" target="_blank" rel="noopener noreferrer">NIDDK</a>, about 50% of men aged 51–60 and up to 90% of men over 80 experience some form of BPH.
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-base">
                <li>Slow or weak urine stream</li>
                <li>Frequent or urgent need to urinate</li>
                <li>Increased nighttime urination (nocturia)</li>
                <li>Difficulty starting urination</li>
                <li>Sensation of incomplete bladder emptying</li>
            </ul>

            <h2 className="text-2xl font-bold my-4">Is It Serious?</h2>
            <p className="mb-4 text-lg">
                While BPH is not cancer and doesn&apos;t increase your risk of prostate cancer, untreated BPH can lead to complications such as:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-base">
                <li>Bladder damage</li>
                <li>Kidney problems</li>
                <li>Recurrent urinary tract infections</li>
                <li>Bladder stones</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure which option is right for you?</h3>
                <p className="text-yellow-800 mb-4">
                    Take our free 2-minute self-assessment and get guidance tailored to your condition.
                </p>
                <Link
                    href="/quiz/prostatic-artery-embolization-pae"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Assessment
                </Link>
            </div>

            <h2 className="text-2xl font-bold my-4">Treatment Options in Mumbai</h2>
            <h3 className="text-xl font-semibold mb-2">Lifestyle and Medications:</h3>
            <p className="mb-4 text-lg">
                For mild cases, doctors may suggest dietary changes, fluid restriction at night, and medications like alpha-blockers (e.g., tamsulosin) or 5-alpha-reductase inhibitors (e.g., finasteride). These help, but can cause side effects such as dizziness, fatigue, or reduced sexual function.
            </p>

            <h3 className="text-xl font-semibold mb-2">Surgical Options:</h3>
            <p className="mb-4 text-lg">
                For moderate to severe BPH, procedures like TURP or laser surgery may be recommended. While effective, they carry risks like bleeding, infection, retrograde ejaculation, or prolonged recovery time.
            </p>

            <h3 className="text-xl font-semibold mb-2">Prostatic Artery Embolization (PAE):</h3>
            <p className="mb-4 text-lg">
                A modern, minimally invasive alternative, PAE involves blocking the blood supply to the prostate, causing it to shrink naturally over time. It&apos;s performed by an interventional radiologist through a pinhole in your groin or wrist—without any cutting or general anesthesia.
            </p>

            <h2 className="text-2xl font-bold my-4">Why Consider PAE?</h2>
            <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                <li>No general anesthesia or hospital stay</li>
                <li>Preserves sexual function in most men</li>
                <li>Quick recovery and minimal discomfort</li>
                <li>Effective even in larger prostates</li>
            </ul>
            <p className="mb-4 text-lg">
                According to a 2023 study in <em>European Urology</em>, PAE offers significant symptom relief with fewer complications compared to traditional surgery.
            </p>

            <h2 className="text-2xl font-bold my-4">Is PAE Right for You?</h2>
            <p className="mb-2 text-lg">PAE may be a good choice if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                <li>Have moderate to severe symptoms</li>
                <li>Want to avoid traditional surgery</li>
                <li>Have other health issues that make surgery risky</li>
                <li>Prefer a faster, less invasive recovery</li>
            </ul>

            <p className="mb-4 text-lg">
                It&apos;s not suitable for everyone — imaging and consultation are necessary to confirm if you&apos;re a candidate.
            </p>

            <h2 className="text-2xl font-bold my-4">Take the Next Step</h2>
            <p className="mb-8 text-lg">
                Don&apos;t ignore symptoms of an enlarged prostate. With modern care options like PAE now available in Mumbai, you can get relief without surgery, hospitalization, or long recovery times. Talk to a specialist and explore your options today.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure which option is right for you?</h3>
                <p className="text-yellow-800 mb-4">
                    Take our free 2-minute self-assessment and get guidance tailored to your condition.
                </p>
                <Link
                    href="/quiz/prostatic-artery-embolization-pae"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Assessment
                </Link>
            </div>
        </div>
    );
};

export default EnlargedProstateMumbai;
