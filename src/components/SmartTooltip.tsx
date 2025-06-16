
import React, { useState, useRef } from 'react';

const SmartTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40,
    });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-48 h-24 bg-black border-2 border-indigo-400/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-violet-400 hover:shadow-lg hover:shadow-indigo-500/30"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="text-center">
        <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
          AI_TRACKER
        </div>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-indigo-400/60"></div>
      <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-indigo-400/60"></div>
      <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-indigo-400/60"></div>
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-indigo-400/60"></div>
      
      {isVisible && (
        <div
          className="absolute z-50 px-4 py-3 bg-black border-2 border-violet-400 text-violet-300 text-xs font-bold uppercase tracking-wide pointer-events-none transition-all duration-200 ease-out shadow-lg shadow-violet-500/50"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translateX(-50%) rotate(-1deg)',
            animation: 'ai-tooltip-glitch 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            background: 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)',
          }}
        >
          TRACKING_TARGET ⚡
          
          {/* Digital pointer */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rotate-45 border border-violet-300"></div>
          
          {/* Glitch lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-cyan-400 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-yellow-400 opacity-60"></div>
        </div>
      )}

      <style>{`
        @keyframes ai-tooltip-glitch {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) rotate(-1deg) scale(0.8);
            filter: hue-rotate(0deg);
          }
          30% {
            transform: translateX(-50%) translateY(-2px) rotate(1deg) scale(1.05);
            filter: hue-rotate(90deg);
          }
          60% {
            filter: hue-rotate(-90deg);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) rotate(-1deg) scale(1);
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SmartTooltip;
