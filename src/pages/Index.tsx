
import React, { useState, useEffect } from 'react';
import GridBackground from '../components/GridBackground';
import InteractionRecorder from '../components/InteractionRecorder';
import ThemeEngine, { ThemeProvider, useTheme } from '../components/ThemeEngine';
import UICompanion from '../components/UICompanion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ComponentGrid from '../components/ComponentGrid';
import StatusBar from '../components/StatusBar';
import FloatingElements from '../components/FloatingElements';

const IndexContent = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if ((window as any).recordInteraction) {
        (window as any).recordInteraction('hover', 'global', e);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme-aware styling
  const getThemeClasses = () => {
    const base = `min-h-screen overflow-hidden relative transition-all duration-1000`;
    return `${base} ${currentTheme.background} text-${currentTheme.text} ${currentTheme.fontFamily}`;
  };

  return (
    <div className={getThemeClasses()}>
      <GridBackground mousePos={mousePos} />
      
      <Navigation />
      <InteractionRecorder />
      <ThemeEngine />
      <UICompanion />
      
      <FloatingElements />
      
      <Header />
      <ComponentGrid />
      <StatusBar />

      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
