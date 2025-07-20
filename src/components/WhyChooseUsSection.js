import { useState } from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { technologies, usps } from "../data";

const WhyChooseUsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="pt-4 sm:pt-6 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Why Choose Us? <span className="text-teal-600">3 Unmatched Advantages</span>
                </h2>

                {/* Core USPs */}
                <div className="md:hidden mb-12 -mx-4">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="pb-8"
                    >
                        {usps.map((usp, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-teal-50 p-6 mx-4 rounded-xl border border-teal-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-teal-100 p-3 rounded-full mr-4">
                                            <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={usp.iconPath} />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{usp.title}</h3>
                                    </div>
                                    <ul className="space-y-2 pl-2">
                                        {usp.description.map((text, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* USPs for larger screens */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
                    {usps.map((usp, index) => (
                        <div key={index} className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-teal-100 p-3 rounded-full mr-4">
                                    <svg
                                        className="h-6 w-6 text-teal-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={usp.iconPath}
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{usp.title}</h3>
                            </div>
                            <ul className="space-y-2 pl-2">
                                {usp.description.map((text, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg
                                            className="h-5 w-5 text-teal-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Premium Centers with Technologies */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                        <span className="text-teal-600">Premium Partner Centers</span> with Latest Technology
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                        {technologies.map((tech, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white p-4 rounded-lg shadow-xs h-full flex flex-col items-center justify-center">
                                    <svg
                                        className="h-10 w-10 text-teal-600 mb-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={tech.iconPath}
                                        />
                                    </svg>
                                    <p className="font-medium">{tech.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="mt-8 text-center">
                        <Link
                            href="/centres"
                            className="inline-block text-teal-600 text-lg font-semibold hover:underline"
                        >
                            Explore all IR partner centers &rarr;
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
