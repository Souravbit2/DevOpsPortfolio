import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';

interface TerminalPlaygroundProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const TerminalPlayground: React.FC<TerminalPlaygroundProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300">
          Sourav Saha — DevOps & Cloud Platform Engineer<br />
          Location: Remote / Global<br />
          Primary Focus: Kubernetes, Terraform IaC, GitOps, SRE Observability<br />
          Type <span className="text-blue-400 font-semibold">'help'</span> to see all available commands.
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd.toLowerCase()) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-blue-400 font-semibold">Available Commands:</div>
            <div><span className="text-emerald-400 w-44 inline-block">kubectl get pods</span> List production Kubernetes pods & statuses</div>
            <div><span className="text-emerald-400 w-44 inline-block">terraform plan</span> Run dry-run infrastructure execution diff</div>
            <div><span className="text-emerald-400 w-44 inline-block">argocd app list</span> Inspect GitOps application sync states</div>
            <div><span className="text-emerald-400 w-44 inline-block">cat certs.txt</span> View verified cloud certifications</div>
            <div><span className="text-emerald-400 w-44 inline-block">curl -I healthz</span> Test simulated API gateway health endpoint</div>
            <div><span className="text-emerald-400 w-44 inline-block">whoami</span> Display candidate bio and core focus</div>
            <div><span className="text-emerald-400 w-44 inline-block">contact</span> Print direct recruitment contact info</div>
            <div><span className="text-emerald-400 w-44 inline-block">clear</span> Clear terminal buffer</div>
          </div>
        );
        break;

      case 'kubectl get pods':
      case 'kubectl get pods -n production':
      case 'kubectl get pods -n prod':
        output = (
          <div className="font-mono text-xs space-y-1">
            <div className="text-slate-500">NAME                                    READY   STATUS    RESTARTS   AGE     NODE</div>
            <div className="text-emerald-400">auth-service-7d9f6b-8x2z                2/2     Running   0          18d     ip-10-0-24-112</div>
            <div className="text-emerald-400">payment-gateway-5c8e1a-4k9m             2/2     Running   0          42d     ip-10-0-24-118</div>
            <div className="text-emerald-400">order-processing-canary-9b1c2-7x        2/2     Running   0          14m     ip-10-0-28-42</div>
            <div className="text-emerald-400">order-processing-stable-3f8d1-1v        2/2     Running   0          19d     ip-10-0-28-99</div>
            <div className="text-emerald-400">cilium-operator-69b7f5-2h8p             1/1     Running   0          92d     ip-10-0-12-14</div>
            <div className="text-emerald-400">karpenter-autoscaler-54b9d-w2q1         1/1     Running   0          92d     ip-10-0-12-19</div>
            <div className="text-slate-400 mt-2">✓ All 6 deployments healthy across us-east-1a and us-east-1b.</div>
          </div>
        );
        break;

      case 'terraform plan':
        output = (
          <div className="font-mono text-xs space-y-1 text-slate-300">
            <div className="text-blue-400">Terraform v1.8.2 on linux_amd64</div>
            <div>Initializing plugins and modules from registry.terraform.io...</div>
            <div className="text-slate-400">Refreshing state: aws_eks_cluster.prod_cluster [id=prod-eks-cluster]</div>
            <div className="text-slate-400">Refreshing state: aws_rds_cluster.aurora [id=prod-aurora-cluster]</div>
            <div className="my-2 border-l-2 border-emerald-500 pl-2">
              <span className="text-emerald-400">+ resource "aws_karpenter_nodepool" "spot_arm64"</span><br />
              <span className="text-slate-400">  + capacity_type = "spot"</span><br />
              <span className="text-slate-400">  + instance_family = ["c6g", "m6g", "t4g"]</span><br />
              <span className="text-slate-400">  + consolidation = "WhenUnderutilized"</span>
            </div>
            <div className="text-emerald-400 font-semibold">
              Plan: 1 to add, 0 to change, 0 to destroy.
            </div>
            <div className="text-slate-400">Infracost estimated delta: -$142.00/month (-8.2%)</div>
          </div>
        );
        break;

      case 'argocd app list':
        output = (
          <div className="font-mono text-xs space-y-1">
            <div className="text-slate-500">NAME              CLUSTER                         STATUS    HEALTH   REPOSITORY</div>
            <div className="text-emerald-400">infra-base        https://eks.us-east-1.amazonaws Synced    Healthy  git@github.com:org/gitops.git</div>
            <div className="text-emerald-400">payment-service   https://eks.us-east-1.amazonaws Synced    Healthy  git@github.com:org/gitops.git</div>
            <div className="text-emerald-400">order-engine      https://eks.us-east-1.amazonaws Synced    Healthy  git@github.com:org/gitops.git</div>
            <div className="text-emerald-400">monitoring-stack  https://eks.us-east-1.amazonaws Synced    Healthy  git@github.com:org/gitops.git</div>
            <div className="text-slate-400 mt-2">✓ GitOps state in synchronization with main branch at HEAD.</div>
          </div>
        );
        break;

      case 'cat certs.txt':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-amber-400 font-semibold">[VERIFIED CERTIFICATIONS]</div>
            <div>
              <span className="text-white font-medium">1. AWS Certified Solutions Architect – Associate</span>
              <div className="text-slate-400">ID: AWS-SAA-849201 · Valid 2024-2027</div>
            </div>
            <div>
              <span className="text-white font-medium">2. CKA: Certified Kubernetes Administrator (CNCF)</span>
              <div className="text-slate-400">ID: CKA-992031-LINUX · Valid 2024-2027</div>
            </div>
            <div>
              <span className="text-white font-medium">3. HashiCorp Certified: Terraform Associate</span>
              <div className="text-slate-400">ID: HCTA-330192 · Valid 2024-2027</div>
            </div>
          </div>
        );
        break;

      case 'curl -i healthz':
      case 'curl -i https://api.souravsaha.dev/healthz':
      case 'curl https://api.prod/healthz':
        output = (
          <div className="font-mono text-xs space-y-1 text-slate-300">
            <div className="text-emerald-400">HTTP/2 200 OK</div>
            <div>date: {new Date().toUTCString()}</div>
            <div>server: envoy/1.29.1 (Cilium eBPF mesh)</div>
            <div>content-type: application/json</div>
            <div>x-envoy-upstream-service-time: 2ms</div>
            <div>strict-transport-security: max-age=31536000; includeSubDomains</div>
            <div className="text-emerald-300 mt-1">{`{"status":"UP","uptime":"99.98%","region":"us-east-1","db_pool":"healthy"}`}</div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-slate-300 text-xs leading-relaxed">
            Sourav Saha — DevOps & Cloud Platform Engineer<br />
            Experienced in building immutable cloud environments, GitOps workflows, and production Kubernetes clusters.<br />
            Open for full-time DevOps / SRE / Cloud Platform Engineering opportunities.
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1">
            <div><span className="text-slate-400">Email:</span> <span className="text-blue-400">souravsaha111000@gmail.com</span></div>
            <div><span className="text-slate-400">LinkedIn:</span> <span className="text-blue-400">linkedin.com/in/souravsaha</span></div>
            <div><span className="text-slate-400">GitHub:</span> <span className="text-blue-400">github.com/souravsaha</span></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-red-400 text-xs">
            command not found: {cmd}. Type <span className="text-white underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for list of valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const terminalBody = (
    <div className={`bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col ${
      isMaximized || isOpenModal ? 'h-[80vh]' : 'h-[460px]'
    }`}>
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1">
            <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>sourav@infra-controller: ~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isOpenModal && (
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          )}

          {isOpenModal && onCloseModal && (
            <button
              onClick={onCloseModal}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div 
        className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-3"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-slate-500 pb-2 border-b border-slate-900">
          DevOps Interactive Terminal Playground [v2.4.0]<br />
          Explore candidate skills via CLI. Type <span className="text-blue-400">'help'</span> or click suggestions below.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-blue-400">sourav@cloud:~$</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Command suggestion buttons */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
        <span className="text-slate-500 shrink-0">Quick run:</span>
        <button
          onClick={() => handleCommand('kubectl get pods')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded border border-slate-700 shrink-0"
        >
          kubectl get pods
        </button>
        <button
          onClick={() => handleCommand('terraform plan')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded border border-slate-700 shrink-0"
        >
          terraform plan
        </button>
        <button
          onClick={() => handleCommand('argocd app list')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded border border-slate-700 shrink-0"
        >
          argocd app list
        </button>
        <button
          onClick={() => handleCommand('cat certs.txt')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded border border-slate-700 shrink-0"
        >
          cat certs.txt
        </button>
        <button
          onClick={() => handleCommand('curl -I healthz')}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded border border-slate-700 shrink-0"
        >
          curl -I healthz
        </button>
      </div>

      {/* Command Input Prompt */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <span className="text-blue-400 font-mono text-xs shrink-0">sourav@cloud:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command here (e.g. 'kubectl get pods', 'terraform plan', 'help')..."
          className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
          autoFocus
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded transition-colors"
          title="Send Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onCloseModal}
      >
        <div 
          className="w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {terminalBody}
        </div>
      </div>
    );
  }

  return (
    <section id="terminal" className="py-20 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Interactive DevOps CLI Emulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Test Hands-On Infrastructure Commands
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Run realistic platform engineering commands to inspect Kubernetes pods, execute Terraform plans, 
            and query simulated microservices in real-time.
          </p>
        </div>

        {terminalBody}
      </div>
    </section>
  );
};
