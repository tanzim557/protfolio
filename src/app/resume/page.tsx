"use client";

import { Printer, ArrowLeft, Mail, Phone, Globe, MapPin, Download } from "lucide-react";
import { LinkedinIcon, FacebookIcon } from "@/components/Icons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 print:bg-white print:text-black print:p-0 transition-colors">
      
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>Back to Portfolio</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-white" />
            <span className="text-white">Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Formal A4 ATS Resume Container */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 print:bg-white print:text-black rounded-3xl print:rounded-none p-8 sm:p-12 border border-slate-200 dark:border-slate-800 print:border-none shadow-2xl print:shadow-none space-y-8 font-sans">
        
        {/* Resume Header */}
        <header className="border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-6">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white print:text-black uppercase">
                MUBASSHER ALAM TANZIM
              </h1>
              <p className="text-sky-600 dark:text-sky-400 print:text-sky-800 font-mono text-base font-bold mt-1 tracking-wider uppercase">
                Full-Stack &amp; IoT Software Architect
              </p>

              {/* Direct Contact Info */}
              <div className="pt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 print:text-black shrink-0" />
                  <span>+880 1911-083557</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 print:text-black shrink-0" />
                  <span>mubassher.tanzim@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 print:text-black shrink-0" />
                  <span>https://protfolio-jade-three.vercel.app</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 print:text-black shrink-0" />
                  <span>Satkhira / Dhaka, Bangladesh (Remote Available)</span>
                </div>
              </div>
            </div>

            {/* Formal Headshot Suit Photo */}
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-xl border border-slate-300 dark:border-slate-700 print:border-slate-300 shrink-0">
              <img
                src="/profile.jpg"
                alt="Mubassher Alam Tanzim"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            Professional Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed font-normal">
            Results-driven <strong className="text-slate-900 dark:text-white print:text-black font-semibold">Full-Stack &amp; IoT Software Engineer</strong> with extensive hands-on experience in building high-speed Next.js web applications, resilient Node.js &amp; Python backend APIs, relational/NoSQL databases, and embedded hardware telemetry (ESP32). Adept at architecting end-to-end full-stack software systems with clean code standards, microsecond latency optimization, and intuitive UI/UX.
          </p>
        </section>

        {/* Technical Skill Matrix */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            Technical Skills &amp; Core Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 dark:bg-slate-900/60 print:bg-slate-50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold block mb-1">Frontend Engineering:</strong>
              <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, State Management</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 print:bg-slate-50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold block mb-1">Backend &amp; API Architecture:</strong>
              <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">Node.js, Express.js, Python (FastAPI), PHP (Laravel), RESTful APIs, gRPC, Microservices</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 print:bg-slate-50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold block mb-1">Databases &amp; DevOps:</strong>
              <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">PostgreSQL, MySQL, MongoDB, Firebase Realtime DB, Redis, Docker, Git, CI/CD, Vercel</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 print:bg-slate-50 p-3 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold block mb-1">IoT &amp; Embedded Systems:</strong>
              <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">ESP32 Hardware C++, Sensor Interfacing, 7-Sample Median Noise Filtering, Telemetry Systems</span>
            </div>
          </div>
        </section>

        {/* Featured Key Projects */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            Key Software &amp; Engineering Projects
          </h2>

          <div className="space-y-3.5 text-xs sm:text-sm">
            
            {/* Project: SchoolPulse */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  SchoolPulse SaaS — Next-Gen School Management Platform
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">React 19 / TypeScript / Vite / Tailwind</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Engineered web-based school management SaaS platform featuring 5-role switching (Super Admin, Teacher, Student, Parent, Accountant), interactive visual routine builder with conflict detection, dynamic GPA report card generator, tuition fee ledger, and AI Copilot (Live: ideal-school-portal.vercel.app).
              </p>
            </div>

            {/* Project: AURA LUXE */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  AURA LUXE — High-Performance Luxury E-Commerce Platform
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">React 19 / TypeScript / Vite / Tailwind</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Engineered modern luxury lifestyle e-commerce marketplace featuring multi-role switcher (Root Master Admin, Verified Seller, VIP Platinum Customer), technical specs matrix (titanium chronographs, ANC audio), slide-over cart drawer, and live delivery tracking (Live: ecommarce-zeta.vercel.app).
              </p>
            </div>

            {/* Project: McLaren 750S */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  McLaren 750S — Interactive 3D WebGL Configurator &amp; Showroom
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">Next.js 14 / Three.js / R3F / GSAP</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Engineered real-time 3D supercar configurator with Three.js and React Three Fiber featuring 360° orbital camera exploration, dynamic paint/caliper customizer, mechanical hotspots (4.0L twin-turbo V8, carbon chassis, active aero), day/night lighting environments, and Web Audio API engine acoustics (Live: mclaren-3d-showcase.vercel.app).
              </p>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  FixPoint ERP — Mobile Servicing &amp; Workshop Operating System
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">React 19 / TypeScript / Vite / Tailwind</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Engineered full-scale mobile phone repair shop ERP featuring device intake with 3x3 pattern lock selector, technician kanban workbench, spare parts stock control, POS billing engine with thermal receipt generation, and real-time customer tracking portal (Live: mobileshop-ashen.vercel.app).
              </p>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  ESP32 Real-Time IoT Water Level Telemetry Monitor
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">Embedded C++ / Firebase / Web</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Engineered ultrasonic water level monitoring system using ESP32 hardware. Implemented a 7-sample median noise filter to eliminate sensor jitter and connected live telemetry stream to Firebase Realtime Database and interactive web dashboard.
              </p>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  Mamun Hotel &amp; Restaurant Enterprise System
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">Laravel PHP / MySQL / Blade</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Built multi-role management suite for hotel room reservations, restaurant food orders, billing workflows, and automated invoice PDF generation with MySQL database schema optimization.
              </p>
            </div>

            {/* Project 3 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  Telemedicine AI Healthcare Consult Portal
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">Next.js / Node.js / Python AI</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Developed virtual healthcare platform featuring AI symptom triage, prescription generator, doctor consultation scheduling, and secure patient data management.
              </p>
            </div>

            {/* Project 4 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-extrabold text-slate-900 dark:text-white print:text-black text-sm sm:text-base">
                  PhysiCode Physics &amp; Compiler AST Engine
                </h3>
                <span className="font-mono text-xs text-sky-600 dark:text-sky-400 print:text-slate-600">React / C++ / WebGL</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-xs leading-relaxed">
                Constructed rigid-body physics simulation engine with vector dynamics alongside a custom C++ compiler lexical scanner &amp; AST mathematical parser.
              </p>
            </div>

          </div>
        </section>

        {/* Academic Education */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 print:text-slate-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            Academic Education Record
          </h2>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black text-sm font-bold">B.Sc. in Computer Science &amp; Engineering (BSc CSE)</strong>
                <p className="text-slate-600 dark:text-slate-400 print:text-slate-600">Daffodil International University (DIU)</p>
              </div>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 print:text-emerald-800 font-bold">2024 – Present (Running)</span>
            </div>

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black text-sm font-bold">Higher Secondary Certificate (HSC)</strong>
                <p className="text-slate-600 dark:text-slate-400 print:text-slate-600">Satkhira Govt. College | Science Group</p>
              </div>
              <span className="font-mono text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold">GPA: 5.00 / 5.00 (2023)</span>
            </div>

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black text-sm font-bold">Secondary School Certificate (SSC)</strong>
                <p className="text-slate-600 dark:text-slate-400 print:text-slate-600">Nalta High School | Science Group</p>
              </div>
              <span className="font-mono text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold">GPA: 5.00 / 5.00 (2021)</span>
            </div>

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black text-sm font-bold">Junior &amp; Primary Certificates (JSC &amp; PSC)</strong>
                <p className="text-slate-600 dark:text-slate-400 print:text-slate-600">KBA Junior &amp; High School</p>
              </div>
              <span className="font-mono text-sky-600 dark:text-sky-400 print:text-slate-900 font-bold">GPA: 5.00 / 5.00 (2018 &amp; 2015)</span>
            </div>
          </div>
        </section>

        {/* Online Profiles & References */}
        <section className="pt-2 border-t border-slate-200 dark:border-slate-800 print:border-slate-300 text-xs text-slate-600 dark:text-slate-400 print:text-slate-600 flex flex-wrap justify-between items-center gap-2">
          <div>
            <strong>LinkedIn:</strong> linkedin.com/in/mubassher-alam-tanzim-ba436b351
          </div>
          <div>
            <strong>Portfolio:</strong> protfolio-jade-three.vercel.app
          </div>
        </section>

      </div>
    </div>
  );
}
