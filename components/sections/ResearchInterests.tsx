"use client";

import React from "react";
import { motion } from "framer-motion";

const INTERESTS = [
  { emoji: "🧠", title: "LLMs", desc: "Prompt engineering, supervised fine-tuning, and optimizing deployment architectures." },
  { emoji: "🤖", title: "Agentic AI", desc: "Designing multi-agent frameworks, tool integration, and structural reasoning loops." },
  { emoji: "👁", title: "Computer Vision", desc: "Real-time human pose estimation, object tracking, and region of interest filtering." },
  { emoji: "📚", title: "RAG Systems", desc: "Developing dense information retrieval pipelines with metadata-guided search structures." },
  { emoji: "💬", title: "NLP", desc: "Semantic parsing, text feature extraction pipelines, and classification architectures." },
  { emoji: "⚙", title: "Explainable AI", desc: "Developing techniques to make neural model outputs transparent and interpretable." },
];

export function ResearchInterests() {
  return (
    <section id="research" className="relative py-32 overflow-hidden bg-black/20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Research <span className="text-primary">Interests</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Deep academic interest and active engineering focus areas shaping my future endeavors.
          </p>
        </motion.div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-3xl border border-white/5 bg-[#0a0d1c]/40 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{interest.emoji}</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">{interest.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{interest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
