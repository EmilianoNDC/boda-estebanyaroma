import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import shape1 from '/public/images/slider/shape11.svg'
import shape2 from '/public/images/slider/shape12.svg'
import Image from "next/image";


const SlideArray = [
    {
        id: '01',
        sImg: '/images/slider/slide-5.jpg',
        sub: 'Welcome To',
        Des: "Making Your Dream Long Lasting. We are happy to see you here. We must want that your dreamy wedding will made with us.",
        Title: 'Habibi Weddings',
    },
    {
        id: '02',
        sImg: '/images/slider/slide-6.jpg',
        sub: 'Welcome To',
        Des: "Making Your Dream Long Lasting. We are happy to see you here. We must want that your dreamy wedding will made with us.",
        Title: 'Habibi Weddings',
    },
    {
        id: '03',
        sImg: '/images/slider/slide-7.jpg',
        sub: 'Welcome To',
        Des: "Making Your Dream Long Lasting. We are happy to see you here. We must want that your dreamy wedding will made with us.",
        Title: 'Habibi Weddings',
    },
    {
        id: '04',
        sImg: '/images/slider/slide-8.jpg',
        sub: 'Welcome To',
        Des: "Making Your Dream Long Lasting. We are happy to see you here. We must want that your dreamy wedding will made with us.",
        Title: 'Habibi Weddings',
    }
]




const Hero10 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-slider-s2">
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
                        {
                            SlideArray.map((slide, sld) => (
                                <SwiperSlide key={sld}>
                                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${slide.sImg})` }}>
                                        <div className="container-fluid">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6 col-lg-8 col-12">
                                                    <div className="wpo-static-hero-wrap" data-swiper-parallax="200">
                                                        <div className="wpo-static-hero-inner">
                                                            <div className="slide-title-sub">
                                                                <h3>Welcome To</h3>
                                                            </div>
                                                            <div className="slide-title">
                                                                <h2>Habibi Weddings</h2>
                                                            </div>
                                                            <div className="slide-text">
                                                                <p>Making Your Dream Long Lasting. We are happy to see you here. We
                                                                    must want that your dreamy wedding will made with us.</p>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="shape-1"><Image src={shape1} alt="" />
                                                        </div>
                                                        <div className="shape-2"><Image src={shape2} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        ...
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default Hero10;