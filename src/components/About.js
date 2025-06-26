import React from 'react';

const About = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    About <span className="text-teal-600">Us</span>
                </h2>

                <div className="max-w-3xl mx-auto text-gray-700 text-base leading-7 space-y-6">
                    <p>
                        We are a patient-first platform committed to making minimally invasive, image-guided treatments more accessible to people everywhere. By partnering with vetted interventional radiology (IR) centers and specialists, we provide safe, modern alternatives to traditional surgery.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                    <p>
                        To empower patients through access to trusted interventional radiology care, and help them choose safe, effective treatments with shorter recovery times and fewer complications.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                    <p>
                        We envision a healthcare system where every patient has access to the least invasive and most advanced treatment options available, guided by expert care and digital convenience.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">What We Offer</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Access to a network of certified interventional radiology centers across India</li>
                        <li>Transparent, patient-friendly information about IR procedures</li>
                        <li>Personalized assistance from consultation to recovery</li>
                        <li>Focus on clinically vetted, technologically advanced partner hospitals</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800">Why Interventional Radiology?</h3>
                    <p>
                        IR procedures are performed using advanced imaging (like CT, ultrasound, or fluoroscopy) to guide tiny instruments through the body. They offer less pain, minimal downtime, and fewer risks than conventional surgery — making them ideal for a wide range of conditions.
                    </p>

                    <p>
                        Whether you're facing uterine fibroids, varicose veins, an enlarged prostate, or certain tumors, IR might be the safer, faster alternative you've been looking for.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
