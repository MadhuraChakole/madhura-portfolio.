import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3.5 py-1 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Background & Badges
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-blue-400">Certifications</span>
          </h2>
          <p className="text-text-sub mt-2 text-base max-w-xl">
            Formal computer science degree credentials and verified technical course certifications.
          </p>
        </motion.div>

        {/* 2 Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center text-accent-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Academic Degrees</h3>
                <span className="text-xs text-text-sub font-mono">PVG's College of Science & Commerce</span>
              </div>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-accent-primary/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base font-display">{edu.degree}</h4>
                    <span className="bg-accent-primary/10 border border-accent-primary/30 text-accent-primary px-3 py-0.5 rounded-full text-xs font-mono font-bold">
                      Score: {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-text-sub font-mono">{edu.institution} • {edu.period}</div>
                  <p className="text-xs text-text-sub leading-relaxed pt-1">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-accent-secondary/15 border border-accent-secondary/30 flex items-center justify-center text-accent-secondary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Verified Certifications</h3>
                <span className="text-xs text-text-sub font-mono">Technical & Specialization Badges</span>
              </div>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-accent-secondary/30 transition-all flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                    <div className="text-xs text-accent-secondary font-mono mt-0.5">{cert.issuer}</div>
                    <p className="text-xs text-text-sub mt-1 leading-snug">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
