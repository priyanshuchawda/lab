
import React from 'react';
import { useTheme } from '../ThemeEngine';
import { themes } from './themes';
import { ThemeCard } from './ThemeCard';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector = ({ onClose }: ThemeSelectorProps) => {
  const { currentTheme } = useTheme();

  return (
    <div className="absolute bottom-16 right-0 bg-black border-2 border-purple-400 p-4 min-w-[280px] max-h-[400px] overflow-y-auto">
      <div className="text-xs uppercase tracking-wider text-purple-300 mb-3 font-bold">
        [THEME_ENGINE_V2.1]
      </div>
      
      <div className="space-y-2">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.name}
            theme={theme}
            isActive={currentTheme.name === theme.name}
          />
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-600">
        <div className="text-[10px] text-gray-400 uppercase tracking-wide">
          Current: {currentTheme.name}
        </div>
      </div>
    </div>
  );
};
