"use client";

import { useState } from "react";
import {
  Globe,
  ExternalLink,
  Copy,
  Check,
  Radio,
  ShoppingBag,
  Heart,
  LogIn,
  MapPin,
  ShieldCheck,
  Download,
  Image as ImageIcon,
  Code2,
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  Hotel
} from "lucide-react";

interface SubLink {
  label: string;
  url: string;
  badge?: string;
  icon: any;
  desc?: string;
}

interface LiveSite {
  id: string;
  title: string;
  category: string;
  hostBadge: string;
  hostColor: string;
  status: string;
  url: string;
  description: string;
  image: string;
  icon: any;
  techStack: string[];
  subLinks: SubLink[];
  highlights: string[];
}

export default function LiveWebsites() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 2200);
  };

  const liveSites: LiveSite[] = [
    {
      id: "pet-care-live",
      title: "Pet Care & Veterinary Platform",
      category: "Veterinary / E-Commerce",
      hostBadge: "Cloudflare Live Tunnel",
      hostColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
      status: "Operational • High Availability",
      url: "https://delaware-parents-celebrity-sorts.trycloudflare.com",
      description:
        "Full-scale live veterinary hospital and pet care platform featuring animal rescue & adoption, online pet supply store, member authentication, and live service appointment & order tracking.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80",
      icon: Heart,
      techStack: [
        "Cloudflare Tunnel",
        "PHP & MySQL",
        "Pet Shop POS",
        "Adoption Engine",
        "Live Tracker",
        "JavaScript ES6"
      ],
      highlights: [
        "🐾 Pet Adoption Portal with animal profiles & rescue records",
        "🛍️ Pet Shop e-commerce catalog with cart & checkout",
        "📍 Live Tracking for medical treatments & product shipping",
        "🔐 Secure Member & Clinic Staff login authentication"
      ],
      subLinks: [
        {
          label: "Home Page",
          url: "https://delaware-parents-celebrity-sorts.trycloudflare.com/",
          badge: "Main",
          icon: Globe,
          desc: "Full veterinary showcase & clinic booking"
        },
        {
          label: "Pet Shop (Store)",
          url: "https://delaware-parents-celebrity-sorts.trycloudflare.com/shop.html",
          badge: "E-Commerce",
          icon: ShoppingBag,
          desc: "Food, toys, accessories & health care products"
        },
        {
          label: "Pet Adoption",
          url: "https://delaware-parents-celebrity-sorts.trycloudflare.com/adoption.html",
          badge: "Adoption",
          icon: Heart,
          desc: "Rescue pet profiles & instant adoption forms"
        },
        {
          label: "Login Page",
          url: "https://delaware-parents-celebrity-sorts.trycloudflare.com/login.html",
          badge: "Auth",
          icon: LogIn,
          desc: "Client portal & veterinarian staff credentials"
        },
        {
          label: "Live Order Tracking",
          url: "https://delaware-parents-celebrity-sorts.trycloudflare.com/track.html",
          badge: "Realtime",
          icon: MapPin,
          desc: "Order dispatch & medical appointment telemetry"
        }
      ]
    },
    {
      id: "mamun-restaurant-live",
      title: "Mamun Restaurant & Hotel (Laravel Cloud)",
      category: "Enterprise Hospitality Suite",
      hostBadge: "OnRender Production Cloud",
      hostColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
      status: "Online • Production Active",
      url: "https://mamun-restaurant.onrender.com",
      description:
        "Full-stack production enterprise hotel & restaurant management portal with real-time suite booking, dining table reservation, food ordering POS, photo gallery, and executive admin management suite.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      icon: Hotel,
      techStack: [
        "Laravel 10 PHP",
        "Render Cloud",
        "MySQL DB",
        "Admin Suite",
        "Blade Engine",
        "Kitchen POS"
      ],
      highlights: [
        "👑 Dedicated Executive Admin Panel with financial oversight",
        "📱 Android APK Download Hub for waitstaff & managers",
        "🖼️ Interactive Restaurant & Hotel Photo Gallery",
        "💻 Open-source GitHub repository with full architecture"
      ],
      subLinks: [
        {
          label: "Main Website",
          url: "https://mamun-restaurant.onrender.com",
          badge: "Portal",
          icon: Globe,
          desc: "Room booking, table booking & dining menu"
        },
        {
          label: "Admin Panel",
          url: "https://mamun-restaurant.onrender.com/admin",
          badge: "VIP Admin",
          icon: ShieldCheck,
          desc: "Sales revenue, room inventory & staff manager"
        },
        {
          label: "Android APK Download",
          url: "https://mamun-restaurant.onrender.com/download",
          badge: "Mobile App",
          icon: Download,
          desc: "One-tap direct APK download for Android phones"
        },
        {
          label: "Restaurant Gallery",
          url: "https://mamun-restaurant.onrender.com/gallery",
          badge: "Media",
          icon: ImageIcon,
          desc: "High-resolution banquet, hotel & food gallery"
        },
        {
          label: "GitHub Source Code",
          url: "https://github.com/tanzim557/mamun-restaurant",
          badge: "Repository",
          icon: Code2,
          desc: "Full Laravel codebase & database migrations"
        }
      ]
    },
    {
      id: "hotel-hisab-live",
      title: "Hotel & Restaurant Hisab (Khata / POS)",
      category: "Cloud Accounting & POS",
      hostBadge: "Vercel Global Edge",
      hostColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      status: "Ultra-Fast Edge • 99.99% Uptime",
      url: "https://web-sand-psi-12.vercel.app",
      description:
        "High-performance cloud accounting, real-time customer baki (credit) ledger, dining billing POS, and room ledger app optimized for sub-millisecond execution on Vercel's global edge network.",
      image: "/hotel_app_open.png",
      icon: Zap,
      techStack: [
        "Vercel Edge",
        "React / Next.js",
        "Cloud POS",
        "Credit Ledger",
        "Instant Sync",
        "Mobile-Ready"
      ],
      highlights: [
        "⚡ Instant room bill generation with automatic VAT & discounts",
        "💰 Customer Baki (credit) tracking ledger with ledger audit",
        "🍽️ Restaurant POS order management with table selection",
        "☁️ Automated cloud sync across multiple staff devices"
      ],
      subLinks: [
        {
          label: "Launch Live Web App",
          url: "https://web-sand-psi-12.vercel.app",
          badge: "Live App",
          icon: ExternalLink,
          desc: "Direct access to real-time Khata & POS web application"
        }
      ]
    }
  ];

  return (
    <section id="live-websites" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-[#060913]/90 transition-colors">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold tracking-wider shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5" />
            <span>PRODUCTION DEPLOYMENTS • 100% LIVE WEBSITES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Live Running <span className="gradient-text">Websites &amp; Portals</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Experience my live cloud deployments in action. Each system below is currently hosted on Cloudflare, OnRender, or Vercel with active databases, authentication, and live APIs.
          </p>
        </div>

        {/* Live Systems Grid */}
        <div className="space-y-12">
          {liveSites.map((site) => {
            const SiteIcon = site.icon;
            const isCopied = copiedUrl === site.url;

            return (
              <div
                key={site.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Visual Showcase & Status (5 cols) */}
                  <div className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between overflow-hidden min-h-[300px] lg:min-h-[460px]">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />

                    {/* Top Floating Badges */}
                    <div className="relative p-6 flex items-center justify-between z-10 flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${site.hostColor}`}>
                        {site.hostBadge}
                      </span>

                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-semibold backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{site.status}</span>
                      </div>
                    </div>

                    {/* Bottom Visual Info */}
                    <div className="relative p-6 sm:p-8 z-10 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/15">
                          <SiteIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                          {site.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {site.title}
                      </h3>

                      {/* Primary Action Button to Launch Main Site */}
                      <div className="pt-2 flex items-center gap-2 flex-wrap">
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-extrabold text-xs shadow-lg hover:scale-[1.03] transition-transform"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Open Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                        </a>

                        <button
                          onClick={() => copyToClipboard(site.url)}
                          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium border border-white/15 backdrop-blur-md transition-colors"
                          title="Copy Website URL"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-300" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Details & Direct Page Links (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/60">
                    
                    {/* Top: Description & Tech Tags */}
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {site.description}
                      </p>

                      {/* Architecture Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {site.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {site.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-[11px] font-mono border border-sky-200 dark:border-sky-800/50 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Direct Sub-Page / Deep Links Section */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/90 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                          <span>Direct Page Links &amp; Portals ({site.subLinks.length}):</span>
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          Click to open directly ↗
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {site.subLinks.map((sub, sIdx) => {
                          const SubIcon = sub.icon;
                          const isSubCopied = copiedUrl === sub.url;

                          return (
                            <div
                              key={sIdx}
                              className="group/link flex items-center justify-between p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 hover:bg-sky-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-sky-500/50 transition-all duration-200 shadow-sm"
                            >
                              <a
                                href={sub.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 flex-1 min-w-0"
                              >
                                <div className="p-2 rounded-xl bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border border-slate-200 dark:border-slate-700 group-hover/link:bg-sky-600 group-hover/link:text-white transition-colors shrink-0">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover/link:text-sky-600 dark:group-hover/link:text-sky-400">
                                      {sub.label}
                                    </span>
                                    {sub.badge && (
                                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  {sub.desc && (
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                                      {sub.desc}
                                    </p>
                                  )}
                                </div>
                              </a>

                              <div className="flex items-center gap-1 pl-2 shrink-0">
                                <button
                                  onClick={() => copyToClipboard(sub.url)}
                                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                  title="Copy direct URL"
                                >
                                  {isSubCopied ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                                <a
                                  href={sub.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                  title="Open in new tab"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Verification Callout */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-center max-w-3xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            💡 <span className="font-bold text-sky-600 dark:text-sky-400">Recruiter &amp; Evaluator Notice:</span> All credentials, databases, and microservices for these sites are running actively in production. You can test customer logins, make live orders, or inspect API responses directly.
          </p>
        </div>

      </div>
    </section>
  );
}
