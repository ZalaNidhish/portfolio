import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import photo from "../assets/nidhish.jpg";

const About = () => {
  useScrollAnimation();

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "6rem" }}>
      <section className="about-section">
        <div className="about-grid">
          {/* Photo side */}
          <div className="about-img-wrapper aos-left">
            <div style={{ position: "relative" }}>
              <div className="about-img-frame">
                <img src={photo} alt="Nidhish Zala" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                {/* Overlay tint */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,15,0.4) 100%)", pointerEvents: "none", zIndex: 1 }} />
              </div>
              <div className="about-frame-deco" />
              <div className="about-badge">
                <div className="about-badge-num">FY</div>
                <div className="about-badge-label">Comp Eng</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="about-content aos-right">
            <div>
              <div className="section-eyebrow">About Me</div>
              <h1 className="section-title">The Developer<br /><span className="dim">Behind the Code</span></h1>
            </div>

            <p className="about-bio">
              I'm Nidhish Zala, a Full Stack Web Developer and First Year Computer Engineering student at BVM Engineering College, VV Nagar. I started coding out of curiosity and turned it into a craft — building real-world applications while still in my first year.
            </p>
            <p className="about-bio" style={{ marginTop: "-0.5rem" }}>
              I work across the full stack: pixel-perfect frontends with React and Tailwind, backend systems with Node.js and Express, databases with MongoDB and MySQL, and PHP-based academic projects. I build things that are both technically solid and visually sharp.
            </p>

            <div className="about-info-grid">
              {[
                { label: "College", value: "BVM Engineering College, VV Nagar" },
                { label: "Year", value: "First Year — Computer Engineering" },
                { label: "Location", value: "Anand, Gujarat, India" },
                { label: "Email", value: <a href="mailto:nidhish1132007@gmail.com">nidhish1132007@gmail.com</a> },
                { label: "GitHub", value: <a href="https://github.com/ZalaNidhsih" target="_blank" rel="noreferrer">github.com/ZalaNidhsih</a> },
                { label: "Phone", value: "+91 90163 25239" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="info-label">{label}</div>
                  <div className="info-value">{value}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div style={{ marginTop: "0.5rem" }}>
              <div className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>Achievements</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { title: "Winner — UDAAN'26", sub: "Tech Event · BVM Engineering College", color: "#f59e0b" },
                  { title: "Runner-Up — UDAAN'26", sub: "Tech Event · BVM Engineering College", color: "#94a3b8" },
                ].map((a) => (
                  <div key={a.title} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "0.875rem 1.25rem", background: "var(--bg-card)",
                    border: "1px solid var(--border)", borderRadius: "8px",
                    borderLeft: `3px solid ${a.color}`,
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: a.color + "18", border: `1px solid ${a.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={a.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9rem" }}>{a.title}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{a.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { icon: "⚡", text: <><strong>Real-world experience</strong> — deployed client projects including a marketing agency site and a cement factory e-catalog.</> },
                { icon: "🏗", text: <><strong>Full stack capability</strong> — MERN stack, PHP/MySQL backends, REST APIs, authentication, and Excel data automation.</> },
              ].map((h, i) => (
                <div key={i} className="highlight-item">
                  <span className="hi-icon">{h.icon}</span>
                  <span className="hi-text">{h.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/#projects" className="btn-primary">View Projects</a>
              <a href="/#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "4rem 5vw 8rem", background: "var(--bg-secondary)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
        <div className="aos-init" style={{ marginBottom: "3rem" }}>
          <div className="section-eyebrow">Journey</div>
          <h2 className="section-title">How I <span className="dim">Got Here</span></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: "700px", position: "relative" }}>
          <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, var(--accent), var(--border))" }} />
          {[
            { year: "2022", title: "First Line of Code", desc: "Started learning HTML & CSS, built first static website out of pure curiosity." },
            { year: "2023", title: "JavaScript & React", desc: "Learned JavaScript deeply, picked up React, and built first dynamic web applications." },
            { year: "2024", title: "Full Stack & First Clients", desc: "Completed PixelPlus Media and Laxmi Cement Articles — first real-world client projects deployed to production." },
            { year: "2024", title: "Joined BVM Engineering College", desc: "Enrolled in B.E. Computer Engineering. Continued building projects alongside academics." },
            { year: "2025", title: "UDAAN'26 — Double Trophy", desc: "Won both a Winner and Runner-Up trophy at UDAAN'26 tech events at BVM Engineering College." },
            { year: "2025", title: "NCC Webapp — Biggest Build Yet", desc: "Developing a full-stack institutional webapp for 38 Gujarat BN NCC — event attendance, cadet profiles, Excel automation." },
          ].map((item, i) => (
            <div key={i} className="aos-init" style={{ display: "flex", gap: "1.5rem", paddingBottom: "2.5rem", position: "relative", transitionDelay: `${i * 80}ms` }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent)", flexShrink: 0, zIndex: 1, marginTop: "0.1rem" }} />
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase" }}>{item.year}</div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginTop: "0.2rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.25rem", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
