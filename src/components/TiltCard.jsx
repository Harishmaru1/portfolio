import React, { useState, useRef, useCallback } from "react";

export const TiltCard = ({
  children,
  className = "",
  maxTilt = 15,
  scale = 1.02,
  glare = true,
  glowBorder = true,
  glowColor = "rgba(32, 178, 166, 0.35)", // Primary teal glow
  style = {},
  ...props
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = (mouseX / width) * 100;
      const yPct = (mouseY / height) * 100;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const rotateX = ((mouseY / height - 0.5) * -maxTilt).toFixed(2);
      const rotateY = ((mouseX / width - 0.5) * maxTilt).toFixed(2);

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setGlarePosition({ x: xPct, y: yPct, opacity: 0.25 });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? transform : undefined,
        transformStyle: isHovered ? "preserve-3d" : undefined,
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease-out, border-color 0.5s ease-out",
        boxShadow:
          isHovered && glowBorder
            ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px ${glowColor}`
            : undefined,
        ...style,
      }}
      {...props}
    >
      {/* Glare / Spotlight Highlight Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15), transparent 80%)`,
          }}
        />
      )}

      {children}
    </div>
  );
};

