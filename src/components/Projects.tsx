import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, FileText, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

const projectIcons: Record<string, React.ReactNode> = {
  'lifenote': <FileText className="w-8 h-8 text-red-600" />,
  'personal-finance-manager': <Cpu className="w-8 h-8 text-amber-600" />,
  'blogspot': <BookOpen className="w-8 h-8 text-red-600" />,
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-600 font-semibold text-xs font-mono tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span>Real-World Systems & Repositories</span>
            <span className="h-[2px] w-8 bg-amber-500"></span>
          </div>
        </div>

        {/* Featured Project Highlight Banner */}
        {portfolioData.projects.filter(p => p.featured).map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 bg-slate-50 rounded-2xl p-8 border-2 border-red-500 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold uppercase rounded-full shadow-xs">
              ★ Featured System
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                    {projectIcons[proj.id]}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-red-600 font-semibold">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {proj.description}
                </p>

                {proj.architectureNotes && (
                  <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-700">
                    <span className="text-red-600 font-bold">Architecture Highlight: </span>
                    {proj.architectureNotes}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-red-700 text-xs font-mono font-medium rounded-lg border border-red-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <GithubIcon size={18} />
                    <span>View Repository</span>
                  </a>
                )}
                {proj.liveUrl && proj.liveUrl !== '#' && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.filter(p => !p.featured).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl group-hover:scale-105 transition-transform shadow-xs">
                    {projectIcons[proj.id]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white text-slate-700 text-xs font-mono rounded-md border border-slate-200 group-hover:border-amber-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-red-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-red-300 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
