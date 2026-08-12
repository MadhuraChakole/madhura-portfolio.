import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full px-3.5 py-1 text-xs font-mono text-accent-primary uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" /> Professional Background
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-accent-primary">Madhura</span>
          </h2>
          <p className="text-text-sub mt-2 text-base max-w-xl">
            Passionate about turning complex SaaS workflows into simple, scalable, and responsive user experiences.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Box (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-surface/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-accent-primary font-mono pb-2 border-b border-white/10">
              <Sparkles className="w-4 h-4" /> My Engineering Journey
            </div>
            {PORTFOLIO_DATA.about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-base text-text-sub leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Core Principles Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PORTFOLIO_DATA.about.principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="bg-surface/50 border border-white/10 rounded-xl p-5 backdrop-blur-md hover:border-accent-primary/40 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display mb-1">
                        {principle.title}
                      </h3>
                      <p className="text-xs text-text-sub leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
