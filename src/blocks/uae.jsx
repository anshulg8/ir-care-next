import React from 'react';
import CustomLink from '../components/CustomLink';
import Link from 'next/link';

const uaeBlock = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold my-4">
                What Is UFE?
            </h2>
            <p className="mb-4 text-lg">
                Uterine Fibroid Embolization (UFE) is a non-surgical, scar-free treatment that treats fibroids through a simple pinhole in your wrist. A micro-wire is guided to the fibroid’s blood vessels and blocks their blood supply — shrinking the fibroids with no cuts or scars, no anesthesia, no hospital stay, and getting you home in a few hours.
            </p>
            <p className="mb-8 italic text-gray-600">
                Importantly, yes — you can still get pregnant afterward.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want further details on this latest procedure?
                <CustomLink procedure="UAE"> Speak to our doctors</CustomLink>  now - get full clarity with zero obligations.
            </div>

            <h2 className="text-2xl font-bold my-4">
                How Are Fibroids Affecting You?
            </h2>
            <p className="mb-4 text-lg">
                Fibroids are common, non-cancerous growths in the uterus in about 1 in 4 women and mostly require no treatment. In 5% (1 in 20) women though, they become large and cause:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Heavy or prolonged period bleeding</li>
                <li>Severe cramps and pain during periods</li>
                <li>Bloating, heaviness and pressure sensation</li>
                <li>Frequent urination</li>
                <li>Difficulty getting pregnant</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/uterine-fibroid-embolization-ufe`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>

            <h2 className="text-2xl font-bold my-4">
                What Are Your Treatment Options?
            </h2>
            <p className="mb-4 text-lg">
                Once fibroids reach a certain size and symptoms become severe, painkillers stop working and a more permanent treatment becomes a necessity.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Conventional Treatments:</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>
                    <strong>Surgery (Hysterectomy):</strong> Removes the uterus completely — effective, but need 4-6 weeks bed recovery, cause permanent loss of fertility and can cause potential complications like urine leakage, bladder damage and permanent loss of urinary control.
                </li>
                <li>
                    <strong>Myomectomy:</strong> Cuts out part of uterus where fibroids are present while keeping rest of uterus intact - while it can technically allow pregnancy (almost always requiring a C-section), and the surgery is complex with a risk of urinary issues like hysterectomy and also excessive blood loss (since the uterus has a significantly high blood supply compared to other internal organs).
                </li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="UAE"> Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">
                How Is UFE Different?
            </h2>
            <p className="mb-8 text-lg">
                UFE works without cutting or removing anything.
                An interventional radiologist guides a thin wire from your wrist to the uterus using real-time imaging with advanced equipment, and then blocking only the vessels feeding the fibroids. Over the next few weeks your fibroids shrink in size, all symptoms including bleeding and pain disappear, and your uterus stays intact.
            </p>

            <h2 className="text-2xl font-bold my-4">
                Is UFE Right for You?
            </h2>
            <p className="mb-2 text-lg">UFE may be right if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Want to keep your uterus (for pregnancy or personal choice)</li>
                <li>Need quick recovery and minimal downtime</li>
                <li>Can’t undergo surgery due to medical risks</li>
                <li>Want relief without pain, scars, or anesthesia</li>
            </ul>

            <p className="mb-2 text-lg">UFE may <strong>NOT</strong> be right if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Have certain fibroid types not suitable for embolization (e.g. pedunculated submucosal or completely cervical)</li>
                <li>Are nearing menopause and prefer to wait it out</li>
                <li>Have severe kidney disease and cannot tolerate the contrast used in UFE</li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want to know if HAE is right for you?
                <CustomLink procedure="UAE"> Let our doctors</CustomLink> guide you.
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/uterine-fibroid-embolization-ufe`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>
        </div>
    );
};

export default uaeBlock;
