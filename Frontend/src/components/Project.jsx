import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "NCC — 38 GUJARAT BN",
    desc: "A comprehensive full-stack webapp for the National Cadet Corps battalion. Features event-based attendance tracking, cadet profile management, automated data fetch from Excel sheets, notices board, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Excel-Parser"],
    github: "https://github.com/ZalaNidhsih",
    live: "https://ncc-38gujbn.vercel.app",
    status: "dev",
    statusLabel: "Hosting Soon",
    featured: true,
    number: "01",
    type: "Full Stack",
  },
  {
    id: 2,
    title: "PixelPlus Media",
    desc: "Marketing agency website connecting businesses with growth solutions. Primary feature is seamless meeting and call booking powered by Calendly integration, with a polished responsive frontend.",
    tech: ["React", "Tailwind CSS", "Swiper.js", "Calendly API"],
    github: "https://github.com/ZalaNidhsih",
    live: "#",
    status: "live",
    statusLabel: "Live",
    featured: false,
    number: "02",
    type: "Frontend",
  },
  {
    id: 3,
    title: "Laxmi Cement Articles",
    desc: "E-catalog website for a cement articles manufacturer. Visitors can browse the full product catalogue, view pricing, contact the owner, and locate the factory via embedded Google Maps.",
    tech: ["React", "Tailwind CSS", "Swiper.js", "Google Maps"],
    github: "https://github.com/ZalaNidhsih",
    live: "https://laxmicementarticles.vercel.app",
    status: "live",
    statusLabel: "Live",
    featured: false,
    number: "03",
    type: "Frontend",
  },
  {
    id: 4,
    title: "Rangila Resto",
    desc: "Restaurant website with rich UI/UX. Includes full menu listing with item images, promo offer sliders, horizontal about-section scrollers, and a backend-driven daily special menu system.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ZalaNidhsih",
    live: "#",
    status: "dev",
    statusLabel: "Dev Project",
    featured: false,
    number: "04",
    type: "Full Stack",
  },
  {
    id: 5,
    title: "EMS — Employee Mgmt System",
    desc: "PHP & MySQL academic project for employee management. Covers employee records, leave management, payroll overview, and departmental reporting with a clean HTML/CSS frontend.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/ZalaNidhsih",
    live: null,
    status: "academic",
    statusLabel: "Academic",
    featured: false,
    number: "05",
    type: "Full Stack",
  },
  {
    id: 6,
    title: "Chocolate Factory System",
    desc: "Inventory and management system for a chocolate manufacturing unit. Built as a college academic project using PHP and MySQL, covering production tracking and order management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/ZalaNidhsih",
    live: null,
    status: "academic",
    statusLabel: "Academic",
    featured: false,
    number: "06",
    type: "Full Stack",
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

const FeaturedProject = ({ project }) => (
  <div className="featured-project aos-init">
    <div className="project-image-side">
      <span className="featured-badge">Best Work</span>
      <div className="project-img-placeholder">
        {/* ADD PROJECT SCREENSHOT: <img src="..." alt={project.title} /> */}
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ fontSize: "3rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <p className="ph-text" style={{ color: "var(--text-muted)", fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            Screenshot Placeholder<br/>
            <span style={{ color: "var(--border)", fontSize: "0.65rem" }}>Add src to img tag</span>
          </p>
        </div>
      </div>
    </div>
    <div className="project-content-side">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div className="project-number">{project.number}</div>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>{project.type}</span>
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-desc">{project.desc}</p>
      <div className="tech-tag-list">
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
          <GithubIcon /> GitHub
        </a>
        {project.live && project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
            <ExternalIcon /> Live Preview
          </a>
        )}
        {project.live === "#" && (
          <span className="project-link" style={{ opacity: 0.4, cursor: "not-allowed" }}>
            <ExternalIcon /> Hosting Soon
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, delay }) => (
  <div className="project-card aos-init" style={{ transitionDelay: `${delay}ms` }}>
    <div className="card-image">
      <div className="card-ph">
        {/* ADD PROJECT IMAGE: <img src="..." alt={project.title} /> */}
        <span style={{ opacity: 0.35 }}>{project.number}</span>
      </div>
    </div>
    <div className="card-body">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3 className="card-title">{project.title}</h3>
        <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{project.type}</span>
      </div>
      <p className="card-desc">{project.desc}</p>
      <div className="tech-tag-list">
        {project.tech.slice(0, 4).map(t => <span key={t} className="tech-tag">{t}</span>)}
        {project.tech.length > 4 && <span className="tech-tag">+{project.tech.length - 4}</span>}
      </div>
    </div>
    <div className="card-footer">
      <span className={`card-status status-${project.status}`}>{project.statusLabel}</span>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <a href={project.github} target="_blank" rel="noreferrer" className="project-link" style={{ padding: 0, border: "none" }}>
          <GithubIcon />
        </a>
        {project.live && project.live !== "#" && (
          <a href={project.live} target="_blank" rel="noreferrer" className="project-link" style={{ padding: 0, border: "none" }}>
            <ExternalIcon />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Project = () => {
  useScrollAnimation();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="projects-section" id="projects">
      <div style={{ marginBottom: "4rem" }} className="aos-init">
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">My <span className="dim">Projects</span></h2>
        <p className="section-desc">A mix of real-world client work, full-stack builds, and academic systems — all crafted with attention to code quality and user experience.</p>
      </div>

      <FeaturedProject project={featured} />

      <div className="project-grid">
        {rest.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 80} />
        ))}
      </div>
    </section>
  );
};

export default Project;
