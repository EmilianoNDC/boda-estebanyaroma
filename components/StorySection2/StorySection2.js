import React from 'react'
import { Zoom } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/1.jpg'
import sImg2 from '/public/images/story/2.jpg'
import sImg3 from '/public/images/story/3.jpg'

import shape1 from '/public/images/story/shape.png'
import shape2 from '/public/images/story/shape2.png'
import shape3 from '/public/images/story/shape3.png'


import bshape1 from '/public/images/story/flower-shape1.svg'
import bshape2 from '/public/images/story/flower-shape2.svg'
import bshape3 from '/public/images/story/flower-shape3.svg'
import bshape4 from '/public/images/story/flower-shape4.svg'
import Image from 'next/image';




const Storys = [
    {
        sImg: sImg1,
        shape: shape1,
        title: 'Cómo nos conocimos',
        date: '19 de Setiembre del 2020',
        description: 'Todo comenzó con un simple mensaje en Facebook. Después de unos intercambios animados, decidimos conocernos en persona. La conexión fue instantánea y, sorprendentemente, me invitó a cenar. En esa cena, descubrimos una afinidad única y desde entonces, nuestra historia juntos ha sido una continua aventura llena de amor y complicidad.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: 'Nuestro compromiso',
        date: '24 de Diciembre del 2022',
        description: 'Era noche de Navidad. Sin previo aviso, Esteban propuso a nuestra hija ir en busca de un regalo para mi. Sorprendentemente, regresaron con un hermoso anillo de compromiso, transformando la celebración en una noche que sellaría nuestro compromiso de por vida.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape3,
        title: 'Él me propuso, dije que sí',
        date: '24 de Diciembre del 2022',
        description: 'Esteban no solo me reveló un hermoso anillo, sino también la emocionante noticia de nuestra próxima boda, respondiéndole definitivamente que sí.',
    }

]


const StorySection2 = (props) => {
    return (
        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Nuestra historia'} MainTitle={'¿Cómo todo empezó?'} />
                <div className="wpo-story-wrap">
                    {
                        Storys.map((story, st) => (
                            <div className="wpo-story-item" key={st}>
                                <div className="wpo-story-img-wrap">
                                    <Zoom direction="up" duration="1000" triggerOnce="true">
                                        <div className="wpo-story-img">
                                            <Image src={story.sImg} alt="" />
                                        </div>
                                    </Zoom>
                                    <div className="clip-shape">
                                        <svg viewBox="0 0 382 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z" />
                                        </svg>
                                    </div>
                                    <div className="wpo-img-shape">
                                        <Image src={story.shape} alt="" />
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>{story.date}</span>
                                        <h2>{story.title}</h2>
                                        <p>{story.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="flower-shape-1">
                <Image src={bshape1} alt="" />
            </div>
            <div className="flower-shape-2">
                <Image src={bshape2} alt="" />
            </div>
            <div className="flower-shape-3">
                <Image src={bshape3} alt="" />
            </div>
            <div className="flower-shape-4">
                <Image src={bshape4} alt="" />
            </div>
        </section>
    )
}

export default StorySection2;