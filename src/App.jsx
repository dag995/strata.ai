import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home, PlatformPage, SectorsPage, HAPage, LAPage, NHSPage, CommercialPage, PricingPage, AboutPage, StartPage, ResourcesPage } from './components'
import { Nav, Footer } from "./components";

/* ═══ APP ═══ */
export default function StrataAI(){
  
  const setPage = useNavigate()
  const location = useLocation()

  useEffect(() => { 
    document.title = ({
      home: "Contract intelligence for organisations that must prove compliance",
      platform: "The platform",
      sectors: "Who we help",
      ha: "For housing associations",
      la: "For local authorities",
      nhs: "For NHS trusts",
      commercial: "For commercial organisations",
      pricing: "Pricing",
      resources: "Resources",
      about: "About us",
      start: "Get started",
    }[location.pathname.replace('/', '')] || "Contract intelligence") + "• Strata"
    window.scrollTo(0, 0);
  }, [location.pathname])


  return(
    <>
      <Nav setPage={setPage} />
      <Routes>
        <Route path="/*" element={<Home setPage={setPage} />} />
        <Route path="/platform" element={<PlatformPage setPage={setPage}/>} />
        <Route path="/sectors" element={<SectorsPage setPage={setPage}/>} />
        <Route path="/ha" element={<HAPage setPage={setPage}/>} />
        <Route path="/la" element={<LAPage setPage={setPage}/>} />
        <Route path="/nhs" element={<NHSPage setPage={setPage}/>} />
        <Route path="/commercial" element={<CommercialPage setPage={setPage}/>} />
        <Route path="/pricing" element={<PricingPage setPage={setPage}/>} />
        <Route path="/resources" element={<ResourcesPage setPage={setPage}/>} />
        <Route path="/about" element={<AboutPage setPage={setPage}/>} />
        <Route path="/start" element={<StartPage/>} />
      </Routes>
      <Footer setPage={setPage} />
    </>
  );
}