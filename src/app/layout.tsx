import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
