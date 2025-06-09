import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const navigate = useNavigate();



  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',        // full viewport width
        height: '100vh',       // full viewport height
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',  // fixed to viewport
          top: 0,
          left: 0,
          width: '100vw',     // full width viewport
          height: '100vh',    // full height viewport
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/5382332-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: 'rgba(132, 0, 255, 0.22)',
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(60px)',
         boxShadow: "0 4px 20px rgb(92, 4, 102)",
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '30px',
          color: '#e82098',
          fontFamily: "Courier New, Monospace",
          fontSize: '2.5rem',
          fontWeight: '300',
          fontStretch: "extra-condensed",
          zIndex: 2,
          
        }}
      >
        Bookmart
      </header>

      {/* Navigation Buttons */}
      <div
        style={{
          position: 'fixed',
          top: '70px',
          right: '40px',
          display: 'flex',
          gap: '15px',
          zIndex: 2,
        }}
      >
        <button
          style={navButtonStyle}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          style={navButtonStyle}
          onClick={() => navigate('/seller')}
        >
          Seller?
        </button>
      </div>

      {/* Center Content Box */}
      <div
        style={{
          position: 'fixed',    // fix it in viewport
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',  // center horizontally and vertically
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          WebkitBackdropFilter: 'blur(10px)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white',
          maxWidth: '700px',
          width: '90vw',        // responsive width on smaller screens
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: '3rem', color: '#C71585', marginBottom: '1rem', fontWeight: "250" }}>
          Welcome to Bookmart!
        </h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', color: '#f0e6f6' }}>
          "A room without books is like a body without a soul." – Cicero
        </p>
        <button
          style={{
            padding: '12px 30px',
            backgroundColor: '#ff1493',
            WebkitBackdropFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/buyer')}
        >
          Find Books
        </button>
      </div>
    </div>
  );
};

const navButtonStyle: React.CSSProperties = {
  padding: '8px 18px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  WebkitBackdropFilter: 'blur(30px)',
  backdropFilter: 'blur(30px)',
  
  color: '',
  border: '1px solid white',
  borderRadius: '20px',
  fontSize: '14px',
  cursor: 'pointer',
  
};

export default HomePage;
