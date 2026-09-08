"use client";

import { ArrowUp, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Heart, FileText } from "lucide-react";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const facebookUrl = "https://www.facebook.com/share/1Cp6uLcBJF/";
  const linkedinUrl = "https://www.linkedin.com/in/mubassher-alam-tanzim-ba436b351?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const rawPhoneNumber = "01911083557";
  const emailAddress = "mubassher.tanzim@gmail.com";

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 pt-16 pb-12 border-t border-slate-200 dark:border-slate-900 text-slate-700 dark:text-slate-300 overflow-hidden transition-colors">
      {/* Top Ambient Glow Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 3-Column Footer Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3.5 group/logo">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 blur-lg opacity-80 group-hover/logo:opacity-100 animate-pulse-glow" />
                <div className="relative w-12 h-12 rounded-2xl p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(56,189,248,0.5)] overflow-hidden animate-float">
                  <div className="w-full h-full rounded-[12px] bg-slate-950/90 overflow-hidden flex items-center justify-center p-0.5">
                    <img
                      src="/mat-logo.jpg"
                      alt="MAT Logo"
                      className="w-full h-full object-contain filter contrast-125 brightness-110 group-hover/logo:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  MUBASSHER <span className="gradient-text">ALAM TANZIM</span>
                </span>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold tracking-wider">
                  FULL-STACK &amp; IOT SOFTWARE ARCHITECT
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Building production-grade web systems, IoT telemetry platforms, and full-stack solutions with Next.js, Laravel, Python, and ESP32 hardware.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-mono text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              Navigation Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="/resume" target="_blank" rel="noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400 text-sky-600 dark:text-sky-400 font-extrabold transition-colors flex items-center gap-2">
                  <span>›</span> Official Formal Resume (CV) 📄
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-sky-500">›</span> About Myself
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-sky-500">›</span> Academic Education (BSc CSE)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-sky-500">›</span> Featured Codebases &amp; IoT Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-sky-500">›</span> Technical Skill Matrix
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-sky-500">›</span> Contact &amp; Hire Me
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-mono text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              Direct Contact &amp; Networks
            </h4>

            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`tel:${rawPhoneNumber}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-slate-900 dark:text-white font-semibold transition-all group shadow-sm"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Phone / Call: {rawPhoneNumber}</span>
              </a>

              <a
                href={`https://wa.me/8801911083557`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-slate-900 dark:text-white font-semibold transition-all group shadow-sm"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <span>WhatsApp Message Direct</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
              >
                <FacebookIcon className="w-4 h-4 text-blue-500" />
                <span>Facebook</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-sky-600/20 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-900 dark:text-white font-bold">MUBASSHER ALAM TANZIM</strong>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-400 transition-all shadow-lg text-xs font-semibold"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
