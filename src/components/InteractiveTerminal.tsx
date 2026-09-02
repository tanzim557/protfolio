"use client";

import { useState } from "react";
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles, Check, Copy } from "lucide-react";

interface TerminalProps {
  onOpenCeoModal: () => void;
}

export default function InteractiveTerminal({ onOpenCeoModal }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: "welcome",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-sky-400 font-bold">MUBASSHER ALAM TANZIM — Interactive Laptop CLI v2.4</p>
          <p className="text-xs text-slate-400">Type <span className="text-amber-400 font-mono font-bold">help</span> to list commands or click quick action chips below.</p>
        </div>
      ),
    },
  ]);

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-sky-400 font-bold">Available Commands:</p>
            <p><span className="text-amber-400 font-bold">whoami</span> — Developer profile overview</p>
            <p><span className="text-amber-400 font-bold">skills</span> — Full stack tech stack list</p>
            <p><span className="text-amber-400 font-bold">projects</span> — Real laptop codebases list</p>
            <p><span className="text-amber-400 font-bold">experience</span> — Work history &amp; metrics</p>
            <p><span className="text-amber-400 font-bold">hire</span> — Trigger CEO Job Offer Modal</p>
            <p><span className="text-amber-400 font-bold">clear</span> — Clear terminal output</p>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-200">
            <p>Name: <span className="text-sky-400 font-bold">Mubassher Alam Tanzim</span></p>
            <p>Role: <span className="text-purple-400 font-bold">Full Stack Software Engineer</span></p>
            <p>Specialties: <span className="text-emerald-400">Laravel, Python Whisper AI, React, Next.js, Node.js, C++, WebGL, MySQL</span></p>
            <p>Status: <span className="text-emerald-400 font-bold">🟢 Open for Full-Time &amp; Lead Roles</span></p>
          </div>
        );
        break;

      case "skills":
        response = (
          <pre className="text-xs text-sky-300 font-mono bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
{`{
  "fullstack": ["Laravel PHP", "React / Next.js", "Node.js", "Python FastAPI", "TypeScript"],
  "ai_speech": ["Python OpenAI Whisper AI", "WebSockets"],
  "graphics_game": ["Three.js", "WebGL 3D Engine", "HTML5 Canvas API", "Vite"],
  "compilers_lowlevel": ["C / C++", "Flex & Bison", "AST Parsers", "WebAssembly"],
  "databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
}`}
          </pre>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p>1. <strong className="text-sky-400">TeleMedicine AI Server</strong> (Laravel PHP + Python Whisper AI + MySQL)</p>
            <p>2. <strong className="text-purple-400">Pets Care Management System</strong> (PHP + MySQL + Medical History DB)</p>
            <p>3. <strong className="text-emerald-400">3D Car Racing Simulator</strong> (JavaScript, Three.js, WebGL 3D Mesh)</p>
            <p>4. <strong className="text-amber-400">PhysiCode Physics Engine</strong> (C++, Physics Kinetic Simulator)</p>
            <p>5. <strong className="text-cyan-400">Financial Rules Compiler</strong> (C/C++, Flex &amp; Bison, AST Parser)</p>
            <p>6. <strong className="text-indigo-400">Antigravity Browser Game</strong> (Vite, TypeScript, HTML5 Canvas)</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p><strong className="text-sky-400">Lead Full Stack Engineer</strong> @ Nexus Tech (2024-Present)</p>
            <p><strong className="text-purple-400">Senior Frontend Engineer</strong> @ Apex Digital (2023-2024)</p>
            <p><strong className="text-emerald-400">Full Stack Consultant</strong> @ Global Enterprise (2022-2023)</p>
          </div>
        );
        break;

      case "hire":
        response = (
          <div className="text-xs font-mono text-emerald-400">
            Launching CEO Executive Fast-Track Offer Modal...
          </div>
        );
        onOpenCeoModal();
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        response = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: &quot;{cmdStr}&quot;. Type <span className="text-white underline">help</span> for commands list.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <section id="terminal" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEVELOPER TERMINAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Execute Code Commands Live
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Test Mubassher&apos;s portfolio CLI directly inside your browser window.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["whoami", "skills", "projects", "experience", "hire", "help"].map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-400 font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3 h-3 text-emerald-400" />
              <span>{chip}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window Frame */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">tanzim@fullstack-arch:~</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">zsh / bash</span>
          </div>

          {/* Terminal Console Output area */}
          <div className="p-4 sm:p-6 bg-slate-950 font-mono min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">tanzim@laptop</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-sky-400 font-bold">~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-slate-800">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={onSubmit} className="bg-slate-900/90 px-4 py-3 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-mono font-bold text-xs">tanzim:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'whoami', 'hire')..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-500"
            />
            <button type="submit" className="text-slate-400 hover:text-sky-400 p-1">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
