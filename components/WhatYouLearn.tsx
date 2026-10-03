const items = [
  "Install and configure Keploy on Windows via WSL2 — step by step",
  "Run a real Go (Gin + Redis) application locally without Docker Compose",
  "Record live API test cases automatically — zero test code needed",
  "Understand how Keploy uses eBPF to intercept Redis network calls",
  "Replay tests with full dependency mocking — no real Redis required",
  "Read and understand Keploy's human-readable YAML test case format",
];

export function WhatYouLearn() {
  return (
    <div className="wyl-box">
      <div className="wyl-header">
        <span className="wyl-icon">🎯</span>
        <span className="wyl-title">What you&apos;ll learn</span>
      </div>
      <ul className="wyl-list">
        {items.map((item, i) => (
          <li key={i} className="wyl-item" style={{ animationDelay: `${i * 0.07}s` }}>
            <span className="wyl-check">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
