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
  CheckCircle2,
  Hotel,
  ArrowUpRight,
  Smartphone,
  Wrench,
  Boxes,
  CreditCard,
  Car,
  GraduationCap,
  Calendar,
  BookOpen,
  Bot
} from "lucide-react";

interface SubLink {
  label: string;
  url: string;
  badge?: string;
  icon: any;
}

interface LiveSite {
  id: string;
  title: string;
  category: string;
  platform: string;
  platformColor: string;
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
    }, 2000);
  };

  const liveSites: LiveSite[] = [
    {
      id: "schoolpulse-saas-live",
      title: "SchoolPulse SaaS — Next-Gen School Management Platform",
      category: "EdTech SaaS / Academic Management",
      platform: "Vercel Global Edge",
      platformColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/40",
      status: "Production Live",
      url: "https://ideal-school-portal.vercel.app",
      description:
        "Full-stack web-based school management SaaS platform built with React, Vite, and Tailwind CSS. Features multi-role access (Super Admin, Teacher, Student, Parent, Accountant), interactive visual routine builder with conflict detection, dynamic report card GPA calculator, tuition fee collection ledger, course materials repository, and AI Copilot assistant.",
      image: "/school_pulse_preview.jpg",
      icon: GraduationCap,
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Visual Routine Engine", "AI Copilot"],
      highlights: [
        "Multi-role portal switching: Super Admin, Teacher, Student, Parent & Bursar Accountant",
        "Visual timetable routine builder with conflict detection & course materials distribution",
        "Automated grade reporting & tuition fee invoicing with real-time AI handbook assistant"
      ],
      subLinks: [
        {
          label: "Live Portal",
          url: "https://ideal-school-portal.vercel.app",
          badge: "Main App",
          icon: Globe
        },
        {
          label: "Routine Engine",
          url: "https://ideal-school-portal.vercel.app",
          badge: "Visual",
          icon: Calendar
        },
        {
          label: "Report Cards",
          url: "https://ideal-school-portal.vercel.app",
          badge: "GPA Calc",
          icon: BookOpen
        },
        {
          label: "Tuition Finance",
          url: "https://ideal-school-portal.vercel.app",
          badge: "Billing",
          icon: CreditCard
        },
        {
          label: "AI Copilot",
          url: "https://ideal-school-portal.vercel.app",
          badge: "AI Assistant",
          icon: Bot
        }
      ]
    },
    {
      id: "aura-luxe-ecommerce-live",
      title: "AURA LUXE — High-Performance Luxury E-Commerce Platform",
      category: "Luxury E-Commerce / Multi-Role Marketplace",
      platform: "Vercel Global Edge",
      platformColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/40",
      status: "Production Live",
      url: "https://ecommarce-zeta.vercel.app",
      description:
        "Ultra-modern luxury lifestyle e-commerce platform and multi-role marketplace. Features Root Master admin dashboard, multi-account portal switcher (Seller, VIP Platinum Customer, Master Admin), product specification matrix (titanium chronographs, ANC audio, merino outerwear), dynamic wishlist, slide-over cart drawer, and live order tracking.",
      image: "/aura_luxe_preview.jpg",
      icon: ShoppingBag,
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Cart Drawer", "Multi-Role Admin"],
      highlights: [
        "Multi-portal architecture: Marketplace Root Master Admin, Seller Portal & VIP Customer",
        "High-touch product configurators: titanium chronographs, ANC audio & merino apparel",
        "Real-time slide-over cart, instant checkout simulation & live delivery tracker"
      ],
      subLinks: [
        {
          label: "Shop Storefront",
          url: "https://ecommarce-zeta.vercel.app",
          badge: "Storefront",
          icon: Globe
        },
        {
          label: "Master Admin",
          url: "https://ecommarce-zeta.vercel.app",
          badge: "Root Admin",
          icon: ShieldCheck
        },
        {
          label: "VIP Portal",
          url: "https://ecommarce-zeta.vercel.app",
          badge: "VIP Member",
          icon: Sparkles
        },
        {
          label: "Cart & Checkout",
          url: "https://ecommarce-zeta.vercel.app",
          badge: "Realtime",
          icon: ShoppingBag
        },
        {
          label: "Order Tracking",
          url: "https://ecommarce-zeta.vercel.app",
          badge: "Live Sync",
          icon: MapPin
        }
      ]
    },
    {
      id: "mclaren-3d-showcase",
      title: "McLaren 750S — Interactive 3D WebGL Supercar Showroom",
      category: "Interactive 3D WebGL / Automotive",
      platform: "Vercel Global Edge",
      platformColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
      status: "Production Live",
      url: "https://mclaren-3d-showcase.vercel.app",
      description:
        "Cutting-edge 3D interactive supercar showcase and real-time configurator engineered with Three.js, React Three Fiber, and GSAP. Features 360° orbital camera exploration, dynamic paint and brake caliper customizer, interactive mechanical hotspots (4.0L V8 twin-turbo, carbon monocoque, active rear wing), day/night studio lighting environments, and realistic engine rev audio engine.",
      image: "/mclaren_3d_preview.jpg",
      icon: Car,
      techStack: ["Next.js 14", "React Three Fiber", "Three.js", "GSAP", "Tailwind CSS", "Web Audio API", "GLTF / WebGL"],
      highlights: [
        "Real-time 60FPS 3D McLaren 750S model with physically-based rendering (PBR) metallic finish",
        "Interactive mechanical hotspots: 740HP M840T engine, active aero airbrake & carbon ceramic brakes",
        "Dynamic studio lighting presets (Showroom, Golden Track, Midnight Neon) & custom paint finishes"
      ],
      subLinks: [
        {
          label: "3D Showroom",
          url: "https://mclaren-3d-showcase.vercel.app",
          badge: "WebGL",
          icon: Car
        },
        {
          label: "Paint Configurator",
          url: "https://mclaren-3d-showcase.vercel.app",
          badge: "Realtime",
          icon: Sparkles
        },
        {
          label: "Hotspot Specs",
          url: "https://mclaren-3d-showcase.vercel.app",
          badge: "740 HP",
          icon: Zap
        },
        {
          label: "V8 Sound Engine",
          url: "https://mclaren-3d-showcase.vercel.app",
          badge: "Audio",
          icon: Radio
        }
      ]
    },
    {
      id: "fixpoint-erp-live",
      title: "FixPoint ERP — Mobile Servicing & Workshop OS",
      category: "Enterprise ERP / Mobile Workshop",
      platform: "Vercel Global Edge",
      platformColor: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/40",
      status: "Production Live",
      url: "https://mobileshop-ashen.vercel.app",
      description:
        "Stripe/Linear-grade ERP engineered for smartphone repair workshops. Features front-desk intake with IMEI & 3x3 pattern lock selector, technician kanban workbench, spare parts stock control, POS billing with thermal receipts, and live customer self-service repair tracking.",
      image: "/fixpoint_erp_ai_preview.jpg",
      icon: Smartphone,
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Kanban Engine", "Thermal POS"],
      highlights: [
        "Front Desk intake with 3x3 pattern lock drawer & IMEI inspection",
        "Technician Kanban workbench with 8-point hardware QC checklist"
      ],
      subLinks: [
        {
          label: "Front Desk",
          url: "https://mobileshop-ashen.vercel.app/",
          badge: "Intake",
          icon: Smartphone
        },
        {
          label: "Workbench",
          url: "https://mobileshop-ashen.vercel.app/",
          badge: "Kanban",
          icon: Wrench
        },
        {
          label: "Inventory",
          url: "https://mobileshop-ashen.vercel.app/",
          badge: "Parts",
          icon: Boxes
        },
        {
          label: "POS Billing",
          url: "https://mobileshop-ashen.vercel.app/",
          badge: "Receipts",
          icon: CreditCard
        },
        {
          label: "Live Tracking",
          url: "https://mobileshop-ashen.vercel.app/?track=FP-8492",
          badge: "Realtime",
          icon: Globe
        }
      ]
    },
    {
      id: "pet-care-live",
      title: "Pet Care & Veterinary Platform",
      category: "Veterinary / E-Commerce",
      platform: "Railway Production Cloud",
      platformColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
      status: "Production Live",
      url: "https://pets-care-web-production.up.railway.app",
      description:
        "Full-scale veterinary portal featuring animal adoption, pet supplies shop, customer authentication, and real-time medical & appointment tracking.",
      image: "/pet_care_ai_preview.jpg",
      icon: Heart,
      techStack: ["Railway Cloud", "PHP / MySQL", "Shop POS", "Live Tracking"],
      highlights: [
        "Pet adoption portal & pet food e-commerce catalog",
        "Live tracking for treatment & delivery status"
      ],
      subLinks: [
        {
          label: "Home Page",
          url: "https://pets-care-web-production.up.railway.app/",
          badge: "Main",
          icon: Globe
        },
        {
          label: "Pet Shop",
          url: "https://pets-care-web-production.up.railway.app/shop.html",
          badge: "Store",
          icon: ShoppingBag
        },
        {
          label: "Adoption",
          url: "https://pets-care-web-production.up.railway.app/adoption.html",
          badge: "Rescue",
          icon: Heart
        },
        {
          label: "Login",
          url: "https://pets-care-web-production.up.railway.app/login.html",
          badge: "Auth",
          icon: LogIn
        },
        {
          label: "Order Track",
          url: "https://pets-care-web-production.up.railway.app/track.html",
          badge: "Realtime",
          icon: MapPin
        }
      ]
    },
    {
      id: "mamun-restaurant-live",
      title: "Mamun Restaurant & Hotel",
      category: "Enterprise Hospitality Suite",
      platform: "OnRender Production Cloud",
      platformColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/40",
      status: "Production Cloud",
      url: "https://mamun-restaurant.onrender.com",
      description:
        "Production enterprise hotel & restaurant management portal with real-time suite bookings, dining table reservations, kitchen POS, and VIP admin suite.",
      image: "/mamun_hotel_ai_preview.jpg",
      icon: Hotel,
      techStack: ["Laravel 10 PHP", "MySQL DB", "Admin Dashboard", "Kitchen POS"],
      highlights: [
        "Executive VIP admin dashboard with revenue analytics",
        "Direct Android APK download & high-res banquet gallery"
      ],
      subLinks: [
        {
          label: "Main Website",
          url: "https://mamun-restaurant.onrender.com",
          badge: "Portal",
          icon: Globe
        },
        {
          label: "Admin Panel",
          url: "https://mamun-restaurant.onrender.com/admin",
          badge: "VIP Admin",
          icon: ShieldCheck
        },
        {
          label: "APK Download",
          url: "https://mamun-restaurant.onrender.com/download",
          badge: "Android App",
          icon: Download
        },
        {
          label: "Photo Gallery",
          url: "https://mamun-restaurant.onrender.com/gallery",
          badge: "Media",
          icon: ImageIcon
        },
        {
          label: "GitHub Code",
          url: "https://github.com/tanzim557/mamun-restaurant",
          badge: "Source",
          icon: Code2
        }
      ]
    },
    {
      id: "hotel-hisab-live",
      title: "Hotel & Restaurant Hisab (POS)",
      category: "Cloud Accounting & POS",
      platform: "Vercel Global Edge",
      platformColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
      status: "Global Edge Live",
      url: "https://web-sand-psi-12.vercel.app",
      description:
        "High-performance cloud accounting, real-time customer baki (credit) ledger, dining billing POS, and room ledger app optimized for sub-millisecond edge execution.",
      image: "/hotel_hisab_ai_preview.jpg",
      icon: Zap,
      techStack: ["Vercel Edge", "React / Next.js", "Cloud Khata", "POS Billing"],
      highlights: [
        "Instant room bill calculation with auto VAT & receipts",
        "Customer Baki (credit) tracking ledger with cloud sync"
      ],
      subLinks: [
        {
          label: "Open Live Web App",
          url: "https://web-sand-psi-12.vercel.app",
          badge: "Live App",
          icon: ExternalLink
        }
      ]
    }
  ];

  return (
    <section id="live-websites" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#060913] transition-colors">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold tracking-wider shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5" />
            <span>CLOUD DEPLOYMENTS • 100% OPERATIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Live Running <span className="gradient-text">Websites &amp; Portals</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Click any live system below to explore production databases, client portals, real-time POS billing, and live cloud APIs.
          </p>
        </div>

        {/* Premium Production Deployments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {liveSites.map((site) => {
            const SiteIcon = site.icon;
            const isMainCopied = copiedUrl === site.url;

            return (
              <div
                key={site.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500/50 dark:hover:border-sky-500/40 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Top: Browser Window Frame & AI Preview Image */}
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                    {/* Simulated Browser Navigation Bar */}
                    <div className="absolute top-0 left-0 right-0 z-20 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 truncate max-w-[190px]">
                        {site.url.replace("https://", "")}
                      </span>
                      <div className="w-4" />
                    </div>

                    {/* AI Preview Image */}
                    <img
                      src={site.image}
                      alt={site.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pt-7"
                    />

                    {/* Floating Status Badges */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border backdrop-blur-md shadow-sm ${site.platformColor}`}>
                        {site.platform}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{site.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    {/* Category & Title */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <SiteIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">
                          {site.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {site.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
                        {site.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {site.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono border border-slate-200 dark:border-slate-700/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Direct Sub-Page Portals (Compact, Crisp, Clickable) */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-sky-500" />
                          <span>Direct Pages ({site.subLinks.length}):</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400">
                          Direct links ↗
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2.5">
                        {site.subLinks.map((sub, sIdx) => {
                          const SubIcon = sub.icon;
                          const isSubCopied = copiedUrl === sub.url;

                          return (
                            <a
                              key={sIdx}
                              href={sub.url}
                              target="_blank"
                              rel="noreferrer"
                              className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-sky-500/20 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300 border border-slate-200 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-500/40 text-xs font-semibold transition-all"
                              title={`Open ${sub.label}`}
                            >
                              <SubIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 group-hover/pill:scale-110 transition-transform" />
                              <span>{sub.label}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/pill:opacity-100" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center gap-2">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md hover:scale-[1.02] transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Open Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    onClick={() => copyToClipboard(site.url)}
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
                    title="Copy Main URL"
                  >
                    {isMainCopied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Verification Callout */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-center max-w-2xl mx-auto space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            ⚡ <span className="font-bold text-sky-600 dark:text-sky-400">Production Verified:</span> All databases, cloud tunnels, and microservices for these sites are running 24/7. You can test live room check-ins, place food orders, or audit ledger transactions.
          </p>
        </div>

      </div>
    </section>
  );
}
