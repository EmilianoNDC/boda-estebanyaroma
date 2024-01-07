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
import Modal from 'react-modal';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setShouldPlayAudio(true); // Marcar que la música debería reproducirse al cerrar el modal
  };

  const startAudio = () => {
    const audioElement = new Audio('/Ed Sheeran - Perfect.mp3');
    audioElement.play();
    setModalOpen(false); // Cerrar el modal al iniciar la reproducción
  };

  useEffect(() => {
    if (shouldPlayAudio) {
      startAudio();
    }
    // Restablecer el estado después de reproducir la música
    setShouldPlayAudio(false);
  }, [shouldPlayAudio]);

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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Reproducir música"
      >
        <h2>¿Quieres reproducir música?</h2>
        <button onClick={startAudio}>Reproducir música</button>
        <button onClick={closeModal}>No quiero reproducir música</button>
      </Modal>
    </>
  );
};

export default HomePage;
