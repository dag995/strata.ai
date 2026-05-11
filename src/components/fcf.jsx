/* Inner pages: Platform, Sectors, HA, VerticalPage + LA/NHS/Commercial */
import { useState, useEffect, useRef, useCallback } from "react";
import {
  CF, FONT, MONO,
  eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle,
  cardStyle, btnPrimary, btnSecondary, btnGhost,
  hovPrimary, unhovPrimary, hovSecondary, unhovSecondary
} from './tokens'
import { PRODUCTS, SECTORS, HA_PRODUCTS, Ic, FDiv } from '../components'

function HeroNumber() {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${CF.line}`,
      borderRadius: 12,
      padding: "44px 40px",
      boxShadow: "0 20px 60px rgba(29, 29, 27, 0.08), 0 4px 14px rgba(29,29,27,0.04)",
      width: "100%",
      maxWidth: 520,
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 11, color: CF.ink3,
        letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 18,
      }}>
        FCF leakage / supplier contracts
      </div>

      <div style={{
        fontFamily: FONT, fontWeight: 600,
        fontSize: "clamp(56px, 7vw, 84px)",
        color: CF.ink, lineHeight: 1, letterSpacing: "-0.03em",
        marginBottom: 8,
      }}>
        100&ndash;300<span style={{ color: CF.orange }}>bps</span>
      </div>

      <div style={{
        fontFamily: FONT, fontSize: 16, color: CF.ink2,
        lineHeight: 1.5, marginBottom: 28,
      }}>
        Free cash flow recovered, this quarter, from contracts you have already signed.
      </div>

      {/* Mini line items — reinforces the concrete leak pattern */}
      <div style={{
        background: CF.bg, border: `1px solid ${CF.line2}`,
        borderRadius: 6, padding: 14,
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 10,
        }}>
          <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: CF.ink }}>
            Where it leaks
          </span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: CF.ink3 }}>Typical findings</span>
        </div>
        {[
          ["CPI uplifts outside contract terms", "0.4&ndash;0.9%"],
          ["Auto-renewals at non-contracted rates", "0.3&ndash;0.7%"],
          ["Out-of-scope service charges", "0.2&ndash;0.6%"],
          ["Volume discounts not applied", "0.1&ndash;0.4%"],
        ].map(([reason, range], i) => (
          <div key={reason} style={{
            display: "grid",
            gridTemplateColumns: "14px 1fr auto",
            alignItems: "center",
            gap: 10,
            padding: "8px 0",
            borderTop: i > 0 ? `1px solid ${CF.line2}` : "none",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: CF.orange,
            }}/>
            <span style={{
              fontFamily: FONT, fontSize: 13, color: CF.ink2, lineHeight: 1.4,
            }}>{reason}</span>
            <span
              style={{
                fontFamily: MONO, fontSize: 11, color: CF.ink, fontWeight: 500,
                whiteSpace: "nowrap",
              }}
              dangerouslySetInnerHTML={{ __html: range }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FCFPage({ setPage }) {
  return (
    <>

      {/* HERO */}
      <section style={{
        background: CF.bg,
        padding: "140px 28px 80px",
        borderBottom: `1px solid ${CF.line}`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Subtle orange wash — same treatment as home hero */}
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
            <FDiv><span style={eyebrow()}>For CFOs at £1bn+ companies</span></FDiv>

            <FDiv d={0.05}>
              <h1 style={h1Style}>
                100&ndash;300 basis points of FCF.<br/>
                <span style={{ color: CF.orange }}>Hidden in your supplier contracts.</span>
              </h1>
            </FDiv>

            <FDiv d={0.1}>
              <p style={{ ...leadStyle, fontSize: "clamp(18px, 1.6vw, 22px)", color: CF.ink2, marginBottom: 16 }}>
                The cleanest cash you will find this year, sitting inside agreements you have already signed.
              </p>
            </FDiv>

            <FDiv d={0.15}>
              <p style={{ ...bodyStyle, marginBottom: 8, maxWidth: 600 }}>
                Suppliers raise prices outside the contract terms. AP teams sign off because nobody can realistically check every invoice against every contract. The gap shows up nowhere on the management accounts.
              </p>
              <p style={{ ...bodyStyle, fontWeight: 500, color: CF.ink, maxWidth: 600, marginBottom: 32 }}>
                Strata reads every contract. Watches every invoice. Flags every charge that does not match. Live in weeks. £1 per invoice. No platform fee.
              </p>
            </FDiv>

            <FDiv d={0.2}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => setPage("start")}
                  style={btnPrimary}
                  onMouseEnter={hovPrimary}
                  onMouseLeave={unhovPrimary}
                >
                  See what is hiding in yours <Ic d="arrow" size={16}/>
                </button>
                <button
                  onClick={() => setPage("platform")}
                  style={btnSecondary}
                  onMouseEnter={hovSecondary}
                  onMouseLeave={unhovSecondary}
                >
                  How it works
                </button>
              </div>
            </FDiv>
          </div>

          <FDiv d={0.18}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <HeroNumber/>
            </div>
          </FDiv>
        </div>
      </section>

      {/* WHY IT LEAKS */}
      <section style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 110px) 28px",
        borderBottom: `1px solid ${CF.line}`,
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={eyebrow()}>The structural problem</span>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Nobody is checking. <span style={{ color: CF.orange }}>Nobody can.</span>
              </h2>
              <p style={{ ...leadStyle, margin: "0 auto" }}>
                Reconciling 400 contracts against 4,000 invoices a quarter is theoretically someone&rsquo;s job and practically nobody&rsquo;s. The leak is structural, not accidental.
              </p>
            </div>
          </FDiv>

          <FDiv d={0.08}>
            <div className="g3" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16,
            }}>
              {[
                {
                  ic: "scale",
                  t: "The contract sits in a CLM",
                  d: "Most large companies have a contract management system. CLMs store contracts. They do not enforce them. The clauses live as PDFs that nobody reads after signing.",
                },
                {
                  ic: "zap",
                  t: "AP cannot do the maths",
                  d: "Your AP team processes invoices at scale. They check the line items add up. They do not have the contract open beside them. They could not, even if they wanted to.",
                },
                {
                  ic: "search",
                  t: "The leak is invisible",
                  d: "Overcharges do not flag in management accounts. They sit inside expected supplier spend. The variance against budget is too small to investigate, line by line.",
                },
              ].map((c, i) => (
                <FDiv key={c.t} d={i * 0.08}>
                  <div style={{ ...cardStyle, padding: 26, height: "100%" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: CF.orangeTint, color: CF.orange,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 16,
                    }}><Ic d={c.ic} size={20}/></div>
                    <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 10 }}>{c.t}</h3>
                    <p style={{ ...smallStyle, fontSize: 14 }}>{c.d}</p>
                  </div>
                </FDiv>
              ))}
            </div>
          </FDiv>
        </div>
      </section>

      {/* HOW STRATA RECOVERS IT */}
      <section style={{
        background: CF.bg,
        padding: "clamp(72px, 10vw, 110px) 28px",
        borderBottom: `1px solid ${CF.line}`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={eyebrow()}>How we recover it</span>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>
                Read every contract. <span style={{ color: CF.orange }}>Validate every invoice.</span>
              </h2>
              <p style={{ ...leadStyle, margin: "0 auto" }}>
                AI reads the contracts. Your domain experts confirm the extracted rules. From that point on, validation is deterministic. Every flag traces back to a specific clause on a specific page.
              </p>
            </div>
          </FDiv>

          <FDiv d={0.08}>
            <div className="g3" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32,
            }}>
              {[
                ["1", "Upload your contract book", "Master agreements, schedules, addenda, side letters. PDFs are fine. Strata reads them, extracts every commercial term, and presents them for confirmation."],
                ["2", "Confirm the extracted rules", "Your finance and procurement team reviews the extracted terms. Twenty minutes per contract. After confirmation, the rules are locked and auditable."],
                ["3", "Validate every invoice, continuously", "Every invoice that arrives is checked against the contract terms. Mismatches flag in your inbox the same day, with the clause reference and the variance amount."],
              ].map(([n, t, d], i) => (
                <FDiv key={n} d={i * 0.08}>
                  <div style={{ ...cardStyle, padding: 26, height: "100%" }}>
                    <div style={{
                      fontFamily: MONO, fontSize: 11, fontWeight: 600,
                      color: CF.orange, letterSpacing: "0.06em",
                      textTransform: "uppercase", marginBottom: 12,
                    }}>Step {n}</div>
                    <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 10 }}>{t}</h3>
                    <p style={{ ...smallStyle, fontSize: 14 }}>{d}</p>
                  </div>
                </FDiv>
              ))}
            </div>
          </FDiv>

          <FDiv d={0.3}>
            <div style={{
              ...cardStyle,
              padding: 24,
              background: "#fff",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: MONO, fontSize: 11, color: CF.ink3,
                letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10,
              }}>
                Patent pending
              </p>
              <p style={{
                fontFamily: FONT, fontSize: 15, color: CF.ink2, lineHeight: 1.6,
                maxWidth: 720, margin: "0 auto",
              }}>
                US 63/969,838. Recursive Logic Caching&trade;. Read the document once. Extract every rule. Validate everything against them, continuously, with 100% auditability.
              </p>
            </div>
          </FDiv>
        </div>
      </section>

      {/* PROOF — three tiles */}
      <section style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 110px) 28px",
        borderBottom: `1px solid ${CF.line}`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FDiv>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={eyebrow()}>Why CFOs choose Strata</span>
              <h2 style={{ ...h2Style }}>
                The cleanest FCF lever <span style={{ color: CF.orange }}>you will pull this year.</span>
              </h2>
            </div>
          </FDiv>

          <FDiv d={0.08}>
            <div className="g3" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16,
            }}>
              {[
                {
                  ic: "clock",
                  t: "Live in weeks, not months",
                  d: "No system replacement. No procurement project. Strata sits as an overlay on the systems you already run.",
                },
                {
                  ic: "lock",
                  t: "Your data stays yours",
                  d: "Sensitive contract data does not leave your perimeter. Our scanning agent runs inside your firewall. Only structured metadata crosses the boundary.",
                },
                {
                  ic: "shield",
                  t: "Deterministic and auditable",
                  d: "Every flag traces back to a confirmed rule, which traces back to a clause on a specific page. Audit committee evidence built in.",
                },
              ].map((c, i) => (
                <FDiv key={c.t} d={i * 0.08}>
                  <div style={{ ...cardStyle, padding: 26, height: "100%" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: CF.orangeTint, color: CF.orange,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 16,
                    }}><Ic d={c.ic} size={20}/></div>
                    <h3 style={{ ...h3Style, fontSize: 18, marginBottom: 10 }}>{c.t}</h3>
                    <p style={{ ...smallStyle, fontSize: 14 }}>{c.d}</p>
                  </div>
                </FDiv>
              ))}
            </div>
          </FDiv>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section style={{
        background: CF.bg2,
        padding: "clamp(72px, 10vw, 110px) 28px",
        borderBottom: `1px solid ${CF.line}`,
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <FDiv>
            <span style={eyebrow()}>Why we built this</span>
            <h2 style={{ ...h2Style, marginBottom: 24 }}>
              I ran an AIM-listed company for nearly four years.
            </h2>

            <p style={{ ...bodyStyle, marginBottom: 18, fontSize: 17 }}>
              From December 2018 to September 2022, I sat through investor meetings defending cash conversion. I learned how hard FCF is to move. The levers that actually shift it are mostly painful: working capital tightening, capex deferral, headcount discipline. Nothing easy. Nothing quick.
            </p>

            <p style={{ ...bodyStyle, marginBottom: 18, fontSize: 17 }}>
              What I did not know then is that a meaningful chunk of FCF leakage is sitting inside something nobody systematically checks: the gap between what suppliers were contracted to charge and what they actually billed.
            </p>

            <p style={{ ...bodyStyle, marginBottom: 18, fontSize: 17 }}>
              Most CFOs we now talk to estimate it is worth 100&ndash;300 basis points of FCF. The cleanest cash they will find this year, sitting inside agreements they have already signed.
            </p>

            <p style={{ ...bodyStyle, fontSize: 17, fontWeight: 500, color: CF.ink, marginBottom: 8 }}>
              That is why we built Strata.
            </p>

            <p style={{
              fontFamily: MONO, fontSize: 12, color: CF.ink3,
              letterSpacing: "0.04em", marginTop: 28,
            }}>
              Neal Gandhi, CEO &amp; Co-founder
            </p>
          </FDiv>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 100px) 28px",
        textAlign: "center",
      }}>
        <FDiv>
          <h2 style={{ ...h2Style, color: CF.ink, marginBottom: 16 }}>
            See what is hiding <span style={{ color: CF.orange }}>in your contracts.</span>
          </h2>
          <p style={{ ...leadStyle, textAlign: "center", margin: "0 auto 32px" }}>
            Send us three contracts and fifty invoices. We will show you exactly where the gap is. No charge. No obligation. Two-week turnaround.
          </p>
          <button
            onClick={() => setPage("start")}
            style={btnPrimary}
            onMouseEnter={hovPrimary}
            onMouseLeave={unhovPrimary}
          >
            Request the diagnostic <Ic d="arrow" size={16}/>
          </button>
          <p style={{
            ...smallStyle, fontSize: 13, marginTop: 20,
            maxWidth: 520, margin: "20px auto 0",
          }}>
            For CFOs and Directors of Finance at £1bn+ revenue companies.
          </p>
        </FDiv>
      </section>

    </>
  );
}