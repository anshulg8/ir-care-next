import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaThumbsUp, FaStar } from 'react-icons/fa6';

const MobileTestimonials = ({ testimonials = [] }) => {
    return (
        <section className="pt-10 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        What Our <span className="text-teal-600">Patients</span> Say
                    </h2>
                    <p className="text-l text-gray-600 max-w-3xl mx-auto">
                        Hear from our patients about their life-changing experiences with our minimally invasive procedures.
                    </p>
                </div>

                {/* Swiper Testimonials */}
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true, type: 'bullets' }}
                    grabCursor={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="px-4 !pb-8"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-xl shadow-lg p-6 mx-auto w-full max-w-lg flex flex-col justify-between">
                                {/* Top section: Patient + Recommendation */}
                                <div>
                                    <div className="flex items-center space-x-4 mb-4">
                                        {/* Patient's Image */}
                                        {testimonial.image ? (
                                            <img
                                                src={testimonial.image.src}
                                                alt={testimonial.name}
                                                className="h-16 w-16 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-16 w-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-bold">
                                                {testimonial.name?.charAt(0).toUpperCase() || "?"}
                                            </div>
                                        )}

                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Rating + Thumbs-up */}
                                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-700">
                                        {/* Rating stars */}
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                                                <FaStar key={i} className="text-sm" />
                                            ))}
                                        </div>

                                        {/* Green thumbs-up */}
                                        <div className="flex items-center gap-1 text-green-600 font-medium">
                                            <FaThumbsUp />
                                            <span>Recommends</span>
                                        </div>
                                    </div>

                                    {/* Testimonial Message */}
                                    <p className="text-gray-700 text-base mb-4">
                                        &quot;{testimonial.message}&quot;
                                    </p>
                                </div>

                                {/* Bottom section: City + Doctor */}
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{testimonial.city}</span>
                                    {testimonial.doctor && <span>{testimonial.doctor}</span>}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MobileTestimonials;
