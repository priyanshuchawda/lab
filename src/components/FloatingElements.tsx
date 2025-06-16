
import React from 'react';
import { useTheme } from './ThemeEngine';

const FloatingElements = () => {
  const { currentTheme } = useTheme();

  return (
    <>
      <div className={`absolute top-20 right-20 w-2 h-2 bg-${currentTheme.primary} animate-ping`}></div>
      <div className={`absolute bottom-40 left-10 w-1 h-1 bg-${currentTheme.accent} animate-pulse`}></div>
    </>
  );
};

export default FloatingElements;
