import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = portfolioData.typingRoles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 90);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 45);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % portfolioData.typingRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start bg-fixed bg-cover bg-center bg-no-repeat pt-24 pb-16 z-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.75)), url('/hero-bg.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-4"
        >
          {/* Greeting */}
          <p className="text-xl sm:text-2xl text-slate-100 font-medium drop-shadow-md">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {portfolioData.name}
          </h1>

          {/* Typing Animated Title */}
          <div className="text-2xl sm:text-4xl font-semibold text-white flex flex-wrap items-center gap-2 pt-1 drop-shadow-md">
            <span>And I'm a</span>
            <span className="text-red-500 font-bold border-r-4 border-amber-400 pr-1 animate-pulse min-h-[44px] flex items-center">
              {displayedText}
            </span>
          </div>

          {/* Core Technical Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-mono tracking-wide pt-2 drop-shadow-md">
            {portfolioData.heroSubtitle}
          </p>

          {/* Hero CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900/90 hover:bg-slate-900 text-white font-semibold text-sm rounded-xl border border-slate-700 shadow-xl transition-all duration-300"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
