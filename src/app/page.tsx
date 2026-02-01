import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import SkillsTimelineSection from "@/components/skills/timeline/SkillsTimelineSection";
import MobileSkillsTimeline from "@/components/skills/timeline/MobileSkillsTimeline";
import RootLayout from "./layout";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <main
      className="
        select-none
      "
    >
      <RootLayout>
        <Navbar />
        <Hero />

        <div className="hidden md:block">
          <SkillsTimelineSection />
        </div>
        <div className="block md:hidden">
          <MobileSkillsTimeline />
        </div>

        <ProjectsSection />
        <ContactSection />
      </RootLayout>
    </main>
    // <TechDiagram />
    // <SkillsScroll />
  );
}
