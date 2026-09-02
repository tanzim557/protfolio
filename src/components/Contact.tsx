"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, WhatsappIcon } from "@/components/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "mubassher.tanzim@gmail.com";
  const rawPhoneNumber = "01911083557";
  const formattedPhone = "+880 1911-083557";
  const facebookUrl = "https://www.facebook.com/share/1Cp6uLcBJF/";
  const linkedinUrl = "https://www.linkedin.com/in/mubassher-alam-tanzim-ba436b351?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(rawPhoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Connect with <span className="gradient-text">Mubassher Alam Tanzim</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Interested in hiring Tanzim for a full stack developer role, project collaboration, or tech consultation? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact Info</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Available for full-time software engineering roles, lead development contracts, and technical consulting worldwide.
              </p>

              {/* Direct Phone / Call Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Mobile / WhatsApp</span>
                    <a href={`tel:${rawPhoneNumber}`} className="text-sm font-extrabold text-white hover:text-emerald-400 transition-colors">
                      {rawPhoneNumber} ({formattedPhone})
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/8801911083557`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white transition-colors"
                    title="WhatsApp Chat"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Email Address</span>
                    <a href={`mailto:${emailAddress}`} className="text-xs font-semibold text-white hover:text-sky-400 transition-colors">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Links Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Official Profiles:</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-all"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-500" />
                    <span>Facebook Profile</span>
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-sky-600/20 border border-slate-800 hover:border-sky-500/50 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Instant Phone &amp; WhatsApp Response Active</span>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-800">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send Direct Message to Tanzim</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson (CEO)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Email / Phone *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. alex@company.com or 01700000000"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Subject / Job Opportunity</label>
                    <input
                      type="text"
                      placeholder="Full-Stack Developer Position / Project Offer"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Mubassher, we reviewed your portfolio and would love to hire you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="shimmer-btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg hover:scale-[1.01] transition-transform"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Tanzim</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you <strong className="text-white">{formData.name}</strong>. Mubassher Alam Tanzim has received your note and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
