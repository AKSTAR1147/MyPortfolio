import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, KeyRound, Database, Workflow, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const capabilityIcons: Record<string, React.ReactNode> = {
  'backend-dev': <Server className="w-7 h-7 text-red-600" />,
  'microservices': <Cpu className="w-7 h-7 text-amber-600" />,
  'api-dev': <KeyRound className="w-7 h-7 text-red-600" />,
  'database-layer': <Database className="w-7 h-7 text-amber-600" />,
  'event-driven': <Workflow className="w-7 h-7 text-red-600" />,
  'api-integration': <Network className="w-7 h-7 text-amber-600" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineering Capabilities
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>What I Can Build</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.capabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    {capabilityIcons[item.id] || <Server className="w-7 h-7 text-red-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Capability Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white text-slate-700 text-xs font-mono font-semibold rounded-md border border-slate-200 group-hover:border-amber-300 transition-colors"
                  >
                    {tag}
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
