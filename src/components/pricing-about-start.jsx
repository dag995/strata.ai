/* Pricing, About, Start, Resources, Legal pages */
import { useState, useEffect, useRef } from "react";
import { Calculator, FDiv, Ic, PRODUCTS, RESOURCES } from '../components'
import {
  CF, FONT, MONO,
  eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle,
  cardStyle, btnPrimary, btnSecondary, btnGhost,
  hovPrimary, unhovPrimary, hovSecondary, unhovSecondary,
} from './tokens'

/* ═══ PRICING ═══ */
export function PricingPage({ setPage }) {
  const tier = t => (
    <div style={{
      ...cardStyle,
      padding: 28,
      border: t.ft ? `2px solid ${CF.orange}` : `1px solid ${CF.line}`,
      position: "relative",
    }}>
      {t.ft && (
        <div style={{
          position: "absolute", top: -11, left: 20,
          background: CF.orange, color: "#fff", fontFamily: MONO, fontSize: 10,
          fontWeight: 600, padding: "4px 10px", borderRadius: 4,
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>Most popular</div>
      )}
      <div style={{ fontFamily: FONT, fontSize: 14, color: CF.ink3, fontWeight: 500, letterSpacing: "-0.005em" }}>{t.name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "10px 0 6px" }}>
        <span style={{ fontFamily: FONT, fontSize: 36, color: CF.ink, fontWeight: 700, letterSpacing: "-0.025em" }}>{t.price}</span>
        <span style={{ fontFamily: FONT, fontSize: 14, color: CF.ink3 }}>{t.unit}</span>
      </div>
      <p style={{ fontFamily: FONT, fontSize: 13, color: CF.ink3, marginBottom: 4 }}>{t.note}</p>
      {t.setup && <p style={{ fontFamily: MONO, fontSize: 12, color: CF.orange, marginBottom: 18 }}>{t.setup}</p>}
      <div style={{ borderTop: `1px solid ${CF.line2}`, margin: "16px 0", paddingTop: 14 }}>
        {t.features.map(f => (
          <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
            <span style={{ color: CF.orange, flexShrink: 0, marginTop: 2 }}><Ic d="check" size={14}/></span>
            <span style={{ fontFamily: FONT, fontSize: 14, color: CF.ink2, lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>Pricing</span>
            <h2 style={h2Style}>Pay per unit of work. Keep 100% of the savings.</h2>
            <p style={leadStyle}>
              No percentage of savings. No annual licence. No per-user fees. Every product has a clear unit, a clear price, and a free tier that is yours to keep.
            </p>
          </FDiv>

          <FDiv d={0.08}>
            <p style={{
              fontFamily: MONO, fontSize: 12, fontWeight: 600, color: CF.orange,
              letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16,
            }}>Strata | Contracts</p>
            <div className="pg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 48 }}>
              {tier({ name: "Free", price: "£0", unit: "/month", note: "3 contracts. 50 invoices/month.", setup: "£0 setup", features: ["Self-service onboarding", "Upload contracts and invoices", "Overcharge detection with clause reference", "Basic compliance dashboard", "Single user"] })}
              {tier({ name: "Standard", price: "£1.00", unit: "/invoice", note: "Min 500/month (£500/mo)", setup: "£1,500 one-time setup", ft: true, features: ["Unlimited contracts", "Unlimited invoices", "Email, API, or AP system feed", "Overcharge + missed recharge detection", "Supplier performance scoring", "Automated compliance reports", "Evidence packs for disputes", "Up to 10 users"] })}
              {tier({ name: "Pro", price: "£0.65", unit: "/invoice", note: "Min 5,000/month (£3,250/mo)", setup: "£2,500 one-time setup", features: ["Everything in Standard", "Industry benchmarking", "API integration with AP/ERP", "Predictive spend analytics", "Unlimited users", "Priority support"] })}
            </div>
          </FDiv>

          <FDiv d={0.14}>
            <p style={{
              fontFamily: MONO, fontSize: 12, fontWeight: 600, color: CF.orange,
              letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16,
            }}>Strata | Requests</p>
            <div className="pg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 48 }}>
              {tier({ name: "Free", price: "£0", unit: "/month", note: "Full case management. Unlimited requests.", setup: "£0 setup", features: ["Log, track, route, report", "FOI, SAR, Right to Delete", "20-day deadline management", "Disclosure log", "Unlimited users"] })}
              {tier({ name: "Standard", price: "£45", unit: "/AI response", note: "Min 10/month (£450/mo)", setup: "£1,500 one-time setup", ft: true, features: ["Everything in Free, plus:", "Scanning agent (inside your firewall)", "SharePoint, OneDrive, Outlook scanning", "Three-tier progressive scanning", "AI-powered document discovery", "PII detection and auto-redaction", "Calculated answers from validated data"] })}
              {tier({ name: "Pro", price: "£35", unit: "/AI response", note: "Min 50/month (£1,750/mo)", setup: "£2,500 one-time setup", features: ["Everything in Standard", "HMS/ERP database connector", "Network file share scanning", "Local LLM option", "Custom connectors", "Priority support"] })}
            </div>
          </FDiv>

          <FDiv d={0.22}>
            <div style={{ ...cardStyle, padding: "28px 32px", marginBottom: 40 }}>
              <p style={{
                fontFamily: MONO, fontSize: 12, fontWeight: 600, color: CF.orange,
                letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12,
              }}>Strata | Charges and Strata | Rents</p>
              <p style={{ ...bodyStyle, fontSize: 16 }}>Per-calculation pricing. Contact us for details.</p>
            </div>
          </FDiv>

          <FDiv d={0.28}>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                Get started free <Ic d="arrow" size={16}/>
              </button>
              <p style={{ fontFamily: FONT, fontSize: 13, color: CF.ink3, marginTop: 14 }}>
                No credit card. No time limit. The free tier is yours to keep.
              </p>
            </div>
          </FDiv>
        </div>
      </div>
      <Calculator setPage={setPage} bg={"#fff"}/>
    </section>
  );
}

/* ═══ ABOUT ═══ */
export function AboutPage({ setPage }) {
  const person = ({ initials, name, role, bio, delay }) => (
    <FDiv d={delay}>
      <div style={{ ...cardStyle, padding: "clamp(28px, 4vw, 40px)", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: CF.orangeTint, color: CF.orange,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FONT, fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em",
          }}>{initials}</div>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 20, color: CF.ink, fontWeight: 600, letterSpacing: "-0.01em" }}>{name}</p>
            <p style={{ fontFamily: MONO, fontSize: 13, color: CF.orange, marginTop: 2 }}>{role}</p>
          </div>
        </div>
        <p style={{ ...bodyStyle, fontSize: 15, lineHeight: 1.75 }}>{bio}</p>
      </div>
    </FDiv>
  );

  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>About us</span>
            <h2 style={h2Style}>Built by people who understand your world.</h2>
          </FDiv>

          {person({
            initials: "NG", name: "Neal Gandhi", role: "CEO", delay: 0.08,
            bio: "Neal has been building and scaling technology companies through every major platform shift for almost four decades, from the early days of personal computing through the internet era to AI. He co-founded Xplora and Attenda, founded Questers, and created TPXimpact, growing it to over £80m revenue serving clients including MHCLG, DESNZ, CDDO, NHS Sussex, and Manchester City Council. He has spent six years working alongside the finance directors, compliance leads, and CIOs who run UK public sector organisations. Strata came from what he saw in those engagements: every organisation signs contracts, and almost none systematically check whether they are being charged correctly. The technology to change that did not exist. So he built it.",
          })}

          {person({
            initials: "SA", name: "Stuart Arthur", role: "CTO", delay: 0.14,
            bio: "Stuart was Head of Digital and Data for the UK Civil Service and CTO at Monmouthshire County Council. He has led technology strategy at the heart of government and delivered digital transformation at the coalface of local authority operations. He built and sold his own digital services company, and has been at the forefront of technology in public service delivery since the early internet. He knows what public sector systems look like from the inside: how data flows, where it breaks, and what it takes to build something that actually works within those constraints.",
          })}

          <FDiv d={0.22}>
            <div style={{
              background: CF.orangeTint, border: `1px solid ${CF.orange}30`,
              borderRadius: 10, padding: "clamp(28px, 4vw, 40px)", marginBottom: 32,
            }}>
              <p style={{
                fontFamily: MONO, fontSize: 12, color: CF.orange, fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14,
              }}>Together</p>
              <p style={{ ...bodyStyle, fontSize: 15, lineHeight: 1.75 }}>
                Neal and Stuart are co-inventors on the patent application that underpins Strata. Neal brought the commercial insight and the founding concept. Stuart brought the engineering depth. Together they developed the Recursive Logic Caching architecture into a system that uses AI to read your documents and extract the rules, then validates every transaction deterministically with no AI in the execution step. Every answer traceable to a clause, on a page, in a document. The result is a platform built by people who have sat in your meetings, worked with your systems, and understand why the current tools do not do what you need them to do.
              </p>
            </div>
          </FDiv>

          <FDiv d={0.28}>
            <div style={{ ...cardStyle, padding: "24px 28px" }}>
              <p style={{ ...smallStyle, fontSize: 13 }}>
                WeAreStrata Limited is registered in England and Wales (No. 16974757). Our core technology is protected by US Patent Application 63/969,838 (Recursive Logic Caching). 4 Usk Vale Court, Pontypool, Wales, NP4 8AS.
              </p>
            </div>
          </FDiv>

          <FDiv d={0.34}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                Get started free <Ic d="arrow" size={16}/>
              </button>
            </div>
          </FDiv>
        </div>
      </div>
    </section>
  );
}

/* ═══ GET STARTED ═══ */
export function StartPage() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [f, sF] = useState({ name: "", email: "", org: "", role: "", interest: "", msg: "" });
  const u = (k, v) => sF(p => ({ ...p, [k]: v }));
  const ok = f.name && f.email && f.org && !submitting;

  const handleSubmit = async () => {
    if (!ok) return;
    setSubmitting(true);
    try {
      await fetch("https://strata-crm-rho.vercel.app/api/form-submission", {
        method: "POST",
        headers: { 
          "Authorization": `Bearer ${import.meta.env.VITE_CRM_API}`, 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(f),
      });
    } catch (e) { /* form data saved locally regardless */ }
    setDone(true);
    setSubmitting(false);
  };

  const labelStyle = {
    fontFamily: FONT, fontSize: 13, fontWeight: 500, color: CF.ink,
    display: "block", marginBottom: 8,
  };

  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span style={eyebrow()}>Get started</span>
              <h2 style={h2Style}>Start free. See what you are missing.</h2>
              <p style={{ ...bodyStyle, fontSize: 16, margin: "0 auto 8px", maxWidth: 540 }}>
                Upload your contracts and invoices. The platform shows you what does not match. No time limit. Upgrade when you are ready.
              </p>
              <p style={{ fontFamily: MONO, fontSize: 13, color: CF.ink3 }}>Free forever on the starter plan.</p>
            </div>
          </FDiv>

          {done ? (
            <FDiv>
              <div style={{
                background: CF.orangeTint, border: `1px solid ${CF.orange}30`,
                borderRadius: 10, padding: "48px 32px", textAlign: "center",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: CF.orange, color: "#fff",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}><Ic d="check" size={28}/></div>
                <h3 style={{ ...h2Style, fontSize: 28, marginBottom: 12 }}>Welcome to Strata</h3>
                <p style={{ ...bodyStyle, fontSize: 15, margin: 0 }}>
                  We will be in touch within 48 hours to get you set up.
                </p>
              </div>
            </FDiv>
          ) : (
            <FDiv d={0.08}>
              <div style={{ ...cardStyle, padding: "clamp(28px, 3vw, 36px)" }}>
                <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input type="text" placeholder="Your name" value={f.name} onChange={e => u("name", e.target.value)}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" placeholder="you@organisation.org.uk" value={f.email} onChange={e => u("email", e.target.value)}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Organisation *</label>
                    <input type="text" placeholder="Your organisation" value={f.org} onChange={e => u("org", e.target.value)}/>
                  </div>
                  <div>
                    <label style={labelStyle}>Role</label>
                    <input type="text" placeholder="e.g. Director of Finance" value={f.role} onChange={e => u("role", e.target.value)}/>
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={labelStyle}>Which product interests you most?</label>
                  <select value={f.interest} onChange={e => u("interest", e.target.value)}>
                    <option value="">Select</option>
                    <option value="contracts">Strata | Contracts</option>
                    <option value="requests">Strata | Requests</option>
                    <option value="charges">Strata | Charges</option>
                    <option value="rents">Strata | Rents</option>
                    <option value="all">Full platform</option>
                  </select>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={labelStyle}>What is your biggest compliance challenge?</label>
                  <textarea rows={3} placeholder="Optional, but helps us tailor your setup" value={f.msg} onChange={e => u("msg", e.target.value)} style={{ resize: "vertical" }}/>
                </div>
                <button onClick={handleSubmit} disabled={!ok} style={{
                  ...btnPrimary,
                  width: "100%", justifyContent: "center", marginTop: 22,
                  padding: "14px 28px", fontSize: 15,
                  opacity: ok ? 1 : 0.5,
                  cursor: ok ? "pointer" : "not-allowed",
                }}
                  onMouseEnter={e => ok && hovPrimary(e)}
                  onMouseLeave={e => ok && unhovPrimary(e)}
                >Get started free <Ic d="arrow" size={16}/></button>
              </div>
            </FDiv>
          )}

          <FDiv d={0.18}>
            <div style={{
              marginTop: 48, paddingTop: 32, borderTop: `1px solid ${CF.line}`,
              display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap",
            }}>
              {[["Email", "hello@wearestrata.ai"], ["Web", "wearestrata.ai"]].map(([l, v]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: CF.ink3, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</div>
                  <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 500, color: CF.orange }}>{v}</div>
                </div>
              ))}
            </div>
          </FDiv>
        </div>
      </div>
    </section>
  );
}

/* ═══ RESOURCES ═══ */
export function ResourcesPage({ setPage }) {
  const byCat = RESOURCES.reduce((a, r) => { (a[r.cat] = a[r.cat] || []).push(r); return a; }, {});
  const catOrder = ["Reports", "Case studies", "Opinion"];
  const catDesc = {
    "Reports": "Research, guides, and structured analysis on the regulatory and commercial reality our customers face.",
    "Case studies": "How customers use Strata. The first case studies are in preparation and will appear here as they go live.",
    "Opinion": "Perspectives from our founders and guest contributors on contracts, compliance, and how AI changes what is possible.",
  };

  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>Resources</span>
            <h2 style={h2Style}>Research, case studies, and perspective.</h2>
            <p style={leadStyle}>
              A growing library on the compliance gap we exist to close. Reports where we have done the work. Case studies where customers have. Opinion where we have a view worth reading.
            </p>
          </FDiv>

          {catOrder.map((cat, ci) => {
            const items = byCat[cat] || [];
            return (
              <FDiv key={cat} d={0.08 + ci * 0.05}>
                <div style={{ marginBottom: 56 }}>
                  <div style={{
                    display: "flex", alignItems: "baseline", justifyContent: "space-between",
                    gap: 16, flexWrap: "wrap", marginBottom: 10, paddingBottom: 12,
                    borderBottom: `1px solid ${CF.line}`,
                  }}>
                    <p style={{ fontFamily: FONT, fontSize: 22, fontWeight: 600, color: CF.ink, letterSpacing: "-0.01em" }}>{cat}</p>
                    <p style={{
                      fontFamily: MONO, fontSize: 11, fontWeight: 500, color: CF.ink3,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                    }}>{items.length} available</p>
                  </div>
                  <p style={{ ...smallStyle, fontSize: 14, marginBottom: 18, maxWidth: 680 }}>{catDesc[cat]}</p>

                  {items.length > 0 ? (
                    <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      {items.map((r, i) => (
                        <div key={i} style={{
                          ...cardStyle, padding: 28, cursor: "pointer",
                          display: "flex", flexDirection: "column",
                          transition: "border-color 0.15s, box-shadow 0.15s",
                        }}
                          onClick={() => setPage(r.link)}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = CF.orange; e.currentTarget.style.boxShadow = "0 4px 14px rgba(246, 130, 31, 0.08)"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = CF.line; e.currentTarget.style.boxShadow = "none"; }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                            <div style={{
                              width: 36, height: 36, borderRadius: 6,
                              background: CF.orangeTint, color: CF.orange,
                              display: "flex", alignItems: "center", justifyContent: "center",
                            }}><Ic d={r.icon} size={18}/></div>
                            <span style={{
                              fontFamily: MONO, fontSize: 11, fontWeight: 600, color: CF.orange,
                              letterSpacing: "0.06em", textTransform: "uppercase",
                            }}>{r.audience}</span>
                          </div>
                          <p style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: CF.ink, lineHeight: 1.4, marginBottom: 12, letterSpacing: "-0.005em" }}>{r.title}</p>
                          <p style={{ ...smallStyle, fontSize: 14, marginBottom: 18, flex: 1 }}>{r.desc}</p>
                          <p style={{
                            fontFamily: FONT, fontSize: 14, fontWeight: 500, color: CF.orange,
                            display: "inline-flex", alignItems: "center", gap: 6,
                          }}>{r.action} <Ic d="arrow" size={14}/></p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{
                      ...cardStyle, padding: 28,
                      borderStyle: "dashed", borderColor: CF.line,
                    }}>
                      <p style={{ ...smallStyle, fontSize: 14 }}>
                        In preparation. If you would like to contribute or be notified when new pieces go live, email <span style={{ color: CF.orange }}>hello@wearestrata.ai</span>.
                      </p>
                    </div>
                  )}
                </div>
              </FDiv>
            );
          })}

          <FDiv d={0.3}>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                Talk to us <Ic d="arrow" size={16}/>
              </button>
            </div>
          </FDiv>
        </div>
      </div>
    </section>
  );
}