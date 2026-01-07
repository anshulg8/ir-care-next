"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaMale,
    FaTint,
    FaWater,
    FaProcedures,
    FaHeartbeat,
    FaCompress,
    FaSnowflake,
    FaBolt,
    FaBullseye,
    FaChevronUp,
    FaChevronDown
} from "react-icons/fa";

export const SURGERIES = [
    { name: "PAE (Prostate Artery Embolization)", key: "pae", slug: "/specialties/urology/procedures/pae", icon: FaCompress },
    { name: "Rezum Therapy", key: "rezum", slug: "/specialties/urology/procedures/rezum", icon: FaTint },
    { name: "TURP", key: "turp", slug: "/specialties/urology/procedures/turp", icon: FaMale },
    { name: "HoLEP", key: "holep", slug: "/specialties/urology/procedures/holep-thulep", icon: FaMale },
    { name: "RIRS", key: "rirs", slug: "/specialties/urology/procedures/rirs", icon: FaWater },
    { name: "URSL", key: "ursl", slug: "/specialties/urology/procedures/ursl", icon: FaBolt },
    { name: "Mini PCNL", key: "miniPcnl", slug: "/specialties/urology/procedures/mini-pcnl", icon: FaProcedures },
    { name: "Pelvic Floor Biofeedback", key: "pelvicFloorBiofeedback", slug: "/specialties/urology/procedures/pelvic-floor-biofeedback", icon: FaHeartbeat },
    { name: "Kidney Tumor Ablation", key: "kidneyTumorAblation", slug: "/specialties/urology/procedures/kidney-tumor-ablation", icon: FaProcedures },
    { name: "Cryoablation", key: "cryoablation", slug: "/specialties/urology/procedures/cryoablation", icon: FaSnowflake },
    { name: "Focal Therapy", key: "focalTherapy", slug: "/specialties/urology/procedures/focal-therapy", icon: FaBullseye }
];

const INITIAL_VISIBLE = 9; // 3x3 grid

const SurgeriesGrid = () => {
    const [expanded, setExpanded] = useState(false);

    const visibleSurgeries = expanded
        ? SURGERIES
        : SURGERIES.slice(0, INITIAL_VISIBLE);

    return (
        <section className="w-full bg-white px-4 py-6">
            <div className="max-w-md mx-auto">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    Surgeries <span className="text-teal-600">We Perform</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {visibleSurgeries.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.key}
                                href={item.slug}
                                className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition cursor-pointer"
                            >
                                <Icon className="text-teal-600 text-2xl mb-2" />
                                <span className="text-xs text-gray-700 text-center">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* View More / Less */}
                {SURGERIES.length > INITIAL_VISIBLE && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-4 w-full flex items-center justify-center gap-2 text-teal-600 text-sm font-medium"
                    >
                        {expanded ? (
                            <>
                                View Less <FaChevronUp />
                            </>
                        ) : (
                            <>
                                View More <FaChevronDown />
                            </>
                        )}
                    </button>
                )}
            </div>
        </section>
    );
};

export default SurgeriesGrid;
