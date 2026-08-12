import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, type ProjectDetail } from '../data';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ["All", "SaaS & AI", "Infrastructure & Dashboards", "Full-Stack Web Apps"] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full px-3.5 py-1 text-xs font-mono text-accent-primary uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" /> Shipped Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-accent-primary">Engineering Projects</span>
            </h2>
            <p className="text-text-sub mt-2 text-base max-w-xl">
              Production web applications, multi-tenant SaaS dashboards, and full-stack solutions.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 bg-surface/60 border border-white/10 p-1.5 rounded-xl backdrop-blur-md"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent-primary text-white shadow-md'
                    : 'text-text-sub hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col hover:border-accent-primary/40 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Top Browser Bar Graphic */}
              <div className="bg-[#0B0F19]/90 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[11px] font-mono text-text-sub truncate max-w-[160px]">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-display leading-tight group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live link"
                      className="text-text-sub hover:text-accent-primary transition-colors shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </a>
                  )}
                </div>

                <div className="text-xs text-accent-primary font-mono mb-3">
                  {project.subtitle}
                </div>

                <p className="text-xs text-text-sub leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.points.slice(0, 3).map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-text-sub">
                      <span className="text-accent-primary mt-0.5 shrink-0">▹</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/20 px-2.5 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-accent-primary transition-colors"
                  >
                    <Layers className="w-4 h-4 text-accent-primary" /> Architecture Details
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-text-sub hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
