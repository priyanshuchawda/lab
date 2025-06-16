
import React, { useState } from 'react';

const LiquidToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div 
      className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-700 ease-out border-2 ${
        isOn 
          ? 'bg-gradient-to-r from-cyan-400 to-lime-400 border-lime-400 shadow-lg shadow-lime-400/50' 
          : 'bg-black border-gray-600 shadow-inner'
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-700 ease-out shadow-lg border ${
          isOn 
            ? 'translate-x-8 bg-black border-lime-400 shadow-lime-400/30' 
            : 'translate-x-0.5 bg-gray-400 border-gray-500 shadow-gray-700/50'
        }`}
        style={{
          filter: isOn ? 'drop-shadow(0 0 10px rgba(0, 255, 0, 0.6))' : 'none',
        }}
      >
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isOn ? 'bg-gradient-to-r from-cyan-400/20 to-lime-400/20' : 'bg-gray-600/30'
          }`}
        />
      </div>
      
      {/* Liquid blob effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div 
          className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ease-out ${
            isOn 
              ? 'bg-lime-400/40 translate-x-6 translate-y-2.5 scale-150 opacity-0' 
              : 'translate-x-1 translate-y-2.5 scale-0 opacity-0'
          }`}
        />
        <div 
          className={`absolute w-2 h-2 rounded-full transition-all duration-800 ease-out ${
            isOn 
              ? 'bg-cyan-400/60 translate-x-4 translate-y-3 scale-200 opacity-0' 
              : 'translate-x-2 translate-y-3 scale-0 opacity-0'
          }`}
        />
      </div>

      {/* Digital noise effect when active */}
      {isOn && (
        <div className="absolute inset-0 rounded-full">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-lime-400 opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 1}s`,
                animation: 'digital-noise 1.5s ease-in-out infinite',
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes digital-noise {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LiquidToggle;
