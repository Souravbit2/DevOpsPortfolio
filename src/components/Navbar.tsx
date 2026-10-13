import React, { useState } from 'react';
import { Menu, X, FileText, Terminal } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
  onTerminalClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick, onTerminalClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-blue-500 font-mono">❯</span>
          <span>Sourav Saha</span>
        </a>

        {/* Zone 2: 4-5 clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#architecture" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Architecture
          </a>
          <a href="#pipeline" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            CI/CD Pipeline
          </a>
          <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            IaC & Toolchain
          </a>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action (plus quick terminal launch) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onTerminalClick}
            className="px-3 py-1.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            title="Open Interactive DevOps CLI"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>devops-cli</span>
          </button>
          
          <button
            onClick={onResumeClick}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 active:bg-blue-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm shadow-blue-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onTerminalClick}
            className="p-1.5 text-slate-300 bg-slate-900 border border-slate-700 rounded-md"
            aria-label="Open CLI"
          >
            <Terminal className="w-4 h-4 text-blue-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Architecture
          </a>
          <a
            href="#pipeline"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            CI/CD Pipeline
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            IaC & Toolchain
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full py-2 text-center text-xs font-medium text-white bg-blue-600 rounded-md"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
