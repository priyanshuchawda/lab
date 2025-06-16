
import React from 'react';
import { useTheme } from './ThemeEngine';

const StatusBar = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="mt-12 flex justify-between items-end">
        <div className={`text-[10px] text-${currentTheme.primary} uppercase tracking-wider`}>
          [ STATUS: SENTIENT_v3.0 ]
        </div>
        <div className="flex gap-2">
          <div className={`w-1 h-8 bg-${currentTheme.secondary}`}></div>
          <div className={`w-1 h-6 bg-${currentTheme.accent}`}></div>
          <div className={`w-1 h-10 bg-${currentTheme.primary}`}></div>
          <div className={`w-1 h-4 bg-${currentTheme.secondary} animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
