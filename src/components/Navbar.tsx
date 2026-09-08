"use client";

import { useState, useEffect } from "react";
import { Code, User, Cpu, Mail, Menu, X, GraduationCap, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 dark:bg-[#060913]/90 backdrop-blur-xl py-3 shadow-md dark:shadow-2xl border-b border-slate-200/90 dark:border-sky-500/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* Animated Custom MAT Monogram Logo (Left) */}
        <a href="#" className="flex items-center gap-3.5 group/logo">
          <div className="relative flex items-center justify-center">
            {/* Ambient Neon Pulse Halo */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 blur-lg opacity-70 group-hover/logo:opacity-100 animate-pulse-glow" />
            
            {/* High-Contrast Floating Frame for MAT Logo */}
            <div className="relative w-12 h-12 rounded-2xl p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(56,189,248,0.4)] overflow-hidden animate-float">
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
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover/logo:text-sky-600 dark:group-hover/logo:text-sky-300 transition-colors flex items-center gap-1.5">
              MUBASSHER <span className="gradient-text font-black">TANZIM</span>
            </span>
            <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-extrabold tracking-widest">
              FULL STACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links — Crisp & Formal in both light and dark */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/85 p-1.5 rounded-full border border-slate-200/90 dark:border-sky-500/30 backdrop-blur-xl shadow-md dark:shadow-[0_0_25px_rgba(56,189,248,0.15)] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white hover:bg-sky-50 dark:hover:bg-sky-500/20 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle, Direct Resume Link & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-md hover:scale-105 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Resume / CV</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {link.name}
                </a>
              );
            })}

            <a
              href="/resume"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-extrabold bg-gradient-to-r from-sky-600 to-indigo-600 text-white mt-2 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Print Formal Resume (CV)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
