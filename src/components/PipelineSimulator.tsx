import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, PipelineStep } from '../data/portfolioData';
import { Play, RotateCcw, AlertTriangle, CheckCircle, Clock, ShieldCheck, Terminal, Cpu, Bug } from 'lucide-react';

export const PipelineSimulator: React.FC = () => {
  const [steps, setSteps] = useState<PipelineStep[]>(PORTFOLIO_DATA.initialPipelineSteps);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [injectFault, setInjectFault] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [faultOccurred, setFaultOccurred] = useState(false);

  const resetPipeline = () => {
    setIsRunning(false);
    setCompleted(false);
    setFaultOccurred(false);
    setActiveStepIndex(0);
    setSteps(
      PORTFOLIO_DATA.initialPipelineSteps.map((step) => ({
        ...step,
        status: 'pending',
      }))
    );
  };

  const startPipeline = () => {
    resetPipeline();
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    let currentStep = 0;
    const interval = setInterval(() => {
      setSteps((prev) => {
        const next = [...prev];
        if (currentStep < next.length) {
          // If injectFault is true and we reach the canary stage (index 4)
          if (injectFault && currentStep === 4) {
            next[currentStep] = {
              ...next[currentStep],
              status: 'failed',
              duration: '18s',
              logs: [
                '[INFO] Applying Argo Rollout specification to production namespace...',
                '[CANARY] Scaling canary replica set to 2 pods (10% traffic weight)',
                '[INGRESS] AWS ALB weighted routing updated: 90% stable, 10% canary',
                '[WARN] Querying Prometheus PrometheusRule analysis...',
                '[ERROR] Canary P99 latency: 142ms (SLO threshold: < 65ms) [BREACH]',
                '[ERROR] HTTP 5xx Error Rate spiked to 0.42% (SLO limit 0.05%)',
                '[ROLLBACK] Automated rollouts abort triggered by Prometheus AnalysisTemplate!',
                '[ROLLBACK] Shifting 100% traffic back to order-service-stable (completed in 4.2s)',
                '[ALERT] PagerDuty alert fired: incident #9041 created with canary rollback metrics',
              ],
            };
            setFaultOccurred(true);
            setIsRunning(false);
            clearInterval(interval);
            return next;
          }

          next[currentStep] = {
            ...next[currentStep],
            status: 'running',
          };
          setActiveStepIndex(currentStep);

          // Mark previous as success
          if (currentStep > 0) {
            next[currentStep - 1] = {
              ...next[currentStep - 1],
              status: 'success',
            };
          }

          currentStep++;
        } else {
          // Finish last step
          next[next.length - 1] = {
            ...next[next.length - 1],
            status: 'success',
          };
          setIsRunning(false);
          setCompleted(true);
          clearInterval(interval);
        }
        return next;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [isRunning, injectFault]);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="pipeline" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Continuous Integration & Delivery Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Interactive CI/CD & Automated Canary Rollout Engine
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Hiring managers can test this realistic GitHub Actions & Argo Rollouts pipeline simulation. 
            Test regular green promotions or toggle the <span className="text-amber-400 font-semibold">Chaos Fault Injection</span> to see how 
            Prometheus analysis automatically catches latency breaches and triggers zero-downtime rollbacks.
          </p>
        </div>

        {/* Pipeline Control Deck */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl mb-8">
          
          {/* Top Bar of Deck */}
          <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Workflow:</span>
              <span className="text-xs font-mono text-white bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                .github/workflows/deploy-prod.yml
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                branch: <code className="text-slate-300">main</code> · commit: <code className="text-slate-300">f892a01</code>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setInjectFault(!injectFault)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                  injectFault
                    ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
                }`}
                title="Toggle simulated production latency spike to test automated canary rollback"
              >
                <Bug className="w-3.5 h-3.5" />
                <span>Inject Fault: {injectFault ? 'ON (Chaos)' : 'OFF'}</span>
              </button>

              <button
                onClick={startPipeline}
                disabled={isRunning}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  isRunning
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/20'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isRunning ? 'Running Pipeline...' : 'Run Pipeline'}</span>
              </button>

              <button
                onClick={resetPipeline}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md border border-slate-700 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pipeline Stage Flow Grid */}
          <div className="p-5 border-b border-slate-800 bg-slate-900/60">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                let statusBadge = (
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Pending
                  </span>
                );

                if (step.status === 'running') {
                  statusBadge = (
                    <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1">
                      <Cpu className="w-3 h-3 animate-spin" /> In Progress
                    </span>
                  );
                } else if (step.status === 'success') {
                  statusBadge = (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Passed ({step.duration})
                    </span>
                  );
                } else if (step.status === 'failed') {
                  statusBadge = (
                    <span className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Rolled Back
                    </span>
                  );
                }

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-slate-800 border-blue-500/80 shadow-md ring-1 ring-blue-500/30'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Stage 0{idx + 1} · {step.category}
                    </div>
                    <div className="text-xs font-semibold text-slate-100 truncate mb-2">
                      {step.name}
                    </div>
                    <div>{statusBadge}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Terminal Log Inspector for Selected Step */}
          <div className="p-5 bg-slate-950">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">{activeStep.name}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">{activeStep.category}</span>
              </div>
              <div className="text-slate-500">
                Command: <code className="text-blue-300">{activeStep.command}</code>
              </div>
            </div>

            {/* Terminal Window Box */}
            <div className="bg-slate-900/90 rounded-lg p-4 font-mono text-xs border border-slate-800 space-y-1.5 overflow-x-auto">
              <div className="text-slate-500 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>$ {activeStep.command}</span>
                <span>exit code: {activeStep.status === 'failed' ? '1 (SIGABRT)' : '0'}</span>
              </div>
              {activeStep.logs.map((log, lIdx) => {
                let colorClass = 'text-slate-300';
                if (log.startsWith('[INFO]')) colorClass = 'text-blue-400';
                if (log.startsWith('[PASS]') || log.startsWith('[SUCCESS]')) colorClass = 'text-emerald-400';
                if (log.startsWith('[WARN]') || log.startsWith('[FINOPS]')) colorClass = 'text-amber-300';
                if (log.startsWith('[ERROR]') || log.startsWith('[ROLLBACK]')) colorClass = 'text-red-400';
                if (log.startsWith('[CANARY]')) colorClass = 'text-indigo-300';

                return (
                  <div key={lIdx} className={`${colorClass} leading-relaxed`}>
                    {log}
                  </div>
                );
              })}
            </div>

            {/* Key takeaway indicator for hiring managers */}
            <div className="mt-4 p-3 bg-slate-900/40 border border-slate-800/80 rounded-lg flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200">DevOps Architectural Value: </span>
                {activeStepIndex === 0 && 'Validates Terraform HCL and Kubernetes manifests before any infrastructure changes reach the cloud.'}
                {activeStepIndex === 1 && 'Gitleaks stops leaked tokens; Trivy halts container vulnerabilities before binary compilation.'}
                {activeStepIndex === 2 && 'Buildx uses remote layer caching on AWS ECR; Cosign applies cryptographic signatures via keyless GitHub OIDC.'}
                {activeStepIndex === 3 && 'Infracost calculates month-over-month cloud cost differential right in the PR before applying changes.'}
                {activeStepIndex === 4 && 'Argo Rollouts routes 10% live traffic; Prometheus AnalysisTemplate continuously queries latency and 5xx error budgets.'}
                {activeStepIndex === 5 && 'Progressive 100% traffic shift with graceful 30-second pod draining ensures zero dropped client requests.'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
