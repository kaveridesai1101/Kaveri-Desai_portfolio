"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Code2, ExternalLink, ArrowRight, Layers, HelpCircle, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PROJECT_THEMES = [
  { 
    gradient: "from-primary/20 via-[#050816] to-secondary/10", 
    accent: "text-primary", 
    border: "border-primary/30",
    image: "/projects/resume_builder.jpg"
  },
  { 
    gradient: "from-accent/20 via-[#050816] to-primary/10", 
    accent: "text-accent", 
    border: "border-accent/30",
    image: "/projects/resume_analyzer.jpg"
  },
  { 
    gradient: "from-secondary/20 via-[#050816] to-emerald-500/10", 
    accent: "text-secondary", 
    border: "border-secondary/30",
    image: "/projects/satyasetu.jpg"
  },
  { 
    gradient: "from-purple-500/20 via-[#050816] to-pink-500/10", 
    accent: "text-purple-400", 
    border: "border-purple-400/30",
    image: "/projects/surveillance.jpg"
  },
];

// Helper to derive problem, solution, challenges, and results without inventing facts
function getProjectDetails(id: string) {
  switch (id) {
    case "ai-resume-builder":
      return {
        problem: "Recruiters and job applicants face manual, time-consuming processes to structure resumes dynamically and format them into beautiful portfolios.",
        solution: "A complete MERN-based platform with multi-step onboarding forms, automatic content formatting, auto-save state, and instantaneous export.",
        challenges: "Ensuring state persistence across multiple onboarding forms and generating clean PDF layouts statically.",
        result: "Production-ready resume and portfolio generation platform with seamless multi-step onboarding.",
      };
    case "ai-resume-analyzer":
      return {
        problem: "Job seekers struggle to optimize their resumes against ATS filters, leading to low callback rates due to poor keyword matching.",
        solution: "A Streamlit tool parsing documents via Spacy & NLTK to evaluate compatibility scores and suggest semantic improvements via OpenAI API.",
        challenges: "Parsing diverse unstructured PDF layout formats and matching candidate skills semantically.",
        result: "NLP pipeline accurately parsing resumes and providing customized optimization scoring.",
      };
    case "satyasetu":
      return {
        problem: "The rapid spread of misinformation and fake news online lacks real-time, explainable credibility checks.",
        solution: "A Streamlit classification interface utilizing Hugging Face Transformers to classify news authenticity with transparency features.",
        challenges: "Optimizing transformer model inference speed and presenting model explainability features.",
        result: "An accessible cloud-deployed system capable of predicting news credibility dynamically.",
      };
    case "smart-surveillance":
      return {
        problem: "Traditional surveillance systems require continuous manual monitoring and fail to alert operators to key events in specific zones.",
        solution: "A computer vision platform combining YOLO human detection and skeleton-based action recognition with a SQLite event database.",
        challenges: "Maintaining real-time performance at 95%+ precision while tracking multi-person poses across dynamic regions of interest.",
        result: "Real-time surveillance system running skeleton tracking with SQLite activity logging.",
      };
    default:
      return {
        problem: "Addressing automated process mismatches in real-world scenarios.",
        solution: "Engineered robust pipeline focusing on automation and reliability.",
        challenges: "Refining parameters to optimize production performance.",
        result: "Stable production delivery.",
      };
  }
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Featured AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Intelligent systems engineered from research algorithms to functional client applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {RESUME_DATA.projects.map((project, idx) => {
            const theme = PROJECT_THEMES[idx % PROJECT_THEMES.length];
            const details = getProjectDetails(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] border border-white/5 bg-[#0a0d1c] overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-40 pointer-events-none`} />
                
                <div className="relative z-10 p-6 md:p-12">
                  
                  {/* Grid Layout: Left is details, Right is image mockup & architecture */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column: Case Study Text */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className={`text-lg font-semibold ${theme.accent} mb-4`}>
                          {project.tagline}
                        </p>
                      </div>

                      {/* Overview */}
                      <div className="glass-card p-5 rounded-2xl border border-white/5 bg-black/20">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-2">
                          <Layers size={14} className={theme.accent} /> Overview
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                      </div>

                      {/* Problem & Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="glass-card p-5 rounded-2xl border border-white/5 bg-black/20">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-2">
                            <HelpCircle size={14} className="text-red-400" /> Problem
                          </h4>
                          <p className="text-muted text-sm leading-relaxed">{details.problem}</p>
                        </div>
                        <div className="glass-card p-5 rounded-2xl border border-white/5 bg-black/20">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-2">
                            <Lightbulb size={14} className="text-emerald-400" /> Solution
                          </h4>
                          <p className="text-muted text-sm leading-relaxed">{details.solution}</p>
                        </div>
                      </div>

                      {/* Challenges & Result */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="glass-card p-5 rounded-2xl border border-white/5 bg-black/20">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-2">
                            <AlertTriangle size={14} className="text-amber-400" /> Challenges
                          </h4>
                          <p className="text-muted text-sm leading-relaxed">{details.challenges}</p>
                        </div>
                        <div className="glass-card p-5 rounded-2xl border border-white/5 bg-black/20">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-2 flex items-center gap-2">
                            <CheckCircle size={14} className="text-primary" /> Result
                          </h4>
                          <p className="text-muted text-sm leading-relaxed">{details.result}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4 mt-2">
                        {project.github && (
                          <MagneticButton>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors text-sm"
                            >
                              <Code2 size={16} /> GitHub Repository
                            </a>
                          </MagneticButton>
                        )}
                        {project.demo && (
                          <MagneticButton>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm"
                            >
                              <ExternalLink size={16} /> Live Demo
                            </a>
                          </MagneticButton>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Screenshot Mockup & Architecture */}
                    <div className="flex flex-col gap-6 w-full">
                      {/* Screenshot Mockup Container */}
                      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                        <Image 
                          src={theme.image}
                          alt={`${project.title} Interface`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* System Architecture Flow */}
                      <div className="glass-card p-6 rounded-2xl border border-white/5 bg-black/40">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
                          System Pipeline Architecture
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                          {project.architecture?.map((node, i) => (
                            <div key={i} className="flex items-center gap-2">
                              {i > 0 && <span className="text-muted/40 font-mono">➔</span>}
                              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-white/95">
                                <span className="font-mono text-primary mr-1.5">{i+1}.</span>{node}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
