import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Code2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 font-display font-bold text-xl text-text-main tracking-tight"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-md shadow-accent-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="flex flex-col">
            <span className="leading-tight text-white font-semibold">Madhura <span className="text-accent-primary">C.</span></span>
            <span className="text-[10px] text-text-sub font-mono font-normal tracking-wider uppercase">Frontend Dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-surface/50 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive ? 'text-white' : 'text-text-sub hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-primary/20 border border-accent-primary/40 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.resumeLink}
            download="Madhura_Chakole_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-accent-primary to-blue-600 hover:from-blue-600 hover:to-accent-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md shadow-accent-primary/25 hover:shadow-lg hover:shadow-accent-primary/40 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-main p-2 rounded-lg bg-surface/80 border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-sub hover:text-white hover:bg-white/5 px-4 py-2.5 rounded-lg transition-colors text-base font-medium flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-4 h-4 text-accent-primary/40" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href={PORTFOLIO_DATA.resumeLink}
                  download="Madhura_Chakole_Resume.pdf"
                  className="flex items-center justify-center gap-2 bg-accent-primary text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-accent-primary/20 w-full"
                >
                  <Download className="w-4 h-4" /> Download PDF Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
