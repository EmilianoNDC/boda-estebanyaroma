import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/hero2';
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection from '../../components/PortfolioSection';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage = () => {
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
    <Fragment>
      <Navbar />
      <Hero2 />
      <CoupleSection2 />
      <StorySection2 />
      <PortfolioSection />
      <RsvpSection />
      <EventSection />
      <Footer />
      <BlogSection />
      
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
