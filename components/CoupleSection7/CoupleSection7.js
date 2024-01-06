import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/img-8.jpg'
import shape from '/public/images/couple/couple-shape-2.png'
import Image from 'next/image';

const CoupleSection7 = (props) => {

    return (
        <section className="wpo-couple-section-s7 section-padding" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>عمران حسين</h3>
                                <p>عمران شخص عظيم. هو نجل أبو بكر شيكر ، شخص طيب ومجتهد. إنه مطور رائع ومدير تنفيذي رائع لشركته. </p>
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
                                <div className="middle-couple-pic ">
                                    <div className="middle-couple-pic-inner"  style={{ backgroundImage: `url(${'/images/couple/couple-mask.jpg'})`}}>
                                        <Image src={coupleImg1} alt=""/>
                                    </div>
                                    <div className="couple-shape">
                                        <Image src={shape} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>نعيمة أنجم</h3>
                                <p>نعيمة إنسانة عظيمة. هي ابنة محمد امزاد حسين. إنها شخص لطيف ولطيف. إنها مصممة رائعة ومديرة تنفيذية ممتازة لشركته.
                                </p>
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

export default CoupleSection7;