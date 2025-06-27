import React from 'react';
import SurgeryComparisonTable from './SurgeryComparisonTable';
import IrTreatableConditions from './IrTreatableConditions';
import { docsyJourneySteps } from '../data.js';
import DocsyJourney from './DocsyJourney.js';

const InterventionalRadiology = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                    What is <span className="text-teal-600">Interventional Radiology?</span>
                </h1>

                <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">
                    {/* Intro */}
                    <div>
                        <p className="text-lg">
                            <strong className="text-gray-900">Interventional Radiology (IR)</strong> is simply precision performed from the inside-out under live imaging. <br />Under live ultrasound, X-ray, or CT, an IR doctor steers a hair-thin catheter through a 2–3 mm skin nick to the exact vessel or organ that needs help. Because the camera guides every millimetre, surrounding tissue stays unharmed and you heal faster. Peer-reviewed data show IR cuts recovery time by up to 70 % versus open surgery.
                        </p>
                    </div>

                    {/* Imaging Modalities */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Imaging Tools We Use</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Ultrasound:</strong> Live, radiation-free pictures ; perfect for biopsies & fluid drainages.</li>
                            <li><strong>Fluoroscopy:</strong> Continuous low-dose X-ray road-map for blood-vessel and GI work.</li>
                            <li><strong>CT(Computed Tomography):</strong> Crystal-clear cross-sections for millimetre-accurate targeting.</li>
                            <li><strong>MRI:</strong> Best-in-class contrast for soft-tissue or brain-related guidance.</li>
                        </ul>
                    </div>

                    {/* How it Works */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">How an IR Procedure Works</h2>
                        <p>
                            Through a 2–3 mm skin nick—usually at the wrist, arm, or groin—your IR doctor threads a micro-catheter or needle to the exact trouble spot while watching every move on a screen. Once in place we can:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Cut off excess blood flow (embolisation)</li>
                            <li>Drain stubborn cysts or abscesses</li>
                            <li>Open blocked vessels / ducts (stents, clot removal)</li>
                            <li>Destroy tumours with heat, cold, or microwaves (ablation)</li>
                            <li>Deliver high-dose medicine straight into a tumour (chemo-/radio-embolisation)</li>
                        </ul>
                    </div>

                    {/* Conditions */}
                    <div>
                        <h2 className="text-2xl font-semibold text-teal-700 mb-3 border-b border-teal-100 pb-2">Conditions and Procedures We Treat</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Uterine fibroids</li>
                                <li>Spinal compression fractures</li>
                                <li>Liver tumors</li>
                                <li>Deep vein thrombosis (DVT)</li>
                            </ul>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Benign Prostatic Hyperplasia (BPH)</li>
                                <li>Peripheral artery disease (PAD)</li>
                                <li>Kidney/bile duct obstructions</li>
                            </ul>
                        </div>
                    </div>

                    <DocsyJourney steps={docsyJourneySteps} />

                    {/* Why IR? */}
                    <div className="bg-white shadow-sm border border-teal-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-teal-700 mb-4">Why Choose Interventional Radiology?</h2>
                        <p>
                            IR blends advanced imaging with minimally invasive techniques to treat serious conditions without major surgery.
                            It’s ideal for high-risk patients and often offers quicker recovery, fewer complications, and improved outcomes.
                        </p>
                    </div>

                    <SurgeryComparisonTable />
                    <IrTreatableConditions />
                </div>
            </div>
        </section>
    );
};

export default InterventionalRadiology;
