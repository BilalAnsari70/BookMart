import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      navigate('/select-role');
    }
  };

  // Input style object that includes placeholder styling
  const inputStyle = {
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    backdropFilter: 'blur(5px)',
    '&::placeholder': {  // Properly nested placeholder styling
      color: 'rgba(255,255,255,0.7)'
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/CleanMyMac_Mac3.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'grid',
      placeItems: 'center',
      margin: 0,
      padding: 0,
      overflow: 'auto'
    }}>
      {/* Blurred overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/CleanMyMac_Mac3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1
      }}></div>

      {/* Dark overlay for better contrast */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: -1
      }}></div>

      {/* Floating form elements */}
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '90%',
        maxWidth: '350px',
        padding: '0',
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          margin: 0,
          color: 'white',
          fontSize: '2rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Bookmart
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: '14px',
            backgroundColor: 'rgba(255, 0, 183, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 183, 1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 183, 0.8)';
          }}
        >
          Login
        </button>

        <div style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '0.9rem',
          marginTop: '-0.5rem'
        }}>
          Don't have an account?{' '}
          <a href="#" style={{
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none'
          }}>Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;