"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Database, Cpu, Activity, Cloud, BarChart } from "lucide-react";

const WORKFLOW_STEPS = [
  { icon: Search, title: "Research", desc: "Define problem, explore SOTA architectures, and outline the technical approach." },
  { icon: Database, title: "Dataset", desc: "Data gathering, cleaning, augmentation, and robust preprocessing pipelines." },
  { icon: Cpu, title: "Training", desc: "Model selection, hyperparameter tuning, and distributed training execution." },
  { icon: Activity, title: "Evaluation", desc: "Rigorous testing, validation metrics, and performance benchmarking." },
  { icon: Cloud, title: "Deployment", desc: "Containerization, API development, and cloud platform deployment." },
  { icon: BarChart, title: "Monitoring", desc: "Real-time analytics, drift detection, and continuous model improvement." },
];

export function AIWorkflow() {
  return (
    <section id="workflow" className="relative py-32 overflow-hidden bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            AI Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Workflow</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From conceptualization to production. How I build robust intelligent systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-accent/30 to-secondary/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Node */}
                <div className="w-20 h-20 rounded-2xl glass-card border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 relative z-20 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={32} className="text-muted group-hover:text-primary transition-colors relative z-10" />
                </div>
                
                {/* Number */}
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Phase 0{idx + 1}</div>
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
