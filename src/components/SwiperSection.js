import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { cards } from '../data';
import AppointmentModalWithProcedure from './AppointmentModalWithProcedure';
import { useModal } from '../context/ModalContext';

const SwiperSection = () => {
    const { show, procedure, openModal, closeModal } = useModal();

    return (
        <div className="w-full relative z-10">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <section className="relative h-[32rem] w-full overflow-hidden">
                            <img
                                src={card.backgroundImage.src}
                                alt={card.title}
                                className="
            absolute inset-0 w-full h-full object-cover 
            object-[50%_20%] sm:object-[50%_30%] 
            z-0 transition-all duration-300
        "
                            />

                            {/* Stronger overlay */}
                            <div className="absolute inset-0 bg-black/40 z-10" />

                            {/* Text block: pushed down on mobile using margin or padding */}
                            <div
                                className="
            relative z-20 px-6 sm:px-12 lg:px-24 
            pt-48 sm:pt-24 pb-12
            text-center max-w-5xl mx-auto text-white 
            h-full flex flex-col justify-start sm:justify-center items-center
        "
                            >
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{card.title}</h1>
                                <h2 className="text-lg md:text-2xl font-semibold mb-6 drop-shadow">{card.subtitle}</h2>

                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button
                                        onClick={() => openModal(card.title)}
                                        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                                    >
                                        {card.primaryCTA}
                                    </button>

                                    <Link href="/interventional-radiology">
                                        <button className="bg-white/80 text-teal-700 hover:bg-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md backdrop-blur-sm">
                                            {card.secondaryCTA}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>

                    </SwiperSlide>
                ))}
            </Swiper>

            <AppointmentModalWithProcedure show={show} procedure={procedure} onClose={closeModal} />

        </div>
    );
};

export default SwiperSection;
