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
    const closeModal = () => setModalOpen(false);
  
    const startAudio = () => {
      const audioElement = new Audio('/Ed Sheeran - Perfect.mp3');
      audioElement.play();
      setModalOpen(false);
    };
  
    useEffect(() => {
      if (shouldPlayAudio) {
        startAudio();
      }
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
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000, // ajusta el valor según sea necesario
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '400px', // ajusta el valor según sea necesario
              width: '100%',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '8px',
              background: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <h2>¿Quieres reproducir música?</h2>
          <button onClick={startAudio} className="theme-btn">Reproducir música</button>
        <button onClick={closeModal} className="theme-btn">No quiero reproducir música</button>
        </Modal>
      </>
    );
  };
  
  export default HomePage;
