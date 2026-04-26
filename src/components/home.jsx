/* Home page — Cloudflare-style */
import { useState, useEffect, useRef, useCallback } from "react";
import { FDiv, Ic, PRODUCTS } from '../components'
import { CF, FONT, MONO, eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle, cardStyle, btnPrimary, btnSecondary, btnGhost, hovPrimary, unhovPrimary, hovSecondary, unhovSecondary } from './tokens'

/* Decorative "product dashboard" mock for the hero — clean flat cards, no photo placeholder */
function HeroMock() {
  return (
    <div style={{
      background: "#fff", border: `1px solid ${CF.line}`, borderRadius: 12,
      padding: 20, boxShadow: "0 20px 60px rgba(29, 29, 27, 0.08), 0 4px 14px rgba(29,29,27,0.04)",
      width: "100%", maxWidth: 560,
    }}>
      {/* Top row: browser-like chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }}/>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }}/>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }}/>
        <span style={{
          marginLeft: 12, fontFamily: MONO, fontSize: 11, color: CF.ink3,
          background: CF.bg2, padding: "4px 10px", borderRadius: 4, flex: 1,
        }}>strata.ai / contracts / overview</span>
      </div>

      {/* Stat tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
        {[
          ["Invoices checked", "28,417", CF.ink],
          ["Flags raised", "342", CF.orange],
          ["Saving", "£1.2m", CF.green],
        ].map(([l, v, c]) => (
          <div key={l} style={{ background: CF.bg, border: `1px solid ${CF.line2}`, borderRadius: 6, padding: "12px 14px" }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: CF.ink3, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>{l}</div>
            <div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 600, color: c, letterSpacing: "-0.01em" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Flagged invoice row */}
      <div style={{ background: CF.bg, border: `1px solid ${CF.line2}`, borderRadius: 6, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: CF.ink }}>Recent flags</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: CF.ink3 }}>Live</span>
        </div>
        {[
          ["INV-01939", "Double time charged on bank holidays, clause 4.3 states bank holidays included in call out rate", "£74+VAT"],
          ["INV-43B222", "Non Direct Debit surcharge, contract does not allow for this line item", "£14+VAT"],
          ["INV-217", "Replacement heat exchanger, covered under warranty", "£572+VAT"],
        ].map(([id, reason, amt], i) => (
          <div key={id} style={{
            display: "grid",
            gridTemplateColumns: "14px 90px 1fr auto",
            alignItems: "start",
            gap: 10,
            padding: "10px 0",
            borderTop: i > 0 ? `1px solid ${CF.line2}` : "none",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: CF.orange,
              marginTop: 6,
            }}/>
            <span style={{ fontFamily: MONO, fontSize: 11, color: CF.ink2, paddingTop: 1 }}>{id}</span>
            <span style={{
              fontFamily: FONT, fontSize: 12, color: CF.ink3, lineHeight: 1.45,
              textAlign: "left",
            }}>{reason}</span>
            <span style={{
              fontFamily: MONO, fontSize: 11, color: CF.ink, fontWeight: 500,
              paddingTop: 1, whiteSpace: "nowrap",
            }}>{amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Calculator — reused on Home + Pricing */
export function Calculator({ setPage, bg = CF.bg2 }) {
  const [spend, setSpend] = useState(8000000);
  const [inv, setInv] = useState(2000);
  const [leak, setLeak] = useState(5.4);
  const [foiReqs, setFoiReqs] = useState(40);
  const [foiHrs, setFoiHrs] = useState(5);
  const leakage = Math.round(spend * (leak / 100));
  const foiCost = Math.round(foiReqs * 12 * foiHrs * 25);
  const fmt = n => n >= 1000000 ? "£" + (n / 1000000).toFixed(1) + "m" : "£" + Math.round(n).toLocaleString();
  const sl = { fontFamily: FONT, fontSize: 13, color: CF.ink3, minWidth: 140 };
  const sv = { fontFamily: MONO, fontSize: 13, fontWeight: 500, minWidth: 80, textAlign: "right", color: CF.ink };
  const sr = { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 };

  return (
    <section id="calc" style={{ background: bg, padding: "clamp(72px, 10vw, 110px) 28px", borderTop: `1px solid ${CF.line}`, borderBottom: `1px solid ${CF.line}` }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FDiv>
          <span style={eyebrow()}>What are you losing?</span>
          <h2 style={h2Style}>Calculate your exposure.</h2>
          <p style={leadStyle}>Drag the sliders to match your organisation.</p>
        </FDiv>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <FDiv d={0.08}>
            <div style={{ ...cardStyle, padding: 28 }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, fontWeight: 500, color: CF.orange,
                textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 22,
              }}>Contract leakage</div>

              <div style={sr}><span style={sl}>Annual contract spend</span>
                <input type="range" min={500000} max={50000000} step={500000} value={spend}
                  onChange={e => setSpend(+e.target.value)} style={{ flex: 1, accentColor: CF.orange }}/>
                <span style={sv}>{fmt(spend)}</span>
              </div>
              <div style={sr}><span style={sl}>Monthly invoices</span>
                <input type="range" min={100} max={20000} step={100} value={inv}
                  onChange={e => setInv(+e.target.value)} style={{ flex: 1, accentColor: CF.orange }}/>
                <span style={sv}>{inv.toLocaleString()}</span>
              </div>
              <div style={sr}><span style={sl}>Leakage rate</span>
                <input type="range" min={2} max={12} step={0.2} value={leak}
                  onChange={e => setLeak(+e.target.value)} style={{ flex: 1, accentColor: CF.orange }}/>
                <span style={sv}>{leak.toFixed(1)}%</span>
              </div>

              <div style={{ borderTop: `1px solid ${CF.line}`, marginTop: 20, paddingTop: 20 }}>
                <div style={{ fontFamily: FONT, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: CF.ink, letterSpacing: "-0.02em" }}>{fmt(leakage)}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: CF.ink3, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Estimated annual leakage</div>
                <p style={{ fontFamily: FONT, fontSize: 13, color: CF.ink3, marginTop: 14, lineHeight: 1.65 }}>
                  Based on WorldCC research: the average organisation loses 5.4% of contract value.
                </p>
              </div>
            </div>
          </FDiv>
          <FDiv d={0.16}>
            <div style={{ ...cardStyle, padding: 28 }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, fontWeight: 500, color: CF.orange,
                textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 22,
              }}>FOI processing cost</div>

              <div style={sr}><span style={sl}>Monthly FOI requests</span>
                <input type="range" min={5} max={200} step={5} value={foiReqs}
                  onChange={e => setFoiReqs(+e.target.value)} style={{ flex: 1, accentColor: CF.orange }}/>
                <span style={sv}>{foiReqs}</span>
              </div>
              <div style={sr}><span style={sl}>Hours per request</span>
                <input type="range" min={2} max={12} step={0.5} value={foiHrs}
                  onChange={e => setFoiHrs(+e.target.value)} style={{ flex: 1, accentColor: CF.orange }}/>
                <span style={sv}>{foiHrs.toFixed(1)}</span>
              </div>

              <div style={{ borderTop: `1px solid ${CF.line}`, marginTop: 60, paddingTop: 20 }}>
                <div style={{ fontFamily: FONT, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: CF.ink, letterSpacing: "-0.02em" }}>{fmt(foiCost)}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: CF.ink3, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Annual staff cost on FOI</div>
                <p style={{ fontFamily: FONT, fontSize: 13, color: CF.ink3, marginTop: 14, lineHeight: 1.65 }}>
                  Staff time at the statutory rate of £25/hour. Average request takes 5.3 hours.
                </p>
              </div>
            </div>
          </FDiv>
        </div>

        <FDiv d={0.24}>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <p style={{ fontFamily: FONT, fontSize: 14, color: CF.ink3, marginBottom: 16 }}>
              Want to see the actual leakage in your contracts?
            </p>
            <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
              Upload them free <Ic d="arrow" size={16}/>
            </button>
          </div>
        </FDiv>
      </div>
    </section>
  );
}

export function Home({ setPage }) {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: CF.bg,
        padding: "140px 28px 80px",
        borderBottom: `1px solid ${CF.line}`,
        position: "relative", overflow: "hidden",
      }}>
        {/* subtle orange wash, bottom-right */}
        <div style={{
          position: "absolute", bottom: "-30%", right: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${CF.orange}10 0%, transparent 65%)`,
          filter: "blur(40px)", pointerEvents: "none",
        }}/>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center",
          position: "relative", zIndex: 1,
        }} className="hero-grid">
          <div>
            <FDiv><span style={eyebrow()}>Built for UK public sector &amp; commercial organisations</span></FDiv>
            <FDiv d={0.05}>
              <h1 style={h1Style}>
                We read your documents.<br/>
                <span style={{ color: CF.orange }}>Then enforce every rule inside them.</span>
              </h1>
            </FDiv>
            <FDiv d={0.1}>
              <p style={{ ...leadStyle, fontSize: "clamp(18px, 1.6vw, 22px)", color: CF.ink2, marginBottom: 16 }}>
                So every invoice, charge, and decision your organisation makes is provably correct.
              </p>
            </FDiv>
            <FDiv d={0.15}>
              <p style={{ ...bodyStyle, marginBottom: 8, maxWidth: 600 }}>
                Contracts. Leases. Policies. Legislation. Strata reads them, extracts every obligation, and validates every downstream transaction across thousands of contracts and millions of invoices.
              </p>
              <p style={{ ...bodyStyle, fontWeight: 500, color: CF.ink, maxWidth: 600, marginBottom: 32 }}>
                Deterministic. Auditable. No system replacement. Live in weeks.
              </p>
            </FDiv>
            <FDiv d={0.2}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                  Get started free <Ic d="arrow" size={16}/>
                </button>
                <button onClick={() => setPage("platform")} style={btnSecondary} onMouseEnter={hovSecondary} onMouseLeave={unhovSecondary}>
                  See the platform
                </button>
              </div>
            </FDiv>
            <FDiv d={0.28}>
              <p style={{
                fontFamily: FONT, fontSize: 13, color: CF.ink3,
                marginTop: 36, cursor: "pointer", maxWidth: 560,
              }} onClick={() => document.getElementById("calc")?.scrollIntoView({ behavior: "smooth" })}>
                The average organisation loses 5.4% of contract value.{" "}
                <span style={{ color: CF.orange, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  See what that means for you ↓
                </span>
              </p>
            </FDiv>
          </div>

          <FDiv d={0.15}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }} className="hero-mock-wrap">
              <HeroMock/>
              <p style={{
                fontFamily: FONT, fontSize: 16, fontWeight: 500, color: CF.ink2,
                marginTop: 16, maxWidth: 560, textAlign: "center", width: "100%",
                letterSpacing: "-0.005em", lineHeight: 1.4,
              }}>Small amounts add up and are historically undetected</p>
            </div>
          </FDiv>
        </div>

        {/* Stats strip */}
        <div style={{ maxWidth: 1280, margin: "72px auto 0", position: "relative", zIndex: 1 }}>
          <FDiv d={0.34}>
            <div className="sr" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              border: `1px solid ${CF.line}`, borderRadius: 10, background: "#fff",
              overflow: "hidden",
            }}>
              {[
                ["Every", "invoice checked"],
                ["Every", "FOI request answered"],
                ["Every", "charge validated"],
                ["Weeks", "to go live"],
              ].map(([v, l], i) => (
                <div key={l} style={{
                  padding: "24px 20px",
                  borderLeft: i > 0 ? `1px solid ${CF.line}` : "none",
                }}>
                  <div style={{
                    fontFamily: FONT, fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)",
                    color: CF.orange, letterSpacing: "-0.015em",
                  }}>{v}</div>
                  <div style={{
                    fontFamily: FONT, fontSize: 13, color: CF.ink3, marginTop: 4, fontWeight: 400,
                  }}>{l}</div>
                </div>
              ))}
            </div>
          </FDiv>
        </div>
      </section>

      {/* FOUNDING INSIGHT */}
      <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 110px) 28px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <FDiv>
            <span style={eyebrow()}>The founding insight</span>
            <h2 style={{ ...h2Style, textWrap: "balance" }}>Every organisation runs on documents nobody has time to read.</h2>
          </FDiv>
          <FDiv d={0.08}>
            <p style={{ ...bodyStyle, fontSize: 17, marginBottom: 18, maxWidth: 680, margin: "0 auto 18px" }}>
              Contracts. Leases. Policies. Legislation. These documents contain the rules that should govern every financial decision your organisation makes. But they are long, complex, and locked inside PDFs. So decisions get made without reference to them.
            </p>
            <p style={{ fontFamily: FONT, fontSize: 17, fontWeight: 500, color: CF.ink, lineHeight: 1.6, marginBottom: 18, maxWidth: 680, margin: "0 auto 18px" }}>
              Strata reads these documents once. Extracts every rule. Converts them into structured, executable logic. Stores that logic permanently.
            </p>
            <p style={{ ...bodyStyle, fontSize: 17, marginBottom: 22, maxWidth: 680, margin: "0 auto 22px" }}>
              From that point on, every transaction, calculation, and query is validated against those rules with a complete audit trail back to the source clause, on the source page, of the source document.
            </p>
            <p style={{ fontFamily: FONT, fontSize: "clamp(17px, 1.7vw, 21px)", fontWeight: 500, color: CF.orange, lineHeight: 1.5, maxWidth: 600, margin: "0 auto" }}>
              Not AI guessing at an answer. Extracted knowledge, confirmed by your experts, executed by machines.
            </p>
          </FDiv>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: CF.bg, padding: "clamp(72px, 10vw, 110px) 28px", borderTop: `1px solid ${CF.line}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>The problem</span>
            <h2 style={{ ...h2Style, maxWidth: 760 }}>Your decisions are disconnected from the documents that should govern them.</h2>
            <p style={{ ...bodyStyle, fontSize: 17, maxWidth: 760, marginBottom: 40 }}>
              Your organisation holds contracts, leases, policies, and legislation that define how money should be spent, how charges should be calculated, how questions should be answered, and how rents should be set. But none of your operational systems can read those documents.
            </p>
          </FDiv>
          <FDiv d={0.1}>
            <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
              {[
                ["Invoices paid without checking the contract", "Your AP team approves against PO amounts because nobody has time to verify rates and terms against the governing contract."],
                ["FOI requests answered by searching, not knowing", "Your information team spends days emailing departments and assembling spreadsheets. The answers often already exist in validated data."],
                ["Service charges calculated from inherited spreadsheets", "The formulas were set up by someone who left. Nobody has checked them against the lease since."],
                ["Rent calculations disconnected from legislation", "English and Welsh rent legislation impose different requirements. A single error across thousands of dwellings creates invisible regulatory exposure."],
              ].map(([t, d], i) => (
                <div key={i} style={{ ...cardStyle, padding: 24 }}>
                  <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600, color: CF.ink, lineHeight: 1.4, marginBottom: 10 }}>{t}</p>
                  <p style={{ ...smallStyle, fontSize: 14 }}>{d}</p>
                </div>
              ))}
            </div>
          </FDiv>
          <FDiv d={0.2}>
            <p style={{
              fontFamily: FONT, fontSize: 17, fontWeight: 500, color: CF.ink,
              lineHeight: 1.55, textAlign: "center", maxWidth: 640, margin: "0 auto",
            }}>
              Four symptoms. One cause. <span style={{ color: CF.orange }}>The documents that should govern your decisions are not connected to the systems that execute them.</span>
            </p>
          </FDiv>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 110px) 28px", borderTop: `1px solid ${CF.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>The platform</span>
            <h2 style={h2Style}>Four modules. One platform. Start with one.</h2>
            <p style={leadStyle}>
              Every module is powered by the same patent-pending architecture. Read the document once. Extract every rule. Validate everything against them. Start with the module that matches your most urgent need and expand as you are ready.
            </p>
          </FDiv>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {PRODUCTS.map((p, i) => (
              <FDiv key={p.id} d={i * 0.06}>
                <div style={{ ...cardStyle, padding: "28px 28px 24px", height: "100%", cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s" }}
                  onClick={() => setPage("platform")}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = CF.orange; e.currentTarget.style.boxShadow = "0 4px 14px rgba(246, 130, 31, 0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = CF.line; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 6,
                      background: CF.orangeTint, color: CF.orange,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}><Ic d={p.icon} size={18}/></div>
                    <span style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: CF.ink, letterSpacing: "-0.005em" }}>{p.name}</span>
                  </div>
                  <p style={{ fontFamily: MONO, fontSize: 12, color: CF.orange, marginBottom: 12, letterSpacing: "0.01em" }}>{p.tag}</p>
                  <p style={{ ...bodyStyle, fontSize: 15, marginBottom: 16 }}>{p.headline}</p>
                  <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500, color: CF.orange, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Learn more <Ic d="arrow" size={14}/>
                  </p>
                </div>
              </FDiv>
            ))}
          </div>
          <FDiv d={0.3}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button onClick={() => setPage("platform")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                Explore the platform <Ic d="arrow" size={16}/>
              </button>
            </div>
          </FDiv>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section style={{ background: CF.bg, padding: "clamp(72px, 10vw, 110px) 28px", borderTop: `1px solid ${CF.line}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <span style={eyebrow()}>The technology</span>
              <h2 style={h2Style}>Read once. Enforce forever.</h2>
              <p style={{ fontFamily: MONO, fontSize: 12, color: CF.ink3, marginBottom: 48 }}>
                Powered by Recursive Logic Caching (patent pending: US 63/969,838)
              </p>
            </div>
          </FDiv>
          <FDiv d={0.08}>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                ["Read once", "AI reads the document once, whether it is a contract, lease, policy, or piece of legislation. Extracts every rule into structured, executable logic.", "zap"],
                ["Cache permanently", "Extracted rules stored in a knowledge graph. Three-tier memory hierarchy. The document is never re-read. The knowledge persists.", "layers"],
                ["Execute deterministically", "Every transaction validated against cached rules with sub-millisecond response. No AI in the execution step. Repeatable. Auditable. Defensible.", "lock"],
              ].map(([t, d, ic], i) => (
                <FDiv key={t} d={i * 0.08}>
                  <div style={{ ...cardStyle, padding: 26, height: "100%" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: CF.orangeTint, color: CF.orange,
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                    }}><Ic d={ic} size={20}/></div>
                    <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 10 }}>{t}</h3>
                    <p style={{ ...smallStyle, fontSize: 14 }}>{d}</p>
                  </div>
                </FDiv>
              ))}
            </div>
          </FDiv>
          <FDiv d={0.3}>
            <div style={{
              background: "#fff", border: `1px solid ${CF.line}`,
              borderLeft: `4px solid ${CF.orange}`, borderRadius: 8,
              padding: "24px 28px",
            }}>
              <p style={{ ...bodyStyle, fontSize: 15 }}>
                The extraction step uses AI to read unstructured documents and convert them into structured logic. Your domain experts confirm the extracted rules. From that point on, no AI is involved in the execution. Validation is deterministic. Every result traces back to a confirmed rule, which traces back to a specific clause on a specific page of a specific document.
              </p>
              <p style={{ fontFamily: MONO, fontSize: 12, color: CF.ink3, marginTop: 14 }}>
                Patent pending: US 63/969,838. Recursive Logic Caching™.
              </p>
            </div>
          </FDiv>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 110px) 28px", borderTop: `1px solid ${CF.line}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center" }}>
              <span style={eyebrow()}>Implementation</span>
              <h2 style={{ ...h2Style, marginBottom: 48 }}>Live in weeks. Not months.</h2>
            </div>
          </FDiv>
          <FDiv d={0.08}>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {[
                ["No system replacement", "Your existing systems stay. Strata connects through standard data exports and APIs. No migration. No disruption.", "building"],
                ["Weeks to go live", "Upload contracts. Rules extracted and cached permanently. Every subsequent check is instant. Knowledge stays when your team changes.", "clock"],
                ["Your data stays yours", "Sensitive data stays inside your perimeter. Our scanning agent runs within your firewall. Only structured metadata crosses the boundary.", "lock"],
              ].map(([t, d, ic], i) => (
                <FDiv key={t} d={i * 0.08}>
                  <div style={{ ...cardStyle, padding: 26, height: "100%" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: CF.orangeTint, color: CF.orange,
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                    }}><Ic d={ic} size={20}/></div>
                    <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 10 }}>{t}</h3>
                    <p style={{ ...smallStyle, fontSize: 14 }}>{d}</p>
                  </div>
                </FDiv>
              ))}
            </div>
          </FDiv>
        </div>
      </section>

      {/* CALCULATOR */}
      <Calculator setPage={setPage} bg={CF.bg2}/>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 100px) 28px", textAlign: "center" }}>
        <FDiv>
          <h2 style={{ ...h2Style, color: CF.ink, marginBottom: 16 }}>
            Start free. <span style={{ color: CF.orange }}>See what you are missing.</span>
          </h2>
          <p style={{ ...leadStyle, textAlign: "center", margin: "0 auto 32px" }}>
            Upload your contracts and invoices. The platform shows you what does not match. Free forever on the starter plan.
          </p>
          <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
            Get started free <Ic d="arrow" size={16}/>
          </button>
        </FDiv>
      </section>
    </>
  );
}