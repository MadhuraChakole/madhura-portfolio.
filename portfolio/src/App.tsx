import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GraduationCap, Award, Mail, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from './data';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="text-[36px] md:text-[42px] font-bold text-text-main font-display">
      {children}
    </h2>
    {subtitle && <p className="text-text-sub mt-2 text-lg">{subtitle}</p>}
  </motion.div>
);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-text-sub font-sans selection:bg-accent-primary/30 selection:text-text-main">

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl text-text-main tracking-tight">MC.</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-text-sub hover:text-text-main transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a
              href={PORTFOLIO_DATA.resumeLink}
              download="Madhura_Chakole_Resume.pdf"
              className="flex items-center gap-2 bg-accent-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors text-sm"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-main p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-text-sub hover:text-text-main transition-colors py-2 text-lg font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={PORTFOLIO_DATA.resumeLink}
                  download="Madhura_Chakole_Resume.pdf"
                  className="flex items-center gap-2 bg-accent-primary text-white px-4 py-3 rounded-lg font-semibold justify-center"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-28">

        {/* 1. HERO SECTION */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-accent-primary font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Available for opportunities
              </motion.div>

              <h1 className="text-[48px] md:text-[68px] font-extrabold leading-[1.1] text-text-main font-display">
                {PORTFOLIO_DATA.name}
              </h1>
              <div className="text-xl md:text-2xl text-accent-primary font-medium font-display">
                {PORTFOLIO_DATA.role}
              </div>
              <p className="text-[17px] leading-[1.8] max-w-2xl text-text-sub">
                {PORTFOLIO_DATA.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="bg-accent-primary text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={PORTFOLIO_DATA.resumeLink}
                  download="Madhura_Chakole_Resume.pdf"
                  className="bg-surface border border-border text-text-main rounded-xl px-8 py-4 font-semibold transition-colors duration-300 hover:bg-border flex items-center gap-2"
                >
                  <Download className="w-5 h-5" /> Download Resume
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-5 pt-6">
                <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. ABOUT ME */}
        <section id="about" className="scroll-mt-32">
          <SectionHeading subtitle="Get to know me a little better">About Me</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-[20px] p-8 md:p-12 space-y-5"
          >
            {PORTFOLIO_DATA.about.map((paragraph, idx) => (
              <p key={idx} className="text-[17px] leading-[1.9] text-text-sub">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </section>

        {/* 3. SKILLS */}
        <section id="skills" className="scroll-mt-32">
          <SectionHeading subtitle="Technologies and tools I work with">Skills & Technologies</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-surface border border-border rounded-[20px] p-6 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <h3 className="text-lg font-bold text-text-main mb-4 font-display flex items-center gap-2">
                    <Icon className="w-5 h-5 text-accent-primary" /> {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-background border border-border px-4 py-2 rounded-full text-sm text-text-main font-medium hover:border-accent-primary/50 hover:text-accent-primary transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. EXPERIENCE */}
        <section id="experience" className="scroll-mt-32">
          <SectionHeading subtitle="Where I've worked and what I've built">Experience</SectionHeading>
          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-surface border border-border rounded-[20px] p-8 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main font-display">{exp.role}</h3>
                    <div className="text-lg text-accent-primary font-medium mt-1">{exp.company}</div>
                  </div>
                  <div className="text-text-sub font-medium mt-2 md:mt-0 bg-background px-4 py-1.5 rounded-full text-sm border border-border w-max">
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-[15px] leading-[1.8]">
                      <span className="text-accent-secondary mt-1.5 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeading subtitle="Things I've built and shipped">Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-surface border border-border rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-text-main font-display pr-4">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-text-sub hover:text-accent-primary transition-colors shrink-0 mt-1">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  </div>
                  <p className="text-[15px] leading-[1.7] mb-5 text-text-sub flex-grow">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.points.slice(0, 3).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-sm text-text-sub">
                        <span className="text-accent-secondary/60 text-[10px] mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-medium text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-main hover:text-accent-primary transition-colors font-medium text-sm">
                        <GithubIcon className="w-4 h-4" /> Code
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-main hover:text-accent-primary transition-colors font-medium ml-auto text-sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. EDUCATION & CERTIFICATIONS */}
        <section id="education" className="scroll-mt-32">
          <SectionHeading subtitle="My academic background and credentials">Education & Certifications</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-[20px] p-8 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-accent-secondary" />
                <h3 className="text-xl font-bold text-text-main font-display">Degrees</h3>
              </div>
              <div className="space-y-6">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="pb-6 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-bold text-text-main text-lg">{edu.degree}</h4>
                    <div className="text-text-sub mt-1">{edu.institution}</div>
                    <div className="text-sm font-medium text-accent-primary mt-2">Score: {edu.score}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-[20px] p-8 transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent-secondary" />
                <h3 className="text-xl font-bold text-text-main font-display">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px]">
                    <span className="text-accent-primary mt-1 shrink-0">▹</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center"
          >
            <h2 className="text-[36px] md:text-[42px] font-bold text-text-main mb-4 font-display">Get In Touch</h2>
            <p className="text-[17px] text-text-sub max-w-2xl mb-10 leading-[1.8]">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="bg-accent-primary text-white rounded-xl px-10 py-4 font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-lg"
            >
              Say Hello
            </motion.a>

            <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-border w-full">
              <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-text-sub hover:text-text-main hover:scale-110 transition-all duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* COPYRIGHT FOOTER */}
      <footer className="border-t border-border py-8 text-center text-sm text-text-sub">
        <div className="max-w-7xl mx-auto px-6">
          © {new Date().getFullYear()} Madhura Chakole. All rights reserved. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
