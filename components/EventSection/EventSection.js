import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/1.jpg'
import sImg2 from '/public/images/event/2.jpg'
import sImg3 from '/public/images/event/3.jpg'
import LocationMap from './Modal'
import Image from 'next/image';


const Events = [
    {
        Simg: sImg1,
        title: 'Civil',
        li1: 'Viernes, 15 Marzo. 2024 11:30 AM',
        li2: 'Juzgado - Martín Dermit',
        animation:'1200',
    },
    {
        Simg: sImg2,
        title: 'Ceremonia',
        li1: 'Sábado, 16 Marzo. 2024 20:00 PM',
        li2: 'Parroquia Santa Rosa de Lima',
        animation:'1400',
    },
    {
        Simg: sImg3,
        title: 'Fiesta',
        li1: 'Sábado, 16 Marzo. Después de la Ceremonia',
        li2: 'Salón EL VAMPI - Ruta 3, Barrio Jardines',
        animation:'1600',
    },

]

const EventSection = (props) => {
    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'¡Nos casamos!'} MainTitle={'¿Cuándo y Dónde?'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <Image src={event.Simg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;