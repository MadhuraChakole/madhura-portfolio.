import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, MapPin, Sparkles, Code, CheckCircle2 } from 'lucide-react';
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

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">

      {/* Background Decor Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-accent-primary/20 via-accent-secondary/15 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

        {/* Left Text Content */}
        <div className="md:col-span-7 flex flex-col items-start space-y-6">

          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-surface/80 border border-emerald-500/30 rounded-full px-4 py-2 text-xs font-medium text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_DATA.availability}</span>
            <span className="text-white/20">|</span>
            <span className="text-text-sub flex items-center gap-1">
              <MapPin className="w-3 h-3 text-accent-primary" /> {PORTFOLIO_DATA.location}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="bg-gradient-to-r from-white via-blue-100 to-accent-primary bg-clip-text text-transparent">{PORTFOLIO_DATA.name}</span>
            </h1>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-primary via-blue-400 to-accent-secondary bg-clip-text text-transparent font-display flex items-center gap-2 pt-1">
              <Code className="w-7 h-7 text-accent-primary shrink-0" />
              <span>{PORTFOLIO_DATA.role}</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-text-sub leading-relaxed max-w-2xl"
          >
            {PORTFOLIO_DATA.tagline}
          </motion.p>

          {/* Key Skill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {["React 19", "TypeScript", "Redux Toolkit", "REST APIs", "Tailwind CSS"].map((tech, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 bg-surface/90 border border-white/10 px-3 py-1 rounded-md text-xs font-mono text-text-main">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary" /> {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-gradient-to-r from-accent-primary to-blue-600 hover:from-blue-600 hover:to-accent-primary text-white rounded-xl px-7 py-3.5 font-semibold text-sm transition-all duration-300 shadow-xl shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:-translate-y-0.5"
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PORTFOLIO_DATA.resumeLink}
              download="Madhura_Chakole_Resume.pdf"
              className="flex items-center gap-2 bg-surface/80 border border-white/10 text-white rounded-xl px-6 py-3.5 font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-accent-primary" /> Download Resume
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-xs font-mono text-text-sub uppercase tracking-wider">Quick Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-surface/80 border border-white/10 text-text-sub hover:text-white hover:border-accent-primary/50 transition-all duration-200"
              >
                <GithubIcon />
              </a>
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-surface/80 border border-white/10 text-text-sub hover:text-white hover:border-accent-primary/50 transition-all duration-200"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-surface/80 border border-white/10 text-text-sub hover:text-white hover:border-accent-primary/50 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Feature Card / Code Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 relative"
        >
          <div className="relative rounded-2xl bg-[#0F172A]/90 border border-white/15 shadow-2xl p-6 backdrop-blur-xl overflow-hidden group">
            {/* Top Bar Mockup */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-text-sub flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent-primary" /> developer_profile.ts
              </span>
            </div>

            {/* Code Snippet Card Content */}
            <div className="font-mono text-xs space-y-2 text-text-sub leading-relaxed">
              <div className="text-purple-400">const <span className="text-blue-300">candidate</span> = &#123;</div>
              <div className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">"{PORTFOLIO_DATA.name}"</span>,</div>
              <div className="pl-4"><span className="text-sky-300">role</span>: <span className="text-emerald-300">"{PORTFOLIO_DATA.role}"</span>,</div>
              <div className="pl-4"><span className="text-sky-300">experience</span>: <span className="text-amber-300">"Proser Digital & Tayan Solutions"</span>,</div>
              <div className="pl-4"><span className="text-sky-300">specialization</span>: [</div>
              <div className="pl-8 text-emerald-300">"React 19", "TypeScript", "Redux Toolkit",</div>
              <div className="pl-8 text-emerald-300">"SaaS Dashboards", "REST APIs"</div>
              <div className="pl-4">],</div>
              <div className="pl-4"><span className="text-sky-300">metrics</span>: &#123;</div>
              <div className="pl-8"><span className="text-sky-300">setupTimeSaved</span>: <span className="text-amber-300">"60%"</span>,</div>
              <div className="pl-8"><span className="text-sky-300">reRenderReduction</span>: <span className="text-amber-300">"50%"</span>,</div>
              <div className="pl-8"><span className="text-sky-300">pageLoadTime</span>: <span className="text-amber-300">"&lt; 2.0s"</span></div>
              <div className="pl-4">&#125;,</div>
              <div className="pl-4"><span className="text-sky-300">status</span>: <span className="text-emerald-400">"OPEN_TO_WORK"</span></div>
              <div className="text-purple-400">&#125;;</div>
            </div>

            {/* Ambient inner card glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-primary/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 bg-surface border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary font-bold text-sm">
              100%
            </div>
            <div className="text-xs">
              <div className="font-semibold text-white">Clean Code Standard</div>
              <div className="text-text-sub">TypeScript & Responsive UI</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
