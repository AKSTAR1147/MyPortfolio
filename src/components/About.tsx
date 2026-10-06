import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            About me
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono uppercase tracking-widest">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>who i am</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Solid Red Shadow Accent */}
              <div className="absolute -inset-1 bg-red-500 rounded-2xl blur-xs opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover object-center border-4 border-white"
              />
            </div>
          </motion.div>

          {/* Right: Bio & Resume Download */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {portfolioData.bioTitle} <span className="text-red-600">{portfolioData.bioSubtitle}</span>
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              {portfolioData.aboutText}
            </p>

            <div className="pt-4">
              <a
                href={portfolioData.cvUrl}
                download
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xs"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
