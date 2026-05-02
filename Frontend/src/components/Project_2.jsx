import React, { useEffect, useRef, useCallback } from "react";

const projects = [
  { id:1, title:"NCC — 38 Gujarat BN",        subtitle:"Institutional Full Stack Webapp",   desc:"The most complex build — a complete management system for the NCC battalion. Event-based attendance, cadet profiles, automated Excel data import, notices board, and a role-based admin dashboard.", tech:["React","Node.js","MongoDB","Express","JWT","Excel-Parser"], github:"https://github.com/ZalaNidhsih", live:"https://ncc-38gujbn.vercel.app",            status:"dev",      statusLabel:"Hosting Soon", type:"Full Stack", highlight:true,  color:"#00d4ff" },
  { id:2, title:"PixelPlus Media",             subtitle:"Marketing Agency Website",          desc:"Agency website connecting businesses with growth solutions. Seamless meeting and call booking powered by Calendly integration, polished UI with smooth animations.",                               tech:["React","Tailwind CSS","Swiper.js","Calendly API"],          github:"https://github.com/ZalaNidhsih", live:"#",                                        status:"live",     statusLabel:"Live",         type:"Frontend",   highlight:false, color:"#7c3aed" },
  { id:3, title:"Laxmi Cement Articles",       subtitle:"Product Catalogue & E-contact",     desc:"E-catalog for a cement articles manufacturer. Browse full product catalogue with pricing, contact owner, and locate the factory via embedded Google Maps.",                                        tech:["React","Tailwind CSS","Swiper.js","Google Maps"],           github:"https://github.com/ZalaNidhsih", live:"https://laxmicementarticles.vercel.app", status:"live",     statusLabel:"Live",         type:"Frontend",   highlight:false, color:"#f59e0b" },
  { id:4, title:"Rangila Resto",               subtitle:"Restaurant Web Experience",         desc:"Restaurant website with full menu listing, item images, promo offer sliders, horizontal about-section scrollers, and a backend-driven daily specials system.",                                  tech:["React","Node.js","MongoDB","Tailwind CSS"],                 github:"https://github.com/ZalaNidhsih", live:"#",                                        status:"dev",      statusLabel:"Dev Project",  type:"Full Stack", highlight:false, color:"#ef4444" },
  { id:5, title:"EMS System",                  subtitle:"Employee Management — Academic",    desc:"PHP & MySQL project covering employee records, leave management, payroll overview, and departmental reporting with clean HTML/CSS frontend.",                                                    tech:["PHP","MySQL","HTML","CSS","Bootstrap"],                     github:"https://github.com/ZalaNidhsih", live:null,                                       status:"academic", statusLabel:"Academic",     type:"Full Stack", highlight:false, color:"#22c55e" },
  { id:6, title:"Chocolate Factory System",    subtitle:"Inventory Management — Academic",   desc:"Inventory and order management system for a chocolate manufacturing unit — college academic project using PHP and MySQL.",                                                                        tech:["PHP","MySQL","HTML","CSS","Bootstrap"],                     github:"https://github.com/ZalaNidhsih", live:null,                                       status:"academic", statusLabel:"Academic",     type:"Full Stack", highlight:false, color:"#a78bfa" },
];

const ss = {
  live:     {color:"#22c55e", bg:"rgba(34,197,94,.10)",  bd:"rgba(34,197,94,.30)"},
  dev:      {color:"#f59e0b", bg:"rgba(245,158,11,.10)", bd:"rgba(245,158,11,.30)"},
  academic: {color:"#00d4ff", bg:"rgba(0,212,255,.10)",  bd:"rgba(0,212,255,.20)"},
};

const GH = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const EX = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

/* ─── Card ────────────────────────────────────────────────────────────────── */
const Card = ({ p, index, cardRef }) => {
  const st = ss[p.status];
  return (
    <div
      ref={cardRef}
      data-index={index}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${p.highlight ? p.color + "55" : "var(--border)"}`,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: p.highlight
          ? `0 0 60px ${p.color}1a, 0 24px 56px rgba(0,0,0,.5)`
          : "0 16px 48px rgba(0,0,0,.4)",
        willChange: "transform, opacity",
        transformOrigin: "50% 0",
        /* start stacked — JS will animate from here */
      }}
    >
      {/* accent bar */}
      <div style={{height:3, background:`linear-gradient(90deg,${p.color},transparent 70%)`}}/>

      {p.highlight && (
        <div style={{
          position:"absolute", top:"0.9rem", right:"0.9rem", zIndex:5,
          background:p.color, color:"#000",
          fontSize:"0.55rem", fontWeight:900, letterSpacing:"0.2em",
          textTransform:"uppercase", padding:"0.2rem 0.65rem", borderRadius:2,
        }}>Best Work</div>
      )}

      <div style={{
        display:"grid",
        gridTemplateColumns:"clamp(220px,42%,340px) 1fr",
      }}>
        {/* Visual panel */}
        <div style={{
          background:`linear-gradient(150deg,#0d1117 0%,${p.color}0d 100%)`,
          padding:"1.75rem", display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", gap:"1.1rem",
          position:"relative", overflow:"hidden", minHeight:420,
        }}>
          {/* ghost number */}
          <div style={{
            position:"absolute", bottom:-24, right:-10,
            fontFamily:"'momo',sans-serif", fontSize:"8rem",
            color:p.color+"0d", lineHeight:1, userSelect:"none", pointerEvents:"none",
          }}>{String(index+1).padStart(2,"0")}</div>

          {/* screenshot box */}
          <div style={{
            width:"100%", aspectRatio:"16/9", borderRadius:8,
            border:`1px solid ${p.color}1a`,
            background:"linear-gradient(135deg,#0a0a0f,#161b22)",
            display:"flex", alignItems:"center", justifyContent:"center",
            overflow:"hidden", position:"relative", zIndex:2,
          }}>
            {/* ↓ REPLACE WITH: <img src="..." style={{width:'100%',height:'100%',objectFit:'cover'}}/> */}
            <div style={{textAlign:"center", opacity:.22}}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <div style={{fontSize:"0.58rem", color:"var(--text-muted)", marginTop:4}}>Add screenshot</div>
            </div>
          </div>

          {/* tech tags */}
          <div style={{display:"flex", flexWrap:"wrap", gap:"0.3rem", position:"relative", zIndex:2}}>
            {p.tech.map(t=>(
              <span key={t} style={{
                fontSize:".58rem", fontWeight:700, letterSpacing:".08em",
                textTransform:"uppercase", padding:"0.14rem 0.48rem", borderRadius:3,
                color:p.color, background:p.color+"15", border:`1px solid ${p.color}2a`,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div style={{
          padding:"2.25rem 2.25rem 2.25rem 1.75rem",
          display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.9rem",
        }}>
          <div>
            <div style={{fontSize:".62rem", fontWeight:800, letterSpacing:".22em",
              color:p.color, textTransform:"uppercase", marginBottom:"0.35rem"}}>{p.type}</div>
            <h3 style={{fontFamily:"'momo',sans-serif", fontSize:"1.65rem",
              color:"var(--text-primary)", letterSpacing:"-.02em", lineHeight:1.15}}>{p.title}</h3>
            <div style={{fontSize:".78rem", color:"var(--text-secondary)", marginTop:3}}>{p.subtitle}</div>
          </div>

          <p style={{fontSize:".84rem", color:"var(--text-secondary)", lineHeight:1.8}}>{p.desc}</p>

          <div style={{display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap"}}>
            <span style={{
              fontSize:".58rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase",
              padding:"0.2rem 0.62rem", borderRadius:20,
              color:st.color, background:st.bg, border:`1px solid ${st.bd}`,
            }}>{p.statusLabel}</span>
            <div style={{display:"flex", gap:"1rem"}}>
              <a href={p.github} target="_blank" rel="noreferrer"
                style={{display:"flex", alignItems:"center", gap:"0.35rem",
                  fontSize:".75rem", fontWeight:600, color:"var(--text-secondary)", textDecoration:"none"}}
                onMouseEnter={e=>e.currentTarget.style.color=p.color}
                onMouseLeave={e=>e.currentTarget.style.color="var(--text-secondary)"}>
                <GH/> GitHub
              </a>
              {p.live && p.live!=="#" && (
                <a href={p.live} target="_blank" rel="noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"0.35rem",
                    fontSize:".75rem", fontWeight:600, color:"var(--text-secondary)", textDecoration:"none"}}
                  onMouseEnter={e=>e.currentTarget.style.color=p.color}
                  onMouseLeave={e=>e.currentTarget.style.color="var(--text-secondary)"}>
                  <EX/> Live
                </a>
              )}
            </div>
          </div>

          {/* progress dots */}
          <div style={{display:"flex", gap:"0.35rem", marginTop:"0.25rem"}}>
            {projects.map((_,di)=>(
              <div key={di} style={{
                width: di===index ? 18 : 5, height:5, borderRadius:3,
                background: di===index ? p.color : "var(--border)",
                transition:"all .3s",
              }}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Stacked scroll container ────────────────────────────────────────────── */
const SCROLL_PER_CARD = 480; // px of scroll each card "consumes"

const StackedProjects = () => {
  const wrapRef   = useRef(null);   // outer div — gives us the section top
  const stickyRef = useRef(null);   // sticky inner
  const cardRefs  = useRef([]);

  const tick = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const wrapTop  = wrap.getBoundingClientRect().top + window.scrollY;
    const progress = Math.max(0, window.scrollY - wrapTop);

    // which card index is currently "on top"
    const activeRaw = Math.floor(progress / SCROLL_PER_CARD);
    const active    = Math.min(activeRaw, projects.length - 1);

    // fraction through active card's scroll window [0..1]
    const localF = Math.min(1, (progress - active * SCROLL_PER_CARD) / SCROLL_PER_CARD);

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      if (i > active) {
        // ── sitting in the deck, not yet reached ──
        const depth = Math.min(i - active, 5);
        const tx = 0;
        const ty = depth * 16;
        const sc = 1 - depth * 0.035;
        const rt = depth * 0.3;
        card.style.transform  = `translate(${tx}px,${ty}px) scale(${sc}) rotate(${rt}deg)`;
        card.style.opacity    = String(Math.max(0.5, 1 - depth * 0.1));
        card.style.zIndex     = String(20 - depth);
        card.style.filter     = `brightness(${1 - depth * 0.06})`;

      } else if (i === active) {
        // ── active card — eases in, then starts flying off at end ──
        const flyThreshold = 0.72;
        if (localF < flyThreshold) {
          // fully visible
          card.style.transform  = "translate(0,0) scale(1) rotate(0deg)";
          card.style.opacity    = "1";
          card.style.zIndex     = "30";
          card.style.filter     = "brightness(1)";
        } else {
          // beginning to fly off toward top-right
          const t = (localF - flyThreshold) / (1 - flyThreshold); // 0..1
          const ease = t * t;                                       // ease-in
          const tx = ease * 90;
          const ty = ease * -60;
          const rt = ease * 6;
          const sc = 1 - ease * 0.08;
          card.style.transform  = `translate(${tx}px,${ty}px) scale(${sc}) rotate(${rt}deg)`;
          card.style.opacity    = String(1 - ease * 0.5);
          card.style.zIndex     = "30";
          card.style.filter     = `brightness(${1 - ease * 0.3})`;
        }

      } else {
        // ── already scrolled past — parked top-right ──
        const gone = active - i;
        const tx = Math.min(gone * 55, 180);
        const ty = Math.min(gone * -42, -140);
        const rt = Math.min(gone * 4, 18);
        const sc = Math.max(0.75, 1 - gone * 0.07);
        card.style.transform  = `translate(${tx}px,${ty}px) scale(${sc}) rotate(${rt}deg)`;
        card.style.opacity    = String(Math.max(0, 1 - gone * 0.4));
        card.style.zIndex     = String(gone);
        card.style.filter     = `brightness(${Math.max(0.4, 1 - gone * 0.2)})`;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", tick, { passive: true });
    tick(); // initial paint
    return () => window.removeEventListener("scroll", tick);
  }, [tick]);

  // total scroll height = one slot per card + one extra to show the last card fully
  const totalH = projects.length * SCROLL_PER_CARD + 520;

  return (
    <div ref={wrapRef} style={{ position:"relative", height:totalH }}>
      {/* sticky viewport */}
      <div ref={stickyRef} style={{
        position:"sticky", top:80,
        height:"calc(100vh - 80px)",
        display:"flex", alignItems:"flex-start", justifyContent:"center",
        overflow:"visible", pointerEvents:"none",
      }}>
        <div style={{
          position:"relative",
          width:"100%", maxWidth:860,
          height:460,
          marginTop:20,
        }}>
          {projects.map((p,i) => (
            <div
              key={p.id}
              style={{
                position:"absolute", inset:0,
                pointerEvents:"auto",
              }}
            >
              <Card
                p={p}
                index={i}
                cardRef={el => (cardRefs.current[i] = el)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div style={{
        position:"absolute", bottom:"1.25rem", left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:"0.35rem",
        color:"var(--text-muted)", fontSize:".62rem", letterSpacing:".2em",
        textTransform:"uppercase", pointerEvents:"none",
      }}>
        <div style={{width:1, height:28, background:"linear-gradient(to bottom,var(--accent),transparent)"}}/>
        Scroll to explore
      </div>
    </div>
  );
};

/* ─── Section ─────────────────────────────────────────────────────────────── */
const Project = () => (
  <section className="projects-section" id="projects">
    <div style={{marginBottom:"3rem"}}>
      <div className="section-eyebrow">Selected Work</div>
      <h2 className="section-title">My <span className="dim">Projects</span></h2>
      <p className="section-desc">Scroll through the deck — each card lifts off to reveal the next one underneath.</p>
    </div>
    <StackedProjects />
  </section>
);

export default Project;
