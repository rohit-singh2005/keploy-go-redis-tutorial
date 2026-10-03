"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "what-is-keploy", label: "What is Keploy?" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "step-1-install-wsl", label: "1. Install WSL" },
  { id: "step-2-install-keploy", label: "2. Install Keploy" },
  { id: "step-3-clone-the-app", label: "3. Clone the App" },
  { id: "step-4-start-redis", label: "4. Start Redis" },
  { id: "step-5-build-the-binary", label: "5. Build the Binary" },
  { id: "step-6-record-test-cases", label: "6. Record Tests" },
  { id: "step-7-generate-traffic", label: "7. Generate Traffic" },
  { id: "step-8-run-the-tests", label: "8. Run the Tests" },
  { id: "understanding-the-output", label: "Understanding Output" },
  { id: "what-just-happened", label: "What Just Happened?" },
  { id: "next-steps", label: "Next Steps" },
];

export function Sidebar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        id="sidebar-toggle"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        On this page
      </button>

      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      <nav className={`sidebar ${open ? "sidebar-open" : ""}`} aria-label="Table of contents">
        <div className="sidebar-header">
          <span>On this page</span>
          <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>
        <ul className="sidebar-list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`sidebar-item ${active === id ? "sidebar-item-active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
