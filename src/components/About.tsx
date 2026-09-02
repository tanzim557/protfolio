"use client";

import { useState } from "react";
import { User, Code2, Cpu, Rocket, Heart, CheckCircle2, Terminal, Layers, Globe } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"overview" | "philosophy" | "whyHire">("overview");

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT MYSELF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Mindset &amp; <span className="gradient-text">Full-Stack Passion</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Get to know Mubassher Alam Tanzim — how I think, build, and deliver scalable software systems.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            {[
              { id: "overview", label: "My Journey & Profile", icon: User },
              { id: "philosophy", label: "Engineering Philosophy", icon: Code2 },
              { id: "whyHire", label: "Why Executives Trust Me", icon: Rocket },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Passionate Full-Stack Developer &amp; Tech Enthusiast
                </h3>
                <p>
                  I am <strong className="text-sky-400 font-semibold">Mubassher Alam Tanzim</strong>, a driven Full Stack Software Developer dedicated to constructing seamless user experiences backed by robust, high-performance server architectures.
                </p>
                <p>
                  My development journey spans building dynamic frontend interfaces with <strong>React</strong> and <strong>Next.js</strong>, crafting resilient RESTful and GraphQL APIs with <strong>Node.js</strong> and <strong>Python (FastAPI/Express)</strong>, and managing scalable database environments with <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and <strong>Redis</strong>.
                </p>
                <p>
                  Whether starting from a clean slate or refactoring enterprise codebases, I focus on clean code structure, microsecond latency optimization, and intuitive UI UX aesthetics.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass-card rounded-xl p-3.5 border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block">Frontend Mastery</span>
                    <span className="text-sm font-bold text-sky-400">Next.js 14/15, React, Tailwind, TS</span>
                  </div>
                  <div className="glass-card rounded-xl p-3.5 border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block">Backend Power</span>
                    <span className="text-sm font-bold text-purple-400">Node.js, Express, Python, REST/gRPC</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="glass-card rounded-2xl p-5 border-sky-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Vercel &amp; Cloud Ready</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Optimized for serverless deployments, edge functions, CDN distribution, and continuous CI/CD integration.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border-purple-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Full Lifecycle Ownership</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    From database architecture and authentication to UI polishing and API monitoring — I take complete ownership.
                  </p>
                </div>
              </div>

            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="glass-card rounded-2xl p-6 border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">1. Clean &amp; Self-Documenting Code</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I write modular TypeScript code with predictable state management, strict type checking, and comprehensive unit coverage.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">2. Microsecond Speed &amp; UX First</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  User retention depends on responsiveness. I optimize bundle sizes, leverage server-side caching, and implement smooth micro-interactions.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">3. Continuous Innovation &amp; AI</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I continuously integrate modern AI frameworks, WebSockets, and distributed cloud tools into real-world applications.
                </p>
              </div>
            </div>
          )}

          {activeTab === "whyHire" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-white mb-4">
                What Makes Mubassher Alam Tanzim the Ideal Hiring Choice?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Zero Onboarding Lag",
                    desc: "Fluent with modern tools (Git, Docker, Vercel, Next.js App Router, Tailwind, PostgreSQL) — productive from Day 1.",
                  },
                  {
                    title: "Business & Value Focused",
                    desc: "I write software with revenue and user satisfaction in mind, not just syntax.",
                  },
                  {
                    title: "Problem Solver Mentality",
                    desc: "Faced with tricky bugs or high traffic bottlenecks? I debug methodically down to root causes.",
                  },
                  {
                    title: "Seamless Team Collaboration",
                    desc: "Clear communicator, receptive to feedback, and committed to collective engineering excellence.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
