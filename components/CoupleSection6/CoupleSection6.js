import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/7.jpg'
import shape from '/public/images/couple/couple-shape2.png'
import Image from 'next/image';

const CoupleSection6 = (props) => {

    return (
        <section className="wpo-couple-section-s6 section-padding" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Ritesh Debtath</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/home3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/home3"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-12">
                            <div className="middle-couple-pic-wrap">
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <Image src={coupleImg1} alt="" />
                                    </div>
                                    <div className="couple-shape"><Image src={shape} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Jaya Syarma</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/home3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/home3"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection6;