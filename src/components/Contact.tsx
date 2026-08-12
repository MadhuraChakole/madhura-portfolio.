import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TOPICS = [
  "Hiring for Full-Time Role",
  "Frontend Architecture Consulting",
  "Technical Interview Scheduling",
  "General Tech Discussion"
];

export const Contact: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.email}&su=${encodeURIComponent(selectedTopic)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-surface/80 to-[#0F172A] border border-white/15 rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-primary/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full px-4 py-1.5 text-xs font-mono text-accent-primary uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Let's Connect & <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Collaborate</span>
          </h2>

          <p className="text-base text-text-sub max-w-2xl mx-auto mb-8 leading-relaxed">
            I am currently open to full-time Frontend & Full-Stack Developer opportunities. Whether you have an open position or want to evaluate my skills for your team, let's talk!
          </p>

          {/* Topic Selectors */}
          <div className="mb-8">
            <div className="text-xs font-mono text-text-sub uppercase tracking-wider mb-3">Select Inquiry Reason:</div>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                    selectedTopic === topic
                      ? 'bg-accent-primary text-white font-semibold shadow-md'
                      : 'bg-white/5 border border-white/10 text-text-sub hover:text-white'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={handleSendEmail}
              className="flex items-center gap-2 bg-gradient-to-r from-accent-primary to-blue-600 hover:from-blue-600 hover:to-accent-primary text-white rounded-xl px-8 py-4 font-semibold text-base transition-all duration-300 shadow-xl shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" /> Send Direct Email
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 bg-surface border border-white/10 text-white rounded-xl px-6 py-4 font-semibold text-base transition-all hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-accent-primary" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Details Strip */}
          <div className="pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-xs font-mono text-text-sub">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-accent-primary" />
              <span>{PORTFOLIO_DATA.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent-secondary" />
              <span>{PORTFOLIO_DATA.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{PORTFOLIO_DATA.location}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-text-sub hover:text-white hover:border-accent-primary transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-text-sub hover:text-white hover:border-accent-primary transition-all"
            >
              <LinkedinIcon />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
