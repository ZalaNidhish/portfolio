import React, { useEffect, useState } from "react";

const SplashScreen = ({ onDone }) => {
  const [phase, setPhase] = useState("enter"); // enter → hold → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 10000,
      background: "#0a0a0f",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: phase === "exit" ? "opacity 0.6s ease, transform 0.6s ease" : "none",
      opacity: phase === "exit" ? 0 : 1,
      transform: phase === "exit" ? "scale(1.04)" : "scale(1)",
      pointerEvents: phase === "exit" ? "none" : "auto",
    }}>
      <style>{`
        @keyframes splashReveal {
          0%   { clip-path: inset(0 100% 0 0); opacity: 0; }
          20%  { opacity: 1; }
          100% { clip-path: inset(0 0% 0 0); opacity: 1; }
        }
        @keyframes splashLineGrow {
          0%   { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashGlow {
          0%, 100% { text-shadow: 0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,212,255,0.2); }
          50%       { text-shadow: 0 0 80px rgba(0,212,255,0.8), 0 0 120px rgba(0,212,255,0.4); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Center content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", position: "relative" }}>

        {/* The N logo */}
        <div style={{
          fontFamily: "'momo', sans-serif",
          fontSize: "clamp(7rem, 18vw, 12rem)",
          color: "#00d4ff",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          animation: phase === "enter"
            ? "splashReveal 0.6s cubic-bezier(0.22,1,0.36,1) forwards, splashGlow 2s ease-in-out infinite"
            : "splashGlow 2s ease-in-out infinite",
          userSelect: "none",
        }}>
          N
        </div>

        {/* Underline that grows */}
        <div style={{
          width: "clamp(5rem, 12vw, 8rem)",
          height: "2px",
          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          animation: phase !== "enter" ? "splashLineGrow 0.5s 0.1s cubic-bezier(0.22,1,0.36,1) both" : "none",
          transformOrigin: "left",
          transform: phase === "enter" ? "scaleX(0)" : undefined,
        }} />

        {/* Name + tagline */}
        <div style={{
          textAlign: "center",
          animation: phase !== "enter" ? "splashFadeUp 0.5s 0.3s ease both" : "none",
          opacity: phase === "enter" ? 0 : undefined,
        }}>
          <div style={{
            fontFamily: "'momo', sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            color: "#e2e8f0",
            letterSpacing: "0.02em",
          }}>
            Nidhish Zala
          </div>
          <div style={{
            fontSize: "0.75rem",
            color: "#475569",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginTop: "0.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.3rem",
          }}>
            Full Stack Developer
            <span style={{ display: "inline-block", width: 2, height: "0.75em", background: "#00d4ff", animation: "cursorBlink 1s step-end infinite" }} />
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      {[
        { top: "2rem", left: "2rem", borderTop: "1px solid rgba(0,212,255,0.3)", borderLeft: "1px solid rgba(0,212,255,0.3)" },
        { top: "2rem", right: "2rem", borderTop: "1px solid rgba(0,212,255,0.3)", borderRight: "1px solid rgba(0,212,255,0.3)" },
        { bottom: "2rem", left: "2rem", borderBottom: "1px solid rgba(0,212,255,0.3)", borderLeft: "1px solid rgba(0,212,255,0.3)" },
        { bottom: "2rem", right: "2rem", borderBottom: "1px solid rgba(0,212,255,0.3)", borderRight: "1px solid rgba(0,212,255,0.3)" },
      ].map((s, i) => (
        <div key={i} style={{
          position: "absolute", width: 24, height: 24,
          opacity: phase !== "enter" ? 1 : 0,
          transition: "opacity 0.4s ease",
          ...s,
        }} />
      ))}
    </div>
  );
};

export default SplashScreen;
