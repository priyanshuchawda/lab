
import React from 'react';
import { useTheme } from './ThemeEngine';

interface GridBackgroundProps {
  mousePos: { x: number; y: number };
}

const GridBackground = ({ mousePos }: GridBackgroundProps) => {
  const { currentTheme } = useTheme();

  const getGridColors = () => {
    switch (currentTheme.personality) {
      case 'soft':
        return {
          primary: 'rgba(236, 72, 153, 0.3)', // pink
          secondary: 'rgba(168, 85, 247, 0.3)' // purple
        };
      case 'retro':
        return {
          primary: 'rgba(236, 72, 153, 0.4)', // pink
          secondary: 'rgba(34, 197, 94, 0.3)' // cyan
        };
      case 'sterile':
        return {
          primary: 'rgba(75, 85, 99, 0.3)', // gray
          secondary: 'rgba(59, 130, 246, 0.2)' // blue
        };
      case 'dreamy':
        return {
          primary: 'rgba(34, 197, 94, 0.3)', // green
          secondary: 'rgba(251, 191, 36, 0.2)' // yellow
        };
      default:
        return {
          primary: 'rgba(0, 255, 255, 0.3)', // cyan
          secondary: 'rgba(163, 230, 53, 0.3)' // lime
        };
    }
  };

  const colors = getGridColors();

  return (
    <>
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${currentTheme.primary} to-transparent opacity-60`}
          style={{
            top: `${(mousePos.y / window.innerHeight) * 100}%`,
            animation: `scan-line 3s ease-in-out infinite alternate`,
          }}
        />
        <div 
          className={`absolute h-full w-px bg-gradient-to-b from-transparent via-${currentTheme.secondary} to-transparent opacity-40`}
          style={{
            left: `${(mousePos.x / window.innerWidth) * 100}%`,
            animation: 'scan-line 2s ease-in-out infinite alternate-reverse',
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-px h-px bg-${currentTheme.primary} opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float-${i % 3} ${3 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes scan-line {
          0% { opacity: 0.2; transform: scaleX(0.5); }
          50% { opacity: 0.8; transform: scaleX(1); }
          100% { opacity: 0.3; transform: scaleX(0.7); }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(10px) rotate(-180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(5px, -5px) rotate(90deg); }
        }
      `}</style>
    </>
  );
};

export default GridBackground;
