import { RESUME_DATA } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIJourney } from "@/components/sections/AIJourney";
import { Certifications } from "@/components/sections/Certifications";
import { Leadership } from "@/components/sections/Leadership";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { Contact } from "@/components/sections/Contact";
import { GithubSection } from "@/components/sections/GithubSection";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { AIWorkflow } from "@/components/sections/AIWorkflow";

export const metadata = {
  title: `${RESUME_DATA.personal.name} | AI & Machine Learning Engineer`,
  description: `Portfolio of ${RESUME_DATA.personal.name} — ${RESUME_DATA.personal.role} based in ${RESUME_DATA.personal.location}. Specializing in Generative AI, Computer Vision, and NLP.`,
  keywords: "AI Engineer, Machine Learning, Generative AI, Computer Vision, NLP, LangChain, PyTorch, TensorFlow, Portfolio",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Recommended Order:
            1. Hero
            2. Who I Am (About)
            3. Featured AI Projects (Projects)
            4. Professional Experience (Experience)
            5. Technical Skills (TechStack)
            6. AI Engineering Workflow (AIWorkflow)
            7. Research Interests
            8. Currently Building
            9. AI Journey
            10. Leadership
            11. Certifications
            12. Contact */}
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <AIWorkflow />
        <ResearchInterests />
        <CurrentlyBuilding />
        <AIJourney />
        <GithubSection />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
