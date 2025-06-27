import React from 'react';
import CustomLink from '../components/CustomLink';
import Link from 'next/link';

const tameBlock = () => {
    return (
        <div className="font-sans leading-relaxed text-gray-700">
            <h2 className="text-2xl font-bold my-4">What Is TAME?</h2>
            <p className="mb-4 text-lg">
                TAME is a non-surgical, 30-minute treatment where a tiny wire is inserted through a pinhole in your wrist to block only the blood vessels supplying the pain-causing inflamed tissue in a targeted manner, leaving the rest intact. It treats the root cause of chronic pain — no long term pills, no injections, no cuts or scars, no downtime.
            </p>
            <p className="mb-8 text-lg">
                You stay awake, go home the same day, and start feeling better in days, lasting for a few years.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want further details on this latest procedure?
                <CustomLink procedure="TAME"> Speak to our doctors</CustomLink>  now - get full clarity with zero obligations.
            </div>

            <h2 className="text-2xl font-bold my-4">Why Does Chronic Pain Happen?</h2>
            <p className="mb-8 text-lg">
                Chronic joint pain occurs because of the growth of tiny blood vessels that increase blood supply to inflamed tissue that releases pain-causing chemicals. Over time, the pain releases other chemical signals causing these vessels to grow in number and size — causing the pain to worsen further, creating a vicious cycle.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure what your symptoms mean?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/okuno-procedure-tam`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>

            <h2 className="text-2xl font-bold my-4">What Are Your Treatment Options?</h2>
            <h3 className="text-xl font-semibold mb-2">Conventional Options:</h3>
            <p className="mb-4 text-lg">
                Pills, nerve blocks, and steroid shots offer short-term relief, but long-term use causes serious side effects — for example, painkiller use over months can lead to kidney damage, while continuous steroid injections can increase infection risk and cause blood sugar spikes.
            </p>
            <h3 className="text-xl font-semibold mb-2">Surgery:</h3>
            <p className="mb-8 text-lg">
                Procedures like knee replacement offer structural solutions that are permanent — but surgeries are invasive and risky with their own complications, require 4–6 weeks recovery, and carry a potential 10–15% chance of unresolved or increased pain afterward.
            </p>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want more clarity on the most effective procedure for your case?&nbsp;
                <CustomLink procedure="TAME"> Let our doctors</CustomLink> guide you.
            </div>

            <h2 className="text-2xl font-bold my-4">How Is TAME Different?</h2>
            <p className="mb-8 text-lg">
                A micro-catheter is guided via your wrist to the area of pain. Using live imaging technology, the doctor finds and blocks the tiny abnormal vessels with micro-particles — blocking the blood flow and pain-causing chemicals, reducing inflammation and stopping pain at its source.
                No cutting, no stitches, no general anesthesia and no side effects.
            </p>

            <h2 className="text-2xl font-bold my-4">Is TAME Right for You?</h2>
            <p className="mb-2 text-lg">TAME may be ideal if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>Have chronic knee pain that has not improved by taking medication or steroid injections</li>
                <li>Suffer from shoulder pain or stiffness not improving with physiotherapy or medication</li>
                <li>Experience elbow or wrist pain while gripping or lifting</li>
                <li>Have persistent neck, foot, or joint pain with visible inflammation or excess blood flow on MRI</li>
            </ul>

            <p className="mb-2 text-lg">TAME may <strong>NOT</strong> work if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-base">
                <li>You have severe knee joint damage (advanced arthritis) — that will require surgery</li>
                <li>There is an active infection in the joint — the infection must be treated first</li>
                <li>MRI imaging doesn’t show increased blood supply to the area — TAME may not work if the cause of pain is different</li>
                <li>You have a bleeding disorder or take strong blood thinners — these may need to be paused and bleeding status improved before TAME</li>
                <li>You have severe kidney disease and cannot tolerate the contrast agent used in TAME</li>
            </ul>

            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg">
                Want to know if TAME is right for you?
                <CustomLink procedure="TAME"> Let our doctors</CustomLink> guide you.
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-10">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Not sure where to start?</h3>
                <p className="text-yellow-800 mb-4">
                    Stop guessing - take the free 2 min clinically validated test now.
                </p>
                <Link
                    href={`/quiz/okuno-procedure-tam`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                    Start Free Test
                </Link>
            </div>
        </div>
    );
};

export default tameBlock;
