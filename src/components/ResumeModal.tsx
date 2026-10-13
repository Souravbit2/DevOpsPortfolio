import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Check, Mail, MapPin, Award, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
      setDownloadSuccess(false);
    }, 500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">ATS-Optimized DevOps Resume</span>
            <span className="text-xs font-mono text-emerald-400">· Ready for Export</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md border border-slate-700 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
              Sourav Saha
            </h1>
            <p className="text-sm font-semibold text-blue-400 mb-3">
              DevOps & Cloud Platform Engineer | Kubernetes, Terraform, GitOps
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>souravsaha111000@gmail.com</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Available for Worldwide Remote & Relocation</span>
              </span>
              <span>github.com/souravsaha</span>
              <span>linkedin.com/in/souravsaha</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.profile.summary}
            </p>
          </div>

          {/* Key Industry Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.certifications.map((c) => (
                <div key={c.id} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="text-[11px] text-blue-400 font-mono mt-0.5">{c.issuer}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">ID: {c.id} · {c.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Production Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Flagship Infrastructure Engineering Projects
            </h2>

            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400">{proj.timeline}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.overview}
                  </p>
                  <div className="text-xs font-mono text-emerald-400">
                    Results: {proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Core Technical Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-300">Cloud Platforms: </span>
                <span className="text-slate-400">AWS (EKS, VPC, RDS, IAM, S3, KMS), GCP (GKE, Cloud Run)</span>
              </div>
              <div>
                <span className="font-bold text-slate-300">Containers: </span>
                <span className="text-slate-400">Kubernetes, Docker, Helm, Cilium eBPF, Karpenter, containerd</span>
              </div>
              <div>
                <span className="font-bold text-slate-300">Infrastructure as Code: </span>
                <span className="text-slate-400">Terraform, OpenTofu, Terragrunt, Ansible, Infracost</span>
              </div>
              <div>
                <span className="font-bold text-slate-300">CI/CD & GitOps: </span>
                <span className="text-slate-400">GitHub Actions, ArgoCD, Argo Rollouts, GitLab CI</span>
              </div>
              <div>
                <span className="font-bold text-slate-300">Observability & SRE: </span>
                <span className="text-slate-400">Prometheus, Grafana, OpenTelemetry, Loki, SLOs/Error Budgets</span>
              </div>
              <div>
                <span className="font-bold text-slate-300">DevSecOps: </span>
                <span className="text-slate-400">Trivy, Sigstore Cosign, HashiCorp Vault, OPA Gatekeeper</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex items-baseline justify-between text-xs">
              <span className="font-bold text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</span>
              <span className="text-slate-400 font-mono">First Class with Distinction</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Coursework: Distributed Systems, Operating Systems, Computer Networks, Database Architecture.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
