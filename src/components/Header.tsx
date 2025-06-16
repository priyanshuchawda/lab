
import React from 'react';
import { useTheme } from './ThemeEngine';
import GlitchText from './GlitchText';

const Header = () => {
  const { currentTheme } = useTheme();

  const getAccentColor = () => {
    switch (currentTheme.personality) {
      case 'aggressive': return 'text-lime-400';
      case 'soft': return 'text-pink-300';
      case 'retro': return 'text-pink-300';
      case 'sterile': return 'text-gray-600';
      case 'dreamy': return 'text-green-400';
      default: return 'text-lime-400';
    }
  };

  return (
    <div className="relative z-10 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <span className={`text-xs uppercase tracking-[0.3em] text-${currentTheme.secondary} font-bold`}>
            [EXPERIMENTAL_LAB_V3.0_WITH_RECORDER]
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black leading-none mb-2">
          <GlitchText text="MICRO" />
          <span className={`text-${currentTheme.accent}`}>-</span>
          <span className={`text-${currentTheme.secondary}`}>INTERACTION</span>
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className={`bg-${currentTheme.primary} text-${currentTheme.background === 'bg-black' ? 'black' : 'white'} px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
            PLAYGROUND_V3
          </div>
          <div className={`h-px bg-gradient-to-r from-${currentTheme.primary} to-transparent flex-1`}></div>
        </div>
        
        <p className={`text-lg text-${currentTheme.secondary} mb-2 max-w-2xl leading-relaxed`}>
          Touch everything. Record your moves. Change themes. Watch the companion react. When UI gets{' '}
          <span className={`bg-${currentTheme.accent} text-${currentTheme.background === 'bg-black' ? 'black' : 'white'} px-1 font-bold`}>SENTIENT</span>.
        </p>
        
        <p className={`text-xs text-${currentTheme.primary} uppercase tracking-wide mb-4`}>
          "Now with 100% more artificial personality"
        </p>

        <div className="text-xs text-gray-400">
          Created by{' '}
          <a 
            href="https://priyanshutech.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-${currentTheme.accent} hover:text-${currentTheme.primary} font-bold`}
          >
            Priyanshu Chawda
          </a>
          {' '}• Frontend Developer & UI/UX Designer
        </div>
      </div>
    </div>
  );
};

export default Header;
