"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // 2-second progress animation (0% to 100% in 2000ms)
    const startTime = Date.now();
    const duration = 2000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        setFadeOut(true);
        // Remove after fade-out transition (400ms)
        setTimeout(() => {
          setHidden(true);
        }, 450);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-label="Loading Mubassher Alam Tanzim Portfolio"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#060913] transition-all duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient Pulsing Glow Orbs */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/20 dark:bg-sky-500/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow delay-300" />

      {/* Center Live Animated Logo Container */}
      <div className="relative flex flex-col items-center z-10 px-4 text-center">
        
        {/* Animated Glowing Ring & Logo Frame */}
        <div className="relative group mb-6">
          {/* Outer Pulsing & Rotating Gradient Aura */}
          <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 blur-xl opacity-80 animate-pulse-glow" />
          
          {/* Rotating Gradient Border Frame */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 shadow-[0_0_40px_rgba(56,189,248,0.5)] flex items-center justify-center animate-float">
            <div className="w-full h-full rounded-[22px] bg-white dark:bg-slate-950 flex items-center justify-center p-2.5 overflow-hidden shadow-inner">
              <img
                src="/mat-logo.jpg"
                alt="Mubassher Alam Tanzim Logo"
                className="w-full h-full object-contain filter contrast-125 brightness-105 transition-transform duration-700 animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Brand Name & Executive Subtitle */}
        <div className="space-y-1 mb-6">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
            MUBASSHER <span className="gradient-text font-black">TANZIM</span>
          </h1>
          <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-sky-600 dark:text-sky-400 uppercase">
            Full-Stack Software Architect
          </p>
        </div>

        {/* 2-Second Animated Progress Bar */}
        <div className="w-56 sm:w-72 space-y-2">
          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden border border-slate-300/60 dark:border-slate-700/60 p-[1px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
              </span>
              <span>Loading Architecture...</span>
            </span>
            <span className="font-bold text-sky-600 dark:text-sky-400">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
