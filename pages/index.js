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
          shouldCloseOnOverlayClick={false} // Evita cerrar clicando fuera del modal
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              overflow: 'hidden',
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
              width: '100%', // Ocupa todo el ancho de la pantalla
              height: '100%', // Ocupa toda la altura de la pantalla
              background: 'white',
              borderRadius: '0', // Borde sin redondear
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
            <button onClick={startAudio} className="theme-btn" style={{ marginBottom: '10px', borderRadius: '20%', width: '80%' }}>
              INGRESAR CON MÚSICA
            </button>
            <button onClick={closeModal} className="theme-btn" style={{ borderRadius: '20%', width: '80%' }}>
              INGRESAR SIN MÚSICA
            </button>
          </div>
        </Modal>
      </>
    );
  };
  
  export default HomePage;
