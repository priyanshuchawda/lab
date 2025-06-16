
import React, { useState } from 'react';

const ProgressSlider = () => {
  const [value, setValue] = useState(50);

  const getEmoji = (val: number) => {
    if (val < 15) return '💀';
    if (val < 30) return '😢';
    if (val < 45) return '😐';
    if (val < 60) return '🙂';
    if (val < 75) return '😊';
    if (val < 90) return '🤩';
    return '🔥';
  };

  const getGlitchColor = (val: number) => {
    if (val < 20) return 'from-red-500 to-red-700';
    if (val < 40) return 'from-orange-500 to-red-500';
    if (val < 60) return 'from-yellow-500 to-orange-500';
    if (val < 80) return 'from-lime-500 to-yellow-500';
    return 'from-cyan-400 to-lime-400';
  };

  const getStatusText = (val: number) => {
    if (val < 15) return 'SYSTEM_FAILURE';
    if (val < 30) return 'CRITICAL_ERROR';
    if (val < 45) return 'LOW_ENERGY';
    if (val < 60) return 'STABILIZING';
    if (val < 75) return 'OPTIMAL_RANGE';
    if (val < 90) return 'PEAK_PERFORMANCE';
    return 'MAXIMUM_OVERDRIVE';
  };

  return (
    <div className="w-full max-w-xs">
      <div className="flex justify-center mb-6">
        <div className={`text-4xl transition-all duration-300 relative ${
          value > 85 ? 'animate-bounce' : value < 20 ? 'animate-pulse' : ''
        }`}>
          {getEmoji(value)}
          
          {/* Glitch effect for extreme values */}
          {(value > 90 || value < 10) && (
            <div className="absolute inset-0 text-4xl opacity-20 animate-ping">
              {value > 90 ? '🌟' : '💥'}
            </div>
          )}
        </div>
      </div>
      
      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-3 bg-black appearance-none cursor-pointer slider border border-gray-600"
          style={{
            background: `linear-gradient(to right, 
              hsl(${(value * 1.2)}, 80%, 60%) 0%, 
              hsl(${(value * 1.2)}, 80%, 70%) ${value}%, 
              rgb(0, 0, 0) ${value}%, 
              rgb(0, 0, 0) 100%)`
          }}
        />
        <div 
          className={`absolute top-1/2 w-6 h-6 bg-gradient-to-r ${getGlitchColor(value)} rounded-full transform -translate-y-1/2 transition-all duration-200 shadow-lg border-2 border-white`}
          style={{ left: `calc(${value}% - 12px)` }}
        >
          <div className="absolute inset-0 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute inset-1 bg-black/20 rounded-full"></div>
        </div>

        {/* Digital readout lines */}
        <div className="absolute -bottom-2 left-0 right-0 flex justify-between text-[8px] text-gray-500 font-mono">
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className={`${i * 10 <= value ? 'text-lime-400' : 'text-gray-600'}`}>
              |
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="text-xs text-gray-300 font-mono uppercase tracking-wider">
          {getStatusText(value)}
        </div>
        <div className="text-lg font-black text-lime-400 font-mono">
          {value}%
        </div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wide">
          [ CONSCIOUSNESS_LEVEL ]
        </div>
      </div>
    </div>
  );
};

export default ProgressSlider;
