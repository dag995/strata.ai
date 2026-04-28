import { CF, FONT, MONO, eyebrow, h1Style, h2Style, h3Style, leadStyle, bodyStyle, smallStyle, cardStyle, btnPrimary, btnSecondary, btnGhost, hovPrimary, unhovPrimary, hovSecondary, unhovSecondary } from './tokens'

export function Terms({ setPage }) {
  return (
    <>
      <section className="legal" style={{ background: CF.bg, minHeight: "100vh", paddingTop: 64 }}>
        <div style={{ padding: "clamp(56px, 7vw, 88px) 28px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1>Website Terms of Use</h1>
            <p><strong>Last updated: 18 April 2026</strong></p>
            <p>These terms govern your use of wearestrata.ai (the "website"). By accessing or using the website, you agree to these terms. If you do not agree, please do not use the website.</p>
            <p>These terms cover use of the website only. Use of the Strata AI platform by customers is governed by a separate master services agreement and data processing agreement.</p>

            <h2>1. Who we are</h2>
            <p>The website is operated by WeAreStrata Limited ("we", "us", "our"), a company registered in England and Wales under company number 16974757.</p>
            <p>Registered office: 4 Usk Vale Court, Pontypool, Wales, NP4 8AS</p>
            <p>Trading as: Strata AI</p>
            <p>Contact: hello@wearestrata.ai</p>

            <h2>2. Using the website</h2>
            <p>You may use the website for lawful purposes only. You agree not to:</p>
            <ul>
            <li>Use the website in any way that breaches applicable law or regulation</li>
            <li>Use the website to send, knowingly receive, upload, download, or use any material that does not comply with our acceptable content standards</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Knowingly transmit any data or material that contains viruses, trojans, worms, or other harmful code</li>
            <li>Attempt to gain unauthorised access to the website, the server on which it is stored, or any connected server, computer, or database</li>
            <li>Attack the website via a denial-of-service attack or a distributed denial-of-service attack</li>
            <li>Scrape, harvest, or extract data from the website by automated means without our prior written consent</li>
            <li>Reverse engineer or attempt to derive source code, underlying algorithms, or technical architecture from the website</li>
            </ul>
            <p>Breach of this clause may be a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant authorities and co-operate with them.</p>

          <h2>3. Intellectual property</h2>
          <p>The website and its content (including text, graphics, logos, images, software, and the structure and arrangement of the site) are owned by WeAreStrata Limited or our licensors and are protected by copyright, trade mark, patent, and other intellectual property laws.</p>
          <p>Our core technology is the subject of US patent applications, including US 63/969,838 and US 64/037,381. "Strata AI" and related marks are trade marks of WeAreStrata Limited.</p>
          <p>You may view and print pages from the website for your own personal or internal business use, subject to these terms. You may not otherwise copy, reproduce, distribute, publish, or create derivative works from the website without our prior written consent.</p>

          <h2>4. Information on the website</h2>
          <p>We take reasonable care to make sure the information on the website is accurate, but we make no representation or warranty that it is complete, current, or error-free. The website is provided for general information only. It does not constitute advice on which you should rely.</p>
          <p>Case studies, performance figures, and indicative pricing are illustrative. Actual results and commercial terms depend on individual circumstances and are set out in customer contracts.</p>

          <h2>5. Links</h2>
          <p>The website may contain links to third-party sites. These are provided for convenience only. We do not control, endorse, or accept responsibility for those sites or their content.</p>
          <p>You may link to our home page provided you do so in a way that is fair and legal, and does not damage our reputation or take advantage of it. You may not establish a link in a way that suggests any form of association, approval, or endorsement where none exists. We reserve the right to withdraw linking permission without notice.</p>

          <h2>6. Our liability</h2>
          <p>Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.</p>
          <p>Subject to that, we exclude all implied conditions, warranties, representations, or other terms that may apply to the website or any content on it. We will not be liable for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, arising under or in connection with:</p>
          <ul>
          <li>Use of, or inability to use, the website</li>
          <li>Use of or reliance on any content displayed on the website</li>
          </ul>

          <p>In particular, we will not be liable for:</p>
          <ul>
          <li>Loss of profits, sales, business, or revenue</li>
          <li>Business interruption</li>
          <li>Loss of anticipated savings</li>
          <li>Loss of business opportunity, goodwill, or reputation</li>
          <li>Any indirect or consequential loss or damage</li>
          </ul>
          <p>This clause applies to use of the website only. Separate liability terms apply under customer contracts for the Strata AI platform.</p>

          <h2>7. Viruses and security</h2>
          <p>We do not guarantee that the website will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes, and platform to access the website. You should use your own virus protection software.</p>
          <p>You must not misuse the website by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful.</p>

          <h2>8. Privacy and cookies</h2>
          <p>Our use of personal data is governed by our Privacy Policy. Our use of cookies is governed by our Cookie Policy. By using the website, you acknowledge that you have read both.</p>

          <h2>9. Changes to the website and these terms</h2>
          <p>We may update or withdraw the website and any content on it at any time without notice. We may revise these terms at any time. The "last updated" date at the top of this page shows when they were last changed. Your continued use of the website after a change means you accept the revised terms.</p>

          <h2>10. Governing law and jurisdiction</h2>
          <p>These terms, their subject matter, and their formation are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction over any dispute arising from or connected with them.</p>

          <h2>11. Contact us</h2>
          <p>If you have any questions about these terms, please contact:</p>
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