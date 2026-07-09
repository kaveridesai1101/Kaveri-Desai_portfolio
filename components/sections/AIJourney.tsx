"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

export function AIJourney() {
  return (
    <section id="ai-journey" className="relative py-32 overflow-hidden">
      {/* Gradient line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            AI <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            My path through AI and machine learning — every milestone that got me here.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-12">
          {RESUME_DATA.aiJourney.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group">
                    <span className="inline-block font-mono text-sm text-primary mb-2">{item.year}</span>
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <div className="relative w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(124,58,237,0.8)] z-10">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
