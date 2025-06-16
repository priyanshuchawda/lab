
import React from 'react';
import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-4 z-50 flex items-center gap-4">
      {/* Home Button */}
      <a
        href="https://priyanshutech.xyz"
        className="group bg-gradient-to-r from-lime-400 to-cyan-400 text-black px-4 py-2 font-bold uppercase tracking-wider text-xs border-2 border-yellow-400 hover:scale-105 transition-all duration-200 relative overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="relative z-10 flex items-center gap-2">
          HOME
          <ExternalLink className="w-3 h-3" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>

      {/* Social Links */}
      <div className="flex gap-2">
        <a
          href="https://github.com/priyanshuchawda"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-900 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 hover:scale-110"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        
        <a
          href="https://linkedin.com/in/priyanshuchawda"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-900 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200 hover:scale-110"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        
        <a
          href="https://twitter.com/priyanshutech4"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-900 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
          title="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
