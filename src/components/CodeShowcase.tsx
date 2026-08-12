import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, FileCode } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const CodeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSnippet = PORTFOLIO_DATA.codeSnippets[activeTab];

  const handleCopy = () => {
    if (currentSnippet) {
      navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="code" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3.5 py-1 text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" /> Clean Code Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Code Quality & <span className="text-purple-400">Architecture</span>
          </h2>
          <p className="text-text-sub mt-2 text-base max-w-xl">
            Sample production-ready TypeScript patterns, custom hooks, and route guards.
          </p>
        </motion.div>

        {/* Code Editor Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B0F19] border border-white/15 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Editor Header Bar with Tabs */}
          <div className="bg-[#070A12] border-b border-white/10 px-4 pt-3 flex flex-wrap items-center justify-between gap-4">

            {/* File Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar">
              {PORTFOLIO_DATA.codeSnippets.map((snippet, idx) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-t-xl text-xs font-mono transition-all duration-200 border-t border-x border-b-0 ${activeTab === idx
                      ? 'bg-[#0B0F19] text-white border-white/15 border-b-[#0B0F19]'
                      : 'bg-transparent text-text-sub border-transparent hover:text-white hover:bg-white/5'
                    }`}
                >
                  <FileCode className={`w-3.5 h-3.5 ${activeTab === idx ? 'text-accent-primary' : 'text-text-sub'}`} />
                  <span>{snippet.filename}</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-sub hover:text-white hover:bg-white/10 transition-colors mb-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Description Banner */}
          <div className="bg-surface/40 px-6 py-3 border-b border-white/10 flex items-center justify-between text-xs text-text-sub">
            <span className="font-semibold text-white font-mono">{currentSnippet.title}:</span>
            <span className="truncate max-w-xl">{currentSnippet.description}</span>
          </div>

          {/* Code Viewer Container */}
          <div className="p-6 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed text-text-main custom-scrollbar">
            <pre className="text-slate-300">
              <code>
                {currentSnippet.code.split('\n').map((line, lIdx) => (
                  <div key={lIdx} className="table-row">
                    <span className="table-cell pr-4 text-right select-none text-white/20 text-xs">
                      {lIdx + 1}
                    </span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
