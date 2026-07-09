"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Mail, Phone, Code2, Link2, MapPin, Send, CheckCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black/20">
      {/* Background animated glow */}
      <div className="absolute inset-0 bg-[#050816] pointer-events-none opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Open to internships, research positions, collaborations, and interesting AI conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

          {/* Left Column: Direct Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6 justify-center"
          >
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-primary/40 transition-all duration-300">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Email</p>
                <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-white hover:text-primary transition-colors text-sm break-all font-semibold">
                  {RESUME_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-primary/40 transition-all duration-300">
              <Phone className="text-secondary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-white hover:text-secondary transition-colors text-sm font-semibold">
                  {RESUME_DATA.personal.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-primary/40 transition-all duration-300">
              <Code2 className="text-accent mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">GitHub</p>
                <a href={RESUME_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors text-sm font-semibold">
                  {RESUME_DATA.personal.github.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-primary/40 transition-all duration-300">
              <Link2 className="text-emerald-400 mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">LinkedIn</p>
                <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors text-sm font-semibold">
                  {RESUME_DATA.personal.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-primary/40 transition-all duration-300">
              <MapPin className="text-red-400 mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Location</p>
                <p className="text-white text-sm font-semibold">{RESUME_DATA.personal.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glass Contact Form with Animated Accent Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col justify-center"
          >
            {/* Ambient moving glow under the form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse pointer-events-none" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle size={56} className="text-emerald-400" />
                <h3 className="text-2xl font-heading font-bold text-white">Message Sent!</h3>
                <p className="text-muted max-w-sm">Thank you for reaching out! I've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Send a Message</h3>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-mono text-muted uppercase tracking-widest">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    suppressHydrationWarning
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Kaveri Desai"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/30 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs font-mono text-muted uppercase tracking-widest">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    suppressHydrationWarning
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/30 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-xs font-mono text-muted uppercase tracking-widest">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    suppressHydrationWarning
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Let me know how we can collaborate..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/30 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                  />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                  >
                    <Send size={16} className={isSubmitting ? "animate-pulse" : ""} /> 
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </MagneticButton>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
