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
  
    const openModal = () => {
      setModalOpen(true);
      document.body.style.overflow = 'hidden';  // Desactiva el scrolling
    };
  
    const closeModal = () => {
      setModalOpen(false);
      document.body.style.overflow = 'auto';  // Activa el scrolling
    };
  
    const startAudio = () => {
      const audioElement = new Audio('/Ed Sheeran - Perfect.mp3');
      audioElement.play();
      closeModal();
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
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            },
            content: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              background: 'white',
              borderRadius: '0',
              padding: '20px',
              color: '#333',
            },
          }}
        >
          <h2>Bienvenidos a la invitación de Esteban y Aroma</h2>
          <p style={{ margin: '10px 0', fontSize: '16px', textAlign: 'center' }}>
            La música de fondo es parte de la experiencia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
              <button onClick={startAudio} className="theme-btn" style={{ marginBottom: '10px', borderRadius: '20px', fontSize: '14px', padding: '10px', marginRight: '5px' }}>
                INGRESAR CON MÚSICA
              </button>
              <button onClick={closeModal} className="theme-btn" style={{ marginBottom: '10px', borderRadius: '20px', fontSize: '14px', padding: '10px', marginLeft: '5px' }}>
                INGRESAR SIN MÚSICA
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  };
  
  export default HomePage;
