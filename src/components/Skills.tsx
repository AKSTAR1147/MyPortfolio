import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Technical Expertise
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>Structured Skills & Tools</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioData.skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-amber-500 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2 group-hover:text-red-600 transition-colors">
                <Terminal size={18} className="text-red-600" />
                <span>{cat.category}</span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-slate-50 text-slate-800 border border-slate-200 text-sm font-semibold rounded-lg hover:border-red-400 hover:text-red-700 hover:bg-red-50 transition-all shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-2xl p-8 text-white border border-red-500/50 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-600 rounded-lg text-white">
              <Sparkles size={22} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {portfolioData.currentlyLearning.category}
            </h3>
          </div>

          <p className="text-slate-300 text-sm mb-6">
            Continuously expanding my knowledge in distributed architecture, cloud-native deployments, and asynchronous reactive paradigms:
          </p>

          <div className="flex flex-wrap gap-3">
            {portfolioData.currentlyLearning.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-slate-800 border border-amber-500/40 text-amber-300 font-mono text-xs font-semibold rounded-xl shadow-xs"
              >
                ⚡ {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
