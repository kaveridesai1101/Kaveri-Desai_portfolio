"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Bot, Network, GitBranch, Database, Code2, Layout, Hammer } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  "bot": Bot,
  "network": Network,
  "git-branch": GitBranch,
  "database": Database,
  "code-2": Code2,
  "layout": Layout,
};

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative py-24 overflow-hidden border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-primary/20 text-primary mb-6">
                <Hammer size={16} className="animate-pulse" />
                <span className="text-sm font-mono uppercase tracking-widest font-bold">Currently Building</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                What's on my desk right now?
              </h2>
              <p className="text-muted leading-relaxed">
                I'm actively exploring advanced AI architectures and building systems that move beyond traditional ML models.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {RESUME_DATA.currentlyBuilding.map((item, idx) => {
                const Icon = ICON_MAP[item.icon] || Code2;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 group flex flex-col items-center text-center gap-4"
                  >
                    <Icon size={28} className="text-muted group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
