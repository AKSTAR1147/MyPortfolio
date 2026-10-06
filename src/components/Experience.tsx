import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Experience
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>Professional Work History</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              {/* Solid Red top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-red-600 rounded-t-2xl" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                    <Briefcase size={20} className="text-red-600" />
                    <h3 className="text-slate-900 group-hover:text-red-600 transition-colors">{exp.company}</h3>
                  </div>
                  <p className="text-lg font-semibold text-slate-700">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 text-amber-700 font-semibold">
                    <Calendar size={13} className="text-red-600" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed py-4">
                {exp.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-mono font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
