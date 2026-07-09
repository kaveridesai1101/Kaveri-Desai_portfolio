"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Code2 } from "lucide-react";

export function GithubSection() {
  return (
    <section id="github" className="relative py-24 overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-black/20 flex flex-col items-center text-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
            <Code2 size={28} />
          </div>

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Open Source Contribution Activity
          </h3>
          <p className="text-muted text-base max-w-2xl">
            Developing algorithms, training pipelines, and web modules in the open. Tracks my active version control changes across various AI repos on GitHub.
          </p>

          {/* GitHub Activity Chart Embed */}
          <div className="w-full mt-6 bg-white/5 p-6 rounded-2xl border border-white/5 overflow-x-auto flex justify-center min-h-[120px] items-center">
            {/* Using a standard SVG chart render for username: kaveri2004 */}
            {/* Filter: color set to primary brand purple (#7c3aed) */}
            <picture className="w-full max-w-4xl flex justify-center">
              <img 
                src="https://ghchart.rshah.org/7c3aed/kaveridesai1101" 
                alt="Kaveri's GitHub Contributions Chart"
                className="w-full h-auto filter brightness-95 contrast-105"
              />
            </picture>
          </div>

          <a 
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 text-white font-semibold text-sm transition-all hover:bg-primary/10"
          >
            Explore Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
