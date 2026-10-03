import React from "react";

type CalloutType = "info" | "warning" | "tip" | "danger" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { icon: string; label: string; className: string }
> = {
  info: {
    icon: "ℹ️",
    label: "Info",
    className: "callout-info",
  },
  warning: {
    icon: "⚠️",
    label: "Warning",
    className: "callout-warning",
  },
  tip: {
    icon: "💡",
    label: "Tip",
    className: "callout-tip",
  },
  danger: {
    icon: "🚨",
    label: "Danger",
    className: "callout-danger",
  },
  success: {
    icon: "✅",
    label: "Success",
    className: "callout-success",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  return (
    <div className={`callout ${config.className}`} role="note">
      <div className="callout-header">
        <span className="callout-icon">{config.icon}</span>
        <span className="callout-label">{title || config.label}</span>
      </div>
      <div className="callout-body">{children}</div>
    </div>
  );
}
