"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#ai-journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-card border-b border-white/5 backdrop-blur-2xl" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-6xl">

        {/* Logo */}
        <Link href="/" className="text-xl font-heading font-bold text-white hover:text-primary transition-colors">
          Kaveri Desai
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-white transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <MagneticButton>
            <a
              href="mailto:kaveridesai1101@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              <Mail size={15} />
              Hire Me
            </a>
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 glass-card backdrop-blur-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-white transition-colors py-2 text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:kaveridesai1101@gmail.com"
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium"
              >
                <Mail size={16} />
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
