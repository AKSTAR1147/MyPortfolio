import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EngineeringInterests } from './components/EngineeringInterests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Fullscreen Landing Hero with Fixed Background */}
        <Hero />

        {/* Scrollable Content Pages sliding over the Hero image */}
        <div className="relative z-10 bg-white shadow-2xl">
          <About />
          <Experience />
          <Services />
          <Skills />
          <Projects />
          <EngineeringInterests />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
