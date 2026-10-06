import React from 'react';
import { motion } from 'framer-motion';
import { Network, Layers, Zap, Gauge, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const interestIcons = [
  <Network className="w-6 h-6 text-red-600" />,
  <Layers className="w-6 h-6 text-amber-600" />,
  <Zap className="w-6 h-6 text-red-600" />,
  <Gauge className="w-6 h-6 text-amber-600" />,
  <Compass className="w-6 h-6 text-red-600" />,
];

export const EngineeringInterests: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineering Interests
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>What I'm Interested In</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {portfolioData.engineeringInterests.map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500 hover:shadow-md transition-all duration-300 group shadow-xs"
            >
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {interestIcons[idx % interestIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {interest.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
