import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onTerminalClick: () => void;
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTerminalClick, onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Candidate Branding & Role */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-white tracking-tight text-sm flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-500 font-mono">❯</span>
            <span>Sourav Saha</span>
            <span className="text-slate-600">·</span>
            <span className="font-normal text-slate-400">DevOps & Cloud Platform Engineer</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Designed with high-availability principles, immutable Infrastructure as Code, and automated GitOps workflows.
          </p>
        </div>

        {/* Center: Quick navigation & actions */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-slate-400">
          <button
            onClick={onTerminalClick}
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Terminal className="w-3 h-3" />
            <span>devops-cli</span>
          </button>
          <button
            onClick={onResumeClick}
            className="hover:text-blue-400 transition-colors"
          >
            Resume
          </button>
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3 h-3" />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3 h-3" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right: Scroll to top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Sourav Saha
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
