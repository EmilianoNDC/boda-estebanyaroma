import React from 'react'
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'
import shape1 from '/public/images/footer-shape-1.svg'
import shape2 from '/public/images/footer-shape-2.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Desarrollado por <Link onClick={ClickHandler} href="/">Innovaarte</Link> | Derechos reservados. &copy;</p>
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
        </footer>
    )
}

export default Footer;