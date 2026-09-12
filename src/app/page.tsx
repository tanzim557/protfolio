"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FixPointSpotlight from "@/components/FixPointSpotlight";
import LiveWebsites from "@/components/LiveWebsites";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 relative selection:bg-sky-500 selection:text-white transition-colors duration-300">
        {/* Sticky Header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* 2026 Flagship System Spotlight: FixPoint ERP */}
        <FixPointSpotlight />

        {/* Live Running Websites Showcase */}
        <LiveWebsites />

      {/* About Myself Section */}
      <About />

      {/* Academic Education Section */}
      <Education />

      {/* Projects Showcase Section */}
      <Projects />

      {/* Skills Matrix */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
    </>
  );
}
