import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const CentersCarousel = ({ centers }) => {
    return (
        <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Explore Our <span className="text-teal-600">Centers</span>
                </h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {centers.map((center) => (
                        <SwiperSlide key={center.id}>
                            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={center.image}
                                    alt={center.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>

                                    {/* Location */}
                                    <p className="text-sm text-gray-600 mb-1"><b>Address:</b> {center.address}</p>

                                    {/* Rating and Reviews */}
                                    {(center.rating && center.reviews) && (
                                        <div className="flex items-center text-sm text-gray-700 mb-2">
                                            <FaStar className="text-yellow-400 mr-1" />
                                            <span className="font-medium">{center.rating.toFixed(1)}</span>
                                            <span className="ml-2 text-gray-500">({center.reviews.toLocaleString()} reviews)</span>
                                        </div>
                                    )}

                                    {/* Certifications as list */}
                                    {center.certifications && center.certifications.length > 0 && (
                                        <div className="mt-3">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-1">Certifications:</h4>
                                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                                {center.certifications.map((cert, index) => (
                                                    <li key={index}>{cert}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <Link
                                        href="/centres"
                                        className="inline-block mt-4 text-teal-600 hover:underline font-medium text-sm"
                                    >
                                        Learn more →
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CentersCarousel;
