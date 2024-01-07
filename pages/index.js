import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/hero2/hero2';
import CoupleSection2 from '../components/CoupleSection2/CoupleSection2';
import StorySection2 from '../components/StorySection2/StorySection2';
import PortfolioSection from '../components/PortfolioSection';
import RsvpSection from '../components/RsvpSection/RsvpSection';
import EventSection from '../components/EventSection/EventSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';

const HomePage = () => {
  useEffect(() => {
    const audioElement = new Audio('/Ed Sheeran - Perfect.mp3');
    
    // Reproducir la música automáticamente al cargar la página
    audioElement.play();

    // Opcional: Detener la reproducción al desmontar el componente
    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []); // El segundo argumento del useEffect es un array de dependencias, está vacío para que se ejecute solo una vez al montar la página.

  return (
    <>
      <Navbar />
      <Hero2 />
      <CoupleSection2 />
      <StorySection2 />
      <PortfolioSection />
      <RsvpSection />
      <EventSection />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </>
  );
};

export default HomePage;
