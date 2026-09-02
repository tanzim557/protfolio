"use client";

import { useState } from "react";
import { Code, BookOpen, Play, X, CheckCircle2, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  category: "fullstack" | "cloud" | "ai" | "frontend" | "iot";
  description: string;
  architecture: string;
  image: string;
  tags: string[];
  metrics: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
  readme: {
    overview: string;
    techStack: string;
    requirements: string[];
    howToRun: string[];
    sampleOutput: string;
  };
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "cloud" | "ai" | "frontend" | "iot">("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // All Laptop Projects of Mubassher Alam Tanzim with full README & How to Run Guides
  const projects: Project[] = [
    {
      id: "esp32-iot-water-monitor",
      title: "ESP32 IoT Water Level Monitor & Firebase Live Dashboard",
      category: "iot",
      description: "Cloud-connected water level telemetry & automated pump control system engineered around ESP32, 7-sample median noise filter, WiFiManager, 3S 18650 BMS, and Firebase Realtime DB.",
      architecture: "ESP32 C++ + Google Firebase Realtime DB + Ultrasonic JSN-SR04T + 3S Li-Ion BMS",
      image: "/esp32-iot-water.jpg",
      tags: ["ESP32 C++", "Firebase DB", "IoT Hardware", "C++", "Sensors", "Relay Actuation"],
      metrics: "Sub-Second Telemetry • 7-Sample Median Filter",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Google Firebase Realtime DB continuous event streaming & sub-second relay triggering.",
        "7-sample median noise filter removing ultrasonic ping spikes from water surface ripples.",
        "Captive portal Wi-Fi provisioning (WiFiManager) & 3S 18650 20A BMS battery subsystem.",
        "16x2 I2C LCD local display ('Team Sanda Water: 2%') & multi-tone buzzer audio diagnostics.",
      ],
      readme: {
        overview: "An enterprise IoT water telemetry system. The ESP32 collects distance readings via ultrasonic sensor, filters acoustic ripple noise using a 7-sample median sorting algorithm, and dispatches real-time state changes to Google Firebase.",
        techStack: "ESP32 C++ (Arduino Framework), FirebaseESP32 Library, WiFiManager, LiquidCrystal_I2C, 3S BMS 18650",
        requirements: [
          "Arduino IDE / PlatformIO with ESP32 board support installed.",
          "ESP32 Dev Module + Ultrasonic Sensor (TRIG: GPIO 12, ECHO: GPIO 13).",
          "5V Electromechanical Relay (IN: GPIO 2), Piezo Buzzer (GPIO 4), 16x2 I2C LCD (SDA: GPIO 21, SCL: GPIO 22).",
          "3S 18650 Li-Ion Battery Pack + 3S 20A BMS Protection Board + Step-Down Buck Converter.",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/esp32-water-monitor.git",
          "# Open src/main.cpp in PlatformIO or Arduino IDE",
          "# Set FIREBASE_HOST and FIREBASE_AUTH in config.h",
          "# Connect ESP32 to PC via Micro-USB and upload firmware",
          "# On first boot, connect phone to Wi-Fi SSID 'ESP32-AP' to configure Wi-Fi credentials",
          "# Open web dashboard to monitor live telemetry & trigger manual pump relay",
        ],
        sampleOutput: "{\n  \"device\": \"ESP32-WROOM-32\",\n  \"water_level_percent\": 98.4,\n  \"measured_headspace_cm\": 3.2,\n  \"noise_filter\": \"7-Sample Median (Clean)\",\n  \"relay_pump_state\": \"AUTO_OFF\",\n  \"power_bus\": \"5.02V (3S BMS 18650)\",\n  \"lcd_display\": \"Team Sanda Water: 98%\"\n}",
      },
    },
    {
      id: "mamun-hotel-restaurant",
      title: "Mamun Hotel & Restaurant Management System",
      category: "fullstack",
      description: "Full-stack enterprise hotel & restaurant portal featuring online room booking, dining table reservation, food ordering POS, and automated invoice billing.",
      architecture: "Laravel PHP Framework 10 + MySQL Database + Eloquent ORM + Bootstrap 5",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel PHP", "MySQL", "Blade", "Hotel Booking", "Bootstrap"],
      metrics: "100% Booking Efficiency • Automated Billing",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Room reservation & restaurant dining table booking with real-time room availability status.",
        "Food order POS system with automated tax & invoice billing generation.",
        "Executive admin management dashboard for tracking daily revenue, rooms & staff.",
      ],
      readme: {
        overview: "Complete management software for hotel and restaurant operations. Manages guest check-ins, room inventory, kitchen orders, tax calculations, and printable customer receipts.",
        techStack: "PHP 8.2, Laravel 10 Framework, MySQL Relational Database, Eloquent ORM, Bootstrap 5, Blade Templates",
        requirements: [
          "PHP >= 8.1 with PDO, OpenSSL, and Mbstring extensions.",
          "Composer Package Manager.",
          "MySQL / MariaDB Database Server (e.g. XAMPP, Laragon, or standalone MySQL).",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/mamun-restaurant-laravel.git",
          "cd mamun-restaurant-laravel",
          "composer install",
          "cp .env.example .env",
          "php artisan key:generate",
          "# Configure DB_DATABASE, DB_USERNAME, DB_PASSWORD in .env",
          "php artisan migrate --seed",
          "php artisan serve",
          "# Open browser at http://localhost:8000",
        ],
        sampleOutput: "{\n  \"hotel_name\": \"Mamun Hotel & Restaurant\",\n  \"room_status\": \"Occupied (Room 304)\",\n  \"active_orders\": 14,\n  \"daily_revenue\": \"$4,850.00\"\n}",
      },
    },
    {
      id: "telemedicine-ai",
      title: "TeleMedicine Platform with AI Whisper Voice Server",
      category: "ai",
      description: "Full-stack telemedicine healthcare app featuring virtual patient appointments, doctor consultations, and real-time AI voice transcription using Python Whisper.",
      architecture: "Laravel PHP + Python OpenAI Whisper Server + MySQL + WebSockets",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel", "Python", "Whisper AI", "MySQL", "WebSockets", "PHP"],
      metrics: "Sub-2s Speech Transcription • Automated Health Logs",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Python OpenAI Whisper server integration for automated medical transcriptions.",
        "Secure patient electronic health records (EHR) & appointment booking system.",
        "Integrated WebSockets for live doctor-patient chat & audio feed status.",
      ],
      readme: {
        overview: "A comprehensive telemedicine solution enabling remote healthcare. Features virtual doctor bookings and a dedicated Python AI daemon that transcribes patient-doctor voice calls directly into medical notes.",
        techStack: "Laravel 10, Python 3.11, OpenAI Whisper, FastAPI, PyTorch, MySQL, WebSockets",
        requirements: [
          "PHP 8.1+, Composer, Node.js 18+.",
          "Python 3.10+ with PyTorch and ffmpeg for audio processing.",
          "MySQL database server.",
        ],
        howToRun: [
          "# 1. Start Python AI Whisper Server:",
          "cd ai-whisper-server",
          "python -m venv venv && source venv/bin/activate  # Or venv\\Scripts\\activate on Windows",
          "pip install fastapi uvicorn openai-whisper torch",
          "uvicorn main:app --port 8000 --reload",
          "",
          "# 2. Start Laravel Telemedicine Web Portal:",
          "cd telemedicine-app",
          "composer install && npm install",
          "php artisan migrate --seed",
          "php artisan serve --port 8001",
          "# Access web app at http://localhost:8001",
        ],
        sampleOutput: "{\n  \"status\": \"consultation_active\",\n  \"transcription\": \"Patient reports mild fever and throat soreness.\",\n  \"ai_confidence\": \"99.1%\",\n  \"server\": \"Python Whisper Daemon\"\n}",
      },
    },
    {
      id: "pet-care-management",
      title: "Pets Care & Veterinary Management System",
      category: "fullstack",
      description: "Comprehensive veterinary clinic management system for pet registration, vaccination scheduling, medical history tracking, and doctor dispatching.",
      architecture: "PHP / Node.js + MySQL Relational Database + Bootstrap UI",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      tags: ["PHP", "JavaScript", "MySQL", "SQL Database", "Bootstrap"],
      metrics: "100% Relational DB Integrity • Multi-Clinic Ready",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Complete pet medical history, vaccination timeline, and prescriptions log.",
        "SQL database schema optimized with automated password reset & session security.",
        "Doctor schedule calendar with real-time slot availability updates.",
      ],
      readme: {
        overview: "A specialized platform for veterinary clinics to manage pet records, track vaccination schedules, send automated appointment reminders, and handle billing.",
        techStack: "PHP, MySQL Relational Database, JavaScript ES6, HTML5, CSS3, Bootstrap",
        requirements: [
          "Apache / Nginx Web Server (XAMPP / WAMP / Laragon).",
          "PHP 7.4 or higher.",
          "MySQL / MariaDB Server.",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/Pets-Care-Management-System.git",
          "# Move project folder to htdocs or www directory",
          "# Import database.sql file into MySQL via phpMyAdmin or MySQL CLI:",
          "mysql -u root -p -e 'CREATE DATABASE pets_care;'",
          "mysql -u root -p pets_care < database.sql",
          "# Update database credentials in config/db.php",
          "# Open http://localhost/Pets-Care-Management-System in your web browser",
        ],
        sampleOutput: "{\n  \"pet_id\": \"PET-8942\",\n  \"name\": \"Max\",\n  \"vaccination_status\": \"Up to date\",\n  \"next_checkup\": \"2026-09-15\"\n}",
      },
    },
    {
      id: "car-simulator-3d",
      title: "3D Car Simulator & WebGL Racing Engine",
      category: "frontend",
      description: "Interactive browser-based 3D car simulator and racing game engine featuring custom 3D mesh model loaders (.obj), rigid-body collision physics, and dynamic lighting.",
      architecture: "JavaScript + Three.js / WebGL Engine + HTML5 Canvas + 3D Mesh Loader",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Three.js", "WebGL", "3D Modeling", "Physics"],
      metrics: "60 FPS Smooth WebGL 3D Render Loop",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Custom 3D `.obj` file parser for loading high-fidelity vehicle models.",
        "Real-time steering, acceleration, and tire friction physics calculation.",
        "Dynamic camera angles (Third-person, Hood cam, Orbit camera).",
      ],
      readme: {
        overview: "A lightweight 3D car simulator rendering high-performance graphics directly inside the browser using Three.js and WebGL. Includes custom vehicle physics, collision detection, and customizable camera modes.",
        techStack: "JavaScript ES6, Three.js 3D Library, WebGL 2.0, HTML5 Canvas API, OBJLoader",
        requirements: [
          "Any modern browser with WebGL enabled (Chrome, Firefox, Edge, Safari).",
          "Local web server (VSCode Live Server, Node serve, or Python http.server).",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/3d-car-simulator.git",
          "cd 3d-car-simulator",
          "# Launch using Python simple HTTP server:",
          "python -m http.server 8000",
          "# Or using Node serve:",
          "npx serve .",
          "# Open http://localhost:8000 in your browser",
          "# Use W/A/S/D or Arrow keys to steer, accelerate, and brake",
        ],
        sampleOutput: "{\n  \"render_engine\": \"WebGL 2.0\",\n  \"fps\": 60,\n  \"triangles_rendered\": 45200,\n  \"physics_substeps\": 4\n}",
      },
    },
    {
      id: "physicode-engine",
      title: "PhysiCode — Interactive Physics Simulation Engine",
      category: "cloud",
      description: "High-performance physics calculation playground and interactive code engine for simulating particle collisions, pendulum dynamics, and kinetic forces.",
      architecture: "C++ Engine / WebAssembly + JavaScript Canvas Rendering",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      tags: ["C++", "JavaScript", "Physics Engine", "Canvas API", "Math"],
      metrics: "1,000+ Active Concurrent Particle Simulation",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Verlet integration and Runge-Kutta numerical solver algorithms.",
        "Interactive canvas control panel for adjusting gravity, restitution, and drag.",
        "Real-time kinetic energy and momentum diagnostic charts.",
      ],
      readme: {
        overview: "A physics engine built in C++ and compiled to WebAssembly for sub-millisecond particle physics calculations. Simulates gravity fields, kinetic collisions, and pendulum dynamics.",
        techStack: "C++17, WebAssembly (WASM), Emscripten Compiler, JavaScript, HTML5 Canvas API",
        requirements: [
          "Emscripten SDK (emcc compiler) for compiling C++ to WASM.",
          "Node.js or Python for serving web files.",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/PhysiCode-Engine.git",
          "cd PhysiCode-Engine",
          "# Compile C++ engine to WebAssembly:",
          "emcc src/physics_kernel.cpp -O3 -s WASM=1 -o build/physics.js",
          "# Start local development server:",
          "npx serve .",
          "# Open http://localhost:3000 to interact with particle physics canvas",
        ],
        sampleOutput: "{\n  \"kinetic_energy\": \"482.4 J\",\n  \"particles_simulated\": 1200,\n  \"collision_checks_sec\": 144000\n}",
      },
    },
    {
      id: "financial-compiler-engine",
      title: "Compiler Design Engine & Financial Rules Parser",
      category: "fullstack",
      description: "Custom lexical analyzer, AST compiler parser, and financial rule verification engine built with Flex & Bison and web-based syntax visualization.",
      architecture: "C / C++ (Flex & Bison) + HTML5 Syntax Visualizer Engine",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["C++", "Flex & Bison", "Compiler Design", "AST Parser", "JavaScript"],
      metrics: "O(N) Token Parsing Speed • Zero Syntax Leakage",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Lexical analysis pipeline converting financial rules into abstract syntax trees (AST).",
        "Flex & Bison grammar definitions for custom domain-specific language (DSL).",
        "Web visualization interface showing real-time token stream and evaluation graph.",
      ],
      readme: {
        overview: "A custom domain-specific language (DSL) compiler designed for financial transaction rule verification. Lexes tokens, constructs abstract syntax trees (AST), and evaluates compliance logic.",
        techStack: "C, C++, Flex (Lexical Analyzer), Bison (Yacc Grammar Parser), GCC, JavaScript Visualizer",
        requirements: [
          "GCC / Clang C Compiler.",
          "Flex (Fast Lexical Analyzer Generator).",
          "Bison (GNU Parser Generator).",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/financial-compiler-engine.git",
          "cd financial-compiler-engine",
          "# Compile Flex lexer & Bison parser:",
          "flex src/lexer.l",
          "bison -d src/parser.y",
          "gcc lex.yy.c parser.tab.c -o compiler_engine",
          "# Execute financial rule DSL test script:",
          "./compiler_engine < tests/sample_rules.dsl",
        ],
        sampleOutput: "{\n  \"parser_status\": \"syntax_valid\",\n  \"tokens_scanned\": 412,\n  \"ast_nodes\": 68,\n  \"evaluation_result\": \"ALLOW_TRANSACTION\"\n}",
      },
    },
    {
      id: "antigravity-game",
      title: "Antigravity Browser Game Engine",
      category: "frontend",
      description: "Fast-paced interactive browser game built with Vite and TypeScript featuring particle gravity inversion, obstacle generation, and high-score tracking.",
      architecture: "Vite + TypeScript + HTML5 Canvas API + Web Audio API",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "Vite", "HTML5 Canvas", "Web Audio API"],
      metrics: "Instant Vite HMR • 60 FPS Smooth Canvas Animation",
      demoUrl: "https://github.com/mubassher",
      githubUrl: "https://github.com/mubassher",
      features: [
        "Custom particle system with real-time gravity field manipulation.",
        "TypeScript type-safe game loop architecture with zero frame drops.",
        "Local Storage persistent leaderboard and web audio sound effects.",
      ],
      readme: {
        overview: "An arcade-style action browser game engine leveraging Vite and TypeScript. Features hardware-accelerated 60 FPS canvas rendering, custom gravity inversion physics, and web audio sound effects.",
        techStack: "Vite, TypeScript, HTML5 Canvas API, Web Audio API, Tailwind CSS",
        requirements: [
          "Node.js 18+ and npm package manager.",
        ],
        howToRun: [
          "git clone https://github.com/mubassher/antigravity-game.git",
          "cd antigravity-game",
          "npm install",
          "npm run dev",
          "# Open http://localhost:5173 to play game",
        ],
        sampleOutput: "{\n  \"game_state\": \"playing\",\n  \"current_score\": 14800,\n  \"active_particles\": 350,\n  \"fps\": 60\n}",
      },
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>REAL LAPTOP CODEBASES &amp; DOCUMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Projects &amp; <span className="gradient-text">Setup Documentation</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Click any project to view complete README documentation, stack architecture, and exact step-by-step setup commands to run it locally.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex p-1 rounded-2xl bg-slate-900 border border-slate-800">
            {[
              { id: "all", label: "All Projects (8)" },
              { id: "iot", label: "IoT & Hardware" },
              { id: "fullstack", label: "Hotel & Web Apps" },
              { id: "ai", label: "AI & TeleMedicine" },
              { id: "cloud", label: "Physics & Compilers" },
              { id: "frontend", label: "3D Simulators & Games" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === tab.id
                    ? "bg-sky-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              {/* Project Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-sky-400 text-[10px] font-mono font-bold border border-slate-700 uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Performance Badge */}
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-700/50">
                  {project.metrics}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Architecture Note */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                  <span className="text-sky-400 font-bold block mb-0.5">Stack Architecture:</span>
                  {project.architecture}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-[11px] font-mono border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-extrabold text-xs shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View README &amp; Setup Guide</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Complete Project README & How-To-Run Guide Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-sky-500/40 p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 my-8 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-mono font-bold uppercase">
                      README.md
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {activeProject.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Project Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">
                  1. PROJECT OVERVIEW:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  {activeProject.readme.overview}
                </p>
              </div>

              {/* System / Hardware Requirements */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">
                  2. SYSTEM &amp; PREREQUISITE REQUIREMENTS:
                </h4>
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                  {activeProject.readme.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step How To Run Commands */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-sky-400" />
                  <span>3. HOW TO RUN &amp; EXECUTE PROJECT (COMMANDS):</span>
                </h4>
                <div className="bg-slate-950 rounded-2xl p-4 font-mono text-xs border border-slate-800 space-y-2">
                  <div className="flex justify-between text-slate-400 border-b border-slate-800/80 pb-2 text-[11px]">
                    <span>TERMINAL EXECUTION STEPS</span>
                    <span className="text-emerald-400 font-bold">BASH / COMMAND PROMPT</span>
                  </div>
                  <div className="space-y-1 text-sky-300">
                    {activeProject.readme.howToRun.map((cmd, idx) => (
                      <div key={idx} className={cmd.startsWith("#") ? "text-slate-500 italic pt-1" : "text-emerald-400 font-bold"}>
                        {cmd}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* JSON Live Output / Diagnostics */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">
                  4. DIAGNOSTIC OUTPUT / JSON RESPONSE:
                </h4>
                <pre className="p-4 rounded-2xl bg-slate-950 text-sky-300 text-xs font-mono border border-slate-800 overflow-x-auto">
                  {activeProject.readme.sampleOutput}
                </pre>
              </div>

              {/* Footer Modal Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white font-semibold"
                >
                  Close Documentation
                </button>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg hover:scale-105 transition-transform"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Code Repository</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
