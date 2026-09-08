# 🚀 Mubassher Alam Tanzim — Developer Portfolio

A modern, fully interactive developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Features dark/light mode, animated sections, interactive terminal, project README modals, and a live Vercel deployment.

---

## 🏨 Featured Project: Mamun Hotel & Restaurant Management System

A full-stack enterprise hotel and restaurant portal built with **Laravel PHP 10** and **MySQL**.

### ✨ Features
- **Room Booking** — Online room reservation with real-time availability tracking
- **Dining Table Reservation** — Restaurant table booking with time-slot management
- **Food Order POS** — Point-of-sale food ordering system with kitchen queue
- **Automated Billing** — Tax calculation and printable invoice generation
- **Admin Dashboard** — Executive dashboard for daily revenue, room status & staff management

### 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend Framework | Laravel PHP 10 |
| Database | MySQL (Eloquent ORM) |
| Frontend | Blade Templates + Bootstrap 5 |
| Auth | Laravel Sanctum / Session Guard |

### 📋 Requirements
- PHP >= 8.1 (with PDO, OpenSSL, Mbstring extensions)
- Composer Package Manager
- MySQL / MariaDB (XAMPP, Laragon, or standalone)

### ⚡ How to Run
```bash
git clone https://github.com/mubassher/mamun-restaurant-laravel.git
cd mamun-restaurant-laravel
composer install
cp .env.example .env
php artisan key:generate
# Configure DB_DATABASE, DB_USERNAME, DB_PASSWORD in .env
php artisan migrate --seed
php artisan serve
# Open http://localhost:8000
```

### 📊 Sample Output
```json
{
  "hotel_name": "Mamun Hotel & Restaurant",
  "room_status": "Occupied (Room 304)",
  "active_orders": 14,
  "daily_revenue": "$4,850.00"
}
```

---

## 🌐 Portfolio Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.3.4 |
| React | 19.2.8 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Framer Motion | ^13 |
| Lucide React | ^1.39 |

---

## 🖥️ All Projects

| # | Project | Category | Stack |
|---|---|---|---|
| 1 | Mamun Hotel & Restaurant Management | Full-Stack | Laravel + MySQL |
| 2 | ESP32 IoT Water Level Monitor | IoT / Hardware | ESP32 C++ + Firebase |
| 3 | TeleMedicine Platform with AI Whisper | AI / Healthcare | Laravel + Python Whisper |
| 4 | Pets Care & Veterinary Management | Full-Stack | PHP + MySQL |
| 5 | 3D Car Simulator & WebGL Racing Engine | Frontend / 3D | JavaScript + Three.js |
| 6 | PhysiCode — Physics Simulation Engine | Systems | C++ + WebAssembly |
| 7 | Compiler Design & Financial Rules Parser | Full-Stack | C/C++ + Flex & Bison |
| 8 | Antigravity Browser Game Engine | Frontend / Games | Vite + TypeScript |

---

## 🚀 Getting Started (Portfolio Dev Server)

```bash
git clone https://github.com/mubassher/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deploy on Vercel

This portfolio is deployed live on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Hero.tsx          # Landing hero section
│       ├── Projects.tsx      # Projects grid + README modals
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills section
│       ├── Experience.tsx    # Work experience
│       ├── Contact.tsx       # Contact form
│       ├── Footer.tsx        # Footer
│       └── Navbar.tsx        # Navigation
├── public/                   # Static assets
├── next.config.ts            # Next.js config
└── package.json
```

---

## 👨‍💻 Author

**Mubassher Alam Tanzim**  
Full-Stack Developer | IoT Engineer | AI Enthusiast

> *"Building systems that work — from silicon to cloud."*
