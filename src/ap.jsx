import { useState, useEffect, useRef, useCallback } from "react";

/* ═══ DESIGN TOKENS ═══ */
const T = "#0D7377";
const TL = "#14A3A8";
const N = "#0F1B2D";
const BG = "#080E18";
const S1 = N;
const S2 = "#111D30";
const S3 = "#0C1524";
const os = "'Oswald',sans-serif";
const rb = "'Roboto',sans-serif";

/* ═══ FADE-IN HOOK ═══ */
function useFI() {
  const r = useRef(null);
  const [v, sV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) sV(true); },
      { threshold: 0.06 }
    );
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return [r, v];
}

function F({ children, d = 0 }) {
  const [r, v] = useFI();
  return (
    <div ref={r} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`
    }}>{children}</div>
  );
}

function Nav({setPage}){
  const[sc,setSc]=useState(false);const[op,setOp]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
  const links=[
    {l:"Platform",a:()=>setPage("platform")},{l:"Sectors",a:()=>setPage("sectors")},
    {l:"Pricing",a:()=>setPage("pricing")},{l:"About",a:()=>setPage("about")},
    
  ];
  const nv=a=>{a();setOp(false);};
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:sc||op?"rgba(8,14,24,0.97)":"transparent",backdropFilter:sc||op?"blur(14px)":"none",borderBottom:sc?"1px solid rgba(255,255,255,0.05)":"none",transition:"all 0.35s"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:60,padding:"0 24px"}}>
        <div style={{cursor:"pointer",display:"flex",alignItems:"baseline",gap:5}} onClick={()=>{setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>
          <span style={{fontFamily:os,fontWeight:500,fontSize:19,color:"#fff",letterSpacing:"0.06em"}}>STRATA</span>
          <span style={{fontFamily:os,fontWeight:500,fontSize:19,color:TL,letterSpacing:"0.06em"}}>AI</span>
        </div>
        <div className="dk" style={{display:"flex",gap:24,alignItems:"center"}}>
          {links.map(l=><button key={l.l} onClick={()=>nv(l.a)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.55)",fontFamily:rb,fontSize:12,fontWeight:400,cursor:"pointer",padding:"4px 0",letterSpacing:"0.03em",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.55)"}>{l.l}</button>)}
          <button onClick={()=>nv(()=>setPage("start"))} style={{fontFamily:rb,fontSize:12,fontWeight:500,background:T,color:"#fff",border:"none",borderRadius:5,padding:"8px 18px",cursor:"pointer"}}>Get started free</button>
        </div>
        <button className="mo" onClick={()=>setOp(!op)} style={{background:"none",border:"none",cursor:"pointer",padding:4,display:"none",alignItems:"center"}}>{op?<Ic d="x"/>:<Ic d="menu"/>}</button>
      </div>
      {op&&<div className="mo" style={{padding:"0 24px 20px",display:"none",flexDirection:"column"}}>
        {links.map(l=><button key={l.l} onClick={()=>nv(l.a)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.8)",fontFamily:rb,fontSize:15,cursor:"pointer",padding:"14px 0",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>{l.l}</button>)}
        <button onClick={()=>nv(()=>setPage("start"))} style={{fontFamily:rb,fontSize:15,fontWeight:500,background:T,color:"#fff",border:"none",borderRadius:6,padding:"14px 24px",cursor:"pointer",marginTop:12}}>Get started free</button>
      </div>}
    </nav>
  );
}

/* ═══ ICONS ═══ */
function Ic({ d }) {
  const p = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    lock: <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    shieldPlain: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    arrow: <svg {...p} width={16} height={16}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  };
  return icons[d] || null;
}

/* ═══ STYLE HELPERS ═══ */
const lbl = { fontFamily: rb, fontSize: 11, color: TL, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 };
const hd = (sz = "clamp(24px,4vw,40px)") => ({ fontFamily: os, fontWeight: 500, fontSize: sz, color: "#fff", lineHeight: 1.12, marginBottom: 12, textTransform: "uppercase" });
const bw = { fontFamily: rb, fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 };
const tx = { fontFamily: rb, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 };
const cd = { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10 };
const btn = { fontFamily: rb, fontSize: 14, fontWeight: 500, background: T, color: "#fff", border: "none", borderRadius: 6, padding: "14px 28px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: `0 0 50px ${T}30`, transition: "transform 0.2s", textDecoration: "none" };
const btnSec = { fontFamily: rb, fontSize: 14, fontWeight: 400, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, padding: "14px 24px", cursor: "pointer", transition: "border-color 0.2s", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 };
const section = { padding: "clamp(48px,6vw,72px) 24px" };
const hov = e => e.currentTarget.style.transform = "translateY(-2px)";
const unhov = e => e.currentTarget.style.transform = "none";

/* ═══ CSS ═══ */
const CSS = `
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
input[type="text"],input[type="email"],textarea{font-family:${rb};font-size:14px;padding:11px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:6px;background:rgba(255,255,255,0.04);color:#fff;width:100%;transition:border-color 0.2s}
input:focus,textarea:focus{outline:none;border-color:${TL}}
input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.3)}
@media(max-width:768px){.g2{grid-template-columns:1fr!important}.g3{grid-template-columns:1fr!important}.sr{gap:20px!important}.hero-h{font-size:32px!important}}
`;

/* ═══ MAIN COMPONENT ═══ */
export default function StrataContractsLP({setPage}) {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", org: "", email: "", contracts: "", msg: "" });

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = () => {
    if (!formData.name || !formData.email) { alert("Please enter your name and email address."); return; }
    window.location.href = `mailto:hello@wearestrata.ai?subject=Free Trial Request - ${encodeURIComponent(formData.org)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nOrganisation: ${formData.org}\nEmail: ${formData.email}\nContracts: ${formData.contracts}\nMessage: ${formData.msg}`
    )}`;
  };
  
  const upd = (k, v) => setFormData(p => ({ ...p, [k]: v }));

  return (
    <div style={{ background: S1, minHeight: "100vh", overflowX: "hidden", fontFamily: rb }}>
      <style>{CSS}</style>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* ═══ NAV ═══ */}
      <Nav setPage={setPage} />

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(170deg,${BG} 0%,${S1} 40%,${S2} 100%)`,
        position: "relative", overflow: "hidden", padding: "100px 24px 40px"
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, background: `radial-gradient(circle,${T}10 0%,transparent 60%)`, borderRadius: "50%", filter: "blur(80px)" }} />

        <div style={{ maxWidth: 840, textAlign: "center", position: "relative", zIndex: 1 }}>
          <F><p style={lbl}>Strata | Contracts</p></F>
          <F d={0.1}>
            <h1 className="hero-h" style={{ fontFamily: os, fontWeight: 500, fontSize: "clamp(34px,6.5vw,62px)", color: "#fff", lineHeight: 1.06, marginBottom: 20, textTransform: "uppercase" }}>
              Your contracts say one thing.<br /><span style={{ color: TL }}>Your invoices say another.</span>
            </h1>
          </F>
          <F d={0.2}>
            <p style={{ fontFamily: rb, fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 400, color: "rgba(255,255,255,0.9)", lineHeight: 1.6, maxWidth: 580, margin: "0 auto 20px" }}>
              World Commerce &amp; Contracting estimates that organisations lose up to 11% of contract value after signature. Every year. Exposed.
            </p>
          </F>
          <F d={0.3}>
            <p style={{ fontFamily: rb, fontSize: "clamp(14px,1.5vw,16px)", fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 12px" }}>
              Strata reads your contracts, extracts every commercial term, and validates every invoice against them. Deterministically. With full auditability.
            </p>
            <p style={{ fontFamily: rb, fontSize: "clamp(14px,1.4vw,16px)", fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>
              No system replacement. No data leaving your perimeter. £1 per invoice. Live in weeks.
            </p>
          </F>
          <F d={0.4}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("start")} style={btn} onMouseEnter={hov} onMouseLeave={unhov}>Start your free trial <Ic d="arrow" /></button>
              <button onClick={() => scrollTo("how")} style={btnSec} onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"} onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}>See how it works</button>
            </div>
          </F>
          <F d={0.5}>
            <div className="sr" style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
              {[["Up to 11%", "contract value leakage"], ["£1", "per invoice processed"], ["Zero", "changes to your systems"], ["Weeks", "to go live"]].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: os, fontSize: "clamp(22px,3vw,32px)", color: TL, fontWeight: 400 }}>{v}</div>
                  <div style={{ fontFamily: rb, fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase", maxWidth: 120 }}>{l}</div>
                </div>
              ))}
            </div>
          </F>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section style={{ ...section, background: S2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: `radial-gradient(circle,${T}06 0%,transparent 60%)`, borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <F>
            <p style={lbl}>The problem nobody talks about</p>
            <h2 style={{ ...hd("clamp(22px,3.5vw,34px)"), lineHeight: 1.2, marginBottom: 28 }}>Once the contract is signed, nobody enforces it.</h2>
          </F>
          <F d={0.1}>
            <p style={{ ...bw, marginBottom: 20, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              Procurement negotiates the deal. Legal reviews the terms. The contract gets signed. Then procurement and legal move onto the next supplier, leaving the business to operationalise the commercial terms inside a long-form PDF.
            </p>
            <p style={{ ...bw, marginBottom: 20, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              The problem is obvious. Your ERP cannot read a PDF. Your accounts payable system cannot read a PDF. So the rates, the caps, the rebate thresholds, the recharge obligations, the SLA penalties—all of it sits in a document that no operational system can understand.
            </p>
            <p style={{ fontFamily: rb, fontSize: "clamp(16px,1.7vw,20px)", fontWeight: 500, color: TL, lineHeight: 1.6, maxWidth: 540, margin: "0 auto" }}>
              Invoices get paid against PO amounts. Not against the contract. And the gap between the two is where your money disappears.
            </p>
          </F>
        </div>
      </section>

      {/* ═══ THE SCALE ═══ */}
      <section style={{ ...section, background: S3 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <F>
            <p style={lbl}>The scale of it</p>
            <h2 style={hd()}>Up to 11% of contract value. Lost after signature.</h2>
          </F>
          <F d={0.1}>
            <p style={{ ...bw, marginBottom: 28 }}>
              World Commerce &amp; Contracting's research across thousands of organisations estimates up to 11% of contract value leaked through missed savings, unmanaged clauses, and unauthorised changes. Most organisations do not formally track it at all.
            </p>
          </F>
          <F d={0.2}>
            <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
              {[
                ["Rates invoiced above the contract", "The supplier's system has the rate they want to charge. Your system has the PO amount. Neither checks the contract."],
                ["Volume discounts never triggered", "The contract says you get a better rate at 500 units. Nobody tracks cumulative volumes against the threshold."],
                ["Recharges never applied", "The contract says certain costs are rechargeable to a third party. The AP team does not know this because they have never read the contract."],
                ["Expired terms still honoured", "The contract had a price review clause. The review date passed. The old rates kept being charged. Or worse, the new rates were applied incorrectly."],
              ].map(([t, d], i) => (
                <div key={i} style={{ ...cd, padding: "20px 22px" }}>
                  <p style={{ fontFamily: rb, fontSize: 14, fontWeight: 500, color: "#fff", lineHeight: 1.45, marginBottom: 8 }}>{t}</p>
                  <p style={tx}>{d}</p>
                </div>
              ))}
            </div>
          </F>
          <F d={0.3}>
            <p style={{ textAlign: "center", marginTop: 8 }}>
              <a href="https://info.worldcc.com/closing-the-procurement-value-gap" target="_blank" rel="noopener noreferrer" style={{ fontFamily: rb, fontSize: 13, fontWeight: 400, color: TL, textDecoration: "underline", textDecorationColor: "rgba(20,163,168,0.3)" }}>
                Source: World Commerce &amp; Contracting — Closing the Procurement Value Gap
              </a>
            </p>
          </F>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" style={{ ...section, background: S1 }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <F>
            <p style={lbl}>How it works</p>
            <h2 style={hd()}>Read once. Enforce every invoice.</h2>
            <p style={{ ...bw, maxWidth: 620, marginBottom: 28 }}>
              A patent-pending approach that extracts commercial terms from your contracts and then compares every invoice against them. Deterministically. With full auditability.
            </p>
          </F>

          <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "left", marginBottom: 32 }}>
            {[
              ["01", "Upload your contracts", "PDF, scanned, or digital. Strata reads the contract once. Extracts every rate, cap, rebate threshold, recharge obligation, SLA penalty, and payment term into structured, executable logic."],
              ["02", "Validate every invoice", "Every invoice is compared against the governing contract. Rate correct? Scope within terms? Volume discount triggered? Recharge applicable? Every check traced to the specific clause on the specific page."],
              ["03", "Stop the leak", "Flags appear before payment is made. Not months later. Your AP team reviews only the invoices that do not match. Savings hit the bottom line within the first month of deployment."],
            ].map(([num, title, desc], i) => (
              <F key={num} d={i * 0.1}>
                <div style={{ ...cd, padding: "clamp(24px,3vw,32px)", height: "100%" }}>
                  <div style={{ fontFamily: os, fontSize: 48, fontWeight: 500, color: TL, lineHeight: 1, marginBottom: 8 }}>{num}</div>
                  <p style={{ fontFamily: os, fontSize: 18, fontWeight: 500, color: "#fff", textTransform: "uppercase", marginBottom: 10 }}>{title}</p>
                  <p style={tx}>{desc}</p>
                </div>
              </F>
            ))}
          </div>

          <F d={0.4}>
            <p style={{ textAlign: "center", marginTop: 12, fontFamily: rb, fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)" }}>
              Patent pending: US 63/969,838 &amp; US 64/037,381
            </p>
          </F>
        </div>
      </section>

      {/* ═══ NO CHANGES REQUIRED ═══ */}
      <section style={{ ...section, background: S2 }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <F>
            <p style={lbl}>Your existing systems stay exactly where they are</p>
            <h2 style={{ ...hd("clamp(22px,3.5vw,34px)"), lineHeight: 1.2, marginBottom: 28 }}>No integration project. No system replacement. No data migration.</h2>
          </F>
          <F d={0.1}>
            <p style={{ ...bw, marginBottom: 20, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              Strata slots into your existing accounts payable process. Upload your contracts. Feed in your invoices. The platform sits alongside your ERP, your AP system, and your procurement tools without touching them.
            </p>
            <p style={{ ...bw, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              It stops leaks before the cash leaves the building.
            </p>
          </F>
        </div>
      </section>

      {/* ═══ SECURITY ═══ */}
      <section style={{ ...section, background: S3 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <F>
            <p style={lbl}>Security your cyber team will sign off on</p>
            <h2 style={hd()}>No sensitive data leaves your perimeter.</h2>
          </F>
          <F d={0.1}>
            <p style={{ ...bw, marginBottom: 28 }}>
              The technology architecture is designed for organisations that take data security seriously. Your contracts and invoices stay within your control. The extraction and validation happens without exposing sensitive commercial data to external systems.
            </p>
          </F>
          <F d={0.2}>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[
                ["shield", "Data stays with you", "Your contracts and invoices remain within your security boundary. No sensitive commercial data is transmitted externally."],
                ["lock", "Audit-ready", "Complete evidence trail from invoice to contract clause. Every validation decision documented and traceable."],
                ["shieldPlain", "Deterministic validation", "No AI in the validation step. Extracted rules execute deterministically. Repeatable. Defensible. No hallucinations."],
              ].map(([ic, title, desc], i) => (
                <F key={title} d={i * 0.08}>
                  <div style={{ ...cd, padding: "20px 22px", textAlign: "center" }}>
                    <div style={{ color: TL, marginBottom: 12 }}><Ic d={ic} /></div>
                    <p style={{ fontFamily: os, fontSize: 14, fontWeight: 500, color: "#fff", textTransform: "uppercase", marginBottom: 6 }}>{title}</p>
                    <p style={tx}>{desc}</p>
                  </div>
                </F>
              ))}
            </div>
          </F>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section style={{ ...section, background: S1 }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <F>
            <p style={lbl}>Pricing</p>
            <h2 style={{ ...hd(), marginBottom: 20 }}>£1 per invoice processed.</h2>
          </F>
          <F d={0.1}>
            <p style={{ ...bw, marginBottom: 28, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              No setup fees. No platform licence. No minimum commitment. You pay per invoice validated against the contract. If a single invoice catches a single overcharge, the cost of validation has already been recovered.
            </p>
          </F>
          <F d={0.2}>
            <div style={{ maxWidth: 480, margin: "0 auto" }}>
              <div style={{ ...cd, padding: 32, textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
                  <span style={{ fontFamily: os, fontSize: 48, fontWeight: 500, color: TL }}>£1</span>
                  <span style={{ fontFamily: rb, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>per invoice validated</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16 }}>
                  {["Unlimited contracts", "Full clause-level validation", "Complete audit trail", "Real-time compliance dashboard", "Automated evidence packs", "Volume pricing available at 5,000+ invoices/month"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: i < 5 ? 10 : 0 }}>
                      <span style={{ color: TL, fontSize: 14, lineHeight: "20px", flexShrink: 0 }}>✓</span>
                      <span style={tx}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </F>
          <F d={0.3}>
            <p style={{ fontFamily: rb, fontSize: 15, fontWeight: 400, color: TL, lineHeight: 1.7, maxWidth: 520, margin: "28px auto 0" }}>
              Instant ROI. If an invoice is £5,000 and the overcharge is just 5%, a single corrected invoice saves £250. The cost of checking it was £1.
            </p>
          </F>
        </div>
      </section>

      {/* ═══ FREE TRIAL ═══ */}
      <section id="start" style={{ ...section, background: S2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: `radial-gradient(circle,${T}10 0%,transparent 60%)`, borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <F>
            <div style={{ textAlign: "center" }}>
              <p style={lbl}>Free trial</p>
              <h2 style={{ ...hd("clamp(22px,3.5vw,34px)"), lineHeight: 1.2, marginBottom: 20 }}>See how much you would have saved.</h2>
            </div>
          </F>
          <F d={0.1}>
            <div style={{ textAlign: "center" }}>
              <p style={{ ...bw, marginBottom: 12, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
                Give us a subset of your supplier contracts and the associated invoices for the last three months. We will show you exactly how much you would have saved, which contract clauses were missed, and where the leakage is happening.
              </p>
              <p style={{ fontFamily: rb, fontSize: 14, fontWeight: 400, color: TL, marginBottom: 24 }}>
                No cost. No commitment. Just evidence.
              </p>
            </div>
          </F>
          <F d={0.2}>
            <div style={{ ...cd, padding: "clamp(28px,4vw,40px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Name</label>
                  <input type="text" placeholder="Your name" value={formData.name} onChange={e => upd("name", e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Organisation</label>
                  <input type="text" placeholder="Your organisation" value={formData.org} onChange={e => upd("org", e.target.value)} />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Email</label>
                <input type="email" placeholder="your.name@organisation.com" value={formData.email} onChange={e => upd("email", e.target.value)} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Approximate number of supplier contracts</label>
                <input type="text" placeholder="e.g. 50, 200, 500+" value={formData.contracts} onChange={e => upd("contracts", e.target.value)} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Anything else</label>
                <textarea rows={3} placeholder="Tell us about your current process" value={formData.msg} onChange={e => upd("msg", e.target.value)} />
              </div>
              <button onClick={handleSubmit} style={{ ...btn, width: "100%", justifyContent: "center" }} onMouseEnter={hov} onMouseLeave={unhov}>
                Request your free trial <Ic d="arrow" />
              </button>
              <p style={{ fontFamily: rb, fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: 12 }}>
                We will be in touch within 24 hours to arrange your trial.
              </p>
            </div>
          </F>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: BG, padding: "40px 24px 28px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
              <span style={{ fontFamily: os, fontWeight: 500, fontSize: 16, color: "#fff", letterSpacing: "0.06em" }}>STRATA</span>
              <span style={{ fontFamily: os, fontWeight: 500, fontSize: 16, color: TL, letterSpacing: "0.06em" }}>AI</span>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <span style={{ fontFamily: rb, fontSize: 12, color: TL }}>hello@wearestrata.ai</span>
              <span style={{ fontFamily: rb, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>wearestrata.ai</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ fontFamily: rb, fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>WeAreStrata Limited. Registered in England and Wales, No. 16974757. 4 Usk Vale Court, Pontypool, Wales, NP4 8AS.</p>
            <p style={{ fontFamily: rb, fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>Patent Pending: US 63/969,838 &amp; US 64/037,381</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
