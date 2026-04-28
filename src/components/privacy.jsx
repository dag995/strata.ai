import { CF, FONT, MONO, eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle, cardStyle, btnPrimary, btnSecondary, btnGhost, hovPrimary, unhovPrimary, hovSecondary, unhovSecondary } from './tokens'

export function Privacy({ setPage }) {
  return (
    <>
      <section className="legal" style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
        <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1>Privacy Policy</h1>
            <p><strong>Last updated: 18 April 2026</strong></p>
            <p>This privacy policy explains how WeAreStrata Limited ("we", "us", "our") collects, uses, stores, and protects personal data when you visit wearestrata.ai, use our platform, or otherwise interact with us. We are committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

            <h2>1. Who we are</h2>
            <p>WeAreStrata Limited is a company registered in England and Wales under company number 16974757.</p>
            <p>Registered office: 4 Usk Vale Court, Pontypool, Wales, NP4 8AS</p>
            <p>Trading as: Strata AI</p>
            <p>Website: wearestrata.ai</p>
            <p>Contact: hello@wearestrata.ai</p>
            <p>We are the data controller for personal data collected through this website and for personal data processed in the course of providing our platform to customers. Where we process data on behalf of a customer (for example, documents uploaded to the platform), we act as a data processor and the customer is the controller.</p>

            <h2>2. What data we collect</h2>

            <h3>2.1 Data you provide directly</h3>
            <p>When you contact us, request a demo, or sign up for the platform, we collect:</p>
            <ul>
            <li>Name</li>
            <li>Work email address</li>
            <li>Organisation name</li>
            <li>Role or job title (if provided)</li>
            <li>Any message, query, or context you include in the form</li>
            </ul>

            <h3>2.2 Data collected automatically</h3>
            <p>When you visit the website, we collect limited technical data:</p>
            <ul>
            <li>IP address (truncated for analytics purposes)</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited, time spent, and referrer</li>
            <li>Date and time of access</li>
            </ul>

            <h3>2.3 Data processed through the platform</h3>
            <p>If your organisation uses the Strata AI platform, we process the documents and data you upload (for example, contracts, leases, invoices, policies). This data is processed on your organisation's instructions under a separate data processing agreement. We do not use customer data to train AI models.</p>

            <h2>3. How we use your data</h2>
            <p>We use personal data only for the purposes set out below, and only where we have a lawful basis under UK GDPR.</p>
            <p>Purpose	Lawful basis</p>
            <p>Responding to enquiries and demo requests	Legitimate interests</p>
            <p>Providing and supporting the Strata AI platform	Contract</p>
            <p>Sending service-related communications	Contract</p>
            <p>Sending occasional commercial updates to business contacts	Legitimate interests (you can opt out at any time)</p>
            <p>Improving the website and platform	Legitimate interests</p>
            <p>Meeting our legal, regulatory, and accounting obligations	Legal obligation</p>
            <p>Protecting the security of the website and platform	Legitimate interests</p>

            <p>We do not sell personal data. We do not use it for automated decisions that have legal or similarly significant effects on individuals.</p>

            <h2>4. Cookies and analytics</h2>
            <p>The website uses a small number of cookies and similar technologies:</p>
            <ul>
            <li>Strictly necessary cookies for the site to function (for example, session and security cookies). These do not require consent.</li>
            <li>Analytics cookies to understand how the site is used in aggregate. These are set only with your consent and can be withdrawn at any time.</li>
            </ul>
            <p>You can control cookies through your browser settings. Blocking strictly necessary cookies may stop parts of the site from working.</p>

            <h2>5. Who we share data with</h2>
            <p>We share personal data only where necessary, and only with parties bound by appropriate confidentiality and data protection terms.</p>
            <ul>
              <li>Hosting and infrastructure providers (for example, cloud hosting within the UK or EEA)</li>
              <li>Communication and CRM tools we use to manage enquiries and customer relationships</li>
              <li>Professional advisors (legal, accounting, insurance) where required</li>
              <li>Law enforcement or regulators where we are legally required to do so</li>
            </ul>
            <p>We do not share personal data with third parties for their own marketing.</p>

            <h2>6. International transfers</h2>
            <p>We keep personal data within the United Kingdom or European Economic Area wherever possible. Where data is transferred outside the UK, we rely on UK adequacy regulations, the UK International Data Transfer Agreement, or the UK Addendum to the EU Standard Contractual Clauses, together with appropriate safeguards.</p>

            <h2>7. How long we keep data</h2>
            <p>We keep personal data only for as long as we need it:</p>
            <ul>
            <li>Enquiry and contact data: up to 24 months after our last interaction, unless a commercial relationship continues.</li>
            <li>Customer account data: for the duration of the contract and for a reasonable period afterwards to meet legal and accounting obligations (typically up to 7 years).</li>
            <li>Website analytics: aggregated data is retained; individual records are deleted or anonymised within 26 months.</li>
            </ul>
            <p>Documents and data processed through the platform are retained in line with the customer's data processing agreement.</p>

            <h2>8. Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
            <li>Access the personal data we hold about you</li>
            <li>Ask us to correct inaccurate data</li>
            <li>Ask us to delete data in certain circumstances</li>
            <li>Restrict or object to processing in certain circumstances</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
            <li>Complain to the Information Commissioner's Office (ICO)</li>
            </ul>

            <p>To exercise any of these rights, email hello@wearestrata.ai. We will respond within one month.</p>
            <p>You can also contact the ICO directly at ico.org.uk or on 0303 123 1113. We would, however, appreciate the chance to address your concerns first.</p>

            <h2>9. Security</h2>
            <p>We take data security seriously. Our approach is informed by NCSC guidance, Cyber Essentials, and Secure by Design principles. Measures include:</p>
            <ul>
            <li>Encryption in transit and at rest</li>
            <li>Role-based access controls and least-privilege access</li>
            <li>Tenant isolation at the database layer for platform data</li>
            <li>Continuous security monitoring and dependency scanning</li>
            <li>Regular review of access, logging, and retention</li>
            </ul>
            <p>No system is perfectly secure, but we work to reduce risk continuously and to respond quickly if an incident occurs.</p>

            <h2>10. Children</h2>
            <p>The website and platform are not directed at children. We do not knowingly collect personal data from anyone under 18.</p>

            <h2>11. Changes to this policy</h2>
            <p>We may update this policy from time to time. The "last updated" date at the top of the page shows when it was last changed. Material changes will be notified through the website or, where appropriate, by email.</p>

            <h2>12. Contact us</h2>
            <p>If you have any questions about this policy or about how we handle personal data, please contact:</p>
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