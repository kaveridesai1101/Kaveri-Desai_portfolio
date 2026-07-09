"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Award } from "lucide-react";

const CERT_COLORS = [
  "border-primary/30 hover:border-primary/70 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]",
  "border-accent/30 hover:border-accent/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  "border-secondary/30 hover:border-secondary/70 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  "border-purple-400/30 hover:border-purple-400/70 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]",
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden bg-black/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Certifications <span className="text-accent">&</span> Awards
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Industry-recognized credentials from DeepLearning.AI, Google, Salesforce, IBM, and Microsoft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`group relative p-6 rounded-2xl glass-card border transition-all duration-300 ${CERT_COLORS[idx % CERT_COLORS.length]}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted font-mono">{cert.issuer}</p>
                  {cert.year && (
                    <span className="inline-block mt-2 text-xs text-accent font-mono">{cert.year}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
