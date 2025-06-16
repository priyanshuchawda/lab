
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
}

const GlitchText = ({ text }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
  
  const getGlitchedText = (originalText: string) => {
    return originalText.split('').map((char, index) => {
      if (Math.random() < 0.3) {
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      return char;
    }).join('');
  };

  return (
    <span className="relative inline-block">
      <span 
        className={`relative z-10 transition-all duration-100 ${
          isGlitching ? 'text-red-400' : 'text-lime-400'
        }`}
        style={{
          textShadow: isGlitching 
            ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00' 
            : 'none',
          transform: isGlitching ? 'skew(-2deg)' : 'none',
        }}
      >
        {isGlitching ? getGlitchedText(text) : text}
      </span>
      
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-cyan-400 opacity-70"
            style={{
              transform: 'translate(1px, -1px)',
              zIndex: 5,
            }}
          >
            {getGlitchedText(text)}
          </span>
          <span 
            className="absolute top-0 left-0 text-red-400 opacity-70"
            style={{
              transform: 'translate(-1px, 1px)',
              zIndex: 5,
            }}
          >
            {getGlitchedText(text)}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
