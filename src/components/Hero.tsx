import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Activity, Server, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onTerminalClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTerminalClick }) => {
  const [clusterState, setClusterState] = useState<'nominal' | 'rebalancing' | 'canary'>('nominal');

  return (
    <section className="relative pt-12 pb-20 border-b border-slate-800/80 overflow-hidden">
      {/* Background radial gradient accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-16">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-4 tracking-wider uppercase">
              <span>Cloud Infrastructure</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Kubernetes</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>GitOps & SRE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] text-balance">
              Building Resilient Cloud Systems & Zero-Downtime Delivery Pipelines
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              DevOps and Platform Engineer specializing in high-scale Amazon EKS & GKE clusters, 
              modular Terraform Infrastructure as Code, GitOps progressive delivery (ArgoCD & Rollouts), 
              and FinOps cost governance. Turning complex distributed systems into dependable developer platforms.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#pipeline"
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-blue-500/20"
              >
                <span>Interactive CI/CD Run</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
              >
                Explore Architecture
              </a>

              <button
                onClick={onTerminalClick}
                className="px-4 py-3 text-sm font-mono text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <span>$ launch devops-cli</span>
              </button>
            </div>

            {/* Candidate summary proof metadata */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-6 border-t border-slate-800/80">
              <img
                src="/src/assets/images/avatar_devops_engineer_1791881582276.jpg"
                alt="Sourav Saha avatar"
                className="w-10 h-10 rounded-full border border-slate-700 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-slate-200 font-medium">{PORTFOLIO_DATA.profile.name} · {PORTFOLIO_DATA.profile.role}</p>
                <p className="text-slate-400">{PORTFOLIO_DATA.profile.availability} · {PORTFOLIO_DATA.profile.location}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Infrastructure Console & Topology Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="ml-2 text-xs font-mono text-slate-400">prod-us-east-1 :: EKS Control Plane</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>SYNCHRONIZED</span>
                  </span>
                </div>
              </div>

              {/* Server Background with Scrim */}
              <div className="relative h-44 overflow-hidden border-b border-slate-800">
                <img
                  src="/src/assets/images/hero_datacenter_infrastructure_1791881583142.jpg"
                  alt="Enterprise Datacenter Infrastructure"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-blue-400 block">Karpenter Autoscaler Pool</span>
                    <span className="text-sm font-semibold text-white">48 Nodes · 384 vCPU · 1.5TB RAM</span>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-300">
                    <span>Region: us-east-1 (Multi-AZ)</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Readouts */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">P99 Latency</span>
                    <span className="text-base font-bold font-mono text-white tabular-nums">28.4 ms</span>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">Error Budget</span>
                    <span className="text-base font-bold font-mono text-emerald-400 tabular-nums">99.98%</span>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">Spot Capacity</span>
                    <span className="text-base font-bold font-mono text-blue-400 tabular-nums">78.5%</span>
                  </div>
                </div>

                {/* Interactive State Toggle */}
                <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-400">Cluster Simulation State:</span>
                    <span className="font-mono text-blue-400">{clusterState}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-md">
                    <button
                      onClick={() => setClusterState('nominal')}
                      className={`py-1 text-xs font-mono rounded transition-colors ${
                        clusterState === 'nominal' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Nominal
                    </button>
                    <button
                      onClick={() => setClusterState('rebalancing')}
                      className={`py-1 text-xs font-mono rounded transition-colors ${
                        clusterState === 'rebalancing' ? 'bg-amber-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Autoscale
                    </button>
                    <button
                      onClick={() => setClusterState('canary')}
                      className={`py-1 text-xs font-mono rounded transition-colors ${
                        clusterState === 'canary' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Canary 10%
                    </button>
                  </div>
                </div>

                {/* Status log stream */}
                <div className="text-xs font-mono text-slate-400 bg-slate-950 p-2.5 rounded border border-slate-800/80 space-y-1">
                  {clusterState === 'nominal' && (
                    <>
                      <div className="text-emerald-400">✓ Cilium eBPF mesh: all 400+ endpoints healthy</div>
                      <div className="text-slate-400">❯ ArgoCD application 'payment-service' in-sync with main@4f9a12</div>
                    </>
                  )}
                  {clusterState === 'rebalancing' && (
                    <>
                      <div className="text-amber-400 flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Karpenter: launching 2x c6g.2xlarge spot instances (ETA 35s)</span>
                      </div>
                      <div className="text-slate-400">❯ PodDisruptionBudget: ensuring 9/10 minimum replicas available</div>
                    </>
                  )}
                  {clusterState === 'canary' && (
                    <>
                      <div className="text-blue-400">❯ Argo Rollout: shifting 10% traffic to canary replica set</div>
                      <div className="text-emerald-400">✓ Prometheus Analysis: HTTP 200 ratio 99.998% (pass)</div>
                    </>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width Quantitative Proof Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
