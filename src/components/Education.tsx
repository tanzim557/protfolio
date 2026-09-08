"use client";

import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  result: string;
  status: string;
  isCurrent?: boolean;
  description: string;
}

export default function Education() {
  const educationList: EducationItem[] = [
    {
      id: "bsc-cse",
      degree: "B.Sc. in Computer Science & Engineering (BSc CSE)",
      institution: "Daffodil International University (DIU)",
      year: "2024 - Present (Running)",
      result: "Pursuing Degree",
      status: "Active Student",
      isCurrent: true,
      description: "Focusing on Software Engineering, Data Structures & Algorithms, Database Systems, Web Architectures, and Artificial Intelligence.",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Satkhira Govt. College",
      year: "2023",
      result: "GPA 5.00 / 5.00",
      status: "Passed with Distinction",
      description: "Science Group. Excelled in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).",
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "Nalta High School",
      year: "2021",
      result: "GPA 5.00 / 5.00",
      status: "Passed with Distinction",
      description: "Science Group. Perfect GPA score in core science subjects and computer application fundamentals.",
    },
    {
      id: "jsc",
      degree: "Junior School Certificate (JSC)",
      institution: "KBA Junior & High School",
      year: "2018",
      result: "GPA 5.00 / 5.00",
      status: "Passed with Distinction",
      description: "Junior Secondary education with top academic ranking.",
    },
    {
      id: "psc",
      degree: "Primary School Certificate (PSC)",
      institution: "KBA Junior & High School",
      year: "2015",
      result: "GPA 5.00 / 5.00",
      status: "Passed with Distinction",
      description: "Primary foundation education with perfect GPA performance.",
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Educational Journey &amp; <span className="gradient-text">Academic Record</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mt-2">
            Mubassher Alam Tanzim&apos;s continuous history of academic excellence and computer science foundation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 relative group overflow-hidden bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-md ${
                edu.isCurrent
                  ? "border-sky-500 dark:border-sky-400/60 shadow-[0_10px_30px_rgba(2,132,199,0.12)] bg-gradient-to-r from-sky-50/90 via-white to-sky-100/40 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-sky-950/30"
                  : ""
              }`}
            >
              {edu.isCurrent && (
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-sky-500 text-white font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>CURRENTLY RUNNING</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold block mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {edu.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <div className="px-4 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 font-mono text-sm font-extrabold flex items-center gap-1.5 shadow-sm">
                    <Award className="w-4 h-4" />
                    <span>{edu.result}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
                {edu.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
