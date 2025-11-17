"use client";
import React, { useState, useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ThreeBackground from "@/components/portfolio/ThreeBackground";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation scrolled={scrolled} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-violet-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Soham Deshpande. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
