import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Full-Time DevOps Engineer Role');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState(
    'Hi Sourav, we reviewed your DevOps portfolio and would like to discuss our infrastructure engineering opportunities.'
  );
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleTemplateClick = (text: string, sub: string) => {
    setMessage(text);
    setSubject(sub);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Hiring Manager & Recruiter Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let's Discuss Your Infrastructure Challenges
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Actively interviewing for DevOps Engineer, Platform Engineer, and Site Reliability Engineer (SRE) positions. 
            Send a direct message, copy my email address, or connect on professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Contact & Direct Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Direct Email Access
              </span>
              
              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {PORTFOLIO_DATA.profile.email}
                </span>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 text-xs font-mono text-blue-400 hover:text-white bg-slate-900 border border-slate-700 rounded transition-colors shrink-0 ml-2 flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1 text-xs text-slate-400">
                <div>⚡ Typical response time: <span className="text-slate-200 font-semibold">&lt; 12 hours</span></div>
                <div>📍 Timezone flexibility: <span className="text-slate-200 font-semibold">US / EU / APAC overlapping hours</span></div>
                <div>🚀 Notice Period: <span className="text-slate-200 font-semibold">Immediate / 2 Weeks</span></div>
              </div>
            </div>

            {/* Quick Templates for Recruiters */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Quick Message Presets
              </span>

              <div className="space-y-2">
                <button
                  onClick={() =>
                    handleTemplateClick(
                      'Hi Sourav, we would love to schedule a 20-minute introductory screen regarding our Senior/Mid DevOps Platform position.',
                      'Introductory Screening Request'
                    )
                  }
                  className="w-full text-left p-2.5 text-xs bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  📅 Schedule 20-min Intro Screen
                </button>

                <button
                  onClick={() =>
                    handleTemplateClick(
                      'Hi Sourav, can you share more details or a walkthrough of your Terraform modules and Argo Rollouts canary setups?',
                      'Request Infrastructure Walkthrough'
                    )
                  }
                  className="w-full text-left p-2.5 text-xs bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  🔍 Request Terraform & Kubernetes Deep Dive
                </button>

                <button
                  onClick={() =>
                    handleTemplateClick(
                      'Hi Sourav, we are looking for a DevOps Engineer to help migrate our workloads to EKS and implement automated CI/CD.',
                      'Infrastructure Migration Contract / Role'
                    )
                  }
                  className="w-full text-left p-2.5 text-xs bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  ⚙️ EKS Migration & GitOps Initiative
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Network</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Hiring Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! A confirmation has been simulated and Sourav will get back to you shortly at <span className="text-blue-400">{senderEmail || 'your email'}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Tech Lead)"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sjenkins@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Opportunity / Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Direct delivery to <code className="text-slate-300">souravsaha111000@gmail.com</code>
                  </span>

                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-blue-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
