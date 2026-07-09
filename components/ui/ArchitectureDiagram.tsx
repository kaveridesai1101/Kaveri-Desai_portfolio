"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  nodes: string[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[600px] flex items-center justify-between relative px-8">
        
        {/* Connection Line */}
        <div className="absolute top-1/2 left-16 right-16 h-[2px] bg-white/10 -translate-y-1/2" />
        
        {/* Animated Data Stream */}
        <motion.div
          className="absolute top-1/2 left-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 w-32"
          animate={{
            x: ["0%", "400%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {nodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative z-10"
          >
            <div className="bg-[#050816] px-6 py-3 rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center w-32 flex items-center justify-center">
              <span className="text-sm font-medium text-white break-words">{node}</span>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
