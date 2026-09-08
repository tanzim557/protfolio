"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative p-2.5 rounded-full bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 text-amber-500 dark:text-sky-300 border border-slate-300 dark:border-slate-700 shadow-md hover:scale-105 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 text-amber-500 transition-all duration-500 transform absolute ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`w-5 h-5 text-sky-300 transition-all duration-500 transform absolute ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>

      {/* Tooltip on hover */}
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
