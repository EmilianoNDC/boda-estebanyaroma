import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/3.jpg'
import coupleImg2 from '/public/images/couple/couple-flower.png'
import vector1 from '/public/images/couple/vector-1.svg'
import vector2 from '/public/images/couple/vector-2.svg'
import Image from 'next/image';


const CoupleSection3 = (props) => {

    return (
        <section className="wpo-couple-section-s3 section-padding" id="couple">
            <div className="container-fluid">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <div className="vector">
                                    <Image src={vector1} alt="" />
                                </div>
                                <h3>Robert Peter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    Erat
                                    fringilla pellentesque amet tempus. Commodo mi vitae, sagittis blandit.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/home-3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/home-3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/home-3"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-12">
                            <div className="middle-couple-pic">
                                <div className="middle-couple-pic-inner">
                                    <Image src={coupleImg1} alt="" />
                                </div>
                                <div className="couple-flower">
                                    <Image src={coupleImg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <div className="vector">
                                    <Image src={vector2} alt="" />
                                </div>
                                <h3>Jane Margrate</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    Erat
                                    fringilla pellentesque amet tempus. Commodo mi vitae, sagittis blandit.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/home-3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/home-3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/home-3"><i className="ti-instagram"></i></Link></li>
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

export default CoupleSection3;