import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/Sidebar";
import { ProgressBar } from "@/components/ProgressBar";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Testing a Go App with Keploy | Gin + Redis Tutorial",
  description:
    "A beginner-friendly guide to recording and replaying API tests automatically using Keploy with a Go Gin + Redis application — no test code required.",
  keywords: ["Keploy", "Go", "Gin", "Redis", "API testing", "integration testing", "tutorial"],
  authors: [{ name: "Keploy DevRel Tutorial" }],
  openGraph: {
    title: "Testing a Go App with Keploy | Gin + Redis",
    description: "Record real API traffic, replay it as tests. A hands-on Keploy tutorial for Go developers.",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ProgressBar />
        <header className="site-header">
          <div className="header-inner">
            <div className="header-brand">
              <a href="/" className="header-logo" aria-label="Home">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" fill="url(#keploy-grad)" />
                  <path d="M10 10l6 6-6 6M16 10l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="keploy-grad" x1="0" y1="0" x2="32" y2="32">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="header-brand-text">Keploy</span>
              </a>
              <span className="header-divider">/</span>
              <span className="header-doc-title">Tutorial</span>
            </div>
            <div className="header-actions">
              <a
                href="https://keploy.io/docs"
                className="header-link"
                target="_blank"
                rel="noopener noreferrer"
                id="docs-link"
              >
                Docs
              </a>
              <a
                href="https://github.com/keploy/keploy"
                className="header-link header-link-github"
                target="_blank"
                rel="noopener noreferrer"
                id="github-link"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="page-layout">
          <Sidebar />
          <main className="main-content" id="main-content">
            {children}
          </main>
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
