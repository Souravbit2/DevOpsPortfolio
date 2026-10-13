import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ExternalLink, Code2, ArrowRight, X, Check, Copy, Sparkles, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = ['All', 'Kubernetes', 'CI/CD', 'FinOps', 'Security'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              Production Case Studies & Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Featured DevOps & Platform Projects
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Real-world cloud migrations, progressive delivery engines, and security hardening projects with proven ROI, 
              zero-downtime execution, and production metrics.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group shadow-lg"
            >
              {/* Media Thumbnail with Scrim */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Clean unboxed metadata overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.timeline}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 px-4 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                      <span className="text-base font-bold font-mono text-white tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Overview preview */}
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Technologies List - Clean unboxed text with bullets */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300">{tech}</span>
                      {tIdx < project.technologies.length - 1 && <span className="text-slate-600">/</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Modal Trigger Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    File: <code className="text-slate-400">{project.iacSnippet.filename}</code>
                  </span>
                  
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Case Study & IaC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-slate-950 border-b border-slate-800 sticky top-0 z-10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>{activeModalProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalProject.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg border border-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Full Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800">
                {activeModalProject.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Problem & Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  The Problem & Constraints
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-lg border border-slate-800/80">
                  {activeModalProject.challenge}
                </p>
              </div>

              {/* Solution & Implementation */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  DevOps Architectural Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-lg border border-slate-800/80">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Architecture Pillars */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Implementation Highlights
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeModalProject.architectureDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono">❯</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IaC Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Configuration: {activeModalProject.iacSnippet.filename}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(activeModalProject.iacSnippet.code)}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{activeModalProject.iacSnippet.code}</code>
                </pre>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 rounded border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
