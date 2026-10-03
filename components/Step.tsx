import React from "react";

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="step-wrapper">
      <div className="step-indicator">
        <div className="step-number">{number}</div>
        <div className="step-line" />
      </div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <div className="step-body">{children}</div>
      </div>
    </div>
  );
}
