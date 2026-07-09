"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Users } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Leadership <span className="text-secondary">&</span> Community
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Building and leading the next generation of AI engineers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.leadership.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 hover:border-secondary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-secondary/20 transition-colors duration-500" />
              <Users className="text-secondary mb-5" size={28} />
              <h3 className="text-2xl font-heading font-bold text-white mb-1">{item.title}</h3>
              <p className="text-secondary text-sm font-medium mb-6">{item.organization}</p>
              <ul className="space-y-3">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-muted leading-relaxed text-sm">
                    <span className="text-secondary mt-0.5 flex-shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
