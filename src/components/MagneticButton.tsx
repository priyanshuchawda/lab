
import React, { useState, useRef } from 'react';

const MagneticButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInRange, setIsInRange] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 120;
    
    if (distance < maxDistance) {
      setIsInRange(true);
      const force = (maxDistance - distance) / maxDistance;
      setPosition({
        x: deltaX * force * 0.4,
        y: deltaY * force * 0.4,
      });
    } else {
      setIsInRange(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsInRange(false);
  };

  return (
    <div 
      className="relative w-40 h-32 flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/30"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Magnetic field visualization */}
      {isInRange && (
        <>
          <div className="absolute inset-0 border border-emerald-400/20 animate-pulse"></div>
          <div className="absolute inset-2 border border-emerald-400/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}

      <button
        ref={buttonRef}
        className={`px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-black uppercase tracking-wider text-sm border-2 border-lime-400 transition-all duration-300 ease-out relative overflow-hidden ${
          isInRange ? 'shadow-2xl shadow-emerald-500/50' : 'shadow-lg shadow-emerald-900/30'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) ${isInRange ? 'scale(1.05)' : 'scale(1)'}`,
          transition: position.x === 0 && position.y === 0 
            ? 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
            : 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
          boxShadow: isInRange 
            ? '0 0 30px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2)'
            : '0 4px 15px rgba(16, 185, 129, 0.3)',
        }}
      >
        {/* Digital noise overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isInRange ? 'opacity-30' : 'opacity-0'
        }`}>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `flicker ${0.5 + Math.random() * 1}s infinite`,
              }}
            />
          ))}
        </div>

        <span className="relative z-10">
          MAGNETIC_{isInRange ? 'ON' : 'OFF'}
        </span>

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-lime-400"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-lime-400"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-lime-400"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-lime-400"></div>
      </button>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default MagneticButton;
