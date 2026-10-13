import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Shield, RefreshCw, Cpu, Layers, Server, Network, Database, Activity, Code2, Copy, Check } from 'lucide-react';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(PORTFOLIO_DATA.architectureNodes[2].id);
  const [copied, setCopied] = useState(false);

  const selectedNode = PORTFOLIO_DATA.architectureNodes.find((n) => n.id === selectedNodeId) || PORTFOLIO_DATA.architectureNodes[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedNode.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Infrastructure Design & High Availability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Production Multi-AZ Kubernetes Architecture
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Interactive topology map of an enterprise cloud infrastructure deployed across AWS dual availability zones. 
            Select any tier to inspect network security rules, failover mechanics, and real Infrastructure as Code definitions.
          </p>
        </div>

        {/* Interactive Architecture Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Topology Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Topology Layers (Traffic Ingress ❯ Persistence)</span>
              <span>5 Tiers</span>
            </div>

            {PORTFOLIO_DATA.architectureNodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              
              let Icon = Server;
              if (node.id === 'edge') Icon = Network;
              if (node.id === 'mesh') Icon = Layers;
              if (node.id === 'compute') Icon = Cpu;
              if (node.id === 'data') Icon = Database;
              if (node.id === 'telemetry') Icon = Activity;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30'
                      : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-500">Tier 0{index + 1}</span>
                      <span className="text-[11px] font-mono text-blue-400">{node.category}</span>
                    </div>
                    <div className="text-sm font-semibold text-white truncate">
                      {node.label}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {node.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector for Selected Tier */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            
            {/* Inspector Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">
                  {selectedNode.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedNode.label}
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded">
                Status: Operational
              </span>
            </div>

            {/* Inspector Details */}
            <div className="p-6 space-y-6">
              
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1.5">
                  Overview & Responsibility
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              {/* Specs & Hardware Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Technical Specifications</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedNode.specs}
                  </p>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Security & Isolation</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedNode.security}
                  </p>
                </div>
              </div>

              {/* Failover & DR Strategy */}
              <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                  <span>High Availability & Failover Mechanics</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedNode.failover}
                </p>
              </div>

              {/* IaC Snippet */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Infrastructure as Code Manifest</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{selectedNode.codeSnippet}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
