import { CF, FONT, MONO, eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle, cardStyle, btnPrimary, btnSecondary, btnGhost, hovPrimary, unhovPrimary, hovSecondary, unhovSecondary } from './tokens'

export function Cookies({ setPage }) {
  return (
    <>
      <section className="legal" style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
        <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1>Cookie Policy</h1>
            <p>Last updated: 18 April 2026</p>
            <p>This cookie policy explains how WeAreStrata Limited ("we", "us", "our") uses cookies and similar technologies on wearestrata.ai. It should be read alongside our Privacy Policy.</p>
            <h2>1. Who we are</h2>
            <p>WeAreStrata Limited is a company registered in England and Wales under company number 16974757.</p>
            <p>Registered office: 4 Usk Vale Court, Pontypool, Wales, NP4 8AS</p>
            <p>Contact: hello@wearestrata.ai</p>
            <h2>2. What cookies are</h2>
            <p>Cookies are small text files that a website places on your device when you visit it. They are widely used to make websites work, to make them work more efficiently, and to provide information about how the site is being used. We also use similar technologies such as local storage and pixel tags, which this policy treats in the same way as cookies.</p>
            <h2>3. How we use cookies</h2>
            <p>We use cookies only where they are necessary for the site to function or where you have given consent. We do not use cookies for advertising, behavioural profiling, or cross-site tracking.</p>
            <h2>3.1 Strictly necessary cookies</h2>
            <p>These cookies are required for the website to operate. They cannot be switched off in our systems and do not require your consent under UK law.</p>
            <h3>Cookie	Purpose	Duration</h3>
            <p>Session cookie	Maintains your session as you move between pages	Session</p>
            <p>Security cookie	Protects against cross-site request forgery and similar attacks	Session</p>
            <p>Consent cookie	Remembers your cookie preferences	12 months</p>
            <h2>3.2 Analytics cookies</h2>
            <p>These cookies help us understand how visitors use the website in aggregate so we can improve it. They are set only if you consent. You can withdraw consent at any time.</p>
            <h3>Cookie	Purpose	Duration</h3>
            <p>Analytics cookie	Measures page views, referrers, and aggregate usage patterns	Up to 26 months</p>
            <p>We configure analytics with IP truncation and do not combine analytics data with other personal data we hold about you.</p>
            <h2>3.3 What we do not use</h2>
            <ul>
              <li>Advertising or marketing cookies</li>
              <li>Third-party tracking pixels from ad networks</li>
              <li>Social media tracking cookies</li>
              <li>Fingerprinting or similar covert identification techniques</li>
            </ul>
            <h2>4. Your choices</h2>
            <p>You can manage cookies in three ways:</p>
            <p>On the site. When you first visit, you will see a cookie banner where you can accept or reject non-essential cookies. You can change your choice at any time by clearing your cookies and revisiting the site, or by using the preferences link in the footer.</p>
            <p>In your browser. Most browsers let you view, manage, and delete cookies, and block cookies from specific sites. See the help pages for your browser for instructions. Blocking strictly necessary cookies may stop parts of the site from working.</p>
            <p>By contacting us. Email hello@wearestrata.ai and we will help.</p>

            <h2>5. Changes to this policy</h2>
            <p>We may update this policy from time to time. The "last updated" date at the top shows when it was last changed. Material changes will be notified through the website.</p>
            
            <h2>6. Contact us</h2>
            <p>If you have any questions about this policy, please contact:</p>
            <p>WeAreStrata Limited</p>
            <p>4 Usk Vale Court, Pontypool, Wales, NP4 8AS</p>
            <p>Email: hello@wearestrata.ai</p>
            <p>Company number: 16974757</p>
          </div>
        </div>
      </section>
    </>
  )
}