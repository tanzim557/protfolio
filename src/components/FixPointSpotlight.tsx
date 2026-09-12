"use client";

import { useState } from "react";
import {
  Smartphone,
  Wrench,
  Boxes,
  CreditCard,
  Globe,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Radio,
  Layers,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Maximize2
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FixPointSpotlight() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);

  const mainUrl = "https://mobileshop-ashen.vercel.app";
  const trackingUrl = "https://mobileshop-ashen.vercel.app/?track=FP-8492";

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const roles = [
    {
      id: "intake",
      title: "Front Desk & Intake",
      icon: Smartphone,
      badge: "Intake Station",
      headline: "Intelligent IMEI Intake & Android Pattern Lock Picker",
      description:
        "Front-desk ticketing with device IMEI verification, physical cosmetic damage matrix (scratches, cracks, liquid indicators), and an interactive 3x3 pattern lock selector for pattern-locked Android devices.",
      keyPoints: [
        "Interactive 3x3 Android Pattern Lock & PIN gesture recorder",
        "Cosmetic inspection condition matrix (Screen, housing, water damage)",
        "Instant ESC/POS & 80mm thermal service tag printing with barcode & QR",
        "Automated customer VIP status recognition & SMS notification trigger",
      ],
      deepLink: "https://mobileshop-ashen.vercel.app/",
      ctaText: "Launch Front Desk Intake",
    },
    {
      id: "technician",
      title: "Technician Workbench",
      icon: Wrench,
      badge: "Kanban Bench",
      headline: "Multi-Stage Kanban Repair Board & 8-Point QC Matrix",
      description:
        "Engineered for hardware bench technicians. Features drag-and-drop repair stages, live parts requisition from inventory, micro-soldering job notes, and mandatory 8-point hardware verification prior to release.",
      keyPoints: [
        "5-Stage Kanban Workflow: Diagnosing → Parts Awaited → Repairing → QC → Ready",
        "8-Point Hardware QC checklist (Touch, Battery, Cameras, Audio, Biometrics)",
        "One-click spare part requisition with automated stock subtraction",
        "Technician performance metrics, diagnostic notes & repair history logs",
      ],
      deepLink: "https://mobileshop-ashen.vercel.app/",
      ctaText: "Open Technician Workbench",
    },
    {
      id: "inventory",
      title: "Parts Inventory",
      icon: Boxes,
      badge: "Stock Engine",
      headline: "Real-Time Spare Parts Stock & Supplier Catalog",
      description:
        "Complete spare parts warehouse management with model compatibility matching, low-stock threshold alerts, warehouse bin routing, and automated profit margin calculations.",
      keyPoints: [
        "Component filtering across Displays, Batteries, Cameras, ICs & Flex cables",
        "Device compatibility matrix (iPhone 15 Pro, S24 Ultra, Pixel 8 Pro, OnePlus 12)",
        "Automated low-stock threshold alerts with supplier reorder triggers",
        "Warehouse bin location tracking (A-12, B-04, IC-09) for rapid retrieval",
      ],
      deepLink: "https://mobileshop-ashen.vercel.app/",
      ctaText: "Explore Parts Inventory",
    },
    {
      id: "pos",
      title: "POS Billing & Invoices",
      icon: CreditCard,
      badge: "Thermal POS",
      headline: "Dynamic Billing Engine & Printable Tax Receipts",
      description:
        "Comprehensive retail billing calculating labor costs, part costs, state tax rates, and diagnostic fee waivers. Generates clean thermal customer invoices with 90-day FixPoint warranty terms.",
      keyPoints: [
        "Automated invoice totaling: Labor + Parts - Discounts + Configurable Tax",
        "Flexible deposit tracking, partial payments, cash, card & mobile banking",
        "One-click thermal invoice receipt printing with printable CSS layout",
        "FixPoint Shield warranty terms embedding with unique warranty tokens",
      ],
      deepLink: "https://mobileshop-ashen.vercel.app/",
      ctaText: "View POS Billing Terminal",
    },
    {
      id: "tracking",
      title: "Live Customer Portal",
      icon: Globe,
      badge: "Realtime Portal",
      headline: "Live Deep-Linked Self-Service Repair Tracking",
      description:
        "Customers can check the exact live status of their phone repair anywhere in the world by scanning the QR code on their service tag or entering ticket ID FP-8492 into the public tracking portal.",
      keyPoints: [
        "Deep-linkable URL schema (?track=FP-8492) auto-loads customer ticket",
        "Real-time visual timeline showing diagnostic, repair & QC milestones",
        "Assigned lead technician details with verified specialty & rating badge",
        "Itemized cost breakdown preview with estimated pickup countdown",
      ],
      deepLink: trackingUrl,
      ctaText: "Test Live Ticket: FP-8492",
    },
  ];

  const currentRole = roles[activeTab];

  return (
    <section
      id="fixpoint-spotlight"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#070b19] to-slate-950 text-white border-y border-sky-500/20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Spotlight Top Eyebrow & Badges */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 border border-sky-500/40 text-sky-300 text-xs font-mono font-bold tracking-wider shadow-[0_0_25px_rgba(56,189,248,0.25)] animate-pulse-glow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>FLAGSHIP SHOWCASE • 2026 ENTERPRISE SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
            FixPoint ERP <br />
            <span className="gradient-text drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              Mobile Servicing &amp; Workshop OS
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            A high-performance, Stripe/Linear-grade operating system engineered for smartphone repair workshops, hardware diagnostic labs, and retail service chains. Complete with live customer repair tracking, IMEI intake, technician kanban, parts inventory, and POS billing.
          </p>

          {/* Quick Primary Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <a
              href={mainUrl}
              target="_blank"
              rel="noreferrer"
              className="shimmer-btn flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:scale-[1.03] transition-transform duration-200"
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Launch Live Website</span>
              <ExternalLink className="w-4 h-4 text-white opacity-80" />
            </a>

            <a
              href={trackingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/10 transition-all"
            >
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Test Live Ticket: FP-8492</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => copyLink(mainUrl)}
              className="flex items-center gap-2 px-4.5 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors text-xs font-semibold cursor-pointer"
              title="Copy Live URL"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="font-mono">Copy Link</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/tanzim557/mobileshop"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Feature Role Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex p-1.5 rounded-2xl bg-slate-950/80 border border-sky-500/30 backdrop-blur-xl shadow-2xl">
            {roles.map((role, idx) => {
              const RoleIcon = role.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-[1.02]"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <RoleIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-sky-400"}`} />
                  <span>{role.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Showcase Centerpiece: Browser Frame & Dynamic Tab Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Simulated Browser Window with AI Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-sky-500/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] flex-1 flex flex-col group">
              
              {/* Simulated Browser Navigation Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-sky-500/20 backdrop-blur-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                </div>

                {/* Simulated SSL Address Bar */}
                <div className="flex-1 max-w-md mx-auto px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-emerald-400 font-bold">https://</span>
                    <span className="truncate">mobileshop-ashen.vercel.app</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-bold">
                    SSL 256-BIT
                  </span>
                </div>

                <a
                  href={mainUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Open in new window"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
              </div>

              {/* High-Resolution Dashboard Preview Image */}
              <div className="relative flex-1 overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-auto">
                <img
                  src="/fixpoint_erp_ai_preview.jpg"
                  alt="FixPoint ERP Operating System"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Metric Overlay Badges */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-bold backdrop-blur-md shadow-lg flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span>Vercel Global Edge &bull; &lt;50ms TTFB</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>8-Point Hardware QC Verified</span>
                  </span>

                  <span className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>FixPoint Shield 90-Day Warranty</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Dynamic Role Details & Live Action Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-sky-500/30 backdrop-blur-xl shadow-2xl">
            
            {/* Header of Active Tab */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
                  {currentRole.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Interactive Mode
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                {currentRole.headline}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {currentRole.description}
              </p>
            </div>

            {/* Key Technical Bullets */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider block">
                Technical Highlights:
              </span>
              <div className="space-y-2">
                {currentRole.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Pill Tags */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">
                Tech Stack Architecture:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["React 19", "TypeScript", "Vite 8", "Tailwind CSS", "Lucide Icons", "QR / Barcode", "Thermal ESC/POS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-sky-300 text-[11px] font-mono border border-sky-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA Button for Active Role */}
            <div className="pt-2">
              <a
                href={currentRole.deepLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.02] transition-transform"
              >
                <span>{currentRole.ctaText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom 4-Column Architectural Power Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors space-y-2">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Sub-Millisecond Edge</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineered with React 19 and Vite 8 for instantaneous view transitions and zero client latency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-2">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">6 Unified Roles</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Front Desk, Technician, Inventory, POS Billing, Analytics, and Customer Portal in a single SPA.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">3x3 Pattern Lock Intake</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Native gesture pattern capture allowing technicians to unlock and test serviced Android phones.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors space-y-2">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Live Tracking &amp; QR</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Printable thermal stickers with QR codes for customers to track real-time repair progress online.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
