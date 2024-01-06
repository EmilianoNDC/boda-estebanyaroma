import React from "react";
import Link from 'next/link'



const Hero13 = () => {
    return (

        <section className="wpo-hero-slider-s3">
            <h2 className="hidden">some</h2>
            <div className="video-bg">
                <video autoPlay muted loop poster='https://static.videezy.com/system/resources/previews/000/040/690/original/17_010_08.mp4'>
                    <source
                        src='https://static.videezy.com/system/resources/previews/000/040/690/original/17_010_08.mp4'
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="hero-inner-text">
                <h2>Everything is Better with Flowers.</h2>
                <ul className="social">
                    <li><Link href="/shop-home-video-bg"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                    <li><Link href="/shop-home-video-bg"><i className="fi flaticon-twitter"></i></Link></li>
                    <li><Link href="/shop-home-video-bg"><i className="fi flaticon-linkedin"></i></Link></li>
                    <li><Link href="/shop-home-video-bg"><i className="fi flaticon-instagram-1"></i></Link></li>
                </ul>
            </div>
        </section>

    )
}

export default Hero13;