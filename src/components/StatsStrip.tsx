import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative -mt-6 mb-16 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-surface/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
          {PORTFOLIO_DATA.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-text-main mt-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-text-sub mt-1 leading-snug">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
