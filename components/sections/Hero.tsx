"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ResumePreview } from "@/components/ui/ResumePreview";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Rocket, Code2, Link2, Mail, ArrowRight } from "lucide-react";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

const FLOATING_BADGES = [
  { tech: "Python 🐍", delay: 0, x: "-10%", y: "15%" },
  { tech: "TensorFlow 🔥", delay: 0.5, x: "75%", y: "5%" },
  { tech: "OpenCV 👁", delay: 1, x: "80%", y: "50%" },
  { tech: "React ⚛", delay: 1.5, x: "-5%", y: "65%" },
  { tech: "LangChain 🦜", delay: 2, x: "60%", y: "85%" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* 3D Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Scene />
      </div>
      <div className="absolute inset-0 z-1 bg-radial-gradient pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Personal Brand Content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-primary font-bold mb-2">Hi 👋</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-white leading-none mb-4">
                I'm Kaveri Desai
              </h1>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-4">
                AI & Machine Learning Engineer
              </h2>
              <p className="text-xl text-muted/95 leading-relaxed font-medium max-w-2xl">
                Turning AI research into intelligent applications. Building production-ready AI systems using Generative AI, Computer Vision, NLP, and Full Stack Development.
              </p>
            </motion.div>

            {/* Structured Stats/Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mb-10"
            >
              <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/95">
                <MapPin size={14} className="text-primary" /> Pune, India
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/95">
                <GraduationCap size={14} className="text-accent" /> B.E AIML @ ISB&M
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/95">
                <Briefcase size={14} className="text-secondary" /> 5 Internships
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/95">
                <Rocket size={14} className="text-emerald-400" /> 4 AI Projects
              </span>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <ResumePreview />

              <MagneticButton>
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] min-w-[180px]"
                >
                  Projects <ArrowRight size={18} />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-colors border border-white/10 min-w-[180px]"
                >
                  Contact <Mail size={18} />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all border border-white/5 hover:border-primary/30">
                <Code2 size={20} />
              </a>
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 text-muted hover:text-secondary transition-all border border-white/5 hover:border-secondary/30">
                <Link2 size={20} />
              </a>
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="p-3 rounded-full bg-white/5 hover:bg-accent/20 text-muted hover:text-accent transition-all border border-white/5 hover:border-accent/30">
                <Mail size={20} />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Interactive Photo with Orbital Badges */}
          <div className="w-full lg:w-2/5 relative flex items-center justify-center min-h-[500px]">
            
            {/* Main Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 z-10"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary animate-spin-slow opacity-60 blur-md" />
              <div className="absolute inset-1 rounded-full bg-[#050816] z-10" />
              
              <div className="relative z-20 w-full h-full rounded-full overflow-hidden border border-white/10 bg-white/5">
                <Image 
                  src="/profile_final.jpg"
                  alt="Kaveri Desai"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>

            {/* Orbiting Tech Emojis/Badges */}
            {FLOATING_BADGES.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + badge.delay, duration: 0.6, type: "spring" }}
                className="absolute z-20 glass-card px-4 py-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md"
                style={{
                  left: badge.x,
                  top: badge.y,
                }}
              >
                <motion.div
                  animate={{ y: ["-12px", "12px", "-12px"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                  className="text-xs font-bold text-white/90 tracking-wide font-mono"
                >
                  {badge.tech}
                </motion.div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
