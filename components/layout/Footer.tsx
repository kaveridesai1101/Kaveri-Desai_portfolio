"use client";

import React from "react";
import Link from "next/link";
import { RESUME_DATA } from "@/lib/data";
import { Mail, Link2, Code2, MapPin } from "lucide-react";

export function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/5 py-16 bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-3xl font-heading font-bold text-white mb-4">
              Kaveri Desai
            </p>
            <p className="text-xl text-white font-medium mb-3">
              Thanks for visiting.<br/>
              Let's build intelligent systems together.
            </p>
            <div className="flex items-center gap-1.5 mt-6 text-muted text-sm">
              <MapPin size={16} className="text-accent" />
              <span>{RESUME_DATA.personal.location}</span>
            </div>
          </div>

          {/* Availability */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Open For</p>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Internships
              </span>
              <span className="text-sm text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Research
              </span>
              <span className="text-sm text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Freelance
              </span>
              <span className="text-sm text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> AI Projects
              </span>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Connect</p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail size={18} className="text-muted group-hover:text-primary transition-colors" />
                Email
              </a>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Link2 size={18} className="text-muted group-hover:text-secondary transition-colors" />
                LinkedIn
              </a>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Code2 size={18} className="text-muted group-hover:text-accent transition-colors" />
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-white transition-colors font-mono uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-muted/50 text-xs font-mono">
            {RESUME_DATA.personal.name} · {RESUME_DATA.personal.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
