import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Search } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="skills" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-secondary/10 border border-accent-secondary/30 rounded-full px-3.5 py-1 text-xs font-mono text-accent-secondary uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" /> Technical Arsenal
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Skills & <span className="text-accent-secondary">Technologies</span>
            </h2>
            <p className="text-text-sub mt-2 text-base">
              Core technologies, frameworks, and engineering tools I leverage daily.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:w-72"
          >
            <Search className="w-4 h-4 text-text-sub absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-text-sub/60 focus:outline-none focus:border-accent-primary/60 transition-colors"
            />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((group, idx) => {
            const Icon = group.icon;
            const filteredItems = group.items.filter(item =>
              item.toLowerCase().includes(searchQuery.toLowerCase())
            );

            const isMatch = filteredItems.length > 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`bg-surface/50 border rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 ${
                  searchQuery && isMatch
                    ? 'border-accent-primary/60 shadow-lg shadow-accent-primary/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-secondary/15 border border-accent-secondary/30 flex items-center justify-center text-accent-secondary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => {
                    const matchesSearch = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    
                    return (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                          matchesSearch
                            ? 'bg-accent-primary text-white scale-105 font-bold shadow-md'
                            : 'bg-white/5 border border-white/10 text-text-main hover:bg-white/10 hover:border-accent-primary/40 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
