import React, { Fragment } from 'react';
import Link from 'next/link'
import cImg1 from '/public/images/couple/3.jpg'
import flower from '/public/images/couple/couple-flower.png'
import shape from '/public/images/slider/date-shape.png'
import TimeCountDown from '../../components/countdown';
import LocationMap from './Modal';
import Image from 'next/image';

const InvitationPage1 = () => {

    return (
        <Fragment>
            <header id="header">
                <div className="wpo-site-header invitation-header">
                    <ul>
                        <li> <Link className="navbar-brand" href="/">Habibi</Link></li>
                        <li><Link className="back-btn" href="/"><i className="ti-back-left"></i></Link></li>
                    </ul>
                </div>
            </header>
            <section className="wpo-invitation-area section-padding" style={{ backgroundImage: `url(${'images/slider/invitation-bg.jpg'})` }}>
                <div className="container-fluid">
                    <div className="wpo-invitation-wrap">
                        <div className="wpo-invitation-inner-item">
                            <div className="wpo-invitation-inner">
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <Image src={cImg1} alt="" />
                                    </div>
                                    <div className="couple-flower">
                                        <Image src={flower} alt="" />
                                    </div>
                                </div>
                                <div className="wpo-invitation-info">
                                    <h2>James & Amelia</h2>
                                    <p>Our Big Day is November 15,2022</p>
                                    <span className="shape"><Image src={shape} alt="" /> </span>
                                    <div className="row">
                                        <div className="col col-xs-12">
                                            <div className="clock-grids">
                                                <div id="clock">
                                                    <TimeCountDown />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-event-text">
                                    <ul>
                                        <li>Monday, 12 Apr. 2022 <br />
                                            1:00 PM – 2:30 PM</li>
                                        <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                                        <li>+1 234-567-8910</li>
                                        <li><LocationMap /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default InvitationPage1;