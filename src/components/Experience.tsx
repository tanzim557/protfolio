"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Award, Zap, Code } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  skills: string[];
  impact: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      role: "Lead Full-Stack Software Engineer",
      company: "Nexus Tech Solutions",
      period: "2024 - Present",
      location: "Remote / Hybrid",
      type: "Full-Time",
      summary: "Leading the development of scalable enterprise web applications, real-time microservices, and AI integrations.",
      highlights: [
        "Architected full-stack Next.js App Router & Node.js backend handling over 500,000 monthly API requests.",
        "Reduced initial page render speed by 48% through server component optimization and Edge caching.",
        "Integrated real-time WebSockets and PostgreSQL connection pooling to ensure 99.9% uptime.",
        "Mentored junior developers and established CI/CD automated deployment pipelines on Vercel & AWS.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Vercel"],
      impact: "Boosted system throughput by 3x & achieved 99.9% server reliability",
    },
    {
      id: "exp-2",
      role: "Senior Frontend & Web Developer",
      company: "Apex Digital Innovation",
      period: "2023 - 2024",
      location: "Remote",
      type: "Full-Time",
      summary: "Engineered ultra-responsive web user interfaces, dynamic dashboards, and component libraries.",
      highlights: [
        "Designed and implemented 15+ custom React component libraries with Tailwind CSS and Framer Motion.",
        "Collaborated with UX designers to transform Figma wireframes into pixel-perfect interactive web pages.",
        "Implemented state management with Redux Toolkit & React Query, decreasing redundant API calls by 40%.",
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "Redux", "REST APIs", "GraphQL"],
      impact: "Increased user session duration by 35% across key client portals",
    },
    {
      id: "exp-3",
      role: "Full Stack Engineer & Consultant",
      company: "Global Tech Enterprise",
      period: "2022 - 2023",
      location: "Freelance / Contract",
      type: "Contract",
      summary: "Delivered end-to-end full stack web solutions, e-commerce engines, and custom API backends for global clients.",
      highlights: [
        "Built full-stack e-commerce platforms with Stripe payments, admin inventory panels, and automated email receipts.",
        "Created custom Python FastAPI backends for processing real-time data analytics and reporting.",
        "Deployed and configured production environments on Vercel, Netlify, and Cloudflare Pages.",
      ],
      skills: ["Node.js", "Express", "Python", "MongoDB", "Stripe API", "Vercel Deployment"],
      impact: "Successfully delivered 10+ end-to-end client applications on schedule",
    },
  ];

  const [activeId, setActiveId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Proven Track Record of <span className="gradient-text">Engineering Impact</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Real-world full stack developer experience building enterprise platforms and high-traffic applications.
          </p>
        </div>

        {/* Experience Cards & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Items list */}
          <div className="lg:col-span-5 space-y-4">
            {experiences.map((exp) => {
              const isActive = activeId === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "glass-panel border-sky-400/60 shadow-[0_0_20px_rgba(56,189,248,0.25)] translate-x-2"
                      : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-400 font-semibold">{exp.period}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-sky-300">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-400">{exp.company} • {exp.location}</p>

                  <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium mt-3">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{exp.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Selected Experience */}
          <div className="lg:col-span-7">
            {experiences
              .filter((e) => e.id === activeId)
              .map((exp) => (
                <div key={exp.id} className="glass-panel rounded-3xl p-6 sm:p-8 border-sky-500/30 space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sky-400 font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Accomplishments &amp; Technical Contributions:
                    </h4>
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Impact Banner */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-transparent border border-emerald-500/30 flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 block uppercase font-bold">Verified Executive Business Impact</span>
                      <span className="text-xs font-semibold text-white">{exp.impact}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Technologies &amp; Tools Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-sky-300 font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}
