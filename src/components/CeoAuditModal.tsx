"use client";

import { useState } from "react";
import { X, Award, CheckCircle2, Star, Zap, Send, Sparkles, ShieldAlert, FileText, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface CeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CeoAuditModal({ isOpen, onClose }: CeoAuditModalProps) {
  const [hired, setHired] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Senior Full-Stack Engineer");
  const [companyName, setCompanyName] = useState("");
  const [ceoName, setCeoName] = useState("");

  if (!isOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#8b5cf6", "#10b981", "#fbbf24"],
      });
    } catch {
      // Fallback
    }
  };

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHired(true);
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-sky-500/30 p-6 sm:p-8 my-8 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!hired ? (
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono tracking-wider text-amber-400 font-semibold uppercase">
                Executive CEO Hiring Audit &amp; Scorecard
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why CEOs Hire <span className="gradient-text">Mubassher Alam Tanzim</span>
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Automated executive review evaluating engineering velocity, system scalability, and technical leadership.
            </p>

            {/* CEO Audit Rating Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              
              <div className="glass-card rounded-2xl p-4 flex flex-col justify-between border-emerald-500/30">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                  <span>OVERALL RECOMMENDATION</span>
                  <Star className="w-4 h-4 fill-emerald-400" />
                </div>
                <div className="my-2">
                  <span className="text-3xl font-extrabold text-white">99.8%</span>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">INSTANT HIRE RATING</p>
                </div>
                <p className="text-[11px] text-slate-400">Top 1% candidate readiness for fast-paced engineering teams.</p>
              </div>

              <div className="glass-card rounded-2xl p-4 flex flex-col justify-between border-sky-500/30">
                <div className="flex items-center justify-between text-xs text-sky-400 font-mono">
                  <span>FULL STACK SPEED</span>
                  <Zap className="w-4 h-4 text-sky-400" />
                </div>
                <div className="my-2">
                  <span className="text-3xl font-extrabold text-white">10x</span>
                  <p className="text-xs text-sky-400 font-semibold mt-1">DEVELOPMENT VELOCITY</p>
                </div>
                <p className="text-[11px] text-slate-400">Ships clean React/Next.js UI &amp; Node/Python APIs at high speed.</p>
              </div>

              <div className="glass-card rounded-2xl p-4 flex flex-col justify-between border-purple-500/30">
                <div className="flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>RELIABILITY &amp; OPS</span>
                  <ShieldAlert className="w-4 h-4 text-purple-400" />
                </div>
                <div className="my-2">
                  <span className="text-3xl font-extrabold text-white">99.9%</span>
                  <p className="text-xs text-purple-400 font-semibold mt-1">UPTIME ARCHITECTURE</p>
                </div>
                <p className="text-[11px] text-slate-400">Built for Vercel, Docker, AWS cloud &amp; microservice stability.</p>
              </div>

            </div>

            {/* Checklist of Core Strengths */}
            <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 my-4 space-y-2">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Executive Audit Breakdown:
              </h3>
              {[
                "Architects complete web apps from frontend UI to backend DB & deployment.",
                "Writes self-documenting, maintainable TypeScript, Python & SQL code.",
                "Fast adoption of AI APIs, WebSockets, Redis, microservices & modern stack.",
                "Strong product mindset — optimizes user experience and conversion metrics.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Interactive Hire Form */}
            <form onSubmit={handleHireSubmit} className="mt-6 pt-6 border-t border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Simulate CEO Hiring Decision &amp; Generate Job Offer
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Tech Corp / Stripe"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Your Name (CEO / Executive)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson (CEO)"
                    value={ceoName}
                    onChange={(e) => setCeoName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Select Target Role for Tanzim</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Senior Full-Stack Engineer",
                    "Lead Frontend Architect",
                    "Backend Systems Engineer",
                    "AI Web Application Engineer",
                  ].map((role) => (
                    <button
                      type="button"
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                        selectedRole === role
                          ? "bg-sky-500/20 border-sky-400 text-sky-300"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span>{role}</span>
                      {selectedRole === role && <Check className="w-3.5 h-3.5 text-sky-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white font-medium"
                >
                  Close Audit
                </button>
                <button
                  type="submit"
                  className="shimmer-btn flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Issue Job Offer to Tanzim</span>
                </button>
              </div>
            </form>

          </div>
        ) : (
          /* Hired Celebration Screen */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              Official Job Offer Generated! 🎉
            </h2>

            <div className="glass-card rounded-2xl p-6 text-left border-sky-500/30 max-w-xl mx-auto space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-2 text-sky-400 font-bold">
                <span>OFFER LETTER DETAILS</span>
                <span>STATUS: VERIFIED</span>
              </div>
              <p><strong>Candidate:</strong> Mubassher Alam Tanzim</p>
              <p><strong>Executive CEO:</strong> {ceoName || "Company CEO"}</p>
              <p><strong>Company:</strong> {companyName || "Top Tech Enterprise"}</p>
              <p><strong>Offered Role:</strong> {selectedRole}</p>
              <p className="text-emerald-400"><strong>Assessment Result:</strong> Passed with Exceptional Distinction (100% Fit)</p>
            </div>

            <p className="text-slate-300 text-sm">
              Mubassher Alam Tanzim has received your simulation offer! Thank you for reviewing the portfolio.
            </p>

            <div className="flex justify-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>Contact Tanzim Directly</span>
              </a>
              <button
                onClick={() => setHired(false)}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:text-white"
              >
                Back to Scorecard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
