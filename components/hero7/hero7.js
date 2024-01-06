import React from "react";
import hero1 from '/public/images/slider/hero-18.jpg'
import hero2 from '/public/images/slider/hero-19.jpg'
import rShape from '/public/images/slider/rtl-shape.png'
import Shape1 from '/public/images/slider/shape16.svg'
import Shape2 from '/public/images/slider/shape17.svg'
import TimeCountDown from "../countdown";
import Image from "next/image";

const Hero7 = () => {
    return (

        <section className="static-hero-s10" style={{ backgroundImage: `url(${'images/slider/hero-bg3.png'})` }}>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col col-xl-5 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><Image src={Shape1} alt=""/></div>
                                    <div className="slide-title">
                                        <h2>عمران ونعيمة</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>سنتزوج في ١٥ نوفمبر ٢٠٢٢</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <div id="clock3">
                                                <TimeCountDown/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shape-2"><Image src={Shape2} alt=""/></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-12">
                                <div className="wpo-hero-img-wrap">
                                    <div className="wpo-hero-img-item">
                                        <div className="wpo-hero-img">
                                            <Image src={hero1} alt=""/>
                                        </div>
                                        <div className="musk-shape">
                                            <Image src={rShape} alt=""/>
                                        </div>
                                    </div>
                                    <div className="wpo-hero-img-item">
                                        <div className="wpo-hero-img">
                                            <Image src={hero2} alt=""/>
                                        </div>
                                        <div className="musk-shape">
                                            <Image src={rShape} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero7;