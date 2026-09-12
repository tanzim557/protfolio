"use client";

import { ArrowRight, Download, CheckCircle2, Play, Globe, Layers, Cpu, Code2 } from "lucide-react";

export default function Hero() {
  const profilePic = "/profile.jpg";

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/15 dark:bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-500/15 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Column 1 (On Mobile: Shows FIRST as order-1, on Desktop: Right Column order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* User Profile Card — Prominent & Formal in both Mobile & Desktop */}
            <div className="relative group w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              {/* Outer Glowing Gradient Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 opacity-60 blur-2xl group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              <div className="relative glass-card rounded-3xl p-5 sm:p-7 flex flex-col items-center text-center shadow-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800">
                
                {/* Profile Image Frame — Optimized for all mobile viewports without overflowing */}
                <div className="relative w-52 h-64 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-2xl mb-4 sm:mb-6">
                  <div className="w-full h-full relative rounded-[14px] overflow-hidden bg-slate-950">
                    <img
                      src={profilePic}
                      alt="Mubassher Alam Tanzim"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Developer Profile Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Mubassher Alam Tanzim
                </h2>
                <p className="text-sky-600 dark:text-sky-400 font-mono text-xs sm:text-sm font-bold mt-1">
                  Full Stack Software Engineer
                </p>

                {/* Tech Badge Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-3 sm:mt-4">
                  {["React", "Next.js", "Node.js", "TypeScript", "Python", "Tailwind", "PostgreSQL", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800/80 dark:text-slate-300 text-[11px] sm:text-xs font-mono dark:border-slate-700/60 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Location Badge */}
                <div className="mt-4 sm:mt-6 w-full pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-slate-700 dark:text-slate-300 font-medium">Location: Remote / Worldwide</span>
                </div>

              </div>
            </div>

            {/* High-Impact Engineering Strengths Cards (Shown on desktop alongside profile) */}
            <div className="hidden lg:block w-full max-w-md space-y-3">
              <div className="glass-card rounded-2xl p-4 bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-sky-500/30 flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cloud &amp; Microservices Architecture</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Optimized for serverless deployments, edge functions, CDN distribution, and continuous CI/CD integration.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-purple-500/30 flex items-start gap-3.5 shadow-md">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Full Lifecycle Ownership</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    From database architecture and authentication to UI polishing and API monitoring — I take complete ownership.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2 (On Mobile: Shows SECOND as order-2, on Desktop: Left Column order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/20 text-xs font-semibold shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Full Stack Engineer &amp; Lead Roles</span>
              </div>
            </div>

            {/* HUGE EYE-CATCHING NAME */}
            <div className="space-y-1">
              <span className="text-sky-600 dark:text-sky-400 font-mono text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase block">
                FULL-STACK &amp; IOT SOFTWARE ARCHITECT
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                MUBASSHER <br />
                <span className="gradient-text drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
                  ALAM TANZIM
                </span>
              </h1>
            </div>

            {/* Executive Headline & Bio Paragraph (Client Impressing) */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                Passionate Full-Stack Developer &amp; Tech Enthusiast
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                I am <strong className="text-sky-600 dark:text-sky-400 font-bold">Mubassher Alam Tanzim</strong>, a driven Full Stack Software Developer dedicated to constructing seamless user experiences backed by robust, high-performance server architectures.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                My development journey spans building dynamic frontend interfaces with <strong className="text-slate-900 dark:text-white">React &amp; Next.js</strong>, crafting resilient RESTful/gRPC APIs with <strong className="text-slate-900 dark:text-white">Node.js &amp; Python</strong>, and managing scalable database environments with <strong className="text-slate-900 dark:text-white">PostgreSQL &amp; MongoDB</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="shimmer-btn flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.03] transition-transform duration-200"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Explore Projects &amp; Code</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 hover:border-sky-400 transition-all font-semibold text-xs sm:text-sm"
              >
                <Download className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>View &amp; Print Formal Resume</span>
              </a>
            </div>

            {/* Mastery Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-2xl p-4 text-left bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Frontend Mastery
                </span>
                <span className="text-sm font-extrabold text-sky-600 dark:text-sky-400 block">
                  Next.js 14/15, React, Tailwind CSS, TypeScript
                </span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Backend Power
                </span>
                <span className="text-sm font-extrabold text-indigo-600 dark:text-purple-400 block">
                  Node.js, Express, Python, REST/gRPC APIs
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
