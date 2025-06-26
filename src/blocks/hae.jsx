import React from 'react';
import CustomLink from '../components/CustomLink';
import Link from 'next/link';

const haeBlock = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold my-4">What Is HAE?</h2>
            <p className="mb-4 text-lg">
                HAE is the latest non-surgical treatment for bleeding piles. A hair-thin wire is inserted through a pinhole in your wrist and guided to the blood vessels feeding your hemorrhoids. These vessels are then blocked to stop the bleeding — no anesthesia, no cuts or scars, and no hospital stay.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="HAE"> Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">How Are Piles Affecting You?</h2>
            <p className="mb-4 text-lg">
                Around your anus are muscular areas called anal cushions, which have a rich blood supply and help with stool passage. These vessels can swell and cause painless bleeding — known as internal hemorrhoids or piles. They may lead to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                <li>Bright red, painless bleeding during stool passage</li>
                <li>Itching or discomfort around the anus</li>
                <li>Prolapse (tissue bulging out of the anus)</li>
            </ul>
            <p className="mb-8 text-lg">
                If left untreated, piles can worsen — leading to pain, infection, blood clots, and strangulation (severe pain due to cut-off blood supply).
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/hemorrhoidal-artery-embolization-hae`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>

            <h2 className="text-2xl font-bold my-4">What Are Your Treatment Options?</h2>
            <h3 className="text-xl font-semibold mb-2">Mild Cases:</h3>
            <p className="mb-4 text-lg">
                Lifestyle changes (fiber-rich diet, hydration, reducing constipation), creams, and oral supplements (like flavonoids) often help in early stages.
            </p>

            <h3 className="text-xl font-semibold mb-2">Moderate to Severe (Grade II–III):</h3>
            <p className="mb-2 text-lg font-semibold">Non-surgical options:</p>
            <p className="mb-4 text-lg">
                Banding or injections can help temporarily, but are painful and not long-lasting.
            </p>

            <p className="mb-2 text-lg font-semibold">Surgery:</p>
            <p className="mb-4 text-lg">
                Various surgical options (open, stapled, doppler-guided) aim to remove the bleeding vessels. While effective, these involve pain, 4–6 weeks of recovery, and potential complications like anal stenosis (narrowing), or nerve damage leading to permanent loss of stool or urinary control.
            </p>
            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="HAE"> Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">How Does HAE Work?</h2>
            <p className="mb-4 text-lg">
                HAE is a completely different approach. An interventional radiologist guides a micro-wire from your wrist to the vessels feeding your hemorrhoids. Tiny particles are released to block these vessels, shrinking the cushions and stopping the bleeding — all without cuts, scars, anesthesia, or hospital stay.
            </p>

            <h2 className="text-2xl font-bold my-4">Is HAE Right for You?</h2>
            <p className="mb-2 text-lg">HAE may be perfect if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                <li>Have bleeding or itching as your main symptom (not full prolapse)</li>
                <li>Already tried banding, injections, or surgery without success</li>
                <li>Can't undergo surgery due to medical conditions or anesthesia risks (heart/lung issues, blood thinners, allergies)</li>
                <li>Want instant recovery and zero pain without complications</li>
            </ul>

            <p className="mb-2 text-lg">HAE may <strong>not</strong> be ideal if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Have Grade 4 prolapse — surgery is needed</li>
                <li>Have anal fissures, fistulas, or suspected cancer</li>
                <li>Have external (painful) piles only — HAE isn’t suitable</li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want to know if HAE is right for you?
                <CustomLink procedure="HAE"> Let our doctors</CustomLink> guide you.
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/hemorrhoidal-artery-embolization-hae`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>
        </div>
    );
};

export default haeBlock;
