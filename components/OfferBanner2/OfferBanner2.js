import React from "react";
import Link from 'next/link'
import shape from '/public/images/offer/shape.svg'
import shape2 from '/public/images/slider/shape13.svg'
import conrner1 from '/public/images/slider/corner1.svg'
import conrner2 from '/public/images/slider/corner2.svg'
import conrner3 from '/public/images/slider/corner3.svg'
import conrner4 from '/public/images/slider/corner4.svg'

import offer1 from '/public/images/offer/img-1.jpg'
import offer2 from '/public/images/offer/img-2.jpg'
import offer3 from '/public/images/offer/img-3.jpg'
import offer4 from '/public/images/offer/img-4.jpg'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const OfferBanner2 = () => {
    return (
        <section className="wpo-offer-section-s2">
            <div className="container-fluid">
                <div className="wpo-offer-wrap">
                    <div className="left-img" style={{ background: `url(${'/images/offer2.jpg'}) no-repeat center top / cover` }}>
                    </div>
                    <div className="wpo-offer-items">
                        <div className="wpo-offer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="wpo-offer-left">
                                        <h2>Deal Of The Day</h2>
                                        <p>Our bracelets, necklaces, and rings feature a unique screw motif, symbolizing the idea of locking love in place.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="wpo-offer-right">
                                        <p>Discount for All Products</p>
                                        <h2>50% <span>OFF</span></h2>
                                        <Link onClick={ClickHandler} href="/shop" className="theme-btn">Shop Now</Link>
                                        <div className="middle-shape">
                                            <Image src={shape} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shape-1"><Image src={conrner1} alt="" />
                            </div>
                            <div className="shape-2"><Image src={conrner2} alt="" />
                            </div>
                            <div className="shape-3"><Image src={conrner3} alt="" />
                            </div>
                            <div className="shape-4"><Image src={conrner4} alt="" />
                            </div>
                        </div>
                        <div className="frame-shape-1"><Image src={shape2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="offer-product">
                    <div className="row">
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <Image src={offer1} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <Image src={offer2} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12" >
                            <div className="offer-product-img">
                                <Image src={offer3} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <Image src={offer4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default OfferBanner2;