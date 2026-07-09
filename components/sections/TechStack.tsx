"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

const CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", logo: "🐍" },
      { name: "C++", logo: "⚙️" },
      { name: "Java", logo: "☕" },
      { name: "SQL", logo: "📊" },
    ],
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
  },
  {
    title: "Artificial Intelligence & ML",
    icon: "🧠",
    skills: [
      { name: "TensorFlow", logo: "🔥" },
      { name: "PyTorch", logo: "📐" },
      { name: "Scikit-learn", logo: "📈" },
      { name: "OpenCV", logo: "👁️" },
      { name: "Hugging Face", logo: "🤗" },
      { name: "NLTK", logo: "📝" },
      { name: "LangChain", logo: "🦜" },
      { name: "Spacy", logo: "🏷️" },
      { name: "YOLO", logo: "🎯" },
      { name: "Streamlit", logo: "⚡" },
    ],
    border: "border-primary/20",
    bg: "bg-primary/5",
  },
  {
    title: "Backend Development",
    icon: "🛡️",
    skills: [
      { name: "FastAPI", logo: "⚡" },
      { name: "Node.js", logo: "🟢" },
      { name: "Express.js", logo: "🚂" },
    ],
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
  },
  {
    title: "Frontend Development",
    icon: "⚛️",
    skills: [
      { name: "HTML5", logo: "📄" },
      { name: "CSS3", logo: "🎨" },
      { name: "JavaScript", logo: "💛" },
      { name: "TypeScript", logo: "💙" },
      { name: "React.js", logo: "⚛️" },
      { name: "Next.js", logo: "🔺" },
      { name: "Tailwind CSS", logo: "💨" },
      { name: "Framer Motion", logo: "🎬" },
    ],
    border: "border-secondary/20",
    bg: "bg-secondary/5",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", logo: "🐬" },
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
      { name: "Firebase", logo: "🔥" },
      { name: "SQLite", logo: "🪶" },
    ],
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
  },
  {
    title: "Developer Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", logo: "🟠" },
      { name: "GitHub", logo: "🐙" },
      { name: "VS Code", logo: "💻" },
      { name: "Google Colab", logo: "🚀" },
      { name: "Jupyter Notebook", logo: "🪐" },
      { name: "Docker", logo: "🐳" },
      { name: "Vercel", logo: "▲" },
    ],
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
];

export function TechStack() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-black/40">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, AI/ML tools, frameworks, and developer environments in my active toolkit.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`glass-card p-6 md:p-8 rounded-3xl border ${cat.border} ${cat.bg} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-heading font-bold text-white leading-none">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-xs font-semibold text-white/90 cursor-default"
                  >
                    <span>{skill.logo}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
