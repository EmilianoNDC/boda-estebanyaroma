// ... (importaciones y definiciones anteriores)

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
              overflow: 'hidden', // desactiva el desplazamiento en el cuerpo principal
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
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            },
          }}
        >
          <h2>¿Quieres reproducir música?</h2>
          <button onClick={startAudio} className="theme-btn">
            INGRESAR CON MÚSICA
          </button>
          <button onClick={closeModal} className="theme-btn">
            INGRESAR SIN MÚSICA
          </button>
        </Modal>
      </>
    );
  };
  
  export default HomePage;
  