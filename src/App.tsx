
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { RecruiterBar } from './components/RecruiterBar';

function App() {
  return (
    <div className="min-h-screen text-text-sub font-sans selection:bg-accent-primary/30 selection:text-white bg-grid-pattern relative overflow-x-hidden">
      
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <StatsStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Floating Recruiter Toolbar */}
      <RecruiterBar />

      {/* Copyright Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-text-sub bg-[#070A12]/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} Madhura Chakole. All rights reserved.
          </div>
          <div className="text-text-sub/70">
            Crafted with React 19, TypeScript, Tailwind CSS & Framer Motion
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
