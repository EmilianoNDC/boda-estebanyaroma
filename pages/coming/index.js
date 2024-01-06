import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import WeddingCountdown from '../../components/WeddingCountdown/WeddingCountdown';
import frame1 from '/public/images/slider/shape13.svg'
import frame2 from '/public/images/slider/shape14.svg'


import shape1 from '/public/images/slider/corner1.svg'
import shape2 from '/public/images/slider/corner2.svg'
import shape3 from '/public/images/slider/corner3.svg'
import shape4 from '/public/images/slider/corner4.svg'
import Image from 'next/image';

const ComingSoonPage = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} />
            <section className="wpo-coming-soon-area" style={{ background: `url(${'/images/slider/coming.jpg'}) no-repeat center top / cover` }}>
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="wpo-event-wrap">
                                        <div className="wpo-event-item">
                                            <div className="coming-soon-section">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8">
                                                        <div className="coming-soon-text">
                                                            <h2>Coming Soon</h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                                tempor
                                                                incididunt ut labore et dolore.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="wpo-wedding-date">
                                                            <h2 className="hidden">some</h2>
                                                            <div className="clock-grids">
                                                                <div id="clock">
                                                                    <WeddingCountdown />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="wpo-coming-contact">
                                                            <form method="post" onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form-main">
                                                                <div className="row justify-content-center">
                                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                                        <input type="text" className="form-control" name="name" id="name"
                                                                            placeholder="Name*" />
                                                                    </div>
                                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                                        <input type="email" className="form-control" name="email" id="email"
                                                                            placeholder="Email" />
                                                                    </div>
                                                                    <div className="col-lg-2 col-sm-4 col-6">
                                                                        <div className="submit-area">
                                                                            <button type="submit">Notify Me</button>
                                                                            <div id="loader">
                                                                                <i className="ti-reload"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
                                            <div className="shape-3"><Image src={shape3} alt="" /></div>
                                            <div className="shape-4"><Image src={shape4} alt="" /></div>
                                        </div>
                                        <div className="frame-shape-1"><Image src={frame1} alt="" />
                                        </div>
                                        <div className="frame-shape-2"><Image src={frame2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};
export default ComingSoonPage;
