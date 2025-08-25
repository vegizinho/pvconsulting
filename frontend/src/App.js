import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import SpecialOffers from "./pages/SpecialOffers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Service routes */}
              <Route path="/gradevinski-injenjering" element={<ServiceDetail />} />
              <Route path="/usluge-projektiranja" element={<ServiceDetail />} />
              <Route path="/javna-nabava-ponuditelji" element={<ServiceDetail />} />
              <Route path="/javna-nabava-narucitelji" element={<ServiceDetail />} />
              <Route path="/zastita-na-radu" element={<ServiceDetail />} />
              <Route path="/knjigovodstvene-usluge" element={<ServiceDetail />} />
              <Route path="/upravljanje-zgrada" element={<ServiceDetail />} />
              <Route path="/ostale-djelatnosti" element={<ServiceDetail />} />
              
              {/* Other pages */}
              <Route path="/posebne-ponude" element={<SpecialOffers />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
              <Route path="/uvjeti-koristenja" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
