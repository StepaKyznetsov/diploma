import React, { useState } from 'react';

interface BlurOnHoverProps {
  children: React.ReactNode;
}

const BlurOverlay: React.FC<BlurOnHoverProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{
        position: 'relative',
        filter: 'blur(5px)',
        width: '100%',
        height: '100%',
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 50,
          left: mousePosition.x - 50,
          width: '100px',
          height: '100px',
          backgroundColor: 'transparent',
          clipPath: 'circle(50px at center)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};

export default BlurOverlay;