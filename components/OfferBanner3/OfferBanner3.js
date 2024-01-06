import React from "react";
import conrner1 from '/public/images/testimonial/svg-1.svg'
import conrner2 from '/public/images/testimonial/svg-2.svg'
import conrner3 from '/public/images/testimonial/svg-3.svg'
import conrner4 from '/public/images/testimonial/svg-4.svg'
import Link from 'next/link'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const OfferBanner3 = () => {
    return (
        <section className="wpo-offer-section-s3">
            <div className="container-fluid">
                <div className="wpo-offer-wrap">
                    <div className="left-img"
                        style={{ background: `url(${'/images/offer3.jpg'}) no-repeat center top / cover` }}>
                    </div>
                    <div className="wpo-offer-items">
                        <div className="wpo-offer-item">
                            <div className="wpo-offer-right">
                                <p>Discount for All Products</p>
                                <h2>50% <span>OFF</span></h2>
                                <Link onClick={ClickHandler} href="/shop" className="theme-btn">Shop Now</Link>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferBanner3;