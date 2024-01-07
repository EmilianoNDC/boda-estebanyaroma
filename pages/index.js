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
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta el valor de opacidad aquí
              zIndex: 1000, // ajusta el valor según sea necesario
              overflow: 'hidden', // desactiva el desplazamiento en el cuerpo principal
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              color: '#333', // Ajusta el color según el tema de la web
            },
          }}
        >
          <h2>Bienvenidos a la invitación de Esteban y Aroma</h2>
          <p style={{ margin: '10px 0', fontSize: '16px' }}>
            La música de fondo es parte de la experiencia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <button onClick={startAudio} className="theme-btn" style={{ marginBottom: '10px', borderRadius: '20%' }}>
              INGRESAR CON MÚSICA
            </button>
            <button onClick={closeModal} className="theme-btn" style={{ borderRadius: '20%' }}>
              INGRESAR SIN MÚSICA
            </button>
          </div>
        </Modal>
      </>
    );
  };
  
  export default HomePage;
