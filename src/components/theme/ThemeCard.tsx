
import React from 'react';
import { useTheme, type Theme } from '../ThemeEngine';

interface ThemeCardProps {
  theme: Theme;
  isActive: boolean;
}

export const ThemeCard = ({ theme, isActive }: ThemeCardProps) => {
  const { setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme);
    console.log(`Theme changed to: ${theme.name} with ${theme.personality} personality`);
  };

  return (
    <button
      onClick={handleThemeChange}
      className={`w-full text-left p-3 border transition-all hover:scale-102 ${
        isActive
          ? 'border-purple-400 bg-purple-900/20'
          : 'border-gray-600 hover:border-purple-400/50'
      }`}
    >
      <div className="text-sm font-bold text-purple-300 mb-1">
        {theme.name}
      </div>
      <div className="text-xs text-gray-400 mb-2">
        {theme.personality} personality
      </div>
      <div className="flex gap-1">
        <div className={`w-4 h-4 bg-${theme.primary} border border-gray-600`}></div>
        <div className={`w-4 h-4 bg-${theme.secondary} border border-gray-600`}></div>
        <div className={`w-4 h-4 bg-${theme.accent} border border-gray-600`}></div>
      </div>
    </button>
  );
};
