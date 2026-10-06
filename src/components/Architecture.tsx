import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { ArchitectureNode } from '../data/portfolioData';
import { Network, Database, Cpu, HardDrive, Layers, ArrowDown, Info } from 'lucide-react';

const typeIcons: Record<string, React.ReactNode> = {
  frontend: <Layers className="w-5 h-5 text-cyan-400" />,
  gateway: <Network className="w-5 h-5 text-amber-400" />,
  service: <Cpu className="w-5 h-5 text-emerald-400" />,
  messaging: <HardDrive className="w-5 h-5 text-purple-400" />,
  database: <Database className="w-5 h-5 text-blue-400" />,
};

export const Architecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(portfolioData.architectureNodes[0]);

  return (
    <section id="architecture" className="py-24 bg-[#0f0f14] text-white border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            System Architecture
          </h2>
          <div className="flex items-center justify-center gap-3 text-red-500 font-semibold text-sm tracking-widest uppercase">
            <span className="h-[2px] w-8 bg-red-500"></span>
            <span>Interactive Distributed System Diagram</span>
            <span className="h-[2px] w-8 bg-red-500"></span>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto pt-2">
            Click on any architectural node below to view the implementation details, protocols, and technical rationale.
          </p>
        </div>

        {/* Diagram & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Diagram */}
          <div className="lg:col-span-7 bg-[#16161c] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl flex flex-col items-center space-y-6">
            
            {/* Level 1: React Client */}
            {portfolioData.architectureNodes.filter(n => n.id === 'react-client').map(node => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-3 shadow-md ${
                  selectedNode.id === node.id 
                    ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 text-white' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200'
                }`}
              >
                {typeIcons[node.type]}
                <span className="font-bold text-base font-mono">{node.title}</span>
              </button>
            ))}

            <ArrowDown className="text-red-500 animate-bounce" size={20} />

            {/* Level 2: API Gateway */}
            {portfolioData.architectureNodes.filter(n => n.id === 'api-gateway').map(node => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-3 shadow-md ${
                  selectedNode.id === node.id 
                    ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 text-white' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200'
                }`}
              >
                {typeIcons[node.type]}
                <span className="font-bold text-base font-mono">{node.title}</span>
              </button>
            ))}

            <ArrowDown className="text-slate-600" size={20} />

            {/* Level 3: Microservices (Patient, Billing, Appointment) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              {portfolioData.architectureNodes.filter(n => ['patient-service', 'billing-service', 'appointment-service'].includes(n.id)).map(node => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3.5 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-2 ${
                    selectedNode.id === node.id 
                      ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 text-white' 
                      : 'bg-slate-900 border-slate-800 hover:border-slate-600 text-slate-300'
                  }`}
                >
                  {typeIcons[node.type]}
                  <span className="font-bold text-xs font-mono">{node.title}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-950/30 px-3 py-1 rounded-full border border-red-900/50">
              <span>⚡ gRPC Sync Calls &amp; Kafka Async Events</span>
            </div>

            {/* Level 4: Kafka Event Bus */}
            {portfolioData.architectureNodes.filter(n => n.id === 'kafka-bus').map(node => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-3 shadow-md ${
                  selectedNode.id === node.id 
                    ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 text-white' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200'
                }`}
              >
                {typeIcons[node.type]}
                <span className="font-bold text-base font-mono">{node.title}</span>
              </button>
            ))}

            <ArrowDown className="text-slate-600" size={20} />

            {/* Level 5: PostgreSQL Persistence */}
            {portfolioData.architectureNodes.filter(n => n.id === 'postgresql-db').map(node => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`w-full max-w-sm p-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-3 shadow-md ${
                  selectedNode.id === node.id 
                    ? 'bg-red-950/80 border-red-500 ring-2 ring-red-500/40 text-white' 
                    : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200'
                }`}
              >
                {typeIcons[node.type]}
                <span className="font-bold text-base font-mono">{node.title}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Node Inspector Details */}
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-[#16161c] p-8 rounded-2xl border border-red-500/40 shadow-2xl space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-3 bg-red-950 border border-red-800 text-red-400 rounded-xl">
                {typeIcons[selectedNode.type]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  {selectedNode.title}
                </h3>
                <p className="text-xs text-red-400 font-mono">
                  {selectedNode.description}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Technology Stack
              </h4>
              <p className="text-sm font-mono font-semibold text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800">
                {selectedNode.tech}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Implementation &amp; Protocol Rationale
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                {selectedNode.details}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Info size={14} className="text-red-500" />
              <span>Select another diagram node to inspect its execution flow.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
