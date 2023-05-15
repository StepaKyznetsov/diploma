import React, { useState } from 'react';

const BlurOverlay = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{top: 0,
      left: 0, height: '100%', width: '100%', position: 'fixed' }} onMouseMove={handleMouseMove}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'none',
          filter: 'blur(10px)',
          clipPath: `polygon(
            0 0,
            0 100%,
            100% 100%,
            100% 0,
            ${mousePosition.x}px ${mousePosition.y}px
          )`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 50,
          left: mousePosition.x - 50,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'white',
          filter: 'blur(0px)',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default BlurOverlay;