import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return RESUME_DATA.projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = RESUME_DATA.projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Kaveri Desai`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = RESUME_DATA.projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[#050816]">
      <div className="bg-noise" />
      <Navbar />

      <main className="flex-1 pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-white mb-12 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-3xl">
              {project.description}
            </p>
            {project.github && (
              <div className="flex items-center gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                >
                  <Code size={18} />
                  View on GitHub
                </a>
              </div>
            )}
          </div>

          {/* Architecture Diagram */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-white mb-8">System Architecture</h2>
              <div className="glass-card rounded-3xl p-8 border border-white/10 overflow-x-auto">
                <div className="min-w-max mx-auto">
                  <div className="flex items-center gap-0">
                    {project.architecture.map((node, idx) => (
                      <div key={idx} className="flex items-center">
                        {/* Node box */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-32 h-14 rounded-xl border border-primary/40 bg-primary/10 flex items-center justify-center px-3 text-center shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                            <span className="text-sm font-medium text-white leading-tight">{node}</span>
                          </div>
                          <span className="text-xs font-mono text-muted/60">{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        {/* Arrow between nodes */}
                        {idx < project.architecture!.length - 1 && (
                          <div className="flex items-center mx-1 -mt-4">
                            <div className="w-6 h-px bg-gradient-to-r from-primary/60 to-accent/60" />
                            <ArrowRight size={14} className="text-accent -ml-1" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-white mb-8">What It Does</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex gap-4"
                >
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">▹</span>
                  <p className="text-muted leading-relaxed text-sm">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* All Technologies */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
