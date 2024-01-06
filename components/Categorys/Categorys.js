import React from "react";
import Link from 'next/link'
import cImg1 from '/public/images/category/1.jpg'
import cImg2 from '/public/images/category/2.jpg'
import cImg3 from '/public/images/category/3.jpg'
import cImg4 from '/public/images/category/4.jpg'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Categorys = () => {
    return (

        <section className="wpo-category-section section-padding">
            <h2 className="hidden">Category</h2>
            <div className="container">
                <div className="wpo-category-wrap">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <div className="wpo-category-img-inner">
                                        <Image src={cImg1} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Bridesmaid Bouquets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <div className="wpo-category-img-inner">
                                        <Image src={cImg2} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Bridal Bouquets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <div className="wpo-category-img-inner">
                                        <Image src={cImg3} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Corsages & Boutonnieres</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <div className="wpo-category-img-inner">
                                        <Image src={cImg4} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Wedding Archway</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys;