import { useState, useEffect } from "react";

// ── FONTS ────────────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("dossier-fonts")) return;
    const link = document.createElement("link");
    link.id = "dossier-fonts";
    link.href = "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ── THEME ────────────────────────────────────────────────────────────────────
const themes = {
  light: { bg:"#E5D9BD", paper:"#F4ECD6", paperEdge:"#DDCFA8", paperDeep:"#CFC195", ink:"#1F1A11", inkSoft:"#5C4F37", inkFaint:"#9A8B69", rule:"#3D332A", ruleSoft:"#8B7E5E", stampRed:"#A8351A", stampRedSoft:"rgba(168,53,26,0.10)", stampGreen:"#3D5A2C", stampGreenSoft:"rgba(61,90,44,0.10)", stampMustard:"#8B6B1F", stampMustardSoft:"rgba(139,107,31,0.10)", stampBlue:"#2C4F7A" },
  dark: { bg:"#1A1510", paper:"#231D14", paperEdge:"#2C2519", paperDeep:"#352D1F", ink:"#E8DDC4", inkSoft:"#A89978", inkFaint:"#6B5D44", rule:"#5C4F37", ruleSoft:"#3D332A", stampRed:"#D45438", stampRedSoft:"rgba(212,84,56,0.14)", stampGreen:"#8AA66F", stampGreenSoft:"rgba(138,166,111,0.12)", stampMustard:"#C9994B", stampMustardSoft:"rgba(201,153,75,0.12)", stampBlue:"#5E89BD" }
};

// ── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ n, s = 16, c = "currentColor" }) => {
  const d = {
    sun:<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon:<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>,
    arrow:<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    play:<polygon points="5 3 19 12 5 21 5 3"/>,
    plus:<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    minus:<line x1="5" y1="12" x2="19" y2="12"/>,
    folder:<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>,
    check:<polyline points="20 6 9 12 4 9"/>,
    x:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    chev:<polyline points="6 9 12 15 18 9"/>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d[n]}</svg>;
};

// ── STAMP ────────────────────────────────────────────────────────────────────
const Stamp = ({ kind, t, label, size = "sm", rotate = 0 }) => {
  const map = {
    urgent:{ bg:t.stampRedSoft, fg:t.stampRed, l:"URGENT" },
    pending:{ bg:t.stampMustardSoft, fg:t.stampMustard, l:"PENDING" },
    closed:{ bg:t.stampGreenSoft, fg:t.stampGreen, l:"CLOSED" },
    new:{ bg:t.stampRedSoft, fg:t.stampRed, l:"NEW INTAKE" },
    popular:{ bg:t.stampRedSoft, fg:t.stampRed, l:"MOST POPULAR" },
  };
  const s = map[kind] || { bg:"transparent", fg:t.inkSoft, l:kind };
  const pad = size === "lg" ? "5px 11px" : "3px 7px";
  const fs = size === "lg" ? 11 : 9.5;
  return (
    <span style={{ display:"inline-block", padding:pad, border:`1.5px solid ${s.fg}`, color:s.fg, background:s.bg, fontSize:fs, fontWeight:700, letterSpacing:"0.12em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", whiteSpace:"nowrap", transform: rotate ? `rotate(${rotate}deg)` : "none" }}>
      {label || s.l}
    </span>
  );
};

// ── PAPER TEXTURE ────────────────────────────────────────────────────────────
const PaperTexture = () => (
  <svg style={{ position:"fixed", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:0.025, zIndex:1, mixBlendMode:"multiply" }} xmlns="http://www.w3.org/2000/svg">
    <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#noise)"/>
  </svg>
);

// ── PRIMITIVES ───────────────────────────────────────────────────────────────
const Eyebrow = ({ children, t, center }) => (
  <div style={{ fontSize:11, fontWeight:700, color:t.inkSoft, letterSpacing:"0.22em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", textAlign: center ? "center" : "left", marginBottom:14 }}>{children}</div>
);

const Headline = ({ children, t, size = 36, center, maxWidth }) => (
  <h2 style={{ fontSize:size, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.025em", lineHeight:1.1, textAlign: center ? "center" : "left", margin: center ? "0 auto" : "0", maxWidth, marginBottom:0 }}>{children}</h2>
);

const Body = ({ children, t, italic, size = 17, maxWidth = 640, center }) => (
  <p style={{ fontSize:size, color:t.ink, fontFamily:"'Newsreader', serif", lineHeight:1.65, fontStyle: italic ? "italic" : "normal", maxWidth, margin: center ? "0 auto" : 0, textAlign: center ? "center" : "left" }}>{children}</p>
);

const Rule = ({ label, t, mt = 0 }) => (
  <div style={{ display:"flex", alignItems:"center", gap:14, margin:`${mt}px 0 18px`, maxWidth:"100%" }}>
    <div style={{ flex: label ? "0 0 30px" : 1, height:1, background:t.ruleSoft }}/>
    {label && <><span style={{ fontSize:10, fontWeight:700, color:t.inkSoft, letterSpacing:"0.22em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", whiteSpace:"nowrap" }}>{label}</span><div style={{ flex:1, height:1, background:t.ruleSoft }}/></>}
  </div>
);

const CTAButton = ({ children, t, primary, dark, large, onClick }) => {
  const bg = dark ? t.paper : (primary ? t.ink : "transparent");
  const fg = dark ? t.ink : (primary ? t.paper : t.ink);
  return (
    <button onClick={onClick} style={{ display:"inline-flex", alignItems:"center", gap:10, padding: large ? "14px 24px" : "11px 20px", background:bg, color:fg, border:`1.5px solid ${dark ? t.paper : t.ink}`, fontSize: large ? 13 : 11.5, fontWeight:700, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", cursor:"pointer", transition:"all 0.15s" }}
      onMouseEnter={e=>{ e.currentTarget.style.transform="translate(-2px,-2px)"; e.currentTarget.style.boxShadow=`4px 4px 0 ${dark ? t.paper+"50" : t.rule}`; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform="translate(0,0)"; e.currentTarget.style.boxShadow="none"; }}>
      {children}
      <Icon n="arrow" s={large ? 15 : 13} c={fg}/>
    </button>
  );
};

// ── HEADER ───────────────────────────────────────────────────────────────────
const Header = ({ t, dark, setDark }) => (
  <header style={{ position:"sticky", top:0, zIndex:30, background: t.bg + "F0", borderBottom:`1px solid ${t.rule}`, padding:"14px 32px", display:"flex", justifyContent:"space-between", alignItems:"center", backdropFilter:"blur(8px)" }}>
    <div>
      <div style={{ fontSize:22, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.025em", lineHeight:1 }}>call della</div>
      <div style={{ fontSize:8.5, fontWeight:700, color:t.inkSoft, letterSpacing:"0.22em", fontFamily:"'JetBrains Mono', monospace", marginTop:3, textTransform:"uppercase" }}>EST. 2026 · LEGAL INTAKE</div>
    </div>
    <nav style={{ display:"flex", alignItems:"center", gap:24 }}>
      {["Pricing","How it Works","FAQ"].map(l => (
        <a key={l} href={`#${l.toLowerCase().replace(/\s/g,"-")}`} style={{ fontSize:12, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", letterSpacing:"0.1em", textDecoration:"none", fontWeight:600 }}>{l}</a>
      ))}
      <CTAButton t={t} primary>Hire Della</CTAButton>
      <button onClick={()=>setDark(!dark)} style={{ width:34, height:34, background:t.paper, border:`1.5px solid ${t.rule}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Icon n={dark?"sun":"moon"} s={14} c={t.ink}/>
      </button>
    </nav>
  </header>
);

// ── HERO ─────────────────────────────────────────────────────────────────────
const Hero = ({ t }) => (
  <section style={{ padding:"96px 32px 80px", maxWidth:1180, margin:"0 auto" }}>
    <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:64, alignItems:"center" }}>
      <div>
        <Eyebrow t={t}>EST. 2026 · AFTER-HOURS INTAKE · USA</Eyebrow>
        <h1 style={{ fontSize:60, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.03em", lineHeight:1.05, margin:0 }}>
          Della takes the<br/>overnight calls.<br/>
          <span style={{ fontStyle:"italic", color:t.inkSoft }}>Your team takes<br/>the morning.</span>
        </h1>
        <div style={{ marginTop:28, maxWidth:480 }}>
          <Body t={t} size={18}>An after-hours intake specialist for personal injury law firms. <em>Every overnight caller, on your desk by dawn.</em></Body>
        </div>
        <div style={{ marginTop:36, display:"flex", gap:18, alignItems:"center", flexWrap:"wrap" }}>
          <CTAButton t={t} primary large>Hire Della</CTAButton>
          <a href="#" style={{ fontSize:13, color:t.ink, fontFamily:"'Newsreader', serif", fontStyle:"italic", textDecoration:"underline", textDecorationColor:t.ruleSoft, textUnderlineOffset:4 }}>↓ Hear a real intake call (2:14)</a>
        </div>
      </div>

      {/* Hero dossier mockup */}
      <div style={{ position:"relative", padding:"30px 0" }}>
        <div style={{ background:t.paper, border:`1.5px solid ${t.rule}`, padding:"22px 26px", boxShadow:`6px 6px 0 ${t.rule}`, transform:"rotate(1.5deg)", position:"relative" }}>
          <div style={{ position:"absolute", top:-1, left:22, background:t.paperEdge, border:`1.5px solid ${t.rule}`, borderBottom:"none", padding:"3px 12px", fontSize:10, fontWeight:700, color:t.inkSoft, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace", transform:"translateY(-100%)" }}>
            INTAKE REPORT · INT-04421
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
            <div>
              <div style={{ fontSize:11, color:t.inkFaint, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.06em" }}>04 MAY 2026 · 23:42 CDT</div>
              <div style={{ fontSize:22, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", marginTop:4, letterSpacing:"-0.015em" }}>Maria Gonzalez</div>
            </div>
            <div style={{ transform:"rotate(-4deg)" }}><Stamp kind="urgent" t={t} size="lg"/></div>
          </div>
          <div style={{ display:"flex", gap:6, marginBottom:14 }}>
            <Stamp kind="new" t={t}/>
            <span style={{ fontSize:10, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", padding:"3px 7px", letterSpacing:"0.08em" }}>4M 18S · CHLOE</span>
          </div>
          <div style={{ borderTop:`1px solid ${t.ruleSoft}`, borderBottom:`1px solid ${t.ruleSoft}`, padding:"10px 0", marginBottom:14, fontSize:11, fontFamily:"'JetBrains Mono', monospace", color:t.inkSoft, letterSpacing:"0.06em" }}>
            RE: REAR-END COLLISION, I-90
          </div>
          <p style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif", fontStyle:"italic", lineHeight:1.55, padding:"12px 14px", background:t.paperEdge, borderLeft:`3px solid ${t.rule}`, margin:0 }}>
            "I was stopped at a red light and this guy just ploughed into me. I've been in pain since and don't know what to do."
          </p>
          <div style={{ marginTop:14, padding:"10px 0", borderTop:`2px double ${t.stampRed}`, fontSize:12, fontFamily:"'Newsreader', serif", color:t.ink, lineHeight:1.5 }}>
            <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:9.5, fontWeight:700, color:t.stampRed, letterSpacing:"0.18em", display:"block", marginBottom:5 }}>ACTION REQUIRED</span>
            High-value intake. ER visit confirmed, fault admitted at scene.
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop:80, padding:"14px 0", borderTop:`1px solid ${t.ruleSoft}`, borderBottom:`1px solid ${t.ruleSoft}`, display:"flex", justifyContent:"center", gap:36, fontSize:10, fontFamily:"'JetBrains Mono', monospace", color:t.inkSoft, letterSpacing:"0.18em", textTransform:"uppercase", flexWrap:"wrap" }}>
      <span>BUILT ON RETELL AI</span><span>·</span>
      <span>SOC 2 IN PROGRESS</span><span>·</span>
      <span>BAA-READY</span><span>·</span>
      <span>US-BASED</span>
    </div>
  </section>
);

// ── PROBLEM ──────────────────────────────────────────────────────────────────
const Problem = ({ t }) => (
  <section style={{ padding:"96px 32px", maxWidth:1180, margin:"0 auto" }}>
    <Eyebrow t={t} center>THE OVERNIGHT LEAK</Eyebrow>
    <Headline t={t} size={42} center maxWidth={780}>
      Personal injury firms spend $300,000 a year on lead generation.<br/>
      <span style={{ color:t.inkSoft, fontStyle:"italic" }}>Then 30 to 50 percent of those calls go to voicemail.</span>
    </Headline>
    <div style={{ marginTop:32 }}>
      <Body t={t} size={16} center maxWidth={620}>
        Every PI firm knows the math. Google Ads run $100 to $400 per click. Cost per signed case: $1,500 to $8,000. The single biggest leak in the funnel isn't ad spend, intake script, or follow-up cadence. It's the hours your intake team isn't there.
      </Body>
    </div>

    <div style={{ marginTop:60, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
      {[
        { label:"AFTER-HOURS LEAK", num:"30–50%", sub:"of inbound PI calls reach voicemail outside business hours" },
        { label:"30-SECOND ANSWER RATE", num:"4×–8×", sub:"higher signing rate vs. firms answering after five minutes" },
        { label:"ANNUAL COST OF MISSED CALLS", num:"$250K+", sub:"average revenue lost per mid-size PI firm to overnight calls" }
      ].map(s => (
        <div key={s.label} style={{ background:t.paper, border:`1.5px solid ${t.rule}`, padding:"24px 26px", display:"flex", flexDirection:"column", gap:8, position:"relative" }}>
          <div style={{ fontSize:10, fontWeight:700, color:t.inkSoft, letterSpacing:"0.16em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase" }}>{s.label}</div>
          <div style={{ height:1, background:t.ruleSoft, margin:"6px 0 10px" }}/>
          <div style={{ fontSize:54, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", lineHeight:1, letterSpacing:"-0.03em" }}>{s.num}</div>
          <div style={{ fontSize:13, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic", marginTop:8, lineHeight:1.5 }}>{s.sub}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop:18, textAlign:"center", fontSize:9.5, color:t.inkFaint, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.16em", fontStyle:"italic" }}>
      SOURCES: ABA TECH REPORT · LAW.COM INDUSTRY SURVEYS · INTERNAL ANALYSIS · 2025
    </div>
  </section>
);

// ── MEET DELLA ───────────────────────────────────────────────────────────────
const MeetDella = ({ t }) => (
  <section style={{ padding:"96px 32px", maxWidth:1180, margin:"0 auto", background:t.paperEdge, borderTop:`1px solid ${t.rule}`, borderBottom:`1px solid ${t.rule}` }}>
    <div style={{ maxWidth:1120, margin:"0 auto", padding:"0 16px", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:64, alignItems:"start" }}>
      <div>
        <Eyebrow t={t}>MEET DELLA</Eyebrow>
        <Headline t={t} size={38} maxWidth={560}>The intake specialist your firm hires for the hours your team isn't there.</Headline>
        <div style={{ marginTop:30, display:"flex", flexDirection:"column", gap:20 }}>
          <Body t={t}>Della answers within two rings, every time, including 2 a.m. on a Sunday. She identifies herself by name. She knows the firm she works for. She asks the right questions in the right order — incident type, date, jurisdiction, injury severity, fault, insurance contact, prior counsel, statute of limitations. She reassures callers without committing the firm to anything.</Body>
          <Body t={t}>What she doesn't do: pretend she isn't an AI when asked, give legal advice, quote fees, or pressure for retainer signatures. <em>Della was built for personal injury intake from the first call</em>, not adapted from a generic receptionist script.</Body>
          <Body t={t}>By the time your intake manager arrives the next morning, every overnight call has a complete dossier waiting — caller's own words, AI-generated summary, urgency classification, recommended action. Triage takes minutes, not hours.</Body>
        </div>
      </div>

      {/* Transcript snippet card */}
      <div style={{ position:"relative", padding:"30px 0" }}>
        <div style={{ background:t.paper, border:`1.5px solid ${t.rule}`, padding:"22px 26px", boxShadow:`5px 5px 0 ${t.rule}`, transform:"rotate(-1.5deg)", position:"relative" }}>
          <div style={{ position:"absolute", top:-1, left:22, background:t.paperDeep, border:`1.5px solid ${t.rule}`, borderBottom:"none", padding:"3px 12px", fontSize:10, fontWeight:700, color:t.inkSoft, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace", transform:"translateY(-100%)" }}>
            TRANSCRIPT · INT-04421
          </div>
          <div style={{ fontSize:18, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.015em" }}>Maria Gonzalez</div>
          <div style={{ fontSize:11, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", marginTop:4, letterSpacing:"0.06em" }}>+1 (312) 555-0194</div>
          <Rule t={t} mt={16}/>
          <p style={{ fontSize:18, color:t.ink, fontFamily:"'Newsreader', serif", fontStyle:"italic", lineHeight:1.55, margin:"6px 0 0", letterSpacing:"-0.005em" }}>
            "I was stopped at a red light and this guy just ploughed into me. I've been in pain since and don't know what to do."
          </p>
          <div style={{ marginTop:18, fontSize:10, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.14em" }}>
            — TRANSCRIBED FROM RECORDING · 23:42 CDT
          </div>
          <div style={{ marginTop:14, display:"flex", justifyContent:"flex-end" }}>
            <div style={{ transform:"rotate(-3deg)" }}><Stamp kind="urgent" t={t}/></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── MORNING BRIEF ────────────────────────────────────────────────────────────
const MorningBrief = ({ t }) => (
  <section style={{ padding:"96px 32px", maxWidth:1180, margin:"0 auto" }}>
    <Eyebrow t={t} center>THE MORNING BRIEF</Eyebrow>
    <Headline t={t} size={42} center maxWidth={760}>
      Every overnight call. On your desk by 7 a.m.<br/>
      <span style={{ color:t.inkSoft, fontStyle:"italic" }}>Sorted by urgency, ready for action.</span>
    </Headline>

    {/* Browser mockup */}
    <div style={{ marginTop:60, background:t.paper, border:`1.5px solid ${t.rule}`, boxShadow:`8px 8px 0 ${t.rule}`, overflow:"hidden" }}>
      <div style={{ background:t.paperEdge, borderBottom:`1px solid ${t.rule}`, padding:"10px 16px", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ display:"flex", gap:6 }}>
          {[t.stampRed, t.stampMustard, t.stampGreen].map(c => <div key={c} style={{ width:10, height:10, background:c, opacity:0.5, border:`1px solid ${t.rule}` }}/>)}
        </div>
        <div style={{ flex:1, marginLeft:12, padding:"4px 10px", background:t.paper, border:`1px solid ${t.rule}`, fontSize:11, fontFamily:"'JetBrains Mono', monospace", color:t.inkSoft }}>app.calldella.com/dashboard</div>
      </div>
      <div style={{ padding:"28px 32px" }}>
        <div style={{ fontSize:10.5, fontWeight:700, color:t.inkSoft, letterSpacing:"0.18em", fontFamily:"'JetBrains Mono', monospace", marginBottom:4 }}>OVERNIGHT INTAKE LOG · 04 MAY 2026</div>
        <div style={{ fontSize:24, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.02em" }}>Good evening, Harrison & Moore</div>
        <p style={{ fontSize:13, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic", marginTop:6, marginBottom:24 }}>Della handled 6 calls overnight. 2 require urgent follow-up; 2 pending review.</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:28 }}>
          {[
            { l:"CALLS TONIGHT", v:"6", s:"since 18:00 CDT" },
            { l:"URGENT", v:"2", s:"callback today" },
            { l:"NEW ENQUIRIES", v:"4", s:"potential clients" },
            { l:"AVG DURATION", v:"3m 47s", s:"vs 3m 12s last wk" }
          ].map(s => (
            <div key={s.l} style={{ background:t.paper, border:`1px solid ${t.rule}`, padding:"12px 14px" }}>
              <div style={{ fontSize:8.5, fontWeight:700, color:t.inkSoft, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace" }}>{s.l}</div>
              <div style={{ height:1, background:t.ruleSoft, margin:"5px 0 6px" }}/>
              <div style={{ fontSize:22, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", lineHeight:1, letterSpacing:"-0.015em" }}>{s.v}</div>
              <div style={{ fontSize:10, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic", marginTop:4 }}>{s.s}</div>
            </div>
          ))}
        </div>

        <Rule label="Urgent · Callback Required Today" t={t}/>

        {[
          { name:"Maria Gonzalez", reason:"High-value intake. ER visit confirmed, fault admitted at scene.", time:"23:42", id:"INT-04421" },
          { name:"Sandra Okafor", reason:"Urgent — opposing insurance contact already made. Fracture confirmed.", time:"21:03", id:"INT-04419" }
        ].map(c => (
          <div key={c.id} style={{ background:t.paper, border:`1.5px solid ${t.stampRed}`, borderLeft:`3px solid ${t.stampRed}`, padding:"14px 18px", marginBottom:10, position:"relative" }}>
            <div style={{ position:"absolute", top:12, right:14, transform:"rotate(-3deg)" }}><Stamp kind="urgent" t={t}/></div>
            <div style={{ fontSize:9.5, fontWeight:700, color:t.inkSoft, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace" }}>{c.id} · {c.time}</div>
            <div style={{ fontSize:16, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", marginTop:4 }}>{c.name}</div>
            <div style={{ fontSize:12.5, color:t.ink, fontFamily:"'Newsreader', serif", marginTop:6, marginRight:90, lineHeight:1.45 }}>{c.reason}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ marginTop:60, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:36 }}>
      {[
        { l:"TRIAGE-READY", b:"Three urgency tiers — urgent, pending, closed. Della classifies based on signals only PI firms care about: ER visit, fault admission, opposing insurance contact, statute of limitations exposure." },
        { l:"EVIDENCE-FIRST", b:"Every dossier includes the AI summary, the caller's own words verbatim, the recommended action, and a one-click link to the full recording and transcript." },
        { l:"AUDIT-CLEAN", b:"Every action is logged. Who marked the call followed up, when, with what notes. Built for firms that take privilege and discovery seriously." }
      ].map(c => (
        <div key={c.l}>
          <div style={{ fontSize:10, fontWeight:700, color:t.inkSoft, letterSpacing:"0.18em", fontFamily:"'JetBrains Mono', monospace", marginBottom:10 }}>{c.l}</div>
          <div style={{ height:1, background:t.rule, marginBottom:14 }}/>
          <Body t={t} size={14}>{c.b}</Body>
        </div>
      ))}
    </div>
  </section>
);

// ── HOW IT WORKS ─────────────────────────────────────────────────────────────
const HowItWorks = ({ t }) => (
  <section id="how-it-works" style={{ padding:"96px 32px", maxWidth:1180, margin:"0 auto" }}>
    <Eyebrow t={t} center>HOW IT WORKS</Eyebrow>
    <Headline t={t} size={42} center maxWidth={620}>Della is on your phone line tonight.</Headline>

    <div style={{ marginTop:60, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }}>
      {[
        { n:"01", t:"ROUTE", b:"After-hours calls forward to Della. We support call-forwarding, IVR routing, or full takeover — your choice, your existing number." },
        { n:"02", t:"QUALIFY", b:"Della answers, identifies herself as the firm's after-hours intake specialist, qualifies the caller against your intake protocol, and reassures." },
        { n:"03", t:"DELIVER", b:"Within minutes of the call ending, a complete dossier appears in your portal — summary, transcript, recording, urgency classification." },
        { n:"04", t:"ACT", b:"Your team logs in at 7 a.m., works the urgent callbacks first, marks each as followed up. Audit trail captured automatically." }
      ].map(s => (
        <div key={s.n} style={{ background:t.paper, border:`1.5px solid ${t.rule}`, padding:"22px 20px", position:"relative", marginTop:14 }}>
          <div style={{ position:"absolute", top:-1, left:18, background:t.paperEdge, border:`1.5px solid ${t.rule}`, borderBottom:"none", padding:"3px 10px", fontSize:9.5, fontWeight:700, color:t.ink, letterSpacing:"0.16em", fontFamily:"'JetBrains Mono', monospace", transform:"translateY(-100%)" }}>
            {s.n} · {s.t}
          </div>
          <Body t={t} size={13.5} maxWidth="100%">{s.b}</Body>
        </div>
      ))}
    </div>

    <p style={{ marginTop:36, textAlign:"center", fontSize:14, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic" }}>
      Implementation typically takes 48 hours. No long-term contract.
    </p>
  </section>
);

// ── PRICING ──────────────────────────────────────────────────────────────────
const Pricing = ({ t }) => {
  const tiers = [
    { name:"STANDARD · ENTRY", price:149, mins:"150", popular:false, features:["1 dedicated AI intake specialist","Call summaries + transcripts","Urgency classification","Email notifications","Standard email support"], cta:"Hire Standard" },
    { name:"PRACTICE · POPULAR", price:249, mins:"300", popular:true, features:["Everything in Standard","SMS notifications for urgent calls","Custom intake protocol per firm","Priority email + phone support","Recording archive (90 days)"], cta:"Hire Practice" },
    { name:"GROUP · MULTI-OFFICE", price:599, mins:"1,000", popular:false, features:["Everything in Practice","Multiple AI agents (different personas)","CRM webhook integration","Dedicated success manager","SLA guarantees"], cta:"Book a conversation" }
  ];
  return (
    <section id="pricing" style={{ padding:"96px 32px", maxWidth:1180, margin:"0 auto" }}>
      <Eyebrow t={t} center>PRICING</Eyebrow>
      <Headline t={t} size={42} center maxWidth={680}>
        Transparent monthly rates.<br/>
        <span style={{ color:t.inkSoft, fontStyle:"italic" }}>No setup fees. No multi-year contracts.</span>
      </Headline>

      <div style={{ marginTop:60, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
        {tiers.map(tier => (
          <div key={tier.name} style={{ background:t.paper, border: tier.popular ? `2px solid ${t.ink}` : `1.5px solid ${t.rule}`, padding:"30px 26px", position:"relative", marginTop:14 }}>
            <div style={{ position:"absolute", top:-1, left:22, background:tier.popular?t.ink:t.paperEdge, border:`1.5px solid ${tier.popular?t.ink:t.rule}`, borderBottom:"none", padding:"4px 12px", fontSize:9.5, fontWeight:700, color:tier.popular?t.paper:t.ink, letterSpacing:"0.16em", fontFamily:"'JetBrains Mono', monospace", transform:"translateY(-100%)" }}>
              {tier.name}
            </div>
            {tier.popular && (
              <div style={{ position:"absolute", top:18, right:18, transform:"rotate(8deg)" }}>
                <Stamp kind="popular" t={t}/>
              </div>
            )}
            <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:6 }}>
              <span style={{ fontSize:48, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.03em", lineHeight:1 }}>${tier.price}</span>
              <span style={{ fontSize:11, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.1em" }}>/MONTH</span>
            </div>
            <div style={{ fontSize:13, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic" }}>Up to {tier.mins} minutes</div>
            <div style={{ height:1, background:t.ruleSoft, margin:"20px 0" }}/>
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24, minHeight:160 }}>
              {tier.features.map(f => (
                <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                  <div style={{ width:14, height:14, border:`1px solid ${t.stampGreen}`, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, flexShrink:0 }}>
                    <Icon n="check" s={9} c={t.stampGreen}/>
                  </div>
                  <span style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif", lineHeight:1.4 }}>{f}</span>
                </div>
              ))}
            </div>
            <button style={{ width:"100%", padding:"12px 0", background:tier.popular?t.ink:"transparent", color:tier.popular?t.paper:t.ink, border:`1.5px solid ${t.ink}`, fontSize:11.5, fontWeight:700, letterSpacing:"0.14em", fontFamily:"'JetBrains Mono', monospace", textTransform:"uppercase", cursor:"pointer" }}>
              {tier.cta} →
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop:24, textAlign:"center", fontSize:10, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.14em" }}>
        USAGE OVER PLAN BILLED AT $0.50 PER MINUTE · NO SURPRISES · CANCEL ANY TIME
      </div>
    </section>
  );
};

// ── TRUST ────────────────────────────────────────────────────────────────────
const Trust = ({ t }) => (
  <section style={{ padding:"96px 32px", background:t.paperEdge, borderTop:`1px solid ${t.rule}`, borderBottom:`1px solid ${t.rule}` }}>
    <div style={{ maxWidth:1120, margin:"0 auto", padding:"0 16px", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:64, alignItems:"start" }}>
      <div>
        <Eyebrow t={t}>SECURITY & DATA</Eyebrow>
        <Headline t={t} size={38} maxWidth={520}>Built for firms that take privilege seriously.</Headline>
        <div style={{ marginTop:28, display:"flex", flexDirection:"column", gap:18 }}>
          <Body t={t}>Every call recording, transcript, and dossier belongs to your firm. We are the processor, you are the controller. We don't train models on your call data. We don't sell, share, or analyse it for any purpose other than delivering the service you've hired Della for.</Body>
          <Body t={t}>Encryption at rest (AES-256-GCM) and in transit (TLS 1.3). SOC 2 Type II audit underway. BAA available on the Practice and Group plans for firms handling matters with PHI exposure. Hosted in US data centres.</Body>
        </div>
      </div>

      <div style={{ background:t.paper, border:`1.5px solid ${t.rule}`, padding:"24px 26px" }}>
        <div style={{ fontSize:18, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", marginBottom:14 }}>Your firm owns:</div>
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
          {["Every recording","Every transcript","Every dossier and summary","All caller data captured by Della","The right to export everything, any time","Full deletion within 30 days on request"].map(i => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
              <div style={{ width:14, height:14, border:`1px solid ${t.stampGreen}`, color:t.stampGreen, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, flexShrink:0, fontSize:9, fontWeight:700, fontFamily:"'JetBrains Mono', monospace" }}>✓</div>
              <span style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif" }}>{i}</span>
            </div>
          ))}
        </div>
        <div style={{ height:1, background:t.ruleSoft, margin:"4px 0 18px" }}/>
        <div style={{ fontSize:18, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", marginBottom:14 }}>We do not:</div>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {["Train AI models on your data","Sell or share data with third parties","Use data for advertising","Hold data after termination beyond contract"].map(i => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
              <div style={{ width:14, height:14, border:`1px solid ${t.stampRed}`, color:t.stampRed, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, flexShrink:0, fontSize:9, fontWeight:700, fontFamily:"'JetBrains Mono', monospace" }}>✗</div>
              <span style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif" }}>{i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ = ({ t }) => {
  const [open, setOpen] = useState(0);
  const qs = [
    { q:"Will Della tell callers she's an AI if asked?", a:"Yes. Della identifies herself as your firm's after-hours intake specialist. If a caller asks directly whether she's a real person, she will say she is an AI assistant capable of taking their information so a human can call them back. We do not deceive callers. Doing so creates regulatory and reputational risk we will not accept on your firm's behalf." },
    { q:"What happens if a caller has an emergency?", a:"Della is trained to recognise emergencies (active medical crisis, threat of harm) and immediately direct the caller to 911 before continuing. She will note the emergency in the dossier and, on the Practice and Group plans, immediately SMS the firm contact on call." },
    { q:"How does this work with our existing intake team?", a:"Della only handles the hours your team isn't there. She is configured around your existing business hours and overflow rules. Most firms use her overnight (6 p.m. to 8 a.m.), weekends, and during major holidays. Your intake team owns daytime calls as before." },
    { q:"Can we customise what Della asks and how she responds?", a:"Yes. We start from a base PI intake protocol developed with practising attorneys, then customise to your firm's specific intake script during onboarding. You can update intake fields, escalation rules, and Della's voice introduction at any time." },
    { q:"What about jurisdictional and statute-of-limitations issues?", a:"Della is configured for the jurisdictions your firm practises in. She'll flag callers outside your jurisdiction as referrals rather than intakes, and will surface statute-of-limitations risk in the dossier." },
    { q:"What's the actual onboarding process?", a:"A 20-minute discovery call to understand your firm and intake protocol. We then provision Della, configure her against your protocol, and provide a test number for your team to call and review. You go live when you're satisfied — typically 48 hours from kick-off. No long-term contract; cancel any time after the first 30 days." }
  ];
  return (
    <section id="faq" style={{ padding:"96px 32px", maxWidth:980, margin:"0 auto" }}>
      <Eyebrow t={t} center>FREQUENTLY ASKED</Eyebrow>
      <Headline t={t} size={38} center maxWidth={620}>The questions managing partners ask first.</Headline>

      <div style={{ marginTop:48 }}>
        {qs.map((item, i) => (
          <div key={i} style={{ borderBottom:`1px solid ${t.rule}` }}>
            <button onClick={()=>setOpen(open === i ? -1 : i)} style={{ width:"100%", padding:"22px 4px", background:"transparent", border:"none", display:"flex", justifyContent:"space-between", alignItems:"center", gap:18, cursor:"pointer", textAlign:"left" }}>
              <div style={{ display:"flex", gap:18, alignItems:"baseline", flex:1 }}>
                <span style={{ fontSize:11, fontWeight:700, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.1em" }}>Q0{i+1}</span>
                <span style={{ fontSize:18, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.01em" }}>{item.q}</span>
              </div>
              <Icon n={open === i ? "minus" : "plus"} s={16} c={t.inkSoft}/>
            </button>
            {open === i && (
              <div style={{ padding:"0 4px 22px 49px", maxWidth:780 }}>
                <Body t={t} size={15}>{item.a}</Body>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ── FINAL CTA ────────────────────────────────────────────────────────────────
const FinalCTA = ({ t }) => (
  <section style={{ padding:"80px 32px", background:t.ink, position:"relative" }}>
    <div style={{ maxWidth:780, margin:"0 auto", textAlign:"center" }}>
      <h2 style={{ fontSize:44, fontWeight:600, color:t.paper, fontFamily:"'Newsreader', serif", letterSpacing:"-0.025em", lineHeight:1.1, margin:0 }}>
        Della is ready for tonight's calls.
      </h2>
      <p style={{ fontSize:17, color:t.paper, opacity:0.7, fontFamily:"'Newsreader', serif", fontStyle:"italic", marginTop:18, lineHeight:1.5 }}>
        Twenty-minute discovery call. No pitch deck.<br/>
        We'll walk you through the dossier, let you hear Della work, and answer your questions.
      </p>
      <div style={{ marginTop:36 }}>
        <CTAButton t={t} dark large>Book a Discovery Call</CTAButton>
      </div>
    </div>
  </section>
);

// ── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ t }) => (
  <footer style={{ padding:"60px 32px 32px", borderTop:`1px solid ${t.rule}` }}>
    <div style={{ maxWidth:1180, margin:"0 auto", display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:40 }}>
      <div>
        <div style={{ fontSize:22, fontWeight:600, color:t.ink, fontFamily:"'Newsreader', serif", letterSpacing:"-0.025em", lineHeight:1 }}>call della</div>
        <div style={{ fontSize:9.5, fontWeight:700, color:t.inkSoft, letterSpacing:"0.22em", fontFamily:"'JetBrains Mono', monospace", marginTop:6, textTransform:"uppercase" }}>EST. 2026 · LEGAL INTAKE</div>
        <p style={{ fontSize:13, color:t.inkSoft, fontFamily:"'Newsreader', serif", fontStyle:"italic", marginTop:14, maxWidth:300 }}>An after-hours intake specialist for personal injury law firms.</p>
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.18em", marginBottom:14 }}>PRODUCT</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {["Pricing","How it works","FAQ","Hire Della"].map(l => (
            <a key={l} href="#" style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif", textDecoration:"none" }}>{l}</a>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize:10, fontWeight:700, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.18em", marginBottom:14 }}>LEGAL</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {["Terms of Service","Privacy Policy","Security","Data Processing"].map(l => (
            <a key={l} href="#" style={{ fontSize:13.5, color:t.ink, fontFamily:"'Newsreader', serif", textDecoration:"none" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
    <div style={{ maxWidth:1180, margin:"40px auto 0", padding:"20px 0 0", borderTop:`1px solid ${t.ruleSoft}`, textAlign:"center", fontSize:10, color:t.inkSoft, fontFamily:"'JetBrains Mono', monospace", letterSpacing:"0.18em" }}>
      © 2026 CALL DELLA · ALL RIGHTS RESERVED
    </div>
  </footer>
);

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function Landing() {
  const [dark, setDark] = useState(false);
  const t = themes[dark ? "dark" : "light"];
  return (
    <div style={{ minHeight:"100vh", background:t.bg, color:t.ink, fontFamily:"'Newsreader', serif", position:"relative" }}>
      <FontLoader/>
      <PaperTexture/>
      <div style={{ position:"relative", zIndex:2 }}>
        <Header t={t} dark={dark} setDark={setDark}/>
        <Hero t={t}/>
        <Problem t={t}/>
        <MeetDella t={t}/>
        <MorningBrief t={t}/>
        <HowItWorks t={t}/>
        <Pricing t={t}/>
        <Trust t={t}/>
        <FAQ t={t}/>
        <FinalCTA t={t}/>
        <Footer t={t}/>
      </div>
    </div>
  );
}
