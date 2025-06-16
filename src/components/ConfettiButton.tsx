
import React, { useState } from 'react';

const ConfettiButton = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number, x: number, y: number, rotation: number, color: string }>>([]);
  const [explosionCount, setExplosionCount] = useState(0);

  const colors = ['💀', '⚡', '🔥', '💥', '⭐', '🌟', '✨', '💎'];

  const triggerConfetti = () => {
    setExplosionCount(prev => prev + 1);
    
    const newConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 300,
      rotation: Math.random() * 720,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 1200);
  };

  return (
    <div className="relative">
      <button
        onClick={triggerConfetti}
        className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-black font-black uppercase tracking-wider border-2 border-yellow-400 relative overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-pink-500/40"
        style={{
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Digital scan lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <span className="relative z-10">
          🎉 CHAOS_{explosionCount.toString().padStart(2, '0')}
        </span>

        {/* Corner effects */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400 opacity-60"></div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 opacity-60"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-pink-400 opacity-60"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-purple-400 opacity-60"></div>
      </button>

      {/* Confetti particles */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl pointer-events-none z-50"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${particle.x}px, ${particle.y}px) rotate(${particle.rotation}deg)`,
            animation: 'chaos-explosion 1.2s ease-out forwards',
          }}
        >
          {particle.color}
        </div>
      ))}

      <style>{`
        @keyframes chaos-explosion {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          20% {
            transform: translate(var(--end-x, 0), var(--end-y, -50px)) rotate(180deg) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x, 0), var(--end-y, 150px)) rotate(720deg) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConfettiButton;
