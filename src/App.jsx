import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import StrataContractsLP from './ap'

const submitForm = async formData => {
  // { first:"",last:"",email:"",org:"",role:"",interest:"",msg:"" }
  await fetch('https://strata-crm-rho.vercel.app/api/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_CRM_API}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: formData.first,
      last_name: formData.last,
      email: formData.email,
      job_title: `${formData.role} @ ${formData.org}`,
      // organisation_id: formData.org,
      source: 'Website',
      notes: formData.msg
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  return true
}

/* ═══ DESIGN TOKENS ═══ */
const T="#0D7377",TL="#14A3A8",N="#0F1B2D",BG="#080E18";
// Unified dark palette — no more jarring white sections
const S1=N, S2="#111D30", S3="#0C1524"; // subtle alternating dark tones
// const useSc=()=>useCallback(id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}),[]);
function useFI(){const r=useRef(null);const[v,sV]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)sV(true)},{threshold:0.06});if(r.current)o.observe(r.current);return()=>o.disconnect()},[]);return[r,v]}
function F({children,d=0}){const[r,v]=useFI();return<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(28px)",transition:`opacity 0.8s ease ${d}s, transform 0.8s ease ${d}s`}}>{children}</div>}

function Ic({d}){
  const p={width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};
  const icons={
    shield:<svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    home:<svg {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    scale:<svg {...p}><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/><path d="M16 21h5v-5"/><path d="M8 21H3v-5"/></svg>,
    search:<svg {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    arrow:<svg {...p} width={16} height={16}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    menu:<svg {...p} stroke="#fff"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x:<svg {...p} stroke="#fff"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    building:<svg {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01"/></svg>,
    users:<svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    zap:<svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    lock:<svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    layers:<svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    clock:<svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    download:<svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    book:<svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  };
  return icons[d]||null;
}

const CSS=`*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
@media(min-width:769px){.mo{display:none!important}}
@media(max-width:768px){.dk{display:none!important}.mo{display:flex!important}}
@media(max-width:640px){.g2{grid-template-columns:1fr!important}.g3{grid-template-columns:1fr!important}.g4{grid-template-columns:1fr 1fr!important}.hh{font-size:32px!important}.sr{gap:20px!important}.pg{grid-template-columns:1fr!important}}
@media(max-width:440px){.g4{grid-template-columns:1fr!important}.fw{flex-direction:column!important;align-items:flex-start!important}}
input[type="text"],input[type="email"],textarea,select{font-family:'Roboto',sans-serif;font-size:14px;padding:11px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:6px;background:rgba(255,255,255,0.04);color:#fff;width:100%;transition:border-color 0.2s}
input:focus,textarea:focus,select:focus{outline:none;border-color:${TL}}
input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.3)}
select option{background:${N};color:#fff}`;

const os="'Oswald',sans-serif",rb="'Roboto',sans-serif";
const lbl=(c=TL)=>({fontFamily:rb,fontSize:11,color:c,fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:16});
const hd=(c="#fff",sz="clamp(24px,4vw,40px)")=>({fontFamily:os,fontWeight:500,fontSize:sz,color:c,lineHeight:1.12,marginBottom:12,textTransform:"uppercase"});
const sub=(c="rgba(255,255,255,0.6)")=>({fontFamily:rb,fontSize:16,fontWeight:300,color:c,lineHeight:1.8,maxWidth:620,marginBottom:48});
const cd={background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:10};
const btn=(bg=T)=>({fontFamily:rb,fontSize:14,fontWeight:500,background:bg,color:"#fff",border:"none",borderRadius:6,padding:"14px 28px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,boxShadow:`0 0 50px ${bg}30`,transition:"transform 0.2s"});
const hov=e=>e.currentTarget.style.transform="translateY(-2px)";
const unhov=e=>e.currentTarget.style.transform="none";
const bw=(c="rgba(255,255,255,0.6)")=>({fontFamily:rb,fontSize:16,fontWeight:300,color:c,lineHeight:1.9});
const tx=(c="rgba(255,255,255,0.55)")=>({fontFamily:rb,fontSize:13,fontWeight:300,color:c,lineHeight:1.75});

/* ═══ PRODUCT DATA ═══ */
const products=[
  {id:"contracts",icon:"shield",name:"Strata | Contracts",short:"Contracts",
    tag:"Reads your contracts. Enforces every invoice.",
    headline:"Stop paying invoices that don't match the contract.",
    desc:"Every organisation signs contracts. Almost none systematically check whether they are being charged correctly. Strata reads every contract, extracts every clause, rate, and obligation, then validates every invoice against them. Continuously. Automatically. With a complete evidence trail.",
    features:[
      ["Invoice-to-contract validation","Every invoice checked against the governing contract for rate, scope, supplier identity, and VAT treatment. Every flag traced to the specific clause."],
      ["Overcharge and missed recharge detection","Identifies invoices that exceed contract terms and costs that should have been recharged to a third party. Evidence packs generated automatically."],
      ["Supplier performance scoring","Compliance scores across your supplier base. Which contractors consistently invoice within terms? Which trigger flags?"],
      ["Real-time compliance dashboard","Savings quantified in real time. Drill through to source invoice, contract clause, and calculation."],
    ],
    free:"Upload 3 contracts and 50 invoices per month. See what does not match.",
    paid:"£1.00 per invoice validated. Unlimited contracts.",
    paidPro:"£0.65 per invoice at volume (5,000+/month).",
  },
  {id:"requests",icon:"search",name:"Strata | Requests",short:"Requests",
    tag:"Calculates the answer. Does not just find the documents.",
    headline:"Stop spending days compiling answers that already exist in your data.",
    desc:"Your FOI officer emails finance. Finance searches the GL. Someone builds a spreadsheet. Days later, you have an answer you cannot fully audit. Strata queries validated data, scans across source systems, calculates the answer, and returns it with a complete evidence chain.",
    features:[
      ["Calculated answers from validated data","Financial queries answered from data the platform has already validated. Audited figures with full evidence chain."],
      ["Multi-source scanning","Searches SharePoint, OneDrive, email, spreadsheets, and your operational systems simultaneously."],
      ["Three-tier progressive scanning","Triage filters irrelevant documents before deep processing. Cost estimated before the scan begins."],
      ["Statutory deadline management","FOI, SAR, Right to Delete. 20-day tracking. Overdue alerts. Disclosure log."],
    ],
    free:"Full case management forever. Unlimited requests. Log, track, route, report.",
    paid:"£45 per AI-powered response.",
    paidPro:"£35 per response at volume (50+/month).",
  },
  {id:"charges",icon:"home",name:"Strata | Charges",short:"Charges",
    tag:"Reads the lease. Not the spreadsheet.",
    headline:"Stop allocating charges that contradict the lease.",
    desc:"Your service charge calculations are only as accurate as the rules someone typed into a spreadsheet. Strata reads the actual lease, extracts the actual terms, and checks every charge against them.",
    features:[
      ["Charges calculated from the lease","Extracts apportionment methodology: floor area percentage, equal shares, or ownership proportion. Calculates from the source."],
      ["Compliance issue detection","Surfaces VAT charged on exempt services, flat-rate charges that should be staircased, overcharges exceeding maximums."],
      ["Section 20 threshold monitoring","Flags when cumulative qualifying works costs breach £250 per leaseholder."],
      ["Tribunal defence evidence pack","Generates the complete chain: lease extract, cost data, apportionment calculation, legislative checks, full audit trail."],
    ],
    free:"Upload a lease. See the extracted terms. Verify against your current schedule.",
    paid:"Per-calculation pricing. Contact us for details.",
    paidPro:"",
  },
  {id:"rents",icon:"scale",name:"Strata | Rents",short:"Rents",
    tag:"Legislation-aware. Jurisdiction-aware. Every dwelling.",
    headline:"Rent calculations verified against legislation that changes every year.",
    desc:"Rent legislation differs by jurisdiction and changes regularly. The English Rent Standard and the Welsh Rent Standard 2026\u20132036 impose different caps, methodologies, and reporting requirements. Strata applies the full legislative hierarchy for your jurisdiction to every dwelling, every year, with complete auditability.",
    features:[
      ["Full legislative hierarchy","English Rent Standard and Welsh Rent Standard handled as distinct legislative paths. Every dwelling determined against the correct chain."],
      ["Policy-aware calculation","Your board's own policy decisions applied correctly: convergence rules, bedsit caps, Rowntree Methodology."],
      ["DD amendment processing","Tenant categorisation by payment frequency and benefit type. Automated output files."],
      ["Regulatory protection","Every calculation auditable against the legislation in force at the time. Full version history."],
    ],
    free:"Upload your rent schedule. We will show where calculations diverge from legislation.",
    paid:"Per-calculation pricing. Contact us for details.",
    paidPro:"",
  },
];

const sectors=[
  {icon:"building",name:"Housing associations",desc:"Our first market. The sector where regulatory pressure is highest and the compliance gap widest.",stat:"1,300+ providers in England",link:"ha"},
  {icon:"users",name:"Local authorities",desc:"339 councils in England and Wales. Contract management across every department. FOI at scale.",stat:"339 councils",link:"la"},
  {icon:"shield",name:"NHS trusts",desc:"217 trusts. Supplier contracts. PFI compliance. FOI volumes growing 19% year-on-year.",stat:"~217 trusts",link:"nhs"},
  {icon:"shield",name:"Police forces",desc:"43 forces in England and Wales. High FOI volumes. Contractor spend validation.",stat:"43 forces",link:"police"},
  {icon:"building",name:"Universities",desc:"Facilities contracts, estates maintenance, FOI, student accommodation service charges.",stat:"~140 institutions",link:"uni"},
  {icon:"users",name:"Arms-length bodies",desc:"Fire authorities, national parks, NDPBs, regulators.",stat:"~500 bodies",link:"alb"},
];

/* ═══ HA PAGE DATA ═══ */
const haProducts=[
  {id:"contracts",icon:"shield",name:"Strata | Contracts",haName:"VFM Assurance",
    headline:"The RSH demands evidence-based assurance. This is it.",
    desc:"The March 2026 VFM Report changed the game. Narrative is no longer enough. The regulator wants to see the system that produces assurance, not just the assurance statement. Strata reads every contract your organisation holds, extracts every clause, rate, and obligation, then validates every invoice against them. Named accountability on every payment. A complete audit trail for your board and the regulator.",
    points:[
      "Every invoice validated against the governing contract at clause level",
      "Named sign-off workflow: approve, override with explanation, or reject",
      "Overcharge and missed recharge detection with automated evidence packs",
      "Board-ready VFM reports mapped to each of the 10 RSH Standard clauses",
      "Configurable VFM targets with trend tracking and improvement plans",
      "Peer benchmarking against the RSH sector dataset",
    ]},
  {id:"requests",icon:"search",name:"Strata | Requests",haName:"FOI & Information Governance",
    headline:"STAIRs takes effect October 2026. The FOI Extension Bill is in Parliament. Request volumes are about to increase.",
    desc:"Your information team spends days searching SharePoint, emailing departments, and assembling spreadsheets. When requests are monthly, that is manageable. When they become weekly, it is not. Strata gives you free case management forever and AI-powered response generation when you need it.",
    points:[
      "Full case management free forever: log, track, route, report, disclosure log",
      "AI-powered scanning across SharePoint, OneDrive, email, and your HMS",
      "Calculated answers from validated compliance data, not manual compilation",
      "Three request types in one register: FOI, SAR, Right to Delete",
      "Built for STAIRs and the FOI Extension Bill",
    ]},
  {id:"charges",icon:"home",name:"Strata | Charges",haName:"Service Charge Assurance",
    headline:"RICS 4th Edition now explicitly includes housing associations. The Leasehold and Freehold Reform Act strengthens leaseholder rights.",
    desc:"Your service charge calculations sit in a spreadsheet built by someone who left. Nobody has checked them against the lease since. When a leaseholder challenges at tribunal, the evidence trail does not exist. Strata reads the actual lease, extracts the actual terms, and checks every charge against them.",
    points:[
      "Charges calculated from the lease, not inherited spreadsheet assumptions",
      "Section 20 threshold monitoring before charges become challengeable",
      "Compliance detection: VAT errors, wrong apportionments, excluded units",
      "Tribunal defence evidence pack generated automatically",
    ]},
  {id:"rents",icon:"scale",name:"Strata | Rents",haName:"Rent Compliance",
    headline:"Runnymede was downgraded to C4 for rent-setting errors. The evidence that prevents a downgrade.",
    desc:"English and Welsh rent legislation impose different requirements. Your board's own policies add another layer. A single error across thousands of dwellings creates regulatory exposure that is invisible until the regulator finds it.",
    points:[
      "English Rent Standard and Welsh Rent Standard as distinct legislative paths",
      "Board policy overlays: convergence rules, bedsit caps, Rowntree Methodology",
      "DD amendment processing: weeks reduced to hours",
      "Every dwelling's calculation auditable against the legislation in force at the time",
    ]},
];

/* ═══ NAV ═══ */
function Nav({setPage}){
  const[sc,setSc]=useState(false);const[op,setOp]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
  const links=[
    {l:"Platform",a:()=>setPage("platform")},{l:"Sectors",a:()=>setPage("sectors")},
    {l:"Pricing",a:()=>setPage("pricing")},{l:"About",a:()=>setPage("about")},
    
  ];
  const nv=a=>{a();setOp(false);};
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:sc||op?"rgba(8,14,24,0.97)":"transparent",backdropFilter:sc||op?"blur(14px)":"none",borderBottom:sc?"1px solid rgba(255,255,255,0.05)":"none",transition:"all 0.35s"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:60,padding:"0 24px"}}>
        <div style={{cursor:"pointer",display:"flex",alignItems:"baseline",gap:5}} onClick={()=>{setPage("home");window.scrollTo({top:0,behavior:"smooth"})}}>
          <span style={{fontFamily:os,fontWeight:500,fontSize:19,color:"#fff",letterSpacing:"0.06em"}}>STRATA</span>
          <span style={{fontFamily:os,fontWeight:500,fontSize:19,color:TL,letterSpacing:"0.06em"}}>AI</span>
        </div>
        <div className="dk" style={{display:"flex",gap:24,alignItems:"center"}}>
          {links.map(l=><button key={l.l} onClick={()=>nv(l.a)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.55)",fontFamily:rb,fontSize:12,fontWeight:400,cursor:"pointer",padding:"4px 0",letterSpacing:"0.03em",transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.55)"}>{l.l}</button>)}
          <button onClick={()=>nv(()=>setPage("start"))} style={{fontFamily:rb,fontSize:12,fontWeight:500,background:T,color:"#fff",border:"none",borderRadius:5,padding:"8px 18px",cursor:"pointer"}}>Get started free</button>
        </div>
        <button className="mo" onClick={()=>setOp(!op)} style={{background:"none",border:"none",cursor:"pointer",padding:4,display:"none",alignItems:"center"}}>{op?<Ic d="x"/>:<Ic d="menu"/>}</button>
      </div>
      {op&&<div className="mo" style={{padding:"0 24px 20px",display:"none",flexDirection:"column"}}>
        {links.map(l=><button key={l.l} onClick={()=>nv(l.a)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.8)",fontFamily:rb,fontSize:15,cursor:"pointer",padding:"14px 0",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>{l.l}</button>)}
        <button onClick={()=>nv(()=>setPage("start"))} style={{fontFamily:rb,fontSize:15,fontWeight:500,background:T,color:"#fff",border:"none",borderRadius:6,padding:"14px 24px",cursor:"pointer",marginTop:12}}>Get started free</button>
      </div>}
    </nav>
  );
}

/* ═══ HOME ═══ */
function Home({setPage}){
  return(<>
    {/* Hero */}
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(170deg,${BG} 0%,${S1} 40%,${S2} 100%)`,position:"relative",overflow:"hidden",padding:"120px 24px 80px"}}>
      <div style={{position:"absolute",inset:0,opacity:0.02,backgroundImage:"radial-gradient(rgba(255,255,255,0.5) 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
      <div style={{position:"absolute",top:"-20%",right:"-10%",width:600,height:600,background:`radial-gradient(circle,${T}10 0%,transparent 60%)`,borderRadius:"50%",filter:"blur(80px)"}}/>
      <div style={{maxWidth:840,textAlign:"center",position:"relative",zIndex:1}}>
        <F><p style={lbl(TL)}>Built for UK housing associations and public sector organisations</p></F>
        <F d={0.1}><h1 className="hh" style={{fontFamily:os,fontWeight:500,fontSize:"clamp(34px,6.5vw,62px)",color:"#fff",lineHeight:1.06,marginBottom:20,textTransform:"uppercase"}}>We read your documents.<br/><span style={{color:TL}}>Then enforce every rule inside them.</span></h1></F>
        <F d={0.15}><p style={{fontFamily:rb,fontSize:"clamp(16px,1.8vw,20px)",fontWeight:400,color:"rgba(255,255,255,0.9)",lineHeight:1.6,maxWidth:560,margin:"0 auto 20px"}}>So every invoice, charge, and decision your organisation makes is provably correct.</p></F>
        <F d={0.2}>
          <p style={{fontFamily:rb,fontSize:"clamp(14px,1.5vw,16px)",fontWeight:300,color:"rgba(255,255,255,0.55)",lineHeight:1.8,maxWidth:580,margin:"0 auto 12px"}}>Contracts. Leases. Policies. Legislation. Strata reads them, extracts every obligation, and validates every downstream transaction across thousands of contracts and millions of invoices.</p>
          <p style={{fontFamily:rb,fontSize:"clamp(14px,1.4vw,16px)",fontWeight:400,color:"rgba(255,255,255,0.75)",lineHeight:1.7,maxWidth:500,margin:"0 auto 40px"}}>Deterministic. Auditable. No system replacement. Live in weeks.</p>
        </F>
        <F d={0.3}>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button>
            <button onClick={()=>setPage("platform")} style={{fontFamily:rb,fontSize:14,fontWeight:400,background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.8)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:6,padding:"14px 24px",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.12)"}>See the platform</button>
          </div>
        </F>
        <F d={0.4}>
          <div className="sr" style={{marginTop:56,display:"flex",justifyContent:"center",gap:48,flexWrap:"wrap"}}>
            {[["Every","invoice checked"],["Every","FOI request answered"],["Every","charge validated"],["Weeks","to go live"]].map(([v,l])=>(
              <div key={l} style={{textAlign:"center"}}><div style={{fontFamily:os,fontSize:"clamp(22px,3vw,32px)",color:TL,fontWeight:400}}>{v}</div><div style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.4)",marginTop:4,letterSpacing:"0.04em",textTransform:"uppercase",maxWidth:120}}>{l}</div></div>
            ))}
          </div>
          <p style={{fontFamily:rb,fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.4)",textAlign:"center",marginTop:32,cursor:"pointer"}} onClick={()=>document.getElementById("calc")?.scrollIntoView({behavior:"smooth"})}>The average organisation loses 5.4% of contract value. <span style={{color:TL,textDecoration:"underline"}}>See what that means for you {"\u2193"}</span></p>
        </F>
      </div>
    </section>

    {/* Founding insight */}
    <section style={{background:S2,padding:"clamp(60px,8vw,90px) 24px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:800,background:`radial-gradient(circle,${T}06 0%,transparent 60%)`,borderRadius:"50%",filter:"blur(80px)"}}/>
      <div style={{maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
        <F><p style={lbl(TL)}>The founding insight</p><h2 style={{...hd("#fff","clamp(22px,3.5vw,34px)"),lineHeight:1.2,marginBottom:28}}>Every organisation runs on documents nobody has time to read.</h2></F>
        <F d={0.1}>
          <p style={{...bw(),marginBottom:20,maxWidth:620,margin:"0 auto 20px"}}>Contracts. Leases. Policies. Legislation. These documents contain the rules that should govern every financial decision your organisation makes. But they are long, complex, and locked inside PDFs. So decisions get made without reference to them.</p>
          <p style={{fontFamily:rb,fontSize:15,fontWeight:500,color:"#fff",lineHeight:1.7,maxWidth:620,margin:"0 auto 20px"}}>Strata reads these documents once. Extracts every rule. Converts them into structured, executable logic. Stores that logic permanently.</p>
          <p style={{...bw(),marginBottom:20,maxWidth:620,margin:"0 auto 20px"}}>From that point on, every transaction, calculation, and query is validated against those rules with a complete audit trail back to the source clause, on the source page, of the source document.</p>
          <p style={{fontFamily:rb,fontSize:"clamp(16px,1.7vw,20px)",fontWeight:500,color:TL,lineHeight:1.6,maxWidth:540,margin:"0 auto"}}>Not AI guessing at an answer. Extracted knowledge, confirmed by your experts, executed by machines.</p>
        </F>
      </div>
    </section>

    {/* Problem */}
    <section style={{background:S3,padding:"clamp(72px,10vw,110px) 24px"}}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>The problem</p><h2 style={hd()}>Your decisions are disconnected from the documents that should govern them.</h2></F>
        <F d={0.1}><p style={{...bw(),marginBottom:28}}>Your organisation holds contracts, leases, policies, and legislation that define how money should be spent, how charges should be calculated, how questions should be answered, and how rents should be set. But none of your operational systems can read those documents.</p></F>
        <F d={0.15}>
          <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:36}}>
            {[
              ["Invoices paid without checking the contract","Your AP team approves against PO amounts because nobody has time to verify rates and terms against the governing contract."],
              ["FOI requests answered by searching, not knowing","Your information team spends days emailing departments and assembling spreadsheets. The answers often already exist in validated data."],
              ["Service charges calculated from inherited spreadsheets","The formulas were set up by someone who left. Nobody has checked them against the lease since."],
              ["Rent calculations disconnected from legislation","English and Welsh rent legislation impose different requirements. A single error across thousands of dwellings creates invisible regulatory exposure."],
            ].map(([t,d],i)=>(
              <div key={i} style={{...cd,padding:"20px 22px"}}><p style={{fontFamily:rb,fontSize:14,fontWeight:500,color:"#fff",lineHeight:1.45,marginBottom:8}}>{t}</p><p style={tx()}>{d}</p></div>
            ))}
          </div>
        </F>
        <F d={0.25}><p style={{fontFamily:rb,fontSize:16,fontWeight:400,color:TL,lineHeight:1.9,textAlign:"center",maxWidth:560,margin:"0 auto"}}>Four symptoms. One cause. The documents that should govern your decisions are not connected to the systems that execute them.</p></F>
      </div>
    </section>

    {/* Platform overview */}
    <section style={{background:S1,padding:"clamp(72px,10vw,110px) 24px"}}>
      <div style={{maxWidth:960,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>The platform</p><h2 style={hd()}>Four modules. One platform. Start with one.</h2><p style={sub()}>Every module is powered by the same patent-pending architecture. Read the document once. Extract every rule. Validate everything against them. Start with the module that matches your most urgent need and expand as you are ready.</p></F>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {products.map((p,i)=>(
            <F key={p.id} d={i*0.08}>
              <div style={{...cd,padding:"clamp(24px,3vw,32px)",height:"100%",cursor:"pointer"}} onClick={()=>setPage("platform")}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <div style={{color:TL}}><Ic d={p.icon}/></div>
                  <span style={{fontFamily:os,fontSize:16,fontWeight:500,color:"#fff",textTransform:"uppercase",letterSpacing:"0.03em"}}>{p.name}</span>
                </div>
                <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginBottom:10}}>{p.tag}</p>
                <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.55)",lineHeight:1.75}}>{p.headline}</p>
                <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginTop:12,display:"flex",alignItems:"center",gap:4}}>Learn more <Ic d="arrow"/></p>
              </div>
            </F>
          ))}
        </div>
        <F d={0.4}><div style={{textAlign:"center",marginTop:36}}><button onClick={()=>setPage("platform")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Explore the platform <Ic d="arrow"/></button></div></F>
      </div>
    </section>

    {/* Technology */}
    <section style={{background:S2,padding:"clamp(72px,10vw,110px) 24px"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <F><p style={lbl(TL)}>The technology</p><h2 style={hd()}>Read once. Enforce forever.</h2><p style={{fontFamily:rb,fontSize:13,fontWeight:400,color:"rgba(255,255,255,0.4)",marginBottom:28}}>Powered by Recursive Logic Caching (patent pending: US 63/969,838)</p></F>
        <F d={0.1}>
          <div className="g3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,textAlign:"left",marginBottom:32}}>
            {[
              ["Read once","AI reads the document once, whether it is a contract, lease, policy, or piece of legislation. Extracts every rule into structured, executable logic.","zap"],
              ["Cache permanently","Extracted rules stored in a knowledge graph. Three-tier memory hierarchy. The document is never re-read. The knowledge persists.","layers"],
              ["Execute deterministically","Every transaction validated against cached rules with sub-millisecond response. No AI in the execution step. Repeatable. Auditable. Defensible.","lock"],
            ].map(([t,d,ic],i)=>(
              <F key={t} d={i*0.08}>
                <div style={{...cd,padding:"clamp(22px,2.5vw,28px)"}}>
                  <div style={{color:TL,marginBottom:10}}><Ic d={ic}/></div>
                  <h4 style={{fontFamily:os,fontSize:16,color:"#fff",fontWeight:500,marginBottom:10,textTransform:"uppercase"}}>{t}</h4>
                  <p style={tx()}>{d}</p>
                </div>
              </F>
            ))}
          </div>
        </F>
        <F d={0.3}>
          <div style={{...cd,padding:"24px 28px",textAlign:"left",borderLeft:`4px solid ${TL}`}}>
            <p style={{...bw(),fontSize:14}}>The extraction step uses AI to read unstructured documents and convert them into structured logic. Your domain experts confirm the extracted rules. From that point on, no AI is involved in the execution. Validation is deterministic. Every result traces back to a confirmed rule, which traces back to a specific clause on a specific page of a specific document.</p>
            <p style={{fontFamily:rb,fontSize:12,fontWeight:400,color:"rgba(255,255,255,0.35)",marginTop:16}}>Patent pending: US 63/969,838. Recursive Logic Caching{"\u2122"}.</p>
          </div>
        </F>
      </div>
    </section>

    {/* Implementation */}
    <section style={{background:S3,padding:"clamp(72px,10vw,110px) 24px"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <F><p style={lbl(TL)}>Implementation</p><h2 style={hd()}>Live in weeks. Not months.</h2></F>
        <F d={0.1}>
          <div className="g3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,textAlign:"left"}}>
            {[
              ["No system replacement","Your existing systems stay. Strata connects through standard data exports and APIs. No migration. No disruption.","building"],
              ["Weeks to go live","Upload contracts. Rules extracted and cached permanently. Every subsequent check is instant. Knowledge stays when your team changes.","clock"],
              ["Your data stays yours","Sensitive data stays inside your perimeter. Our scanning agent runs within your firewall. Only structured metadata crosses the boundary.","lock"],
            ].map(([t,d,ic],i)=>(
              <F key={t} d={i*0.08}>
                <div style={{...cd,padding:"clamp(22px,2.5vw,28px)"}}>
                  <div style={{color:TL,marginBottom:10}}><Ic d={ic}/></div>
                  <h4 style={{fontFamily:os,fontSize:16,color:"#fff",fontWeight:500,marginBottom:10,textTransform:"uppercase"}}>{t}</h4>
                  <p style={tx()}>{d}</p>
                </div>
              </F>
            ))}
          </div>
        </F>
      </div>
    </section>

    {/* Calculator */}
    <Calculator setPage={setPage} bg={S1}/>

    {/* CTA */}
    <section style={{background:S2,padding:"clamp(60px,8vw,80px) 24px",textAlign:"center"}}>
      <F>
        <h2 style={{...hd(TL,"clamp(22px,3.5vw,34px)"),marginBottom:20}}>Start free. See what you are missing.</h2>
        <p style={{fontFamily:rb,fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.75,maxWidth:500,margin:"0 auto 28px"}}>Upload your contracts and invoices. The platform shows you what does not match. Free forever on the starter plan.</p>
        <button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button>
      </F>
    </section>
  </>);
}

/* ═══ CALCULATOR ═══ */
function Calculator({setPage,bg=S1}){
  const[spend,setSpend]=useState(8000000);const[inv,setInv]=useState(2000);const[leak,setLeak]=useState(5.4);
  const[foiReqs,setFoiReqs]=useState(40);const[foiHrs,setFoiHrs]=useState(5);
  const leakage=Math.round(spend*(leak/100));const foiCost=Math.round(foiReqs*12*foiHrs*25);
  const fmt=n=>n>=1000000?"£"+(n/1000000).toFixed(1)+"m":"£"+Math.round(n).toLocaleString();
  const sl={fontFamily:rb,fontSize:13,color:"rgba(255,255,255,0.5)",minWidth:120};
  const sv={fontFamily:os,fontSize:14,fontWeight:500,minWidth:70,textAlign:"right",color:"#fff"};
  const sr={display:"flex",alignItems:"center",gap:10,marginBottom:12};
  return(
    <section id="calc" style={{background:bg,padding:"clamp(72px,10vw,110px) 24px"}}>
      <div style={{maxWidth:900,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>What are you losing?</p><h2 style={hd()}>Calculate your exposure.</h2><p style={sub()}>Drag the sliders to match your organisation.</p></F>
        <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          <F d={0.1}>
            <div style={{...cd,padding:"clamp(22px,3vw,28px)"}}>
              <p style={{fontFamily:os,fontSize:14,fontWeight:500,color:TL,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:20}}>Contract leakage</p>
              <div style={sr}><span style={sl}>Annual contract spend</span><input type="range" min={500000} max={50000000} step={500000} value={spend} onChange={e=>setSpend(+e.target.value)} style={{flex:1}}/><span style={sv}>{fmt(spend)}</span></div>
              <div style={sr}><span style={sl}>Monthly invoices</span><input type="range" min={100} max={20000} step={100} value={inv} onChange={e=>setInv(+e.target.value)} style={{flex:1}}/><span style={sv}>{inv.toLocaleString()}</span></div>
              <div style={sr}><span style={sl}>Leakage rate</span><input type="range" min={2} max={12} step={0.2} value={leak} onChange={e=>setLeak(+e.target.value)} style={{flex:1}}/><span style={sv}>{leak.toFixed(1)}%</span></div>
              <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",marginTop:20,paddingTop:20,textAlign:"center"}}>
                <div style={{fontFamily:os,fontSize:"clamp(28px,4vw,42px)",fontWeight:400,color:"#E24B4A"}}>{fmt(leakage)}</div>
                <div style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.4)",marginTop:4,textTransform:"uppercase"}}>Estimated annual leakage</div>
                <p style={{fontFamily:rb,fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.35)",marginTop:12,lineHeight:1.7}}>Based on WorldCC research: the average organisation loses 5.4% of contract value.</p>
              </div>
            </div>
          </F>
          <F d={0.2}>
            <div style={{...cd,padding:"clamp(22px,3vw,28px)"}}>
              <p style={{fontFamily:os,fontSize:14,fontWeight:500,color:TL,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:20}}>FOI processing cost</p>
              <div style={sr}><span style={sl}>Monthly FOI requests</span><input type="range" min={5} max={200} step={5} value={foiReqs} onChange={e=>setFoiReqs(+e.target.value)} style={{flex:1}}/><span style={sv}>{foiReqs}</span></div>
              <div style={sr}><span style={sl}>Hours per request</span><input type="range" min={2} max={12} step={0.5} value={foiHrs} onChange={e=>setFoiHrs(+e.target.value)} style={{flex:1}}/><span style={sv}>{foiHrs.toFixed(1)}</span></div>
              <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",marginTop:52,paddingTop:20,textAlign:"center"}}>
                <div style={{fontFamily:os,fontSize:"clamp(28px,4vw,42px)",fontWeight:400,color:"#E24B4A"}}>{fmt(foiCost)}</div>
                <div style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.4)",marginTop:4,textTransform:"uppercase"}}>Annual staff cost on FOI</div>
                <p style={{fontFamily:rb,fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.35)",marginTop:12,lineHeight:1.7}}>Staff time at the statutory rate of £25/hour. Average request takes 5.3 hours.</p>
              </div>
            </div>
          </F>
        </div>
        <F d={0.3}><div style={{textAlign:"center",marginTop:28}}>
          <p style={{fontFamily:rb,fontSize:14,fontWeight:400,color:"rgba(255,255,255,0.5)",marginBottom:16}}>Want to see the actual leakage in your contracts?</p>
          <button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Upload them free <Ic d="arrow"/></button>
        </div></F>
      </div>
    </section>
  );
}

/* ═══ PLATFORM PAGE ═══ */
function PlatformPage({setPage}){
  const[sel,setSel]=useState(0);const p=products[sel];
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <F><p style={lbl(TL)}>The platform</p><h2 style={hd()}>Four modules. One platform. Start with one.</h2><p style={sub()}>Every module is powered by Recursive Logic Caching. Read the document once. Extract every rule. Validate everything against them, continuously, with 100% auditability.</p></F>
          <F d={0.1}>
            <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:8}}>
              {products.map((pr,i)=>(
                <button key={pr.id} onClick={()=>setSel(i)} style={{background:sel===i?"rgba(20,163,168,0.12)":"rgba(255,255,255,0.02)",border:sel===i?`1.5px solid ${TL}`:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"clamp(16px,2vw,22px) 12px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:8,transition:"all 0.25s",textAlign:"center"}} onMouseEnter={e=>{if(sel!==i)e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"}} onMouseLeave={e=>{if(sel!==i)e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}}>
                  <div style={{color:sel===i?TL:"rgba(255,255,255,0.5)"}}><Ic d={pr.icon}/></div>
                  <span style={{fontFamily:os,fontSize:"clamp(11px,1.2vw,13px)",fontWeight:500,color:sel===i?"#fff":"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.04em",lineHeight:1.25}}>{pr.short}</span>
                </button>
              ))}
            </div>
          </F>
          <div key={sel}><F d={0.15}>
            <div style={{...cd,padding:"clamp(28px,4vw,40px) clamp(24px,3vw,36px)"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}><div style={{color:TL}}><Ic d={p.icon}/></div><span style={{fontFamily:os,fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,color:"#fff",textTransform:"uppercase"}}>{p.name}</span></div>
              <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginBottom:16}}>{p.tag}</p>
              <p style={{fontFamily:rb,fontSize:"clamp(16px,1.6vw,20px)",fontWeight:400,color:"#fff",lineHeight:1.5,marginBottom:8}}>{p.headline}</p>
              <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.8,marginBottom:28,maxWidth:640}}>{p.desc}</p>
              <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                {p.features.map(([t,d],i)=>(<div key={i} style={{padding:"18px 20px",background:"rgba(255,255,255,0.02)",borderRadius:8,borderLeft:`3px solid ${TL}`}}><p style={{fontFamily:rb,fontSize:13,fontWeight:500,color:"#fff",lineHeight:1.45,marginBottom:8}}>{t}</p><p style={{fontFamily:rb,fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.55)",lineHeight:1.7}}>{d}</p></div>))}
              </div>
              <div style={{marginTop:24,display:"grid",gridTemplateColumns:p.paidPro?"1fr 1fr 1fr":"1fr 1fr",gap:12}}>
                <div style={{background:"rgba(20,163,168,0.06)",border:`1px solid rgba(20,163,168,0.2)`,borderRadius:8,padding:"16px 18px"}}><p style={{fontFamily:rb,fontSize:11,fontWeight:500,color:TL,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Free forever</p><p style={tx()}>{p.free}</p></div>
                <div style={{...cd,padding:"16px 18px"}}><p style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"#fff",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Standard</p><p style={tx()}>{p.paid}</p></div>
                {p.paidPro&&<div style={{...cd,padding:"16px 18px"}}><p style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"#fff",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Pro</p><p style={tx()}>{p.paidPro}</p></div>}
              </div>
            </div>
          </F></div>
          <F d={0.25}>
            <div 
              style={{textAlign:"center",marginTop:36}}
            >
                <button 
                  onClick={()=>setPage('start')} style={btn()} 
                  onMouseEnter={hov} 
                  onMouseLeave={unhov}
                >Get started free <Ic d="arrow"/></button></div></F>
        </div>
      </div>
    </section>
  );
}

/* ═══ SECTORS PAGE ═══ */
function SectorsPage({setPage}){
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <F><p style={lbl(TL)}>Who we help</p><h2 style={hd()}>One platform. Every public sector vertical.</h2><p style={sub()}>The architecture is sector-agnostic. The domain intelligence layer is what changes. Same engine. Same knowledge graph. Same per-unit pricing.</p></F>
          <div className="g3" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
            {sectors.map((s,i)=>(
              <F key={s.name} d={i*0.06}>
                <div style={{...cd,padding:"clamp(22px,2.5vw,28px)",height:"100%",position:"relative",cursor:s.link?"pointer":"default"}} onClick={()=>s.link&&setPage(s.link)}>
                  
                  <div style={{color:TL,marginBottom:12}}><Ic d={s.icon}/></div>
                  <h4 style={{fontFamily:os,fontSize:16,color:"#fff",fontWeight:500,marginBottom:8,textTransform:"uppercase"}}>{s.name}</h4>
                  <p style={{...tx(),marginBottom:12}}>{s.desc}</p>
                  <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL}}>{s.stat}</p>
                  {s.link&&<p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginTop:12,display:"flex",alignItems:"center",gap:4}}>View sector detail <Ic d="arrow"/></p>}
                </div>
              </F>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ HOUSING ASSOCIATIONS PAGE ═══ */
function HAPage({setPage}){
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>

          {/* Header */}
          <F><p style={lbl(TL)}>Housing associations</p><h2 style={hd()}>Built for the regulatory reality you face today.</h2>
            <p style={{...bw(),maxWidth:640,marginBottom:20}}>The RSH March 2026 VFM Report changed the compliance landscape. Ten housing associations have been downgraded on governance in the last 18 months. Every downgrade cited the same pattern: insufficient internal controls, weak oversight, and lack of evidence-based assurance.</p>
            <p style={{...bw(),maxWidth:640,marginBottom:48}}>Strata addresses every product-deliverable requirement of the RSH Value for Money Standard. The platform delivers 70% through automation. Our governance guide covers the remaining 30%. Together: 100% of the Standard addressed. No gaps.</p>
          </F>

          {/* Free guide CTA */}
          <F d={0.1}>
            <div style={{background:"rgba(20,163,168,0.06)",border:`1px solid rgba(20,163,168,0.2)`,borderRadius:10,padding:"28px 32px",marginBottom:48,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
              <div style={{flex:1,minWidth:260}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{color:TL}}><Ic d="book"/></div><p style={{fontFamily:os,fontSize:16,fontWeight:500,color:"#fff",textTransform:"uppercase"}}>Free guide</p></div>
                <p style={{fontFamily:rb,fontSize:15,fontWeight:400,color:"#fff",lineHeight:1.5,marginBottom:4}}>Achieving 100% Compliance Against the RSH VFM Standard</p>
                <p style={tx()}>Every enforceable clause mapped. Platform vs governance split. Board checklists with named owners and frequencies.</p>
              </div>
              <button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}><Ic d="download"/> Download the guide</button>
            </div>
          </F>

          {/* Products contextualised for HAs */}
          {haProducts.map((p,i)=>(
            <F key={p.id} d={0.1+i*0.06}>
              <div style={{...cd,padding:"clamp(28px,4vw,36px)",marginBottom:20,cursor:"pointer"}} onClick={()=>setPage("platform")}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <div style={{color:TL}}><Ic d={p.icon}/></div>
                  <span style={{fontFamily:os,fontSize:"clamp(16px,2vw,20px)",fontWeight:500,color:"#fff",textTransform:"uppercase"}}>{p.name}</span>
                  <span style={{fontFamily:rb,fontSize:12,fontWeight:400,color:"rgba(255,255,255,0.4)",marginLeft:4}}>{p.haName}</span>
                </div>
                <p style={{fontFamily:rb,fontSize:15,fontWeight:400,color:TL,lineHeight:1.5,marginBottom:12}}>{p.headline}</p>
                <p style={{...bw(),fontSize:14,marginBottom:20,maxWidth:700}}>{p.desc}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {p.points.map((pt,j)=>(
                    <div key={j} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                      <span style={{color:TL,fontSize:14,lineHeight:"20px",flexShrink:0}}>{"\u2713"}</span>
                      <span style={{fontFamily:rb,fontSize:13,color:"rgba(255,255,255,0.6)",lineHeight:1.5}}>{pt}</span>
                    </div>
                  ))}
                </div>
                <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginTop:16,display:"flex",alignItems:"center",gap:4}}>View full product detail <Ic d="arrow"/></p>
              </div>
            </F>
          ))}

          {/* Regulatory timeline */}
          <F d={0.4}>
            <div style={{marginTop:28}}>
              <p style={{fontFamily:os,fontSize:14,fontWeight:500,color:TL,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:16}}>Regulatory timeline</p>
              {[
                ["Mar 2026","RSH VFM Report","Explicit demand for evidence-based assurance."],
                ["7 Apr 2026","RICS Service Charge Code, 4th Edition","First edition to explicitly include housing associations."],
                ["Apr 2026","Welsh Rent and Service Charge Standard 2026\u20132036","Distinct CPI+1% cap and affordability framework."],
                ["Oct 2026","RSH STAIRs requirements","Tenant information obligations. Request volumes will increase."],
                ["In Parliament","FOI Extension Bill","Extends Freedom of Information obligations to housing associations."],
                ["Phased","Leasehold and Freehold Reform Act 2024","Enhanced leaseholder rights being commenced in stages."],
              ].map(([date,t,d],i)=>(
                <div key={t} style={{display:"flex",gap:20,padding:"14px 0",borderBottom:i<5?"1px solid rgba(255,255,255,0.05)":"none",alignItems:"flex-start"}}>
                  <div style={{fontFamily:os,fontSize:13,fontWeight:500,color:TL,minWidth:100,flexShrink:0}}>{date}</div>
                  <div><p style={{fontFamily:rb,fontSize:14,color:"#fff",fontWeight:500,marginBottom:3}}>{t}</p><p style={tx()}>{d}</p></div>
                </div>
              ))}
            </div>
          </F>

          <F d={0.5}><div style={{textAlign:"center",marginTop:40}}><button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button></div></F>
        </div>
      </div>
    </section>
  );
}

/* ═══ PRICING PAGE ═══ */
function PricingPage({setPage}){
  const tier=t=>(
    <div style={{...cd,padding:"clamp(22px,2.5vw,28px)",border:t.ft?`2px solid ${TL}`:"1px solid rgba(255,255,255,0.08)"}}>
      {t.ft&&<div style={{fontFamily:rb,fontSize:10,fontWeight:500,color:TL,marginBottom:8,letterSpacing:"0.08em",textTransform:"uppercase"}}>Most popular</div>}
      <div style={{fontFamily:os,fontSize:14,color:"rgba(255,255,255,0.5)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.06em"}}>{t.name}</div>
      <div style={{display:"flex",alignItems:"baseline",gap:4,margin:"8px 0 4px"}}><span style={{fontFamily:os,fontSize:32,color:"#fff",fontWeight:500}}>{t.price}</span><span style={{fontFamily:rb,fontSize:13,color:"rgba(255,255,255,0.4)"}}>{t.unit}</span></div>
      <p style={{fontFamily:rb,fontSize:12,color:"rgba(255,255,255,0.4)",marginBottom:4}}>{t.note}</p>
      {t.setup&&<p style={{fontFamily:rb,fontSize:12,color:TL,marginBottom:16}}>{t.setup}</p>}
      {t.features.map(f=><div key={f} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color:TL,fontSize:14,lineHeight:"20px",flexShrink:0}}>{"\u2713"}</span><span style={{fontFamily:rb,fontSize:13,color:"rgba(255,255,255,0.6)",lineHeight:1.5}}>{f}</span></div>)}
    </div>
  );
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}><div style={{maxWidth:1000,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>Pricing</p><h2 style={hd()}>Pay per unit of work. Keep 100% of the savings.</h2><p style={sub()}>No percentage of savings. No annual licence. No per-user fees. Every product has a clear unit, a clear price, and a free tier that is yours to keep.</p></F>
        <F d={0.1}><p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16}}>Strata | Contracts</p>
          <div className="pg" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,marginBottom:40}}>
            {tier({name:"Free",price:"£0",unit:"/month",note:"3 contracts. 50 invoices/month.",setup:"£0 setup",features:["Self-service onboarding","Upload contracts and invoices","Overcharge detection with clause reference","Basic compliance dashboard","Single user"]})}
            {tier({name:"Standard",price:"£1.00",unit:"/invoice",note:"Min 500/month (£500/mo)",setup:"£1,500 one-time setup",ft:true,features:["Unlimited contracts","Unlimited invoices","Email, API, or AP system feed","Overcharge + missed recharge detection","Supplier performance scoring","Automated compliance reports","Evidence packs for disputes","Up to 10 users"]})}
            {tier({name:"Pro",price:"£0.65",unit:"/invoice",note:"Min 5,000/month (£3,250/mo)",setup:"£2,500 one-time setup",features:["Everything in Standard","Industry benchmarking","API integration with AP/ERP","Predictive spend analytics","Unlimited users","Priority support"]})}
          </div>
        </F>
        <F d={0.2}><p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16}}>Strata | Requests</p>
          <div className="pg" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,marginBottom:40}}>
            {tier({name:"Free",price:"£0",unit:"/month",note:"Full case management. Unlimited requests.",setup:"£0 setup",features:["Log, track, route, report","FOI, SAR, Right to Delete","20-day deadline management","Disclosure log","Unlimited users"]})}
            {tier({name:"Standard",price:"£45",unit:"/AI response",note:"Min 10/month (£450/mo)",setup:"£1,500 one-time setup",ft:true,features:["Everything in Free, plus:","Scanning agent (inside your firewall)","SharePoint, OneDrive, Outlook scanning","Three-tier progressive scanning","AI-powered document discovery","PII detection and auto-redaction","Calculated answers from validated data"]})}
            {tier({name:"Pro",price:"£35",unit:"/AI response",note:"Min 50/month (£1,750/mo)",setup:"£2,500 one-time setup",features:["Everything in Standard","HMS/ERP database connector","Network file share scanning","Local LLM option","Custom connectors","Priority support"]})}
          </div>
        </F>
        <F d={0.3}><div style={{...cd,padding:"28px 32px",marginBottom:40}}><p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:12}}>Strata | Charges and Strata | Rents</p><p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.8}}>Per-calculation pricing. Contact us for details.</p></div></F>
        <F d={0.35}><div style={{textAlign:"center"}}><button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button><p style={{fontFamily:rb,fontSize:13,fontWeight:300,color:"rgba(255,255,255,0.4)",marginTop:16}}>No credit card. No time limit. The free tier is yours to keep.</p></div></F>
      </div></div>
      <Calculator setPage={setPage} bg={S2}/>
    </section>
  );
}

/* ═══ ABOUT PAGE ═══ */
function AboutPage({setPage}){
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}><div style={{maxWidth:720,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>About us</p><h2 style={hd()}>Built by people who understand your world.</h2></F>
        <F d={0.1}><div style={{...cd,padding:"clamp(28px,4vw,36px)",marginBottom:20}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}><div style={{width:48,height:48,borderRadius:"50%",background:"rgba(20,163,168,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:os,fontSize:18,fontWeight:500,color:TL}}>NG</div><div><p style={{fontFamily:os,fontSize:18,color:"#fff",fontWeight:500,textTransform:"uppercase"}}>Neal Gandhi</p><p style={{fontFamily:rb,fontSize:13,color:TL}}>CEO</p></div></div>
          <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.85}}>Neal has been building and scaling technology companies through every major platform shift for almost four decades, from the early days of personal computing through the internet era to AI. He co-founded Xplora and Attenda, founded Questers, and created TPXimpact, growing it to over £80m revenue serving clients including MHCLG, DESNZ, CDDO, NHS Sussex, and Manchester City Council. He has spent six years working alongside the finance directors, compliance leads, and CIOs who run UK public sector organisations. Strata came from what he saw in those engagements: every organisation signs contracts, and almost none systematically check whether they are being charged correctly. The technology to change that did not exist. So he built it.</p>
        </div></F>
        <F d={0.15}><div style={{...cd,padding:"clamp(28px,4vw,36px)",marginBottom:20}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}><div style={{width:48,height:48,borderRadius:"50%",background:"rgba(20,163,168,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:os,fontSize:18,fontWeight:500,color:TL}}>SA</div><div><p style={{fontFamily:os,fontSize:18,color:"#fff",fontWeight:500,textTransform:"uppercase"}}>Stuart Arthur</p><p style={{fontFamily:rb,fontSize:13,color:TL}}>CTO</p></div></div>
          <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.85}}>Stuart was Head of Digital and Data for the UK Civil Service and CTO at Monmouthshire County Council. He has led technology strategy at the heart of government and delivered digital transformation at the coalface of local authority operations. He built and sold his own digital services company, and has been at the forefront of technology in public service delivery since the early internet. He knows what public sector systems look like from the inside: how data flows, where it breaks, and what it takes to build something that actually works within those constraints.</p>
        </div></F>
        <F d={0.2}><div style={{background:"rgba(20,163,168,0.06)",border:`1px solid rgba(20,163,168,0.2)`,borderRadius:10,padding:"clamp(28px,4vw,36px)",marginBottom:32}}>
          <p style={{fontFamily:os,fontSize:16,color:TL,fontWeight:500,textTransform:"uppercase",marginBottom:12}}>Together</p>
          <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.85}}>Neal and Stuart are co-inventors on the patent application that underpins Strata. Neal brought the commercial insight and the founding concept. Stuart brought the engineering depth. Together they developed the Recursive Logic Caching architecture into a system that uses AI to read your documents and extract the rules, then validates every transaction deterministically with no AI in the execution step. Every answer traceable to a clause, on a page, in a document. The result is a platform built by people who have sat in your meetings, worked with your systems, and understand why the current tools do not do what you need them to do.</p>
        </div></F>
        <F d={0.25}><div style={{...cd,padding:"24px 28px"}}><p style={{fontFamily:rb,fontSize:13,fontWeight:300,color:"rgba(255,255,255,0.5)",lineHeight:1.8}}>WeAreStrata Limited is registered in England and Wales (No. 16974757). Our core technology is protected by US Patent Application 63/969,838 (Recursive Logic Caching). 4 Usk Vale Court, Pontypool, Wales, NP4 8AS.</p></div></F>
        <F d={0.3}><div style={{textAlign:"center",marginTop:36}}><button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button></div></F>
      </div></div>
    </section>
  );
}

/* ═══ GET STARTED ═══ */
function StartPage(){
  const[done,setDone]=useState(false);
  const[f,sF]=useState({ first:"",last:"",email:"",org:"",role:"",interest:"",msg:"" });
  const u=(k,v)=>sF(p=>({...p,[k]:v}));const ok=f.first&&f.last&&f.email&&f.org;
  return(
    <section style={{background:`linear-gradient(170deg,${BG} 0%,${S1} 100%)`,minHeight:"100vh",paddingTop:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"10%",right:"-5%",width:400,height:400,background:`radial-gradient(circle,${T}08 0%,transparent 60%)`,borderRadius:"50%",filter:"blur(60px)"}}/>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}><div style={{maxWidth:600,margin:"0 auto",position:"relative",zIndex:1}}>
        <F><div style={{textAlign:"center",marginBottom:36}}>
          <h2 style={{fontFamily:os,fontWeight:500,fontSize:"clamp(26px,4.5vw,44px)",color:"#fff",lineHeight:1.1,marginBottom:16,textTransform:"uppercase"}}>Start free. See what you are missing.</h2>
          <p style={{fontFamily:rb,fontSize:16,fontWeight:300,color:"rgba(255,255,255,0.6)",lineHeight:1.75,marginBottom:8}}>Upload your contracts and invoices. The platform shows you what does not match. No time limit. Upgrade when you are ready.</p>
          <p style={{fontFamily:rb,fontSize:14,fontWeight:300,color:"rgba(255,255,255,0.45)"}}>Free forever on the starter plan.</p>
        </div></F>
        {done?(
          <F><div style={{background:"rgba(20,163,168,0.08)",border:`1px solid rgba(20,163,168,0.25)`,borderRadius:8,padding:"44px 32px",textAlign:"center"}}>
            <div style={{color:TL,fontSize:36,marginBottom:16}}>{"\u2713"}</div>
            <h3 style={{fontFamily:os,fontSize:24,color:"#fff",fontWeight:500,marginBottom:12,textTransform:"uppercase"}}>Welcome to Strata</h3>
            <p style={{fontFamily:rb,fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.7}}>We will be in touch within 48 hours to get you set up.</p>
          </div></F>
        ):(
          <F d={0.1}>
          <div style={{...cd,padding:"clamp(24px,3vw,32px)"}}>
            <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div>
                <label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>First Name *</label>
                <input type="text" placeholder="First name" value={f.name} onChange={e=>u("first",e.target.value)}/>
              </div>
              <div>
                <label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>Surname *</label>
                <input type="text" placeholder="Surname" value={f.name} onChange={e=>u("last",e.target.value)}/>
              </div>
              <div>
                <label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>Email *</label>
                <input type="email" placeholder="you@organisation.org.uk" value={f.email} onChange={e=>u("email",e.target.value)}/>
              </div>
              <div>
                <label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>Organisation *</label>
                <input type="text" placeholder="Your organisation" value={f.org} onChange={e=>u("org",e.target.value)}/>
              </div>
            </div>
            <div style={{marginTop:12}}>
              <label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>Role</label>
              <input type="text" placeholder="e.g. Director of Finance" value={f.role} onChange={e=>u("role",e.target.value)} />
            </div>
            {/* <div style={{marginTop:12}}><label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>Which product interests you most?</label>
              <select value={f.interest} onChange={e=>u("interest",e.target.value)}><option value="">Select</option><option value="contracts">Strata | Contracts</option><option value="requests">Strata | Requests</option><option value="charges">Strata | Charges</option><option value="rents">Strata | Rents</option><option value="all">Full platform</option></select>
            </div> */}
            <div style={{marginTop:12}}><label style={{fontFamily:rb,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.6)",display:"block",marginBottom:6}}>What is your biggest compliance challenge?</label>
              <textarea rows={3} placeholder="Optional, but helps us tailor your setup" value={f.msg} onChange={e=>u("msg",e.target.value)} style={{resize:"vertical"}}/>
            </div>
            <button 
              onClick={()=>ok&&submitForm(f)&&setDone(true)} 
              disabled={!ok} 
              style={{fontFamily:rb,fontSize:15,fontWeight:500,background:T,color:"#fff",border:"none",borderRadius:6,padding:"14px 32px",cursor:ok?"pointer":"default",marginTop:18,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8,boxShadow:`0 0 40px ${T}25`,opacity:ok?1:0.4}} 
              onMouseEnter={e=>ok&&(e.currentTarget.style.transform="translateY(-2px)")} 
              onMouseLeave={e=>e.currentTarget.style.transform="none"}
            >Get started free <Ic d="arrow"/></button>
          </div></F>
        )}
        <F d={0.25}><div style={{marginTop:44,display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap"}}>
          {[["Email","hello@wearestrata.ai"],["Web","wearestrata.ai"]].map(([l,v])=>(<div key={l} style={{textAlign:"center"}}><div style={{fontFamily:rb,fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.4)",marginBottom:3}}>{l}</div><div style={{fontFamily:rb,fontSize:14,fontWeight:400,color:TL}}>{v}</div></div>))}
        </div></F>
      </div></div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function Footer({setPage}){
  return(
    <footer style={{background:BG,padding:"40px 24px 28px",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
      <div style={{maxWidth:960,margin:"0 auto"}} data-type={import.meta.env.VITE_APP_TEST}>
        <div className="g4" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:32,marginBottom:32}}>
          <div>
            <div style={{display:"flex",alignItems:"baseline",gap:5,marginBottom:10}}><span style={{fontFamily:os,fontWeight:500,fontSize:16,color:"#fff",letterSpacing:"0.06em"}}>STRATA</span><span style={{fontFamily:os,fontWeight:500,fontSize:16,color:TL,letterSpacing:"0.06em"}}>AI</span></div>
            <p style={{fontFamily:rb,fontSize:12,fontWeight:300,color:"rgba(255,255,255,0.35)",lineHeight:1.7}}>Compliance intelligence for the<br/>UK public sector.</p>
          </div>
          <div>
            <p style={{fontFamily:os,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12}}>Platform</p>
            {products.map(p=><p key={p.id} style={{fontFamily:rb,fontSize:12,color:"rgba(255,255,255,0.4)",marginBottom:6,cursor:"pointer"}} onClick={()=>setPage("platform")}>{p.name}</p>)}
          </div>
          <div>
            <p style={{fontFamily:os,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12}}>Company</p>
            {[["About","about"],["Pricing","pricing"],["Sectors","sectors"],["Housing associations","ha"]].map(([l,pg])=><p key={pg} style={{fontFamily:rb,fontSize:12,color:"rgba(255,255,255,0.4)",marginBottom:6,cursor:"pointer"}} onClick={()=>setPage(pg)}>{l}</p>)}
          </div>
          <div>
            <p style={{fontFamily:os,fontSize:11,fontWeight:500,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12}}>Contact</p>
            <p style={{fontFamily:rb,fontSize:12,color:TL,marginBottom:6}}>hello@wearestrata.ai</p>
            <p style={{fontFamily:rb,fontSize:12,color:"rgba(255,255,255,0.4)",marginBottom:6,cursor:"pointer"}} onClick={()=>setPage("start")}>Contact form</p>
            <p style={{fontFamily:rb,fontSize:12,color:"rgba(255,255,255,0.4)"}}>wearestrata.ai</p>
          </div>
        </div>
        <div className="fw" style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
          <p style={{fontFamily:rb,fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.3)"}}>
          <a href="/privacy-policy.docx" title="privacy-policy">privacy policy</a>
          &nbsp;
          <a href="/terms-of-use.docx" title="terms-of-use">terms of use</a>
          &nbsp;
          <a href="/cookie-policy.docx" title="cookie-policy">cookie policy</a>
          </p>
          
        </div>
        <div className="fw" style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
          <p style={{fontFamily:rb,fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.3)"}}>WeAreStrata Limited. Registered in England and Wales, No. 16974757. 4 Usk Vale Court, Pontypool, Wales, NP4 8AS.</p>
          <p style={{fontFamily:rb,fontSize:11,fontWeight:300,color:"rgba(255,255,255,0.3)"}}>Patent Pending: US 63/969,838 Recursive Logic Caching{"\u2122"}</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══ VERTICAL PAGE TEMPLATE ═══ */
function VerticalPage({setPage,title,headline,intro,introP2,guideTitle,guideDesc,vProducts,timeline}){
  return(
    <section style={{background:S1,minHeight:"100vh",paddingTop:80}}>
      <div style={{padding:"clamp(40px,6vw,80px) 24px"}}><div style={{maxWidth:900,margin:"0 auto"}}>
        <F><p style={lbl(TL)}>{title}</p><h2 style={hd()}>{headline}</h2>
          <p style={{...bw(),maxWidth:640,marginBottom:20}}>{intro}</p>
          {introP2&&<p style={{...bw(),maxWidth:640,marginBottom:48}}>{introP2}</p>}
        </F>
        {guideTitle&&<F d={0.1}>
          <div style={{background:"rgba(20,163,168,0.06)",border:`1px solid rgba(20,163,168,0.2)`,borderRadius:10,padding:"28px 32px",marginBottom:48,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
            <div style={{flex:1,minWidth:260}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{color:TL}}><Ic d="book"/></div><p style={{fontFamily:os,fontSize:16,fontWeight:500,color:"#fff",textTransform:"uppercase"}}>Free guide</p></div>
              <p style={{fontFamily:rb,fontSize:15,fontWeight:400,color:"#fff",lineHeight:1.5,marginBottom:4}}>{guideTitle}</p>
              <p style={tx()}>{guideDesc}</p>
            </div>
            <button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}><Ic d="download"/> Download the guide</button>
          </div>
        </F>}
        {vProducts.map((p,i)=>(
          <F key={p.id} d={0.1+i*0.06}>
            <div style={{...cd,padding:"clamp(28px,4vw,36px)",marginBottom:20,cursor:"pointer"}} onClick={()=>setPage("platform")}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                <div style={{color:TL}}><Ic d={p.icon}/></div>
                <span style={{fontFamily:os,fontSize:"clamp(16px,2vw,20px)",fontWeight:500,color:"#fff",textTransform:"uppercase"}}>{p.name}</span>
                <span style={{fontFamily:rb,fontSize:12,fontWeight:400,color:"rgba(255,255,255,0.4)",marginLeft:4}}>{p.context}</span>
              </div>
              <p style={{fontFamily:rb,fontSize:15,fontWeight:400,color:TL,lineHeight:1.5,marginBottom:12}}>{p.headline}</p>
              <p style={{...bw(),fontSize:14,marginBottom:20,maxWidth:700}}>{p.desc}</p>
              <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {p.points.map((pt,j)=>(
                  <div key={j} style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                    <span style={{color:TL,fontSize:14,lineHeight:"20px",flexShrink:0}}>{"\u2713"}</span>
                    <span style={{fontFamily:rb,fontSize:13,color:"rgba(255,255,255,0.6)",lineHeight:1.5}}>{pt}</span>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:rb,fontSize:12,fontWeight:500,color:TL,marginTop:16,display:"flex",alignItems:"center",gap:4}}>View full product detail <Ic d="arrow"/></p>
            </div>
          </F>
        ))}
        {timeline&&<F d={0.4}><div style={{marginTop:28}}>
          <p style={{fontFamily:os,fontSize:14,fontWeight:500,color:TL,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:16}}>Regulatory context</p>
          {timeline.map(([date,t,d],i)=>(
            <div key={t} style={{display:"flex",gap:20,padding:"14px 0",borderBottom:i<timeline.length-1?"1px solid rgba(255,255,255,0.05)":"none",alignItems:"flex-start"}}>
              <div style={{fontFamily:os,fontSize:13,fontWeight:500,color:TL,minWidth:100,flexShrink:0}}>{date}</div>
              <div><p style={{fontFamily:rb,fontSize:14,color:"#fff",fontWeight:500,marginBottom:3}}>{t}</p><p style={tx()}>{d}</p></div>
            </div>
          ))}
        </div></F>}
        <F d={0.5}><div style={{textAlign:"center",marginTop:40}}><button onClick={()=>setPage("start")} style={btn()} onMouseEnter={hov} onMouseLeave={unhov}>Get started free <Ic d="arrow"/></button></div></F>
      </div></div>
    </section>
  );
}

/* ═══ LOCAL AUTHORITIES PAGE ═══ */
function LAPage({setPage}){
  return <VerticalPage setPage={setPage}
    title="Local authorities"
    headline="339 councils. Thousands of contracts. A local audit system in crisis."
    intro="England's local audit backlog is the worst in decades. Hundreds of councils have unaudited accounts. The government has published a non-compliance list and launched a five-year programme to rebuild assurance. The Procurement Act 2023 introduced the Procurement Compliance Service with powers to investigate any procurement. Section 70 payment transparency obligations take effect April 2026."
    introP2="In this environment, demonstrating that every invoice matches the contract and every FOI request is answered within the statutory timeframe is not optional. It is the evidence that keeps your council off the non-compliance list."
    vProducts={[
      {id:"contracts",icon:"shield",name:"Strata | Contracts",context:"Contract management",
        headline:"The Procurement Act 2023 changed the rules. The Procurement Compliance Service is watching.",
        desc:"Councils manage hundreds of supplier contracts across every department. The Procurement Act 2023 introduced new transparency obligations and the Procurement Compliance Service with powers to investigate non-compliance. Section 70 requires publication of payment information on the central digital platform from April 2026. Strata validates every invoice against every contract, creating the audit trail the new regime demands.",
        points:["Every invoice validated against the governing contract at clause level","Automated evidence packs for audit and PCS enquiries","Supplier performance scoring across your entire contractor base","Section 70 payment transparency data generated automatically","Budget vs actuals comparison with variance analysis","Cross-departmental compliance dashboard for s151 officers"]},
      {id:"requests",icon:"search",name:"Strata | Requests",context:"FOI & information governance",
        headline:"Local authorities handle approximately 467,000 FOI requests per year across the sector. Volume is growing.",
        desc:"FOI is a significant operational cost for councils. Requests span every department, require coordination across teams, and carry a statutory 20-day deadline. The FOI Extension Bill will increase obligations further. Strata gives you free case management forever and AI-powered response generation when volume exceeds capacity.",
        points:["Full case management free forever: log, track, route, report","AI-powered scanning across SharePoint, email, and departmental systems","Calculated answers from validated financial data","Cross-departmental request routing with deadline tracking","Cost estimation before committing staff resource","Disclosure log and publication scheme management"]},
      {id:"charges",icon:"home",name:"Strata | Charges",context:"Council leaseholder service charges",
        headline:"Council leaseholders have the same rights as private leaseholders. The same tribunal exposure applies.",
        desc:"If your council has sold properties under Right to Buy, you have leaseholders. Those leaseholders pay service charges governed by the same legislation as private sector leaseholders. Section 20 consultation requirements apply. The RICS Service Charge Code 4th Edition applies. Tribunal challenges are increasing. Strata reads the lease and validates every charge.",
        points:["Charges calculated from the lease, not inherited spreadsheets","Section 20 threshold monitoring across your RTB portfolio","RICS 4th Edition compliance checking","Tribunal defence evidence packs generated automatically"]},
    ]}
    timeline={[
      ["Feb 2025","Procurement Act 2023 in force","New transparency obligations. Procurement Compliance Service operational."],
      ["Apr 2026","Section 70 payment transparency","Publication of payment information on central digital platform."],
      ["Apr 2026","Below-threshold contract notices","Mandatory registration for below-threshold procurements."],
      ["In Parliament","FOI Extension Bill","Extends FOI obligations. Request volumes will increase."],
      ["Ongoing","Local audit rebuild","Five-year programme. Non-compliance list published. Audited accounts backlog."],
    ]}
  />;
}

/* ═══ NHS PAGE ═══ */
function NHSPage({setPage}){
  return <VerticalPage setPage={setPage}
    title="NHS trusts"
    headline="217 trusts. £21.7bn in borrowings. FOI backlogs triggering ICO enforcement."
    intro="53% of NHS trusts reported a deficit in 2024/25. PFI obligations account for a significant share of long-term borrowings. The ICO conducted a deep-dive into NHS trust FOI compliance and found trusts with compliance rates as low as 33%. Practice recommendations and enforcement action followed. Procurement strategies at many trusts remain in draft."
    introP2="Strata helps NHS trusts validate supplier invoices against contract terms, respond to FOI requests within statutory deadlines, and create the audit trail that satisfies both the ICO and external auditors."
    vProducts={[
      {id:"contracts",icon:"shield",name:"Strata | Contracts",context:"Procurement compliance",
        headline:"Clinical supplies, FM, IT, estates, agency staff, PFI. Thousands of contracts. Nobody checks the invoices.",
        desc:"NHS trusts manage vast procurement portfolios spanning clinical consumables, pharmaceuticals, facilities management, IT services, estates maintenance, agency staffing, and PFI. Procurement strategies at many trusts remain in draft. The Procurement Act 2023 now applies in full. Invoices are approved against PO values because nobody has capacity to verify them against the contract terms. Strata reads every contract once and validates every invoice for the life of the agreement, whether it is a three-month agency contract or a thirty-year PFI.",
        points:["Every invoice validated against contract terms across all procurement categories","Clinical supplies, FM, IT, estates, agency staffing, and PFI covered equally","PFI payment mechanism enforcement including benchmarking and performance deductions","Supplier spend analysis across clinical and non-clinical categories","Procurement Act 2023 transparency compliance","Automated evidence packs for trust audit committees"]},
      {id:"requests",icon:"search",name:"Strata | Requests",context:"FOI & subject access",
        headline:"The ICO found NHS trusts with FOI backlogs of 20+ requests and compliance rates of 33%. Enforcement followed.",
        desc:"NHS trusts face growing FOI volumes without growing resources. The ICO's 2024/25 deep-dive into NHS trust FOI compliance resulted in practice recommendations and enforcement action for trusts with significant backlogs. Frontline clinical staff cannot be diverted to compile FOI responses. Strata automates the search, calculation, and assembly of responses so clinical staff can focus on care.",
        points:["Full case management free forever: log, track, route, report","AI-powered scanning that does not require frontline staff involvement","Calculated financial answers from validated procurement data","Subject access request handling with PII detection and auto-redaction","ICO-ready compliance reporting showing response times and volumes","Cost estimation to support Section 12 exemption decisions"]},
    ]}
    timeline={[
      ["2024/25","ICO NHS FOI deep-dive","Practice recommendations issued to trusts with significant backlogs."],
      ["Feb 2025","Procurement Act 2023","New transparency and compliance obligations for NHS procurement."],
      ["Apr 2026","Section 70 payment transparency","Trust payment data published on central platform."],
      ["Ongoing","NHS provider deficit","53% of trusts in deficit. Cost control and contract compliance under scrutiny."],
    ]}
  />;
}

/* ═══ POLICE PAGE ═══ */
function PolicePage({setPage}){
  return <VerticalPage setPage={setPage}
    title="Police forces"
    headline="43 forces. 2,000+ FOI requests per force per year. The ICO has audited and found gaps."
    intro="The ICO conducted nine consensual audits of ten police forces between July 2023 and March 2024, assessing FOI accountability, policies, procedures, and compliance monitoring. The findings revealed systemic weaknesses in FOI handling across the sector. Police procurement is increasingly collaborative, with seven-force and regional models, but contract compliance validation remains manual where it exists at all."
    introP2="Strata gives police forces free FOI case management and AI-powered response generation, alongside contract compliance validation for the multi-force procurement frameworks that govern the majority of supplier spend."
    vProducts={[
      {id:"contracts",icon:"shield",name:"Strata | Contracts",context:"Procurement compliance",
        headline:"Collaborative procurement means shared contracts across multiple forces. Nobody is checking the invoices.",
        desc:"Police forces increasingly procure through collaborative frameworks covering IT, fleet, forensics, custody, and facilities management. These contracts are complex, multi-force, and managed by stretched procurement teams. The Procurement Act 2023 applies in full. Strata validates invoices against the framework terms across all participating forces, creating a single compliance view.",
        points:["Invoice validation across multi-force framework contracts","Supplier performance scoring shared across collaborative partnerships","Automated evidence for HMICFRS VFM assessments","Procurement Act 2023 transparency compliance","Budget vs actuals tracking across force and regional budgets"]},
      {id:"requests",icon:"search",name:"Strata | Requests",context:"FOI & information governance",
        headline:"The ICO audited ten forces and found systemic FOI compliance weaknesses. Your force may be next.",
        desc:"Police forces handle over 2,000 FOI requests per year per force. Many involve sensitive operational information requiring careful exemption assessment. The ICO's audit programme found gaps in accountability, performance measurement, and compliance monitoring across the sector. Strata provides free case management with deadline tracking and AI-powered response generation for complex requests.",
        points:["Full case management free forever with 20-day deadline tracking","AI-powered scanning across force systems including records management","Exemption tracking and Section 12 cost estimation","Subject access request handling with PII auto-redaction","ICO audit-ready compliance dashboards","Multi-force request routing for collaborative arrangements"]},
    ]}
    timeline={[
      ["2023-24","ICO police FOI audits","Nine audits of ten forces. Systemic weaknesses identified."],
      ["Feb 2025","Procurement Act 2023","New obligations for police procurement including collaborative frameworks."],
      ["Ongoing","HMICFRS inspections","VFM assessments include procurement and contract management."],
      ["In Parliament","FOI Extension Bill","Will increase request volumes across all police forces."],
    ]}
  />;
}

/* ═══ UNIVERSITIES PAGE ═══ */
function UniPage({setPage}){
  return <VerticalPage setPage={setPage}
    title="Universities"
    headline="140+ institutions. Estates, facilities, student accommodation, and growing FOI scrutiny."
    intro="Universities manage complex estates and facilities contracts, student accommodation service charges, and growing FOI request volumes from students, journalists, and campaign groups. The Office for Students regulates registered providers. HESA reporting requirements demand accurate financial data. Procurement through consortia (SUPC, NEUPC, LUPC, NWUPC) means shared contracts that nobody validates at institutional level."
    vProducts={[
      {id:"contracts",icon:"shield",name:"Strata | Contracts",context:"Estates & FM contract compliance",
        headline:"Facilities management, catering, security, IT, and estates maintenance. Hundreds of contracts. Manual checking.",
        desc:"Universities hold large FM and estates portfolios managed through a mix of consortium frameworks and direct procurement. Contract values are significant. Invoice validation against these contracts is typically manual, sample-based, or non-existent. Strata reads the contracts and validates every invoice, creating a compliance layer across your entire supplier base.",
        points:["Invoice validation across FM, estates, catering, security, and IT contracts","Consortium framework compliance checking","Supplier performance scoring across your contractor base","Budget vs actuals tracking for OfS reporting","Automated evidence packs for audit committees"]},
      {id:"requests",icon:"search",name:"Strata | Requests",context:"FOI & subject access",
        headline:"Student journalists, campaign groups, and the media. FOI request volumes are growing and getting more complex.",
        desc:"Universities face FOI requests on topics from staff pay to investment decisions, research funding to estates plans. Subject access requests from students add another layer. Strata provides free case management and AI-powered response generation that reduces the burden on already stretched administrative teams.",
        points:["Full case management free forever with deadline tracking","AI-powered scanning across institutional systems","Subject access request handling with auto-redaction","Cost estimation for Section 12 exemption decisions","Disclosure log management"]},
      {id:"charges",icon:"home",name:"Strata | Charges",context:"Student accommodation charges",
        headline:"Purpose-built student accommodation. Tenancy agreements. Service charges that must be transparent and justified.",
        desc:"Where universities own or manage student accommodation with service charge elements, those charges must be calculated accurately and transparently. Strata reads the tenancy agreements and validates every charge against the terms.",
        points:["Charges calculated from tenancy agreements","Transparent apportionment methodology","Student-facing evidence of how charges are calculated","Audit trail for internal and external review"]},
    ]}
    timeline={[
      ["Feb 2025","Procurement Act 2023","Applies to university procurement including consortium frameworks."],
      ["Ongoing","OfS regulation","Registered providers subject to financial sustainability monitoring."],
      ["In Parliament","FOI Extension Bill","Will increase request volumes and obligations."],
    ]}
  />;
}

/* ═══ ALBS PAGE ═══ */
function ALBPage({setPage}){
  return <VerticalPage setPage={setPage}
    title="Arms-length bodies"
    headline="Fire authorities, national parks, NDPBs, regulators. Every public body with contracts or FOI obligations."
    intro="Arms-length bodies, non-departmental public bodies, fire and rescue authorities, national park authorities, and regulators all share the same compliance challenges: contracts that nobody validates, FOI requests that consume disproportionate staff time, and audit requirements that demand evidence they cannot easily produce. The Procurement Act 2023 applies. FOIA applies. The audit regime applies. The solutions are the same."
    vProducts={[
      {id:"contracts",icon:"shield",name:"Strata | Contracts",context:"Contract compliance",
        headline:"Smaller procurement teams. The same contract complexity. Less capacity to check.",
        desc:"ALBs typically have smaller procurement and finance teams than councils or NHS trusts but manage contracts of equivalent complexity. Outsourced services, FM contracts, IT agreements, and professional services all generate invoices that should be validated against terms. Strata makes validation viable regardless of team size.",
        points:["Invoice validation that does not require procurement team capacity","Supplier performance scoring across your contractor base","Automated compliance reports for sponsoring department oversight","Evidence packs for NAO and departmental audit","Budget vs actuals tracking"]},
      {id:"requests",icon:"search",name:"Strata | Requests",context:"FOI & information governance",
        headline:"Subject to FOIA. Often with a single FOI officer. Volume does not respect team size.",
        desc:"Many ALBs have a single person handling FOI alongside other responsibilities. Request volumes may be lower than councils but the complexity per request can be higher, particularly for NDPBs handling policy-sensitive information. Strata provides free case management and AI-powered response generation that makes a one-person team viable.",
        points:["Full case management free forever","AI-powered response generation for complex requests","Section 12 cost estimation","20-day deadline tracking with escalation alerts","Disclosure log and publication scheme management"]},
    ]}
    timeline={[
      ["Feb 2025","Procurement Act 2023","Applies to all contracting authorities including ALBs."],
      ["Apr 2026","Section 70 payment transparency","Publication obligations for public contract payments."],
      ["In Parliament","FOI Extension Bill","Extends obligations. Will increase volumes."],
      ["Ongoing","NAO and departmental oversight","Sponsoring departments require evidence of VFM."],
    ]}
  />;
}

/* ═══ APP ═══ */
export default function StrataAI(){
  // const go = useSc();
  
  // const[page,setPage] = useState("home");
  const setPage = useNavigate()
  
  // useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[page]);
  
  return(
    <div style={{background:S1,minHeight:"100vh",overflowX:"hidden"}}>
      <style>{CSS}</style>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      <Nav setPage={setPage}/>

      <Routes>
        <Route path="/*" element={<Home setPage={setPage} />} />
        <Route path="/platform" element={<PlatformPage setPage={setPage}/>} />
        <Route path="/sectors" element={<SectorsPage setPage={setPage}/>} />
        <Route path="/ha" element={<HAPage setPage={setPage}/>} />
        <Route path="/la" element={<LAPage setPage={setPage}/>} />
        <Route path="/nhs" element={<NHSPage setPage={setPage}/>} />
        <Route path="/police" element={<PolicePage setPage={setPage}/>} />
        <Route path="/uni" element={<UniPage setPage={setPage}/>} />
        <Route path="/alb" element={<ALBPage setPage={setPage}/>} />
        <Route path="/pricing" element={<PricingPage setPage={setPage}/>} />
        <Route path="/about" element={<AboutPage setPage={setPage}/>} />
        <Route path="/start" element={<StartPage/>} />
        <Route path="/ap" element={<StrataContractsLP setPage={setPage} />} />
      </Routes>
      
      <Footer setPage={setPage}/>
    </div>
  );
}