"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Building2, ChevronDown, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-black/20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {RESUME_DATA.experience.length} internships shaping my expertise in AI and Software Engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary -translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          {RESUME_DATA.experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const isActive = activeId === exp.id;

            return (
              <div key={exp.id} className={`relative flex items-start mb-12 md:mb-24 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-[#050816] border-2 border-primary -translate-x-1/2 mt-6 z-10 flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    className={`glass-card p-6 md:p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${isActive ? 'border-primary/40 bg-white/10 shadow-[0_0_30px_rgba(124,58,237,0.15)] scale-[1.02]' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                    onClick={() => setActiveId(isActive ? null : exp.id)}
                  >
                    <div className={`flex flex-col gap-1 mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                      <span className="text-accent font-mono text-xs font-bold tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-white mt-3">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted">
                        <Building2 size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`pt-6 mt-6 border-t border-white/10 ${isEven ? "md:text-right" : "md:text-left"}`}>
                            
                            {/* Achievements */}
                            <h4 className="text-sm font-mono uppercase tracking-widest text-white/80 mb-4">Key Contributions</h4>
                            <ul className={`space-y-3 mb-8 flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                              {exp.bullets.map((bullet, i) => (
                                <li key={i} className={`flex gap-3 text-muted leading-relaxed text-sm max-w-lg ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                                  <CheckCircle2 size={18} className="text-primary/70 mt-0.5 flex-shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Technologies */}
                            <h4 className="text-sm font-mono uppercase tracking-widest text-white/80 mb-4">Tech Stack</h4>
                            <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-primary/90"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand Hint */}
                    <div className={`flex items-center gap-2 text-xs text-muted/50 font-mono mt-6 transition-opacity ${isActive ? 'opacity-0 h-0 mt-0' : 'opacity-100'} ${isEven ? "md:justify-end" : "justify-start"}`}>
                      Click to expand <ChevronDown size={14} />
                    </div>

                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
