import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const techData = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

const marqueeRow1 = [...techData.slice(0, 10), ...techData.slice(0, 10)];
const marqueeRow2 = [...techData.slice(10), ...techData.slice(10)];

const TechTools = () => {
  useScrollAnimation();

  return (
    <section className="tech-section" id="tech">
      <div className="aos-init" style={{ marginBottom: "3rem" }}>
        <div className="section-eyebrow">Stack</div>
        <h2 className="section-title">Tech & <span className="dim">Tools</span></h2>
        <p className="section-desc">The technologies I work with to build fast, scalable, and production-grade applications.</p>
      </div>

      {/* Marquee row 1 */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {marqueeRow1.map((t, i) => (
            <div key={i} className="tech-pill">
              <img src={t.icon} alt={t.name} style={{ filter: t.name === "Express" || t.name === "GitHub" || t.name === "GitHub" ? "invert(1)" : undefined }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 reversed */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee tech-marquee-reverse">
          {marqueeRow2.map((t, i) => (
            <div key={i} className="tech-pill">
              <img src={t.icon} alt={t.name} />
              {t.name}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="tech-grid-main">
        {techData.map((t, i) => (
          <div key={t.name} className="tech-box aos-scale" style={{ transitionDelay: `${i * 40}ms` }}>
            <img
              src={t.icon}
              alt={t.name}
              style={{ filter: t.name === "Express" || t.name === "GitHub" ? "invert(0.7)" : undefined }}
            />
            <span>{t.name}</span>
          </div>
        ))}
      </div>

      {/* Floating categories */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "4rem" }}>
        {[
          { label: "Frontend", items: "React, HTML, CSS, Tailwind, JS, TS" },
          { label: "Backend", items: "Node.js, Express, PHP, REST APIs" },
          { label: "Databases", items: "MongoDB, MySQL, PostgreSQL" },
          { label: "Tools & More", items: "Git, GitHub, VS Code, Postman, Figma" },
        ].map((cat, i) => (
          <div key={cat.label} className="highlight-item aos-init" style={{ transitionDelay: `${i * 100}ms`, flexDirection: "column", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>{cat.label}</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{cat.items}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechTools;
