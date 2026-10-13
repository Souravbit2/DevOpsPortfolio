import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Technical Proficiency & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Cloud, Kubernetes & SRE Toolchain
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Hands-on expertise across modern DevOps disciplines. Engineered for reliability, 
            immutable infrastructure patterns, and automated day-2 operational management.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="mb-16">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Industry Credentials & Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-400 font-semibold">{cert.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Cred: {cert.id}</span>
                  <span className="text-blue-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-mono text-blue-400 font-normal">
                  {group.skills.length} core tools
                </span>
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="font-mono text-slate-400">{skill.level}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
