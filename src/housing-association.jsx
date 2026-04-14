import { useState, useEffect, useRef } from "react";

/* 
  ACCESSIBILITY FIXES (v3):
  - Teal on dark: #0D7377 → #14A3A8 (ratio 5.62 on navy, was 3.07)
  - Low-opacity text on dark: raised all to min 0.55 equiv
  - Detail/attribution grey on light: #9CA3AF → #6B7280 (ratio 4.62, was 2.43)
  - Amber on white: #D97706 → #B45309 (ratio 5.02, was 3.19)
  - Footer text: raised to 0.45 equiv
  - Feature detail on dark: 0.4 → 0.55 equiv
  - Teal used for decorative/large text only where contrast is 3.07 (AA Large pass)
  - All body-size text now passes WCAG AA 4.5:1
*/

const TEAL = "#0D7377";         // brand teal - used on light backgrounds (5.62:1 on white)
const TEAL_LIGHT = "#14A3A8";   // accessible teal on dark backgrounds (5.62:1 on navy)
const NAVY = "#0F1B2D";
const LIGHT = "#F8FAFB";

function useScrollTo() {
  return (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function useFadeIn() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}
function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, v] = useFadeIn();
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>{children}</div>;
}

function ShieldCheck() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>; }
function HomeIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }
function ScaleIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/><path d="M16 21h5v-5"/><path d="M8 21H3v-5"/></svg>; }
function SearchIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>; }
function ArrowRight() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>; }
function MenuIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>; }
function CloseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }
function CheckCircle() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>; }
function UsersIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function ClockIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function LayersIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TEAL_LIGHT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>; }

const css = `
  * { box-sizing: border-box; }
  @media (min-width: 769px) { .mob-only { display: none !important; } }
  @media (max-width: 768px) { .desk-only { display: none !important; } .mob-only { display: flex !important; } }
  @media (max-width: 900px) { .mod-grid { grid-template-columns: 1fr 1fr !important; } }
  @media (max-width: 640px) { .mod-grid { grid-template-columns: 1fr !important; } .chain-grid { grid-template-columns: 1fr !important; } .diff-grid { grid-template-columns: 1fr !important; } .impl-grid { grid-template-columns: 1fr !important; } }
  @media (max-width: 500px) { .reg-row { flex-direction: column !important; gap: 2px !important; } .know-grid { grid-template-columns: repeat(2,1fr) !important; } .cta-form-grid { grid-template-columns: 1fr !important; } .foot-wrap { flex-direction: column !important; align-items: flex-start !important; } .foot-r { text-align: left !important; } .stats-row { gap: 24px !important; } .people-grid { grid-template-columns: 1fr !important; } }
  input[type="text"], input[type="email"], textarea, select {
    font-family: 'Roboto', sans-serif; font-size: 14px; padding: 10px 14px;
    border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
    background: rgba(255,255,255,0.06); color: #fff; width: 100%;
    transition: border-color 0.2s;
  }
  input:focus, textarea:focus, select:focus { outline: none; border-color: ${TEAL_LIGHT}; }
  input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.35); }
  select option { background: ${NAVY}; color: #fff; }
`;

function Nav({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [["problem","The Problem"],["how","How It Works"],["modules","Platform"],["people","Your Team"],["demo","Free Trial"]];
  const go = (id) => { scrollTo(id); setOpen(false); };
  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100, background:scrolled||open?"rgba(15,27,45,0.97)":"transparent", backdropFilter:scrolled||open?"blur(12px)":"none", borderBottom:scrolled?"1px solid rgba(255,255,255,0.06)":"none", transition:"all 0.3s" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64,padding:"0 20px" }}>
        <div style={{ display:"flex",alignItems:"center",gap:6,cursor:"pointer" }} onClick={() => go("hero")}>
          <span style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:20,color:"#fff",letterSpacing:"0.05em",textTransform:"uppercase" }}>Strata</span>
          <span style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:20,color:TEAL_LIGHT,letterSpacing:"0.05em",textTransform:"uppercase" }}>AI</span>
        </div>
        <div className="desk-only" style={{ display:"flex",gap:28,alignItems:"center" }}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)} style={{ background:"none",border:"none",color:"rgba(255,255,255,0.7)",fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:400,cursor:"pointer",padding:"4px 0",transition:"color 0.2s" }}
              onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.7)"}>{label}</button>
          ))}
        </div>
        <button className="mob-only" onClick={() => setOpen(!open)} style={{ background:"none",border:"none",cursor:"pointer",padding:4,display:"none",alignItems:"center" }}>{open ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      {open && <div className="mob-only" style={{ padding:"0 20px 20px",display:"none",flexDirection:"column" }}>
        {links.map(([id,label]) => (
          <button key={id} onClick={() => go(id)} style={{ background:"none",border:"none",color:"rgba(255,255,255,0.85)",fontFamily:"'Roboto',sans-serif",fontSize:16,cursor:"pointer",padding:"14px 0",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>{label}</button>
        ))}
      </div>}
    </nav>
  );
}

function Hero({ scrollTo }) {
  return (
    <section id="hero" style={{ minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center", background:`linear-gradient(165deg,${NAVY} 0%,#0a1628 50%,#091320 100%)`, position:"relative",overflow:"hidden",padding:"120px 20px 80px" }}>
      <div style={{ position:"absolute",inset:0,opacity:0.025, backgroundImage:"linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
      <div style={{ position:"absolute",top:"-25%",right:"-15%",width:700,height:700, background:`radial-gradient(circle,${TEAL}12 0%,transparent 65%)`,borderRadius:"50%",filter:"blur(100px)" }} />
      <div style={{ maxWidth:880,textAlign:"center",position:"relative",zIndex:1,width:"100%" }}>
        <FadeIn>
          <div style={{ display:"inline-block",padding:"5px 14px",borderRadius:20,background:"rgba(20,163,168,0.1)",border:"1px solid rgba(20,163,168,0.25)",marginBottom:28 }}>
            <span style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase" }}>The intelligent compliance layer for housing associations</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(30px,6.5vw,62px)",color:"#fff",lineHeight:1.08,margin:"0 0 24px",letterSpacing:"0.01em",textTransform:"uppercase" }}>
            Your systems calculate the numbers.{" "}<span style={{ color:TEAL_LIGHT }}>We check they're right.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontWeight:300,fontSize:"clamp(15px,1.8vw,18px)",color:"rgba(255,255,255,0.7)",lineHeight:1.75,maxWidth:620,margin:"0 auto 20px" }}>
            Strata AI reads your contracts, leases, and policies. Then validates every invoice, every service charge, and every rent calculation against them.
          </p>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontWeight:400,fontSize:"clamp(14px,1.5vw,16px)",color:"rgba(255,255,255,0.85)",lineHeight:1.7,maxWidth:540,margin:"0 auto 40px" }}>
            No system replacement. No migration. Sits above your existing HMS, AP, and finance systems. Live in weeks, not years.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
            <button onClick={() => scrollTo("demo")} style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:500, background:TEAL,color:"#fff",border:"none",borderRadius:6, padding:"13px 26px",cursor:"pointer",display:"flex",alignItems:"center",gap:8, boxShadow:`0 0 40px ${TEAL}35`,transition:"transform 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"} onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
              Apply for a free trial <ArrowRight />
            </button>
            <button onClick={() => scrollTo("modules")} style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:400, background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.85)", border:"1px solid rgba(255,255,255,0.15)",borderRadius:6, padding:"13px 22px",cursor:"pointer",transition:"all 0.2s" }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.1)";e.currentTarget.style.color="#fff"}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.color="rgba(255,255,255,0.85)"}}>
              Explore the platform
            </button>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="stats-row" style={{ marginTop:60,display:"flex",justifyContent:"center",gap:52,flexWrap:"wrap" }}>
            {[["\u00a3625m","Sector service charge deficit"],["70%+","Tribunal overcharge rate"],["0","Systems that read your leases"]].map(([val,label]) => (
              <div key={label} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Oswald',sans-serif",fontSize:"clamp(28px,4vw,38px)",color:TEAL_LIGHT,fontWeight:400 }}>{val}</div>
                <div style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",marginTop:4,letterSpacing:"0.03em",textTransform:"uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" style={{ background:LIGHT,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:760,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>The structural gap</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:NAVY,lineHeight:1.15,margin:"0 0 28px",textTransform:"uppercase" }}>
            Every financial transaction is governed by a document your systems cannot read
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:"clamp(15px,1.5vw,16px)",fontWeight:300,color:"#4B5563",lineHeight:1.85,marginBottom:20 }}>
            Your service charge officer spends three days a month cross-referencing lease terms against a spreadsheet. Your AP clerk approves invoices against PO amounts because nobody has time to check the contract. Your best people are buried in administrative work that shouldn't require a human being.
          </p>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:"clamp(15px,1.5vw,16px)",fontWeight:300,color:"#4B5563",lineHeight:1.85,marginBottom:36 }}>
            The problem isn't your team. It's that no system you own can read the documents that govern every transaction: the contracts, the leases, the policies, the legislation. So your skilled people do it manually, incompletely, and at a cost the sector can no longer absorb.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ background:"#fff",borderRadius:6,padding:"clamp(20px,3vw,28px) clamp(20px,3vw,32px)",borderLeft:`4px solid ${TEAL}`,boxShadow:"0 1px 3px rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:NAVY,lineHeight:1.65,margin:0,fontStyle:"italic" }}>
              "While many of the complicated elements of a service charge can be assisted by a new system, it won't read a lease for you."
            </p>
            <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,color:"#6B7280",marginTop:10,marginBottom:0 }}>
              Dan Oehlman, Service Charge Consultant, on the market-leading service charge software
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section style={{ background:NAVY,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:960,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>Implementation</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:"#fff",lineHeight:1.15,margin:"0 0 20px",textTransform:"uppercase" }}>
            Live in weeks. Not months. Not years.
          </h2>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.7)",lineHeight:1.8,maxWidth:640,marginBottom:48 }}>
            Strata AI is an overlay, not a replacement. It connects to your existing general ledger, accounts payable, and housing management system. Your team keeps working in the systems they know. Strata reads the documents those systems cannot read and surfaces what they miss.
          </p>
        </FadeIn>
        <div className="impl-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
          {[
            [<LayersIcon />,"No system replacement","Your HMS, your AP platform, your finance system. They all stay. Strata sits above them, reading the source documents they can't access."],
            [<ClockIcon />,"Weeks to go live","Upload your contracts and policies. Strata extracts the rules once and caches them. No data migration. No workflow redesign. No 18-month programme."],
            [<UsersIcon />,"Minimal change for your team","Your people keep using the tools they know. Strata adds an intelligence layer: flagging issues, validating calculations, surfacing evidence. It fits around them, not the other way round."],
          ].map(([icon,title,desc],i) => (
            <FadeIn key={title} delay={i*0.1}>
              <div style={{ background:"rgba(255,255,255,0.03)",borderRadius:8,border:"1px solid rgba(255,255,255,0.08)",padding:"clamp(24px,3vw,32px) clamp(20px,2.5vw,24px)",height:"100%" }}>
                <div style={{ marginBottom:14 }}>{icon}</div>
                <h3 style={{ fontFamily:"'Oswald',sans-serif",fontSize:19,color:"#fff",fontWeight:500,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:"0.03em" }}>{title}</h3>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.65)",lineHeight:1.8,margin:0 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num:"01",title:"Classify",benefit:"Your team stops miscoding costs. Every purchase order is categorised correctly before it's raised, not corrected after.",desc:"The Nominal Code Assistant identifies the correct cost code and cost type at PO stage. Rechargeable to tenant, or landlord cost." },
    { num:"02",title:"Validate",benefit:"Your AP clerk stops approving invoices that look right but aren't. Strata reads the contract they don't have time to read.",desc:"Every invoice checked against the actual contract. Rate, scope, supplier identity, VAT treatment, warranty status. Every flag links to the source clause." },
    { num:"03",title:"Apportion",benefit:"Your service charge officer stops cross-referencing leases against spreadsheets. Strata reads the lease for them.",desc:"Charges calculated from the lease terms. Floor area, equal shares, or ownership percentage. As the document specifies." },
  ];
  return (
    <section id="how" style={{ background:LIGHT,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:1000,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>The Integrity Chain</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:NAVY,lineHeight:1.15,margin:"0 0 48px",textTransform:"uppercase" }}>
            Classify it correctly. Validate the amount. Apportion the right share.
          </h2>
        </FadeIn>
        <div className="chain-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
          {steps.map((s,i) => (
            <FadeIn key={s.num} delay={i*0.1}>
              <div style={{ background:"#fff",borderRadius:8,border:"1px solid #E5E7EB",padding:"clamp(24px,3vw,32px) clamp(20px,2.5vw,24px)",height:"100%",display:"flex",flexDirection:"column" }}>
                <span style={{ fontFamily:"'Oswald',sans-serif",fontSize:48,color:"#E5E7EB",fontWeight:400,lineHeight:1 }}>{s.num}</span>
                <h3 style={{ fontFamily:"'Oswald',sans-serif",fontSize:20,color:NAVY,fontWeight:500,margin:"12px 0 10px",textTransform:"uppercase",letterSpacing:"0.04em" }}>{s.title}</h3>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:400,color:NAVY,lineHeight:1.7,marginBottom:12 }}>{s.benefit}</p>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:300,color:"#6B7280",lineHeight:1.7,margin:0,marginTop:"auto" }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const modules = [
    { icon:<ShieldCheck />, title:"Value for Money Compliance Engine", subtitle:"Procurement validation. Warranty enforcement. Board-level evidence.",
      benefit:"Stop paying invoices that don't match the contract. Stop paying for repairs covered by warranty. Give your board the VFM evidence the RSH demands.",
      features:[
        ["Every invoice validated against the contract","Rate, scope, identity, VAT. Red/amber/green workflow. Every flag traces to the clause."],
        ["Warranty enforcement at point of purchase","Browser extension intercepts POs in your AP system. Checks warranty before the money leaves."],
        ["Board-ready operations dashboard","Cross-module exceptions quantified. Drill-through to source. The VFM evidence paper your board currently can't produce."],
      ] },
    { icon:<HomeIcon />, title:"Service Charge Assurance", subtitle:"Lease validation. Calculation. Allocation.",
      benefit:"Stop allocating charges that contradict the lease. Stop your team spending days reconciling spreadsheets. Know that every tenant is paying what their agreement says they should pay.",
      features:[
        ["Charges calculated from the lease, not from a spreadsheet","Apportionment by floor area, equal shares, or ownership %. As the document specifies."],
        ["Compliance issues surfaced automatically","VAT on exempt services. Flat-rate charges that should be staircased. Units charged for services that don't apply to them."],
        ["Management fee validation","Fee assessed against the agreement terms and industry benchmarks. Sinking fund exclusion checked."],
      ] },
    { icon:<ScaleIcon />, title:"Rent Compliance", subtitle:"Full legislative hierarchy. Welsh and English. Every dwelling.",
      benefit:"Stop worrying whether your rent calculations comply with legislation that changes every year. Know that every dwelling's rent has been determined correctly against the full legislative chain.",
      features:[
        ["Welsh Rent Standard 2026\u20132036 built in","Distinct CPI+1% cap and affordability framework. Not conflated with England."],
        ["Policy-aware calculation","Rowntree Methodology, convergence rules, bedsit caps. Your board's policy decisions applied correctly to every home."],
        ["DD amendment processing","Tenant categorisation, frequency handling, 16 output files. The annual rent-setting exercise that currently takes your team weeks."],
      ] },
    { icon:<SearchIcon />, title:"FOI & Information Governance", subtitle:"FOI. Subject Access. Right to Delete. Statutory deadlines.",
      benefit:"Stop spending days searching SharePoint, email, and your HMS to respond to a single information request. Respond in hours, with full audit trail, at a fraction of the cost.",
      features:[
        ["Multi-source scanning","Searches SharePoint, OneDrive, email, spreadsheets, and your HMS in a single query."],
        ["Three request types in one register","FOI, Subject Access, Right to Delete. Statutory deadline tracking. Overdue alerts."],
        ["Built for what's coming","STAIRs takes effect October 2026. The FOI Extension Bill is in Parliament. This will become a weekly problem, not a quarterly one."],
      ] },
  ];
  return (
    <section id="modules" style={{ background:NAVY,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>The Platform</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:"#fff",lineHeight:1.15,margin:"0 0 14px",textTransform:"uppercase" }}>
            Four modules. One compliance layer.
          </h2>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.65)",lineHeight:1.75,maxWidth:660,marginBottom:52 }}>
            Each module maps to a regulatory obligation. Each one sits above your existing systems. Each one frees your team to do the work that actually needs a human being.
          </p>
        </FadeIn>
        <div className="mod-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
          {modules.map((m,i) => (
            <FadeIn key={m.title} delay={i*0.08}>
              <div style={{ background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"clamp(24px,3vw,32px) clamp(20px,2.5vw,28px)",border:"1px solid rgba(255,255,255,0.08)",height:"100%",transition:"border-color 0.3s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(20,163,168,0.4)"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}>
                <div style={{ marginBottom:16 }}>{m.icon}</div>
                <h3 style={{ fontFamily:"'Oswald',sans-serif",fontSize:"clamp(17px,2vw,20px)",color:"#fff",fontWeight:500,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:"0.02em" }}>{m.title}</h3>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:TEAL_LIGHT,margin:"0 0 16px",letterSpacing:"0.01em" }}>{m.subtitle}</p>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:400,color:"rgba(255,255,255,0.85)",lineHeight:1.75,marginBottom:20 }}>{m.benefit}</p>
                <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16 }}>
                  {m.features.map(([label,detail],j) => (
                    <div key={j} style={{ marginBottom:14 }}>
                      <div style={{ display:"flex",alignItems:"flex-start",gap:8 }}>
                        <div style={{ flexShrink:0,paddingTop:1 }}><CheckCircle /></div>
                        <div>
                          <span style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.9)",lineHeight:"20px" }}>{label}</span>
                          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.55)",lineHeight:"18px",margin:"3px 0 0" }}>{detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeopleSection() {
  const roles = [
    { before:"Service Charge Officer",was:"Three days a month cross-referencing lease terms against spreadsheets. Manually checking apportionment calculations. Chasing down discrepancies that should never have occurred.",now:"Investigating the compliance issues Strata surfaces. Engaging with managing agents on flagged variances. Preparing for the RICS 4th Edition requirements with evidence already assembled." },
    { before:"AP / Finance Officer",was:"Approving invoices against PO amounts because there's no time to check the contract. Missing scope violations, VAT errors, and warranty-covered charges that slip through every month.",now:"Reviewing only the invoices Strata flags. Managing supplier relationships instead of processing paperwork. Confident that compliant invoices are genuinely compliant." },
    { before:"FOI / Data Officer",was:"Spending days searching SharePoint, the HMS, and email archives to respond to a single information request. Missing statutory deadlines. Dreading the next request.",now:"Responding to requests in hours. Confident that every relevant document has been surfaced. Ready for STAIRs and the FOI Extension Bill without hiring additional staff." },
  ];
  return (
    <section id="people" style={{ background:LIGHT,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:960,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>Your team</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:NAVY,lineHeight:1.15,margin:"0 0 14px",textTransform:"uppercase" }}>
            Free your best people to do their best work
          </h2>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"#4B5563",lineHeight:1.8,maxWidth:640,marginBottom:48 }}>
            Strata doesn't replace your team. It gives them back the time they're currently spending on work that shouldn't require a human being. Every role changes from processing to decision-making.
          </p>
        </FadeIn>
        <div className="people-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16 }}>
          {roles.map((r,i) => (
            <FadeIn key={r.before} delay={i*0.1}>
              <div style={{ background:"#fff",borderRadius:8,border:"1px solid #E5E7EB",padding:"clamp(22px,2.5vw,28px) clamp(18px,2vw,24px)",height:"100%" }}>
                <h4 style={{ fontFamily:"'Oswald',sans-serif",fontSize:16,color:NAVY,fontWeight:500,margin:"0 0 18px",textTransform:"uppercase",letterSpacing:"0.03em" }}>{r.before}</h4>
                <div style={{ marginBottom:16 }}>
                  <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,fontWeight:600,color:"#B45309",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6 }}>Currently</p>
                  <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:300,color:"#4B5563",lineHeight:1.7,margin:0 }}>{r.was}</p>
                </div>
                <div style={{ borderTop:"1px solid #F3F4F6",paddingTop:16 }}>
                  <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,fontWeight:600,color:TEAL,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6 }}>With Strata</p>
                  <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:400,color:NAVY,lineHeight:1.7,margin:0 }}>{r.now}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const rows = [
    ["Calculate service charges from rules a human entered","Read the lease and check the rules are correct"],
    ["Process invoices against PO amounts","Validate invoices against contract clauses"],
    ["Apply rent uplifts using a configured formula","Trace each rent through the full legislative hierarchy"],
    ["Store documents in SharePoint","Search every document to answer FOI requests in hours"],
    ["Raise purchase orders","Intercept POs to check active warranties first"],
    ["Produce basic financial reports","Generate board-level VFM evidence with drill-through to source"],
  ];
  return (
    <section style={{ background:NAVY,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:860,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>The difference</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:"#fff",lineHeight:1.15,margin:"0 0 40px",textTransform:"uppercase" }}>
            Other systems automate calculation. <span style={{ color:TEAL_LIGHT }}>Strata validates compliance.</span>
          </h2>
        </FadeIn>
        <div style={{ borderRadius:8,overflow:"hidden" }}>
          <div className="diff-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:2 }}>
            <div style={{ background:"rgba(255,255,255,0.04)",padding:"12px 20px" }}>
              <span style={{ fontFamily:"'Oswald',sans-serif",fontSize:11,color:"rgba(255,255,255,0.6)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em" }}>What existing systems do</span>
            </div>
            <div style={{ background:"rgba(20,163,168,0.12)",padding:"12px 20px" }}>
              <span style={{ fontFamily:"'Oswald',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em" }}>What Strata AI does</span>
            </div>
          </div>
          {rows.map(([left,right],i) => (
            <FadeIn key={i} delay={i*0.03}>
              <div className="diff-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:2 }}>
                <div style={{ background:"rgba(255,255,255,0.02)",padding:"14px 20px",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.7 }}>{left}</span>
                </div>
                <div style={{ background:"rgba(20,163,168,0.05)",padding:"14px 20px",borderTop:"1px solid rgba(20,163,168,0.08)" }}>
                  <span style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.9)",lineHeight:1.7 }}>{right}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatorySection() {
  const regs = [
    { date:"7 Apr 2026",title:"RICS Service Charge Code, 4th Edition",desc:"Strengthened transparency, apportionment, and reserve fund requirements. First edition to explicitly include housing associations." },
    { date:"Apr 2026",title:"Welsh Rent and Service Charge Standard 2026\u20132036",desc:"Distinct Welsh compliance regime with CPI+1% cap. Strata handles Welsh legislative hierarchy separately from England." },
    { date:"Oct 2026",title:"RSH STAIRs requirements",desc:"Tenant information request obligations under the Transparency, Influence and Accountability Standard." },
    { date:"Phased",title:"Leasehold and Freehold Reform Act 2024",desc:"Enhanced leaseholder rights and service charge transparency requirements being commenced in stages." },
    { date:"In Parliament",title:"FOI Extension Bill",desc:"Would bring housing associations under the Freedom of Information Act. Strata's FOI engine is purpose-built for this." },
  ];
  return (
    <section id="regulatory" style={{ background:LIGHT,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:760,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>Regulatory context</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,4vw,38px)",color:NAVY,lineHeight:1.15,margin:"0 0 14px",textTransform:"uppercase" }}>Built for Welsh regulatory requirements</h2>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"#4B5563",lineHeight:1.75,marginBottom:40 }}>
            Welsh Regulatory Framework. WHQS 2023. Renting Homes (Wales) Act. The regulatory environment is not the same as England, and your compliance platform should know the difference.
          </p>
        </FadeIn>
        {regs.map((r,i) => (
          <FadeIn key={r.title} delay={i*0.05}>
            <div className="reg-row" style={{ display:"flex",gap:20,padding:"18px 0",borderBottom:i<regs.length-1?"1px solid #E5E7EB":"none",alignItems:"flex-start" }}>
              <div style={{ fontFamily:"'Oswald',sans-serif",fontSize:13,fontWeight:500,color:TEAL,minWidth:100,flexShrink:0,paddingTop:1,letterSpacing:"0.02em" }}>{r.date}</div>
              <div style={{ minWidth:0 }}>
                <h4 style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,color:NAVY,fontWeight:500,margin:"0 0 3px" }}>{r.title}</h4>
                <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,fontWeight:300,color:"#6B7280",lineHeight:1.7,margin:0 }}>{r.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section style={{ background:NAVY,padding:"clamp(64px,10vw,100px) 20px" }}>
      <div style={{ maxWidth:760,margin:"0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:TEAL_LIGHT,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:14 }}>Patent-pending technology</p>
          <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(24px,3.5vw,34px)",color:"#fff",lineHeight:1.15,margin:"0 0 20px",textTransform:"uppercase" }}>Recursive Logic Caching</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.7)",lineHeight:1.85,marginBottom:20 }}>
            Strata reads a contract once. Extracts every rule into a structured logic graph. Caches them permanently. Every subsequent check is instant. When your team changes, the knowledge doesn't walk out the door.
          </p>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.7)",lineHeight:1.85,marginBottom:40 }}>
            New team members inherit the full contractual context from day one. Supplier histories, compliance trends, lease obligations. All searchable, all auditable, all traced to the source document. Your institutional knowledge, preserved.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ background:"rgba(255,255,255,0.03)",borderRadius:8,border:"1px solid rgba(255,255,255,0.08)",padding:"clamp(24px,3vw,32px) clamp(20px,2.5vw,28px)" }}>
            <div className="know-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24 }}>
              {[["100%","Auditability","Every figure traces to the source clause"],["Patent pending","US 63/969,838","Multi-tier caching architecture"],["Weeks","To go live","Not months. Not years."]].map(([val,label,sub]) => (
                <div key={label}>
                  <div style={{ fontFamily:"'Oswald',sans-serif",fontSize:"clamp(24px,3vw,32px)",color:TEAL_LIGHT,fontWeight:400 }}>{val}</div>
                  <div style={{ fontFamily:"'Roboto',sans-serif",fontSize:13,color:"#fff",fontWeight:500,marginTop:4 }}>{label}</div>
                  <div style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.55)",marginTop:4,lineHeight:1.55 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", organisation:"", role:"", homes:"", interest:"", message:"" });
  const update = (k,v) => setForm(prev => ({...prev, [k]: v}));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.organisation) return;
    setSubmitted(true);
  };

  return (
    <section id="demo" style={{ background:`linear-gradient(165deg,#0a1628 0%,${NAVY} 100%)`,padding:"clamp(80px,12vw,120px) 20px",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",bottom:"-30%",left:"-10%",width:500,height:500,background:`radial-gradient(circle,${TEAL}10 0%,transparent 65%)`,borderRadius:"50%",filter:"blur(100px)" }} />
      <div style={{ maxWidth:640,margin:"0 auto",position:"relative",zIndex:1 }}>
        <FadeIn>
          <div style={{ textAlign:"center",marginBottom:40 }}>
            <h2 style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:"clamp(28px,4.5vw,44px)",color:"#fff",lineHeight:1.12,margin:"0 0 16px",textTransform:"uppercase" }}>
              Try it with your own data
            </h2>
            <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.65)",lineHeight:1.75,marginBottom:8 }}>
              Apply for a free, no-obligation trial. Upload your service charge breakdowns, invoices, or rent uplifts. Strata computes independently and shows you where the numbers match and where they don't.
            </p>
            <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.5)",lineHeight:1.7 }}>
              No commitment. No cost. Just your data, validated against your own documents.
            </p>
          </div>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div style={{ background:"rgba(20,163,168,0.1)",border:"1px solid rgba(20,163,168,0.3)",borderRadius:8,padding:"40px 32px",textAlign:"center" }}>
              <div style={{ fontSize:32,marginBottom:16 }}>&#10003;</div>
              <h3 style={{ fontFamily:"'Oswald',sans-serif",fontSize:24,color:"#fff",fontWeight:500,margin:"0 0 12px",textTransform:"uppercase" }}>Thank you</h3>
              <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:15,color:"rgba(255,255,255,0.75)",lineHeight:1.7,margin:0 }}>
                We'll be in touch within 48 hours to discuss your trial. In the meantime, you can explore the live demo at{" "}
                <a href="https://strata-ai-housing-demo.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" style={{ color:TEAL_LIGHT,textDecoration:"underline" }}>strata-ai-housing-demo.vercel.app</a>
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <div style={{ background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"clamp(24px,3vw,36px)" }}>
              <div className="cta-form-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Name *</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => update("name",e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Email *</label>
                  <input type="email" placeholder="you@organisation.org.uk" value={form.email} onChange={e => update("email",e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Organisation *</label>
                  <input type="text" placeholder="Housing association name" value={form.organisation} onChange={e => update("organisation",e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Role</label>
                  <input type="text" placeholder="e.g. Head of Finance" value={form.role} onChange={e => update("role",e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Number of homes managed</label>
                  <select value={form.homes} onChange={e => update("homes",e.target.value)}>
                    <option value="">Select range</option>
                    <option value="under-1000">Under 1,000</option>
                    <option value="1000-5000">1,000 - 5,000</option>
                    <option value="5000-10000">5,000 - 10,000</option>
                    <option value="10000-25000">10,000 - 25,000</option>
                    <option value="25000+">25,000+</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Primary interest</label>
                  <select value={form.interest} onChange={e => update("interest",e.target.value)}>
                    <option value="">Select module</option>
                    <option value="vfm">Value for Money Compliance</option>
                    <option value="service-charges">Service Charge Assurance</option>
                    <option value="rent">Rent Compliance</option>
                    <option value="foi">FOI & Information Governance</option>
                    <option value="all">Full platform</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop:14 }}>
                <label style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.7)",display:"block",marginBottom:6 }}>Anything else you'd like us to know?</label>
                <textarea rows={3} placeholder="Optional" value={form.message} onChange={e => update("message",e.target.value)} style={{ resize:"vertical" }} />
              </div>
              <button onClick={handleSubmit} style={{
                fontFamily:"'Roboto',sans-serif",fontSize:15,fontWeight:500,
                background:TEAL,color:"#fff",border:"none",borderRadius:6,
                padding:"14px 32px",cursor:"pointer",marginTop:20,width:"100%",
                display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                boxShadow:`0 0 40px ${TEAL}35`,transition:"transform 0.2s",
                opacity: (!form.name || !form.email || !form.organisation) ? 0.5 : 1,
              }}
                disabled={!form.name || !form.email || !form.organisation}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"} onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
                Apply for your free trial <ArrowRight />
              </button>
              <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,color:"rgba(255,255,255,0.45)",textAlign:"center",marginTop:12,marginBottom:0,lineHeight:1.6 }}>
                We'll respond within 48 hours. Your data is processed securely and deleted after the trial unless you choose to proceed.
              </p>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div style={{ marginTop:48,display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap" }}>
            {[["Email","neal@wearestrata.ai"],["Web","wearestrata.ai"]].map(([label,val]) => (
              <div key={label} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Roboto',sans-serif",fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.5)",marginBottom:3 }}>{label}</div>
                <div style={{ fontFamily:"'Roboto',sans-serif",fontSize:14,fontWeight:400,color:TEAL_LIGHT }}>{val}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:"#080E18",padding:"32px 20px",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
      <div className="foot-wrap" style={{ maxWidth:860,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
        <div>
          <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:6 }}>
            <span style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:15,color:"#fff",letterSpacing:"0.05em",textTransform:"uppercase" }}>Strata</span>
            <span style={{ fontFamily:"'Oswald',sans-serif",fontWeight:500,fontSize:15,color:TEAL_LIGHT,letterSpacing:"0.05em",textTransform:"uppercase" }}>AI</span>
          </div>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.45)",margin:0,lineHeight:1.6 }}>
            WeAreStrata Limited. Registered in England and Wales, No. 16974757.<br/>4 Usk Vale Court, Pontypool, Wales, NP4 8AS.
          </p>
        </div>
        <div className="foot-r" style={{ textAlign:"right" }}>
          <p style={{ fontFamily:"'Roboto',sans-serif",fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.45)",margin:0,lineHeight:1.6 }}>
            Patent Pending: US 63/969,838<br/>Recursive Logic Caching{"\u2122"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function StrataAIMicrosite() {
  const scrollTo = useScrollTo();
  return (
    <div style={{ margin:0,padding:0,background:NAVY,minHeight:"100vh",overflowX:"hidden" }}>
      <style>{css}</style>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      {/* <Nav scrollTo={scrollTo} /> */}
      <Hero scrollTo={scrollTo} />
      <ProblemSection />
      <ImplementationSection />
      <HowItWorks />
      <Modules />
      <PeopleSection />
      <DifferenceSection />
      <RegulatorySection />
      <TechSection />
      <TrialForm />
      <Footer />
    </div>
  );
}
