import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { PipelineSimulator } from './components/PipelineSimulator';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { TerminalPlayground } from './components/TerminalPlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar 
        onResumeClick={() => setIsResumeOpen(true)}
        onTerminalClick={() => setIsTerminalModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {/* Split-Screen Hero with Live Telemetry Console & Proof Metrics */}
        <Hero 
          onTerminalClick={() => setIsTerminalModalOpen(true)}
        />

        {/* Interactive Production Cloud Architecture Topology Explorer */}
        <ArchitectureExplorer />

        {/* Interactive CI/CD & Automated Canary Rollout Simulator */}
        <PipelineSimulator />

        {/* Flagship Production Projects & Infrastructure as Code Viewer */}
        <ProjectsSection />

        {/* Technical Competencies Matrix & Verified Industry Certifications */}
        <SkillsMatrix />

        {/* Embedded DevOps CLI Terminal Emulator */}
        <TerminalPlayground />

        {/* Hiring Manager & Recruiter Contact Hub */}
        <ContactSection />
      </main>

      {/* Quiet Clean Footer */}
      <Footer 
        onTerminalClick={() => setIsTerminalModalOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Printable ATS-Friendly Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Standalone DevOps CLI Modal (Accessible anytime from top bar or hero) */}
      {isTerminalModalOpen && (
        <TerminalPlayground 
          isOpenModal={true}
          onCloseModal={() => setIsTerminalModalOpen(false)}
        />
      )}
    </div>
  );
}
