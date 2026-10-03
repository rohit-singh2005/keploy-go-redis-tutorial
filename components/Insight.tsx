import React from "react";

interface InsightProps {
  children: React.ReactNode;
  title?: string;
}

export function Insight({ children, title = "Key Insight" }: InsightProps) {
  return (
    <div className="insight-box">
      <div className="insight-header">
        <span className="insight-orb">💡</span>
        <span className="insight-title">{title}</span>
      </div>
      <div className="insight-body">{children}</div>
    </div>
  );
}
