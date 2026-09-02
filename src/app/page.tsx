"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-sky-500 selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

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
  );
}
