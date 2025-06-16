
import React from 'react';
import { useTheme } from './ThemeEngine';
import LiquidToggle from './LiquidToggle';
import ElasticButton from './ElasticButton';
import HoverMorphCard from './HoverMorphCard';
import ProgressSlider from './ProgressSlider';
import NeumorphicButton from './NeumorphicButton';
import MagneticButton from './MagneticButton';
import ConfettiButton from './ConfettiButton';
import SmartTooltip from './SmartTooltip';

const ComponentGrid = () => {
  const { currentTheme } = useTheme();

  const recordInteraction = (type: string, element: string, event?: any) => {
    if ((window as any).recordInteraction) {
      (window as any).recordInteraction(type, element, event);
    }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-12 gap-4 auto-rows-min">
        
        <div className={`col-span-4 lg:col-span-3 row-span-1 bg-gradient-to-br from-${currentTheme.secondary}/80 to-${currentTheme.primary}/60 backdrop-blur-sm border border-${currentTheme.secondary}/30 p-6 relative group hover:border-${currentTheme.primary}/60 transition-all ${currentTheme.animationSpeed}`}>
          <div className={`absolute top-2 right-2 w-1 h-1 bg-${currentTheme.primary} rounded-full animate-pulse`}></div>
          <h3 className={`text-xs uppercase tracking-wide text-${currentTheme.secondary} mb-1 font-bold`}>LIQUID_MORPH</h3>
          <p className={`text-[10px] text-${currentTheme.primary}/70 mb-4 leading-tight`}>Gooey state transitions</p>
          <div className="flex justify-center" onClick={(e) => recordInteraction('click', 'liquid-toggle', e)}>
            <LiquidToggle />
          </div>
        </div>

        {/* Progress Slider - Wide rectangle */}
        <div className="col-span-8 lg:col-span-6 row-span-1 bg-gradient-to-r from-yellow-900/80 to-orange-900/60 backdrop-blur-sm border border-yellow-400/30 p-6 relative group hover:border-orange-400/60 transition-all duration-300">
          <div className="absolute top-2 left-2 text-[8px] text-orange-300 font-bold">[ MOOD_ENGINE ]</div>
          <h3 className="text-xs uppercase tracking-wide text-yellow-300 mb-1 font-bold">EMOTIONAL_SLIDER</h3>
          <p className="text-[10px] text-orange-200/70 mb-4 leading-tight">Drag to alter digital consciousness</p>
          <div className="flex justify-center">
            <ProgressSlider />
          </div>
        </div>

        {/* Confetti - Small square, offset */}
        <div className="col-span-4 lg:col-span-3 row-span-1 bg-gradient-to-bl from-pink-900/80 to-purple-900/60 backdrop-blur-sm border border-pink-400/30 p-6 relative group hover:border-purple-400/60 transition-all duration-300 lg:col-start-10">
          <div className="absolute bottom-2 left-2 w-0.5 h-4 bg-gradient-to-t from-pink-400 to-transparent"></div>
          <h3 className="text-xs uppercase tracking-wide text-pink-300 mb-1 font-bold">JOY_BURST</h3>
          <p className="text-[10px] text-purple-200/70 mb-4 leading-tight">Pure digital euphoria</p>
          <div className="flex justify-center">
            <ConfettiButton />
          </div>
        </div>

        {/* Hover Morph - Tall rectangle */}
        <div className="col-span-6 lg:col-span-4 row-span-2 bg-gradient-to-b from-blue-900/80 to-teal-900/60 backdrop-blur-sm border border-blue-400/30 p-6 relative group hover:border-teal-400/60 transition-all duration-300">
          <div className="absolute top-2 right-2 text-[8px] text-teal-300 font-bold">[ MORPH_CORE ]</div>
          <h3 className="text-xs uppercase tracking-wide text-blue-300 mb-1 font-bold">HOVER_MORPH</h3>
          <p className="text-[10px] text-teal-200/70 mb-6 leading-tight">Shape-shifting on demand. Witness the metamorphosis.</p>
          <div className="flex justify-center">
            <HoverMorphCard />
          </div>
        </div>

        {/* Elastic Button */}
        <div className="col-span-6 lg:col-span-4 row-span-1 bg-gradient-to-tr from-red-900/80 to-orange-900/60 backdrop-blur-sm border border-red-400/30 p-6 relative group hover:border-orange-400/60 transition-all duration-300">
          <div className="absolute top-2 left-2 w-2 h-2 border border-orange-400 rotate-45"></div>
          <h3 className="text-xs uppercase tracking-wide text-red-300 mb-1 font-bold">ELASTIC_FORCE</h3>
          <p className="text-[10px] text-orange-200/70 mb-4 leading-tight">Physics-defying compression</p>
          <div className="flex justify-center">
            <ElasticButton />
          </div>
        </div>

        {/* Smart Tooltip */}
        <div className="col-span-6 lg:col-span-4 row-span-1 bg-gradient-to-bl from-indigo-900/80 to-violet-900/60 backdrop-blur-sm border border-indigo-400/30 p-6 relative group hover:border-violet-400/60 transition-all duration-300">
          <div className="absolute bottom-2 right-2 text-[8px] text-violet-300 font-bold">[ AI_TIP ]</div>
          <h3 className="text-xs uppercase tracking-wide text-indigo-300 mb-1 font-bold">SMART_TRACKER</h3>
          <p className="text-[10px] text-violet-200/70 mb-4 leading-tight">Intelligent cursor stalking</p>
          <div className="flex justify-center">
            <SmartTooltip />
          </div>
        </div>

        {/* Neumorphic Button */}
        <div className="col-span-4 lg:col-span-3 row-span-1 bg-gradient-to-r from-gray-900/80 to-zinc-900/60 backdrop-blur-sm border border-gray-400/30 p-6 relative group hover:border-zinc-400/60 transition-all duration-300">
          <div className="absolute top-2 left-2 w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent"></div>
          <h3 className="text-xs uppercase tracking-wide text-gray-300 mb-1 font-bold">NEURO_MORPH</h3>
          <p className="text-[10px] text-zinc-200/70 mb-4 leading-tight">Soft brain interface</p>
          <div className="flex justify-center">
            <NeumorphicButton />
          </div>
        </div>

        {/* Magnetic Button */}
        <div className="col-span-8 lg:col-span-5 row-span-1 bg-gradient-to-l from-emerald-900/80 to-green-900/60 backdrop-blur-sm border border-emerald-400/30 p-6 relative group hover:border-green-400/60 transition-all duration-300">
          <div className="absolute top-2 right-2 text-[8px] text-green-300 font-bold">[ MAGNETIC_FIELD ]</div>
          <h3 className="text-xs uppercase tracking-wide text-emerald-300 mb-1 font-bold">CURSOR_MAGNET</h3>
          <p className="text-[10px] text-green-200/70 mb-4 leading-tight">Invisible force field attraction algorithm</p>
          <div className="flex justify-center">
            <MagneticButton />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentGrid;
