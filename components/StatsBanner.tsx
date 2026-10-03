"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "0", label: "Lines of test code", sub: "required", icon: "✍️" },
  { value: "4+", label: "Test cases", sub: "captured in ~2 min", icon: "⚡" },
  { value: "100%", label: "Redis calls", sub: "mocked automatically", icon: "🔒" },
  { value: "3", label: "Edge cases", sub: "200 · 500 · 422 status codes", icon: "🎯" },
];

export function StatsBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`stats-banner ${visible ? "stats-visible" : ""}`} ref={ref}>
      {stats.map((s, i) => (
        <div className="stat-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <span className="stat-icon">{s.icon}</span>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
          <span className="stat-sub">{s.sub}</span>
        </div>
      ))}
    </div>
  );
}
