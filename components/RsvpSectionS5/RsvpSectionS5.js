import React from 'react'
import RSVPFrom2 from '../RSVPFrom2/RSVPFrom2';
import cimg from '/public/images/contact/img-1.jpg';
import cimg2 from '/public/images/contact/img-2.jpg';
import Image from 'next/image';

const RsvpSectionS5 = (props) => {
    return (
        <section className="wpo-contact-section-s6 section-padding" id="rsvp">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h2>Make an Inquiry</h2>
                                    </div>
                                    <RSVPFrom2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-img"><Image src={cimg} alt="" /></div>
            <div className="right-img"><Image src={cimg2} alt="" /></div>
        </section>

    )
}

export default RsvpSectionS5;