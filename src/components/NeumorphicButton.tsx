
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const NeumorphicButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  const handlePress = () => {
    setPulseCount(prev => prev + 1);
  };

  return (
    <button
      className={`w-16 h-16 transition-all duration-300 relative border-2 ${
        isPressed 
          ? 'bg-black shadow-inner border-red-400 shadow-red-900/50' 
          : 'bg-gray-900 shadow-lg border-gray-600 shadow-gray-900/25'
      }`}
      style={{
        borderRadius: '4px',
        boxShadow: isPressed 
          ? 'inset 4px 4px 12px rgba(0, 0, 0, 0.8), inset -4px -4px 12px rgba(255, 0, 0, 0.1)' 
          : '4px 4px 12px rgba(0, 0, 0, 0.8), -2px -2px 8px rgba(255, 255, 255, 0.05)',
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={handlePress}
    >
      <Heart 
        className={`w-6 h-6 mx-auto transition-all duration-300 ${
          isPressed ? 'text-red-400 scale-90' : 'text-gray-400 scale-100'
        }`}
        fill={isPressed ? 'currentColor' : 'none'}
        style={{
          filter: isPressed ? 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.6))' : 'none',
        }}
      />
      
      {/* Digital pulse effect */}
      {isPressed && (
        <div className="absolute inset-0">
          <div className="absolute inset-2 border border-red-400/40 animate-ping" style={{ borderRadius: '2px' }}></div>
          <div className="absolute inset-4 bg-red-400/10 animate-pulse" style={{ borderRadius: '1px' }}></div>
        </div>
      )}

      {/* Pulse counter */}
      {pulseCount > 0 && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-black text-[8px] font-bold flex items-center justify-center border border-red-400">
          {pulseCount > 9 ? '9+' : pulseCount}
        </div>
      )}

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-gray-400/30"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-gray-400/30"></div>
    </button>
  );
};

export default NeumorphicButton;
