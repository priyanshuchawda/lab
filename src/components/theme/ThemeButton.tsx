
import React from 'react';
import { Palette } from 'lucide-react';

interface ThemeButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ThemeButton = ({ isOpen, onClick }: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-black border-2 border-purple-400 hover:scale-105 transition-all duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
    >
      <Palette className="w-5 h-5" />
    </button>
  );
};
