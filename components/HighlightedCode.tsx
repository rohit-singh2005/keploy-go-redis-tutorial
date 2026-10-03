"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="code-copy-btn" onClick={handleCopy} aria-label="Copy code">
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

export function HighlightedCode({ className, children }: CodeProps) {
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "";
  const code = String(children).replace(/\n$/, "");

  if (match && lang !== "text") {
    return (
      <div className="code-block">
        <div className="code-block-chrome">
          <div className="code-chrome-dots">
            <span className="cdot cdot-r" />
            <span className="cdot cdot-y" />
            <span className="cdot cdot-g" />
          </div>
          <span className="code-chrome-lang">{lang}</span>
          <CopyButton text={code} />
        </div>
        <SyntaxHighlighter
          language={lang}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: "0 0 12px 12px",
            fontSize: "0.855rem",
            lineHeight: "1.65",
            background: "#0d1117",
            padding: "1.25rem 1.5rem",
          }}
          showLineNumbers={!["bash", "text", "powershell"].includes(lang)}
          wrapLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }

  return <code className="inline-code">{children}</code>;
}
