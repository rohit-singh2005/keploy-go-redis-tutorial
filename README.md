# Keploy Go Quickstart — Documentation Tutorial

A single-page documentation website built with **Next.js** and **MDX**, explaining how to test a Go (Gin + Redis) application using Keploy.

## 🔗 Live Demo

> [Vercel deployment URL here after deploy]

## 📖 About

This tutorial walks developers through:
1. Setting up WSL2 + Keploy on Windows
2. Running the `keploy/samples-go` Gin + Redis sample
3. Recording API test cases with `keploy record`
4. Replaying tests with `keploy test`

Built as part of the **Keploy DevRel Candidate Assignment**.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Content**: MDX with syntax highlighted code blocks
- **Styling**: Vanilla CSS with CSS variables for dark/light theming
- **Components**: Custom React components (Callout, CodeBlock, Sidebar, ThemeToggle)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the tutorial.

## 🏗 Building

```bash
npm run build
```

Outputs a fully static site to the `out/` directory.

## ✨ Features

- 🌙 Dark/Light mode toggle with localStorage persistence
- 📱 Responsive design (mobile sidebar overlay)
- 🔍 Active section highlighting in sidebar as you scroll
- 🎨 Syntax highlighted code blocks with copy-to-clipboard
- 💬 Callout components (info, warning, tip, danger, success)
- ⚡ Fully static export — zero server required
