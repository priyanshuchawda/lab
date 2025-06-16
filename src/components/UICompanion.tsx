
import React, { useState, useEffect, useRef } from 'react';

interface CompanionState {
  mood: 'happy' | 'bored' | 'excited' | 'confused' | 'sleepy';
  message: string;
  position: { x: number; y: number };
}

const UICompanion = () => {
  const [state, setState] = useState<CompanionState>({
    mood: 'happy',
    message: 'Hello! Ready to break some UI?',
    position: { x: 50, y: 50 }
  });
  const [isVisible, setIsVisible] = useState(true);
  const [idleTime, setIdleTime] = useState(0);
  const lastInteractionRef = useRef(Date.now());

  const messages = {
    happy: [
      'Nice moves! 🔥',
      'You\'re getting the hang of this!',
      'Ooh, that was satisfying!',
      'Pure digital violence! ⚡'
    ],
    bored: [
      'Try the slider... it has feelings',
      'Poke something, anything!',
      'I dare you to toggle that switch',
      'The buttons are feeling neglected...'
    ],
    excited: [
      'YES! MORE CHAOS! 🌟',
      'MAXIMUM OVERDRIVE!',
      'You\'ve unlocked the fury!',
      'THE PIXELS ARE SCREAMING!'
    ],
    confused: [
      'That was... unexpected',
      'Error 404: Expected behavior not found',
      'Are you trying to break me?',
      'Reality.exe has stopped working'
    ],
    sleepy: [
      'Don\'t leave me... 😴',
      'Wake me up with some clicks',
      'Entering sleep mode...',
      'ZzZ... digital dreams...'
    ]
  };

  const getRandomMessage = (mood: CompanionState['mood']) => {
    const moodMessages = messages[mood];
    return moodMessages[Math.floor(Math.random() * moodMessages.length)];
  };

  // Listen for interactions
  useEffect(() => {
    const handleInteraction = () => {
      lastInteractionRef.current = Date.now();
      setIdleTime(0);
      
      const rand = Math.random();
      let newMood: CompanionState['mood'] = 'happy';
      
      if (rand < 0.1) newMood = 'confused';
      else if (rand < 0.3) newMood = 'excited';
      else newMood = 'happy';

      setState(prev => ({
        ...prev,
        mood: newMood,
        message: getRandomMessage(newMood)
      }));

      // Float to new position occasionally
      if (Math.random() < 0.3) {
        setState(prev => ({
          ...prev,
          position: {
            x: 20 + Math.random() * 60,
            y: 20 + Math.random() * 60
          }
        }));
      }
    };

    // Listen for global interactions
    const events = ['click', 'mousedown', 'mousemove', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  // Handle idle state
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionRef.current;
      const newIdleTime = Math.floor(timeSinceLastInteraction / 1000);
      setIdleTime(newIdleTime);

      if (newIdleTime > 10 && state.mood !== 'sleepy') {
        setState(prev => ({
          ...prev,
          mood: 'sleepy',
          message: getRandomMessage('sleepy')
        }));
      } else if (newIdleTime > 5 && newIdleTime <= 10 && state.mood !== 'bored') {
        setState(prev => ({
          ...prev,
          mood: 'bored',
          message: getRandomMessage('bored')
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.mood]);

  const getCompanionEmoji = () => {
    switch (state.mood) {
      case 'happy': return '😊';
      case 'excited': return '🤩';
      case 'bored': return '😐';
      case 'confused': return '🤔';
      case 'sleepy': return '😴';
      default: return '🤖';
    }
  };

  const getGlowColor = () => {
    switch (state.mood) {
      case 'happy': return 'shadow-lime-400/50';
      case 'excited': return 'shadow-yellow-400/50';
      case 'bored': return 'shadow-gray-400/50';
      case 'confused': return 'shadow-purple-400/50';
      case 'sleepy': return 'shadow-blue-400/50';
      default: return 'shadow-cyan-400/50';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-40 pointer-events-none transition-all duration-1000 ease-out ${
        state.mood === 'sleepy' ? 'opacity-50' : 'opacity-100'
      }`}
      style={{
        left: `${state.position.x}%`,
        top: `${state.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Main companion */}
      <div className={`relative bg-black border-2 border-cyan-400 p-3 shadow-lg ${getGlowColor()}`}>
        <div className="flex items-center gap-2">
          <div className={`text-2xl ${state.mood === 'excited' ? 'animate-bounce' : ''}`}>
            {getCompanionEmoji()}
          </div>
          <div className="text-xs text-cyan-300 font-mono uppercase tracking-wide max-w-[120px]">
            {state.message}
          </div>
        </div>

        {/* Mood indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-gray-600 bg-black">
          <div className={`w-full h-full rounded-full ${
            state.mood === 'happy' ? 'bg-lime-400' :
            state.mood === 'excited' ? 'bg-yellow-400 animate-pulse' :
            state.mood === 'bored' ? 'bg-gray-400' :
            state.mood === 'confused' ? 'bg-purple-400 animate-ping' :
            'bg-blue-400'
          }`}></div>
        </div>

        {/* Digital noise effect when glitching */}
        {state.mood === 'confused' && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-red-400 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dismiss button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-black text-xs font-bold flex items-center justify-center pointer-events-auto hover:bg-red-400 transition-colors"
      >
        ×
      </button>

      {/* Floating particles for excited mood */}
      {state.mood === 'excited' && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UICompanion;
