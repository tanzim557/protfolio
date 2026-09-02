"use client";

import { useState } from "react";
import { ArrowRight, Download, CheckCircle2, Play, Upload } from "lucide-react";

export default function Hero() {
  const [profilePic, setProfilePic] = useState<string>("/profile.jpg");

  // Handle custom image upload if user clicks upload button
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: HUGE Name Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Full Stack Engineer &amp; Lead Roles</span>
              </div>
            </div>

            {/* HUGE EYE-CATCHING NAME */}
            <div className="space-y-1">
              <span className="text-sky-400 font-mono text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase block">
                FULL-STACK SOFTWARE DEVELOPER
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]">
                MUBASSHER <br />
                <span className="gradient-text drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  ALAM TANZIM
                </span>
              </h1>
            </div>

            {/* Headline Summary */}
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Architecting High-Speed <strong className="text-white font-semibold">Full-Stack Web Systems</strong>, Next.js Platforms &amp; AI Applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="shimmer-btn flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-extrabold text-sm shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-[1.03] transition-transform duration-200"
              >
                <Play className="w-5 h-5 text-white" />
                <span>Explore Projects &amp; Code</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-sky-400 transition-all"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Get Resume &amp; Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: User's Uploaded Profile Picture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Outer Glowing Gradient Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 opacity-70 blur-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              <div className="relative glass-card rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center border border-slate-700/60 shadow-2xl">
                
                {/* Profile Image Frame featuring Tanzim's Uploaded Photo */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-2xl mb-6">
                  <div className="w-full h-full relative rounded-[14px] overflow-hidden bg-slate-950">
                    <img
                      src={profilePic}
                      alt="Mubassher Alam Tanzim"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Photo Customizer Button badge */}
                  <label
                    htmlFor="avatar-upload-hero"
                    className="absolute bottom-3 right-3 cursor-pointer bg-slate-900/90 hover:bg-sky-500 text-slate-200 hover:text-white p-2.5 rounded-xl border border-slate-700 transition-all shadow-lg text-xs flex items-center gap-1.5"
                    title="Upload Custom Photo"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-[11px] font-medium hidden sm:inline">Update Photo</span>
                    <input
                      id="avatar-upload-hero"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </label>
                </div>

                {/* Developer Profile Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Mubassher Alam Tanzim
                </h2>
                <p className="text-sky-400 font-mono text-sm font-semibold mt-1">
                  Full Stack Software Engineer
                </p>

                {/* Tech Badge Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {["React", "Next.js", "Node.js", "TypeScript", "Python", "Tailwind", "PostgreSQL", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Quick Verified Badge */}
                <div className="mt-6 w-full pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Vercel Ready
                  </span>
                  <span className="font-mono text-slate-400">Location: Remote / Worldwide</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
