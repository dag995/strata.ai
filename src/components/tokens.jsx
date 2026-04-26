/* Cloudflare-inspired design tokens
   Orange primary, light surfaces, Inter + JetBrains Mono, crisp borders. */

// Brand
export const CF_ORANGE = "#F6821F";      // Cloudflare primary orange
export const CF_ORANGE_DARK = "#E06C08";  // hover / pressed
export const CF_ORANGE_TINT = "#FEF4EA";  // very light orange bg (callouts)

// Ink (text)
export const INK = "#1D1D1B";             // primary text, near-black (not pure)
export const INK_2 = "#404041";           // body
export const INK_3 = "#6B6B6C";           // secondary
export const INK_4 = "#9A9A9A";           // tertiary / captions

// Surfaces
export const BG = "#FAF8F3";              // base — slight warm off-white (cf-docs feel)
export const BG_2 = "#F6F2EB";            // alt section background
export const CARD = "#FFFFFF";            // card white
export const LINE = "#E5E2DA";            // standard border
export const LINE_2 = "#EFECE4";          // subtle divider

// Semantic
export const GREEN = "#2F8B4A";
export const RED = "#C0392B";
export const AMBER = "#E9B949";

// Type
export const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
export const MONO = "'JetBrains Mono', 'SF Mono', Menlo, monospace";

// Style helpers (reused across all pages)

// Eyebrow: small uppercase mono label above headings
export const eyebrow = (c = CF_ORANGE) => ({
  fontFamily: MONO,
  fontSize: 12,
  fontWeight: 500,
  color: c,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 20,
  display: "inline-block",
});

// Headings — sentence case, tight, Inter semibold
export const h1Style = {
  fontFamily: FONT,
  fontWeight: 600,
  fontSize: "clamp(36px, 5.2vw, 60px)",
  color: INK,
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  marginBottom: 20,
};
export const h2Style = {
  fontFamily: FONT,
  fontWeight: 600,
  fontSize: "clamp(28px, 3.6vw, 42px)",
  color: INK,
  lineHeight: 1.15,
  letterSpacing: "-0.01em",
  marginBottom: 16,
};
export const h3Style = {
  fontFamily: FONT,
  fontWeight: 600,
  fontSize: 20,
  color: INK,
  lineHeight: 1.3,
  letterSpacing: "-0.005em",
  marginBottom: 10,
};

// Body text
export const leadStyle = {
  fontFamily: FONT,
  fontSize: "clamp(17px, 1.6vw, 20px)",
  fontWeight: 400,
  color: INK_2,
  lineHeight: 1.6,
  maxWidth: 680,
  marginBottom: 40,
};
export const bodyStyle = {
  fontFamily: FONT,
  fontSize: 16,
  fontWeight: 400,
  color: INK_2,
  lineHeight: 1.65,
};
export const smallStyle = {
  fontFamily: FONT,
  fontSize: 14,
  fontWeight: 400,
  color: INK_3,
  lineHeight: 1.55,
};

// Card base
export const cardStyle = {
  background: CARD,
  border: `1px solid ${LINE}`,
  borderRadius: 8,
};

// Buttons — Cloudflare: solid orange primary, outline secondary
export const btnPrimary = {
  fontFamily: FONT,
  fontSize: 15,
  fontWeight: 500,
  background: CF_ORANGE,
  color: "#fff",
  border: `1px solid ${CF_ORANGE}`,
  borderRadius: 6,
  padding: "12px 22px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "background 0.15s, border-color 0.15s",
  textDecoration: "none",
  whiteSpace: "nowrap",
};
export const btnSecondary = {
  fontFamily: FONT,
  fontSize: 15,
  fontWeight: 500,
  background: "transparent",
  color: INK,
  border: `1px solid ${INK}`,
  borderRadius: 6,
  padding: "12px 22px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "background 0.15s, color 0.15s",
  textDecoration: "none",
  whiteSpace: "nowrap",
};
export const btnGhost = {
  fontFamily: FONT,
  fontSize: 14,
  fontWeight: 500,
  background: "transparent",
  color: CF_ORANGE,
  border: "none",
  padding: "6px 0",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

// Button hover handlers
export const hovPrimary = (e) => {
  e.currentTarget.style.background = CF_ORANGE_DARK;
  e.currentTarget.style.borderColor = CF_ORANGE_DARK;
};
export const unhovPrimary = (e) => {
  e.currentTarget.style.background = CF_ORANGE;
  e.currentTarget.style.borderColor = CF_ORANGE;
};
export const hovSecondary = (e) => {
  e.currentTarget.style.background = INK;
  e.currentTarget.style.color = "#fff";
};
export const unhovSecondary = (e) => {
  e.currentTarget.style.background = "transparent";
  e.currentTarget.style.color = INK;
};

export const CF = {
  orange: CF_ORANGE, 
  orangeDark: CF_ORANGE_DARK, 
  orangeTint: CF_ORANGE_TINT,
  ink: INK, 
  ink2: INK_2, 
  ink3: INK_3, 
  ink4: INK_4,
  bg: BG, 
  bg2: BG_2, 
  card: CARD, 
  line: LINE, 
  line2: LINE_2,
  green: GREEN, 
  red: RED, 
  amber: AMBER
}
//   FONT, MONO,
//   eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle,
//   cardStyle, btnPrimary, btnSecondary, btnGhost,
//   hovPrimary, unhovPrimary, hovSecondary, unhovSecondary,
// }
