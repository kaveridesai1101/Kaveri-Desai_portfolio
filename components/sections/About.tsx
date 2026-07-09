"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, FlaskConical, Puzzle, Code2, Lightbulb } from "lucide-react";

export function About() {
  const pillars = [
    {
      title: "Student",
      icon: GraduationCap,
      desc: "Third-year B.E. AI & ML at ISB&M, constantly learning and pushing academic boundaries.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      title: "AI Engineer",
      icon: BrainCircuit,
      desc: "Building intelligence into applications using Generative AI, Computer Vision, and NLP.",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
    },
    {
      title: "Research Enthusiast",
      icon: FlaskConical,
      desc: "Deeply interested in Agentic workflows, Multi-Agent systems, and optimizing RAG pipelines.",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
    },
    {
      title: "Full Stack Developer",
      icon: Code2,
      desc: "Bridging the gap between robust AI models and seamless, user-centric web interfaces.",
      color: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
    },
    {
      title: "Problem Solver",
      icon: Puzzle,
      desc: "Tackling complex engineering challenges with structured thinking and scalable architectures.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
    },
    {
      title: "Creative Thinker",
      icon: Lightbulb,
      desc: "Designing elegant solutions that are not just functional, but visually and conceptually brilliant.",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-black/20 border-y border-white/5">
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Who is <span className="text-primary">Kaveri?</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            I am a blend of academic curiosity, engineering rigor, and creative problem-solving. Here is what defines my professional identity.
          </p>
        </motion.div>

        {/* Identity Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg ${pillar.border} group`}
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${pillar.bg} ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">{pillar.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
