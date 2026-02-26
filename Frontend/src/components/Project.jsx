import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "NCC — 38 Gujarat BN",
    desc: "Full-stack battalion management webapp. Event-based attendance tracking, cadet profile management, automated data fetch from Excel sheets, notices board, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Excel-Parser"],
    github: "https://github.com/ZalaNidhsih",
    live: "https://ncc-38gujbn.vercel.app",
    status: "dev", statusLabel: "Hosting Soon",
    number: "01", type: "Full Stack",
  },
  {
    id: 2,
    title: "PixelPlus Media",
    desc: "Marketing agency website connecting businesses with growth solutions. Seamless meeting booking powered by Calendly integration with a polished responsive frontend.",
    tech: ["React", "Tailwind CSS", "Swiper.js", "Calendly API"],
    github: "https://github.com/ZalaNidhsih",
    live: "#",
    status: "live", statusLabel: "Live",
    number: "02", type: "Frontend",
  },
  {
    id: 3,
    title: "Laxmi Cement Articles",
    desc: "E-catalog website for a cement articles manufacturer. Browse full product catalogue, view pricing, contact the owner, and locate the factory via embedded Google Maps.",
    tech: ["React", "Tailwind CSS", "Swiper.js", "Google Maps"],
    github: "https://github.com/ZalaNidhsih",
    live: "https://laxmicementarticles.vercel.app",
    status: "live", statusLabel: "Live",
    number: "03", type: "Frontend",
  },
  {
    id: 4,
    title: "Rangila Resto",
    desc: "Restaurant website with rich UI/UX — full menu listing with item images, promo offer sliders, horizontal about-section scrollers, and a backend-driven daily special menu system.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ZalaNidhsih",
    live: "#",
    status: "dev", statusLabel: "Dev Project",
    number: "04", type: "Full Stack",
  },
  {
    id: 5,
    title: "EMS — Employee Mgmt System",
    desc: "PHP & MySQL academic project. Employee records, leave management, payroll overview, and departmental reporting with a clean HTML/CSS frontend.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/ZalaNidhsih",
    live: null,
    status: "academic", statusLabel: "Academic",
    number: "05", type: "Full Stack",
  },
  {
    id: 6,
    title: "Chocolate Factory System",
    desc: "Inventory and management system for a chocolate manufacturing unit. Built as a college academic project covering production tracking and order management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/ZalaNidhsih",
    live: null,
    status: "academic", statusLabel: "Academic",
    number: "06", type: "Full Stack",
  },
];

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const SCROLL_PER_CARD = 280;

const Project = () => {
  const sectionRef = useRef(null);
  const stackRef   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stack   = stackRef.current;
    if (!section || !stack) return;

    // Section height = exactly 100vh (the sticky frame) + scroll budget for all cards
    const setHeight = () => {
      section.style.height = `${window.innerHeight + projects.length * SCROLL_PER_CARD}px`;
    };
    setHeight();
    window.addEventListener("resize", setHeight);

    const onScroll = () => {
      // How far the user has scrolled past the top of this section
      const scrolled = Math.max(0, -section.getBoundingClientRect().top);
      const cards    = stack.querySelectorAll(".swipe-card");

      cards.forEach((card, i) => {
        const start    = i * SCROLL_PER_CARD;
        const progress = Math.max(0, Math.min(1, (scrolled - start) / SCROLL_PER_CARD));

        if (progress === 0) {
          // Resting in deck
          const dy  = i * 5;
          const rot = (i - (projects.length - 1) / 2) * 1.4;
          card.style.transform     = `translateY(${dy}px) rotate(${rot}deg)`;
          card.style.opacity       = "1";
          card.style.pointerEvents = "auto";
          card.style.zIndex        = projects.length - i;
        } else {
          // Fly to top-right — dealing animation
          const ease    = 1 - Math.pow(1 - progress, 3);
          const tx      = ease * 220;
          const ty      = ease * -500;
          const rot     = ease * 32;
          const opacity = progress > 0.55
            ? Math.max(0, 1 - (progress - 0.55) / 0.45)
            : 1;

          card.style.transform     = `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg)`;
          card.style.opacity       = String(opacity);
          card.style.pointerEvents = "none";
          card.style.zIndex        = projects.length + 10 - i;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    /*
     * KEY STRUCTURE:
     *   <section>  height = 100vh + N*SCROLL_PER_CARD   ← provides all scroll budget
     *     <div>    position:sticky  top:0  height:100vh  ← locks to screen immediately
     *       header + card stack                           ← always visible while stuck
     *     </div>
     *   </section>
     *
     * The sticky child touches top:0 of the section, so the freeze happens the
     * instant the section enters the viewport — and releases only when the section's
     * bottom edge scrolls past the viewport bottom.
     */
    <section
      ref={sectionRef}
      id="projects"
      style={{
        position: "relative",
        // height set by JS above
      }}
    >
      {/* ── Sticky frame: locks to viewport for the entire section scroll ── */}
      <div
        style={{
          position:       "sticky",
          top:            0,
          height:         "100vh",
          width:          "100%",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          overflow:       "hidden",
          background:     "var(--bg-primary)",
        }}
      >
        {/* Top accent line */}
        <div style={{
          position:   "absolute",
          top:        0, left: 0, right: 0,
          height:     "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }} />

        {/* Section header — pinned inside the sticky frame, top-left */}
        <div style={{
          position: "absolute",
          top:      "2.5rem",
          left:     "5vw",
        }}>
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            My <span className="dim">Projects</span>
          </h2>
        </div>

        {/* Card count indicator — top-right */}
        <div style={{
          position:      "absolute",
          top:           "2.5rem",
          right:         "5vw",
          textAlign:     "right",
        }}>
          <div style={{
            fontSize:      "0.6rem",
            fontWeight:    700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color:         "var(--text-muted)",
          }}>
            {projects.length} Projects
          </div>
          <div style={{
            fontSize:   "0.62rem",
            color:      "var(--text-muted)",
            marginTop:  "0.3rem",
            opacity:    0.6,
          }}>
            ↓ scroll to deal
          </div>
        </div>

        {/* ── Card stack ── */}
        <div
          ref={stackRef}
          style={{
            position: "relative",
            width:    "min(480px, 86vw)",
            height:   "min(500px, 70vh)",
            marginTop: "2rem",
          }}
        >
          {/* Render reversed so first card (index 0) is on top in DOM stacking */}
          {[...projects].reverse().map((project, reversedIdx) => {
            const i       = projects.length - 1 - reversedIdx;
            const initDy  = i * 5;
            const initRot = (i - (projects.length - 1) / 2) * 1.4;

            const statusColor  = project.status === "live" ? "#22c55e" : project.status === "dev" ? "#f59e0b" : "var(--accent)";
            const statusBg     = project.status === "live" ? "rgba(34,197,94,0.1)" : project.status === "dev" ? "rgba(245,158,11,0.1)" : "var(--accent-dim)";
            const statusBorder = project.status === "live" ? "1px solid rgba(34,197,94,0.3)" : project.status === "dev" ? "1px solid rgba(245,158,11,0.3)" : "1px solid var(--border-accent)";

            return (
              <div
                key={project.id}
                className="swipe-card"
                style={{
                  position:        "absolute",
                  inset:           0,
                  background:      "var(--bg-card)",
                  border:          "1px solid var(--border)",
                  borderRadius:    "18px",
                  padding:         "1.75rem 2rem",
                  display:         "flex",
                  flexDirection:   "column",
                  gap:             "0.85rem",
                  transformOrigin: "bottom center",
                  transform:       `translateY(${initDy}px) rotate(${initRot}deg)`,
                  zIndex:          projects.length - i,
                  willChange:      "transform, opacity",
                  boxShadow:       "0 20px 60px rgba(0,0,0,0.55)",
                  overflow:        "hidden",
                }}
              >
                {/* Glow corner */}
                <div style={{
                  position:   "absolute", top: 0, right: 0,
                  width: "140px", height: "140px",
                  background: "radial-gradient(circle at top right, rgba(0,212,255,0.07), transparent 70%)",
                  pointerEvents: "none",
                }} />

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      {project.type}
                    </span>
                    <span style={{ display: "inline-block", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.18rem 0.6rem", borderRadius: "20px", color: statusColor, background: statusBg, border: statusBorder }}>
                      {project.statusLabel}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'momo', sans-serif", fontSize: "3.75rem", color: "var(--border)", lineHeight: 1, userSelect: "none", opacity: 0.7 }}>
                    {project.number}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.45rem)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>
                  {project.title}
                </h3>

                {/* Divider */}
                <div style={{ height: "1px", background: "linear-gradient(90deg, var(--accent), transparent)", opacity: 0.25, flexShrink: 0 }} />

                {/* Description */}
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, flex: 1, margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {project.tech.slice(0, 5).map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 5 && <span className="tech-tag">+{project.tech.length - 5}</span>}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "1rem", paddingTop: "0.7rem", borderTop: "1px solid var(--border)", flexShrink: 0 }}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <GithubIcon /> GitHub
                  </a>
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalIcon /> Live
                    </a>
                  )}
                  {project.live === "#" && (
                    <span className="project-link" style={{ opacity: 0.35, cursor: "not-allowed" }}>
                      <ExternalIcon /> Soon
                    </span>
                  )}
                </div>

                {/* Bottom glow */}
                <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px", background: "var(--accent)", opacity: 0.18 }} />
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div style={{ position: "absolute", bottom: "2rem", display: "flex", gap: "8px", alignItems: "center" }}>
          {projects.map((_, i) => (
            <div key={i} className={`card-dot-${i}`} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", opacity: 0.4 }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
