
import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-lime-400/30 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Creator Info */}
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">
              [CREATOR_TERMINAL]
            </div>
            <h3 className="text-lg font-black text-lime-400 mb-2">PRIYANSHU CHAWDA</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Frontend Developer & UI/UX Designer crafting experimental digital experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-yellow-400">
              <Code className="w-3 h-3" />
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>and lots of</span>
              <Zap className="w-3 h-3" />
            </div>
          </div>

          {/* Project Info */}
          <div>
            <div className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2">
              [PROJECT_STATS]
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Components:</span>
                <span className="text-cyan-400 font-bold">8+ Interactive</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Themes:</span>
                <span className="text-purple-400 font-bold">5 Aesthetic Modes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Features:</span>
                <span className="text-yellow-400 font-bold">Recording + AI Companion</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-lime-400 font-bold animate-pulse">SENTIENT_v3.0</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="text-xs uppercase tracking-wider text-orange-400 font-bold mb-2">
              [TECH_STACK]
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-900/50 border border-gray-700 p-2">
                <div className="text-lime-400 font-bold">React 18</div>
                <div className="text-xs text-gray-400">Components</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 p-2">
                <div className="text-cyan-400 font-bold">TypeScript</div>
                <div className="text-xs text-gray-400">Type Safety</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 p-2">
                <div className="text-yellow-400 font-bold">Tailwind</div>
                <div className="text-xs text-gray-400">Styling</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 p-2">
                <div className="text-purple-400 font-bold">Vite</div>
                <div className="text-xs text-gray-400">Build Tool</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2024 Priyanshu Chawda. All rights reserved. | Experimental UI Laboratory
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="text-gray-400">Share this experience:</span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Micro-Interaction Playground',
                    text: 'Check out this experimental UI playground!',
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 font-bold uppercase tracking-wide hover:scale-105 transition-all duration-200"
            >
              SHARE
            </button>
          </div>
        </div>

        {/* ASCII Art Signature */}
        <div className="mt-8 text-center">
          <div className="text-xs text-gray-600 font-mono leading-tight">
            <div>╔═══════════════════════════════════════╗</div>
            <div>║     MICRO-INTERACTION PLAYGROUND     ║</div>
            <div>║         priyanshutech.xyz             ║</div>
            <div>╚═══════════════════════════════════════╝</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
