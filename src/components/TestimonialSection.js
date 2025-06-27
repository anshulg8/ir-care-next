import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TestimonialSection = ({ testimonials = [] }) => {
    return (
        <section className="pt-10 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        What Our <span className="text-teal-600">Patients</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                            <div className="bg-white rounded-xl shadow-lg p-6 mx-auto w-full max-w-lg">
                                <div className="flex items-center space-x-4 mb-6">
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

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{testimonial.city}</p>
                                        {testimonial.condition && (
                                            <p className="text-sm text-teal-600 font-medium">
                                                Treated for: {testimonial.condition}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Testimonial Message */}
                                <p className="text-gray-700 text-base">
                                    &quot;{testimonial.message}&quot;
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
