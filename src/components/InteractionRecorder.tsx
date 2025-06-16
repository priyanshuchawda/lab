
import React, { useState, useRef, useCallback } from 'react';
import { Play, Square, RotateCcw, Download } from 'lucide-react';

interface InteractionEvent {
  id: string;
  type: 'hover' | 'click' | 'toggle' | 'drag';
  element: string;
  timestamp: number;
  position?: { x: number; y: number };
  value?: any;
}

const InteractionRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const [events, setEvents] = useState<InteractionEvent[]>([]);
  const startTimeRef = useRef<number>(0);
  const replayTimeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const startRecording = useCallback(() => {
    setIsRecording(true);
    setEvents([]);
    startTimeRef.current = Date.now();
    
    // Add global event listeners
    const recordEvent = (type: string, element: string, e?: any) => {
      const event: InteractionEvent = {
        id: Math.random().toString(36),
        type: type as any,
        element,
        timestamp: Date.now() - startTimeRef.current,
        position: e ? { x: e.clientX, y: e.clientY } : undefined,
      };
      setEvents(prev => [...prev, event]);
    };

    // Store in window for components to access
    (window as any).recordInteraction = recordEvent;
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    delete (window as any).recordInteraction;
  }, []);

  const replayEvents = useCallback(() => {
    if (events.length === 0) return;
    
    setIsReplaying(true);
    replayTimeoutRefs.current = [];

    events.forEach((event) => {
      const timeout = setTimeout(() => {
        // Create ghost cursor effect
        const ghost = document.createElement('div');
        ghost.className = 'fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] animate-ping';
        ghost.style.left = `${event.position?.x || 0}px`;
        ghost.style.top = `${event.position?.y || 0}px`;
        ghost.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(ghost);

        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'fixed w-8 h-8 border-2 border-lime-400 rounded-full pointer-events-none z-[9998] animate-ping';
        ripple.style.left = `${event.position?.x || 0}px`;
        ripple.style.top = `${event.position?.y || 0}px`;
        ripple.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(ripple);

        setTimeout(() => {
          document.body.removeChild(ghost);
          document.body.removeChild(ripple);
        }, 1000);
      }, event.timestamp);
      
      replayTimeoutRefs.current.push(timeout);
    });

    // End replay
    const maxTime = Math.max(...events.map(e => e.timestamp));
    const endTimeout = setTimeout(() => {
      setIsReplaying(false);
    }, maxTime + 1000);
    replayTimeoutRefs.current.push(endTimeout);
  }, [events]);

  const clearRecording = useCallback(() => {
    setEvents([]);
    replayTimeoutRefs.current.forEach(clearTimeout);
    replayTimeoutRefs.current = [];
    setIsReplaying(false);
  }, []);

  const exportRecording = useCallback(() => {
    const dataStr = JSON.stringify(events, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `interaction-recording-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [events]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black border-2 border-cyan-400 p-4 min-w-[200px]">
      <div className="text-xs uppercase tracking-wider text-cyan-300 mb-3 font-bold">
        [INTERACTION_REC]
      </div>
      
      <div className="space-y-3">
        <div className="flex gap-2">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-3 py-2 text-xs font-bold uppercase tracking-wide border transition-all ${
              isRecording 
                ? 'bg-red-500 text-black border-red-400 animate-pulse' 
                : 'bg-lime-400 text-black border-lime-400 hover:bg-lime-300'
            }`}
            disabled={isReplaying}
          >
            {isRecording ? (
              <>
                <Square className="w-3 h-3 inline mr-1" />
                REC
              </>
            ) : (
              <>
                <Play className="w-3 h-3 inline mr-1" />
                REC
              </>
            )}
          </button>
          
          <button
            onClick={replayEvents}
            className="px-3 py-2 bg-cyan-400 text-black border border-cyan-400 text-xs font-bold uppercase tracking-wide hover:bg-cyan-300 transition-all disabled:opacity-50"
            disabled={events.length === 0 || isReplaying || isRecording}
          >
            <Play className="w-3 h-3 inline mr-1" />
            PLAY
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={clearRecording}
            className="px-3 py-2 bg-yellow-400 text-black border border-yellow-400 text-xs font-bold uppercase tracking-wide hover:bg-yellow-300 transition-all"
            disabled={isReplaying}
          >
            <RotateCcw className="w-3 h-3 inline mr-1" />
            CLR
          </button>
          
          <button
            onClick={exportRecording}
            className="px-3 py-2 bg-purple-400 text-black border border-purple-400 text-xs font-bold uppercase tracking-wide hover:bg-purple-300 transition-all disabled:opacity-50"
            disabled={events.length === 0}
          >
            <Download className="w-3 h-3 inline mr-1" />
            DL
          </button>
        </div>

        <div className="border-t border-gray-600 pt-2">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide">
            Events: {events.length}
          </div>
          {isRecording && (
            <div className="text-[10px] text-red-400 animate-pulse">
              ● RECORDING...
            </div>
          )}
          {isReplaying && (
            <div className="text-[10px] text-cyan-400 animate-pulse">
              ▶ REPLAYING...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractionRecorder;
