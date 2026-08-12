import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, ShieldAlert, Cpu, Layers, Code2 } from 'lucide-react';
import type { ProjectDetail } from '../data';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 sm:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#070A12]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[85vh] bg-[#0F172A] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto z-10 flex flex-col custom-scrollbar"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 bg-[#0F172A]/90 backdrop-blur-md px-6 py-5 border-b border-white/10 flex items-start justify-between">
            <div>
              <div className="inline-block bg-accent-primary/10 border border-accent-primary/30 px-3 py-0.5 rounded-full text-xs font-mono text-accent-primary mb-1">
                {project.category}
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-white font-display">
                {project.title}
              </h2>
              <p className="text-xs md:text-sm text-text-sub font-mono">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-text-sub hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 text-sm text-text-sub">
            
            {/* Live Actions & Links */}
            <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-white/10">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-accent-primary text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all hover:bg-blue-600 shadow-md shadow-accent-primary/20"
                >
                  <ExternalLink className="w-4 h-4" /> Live Application Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all hover:bg-white/10"
                >
                  <Code2 className="w-4 h-4" /> Source Code Repository
                </a>
              )}
            </div>

            {/* Key Metrics Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-sub mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-primary" /> Key Quantifiable Impact
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.modalDetails.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <div className="text-xs font-semibold text-accent-primary font-mono">{metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-xs font-mono text-amber-400">
                  <ShieldAlert className="w-4 h-4" /> Problem Statement
                </h4>
                <p className="leading-relaxed text-xs">
                  {project.modalDetails.problem}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-4 h-4" /> Technical Solution
                </h4>
                <p className="leading-relaxed text-xs">
                  {project.modalDetails.solution}
                </p>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-sub mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-secondary" /> Architectural Highlights
              </h3>
              <ul className="space-y-2">
                {project.modalDetails.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs bg-surface/50 border border-white/5 p-3 rounded-xl">
                    <span className="text-accent-secondary font-mono">0{idx + 1}.</span>
                    <span className="text-text-main leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Details */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-sub mb-3">
                Tech Stack Specifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.modalDetails.techStackDetails.map((tech, idx) => (
                  <span key={idx} className="bg-accent-secondary/15 border border-accent-secondary/30 px-3 py-1 rounded-lg text-xs font-mono text-accent-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
