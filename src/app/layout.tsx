import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mubassher Alam Tanzim | Full-Stack Software Engineer Portfolio",
  description: "Official portfolio of Mubassher Alam Tanzim. Senior Full-Stack Software Engineer specializing in React, Next.js, Node.js, Python, PostgreSQL, and Vercel cloud deployments.",
  keywords: ["Mubassher Alam Tanzim", "Full Stack Developer", "Next.js", "React", "Node.js", "Software Engineer", "Vercel Portfolio"],
  authors: [{ name: "Mubassher Alam Tanzim" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
