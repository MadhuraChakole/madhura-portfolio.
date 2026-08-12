import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3.5 py-1 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-text-sub mt-2 text-base max-w-xl">
            Professional development roles building production React code and client web solutions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#0B0F19] border-2 border-accent-primary group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-primary group-hover:bg-emerald-400" />
              </div>

              {/* Experience Card */}
              <div className="bg-surface/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl">
                
                {/* Top Row Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-accent-primary font-semibold text-base mt-0.5 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-text-sub text-xs">•</span>
                      <span className="text-text-sub text-xs flex items-center gap-1 font-normal">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-400 w-max">
                    <Calendar className="w-3.5 h-3.5" /> {exp.duration}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-text-sub leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-white/5 border border-white/5 px-3 py-1 rounded-md text-xs font-mono text-text-main">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
