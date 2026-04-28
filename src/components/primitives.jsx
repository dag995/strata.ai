/* Primitives: icons, fade-in, Logo, Nav, Footer */
import { CF, FONT, MONO, btnPrimary, btnGhost, hovPrimary, unhovPrimary } from './tokens'
import { useState, useEffect, useRef, useCallback } from "react";
import { PRODUCTS } from './data';

/* Icons — thin stroke, inherit currentColor */
export function Ic({ d, size = 20 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round",
  };
  const icons = {
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    home: <svg {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    scale: <svg {...p}><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/><path d="M16 21h5v-5"/><path d="M8 21H3v-5"/></svg>,
    search: <svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    arrow: <svg {...p} width={size} height={size}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    arrowRight: <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    menu: <svg {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    building: <svg {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01"/></svg>,
    users: <svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    zap: <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    lock: <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    layers: <svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    clock: <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    download: <svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    book: <svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    briefcase: <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    check: <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    plus: <svg {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  };
  return icons[d] || null;
}

/* Fade in on scroll — but also reveal if already in viewport at mount (fixes initial hero) */
export function useFI() {
  const r = useRef(null);
  const [v, sV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    // Reveal immediately if already visible (top of page on load)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sV(true);
      return;
    }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) sV(true); }, { threshold: 0.06 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [r, v];
}

export function FDiv({ children, d = 0 }) {
  const [r, v] = useFI();
  return (
    <div ref={r} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(14px)",
      transition: `opacity 0.55s ease ${d}s, transform 0.55s ease ${d}s`,
    }}>{children}</div>
  );
}

/* Logo — matches the original wordmark structure: STRATA + AI
   side by side, uppercase, letter-spaced. New palette: ink for STRATA, orange for AI. */
export function Logo({ size = 19 }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 5, cursor: "inherit" }}>
      <span style={{
        fontFamily: FONT, fontWeight: 600, fontSize: size,
        color: CF.ink, letterSpacing: "0.06em",
      }}>STRATA</span>
      <span style={{
        fontFamily: FONT, fontWeight: 600, fontSize: size,
        color: CF.orange, letterSpacing: "0.06em",
      }}>AI</span>
    </div>
  );
}

/* Nav — white, subtle bottom border on scroll, orange primary CTA */
export function Nav({ page, setPage }) {
  const [sc, setSc] = useState(false);
  const [op, setOp] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 20);
    window.addEventListener("scroll", h);
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { l: "Platform", a: () => setPage("platform") },
    { l: "Sectors", a: () => setPage("sectors") },
    { l: "Pricing", a: () => setPage("pricing") },
    { l: "Resources", a: () => setPage("resources") },
    { l: "About", a: () => setPage("about") },
  ];
  const nv = (a) => { a(); setOp(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "saturate(180%) blur(10px)",
      WebkitBackdropFilter: "saturate(180%) blur(10px)",
      borderBottom: sc ? `1px solid ${CF.line}` : "1px solid transparent",
      transition: "border-color 0.2s",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, padding: "0 28px",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => { setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo/>
        </div>

        <div className="dk" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {links.map(l => (
            <button key={l.l} onClick={() => nv(l.a)} style={{
              background: "none", border: "none",
              color: CF.ink2, fontFamily: FONT, fontSize: 14, fontWeight: 500,
              cursor: "pointer", padding: "8px 14px", borderRadius: 6,
              transition: "color 0.15s, background 0.15s",
            }}
              onMouseEnter={e => { e.target.style.color = CF.ink; e.target.style.background = CF.bg2; }}
              onMouseLeave={e => { e.target.style.color = CF.ink2; e.target.style.background = "transparent"; }}
            >{l.l}</button>
          ))}
          <button onClick={() => nv(() => setPage("start"))} style={{
            ...btnPrimary, marginLeft: 12, padding: "9px 18px", fontSize: 14,
          }} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
            Get started free
          </button>
        </div>

        <button className="mo" onClick={() => setOp(!op)} style={{
          background: "none", border: `1px solid ${CF.line}`, borderRadius: 6,
          cursor: "pointer", padding: 8, display: "none", alignItems: "center",
          color: CF.ink,
        }}>{op ? <Ic d="x"/> : <Ic d="menu"/>}</button>
      </div>

      {op && (
        <div className="mo" style={{
          padding: "8px 28px 20px", display: "none", flexDirection: "column",
          background: "#fff", borderTop: `1px solid ${CF.line}`,
        }}>
          {links.map(l => (
            <button key={l.l} onClick={() => nv(l.a)} style={{
              background: "none", border: "none", color: CF.ink,
              fontFamily: FONT, fontSize: 15, fontWeight: 500,
              cursor: "pointer", padding: "14px 0", textAlign: "left",
              borderBottom: `1px solid ${CF.line2}`,
            }}>{l.l}</button>
          ))}
          <button onClick={() => nv(() => setPage("start"))} style={{
            ...btnPrimary, marginTop: 16, justifyContent: "center",
          }}>Get started free</button>
        </div>
      )}
    </nav>
  );
}

/* Footer */
export function Footer({ setPage }) {
  return (
    <footer style={{
      background: "#fff", borderTop: `1px solid ${CF.line}`,
      padding: "56px 28px 36px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="g4" style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40,
        }}>
          <div>
            <Logo/>
            <p style={{
              fontFamily: FONT, fontSize: 14, color: CF.ink3, lineHeight: 1.65,
              marginTop: 16, maxWidth: 300,
            }}>
              Compliance intelligence for UK public sector and commercial organisations.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: CF.ink, marginBottom: 14 }}>Platform</p>
            {PRODUCTS.map(p => (
              <p key={p.id} style={{
                fontFamily: FONT, fontSize: 14, color: CF.ink2, marginBottom: 10,
                cursor: "pointer",
              }} onClick={() => setPage("platform")}
                 onMouseEnter={e => e.target.style.color = CF.orange}
                 onMouseLeave={e => e.target.style.color = CF.ink2}
              >{p.name}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: CF.ink, marginBottom: 14 }}>Company</p>
            {[["About", "about"], ["Pricing", "pricing"], ["Sectors", "sectors"], ["Resources", "resources"]].map(([l, pg]) => (
              <p key={pg} style={{
                fontFamily: FONT, fontSize: 14, color: CF.ink2, marginBottom: 10, cursor: "pointer",
              }} onClick={() => setPage(pg)}
                 onMouseEnter={e => e.target.style.color = CF.orange}
                 onMouseLeave={e => e.target.style.color = CF.ink2}
              >{l}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: CF.ink, marginBottom: 14 }}>Contact</p>
            <p style={{ fontFamily: FONT, fontSize: 14, color: CF.orange, marginBottom: 10 }}>hello@wearestrata.ai</p>
            <p style={{
              fontFamily: FONT, fontSize: 14, color: CF.ink2, marginBottom: 10, cursor: "pointer",
            }} onClick={() => setPage("start")}>Contact form</p>
            <p style={{ fontFamily: FONT, fontSize: 14, color: CF.ink2 }}>wearestrata.ai</p>
          </div>
        </div>

        <div style={{
          display: "flex", gap: 24, flexWrap: "wrap",
          paddingTop: 24, borderTop: `1px solid ${CF.line}`, marginBottom: 18,
        }}>
          {[
            ["Privacy Policy", "/privacy"], 
            ["Terms of Use", "/terms"], 
            ["Cookie Policy", "/cookie-policy"]
          ].map(([l, pg]) => (
            <p key={pg} style={{
              fontFamily: FONT, fontSize: 13, color: CF.ink3, cursor: "pointer", transition: "color 0.15s",
            }} onMouseEnter={e => e.target.style.color = CF.orange}
               onMouseLeave={e => e.target.style.color = CF.ink3}
            ><a 
              href={pg} 
              style={{fontFamily: FONT, fontSize: 13, color: CF.ink3, cursor: "pointer", transition: "color 0.15s",}} 
              title={l}
            >{l}</a></p>
          ))}
        </div>

        <div className="fw" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 11, color: CF.ink4, lineHeight: 1.65 }}>
            WeAreStrata Limited. Registered in England and Wales, No. 16974757. 4 Usk Vale Court, Pontypool, Wales, NP4 8AS.
          </p>
          <p style={{ fontFamily: MONO, fontSize: 11, color: CF.ink4 }}>
            Patents Pending: US 63/969,838 and US 64/037,381
          </p>
        </div>
      </div>
    </footer>
  );
}