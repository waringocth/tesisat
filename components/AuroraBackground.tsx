"use client";
import React from "react";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Aurora blobs */}
      <div
        className="spotlight aurora-1"
        style={{
          width: "700px",
          height: "700px",
          top: "-150px",
          left: "-100px",
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="spotlight aurora-2"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          right: "-50px",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(167,139,250,0.1) 40%, transparent 70%)",
        }}
      />
      <div
        className="spotlight aurora-3"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          left: "30%",
          background:
            "radial-gradient(ellipse at center, rgba(14,165,233,0.2) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Spotlight center beam */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(59,130,246,0.15) 30%, rgba(59,130,246,0.05) 70%, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal glow line */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.15) 20%, rgba(99,102,241,0.2) 50%, rgba(59,130,246,0.15) 80%, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
    </div>
  );
}
