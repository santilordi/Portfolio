import React, { useState, useEffect } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-container">
      {/* El div que actúa como reflector siguiendo el mouse */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      
      {/* Contenido principal */}
      <div className="content-wrapper relative z-10">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;