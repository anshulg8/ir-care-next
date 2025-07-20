import React, { useState } from 'react';
import { FaCheck, FaPhone, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import DrRochan from '../assets/cropped-dr-rochan.webp';
import logo from '../assets/trans-logo.png';
import Link from 'next/link';
import Image from 'next/image';

const LPComponent = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is PAE and how does it work?",
            answer: "PAE (Prostatic Artery Embolization) is a minimally invasive procedure that shrinks the prostate by blocking blood flow to it. A thin wire is guided through a tiny pinhole in your wrist to the prostate's blood vessels, where tiny particles are inserted to block blood flow, causing the prostate to shrink over time."
        },
        {
            question: "Is PAE safe and what are the risks?",
            answer: "PAE is very safe with minimal risks. Unlike surgery, there are no cuts, no anesthesia risks, and no permanent sexual or urinary side effects. The procedure has been used successfully in Europe and the US for over 15 years."
        },
        {
            question: "How long does PAE take and what's the recovery time?",
            answer: "The PAE procedure takes about 1-2 hours. You can go home the same day and return to normal activities within 1-2 days. Most patients experience significant symptom improvement within 2-4 weeks."
        },
        {
            question: "Am I a good candidate for PAE?",
            answer: "PAE may be ideal if you have moderate to severe prostate symptoms, medications have stopped working, you want to avoid surgery risks, or you have health conditions that make surgery risky. A consultation with our specialists can determine if PAE is right for you."
        }
    ];

    const clinics = [
        {
            name: "Nelivigi Multispeciality Hospital",
            location: "Thiruvananthapuram",
            image: "/api/placeholder/150/100"
        },
        {
            name: "A we Care - Hebbal region",
            location: "Thiruvananthapuram",
            image: "/api/placeholder/150/100"
        },
        {
            name: "Diabliss Medical Centre",
            location: "Thiruvananthapuram",
            image: "/api/placeholder/150/100"
        },
        {
            name: "Sampige Diagnostics",
            location: "Thiruvananthapuram",
            image: "/api/placeholder/150/100"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            {/* <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-orange-500 rounded-lg mr-3"></div> */}
                            {/* <span className="text-xl font-bold text-gray-900">Docsy</span> */}
                            <Link href="/" className="flex items-center">
                                <Image src={logo} alt="Docsy Logo" className="h-20 w-auto" />
                            </Link>
                        </div>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                            <FaPhone className="inline mr-2" />
                            Call Now
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Treat Enlarged Prostate Without Surgery
                            </h1>
                            <h2 className="text-xl text-gray-700 mb-8">
                                Learn about the latest European Pinhole IR technology - now in India & UAE
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Prostatic Artery Embolization (PAE) uses a remote guided small wire inserted through a tiny pin-hole in your wrist - shrinking the prostate without anesthesia or surgical risk, and without even taking your pants off, getting you home in a few hours. Book your consultation now.
                            </p>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="w-80 h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                            <img
                                    src={DrRochan.src}
                                    alt='Dr. Rochan'
                                    className="w-full h-full object-cover"
                                />
                                {/* <span className="text-gray-600">Doctor Image Placeholder</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Free Consultation</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number *"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium text-lg transition-colors"
                        >
                            <FaPhone className="inline mr-2" />
                            Book Free Appointment
                        </button>
                    </form>

                    <div className="flex justify-end">
                        <div className="w-full bg-teal-100 border-2 border-teal-600 rounded-full px-6 py-3">
                            <span className="text-teal-800 font-bold">Talk to an Expert for Free</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="bg-teal-600 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold">4.5 ⭐</div>
                            <div className="text-lg">Center Reviews</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold">30K+</div>
                            <div className="text-lg">Patients Treated by Our Doctors</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold">4</div>
                            <div className="text-lg">Cities India & UAE</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold">60+</div>
                            <div className="text-lg">Pinhole Surgeries Offered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">🏥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Walk in, walk out the same day</h3>
                            <p className="text-gray-600">PAE takes just a few hours, allowing you to travel & get back to work the next day</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">💚</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Virtually Painless, No Anesthesia</h3>
                            <p className="text-gray-600">Unlike surgery, you&apos;re fully awake during a PAE since it&apos;s painless and doesn&apos;t involve putting a thick catheter through your penis opening.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">✂️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No Cuts, No Scars, No Risk</h3>
                            <p className="text-gray-600">Compared to surgery risks due to the blood loss and cuts (erection and sexual problems, loss of urinary control, urine blockage due to scarring), PAE is safer and risk-free</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">💪</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Over 90% Technical Success Rate, Long Lasting Relief</h3>
                            <p className="text-gray-600">As effective and durable as surgery, without the pain & complications</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-teal-600 text-2xl">💳</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Variety of Payment Options</h3>
                            <p className="text-gray-600">Major insurances covered, cash payment discount available.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Is PAE */}
            <section className="py-16 bg-white">
                {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">What Is PAE (Prostatic Artery Embolization)?</h2>
                    
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            PAE is the latest non-surgical treatment for enlarged prostate, highly popular in Europe and USA in the past 10 years. A hair-thin wire is guided from a tiny pinhole in your wrist to the prostate&apos;s blood vessels. Tiny particles are then inserted into the targeted vessels to block blood flow, shrinking the prostate over the next few weeks—delivering the same result as surgery but with no cuts, no anesthesia, no complications, and no hospital stay.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            You&apos;re fully awake and home in a few hours — without even taking your pants off.
                        </p>
                        
                        <div className="bg-teal-50 rounded-xl p-6">
                            <p className="text-teal-800">
                                Want further details on this latest procedure? <span className="font-semibold text-teal-600">Speak to our doctors</span> now - get full clarity with zero obligations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Is a Large Prostate Affecting You */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">How Is a Large Prostate Affecting You?</h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        The prostate is a walnut-shaped organ surrounding your urinary passage. As men age, the prostate enlarges due to male hormones. This can block urine flow, causing a weak stream, frequent night urination, and disruptions to daily life. If untreated, it can lead to medical emergencies like acute retention (sudden urinary block), requiring emergency hospitalization and catheter insertion to drain the bladder.
                    </p>
                    
                    {/* <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                        <h3 className="text-xl font-bold text-yellow-800 mb-4">Not sure what your symptoms mean?</h3>
                        <p className="text-yellow-700 mb-4">Stop guessing - take the free 2 min clinically validated test now.</p>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                            Start Free Test
                        </button>
                    </div> */}
                </div>
            </section>

            {/* Treatment Options */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Treatment Options</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Early Stages:</h3>
                            <p className="text-lg text-gray-700">
                                Pills (alpha blockers work in days, 5-alpha reductase inhibitors take months) help reduce symptoms temporarily but are ineffective in advanced stages.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Stages:</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                At this point, physical size reduction is needed.
                            </p>
                            <p className="text-lg text-gray-700">
                                Traditional surgeries (TURP, laser, Rezum) remove part of the prostate via the penis using shaving, steam, or lasers. These come with risks — permanent sexual or urinary issues (5–10%) due to nerve damage, and a 3–5% chance of urethral stricture, a painful blockage caused by scar tissue.
                            </p>
                        </div>
                        
                        <div className="bg-teal-50 rounded-xl p-6">
                            <p className="text-teal-800">
                                Want more clarity on the most effective procedure for your case? <span className="font-semibold text-teal-600">Let our doctors</span> guide you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose PAE */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose PAE?</h2>
                    
                    <p className="text-lg text-gray-700 mb-8">
                        PAE is a breakthrough used in the US & Europe for over 15 years. It shrinks the prostate from within—without cutting or removing anything.
                    </p>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Is PAE Right for You?</h3>
                        <p className="text-lg text-gray-700 mb-4">PAE may be ideal if you:</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Have moderate to severe prostate symptoms, and medications have stopped working</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Have a large prostate (over 80 cc) not suited for surgery</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Do not want permanent sexual or urinary side effects</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Need quick recovery within 1–2 days with minimal downtime</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Have health risks like heart/lung disease, obesity, sleep apnea, are on blood thinners, or allergic to anesthesia</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Already had pelvic surgery and can&apos;t undergo another</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            <FaPhone className="inline mr-2" />
                            Book Free Appointment
                        </button>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                        Talk to an Expert for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Icons */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-teal-600 font-bold">FDA</span>
                            </div>
                            <h3 className="font-bold text-gray-900">USFDA Approved Procedures</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-teal-600 text-2xl">✗</span>
                            </div>
                            <h3 className="font-bold text-gray-900">No Stitches</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-teal-600 text-2xl">🔒</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Complete Confidentiality</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-teal-600 text-2xl">☀️</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Day Care Procedure</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Docsy Vs Others</h2>
                    
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-medium text-gray-700">Benefits</th>
                                        <th className="px-6 py-4 text-center font-medium text-gray-700">Others</th>
                                        <th className="px-6 py-4 text-center font-medium text-teal-600">Docsy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">Lifetime Follow-up Consultations</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">NO</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">YES</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">24*7 Dedicated Care Buddy</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">NO</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">YES</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">No Cost EMI</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">NO</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">YES</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">Pickup & Drop Service</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">NO</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">YES</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">Discharge Process</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">SLOW</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">FAST</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-800">Minimum Paper Work</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">NO</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="bg-teal-600 text-white px-4 py-2 rounded-full">YES</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            <FaPhone className="inline mr-2" />
                            Book Free Appointment
                        </button>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Talk to an Expert for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Meet Our Specialists */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet Our Specialists</h2>
                    <p className="text-center text-gray-600 mb-12">Senior Dept Heads, Top Hospitals, Average 20+ years experience</p>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-600">Doctor Image Placeholder</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Interventional Radiologists</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Our team consists of highly experienced interventional radiologists who specialize in PAE procedures. With extensive training from top medical institutions and years of experience in minimally invasive treatments, they ensure the highest standards of care.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaCheck className="text-teal-600 mr-3" />
                                    <span className="text-gray-700">30+ Years Experience</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheck className="text-teal-600 mr-3" />
                                    <span className="text-gray-700">Senior Department Heads</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheck className="text-teal-600 mr-3" />
                                    <span className="text-gray-700">International Training & Fellowships</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* How to Prepare */}
                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Prepare for In-Clinic Birth Control</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Carry your age proof</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Inform your doctor about all your current medications and supplements</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Do not shave the surgical site yourself</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Your doctor may ask you to stop eating anything solid/ liquid (even water) for at least 4- 6 hours before the surgery.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Carry a pack of soft sanitary pads to use for post-surgical bleeding.</span>
                                </li>
                            </ul>
                        </div>

                        {/* What to Expect */}
                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect During the Procedure</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>An In-Clinic Birth Control Procedure is</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Complete Privacy</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Lasts for 45 and 60 minutes</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Discharge in 3 hrs after <span className="text-orange-500">Birth Control</span></span>
                                </li>
                            </ul>
                        </div>

                        {/* Care After */}
                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care After the Procedure</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Rest: Take a little break and let your body recover</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Complete your full course of medicines</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Do not skip your follow-ups</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Do not use tampons, but only soft sanitary pads</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Learn About PAE</h2>
                    
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                        <div className="text-center text-white">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">▶</span>
                            </div>
                            <p className="text-lg">Video: Understanding PAE - Prostatic Artery Embolization</p>
                            <p className="text-sm text-gray-300">Learn about this revolutionary non-surgical treatment | Docsy</p>
                            <p className="text-sm text-gray-300 mt-2">Dr. Expert - Interventional Radiologist, Docsy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
                    
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    {expandedFaq === index ? (
                                        <FaChevronUp className="text-orange-500" />
                                    ) : (
                                        <FaChevronDown className="text-orange-500" />
                                    )}
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-teal-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            <FaPhone className="inline mr-2" />
                            Book Free Appointment
                        </button>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Talk to an Expert for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600">© {new Date().getFullYear()} Docsy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LPComponent;
