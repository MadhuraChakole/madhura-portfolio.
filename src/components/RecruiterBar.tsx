import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Check, X, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const RecruiterBar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 bg-[#0F172A]/90 border border-accent-primary/40 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-xl glow-accent-primary"
      >
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white pr-2 border-r border-white/10">
          <Briefcase className="w-4 h-4 text-accent-primary" />
          <span>Hiring?</span>
        </div>

        <a
          href={PORTFOLIO_DATA.resumeLink}
          download="Madhura_Chakole_Resume.pdf"
          className="flex items-center gap-1.5 bg-accent-primary hover:bg-blue-600 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors"
        >
          <Download className="w-3.5 h-3.5" /> Resume
        </a>

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 text-accent-primary" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <button
          onClick={() => setVisible(false)}
          className="text-text-sub hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors ml-1"
          aria-label="Dismiss recruiter bar"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
