import React, { useEffect, useRef } from "react";
import photo from "../assets/nidhish.jpg";

const PROJECTS = [
  { title: "NCC — 38 Gujarat BN Website",  stack: "React · Node.js · MongoDB · Express · JWT",  desc: "Full-stack battalion management — event attendance, cadet profiles, Excel data import, admin dashboard.", link: "ncc-38gujbn.vercel.app" },
  { title: "PixelPlus Media",              stack: "React · Tailwind CSS · Swiper.js · Calendly", desc: "Marketing agency site with integrated Calendly meeting booking." },
  { title: "Laxmi Cement Articles",        stack: "React · Tailwind CSS · Google Maps",          desc: "Product catalogue with pricing, owner contact & embedded factory map.", link: "laxmicementarticles.vercel.app" },
  { title: "Rangila Resto",                stack: "React · Node.js · MongoDB · Tailwind",        desc: "Restaurant site with menu, offer sliders, and backend daily specials." },
  { title: "EMS — Employee Mgmt System",   stack: "PHP · MySQL · HTML · CSS · Bootstrap",        desc: "Academic: employee records, leave management, payroll & dept reports." },
  { title: "Chocolate Factory System",     stack: "PHP · MySQL · HTML · CSS",                    desc: "Inventory & order management system — academic project." },
];

const SKILLS = [
  { cat: "FRONTEND",   items: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"] },
  { cat: "BACKEND",    items: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Auth"] },
  { cat: "DATABASES",  items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { cat: "TOOLS",      items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vite"] },
];

function imgToDataURL(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      c.getContext("2d").drawImage(img, 0, 0);
      resolve(c.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => resolve("");
    img.src = src;
  });
}

function buildPrintHTML(photoB64) {
  const tag = (text) =>
    `<span style="display:inline-block;font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;
     background:#001f2e;border:1px solid #004d5c;color:#00d4ff;
     letter-spacing:.04em;margin:2px 2px 0 0;white-space:nowrap">${text}</span>`;

  const secTitle = (t) =>
    `<div style="font-size:8px;font-weight:900;letter-spacing:.25em;text-transform:uppercase;
     color:#00d4ff;border-bottom:1px solid #1e293b;padding-bottom:5px;margin:0 0 10px">${t}</div>`;

  const projectRows = PROJECTS.map(p => `
    <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #1a2535">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px">
        <span style="font-weight:700;color:#e2e8f0;font-size:11px">${p.title}</span>
        ${p.link ? `<span style="font-size:8.5px;color:#00d4ff;flex-shrink:0">${p.link}</span>` : ""}
      </div>
      <div style="font-size:9px;color:#00d4ff;margin-top:2px">${p.stack}</div>
      <div style="font-size:10px;color:#94a3b8;margin-top:3px;line-height:1.55">${p.desc}</div>
    </div>`).join("");

  const skillRows = SKILLS.map(s => `
    <div style="margin-bottom:8px">
      <div style="font-size:7.5px;font-weight:800;color:#475569;text-transform:uppercase;
        letter-spacing:.15em;margin-bottom:4px">${s.cat}</div>
      <div>${s.items.map(tag).join("")}</div>
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Nidhish Zala — Resume</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: #07070f !important;
    color: #e2e8f0;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 12px;
    line-height: 1.55;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  @page { size: A4 portrait; margin: 10mm 11mm; }
  @media print { html, body { background: #07070f !important; } }
</style>
</head>
<body style="background:#07070f;padding:0;margin:0">
<div style="background:#07070f;min-height:100vh;padding:16px 18px;max-width:860px;margin:0 auto">

  <!-- HEADER -->
  <div style="display:flex;align-items:flex-start;gap:14px;
    border-bottom:2px solid #00d4ff;padding-bottom:12px;margin-bottom:16px">
    ${photoB64 ? `<img src="${photoB64}" style="width:58px;height:58px;border-radius:50%;
      object-fit:cover;object-position:center top;
      border:2px solid #00d4ff;flex-shrink:0" />` : ""}
    <div>
      <div style="font-size:24px;font-weight:800;color:#e2e8f0;letter-spacing:-.02em;line-height:1">
        Nidhish Zala</div>
      <div style="color:#00d4ff;font-size:12px;font-weight:600;margin-top:3px">
        Full Stack Web Developer</div>
      <div style="color:#94a3b8;font-size:10px;margin-top:1px">MERN Stack · PHP · MySQL</div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:5px">
        ${["nidhish1132007@gmail.com","+91 90163 25239","github.com/ZalaNidhsih",
           "linkedin.com/in/nidhish-zala","Anand, Gujarat, India"]
          .map(v=>`<span style="font-size:9px;color:#94a3b8">${v}</span>`).join("")}
      </div>
    </div>
  </div>

  <!-- TWO COLUMN BODY -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">

    <!-- LEFT -->
    <div>
      ${secTitle("Objective")}
      <p style="font-size:10px;color:#94a3b8;line-height:1.7;margin-bottom:16px">
        Motivated Full Stack Developer and First Year Computer Engineering student at BVM Engineering
        College, VV Nagar. Proficient in MERN stack, PHP, and MySQL — built real-world client projects
        and institutional systems. Seeking opportunities to grow professionally.
      </p>

      ${secTitle("Education")}
      <div style="margin-bottom:16px">
        <div style="font-weight:700;color:#e2e8f0;font-size:11.5px">B.E. in Computer Engineering</div>
        <div style="font-size:9.5px;color:#00d4ff;margin-top:2px">
          BVM Engineering College, VV Nagar — 2024–Present</div>
        <div style="font-size:9.5px;color:#94a3b8;margin-top:2px">
          First Year · Software Development · Data Structures</div>
      </div>

      ${secTitle("Achievements")}
      <div style="margin-bottom:16px">
        ${[{label:"1st",title:"Winner — UDAAN'26 Tech Event",sub:"BVM Engineering College"},
           {label:"2nd",title:"Runner-Up — UDAAN'26 Tech Event",sub:"BVM Engineering College"}]
          .map(a=>`
          <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px">
            <div style="width:24px;height:24px;border-radius:50%;background:#001f2e;
              border:1px solid #004d5c;display:flex;align-items:center;justify-content:center;
              font-size:7.5px;font-weight:800;color:#00d4ff;flex-shrink:0">${a.label}</div>
            <div>
              <div style="font-weight:700;color:#e2e8f0;font-size:10.5px">${a.title}</div>
              <div style="font-size:9px;color:#94a3b8">${a.sub}</div>
            </div>
          </div>`).join("")}
      </div>

      ${secTitle("Technical Skills")}
      ${skillRows}
    </div>

    <!-- RIGHT -->
    <div>
      ${secTitle("Projects")}
      ${projectRows}
    </div>

  </div>

  <!-- FOOTER -->
  <div style="margin-top:14px;padding-top:8px;border-top:1px solid #1e293b;
    font-size:8.5px;color:#475569;text-align:center">
    github.com/ZalaNidhsih · nidhish1132007@gmail.com · +91 90163 25239
  </div>

</div>
</body>
</html>`;
}

const ResumeModal = ({ onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  const handleOverlay = (e) => { if (e.target === overlayRef.current) onClose(); };

  const handlePrint = async () => {
    const photoB64 = await imgToDataURL(photo);
    const html = buildPrintHTML(photoB64);
    const win = window.open("", "_blank", "width=860,height=700,scrollbars=yes");
    if (!win) { alert("Please allow popups for this site to print the resume."); return; }
    win.document.write(html);
    win.document.close();
    setTimeout(() => { try { win.focus(); win.print(); } catch(e) {} }, 800);
  };

  const C = {
    accent: "#00d4ff", text: "#e2e8f0", muted: "#94a3b8",
    dim: "#475569", border: "#1e293b", bg2: "#0f0f1a",
    card: "#12121e",
  };

  const SecTitle = ({ l }) => (
    <div style={{
      fontSize: ".6rem", fontWeight: 800, letterSpacing: ".22em", textTransform: "uppercase",
      color: C.accent, borderBottom: `1px solid ${C.border}`, paddingBottom: "5px", marginBottom: "12px",
      display: "flex", alignItems: "center", gap: "0.6rem",
    }}>
      <span style={{ display: "block", width: "16px", height: "1px", background: C.accent, opacity: 0.5 }} />
      {l}
    </div>
  );

  const Tag = ({ v }) => (
    <span style={{
      display: "inline-block", fontSize: ".6rem", fontWeight: 600, padding: "2px 6px",
      borderRadius: 3, background: "rgba(0,212,255,.08)", border: "1px solid rgba(0,212,255,.2)",
      color: C.accent, margin: "2px 2px 0 0",
    }}>
      {v}
    </span>
  );

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlay}>
      <div className="modal-box" style={{ background: "#0a0a12", border: "1px solid #1e293b" }}>
        <button className="modal-close" onClick={onClose}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header strip */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "1.25rem",
          borderBottom: `2px solid ${C.accent}`,
          paddingBottom: "1.25rem", marginBottom: "1.5rem",
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <img src={photo} alt="Nidhish Zala"
              style={{
                width: 64, height: 64, borderRadius: "50%", objectFit: "cover",
                objectPosition: "center top", border: `2px solid ${C.accent}`,
                display: "block",
              }} />
            <div style={{
              position: "absolute", bottom: -2, right: -2,
              width: 14, height: 14, borderRadius: "50%",
              background: "#22c55e", border: "2px solid #0a0a12",
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'momo',sans-serif", fontSize: "1.7rem", color: C.text, lineHeight: 1 }}>
              Nidhish Zala
            </div>
            <div style={{ color: C.accent, fontSize: ".85rem", fontWeight: 600, marginTop: 3 }}>
              Full Stack Web Developer
            </div>
            <div style={{ color: C.muted, fontSize: ".7rem", marginTop: 2 }}>
              MERN Stack · PHP · MySQL · PostgreSQL
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginTop: "0.5rem" }}>
              {[
                { icon: "✉", val: "nidhish1132007@gmail.com" },
                { icon: "📱", val: "+91 90163 25239" },
                { icon: "⌨", val: "github.com/ZalaNidhsih" },
                { icon: "in", val: "linkedin.com/in/nidhish-zala" },
              ].map(c => (
                <span key={c.val} style={{ fontSize: ".66rem", color: C.muted, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span style={{ color: C.accent, fontSize: ".6rem" }}>{c.icon}</span>
                  {c.val}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column body */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>

          {/* Left column */}
          <div>
            {/* Objective */}
            <div style={{ marginBottom: "1.4rem" }}>
              <SecTitle l="Objective"/>
              <p style={{ fontSize: ".76rem", color: C.muted, lineHeight: 1.75 }}>
                Motivated Full Stack Developer and First Year Computer Engineering student at BVM Engineering
                College. Proficient in MERN stack, PHP, and MySQL — built real-world client projects and
                institutional systems. Seeking opportunities to grow professionally.
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: "1.4rem" }}>
              <SecTitle l="Education"/>
              <div style={{
                padding: "0.75rem 1rem",
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: "8px",
                borderLeft: `3px solid ${C.accent}`,
              }}>
                <div style={{ fontWeight: 700, color: C.text, fontSize: ".82rem" }}>B.E. in Computer Engineering</div>
                <div style={{ fontSize: ".7rem", color: C.accent, marginTop: 3 }}>BVM Engineering College, VV Nagar</div>
                <div style={{ fontSize: ".68rem", color: C.muted, marginTop: 2 }}>2024–Present · First Year</div>
                <div style={{ fontSize: ".68rem", color: C.dim, marginTop: 2 }}>Software Dev · Data Structures</div>
              </div>
            </div>

            {/* Achievements */}
            <div style={{ marginBottom: "1.4rem" }}>
              <SecTitle l="Achievements"/>
              {[
                { medal: "🥇", rank: "1st", title: "Winner — UDAAN'26 Tech Event" },
                { medal: "🥈", rank: "2nd", title: "Runner-Up — UDAAN'26 Tech Event" },
              ].map(a => (
                <div key={a.title} style={{
                  display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem",
                  padding: "0.65rem 0.9rem",
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: "8px",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".58rem", fontWeight: 800, color: C.accent, flexShrink: 0,
                  }}>
                    {a.rank}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: C.text, fontSize: ".79rem" }}>{a.title}</div>
                    <div style={{ fontSize: ".67rem", color: C.muted, marginTop: 1 }}>BVM Engineering College</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <SecTitle l="Technical Skills"/>
              {SKILLS.map(s => (
                <div key={s.cat} style={{ marginBottom: "0.7rem" }}>
                  <div style={{
                    fontSize: ".58rem", fontWeight: 700, color: C.dim,
                    textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 4,
                  }}>{s.cat}</div>
                  <div>{s.items.map(sk => <Tag key={sk} v={sk}/>)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Projects */}
          <div>
            <SecTitle l="Projects"/>
            {PROJECTS.map((p, i) => (
              <div key={p.title} style={{
                marginBottom: "0.9rem",
                paddingBottom: "0.9rem",
                borderBottom: i < PROJECTS.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.4rem" }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: ".8rem", lineHeight: 1.3 }}>{p.title}</div>
                  {p.link && (
                    <span style={{ fontSize: ".6rem", color: C.accent, flexShrink: 0, marginTop: 1 }}>{p.link}</span>
                  )}
                </div>
                <div style={{ fontSize: ".66rem", color: C.accent, marginTop: 3, opacity: 0.85 }}>{p.stack}</div>
                <div style={{ fontSize: ".73rem", color: C.muted, marginTop: 4, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Actions */}
        <div style={{
          display: "flex", gap: "0.75rem",
          marginTop: "1.5rem",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "1.25rem",
        }}>
          <button className="btn-primary" onClick={handlePrint}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Download / Print PDF
          </button>
          <button className="btn-secondary" onClick={onClose} style={{ fontSize: "0.8rem" }}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
