"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";

export function ResumePreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        suppressHydrationWarning
        className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-colors border border-white/10 min-w-[180px]"
      >
        <FileText size={18} /> View Resume
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[90vh] glass-card border border-white/10 rounded-2xl z-[101] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <FileText size={20} className="text-primary" /> Kaveri_Desai_Resume.pdf
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <Download size={16} /> Download
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Preview Container */}
              <div className="flex-1 bg-white/5 p-4 md:p-8 overflow-y-auto">
                <div className="w-full aspect-[1/1.4] bg-white rounded-lg shadow-2xl relative">
                  {/* Ideally this would use react-pdf or an iframe, but for a simple "premium preview" we use an iframe or image fallback */}
                  <iframe 
                    src="/resume.pdf#toolbar=0" 
                    className="w-full h-full rounded-lg"
                    title="Resume Preview"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
