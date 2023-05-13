import React, { useState } from "react";

const BlurOverlay = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsBlurred(false);
  };

  const handleMouseLeave = () => {
    setIsBlurred(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: isBlurred ? "blur(10px)" : "none",
        transition: "backdrop-filter 0.5s ease",
        zIndex: 9999,
        clipPath: `polygon(
          0 0,
          0 100%,
          ${mousePosition.x - 50}px 100%,
          ${mousePosition.x}px ${mousePosition.y - 50}px,
          ${mousePosition.x + 50}px 100%,
          100% 100%,
          100% 0
        )`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(event) =>
        setMousePosition({ x: event.clientX, y: event.clientY })
      }
    >
      <div
        style={{
          position: "absolute",
          top: mousePosition.y - 50,
          left: mousePosition.x - 50,
          width: 100,
          height: 100,
          borderRadius: "50%",
          filter: "blur(0px)",
        }}
      />
    </div>
  );
};

export default BlurOverlay;
