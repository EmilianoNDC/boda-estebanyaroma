import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero12 = () => {
    return (

        <section className="wpo-hero-slider-s3">
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
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-10.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-12.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-11.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
            <div className="hero-inner-text">
                <h2>Everything is Better with Flowers.</h2>
                <ul className="social">
                    <li><Link href="/shop-home-2"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                    <li><Link href="/shop-home-2"><i className="fi flaticon-twitter"></i></Link></li>
                    <li><Link href="/shop-home-2"><i className="fi flaticon-linkedin"></i></Link></li>
                    <li><Link href="/shop-home-2"><i className="fi flaticon-instagram-1"></i></Link></li>
                </ul>
            </div>
        </section>

    )
}

export default Hero12;