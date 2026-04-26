/* All product / sector / HA / resources data — unchanged copy from source */

export const PRODUCTS = [
  {
    id: "contracts", icon: "shield", name: "Strata | Contracts", short: "Contracts",
    tag: "Reads your contracts. Enforces every invoice.",
    headline: "Stop paying invoices that don't match the contract.",
    desc: "Every organisation signs contracts. Almost none systematically check whether they are being charged correctly. Strata reads every contract, extracts every clause, rate, and obligation, then validates every invoice against them. Continuously. Automatically. With a complete evidence trail.",
    features: [
      ["Invoice-to-contract validation", "Every invoice checked against the governing contract for rate, scope, supplier identity, and VAT treatment. Every flag traced to the specific clause."],
      ["Overcharge and missed recharge detection", "Identifies invoices that exceed contract terms and costs that should have been recharged to a third party. Evidence packs generated automatically."],
      ["Supplier performance scoring", "Compliance scores across your supplier base. Which contractors consistently invoice within terms? Which trigger flags?"],
      ["Real-time compliance dashboard", "Savings quantified in real time. Drill through to source invoice, contract clause, and calculation."],
    ],
    free: "Upload 3 contracts and 50 invoices per month. See what does not match.",
    paid: "£1.00 per invoice validated. Unlimited contracts.",
    paidPro: "£0.65 per invoice at volume (5,000+/month).",
  },
  {
    id: "requests", icon: "search", name: "Strata | Requests", short: "Requests",
    tag: "Calculates the answer. Does not just find the documents.",
    headline: "Stop spending days compiling answers that already exist in your data.",
    desc: "Your FOI officer emails finance. Finance searches the GL. Someone builds a spreadsheet. Days later, you have an answer you cannot fully audit. Strata queries validated data, scans across source systems, calculates the answer, and returns it with a complete evidence chain.",
    features: [
      ["Calculated answers from validated data", "Financial queries answered from data the platform has already validated. Audited figures with full evidence chain."],
      ["Multi-source scanning", "Searches SharePoint, OneDrive, email, spreadsheets, and your operational systems simultaneously."],
      ["Three-tier progressive scanning", "Triage filters irrelevant documents before deep processing. Cost estimated before the scan begins."],
      ["Statutory deadline management", "FOI, SAR, Right to Delete. 20-day tracking. Overdue alerts. Disclosure log."],
    ],
    free: "Full case management forever. Unlimited requests. Log, track, route, report.",
    paid: "£45 per AI-powered response.",
    paidPro: "£35 per response at volume (50+/month).",
  },
  {
    id: "charges", icon: "home", name: "Strata | Charges", short: "Charges",
    tag: "Reads the lease. Not the spreadsheet.",
    headline: "Stop allocating charges that contradict the lease.",
    desc: "Your service charge calculations are only as accurate as the rules someone typed into a spreadsheet. Strata reads the actual lease, extracts the actual terms, and checks every charge against them.",
    features: [
      ["Charges calculated from the lease", "Extracts apportionment methodology: floor area percentage, equal shares, or ownership proportion. Calculates from the source."],
      ["Compliance issue detection", "Surfaces VAT charged on exempt services, flat-rate charges that should be staircased, overcharges exceeding maximums."],
      ["Section 20 threshold monitoring", "Flags when cumulative qualifying works costs breach £250 per leaseholder."],
      ["Tribunal defence evidence pack", "Generates the complete chain: lease extract, cost data, apportionment calculation, legislative checks, full audit trail."],
    ],
    free: "Upload a lease. See the extracted terms. Verify against your current schedule.",
    paid: "Per-calculation pricing. Contact us for details.",
    paidPro: "",
  },
  {
    id: "rents", icon: "scale", name: "Strata | Rents", short: "Rents",
    tag: "Legislation-aware. Jurisdiction-aware. Every dwelling.",
    headline: "Rent calculations verified against legislation that changes every year.",
    desc: "Rent legislation differs by jurisdiction and changes regularly. The English Rent Standard and the Welsh Rent Standard 2026\u20132036 impose different caps, methodologies, and reporting requirements. Strata applies the full legislative hierarchy for your jurisdiction to every dwelling, every year, with complete auditability.",
    features: [
      ["Full legislative hierarchy", "English Rent Standard and Welsh Rent Standard handled as distinct legislative paths. Every dwelling determined against the correct chain."],
      ["Policy-aware calculation", "Your board's own policy decisions applied correctly: convergence rules, bedsit caps, Rowntree Methodology."],
      ["DD amendment processing", "Tenant categorisation by payment frequency and benefit type. Automated output files."],
      ["Regulatory protection", "Every calculation auditable against the legislation in force at the time. Full version history."],
    ],
    free: "Upload your rent schedule. We will show where calculations diverge from legislation.",
    paid: "Per-calculation pricing. Contact us for details.",
    paidPro: "",
  },
];

export const SECTORS = [
  { icon: "building", name: "Housing associations", desc: "Our first market. Regulatory pressure is highest, the compliance gap is widest.", stat: "1,300+ providers in England", link: "ha" },
  { icon: "users", name: "Local authorities", desc: "339 councils in England and Wales. Contract management across every department. FOI at scale.", stat: "339 councils", link: "la" },
  { icon: "shield", name: "NHS trusts", desc: "217 trusts. Supplier contracts. PFI compliance. FOI volumes growing 19% year-on-year.", stat: "~217 trusts", link: "nhs" },
  { icon: "briefcase", name: "Commercial", desc: "Indirect spend is where the scrutiny is lowest and the leakage is largest. Every invoice checked against the contract.", stat: "UK indirect spend, every sector", link: "commercial" },
];

export const HA_PRODUCTS = [
  {
    id: "contracts", icon: "shield", name: "Strata | Contracts", haName: "VFM Assurance",
    headline: "The RSH demands evidence-based assurance. This is it.",
    desc: "The March 2026 VFM Report changed the game. Narrative is no longer enough. The regulator wants to see the system that produces assurance, not just the assurance statement. Strata reads every contract your organisation holds, extracts every clause, rate, and obligation, then validates every invoice against them. Named accountability on every payment. A complete audit trail for your board and the regulator.",
    points: [
      "Every invoice validated against the governing contract at clause level",
      "Named sign-off workflow: approve, override with explanation, or reject",
      "Overcharge and missed recharge detection with automated evidence packs",
      "Board-ready VFM reports mapped to each of the 10 RSH Standard clauses",
      "Configurable VFM targets with trend tracking and improvement plans",
      "Peer benchmarking against the RSH sector dataset",
    ],
  },
  {
    id: "requests", icon: "search", name: "Strata | Requests", haName: "FOI & Information Governance",
    headline: "STAIRs takes effect October 2026. The FOI Extension Bill is in Parliament. Request volumes are about to increase.",
    desc: "Your information team spends days searching SharePoint, emailing departments, and assembling spreadsheets. When requests are monthly, that is manageable. When they become weekly, it is not. Strata gives you free case management forever and AI-powered response generation when you need it.",
    points: [
      "Full case management free forever: log, track, route, report, disclosure log",
      "AI-powered scanning across SharePoint, OneDrive, email, and your HMS",
      "Calculated answers from validated compliance data, not manual compilation",
      "Three request types in one register: FOI, SAR, Right to Delete",
      "Built for STAIRs and the FOI Extension Bill",
    ],
  },
  {
    id: "charges", icon: "home", name: "Strata | Charges", haName: "Service Charge Assurance",
    headline: "RICS 4th Edition now explicitly includes housing associations. The Leasehold and Freehold Reform Act strengthens leaseholder rights.",
    desc: "Your service charge calculations sit in a spreadsheet built by someone who left. Nobody has checked them against the lease since. When a leaseholder challenges at tribunal, the evidence trail does not exist. Strata reads the actual lease, extracts the actual terms, and checks every charge against them.",
    points: [
      "Charges calculated from the lease, not inherited spreadsheet assumptions",
      "Section 20 threshold monitoring before charges become challengeable",
      "Compliance detection: VAT errors, wrong apportionments, excluded units",
      "Tribunal defence evidence pack generated automatically",
    ],
  },
  {
    id: "rents", icon: "scale", name: "Strata | Rents", haName: "Rent Compliance",
    headline: "Runnymede was downgraded to C4 for rent-setting errors. The evidence that prevents a downgrade.",
    desc: "English and Welsh rent legislation impose different requirements. Your board's own policies add another layer. A single error across thousands of dwellings creates regulatory exposure that is invisible until the regulator finds it.",
    points: [
      "English Rent Standard and Welsh Rent Standard as distinct legislative paths",
      "Board policy overlays: convergence rules, bedsit caps, Rowntree Methodology",
      "DD amendment processing: weeks reduced to hours",
      "Every dwelling's calculation auditable against the legislation in force at the time",
    ],
  },
];

export const RESOURCES = [
  {
    cat: "Reports", icon: "book",
    title: "Achieving 100% Compliance Against the RSH VFM Standard",
    desc: "Every enforceable clause mapped. Platform-versus-governance split. Board checklists with named owners and frequencies. Written for directors of finance and company secretaries at housing associations.",
    audience: "Housing associations", action: "Request the report", link: "start",
  },
];