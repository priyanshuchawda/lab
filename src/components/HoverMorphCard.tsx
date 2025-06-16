
import React, { useState } from 'react';

const HoverMorphCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out border-2 ${
        isHovered 
          ? 'w-72 h-40 bg-gradient-to-br from-blue-500 via-teal-400 to-cyan-300 border-cyan-400 shadow-2xl shadow-cyan-500/40 rotate-1 scale-105' 
          : 'w-32 h-20 bg-black border-blue-400/50 shadow-lg hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanded content */}
      <div className={`absolute inset-0 transition-all duration-700 ease-out p-6 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <h4 className="text-black font-black text-lg uppercase tracking-wide">MORPHED!</h4>
            </div>
            <p className="text-blue-900 text-sm font-bold leading-tight">
              This card exploded into existence with pure digital violence. 
              <span className="text-cyan-700"> Reality.exe has stopped working.</span>
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-xs text-blue-800 font-mono uppercase tracking-wider">
              [MUTATION_COMPLETE]
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 rotate-45"></div>
              <div className="w-2 h-2 bg-blue-600 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Collapsed state */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
        isHovered ? 'opacity-0 scale-150 rotate-12' : 'opacity-100 scale-100 rotate-0'
      }`}>
        <div className="text-center">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
            HOVER
          </div>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>

      {/* Scan line effect during hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
            style={{
              animation: 'scan-sweep 0.8s ease-out',
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes scan-sweep {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HoverMorphCard;
