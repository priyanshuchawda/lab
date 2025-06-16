
import React, { useState, useContext, createContext, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { ThemeSelector } from './theme/ThemeSelector';
import { ThemeButton } from './theme/ThemeButton';
import { themes } from './theme/themes';

interface Theme {
  name: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  fontFamily: string;
  animationSpeed: string;
  personality: string;
}

const ThemeContext = createContext<{
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  currentTheme: themes[0],
  setTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    
    // Apply theme to document root
    const root = document.documentElement;
    root.className = `${theme.background} ${theme.fontFamily}`;
    
    // Set CSS custom properties for dynamic theming
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-border', theme.border);
    root.style.setProperty('--theme-animation-speed', theme.animationSpeed);
    
    // Apply theme-specific body styles
    document.body.className = `${theme.background} text-${theme.text} ${theme.fontFamily}`;
  };

  useEffect(() => {
    // Apply default theme on mount
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeEngine = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ThemeButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <ThemeSelector onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ThemeEngine;
export type { Theme };
