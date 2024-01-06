import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import Link from 'next/link';
import shape1 from '/public/images/footer-shape-1.svg';
import shape2 from '/public/images/footer-shape-2.svg';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                </div>
                                <div className="link-wrap">
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <span className='logo'>Regalos</span>
                                </div>
                                <div className="button-wrapper">
                                    <button type="button" className="theme-btn" onClick={handleModalShow}>
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="contact-ft">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; Desarrollado por <Link onClick={ClickHandler} href="/">Innovaarte</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <Slide direction="left" duration="1000" triggerOnce="true">
                    <Image src={shape1} alt="" />
                </Slide>
            </div>
            <div className="ft-shape-2">
                <Slide direction="right" duration="1200" triggerOnce="true">
                    <Image src={shape2} alt="" />
                </Slide>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Regalos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                • Caja de ahorro 110627531-00001
        </div>
        <div>
                • En la ceremonia
        </div>
        <div>
                • O llevar a Venezuela 1365
        </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="theme-btn" onClick={handleModalClose}>
                        Cerrar
                    </button>
                </Modal.Footer>
            </Modal>
        </footer>
    )
}

export default Footer;
