# Keploy Go + Redis Tutorial — Documentation Site

A single-page documentation website built with **Next.js** and **MDX**, walking developers through testing a Go (Gin + Redis) application using Keploy — from zero to recorded + replayed API tests.

## 🔗 Live Demo

**[View Live Demo →](https://rohit-singh-keploy-go-redis-tutorial.vercel.app/)**

---

## 📖 About

This project was built as part of hands-on experimentation with Keploy's Go quickstart. The tutorial explains how to:

1. Install Keploy on Windows via WSL2 (Ubuntu 22.04)
2. Clone and build the `keploy/samples-go` Gin + Redis sample app
3. Record API test cases with `keploy record` (intercepting real Redis calls)
4. Replay those tests with `keploy test` — no real Redis needed

The content is written in the author's own voice, explaining the *why* behind each step, not just the commands.

---

## 📸 Screenshots (`ss/`)

The `ss/` folder contains **27 screenshots** captured in real-time while following the Keploy Gin + Redis quickstart on a Windows machine. They document the full journey:

| Screenshot | What it shows |
|---|---|
| `153650` – `153753` | Keploy Quickstart page — selecting Go → Docker → Gin + Redis |
| `155642` – `155926` | Installing Keploy via PowerShell & WSL setup |
| `160104` | Keploy CLI running successfully in WSL (v3.8.58) |
| `160318` – `160535` | Keploy auth via API key, getting API keys from app.keploy.io |
| `161602` – `161825` | Logged in & checking Go/Docker versions in WSL |
| `170315` | Go installed, Docker accessible from WSL |
| `170747` – `170941` | Cloning `samples-go`, exploring `gin-redis` folder structure |
| `172257` – `172313` | Viewing `main.go` and `docker-compose.yml` |
| `172816` | Redis container running via Docker |
| `194153` | `go build -o gin-redis` — binary compiled successfully |
| `194240` | `keploy record -c "./gin-redis"` — Keploy started, app running |
| `194327` – `203534` | Test cases being captured live (get-verification-code, verify-code) |
| `203914` | Docker containers stopped (`docker compose down`) |
| `015311` (next day) | Additional recording session — more test cases captured |

These screenshots serve as proof of work and can be referenced alongside the tutorial.

---

## 📄 Beginner Guide (`keploy-go-redis-beginner-guide.pdf`)

A written beginner's guide created **alongside** the implementation — capturing notes, gotchas, and explanations written in real time while running through the quickstart. It covers the same ground as the tutorial website but in a more narrative, note-taking style.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: MDX with syntax-highlighted code blocks
- **Styling**: Vanilla CSS with CSS custom properties (dark/light theming)
- **Components**: Custom React components — `Callout`, `HighlightedCode`, `Sidebar`, `ThemeToggle`

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ✨ Features

- 🌙 Dark / Light mode toggle with `localStorage` persistence
- 📱 Fully responsive — mobile sidebar with overlay
- 🔍 Active section highlighting in sidebar (IntersectionObserver)
- 🎨 Syntax-highlighted code blocks with copy-to-clipboard
- 💬 Callout components — `info`, `warning`, `tip`, `danger`, `success`
- ⚡ Static-friendly — works on Vercel out of the box
