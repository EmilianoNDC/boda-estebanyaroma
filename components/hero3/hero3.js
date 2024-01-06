import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Hero3 = () => {
    return (

        <section className="wpo-box-style">
            <div className="wpo-hero-slider">
                <h2 className="hidden">some</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            // install Swiper modules
                            modules={[Pagination, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            speed={1800}
                            parallax={true}
                        >
                            <SwiperSlide>
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-4.jpg'})` }}>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;