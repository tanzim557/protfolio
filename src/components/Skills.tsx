"use client";

import { useState } from "react";
import { Cpu, Layout, Server, Database, Cloud, ShieldCheck, Radio } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: Array<{ name: string; level: number; note: string }>;
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: [
        { name: "Next.js (App Router)", level: 96, note: "SSR, ISR, Server Components, Turbopack" },
        { name: "React 18 / 19", level: 98, note: "Hooks, Context, Custom Suspense Boundaries" },
        { name: "TypeScript", level: 94, note: "Strict Type System, Generics, Interfaces" },
        { name: "Tailwind CSS", level: 98, note: "Custom Design Systems, Glassmorphism" },
        { name: "State Management", level: 92, note: "Zustand, Redux Toolkit, React Query" },
      ],
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      skills: [
        { name: "Laravel PHP & Node.js", level: 95, note: "Asynchronous I/O, Eloquent ORM, REST APIs" },
        { name: "Python (FastAPI / Whisper AI)", level: 92, note: "Speech-to-text AI, Real-time APIs" },
        { name: "WebSockets & Streaming", level: 92, note: "Real-time feeds, SSE streams" },
        { name: "GraphQL & gRPC", level: 88, note: "Schema Stitching, Typed Query Resolvers" },
      ],
    },
    {
      title: "IoT & Embedded Systems",
      icon: Radio,
      skills: [
        { name: "ESP32 Microcontroller", level: 95, note: "Wi-Fi Telemetry, FreeRTOS, GPIO Mapping" },
        { name: "Firebase Realtime DB Stream", level: 94, note: "Continuous Cloud Sync & Remote Actuation" },
        { name: "Sensors & Signal Filtering", level: 92, note: "7-Sample Median Filter, Ultrasonic HC-SR04" },
        { name: "Power & Circuitry (3S BMS)", level: 90, note: "18650 Li-Ion BMS, Buck Converters, Relays" },
      ],
    },
    {
      title: "Databases & DevOps Cloud",
      icon: Cloud,
      skills: [
        { name: "MySQL & PostgreSQL", level: 94, note: "Indexing, Relational DB Design, Prisma ORM" },
        { name: "Firebase & Redis", level: 95, note: "Live Telemetry, Caching, Pub/Sub" },
        { name: "Vercel Platform & Docker", level: 98, note: "Edge Functions, Containers, CI/CD" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Full-Stack &amp; IoT <span className="gradient-text">Skill Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Comprehensive web, backend, and hardware technologies Mubassher leverages to build production-grade systems.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="font-mono text-sky-400 font-bold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800 p-[1px]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-400 font-mono">{skill.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
