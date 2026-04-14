import { useState, useEffect, useRef } from "react";

const TEAL = "#0D7377";         // brand teal - used on light backgrounds (5.62:1 on white)
const TEAL_LIGHT = "#14A3A8";   // accessible teal on dark backgrounds (5.62:1 on navy)
const NAVY = "#0F1B2D";
const LIGHT = "#F8FAFB";

function MenuIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>; }
function CloseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }

function useScrollTo() {
  return (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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

export default function() {
  const scrollTo = useScrollTo();
  return (
    <Nav scrollTo={scrollTo} />
  )
}
