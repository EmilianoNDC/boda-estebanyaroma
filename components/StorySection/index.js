import React from 'react'
import { JackInTheBox } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/4.jpg'
import sImg2 from '/public/images/story/5.jpg'
import sImg3 from '/public/images/story/6.jpg'

import flowerShape from '/public/images/story/flower.svg'
import flowerShape2 from '/public/images/story/flower-2.svg'
import pin from '/public/images/story/pin.svg'
import ring from '/public/images/story/ring.svg'

import shape1 from '/public/images/story/flower-shape1.svg'
import shape2 from '/public/images/story/flower-shape2.svg'
import shape3 from '/public/images/story/flower-shape3.svg'
import shape4 from '/public/images/story/flower-shape4.svg'
import Image from 'next/image';




const Storys = [
    {
        sImg: sImg1,
        flower: flowerShape,
        title: 'Cómo nos conocimos',
        date: '15 June 2014',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
    },
    {
        sImg: sImg2,
        flower: flowerShape2,
        title: 'Él me propuso, y le dije que sí',
        date: '12 Dec 2019',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        flower: flowerShape,
        title: 'Nuestro compromiso',
        date: '16 Jan 2023',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
    }

]


const StorySection = (props) => {
    return (
        <section className="wpo-story-section-s2 section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Nuestra historia'} MainTitle={'Cómo todo empezó?'} />
                <div className="wpo-story-wrap">
                    {
                        Storys.map((story, st) => (
                            <div className="wpo-story-item" key={st}>
                                <div className="row">
                                    <div className={`col col-lg-6 col-12 ${story.order1}`}>
                                        <div className="wpo-story-img">
                                            <Image src={story.sImg} alt="" />
                                        </div>
                                    </div>
                                    <div className={`col col-lg-6 col-12 ${story.order2}`}>
                                        <JackInTheBox duration="1000" triggerOnce="true">
                                            <div className="wpo-story-content">
                                                <div className="thumb">
                                                    <span>{story.date}</span>
                                                    <div className="pin">
                                                        <Image src={pin} alt="" />
                                                    </div>
                                                </div>
                                                <h2>{story.title}</h2>
                                                <p>{story.description}</p>
                                                <div className="flower">
                                                    <Image src={story.flower} alt="" />
                                                </div>
                                            </div>
                                        </JackInTheBox>
                                    </div>
                                </div>
                                <div className="ring-wrap">
                                    {
                                        Array.apply(null, { length: 10 }).map((e, i) => (
                                            <div className="ring" key={i}><Image src={ring} alt="" /></div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>
            <div className="flower-shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="flower-shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="flower-shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="flower-shape-4">
                <Image src={shape4} alt="" />
            </div>
        </section>
    )
}

export default StorySection;