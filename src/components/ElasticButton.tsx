
import React, { useState } from 'react';
import { useTheme } from './ThemeEngine';

const ElasticButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { currentTheme } = useTheme();

  const handleClick = (e: React.MouseEvent) => {
    setClickCount(prev => prev + 1);
    
    if ((window as any).recordInteraction) {
      (window as any).recordInteraction('click', 'elastic-button', e);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPressed(true);
    if ((window as any).recordInteraction) {
      (window as any).recordInteraction('click', 'elastic-button-press', e);
    }
  };

  // Theme-aware styling
  const getButtonStyle = () => {
    switch (currentTheme.personality) {
      case 'soft':
        return 'bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 border-pink-300';
      case 'retro':
        return 'bg-gradient-to-r from-pink-500 to-cyan-400 text-purple-900 border-pink-500';
      case 'sterile':
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-gray-900 border-gray-400';
      case 'dreamy':
        return 'bg-gradient-to-r from-green-400 to-yellow-300 text-green-800 border-green-400';
      default:
        return 'bg-gradient-to-r from-red-500 to-orange-500 text-black border-yellow-400';
    }
  };

  const getPersonalityText = () => {
    switch (currentTheme.personality) {
      case 'soft': return 'gentle_press';
      case 'retro': return 'rad_click';
      case 'sterile': return 'execute';
      case 'dreamy': return 'magic_touch';
      default: return 'squish';
    }
  };

  return (
    <button
      className={`px-8 py-4 ${getButtonStyle()} font-black uppercase tracking-wider text-sm border-2 relative overflow-hidden transition-all ${currentTheme.animationSpeed} shadow-lg hover:shadow-2xl ${
        isPressed 
          ? 'scale-95 translate-y-1 shadow-inner' 
          : 'scale-100 translate-y-0 hover:scale-105'
      }`}
      style={{
        transform: isPressed 
          ? 'scale(0.95) translateY(2px) scaleY(0.85) skew(-1deg)' 
          : 'scale(1) translateY(0) scaleY(1) skew(0deg)',
        transition: isPressed 
          ? 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)' 
          : `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-${currentTheme.secondary}/20 to-transparent opacity-0 hover:opacity-100 transition-opacity ${currentTheme.animationSpeed}`} />
      
      <span className={`block transition-all ${currentTheme.animationSpeed} relative z-10 ${
        isPressed ? 'scale-110 tracking-widest' : 'scale-100 tracking-wider'
      }`}>
        {getPersonalityText()}_{clickCount.toString().padStart(2, '0')}
      </span>

      {isPressed && (
        <>
          <div className={`absolute top-0 left-0 w-full h-px bg-${currentTheme.secondary} animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-full h-px bg-${currentTheme.accent} animate-pulse`} />
          <div className={`absolute top-0 left-0 w-px h-full bg-${currentTheme.primary} animate-pulse`} />
          <div className={`absolute top-0 right-0 w-px h-full bg-${currentTheme.accent} animate-pulse`} />
        </>
      )}
    </button>
  );
};

export default ElasticButton;
