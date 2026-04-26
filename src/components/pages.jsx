/* Inner pages: Platform, Sectors, HA, VerticalPage + LA/NHS/Commercial */
import { useState, useEffect, useRef, useCallback } from "react";
import {
  CF, FONT, MONO,
  eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle,
  cardStyle, btnPrimary, btnSecondary, btnGhost,
  hovPrimary, unhovPrimary, hovSecondary, unhovSecondary
} from './tokens'
import { PRODUCTS, SECTORS, HA_PRODUCTS, Ic, FDiv } from '../components'

/* Shared page header — used by every inner page */
function PageHead({ title }) {
  return (
    <div>
      <span style={eyebrow()}>{title}</span>
    </div>
  );
}

/* ═══ PLATFORM ═══ */
export function PlatformPage({ setPage }) {
  const [sel, setSel] = useState(0);
  const p = PRODUCTS[sel];
  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>The platform</span>
            <h2 style={h2Style}>Four modules. One platform. Start with one.</h2>
            <p style={leadStyle}>
              Every module is powered by Recursive Logic Caching. Read the document once. Extract every rule. Validate everything against them, continuously, with 100% auditability.
            </p>
          </FDiv>

          {/* Tab strip */}
          <FDiv d={0.08}>
            <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
              {PRODUCTS.map((pr, i) => (
                <button key={pr.id} onClick={() => setSel(i)} style={{
                  background: sel === i ? "#fff" : "transparent",
                  border: sel === i ? `2px solid ${CF.orange}` : `1px solid ${CF.line}`,
                  borderRadius: 8, padding: "18px 14px",
                  cursor: "pointer", display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 10, transition: "all 0.2s",
                  textAlign: "center",
                }}
                  onMouseEnter={e => { if (sel !== i) e.currentTarget.style.borderColor = CF.ink3; }}
                  onMouseLeave={e => { if (sel !== i) e.currentTarget.style.borderColor = CF.line; }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 6,
                    background: sel === i ? CF.orangeTint : CF.bg2,
                    color: sel === i ? CF.orange : CF.ink3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><Ic d={pr.icon} size={18}/></div>
                  <span style={{
                    fontFamily: FONT, fontSize: 14, fontWeight: 600,
                    color: sel === i ? CF.ink : CF.ink3,
                  }}>{pr.short}</span>
                </button>
              ))}
            </div>
          </FDiv>

          {/* Module body */}
          <div key={sel}>
            <FDiv d={0.12}>
              <div style={{ ...cardStyle, padding: "clamp(28px, 4vw, 44px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 6,
                    background: CF.orangeTint, color: CF.orange,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><Ic d={p.icon} size={18}/></div>
                  <span style={{ fontFamily: FONT, fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 600, color: CF.ink, letterSpacing: "-0.01em" }}>{p.name}</span>
                </div>
                <p style={{ fontFamily: MONO, fontSize: 13, color: CF.orange, marginBottom: 20 }}>{p.tag}</p>
                <p style={{ fontFamily: FONT, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 500, color: CF.ink, lineHeight: 1.4, marginBottom: 14, letterSpacing: "-0.005em" }}>{p.headline}</p>
                <p style={{ ...bodyStyle, fontSize: 15, marginBottom: 32, maxWidth: 720 }}>{p.desc}</p>

                <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {p.features.map(([t, d], i) => (
                    <div key={i} style={{
                      padding: "18px 20px", background: CF.bg,
                      borderRadius: 6, borderLeft: `3px solid ${CF.orange}`,
                    }}>
                      <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: CF.ink, lineHeight: 1.4, marginBottom: 8 }}>{t}</p>
                      <p style={{ ...smallStyle, fontSize: 13 }}>{d}</p>
                    </div>
                  ))}
                </div>

                {/* Pricing tiers */}
                <div style={{
                  marginTop: 28,
                  display: "grid",
                  gridTemplateColumns: p.paidPro ? "1fr 1fr 1fr" : "1fr 1fr",
                  gap: 12,
                }} className="pg">
                  <div style={{
                    background: CF.orangeTint, border: `1px solid ${CF.orange}40`,
                    borderRadius: 6, padding: "16px 18px",
                  }}>
                    <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: CF.orange, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Free forever</p>
                    <p style={{ ...smallStyle, fontSize: 13 }}>{p.free}</p>
                  </div>
                  <div style={{ ...cardStyle, padding: "16px 18px" }}>
                    <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: CF.ink, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Standard</p>
                    <p style={{ ...smallStyle, fontSize: 13 }}>{p.paid}</p>
                  </div>
                  {p.paidPro && (
                    <div style={{ ...cardStyle, padding: "16px 18px" }}>
                      <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: CF.ink, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Pro</p>
                      <p style={{ ...smallStyle, fontSize: 13 }}>{p.paidPro}</p>
                    </div>
                  )}
                </div>
              </div>
            </FDiv>
          </div>

          <FDiv d={0.22}>
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

/* ═══ SECTORS ═══ */
export function SectorsPage({ setPage }) {
  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>Who we help</span>
            <h2 style={h2Style}>One platform. Four sectors. Same engine.</h2>
            <p style={leadStyle}>
              The architecture is sector-agnostic. The domain intelligence layer is what changes. Same engine. Same knowledge graph. Same per-unit pricing.
            </p>
          </FDiv>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {SECTORS.map((s, i) => (
              <FDiv key={s.name} d={i * 0.06}>
                <div style={{
                  ...cardStyle, padding: 28, height: "100%",
                  cursor: s.link ? "pointer" : "default",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                  onClick={() => s.link && setPage(s.link)}
                  onMouseEnter={e => { if (s.link) { e.currentTarget.style.borderColor = CF.orange; e.currentTarget.style.boxShadow = "0 4px 14px rgba(246, 130, 31, 0.08)"; } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = CF.line; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 8,
                    background: CF.orangeTint, color: CF.orange,
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                  }}><Ic d={s.icon} size={22}/></div>
                  <h3 style={{ ...h3Style, marginBottom: 10 }}>{s.name}</h3>
                  <p style={{ ...bodyStyle, fontSize: 15, marginBottom: 14 }}>{s.desc}</p>
                  <p style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, color: CF.orange, letterSpacing: "0.01em" }}>{s.stat}</p>
                  {s.link && (
                    <p style={{
                      fontFamily: FONT, fontSize: 14, fontWeight: 500, color: CF.orange,
                      marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6,
                    }}>View sector detail <Ic d="arrow" size={14}/></p>
                  )}
                </div>
              </FDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Shared vertical-page template */
export function VerticalPage({ setPage, title, headline, intro, introP2, guideTitle, guideDesc, vProducts, timeline }) {
  return (
    <section style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
      <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>{title}</span>
            <h2 style={{ ...h2Style, maxWidth: 820 }}>{headline}</h2>
            <p style={{ ...bodyStyle, fontSize: 17, maxWidth: 760, marginBottom: 18 }}>{intro}</p>
            {introP2 && <p style={{ ...bodyStyle, fontSize: 17, maxWidth: 760, marginBottom: 48 }}>{introP2}</p>}
          </FDiv>

          {guideTitle && (
            <FDiv d={0.1}>
              <div style={{
                background: CF.orangeTint, border: `1px solid ${CF.orange}30`,
                borderRadius: 10, padding: "28px 32px", marginBottom: 48,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 20,
              }}>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ color: CF.orange }}><Ic d="book" size={18}/></div>
                    <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: CF.orange, textTransform: "uppercase", letterSpacing: "0.06em" }}>Free guide</p>
                  </div>
                  <p style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: CF.ink, lineHeight: 1.4, marginBottom: 6, letterSpacing: "-0.005em" }}>{guideTitle}</p>
                  <p style={{ ...smallStyle, fontSize: 14 }}>{guideDesc}</p>
                </div>
                <button onClick={() => setPage("start")} style={btnPrimary} onMouseEnter={hovPrimary} onMouseLeave={unhovPrimary}>
                  <Ic d="download" size={16}/> Download the guide
                </button>
              </div>
            </FDiv>
          )}

          {vProducts.map((p, i) => (
            <FDiv key={p.id} d={0.1 + i * 0.06}>
              <div style={{
                ...cardStyle, padding: "clamp(28px, 4vw, 40px)",
                marginBottom: 20, cursor: "pointer", transition: "border-color 0.15s",
              }}
                onClick={() => setPage("platform")}
                onMouseEnter={e => e.currentTarget.style.borderColor = CF.orange}
                onMouseLeave={e => e.currentTarget.style.borderColor = CF.line}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 6,
                    background: CF.orangeTint, color: CF.orange,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}><Ic d={p.icon} size={18}/></div>
                  <span style={{ fontFamily: FONT, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: CF.ink, letterSpacing: "-0.01em" }}>{p.name}</span>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: CF.ink3, marginLeft: 4 }}>{p.context || p.haName}</span>
                </div>
                <p style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: CF.orange, lineHeight: 1.5, marginBottom: 14 }}>{p.headline}</p>
                <p style={{ ...bodyStyle, fontSize: 15, marginBottom: 20, maxWidth: 800 }}>{p.desc}</p>
                <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {p.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: CF.orange, flexShrink: 0, marginTop: 2 }}><Ic d="check" size={16}/></span>
                      <span style={{ fontFamily: FONT, fontSize: 14, color: CF.ink2, lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: FONT, fontSize: 14, fontWeight: 500, color: CF.orange,
                  marginTop: 20, display: "inline-flex", alignItems: "center", gap: 6,
                }}>View full product detail <Ic d="arrow" size={14}/></p>
              </div>
            </FDiv>
          ))}

          {timeline && (
            <FDiv d={0.3}>
              <div style={{ marginTop: 40 }}>
                <p style={{
                  fontFamily: MONO, fontSize: 12, fontWeight: 600, color: CF.orange,
                  textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 18,
                }}>{title === "Housing associations" ? "Regulatory timeline" : "Regulatory context"}</p>
                <div style={{ ...cardStyle, padding: "8px 24px" }}>
                  {timeline.map(([date, t, d], i) => (
                    <div key={t} style={{
                      display: "flex", gap: 24, padding: "18px 0",
                      borderBottom: i < timeline.length - 1 ? `1px solid ${CF.line2}` : "none",
                      alignItems: "flex-start",
                    }}>
                      <div style={{
                        fontFamily: MONO, fontSize: 12, fontWeight: 500, color: CF.orange,
                        minWidth: 110, flexShrink: 0, paddingTop: 2,
                      }}>{date}</div>
                      <div>
                        <p style={{ fontFamily: FONT, fontSize: 15, color: CF.ink, fontWeight: 600, marginBottom: 4 }}>{t}</p>
                        <p style={{ ...smallStyle, fontSize: 14 }}>{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FDiv>
          )}

          <FDiv d={0.42}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
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

/* HA page uses VerticalPage */
export function HAPage({ setPage }) {
  return <VerticalPage setPage={setPage}
    title="Housing associations"
    headline="Built for the regulatory reality you face today."
    intro="The RSH March 2026 VFM Report changed the compliance landscape. Ten housing associations have been downgraded on governance in the last 18 months. Every downgrade cited the same pattern: insufficient internal controls, weak oversight, and lack of evidence-based assurance."
    introP2="Strata addresses every product-deliverable requirement of the RSH Value for Money Standard. The platform delivers 70% through automation. Our governance guide covers the remaining 30%. Together: 100% of the Standard addressed. No gaps."
    guideTitle="Achieving 100% Compliance Against the RSH VFM Standard"
    guideDesc="Every enforceable clause mapped. Platform vs governance split. Board checklists with named owners and frequencies."
    vProducts={HA_PRODUCTS.map(p => ({ ...p, context: p.haName }))}
    timeline={[
      ["Mar 2026", "RSH VFM Report", "Explicit demand for evidence-based assurance."],
      ["7 Apr 2026", "RICS Service Charge Code, 4th Edition", "First edition to explicitly include housing associations."],
      ["Apr 2026", "Welsh Rent and Service Charge Standard 2026\u20132036", "Distinct CPI+1% cap and affordability framework."],
      ["Oct 2026", "RSH STAIRs requirements", "Tenant information obligations. Request volumes will increase."],
      ["In Parliament", "FOI Extension Bill", "Extends Freedom of Information obligations to housing associations."],
      ["Phased", "Leasehold and Freehold Reform Act 2024", "Enhanced leaseholder rights being commenced in stages."],
    ]}
  />;
}

export function LAPage({ setPage }) {
  return <VerticalPage setPage={setPage}
    title="Local authorities"
    headline="339 councils. Thousands of contracts. A local audit system in crisis."
    intro="England's local audit backlog is the worst in decades. Hundreds of councils have unaudited accounts. The government has published a non-compliance list and launched a five-year programme to rebuild assurance. The Procurement Act 2023 introduced the Procurement Compliance Service with powers to investigate any procurement. Section 70 payment transparency obligations take effect April 2026."
    introP2="In this environment, demonstrating that every invoice matches the contract and every FOI request is answered within the statutory timeframe is not optional. It is the evidence that keeps your council off the non-compliance list."
    vProducts={[
      { id: "contracts", icon: "shield", name: "Strata | Contracts", context: "Contract management",
        headline: "The Procurement Act 2023 changed the rules. The Procurement Compliance Service is watching.",
        desc: "Councils manage hundreds of supplier contracts across every department. The Procurement Act 2023 introduced new transparency obligations and the Procurement Compliance Service with powers to investigate non-compliance. Section 70 requires publication of payment information on the central digital platform from April 2026. Strata validates every invoice against every contract, creating the audit trail the new regime demands.",
        points: ["Every invoice validated against the governing contract at clause level", "Automated evidence packs for audit and PCS enquiries", "Supplier performance scoring across your entire contractor base", "Section 70 payment transparency data generated automatically", "Budget vs actuals comparison with variance analysis", "Cross-departmental compliance dashboard for s151 officers"] },
      { id: "requests", icon: "search", name: "Strata | Requests", context: "FOI & information governance",
        headline: "Local authorities handle approximately 467,000 FOI requests per year across the sector. Volume is growing.",
        desc: "FOI is a significant operational cost for councils. Requests span every department, require coordination across teams, and carry a statutory 20-day deadline. The FOI Extension Bill will increase obligations further. Strata gives you free case management forever and AI-powered response generation when volume exceeds capacity.",
        points: ["Full case management free forever: log, track, route, report", "AI-powered scanning across SharePoint, email, and departmental systems", "Calculated answers from validated financial data", "Cross-departmental request routing with deadline tracking", "Cost estimation before committing staff resource", "Disclosure log and publication scheme management"] },
      { id: "charges", icon: "home", name: "Strata | Charges", context: "Council leaseholder service charges",
        headline: "Council leaseholders have the same rights as private leaseholders. The same tribunal exposure applies.",
        desc: "If your council has sold properties under Right to Buy, you have leaseholders. Those leaseholders pay service charges governed by the same legislation as private sector leaseholders. Section 20 consultation requirements apply. The RICS Service Charge Code 4th Edition applies. Tribunal challenges are increasing. Strata reads the lease and validates every charge.",
        points: ["Charges calculated from the lease, not inherited spreadsheets", "Section 20 threshold monitoring across your RTB portfolio", "RICS 4th Edition compliance checking", "Tribunal defence evidence packs generated automatically"] },
    ]}
    timeline={[
      ["Feb 2025", "Procurement Act 2023 in force", "New transparency obligations. Procurement Compliance Service operational."],
      ["Apr 2026", "Section 70 payment transparency", "Publication of payment information on central digital platform."],
      ["Apr 2026", "Below-threshold contract notices", "Mandatory registration for below-threshold procurements."],
      ["In Parliament", "FOI Extension Bill", "Extends FOI obligations. Request volumes will increase."],
      ["Ongoing", "Local audit rebuild", "Five-year programme. Non-compliance list published. Audited accounts backlog."],
    ]}
  />;
}

export function NHSPage({ setPage }) {
  return <VerticalPage setPage={setPage}
    title="NHS trusts"
    headline="217 trusts. £21.7bn in borrowings. FOI backlogs triggering ICO enforcement."
    intro="53% of NHS trusts reported a deficit in 2024/25. PFI obligations account for a significant share of long-term borrowings. The ICO conducted a deep-dive into NHS trust FOI compliance and found trusts with compliance rates as low as 33%. Practice recommendations and enforcement action followed. Procurement strategies at many trusts remain in draft."
    introP2="Strata helps NHS trusts validate supplier invoices against contract terms, respond to FOI requests within statutory deadlines, and create the audit trail that satisfies both the ICO and external auditors."
    vProducts={[
      { id: "contracts", icon: "shield", name: "Strata | Contracts", context: "Procurement compliance",
        headline: "Clinical supplies, FM, IT, estates, agency staff, PFI. Thousands of contracts. Nobody checks the invoices.",
        desc: "NHS trusts manage vast procurement portfolios spanning clinical consumables, pharmaceuticals, facilities management, IT services, estates maintenance, agency staffing, and PFI. Procurement strategies at many trusts remain in draft. The Procurement Act 2023 now applies in full. Invoices are approved against PO values because nobody has capacity to verify them against the contract terms. Strata reads every contract once and validates every invoice for the life of the agreement, whether it is a three-month agency contract or a thirty-year PFI.",
        points: ["Every invoice validated against contract terms across all procurement categories", "Clinical supplies, FM, IT, estates, agency staffing, and PFI covered equally", "PFI payment mechanism enforcement including benchmarking and performance deductions", "Supplier spend analysis across clinical and non-clinical categories", "Procurement Act 2023 transparency compliance", "Automated evidence packs for trust audit committees"] },
      { id: "requests", icon: "search", name: "Strata | Requests", context: "FOI & subject access",
        headline: "The ICO found NHS trusts with FOI backlogs of 20+ requests and compliance rates of 33%. Enforcement followed.",
        desc: "NHS trusts face growing FOI volumes without growing resources. The ICO's 2024/25 deep-dive into NHS trust FOI compliance resulted in practice recommendations and enforcement action for trusts with significant backlogs. Frontline clinical staff cannot be diverted to compile FOI responses. Strata automates the search, calculation, and assembly of responses so clinical staff can focus on care.",
        points: ["Full case management free forever: log, track, route, report", "AI-powered scanning that does not require frontline staff involvement", "Calculated financial answers from validated procurement data", "Subject access request handling with PII detection and auto-redaction", "ICO-ready compliance reporting showing response times and volumes", "Cost estimation to support Section 12 exemption decisions"] },
    ]}
    timeline={[
      ["2024/25", "ICO NHS FOI deep-dive", "Practice recommendations issued to trusts with significant backlogs."],
      ["Feb 2025", "Procurement Act 2023", "New transparency and compliance obligations for NHS procurement."],
      ["Apr 2026", "Section 70 payment transparency", "Trust payment data published on central platform."],
      ["Ongoing", "NHS provider deficit", "53% of trusts in deficit. Cost control and contract compliance under scrutiny."],
    ]}
  />;
}

export function CommercialPage({ setPage }) {
  return <VerticalPage setPage={setPage}
    title="Commercial"
    headline="The contracts you scrutinise least are where the leakage lives."
    intro="Direct spend has category managers, KPIs, and board-level attention. Indirect spend does not. Professional services, IT, telecoms, facilities management, contingent labour, marketing, travel, and the long tail of supplier contracts that sit with every function in the business. Each contract negotiated carefully, then handed to the consuming department, then forgotten. Invoices get approved against PO values because nobody has time to read the contract again."
    introP2="World Commerce and Contracting estimates post-signature contract value leakage at up to 11%. Most organisations do not formally track it. Strata reads every indirect-spend contract you hold, extracts every commercial term, and validates every invoice against them. Deterministically. With full auditability. Within your existing AP process."
    vProducts={[
      { id: "contracts", icon: "shield", name: "Strata | Contracts", context: "Indirect spend enforcement",
        headline: "Your ERP cannot read a PDF. Your AP system cannot read a PDF. Strata can.",
        desc: "Rates, caps, rebate thresholds, volume discounts, recharge obligations, SLA credits, price review mechanics. All of it sits in contracts that no operational system can understand. Invoices are paid against PO amounts, not against contract terms. The gap between the two is where your money disappears. Strata reads every contract once, extracts every commercial term into structured logic, and validates every subsequent invoice against it.",
        points: [
          "Every invoice validated at clause level against the governing contract",
          "Volume discount and rebate thresholds tracked across cumulative spend",
          "Rate card verification against price review schedules",
          "Missed recharges surfaced before they become sunk cost",
          "SLA credit entitlement calculated and evidenced automatically",
          "Supplier performance scoring across your entire indirect portfolio",
        ] },
      { id: "requests", icon: "search", name: "Strata | Requests", context: "Subject access and DSAR",
        headline: "UK GDPR applies. Subject access volumes are rising. The statutory clock runs whether you are ready or not.",
        desc: "Subject access requests carry a one-month statutory deadline under UK GDPR. For larger organisations, particularly those with consumer-facing operations or significant HR exposure, request volumes and complexity have grown materially. Strata provides free case management forever, with AI-powered scanning and auto-redaction when volume exceeds what manual handling can sustain.",
        points: [
          "Full case management free forever with statutory deadline tracking",
          "AI-powered scanning across SharePoint, OneDrive, email, and HR systems",
          "PII detection and auto-redaction",
          "Third-party data identification for redaction decisions",
          "Evidence pack generation for regulator or tribunal",
        ] },
    ]}
  />;
}