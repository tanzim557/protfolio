import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LiveWebsites from "@/components/LiveWebsites";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Live Production Websites & Cloud Deployments | Mubassher Alam Tanzim",
  description: "Explore live production websites engineered and deployed by Mubassher Alam Tanzim on Cloudflare Tunnels, OnRender Cloud, and Vercel Edge.",
};

export default function LiveWebsitesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 relative selection:bg-sky-500 selection:text-white transition-colors duration-300 pt-20">
      <Navbar />
      <LiveWebsites />
      <Footer />
    </main>
  );
}
