import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/Hero';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import StorySection from '../../components/StorySection';
import PortfolioSection from '../../components/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useEffect } from 'react';



const HomePage2 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <Hero />
            <CoupleSection />
            <StorySection />
            <PortfolioSection />
            <BrideGrooms brClass={'pt-0'} />
            <RsvpSection rClass={'wpo-contact-section-s2'} />
            <EventSection />
            <BlogSection />
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

const IndexPage = () => {
    useEffect(() => {
      // Obtén el elemento de audio
      const audioElement = new Audio('/Ed Sheeran - Perfect.mp3');
  
      // Reproduce la canción cuando la página se carga
      audioElement.play();
  
      // Opcional: Puedes detener la reproducción al desmontar el componente
      return () => {
        audioElement.pause();
        audioElement.currentTime = 0;
      };
    }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, está vacío para que se ejecute solo una vez al montar la página.
  
    return (
      <div>
        {/* Contenido de tu página */}
      </div>
    );
  };

export default HomePage2;