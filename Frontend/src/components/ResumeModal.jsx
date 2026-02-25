import React, { useEffect, useRef } from "react";
import photo from "../assets/nidhish.jpg";

const PROJECTS = [
  { title: "NCC — 38 Gujarat BN Website",  stack: "React · Node.js · MongoDB · Express · JWT",  desc: "Full-stack battalion management — event attendance, cadet profiles, Excel data import, admin dashboard.", highlight: true },
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

/* ─── convert imported asset URL → base64 data URL ─────────────────────── */
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

/* ─── Build the full self-contained HTML for the print window ───────────── */
function buildPrintHTML(photoB64) {
  const tag = (text) =>
    `<span style="display:inline-block;font-size:9.5px;font-weight:700;padding:2px 8px;border-radius:3px;
     background:#001f2e;border:1px solid #004d5c;color:#00d4ff;
     letter-spacing:.04em;margin:2px 2px 0 0;white-space:nowrap">${text}</span>`;

  const secTitle = (t) =>
    `<div style="font-size:8.5px;font-weight:900;letter-spacing:.25em;text-transform:uppercase;
     color:#00d4ff;border-bottom:1px solid #1e293b;padding-bottom:5px;margin:0 0 11px">${t}</div>`;

  const projectRows = PROJECTS.map(p => `
    <div style="margin-bottom:11px;padding-bottom:11px;border-bottom:1px solid #1a2535;
      ${p.highlight ? "border-left:3px solid #00d4ff;padding-left:8px;" : ""}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px">
        <span style="font-weight:700;color:#e2e8f0;font-size:11.5px">${p.title}</span>
        ${p.link ? `<span style="font-size:9px;color:#00d4ff;flex-shrink:0">${p.link}</span>` : ""}
      </div>
      <div style="font-size:9.5px;color:#00d4ff;margin-top:2px">${p.stack}</div>
      <div style="font-size:10.5px;color:#94a3b8;margin-top:3px;line-height:1.55">${p.desc}</div>
    </div>`).join("");

  const skillRows = SKILLS.map(s => `
    <div style="margin-bottom:9px">
      <div style="font-size:8px;font-weight:800;color:#475569;text-transform:uppercase;
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
    background: #0a0a0f !important;
    color: #e2e8f0;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 12px;
    line-height: 1.55;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  @page { size: A4 portrait; margin: 10mm 11mm; }
  @media print {
    html, body { background: #0a0a0f !important; }
  }
</style>
</head>
<body style="background:#0a0a0f;padding:0;margin:0">
<div style="background:#0a0a0f;min-height:100vh;padding:18px 20px;max-width:860px;margin:0 auto">

  <!-- HEADER -->
  <div style="display:flex;align-items:flex-start;gap:16px;
    border-bottom:2px solid #00d4ff;padding-bottom:14px;margin-bottom:18px">
    ${photoB64 ? `<img src="${photoB64}" style="width:62px;height:62px;border-radius:50%;
      object-fit:cover;object-position:center top;
      border:2px solid #00d4ff;flex-shrink:0" />` : ""}
    <div>
      <div style="font-size:26px;font-weight:800;color:#e2e8f0;letter-spacing:-.02em;line-height:1">
        Nidhish Zala</div>
      <div style="color:#00d4ff;font-size:12.5px;font-weight:600;margin-top:3px">
        Full Stack Web Developer</div>
      <div style="color:#94a3b8;font-size:10.5px;margin-top:1px">MERN Stack · PHP · MySQL</div>
      <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:6px">
        ${["nidhish1132007@gmail.com","+91 90163 25239","github.com/ZalaNidhsih",
           "linkedin.com/in/nidhish-zala","Anand, Gujarat, India"]
          .map(v=>`<span style="font-size:9.5px;color:#94a3b8">${v}</span>`).join("")}
      </div>
    </div>
  </div>

  <!-- TWO COLUMN BODY -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px">

    <!-- LEFT -->
    <div>
      ${secTitle("Objective")}
      <p style="font-size:10.5px;color:#94a3b8;line-height:1.7;margin-bottom:18px">
        Motivated Full Stack Developer and First Year Computer Engineering student at BVM Engineering
        College, VV Nagar. Proficient in MERN stack, PHP, and MySQL — built real-world client projects
        and institutional systems. Seeking opportunities to grow professionally.
      </p>

      ${secTitle("Education")}
      <div style="margin-bottom:18px">
        <div style="font-weight:700;color:#e2e8f0;font-size:12px">B.E. in Computer Engineering</div>
        <div style="font-size:10px;color:#00d4ff;margin-top:2px">
          BVM Engineering College, VV Nagar — 2024–Present</div>
        <div style="font-size:10px;color:#94a3b8;margin-top:2px">
          First Year · Software Development · Data Structures</div>
      </div>

      ${secTitle("Achievements")}
      <div style="margin-bottom:18px">
        ${[{label:"1st",title:"Winner — UDAAN'26 Tech Event",sub:"BVM Engineering College"},
           {label:"2nd",title:"Runner-Up — UDAAN'26 Tech Event",sub:"BVM Engineering College"}]
          .map(a=>`
          <div style="display:flex;align-items:flex-start;gap:9px;margin-bottom:9px">
            <div style="width:26px;height:26px;border-radius:50%;background:#001f2e;
              border:1px solid #004d5c;display:flex;align-items:center;justify-content:center;
              font-size:8px;font-weight:800;color:#00d4ff;flex-shrink:0">${a.label}</div>
            <div>
              <div style="font-weight:700;color:#e2e8f0;font-size:11px">${a.title}</div>
              <div style="font-size:9.5px;color:#94a3b8">${a.sub}</div>
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
  <div style="margin-top:16px;padding-top:10px;border-top:1px solid #1e293b;
    font-size:9px;color:#475569;text-align:center">
    github.com/ZalaNidhsih · nidhish1132007@gmail.com · +91 90163 25239
  </div>

</div>
</body>
</html>`;
}

/* ─── Modal ──────────────────────────────────────────────────────────────── */
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

  /* preview palette */
  const C = {
    accent:"#00d4ff", text:"#e2e8f0", muted:"#94a3b8",
    dim:"#475569", border:"#1e293b", bg2:"#12121e",
  };

  const SecTitle = ({l}) => (
    <div style={{fontSize:".62rem",fontWeight:800,letterSpacing:".22em",textTransform:"uppercase",
      color:C.accent,borderBottom:`1px solid ${C.border}`,paddingBottom:"4px",marginBottom:"10px"}}>
      {l}
    </div>
  );
  const Tag = ({v}) => (
    <span style={{display:"inline-block",fontSize:".63rem",fontWeight:600,padding:"2px 7px",
      borderRadius:3,background:"rgba(0,212,255,.1)",border:"1px solid rgba(0,212,255,.25)",
      color:C.accent,margin:"2px 2px 0 0"}}>
      {v}
    </span>
  );

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlay}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* ── PREVIEW ── */}
        <div style={{fontFamily:"'DM Sans','Segoe UI',sans-serif",color:C.text}}>

          {/* Header */}
          <div style={{display:"flex",alignItems:"flex-start",gap:"1.1rem",
            borderBottom:`2px solid ${C.accent}`,paddingBottom:"1.1rem",marginBottom:"1.4rem"}}>
            <img src={photo} alt="Nidhish Zala"
              style={{width:60,height:60,borderRadius:"50%",objectFit:"cover",
                objectPosition:"center top",border:`2px solid ${C.accent}`,flexShrink:0}} />
            <div>
              <div style={{fontFamily:"'momo',sans-serif",fontSize:"1.6rem",color:C.text,lineHeight:1}}>
                Nidhish Zala</div>
              <div style={{color:C.accent,fontSize:".85rem",fontWeight:600,marginTop:2}}>
                Full Stack Web Developer</div>
              <div style={{color:C.muted,fontSize:".72rem",marginTop:1}}>MERN Stack · PHP · MySQL</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"1rem",marginTop:"0.4rem"}}>
                {["nidhish1132007@gmail.com","+91 90163 25239","github.com/ZalaNidhsih","linkedin.com/in/nidhish-zala"]
                  .map(v=><span key={v} style={{fontSize:".68rem",color:C.muted}}>{v}</span>)}
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.8rem"}}>
            {/* Left */}
            <div>
              <div style={{marginBottom:"1.2rem"}}>
                <SecTitle l="Objective"/>
                <p style={{fontSize:".78rem",color:C.muted,lineHeight:1.7}}>
                  Motivated Full Stack Developer and First Year Computer Engineering student at BVM Engineering
                  College. Proficient in MERN stack, PHP, and MySQL — built real-world client projects and
                  institutional systems. Seeking opportunities to grow professionally.
                </p>
              </div>
              <div style={{marginBottom:"1.2rem"}}>
                <SecTitle l="Education"/>
                <div style={{fontWeight:700,color:C.text,fontSize:".83rem"}}>B.E. in Computer Engineering</div>
                <div style={{fontSize:".72rem",color:C.accent,marginTop:2}}>BVM Engineering College, VV Nagar — 2024–Present</div>
                <div style={{fontSize:".72rem",color:C.muted,marginTop:2}}>First Year · Software Dev · Data Structures</div>
              </div>
              <div style={{marginBottom:"1.2rem"}}>
                <SecTitle l="Achievements"/>
                {[{l:"1st",t:"Winner — UDAAN'26 Tech Event"},{l:"2nd",t:"Runner-Up — UDAAN'26 Tech Event"}].map(a=>(
                  <div key={a.t} style={{display:"flex",alignItems:"flex-start",gap:"0.65rem",marginBottom:"0.65rem"}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(0,212,255,.1)",
                      border:"1px solid rgba(0,212,255,.3)",display:"flex",alignItems:"center",
                      justifyContent:"center",fontSize:".55rem",fontWeight:800,color:C.accent,flexShrink:0}}>
                      {a.l}
                    </div>
                    <div>
                      <div style={{fontWeight:700,color:C.text,fontSize:".8rem"}}>{a.t}</div>
                      <div style={{fontSize:".7rem",color:C.muted}}>BVM Engineering College</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <SecTitle l="Technical Skills"/>
                {SKILLS.map(s=>(
                  <div key={s.cat} style={{marginBottom:"0.65rem"}}>
                    <div style={{fontSize:".6rem",fontWeight:700,color:C.dim,textTransform:"uppercase",
                      letterSpacing:".12em",marginBottom:3}}>{s.cat}</div>
                    <div>{s.items.map(sk=><Tag key={sk} v={sk}/>)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Projects */}
            <div>
              <SecTitle l="Projects"/>
              {PROJECTS.map(p=>(
                <div key={p.title} style={{marginBottom:"0.85rem",paddingBottom:"0.85rem",
                  borderBottom:`1px solid ${C.border}`,
                  ...(p.highlight ? {borderLeft:`3px solid ${C.accent}`,paddingLeft:"0.65rem"} : {})}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"0.4rem"}}>
                    <div style={{fontWeight:700,color:C.text,fontSize:".8rem"}}>{p.title}</div>
                    {p.link && <span style={{fontSize:".62rem",color:C.accent,flexShrink:0}}>{p.link}</span>}
                  </div>
                  <div style={{fontSize:".68rem",color:C.accent,marginTop:2}}>{p.stack}</div>
                  <div style={{fontSize:".74rem",color:C.muted,marginTop:3,lineHeight:1.55}}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{display:"flex",gap:"0.75rem",marginTop:"1.5rem",
          borderTop:`1px solid ${C.border}`,paddingTop:"1.5rem"}}>
          <button className="btn-primary" onClick={handlePrint}
            style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Download / Print PDF
          </button>
          <button className="btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
