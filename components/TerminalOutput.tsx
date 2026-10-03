"use client";
import { useEffect, useRef, useState } from "react";

interface TerminalOutputProps {
  lines: string[];
  title?: string;
  speed?: number;
}

function getLineClass(line: string) {
  if (line.includes("✅") || line.includes("PASSED") || line.includes("passed")) return "tl-success";
  if (line.includes("❌") || line.includes("FAILED") || line.includes("Error")) return "tl-error";
  if (line.includes("🐰")) return "tl-keploy";
  if (line.startsWith("#") || line.startsWith("  ")) return "tl-dim";
  if (line.includes("Test Results")) return "tl-result";
  if (line === "") return "tl-empty";
  return "tl-default";
}

export function TerminalOutput({ lines, title = "terminal", speed = 90 }: TerminalOutputProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= lines.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, lines.length, speed]);

  return (
    <div className="terminal-window" ref={ref}>
      <div className="terminal-chrome">
        <div className="terminal-dots">
          <span className="tdot tdot-r" />
          <span className="tdot tdot-y" />
          <span className="tdot tdot-g" />
        </div>
        <span className="terminal-chrome-title">{title}</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} className={`terminal-line ${getLineClass(line)}`}>
            {line === "" ? <>&nbsp;</> : (
              <>
                {!line.startsWith(" ") && !line.startsWith("#") && line !== "" && (
                  <span className="terminal-prompt">$ </span>
                )}
                <span>{line}</span>
              </>
            )}
          </div>
        ))}
        {count < lines.length && (
          <span className="terminal-cursor">█</span>
        )}
      </div>
    </div>
  );
}

const recordLines = [
  `sudo -E env "PATH=$PATH" keploy record -c "./gin-redis"`,
  "",
  "🐰 Keploy: INFO  Starting Keploy  {\"version\": \"3.8.58\"}",
  "🐰 Keploy (agent): INFO  Keploy agent is ready to record test cases and mocks.",
  "🐰 Keploy (agent): INFO  Starting Application...",
  "",
  "[GIN-debug] GET   /api/getVerificationCode",
  "[GIN-debug] POST  /api/verifyCode",
  "[GIN-debug] Listening on :3001",
  "",
  "🐰 Keploy (agent): INFO  Started ingress forwarding {\"orig_port\": 3001}",
  "",
  "# ── Sending API traffic from another terminal ──────────────────",
  "",
  "🐰 Keploy: INFO 🟠 Keploy has captured test cases for the user's application.",
  "  {\"testcase name\": \"get-api-getverificationcode-1\"}",
  "🐰 Keploy: INFO 🟠 Keploy has captured test cases for the user's application.",
  "  {\"testcase name\": \"post-api-verifycode-1\"}",
  "🐰 Keploy: INFO 🟠 Keploy has captured test cases for the user's application.",
  "  {\"testcase name\": \"post-api-verifycode-2\"}",
  "🐰 Keploy: INFO 🟠 Keploy has captured test cases for the user's application.",
  "  {\"testcase name\": \"post-api-verifycode-3\"}",
];

const testLines = [
  `sudo -E env "PATH=$PATH" keploy test -c "./gin-redis" --delay 5`,
  "",
  "🐰 Keploy: INFO  Starting Keploy  {\"version\": \"3.8.58\"}",
  "🐰 Keploy (agent): INFO  Keploy agent is ready to replay test cases.",
  "🐰 Keploy (agent): INFO  Starting Application...",
  "",
  "# ── Redis is MOCKED — no real connection needed! ────────────────",
  "",
  "✅ PASSED  get-api-getverificationcode-1   (43ms)",
  "✅ PASSED  post-api-verifycode-1           (38ms)",
  "✅ PASSED  post-api-verifycode-2           (35ms)",
  "✅ PASSED  post-api-verifycode-3           (41ms)",
  "",
  "Test Results: 4 passed, 0 failed ✅",
];

export function KeployRecordOutput() {
  return <TerminalOutput lines={recordLines} title="keploy record" speed={70} />;
}

export function KeployTestOutput() {
  return <TerminalOutput lines={testLines} title="keploy test" speed={70} />;
}
