"use client";
import { useState, useRef, useEffect } from "react";

interface StepScreenshotProps {
  imgSrc: string;
  caption: string;
  badge?: string;
  children: React.ReactNode;
}

export function StepScreenshot({
  imgSrc,
  caption,
  badge = "📸 My actual terminal",
  children,
}: StepScreenshotProps) {
  const [zoomed, setZoomed] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = zoomed ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [zoomed]);

  return (
    <>
      <div
        ref={ref}
        className={`step-ss-wrapper ${visible ? "step-ss-visible" : ""}`}
      >
        {/* LEFT — description / code */}
        <div className="step-ss-left">{children}</div>

        {/* RIGHT — screenshot */}
        <div className="step-ss-right">
          <button
            className="step-ss-img-box"
            onClick={() => setZoomed(true)}
            aria-label="Expand screenshot"
            title="Click to expand"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={caption}
              className="step-ss-img"
              loading="lazy"
            />
            <div className="step-ss-hover-overlay">
              <span className="step-ss-badge">{badge}</span>
              <span className="step-ss-zoom-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                </svg>
                Click to expand
              </span>
            </div>
          </button>
          <p className="step-ss-caption">{caption}</p>
        </div>
      </div>

      {/* LIGHTBOX */}
      {zoomed && (
        <div
          className="ss-lightbox"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox"
        >
          <div className="ss-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="ss-lightbox-close"
              onClick={() => setZoomed(false)}
              aria-label="Close"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc} alt={caption} className="ss-lightbox-img" />
            <p className="ss-lightbox-caption">{caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
