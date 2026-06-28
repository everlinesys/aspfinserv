import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/Aboutus";
import InvestmentPlans from "./pages/InvestmentPlans";
import Contact from "./pages/Contact";
import SIPCalculator from "./pages/SIPCalculator";
import Booking from "./pages/Booking";
import ScrollToTop from "./components/ScrollToTop";
import Disclaimer from "./components/Disclaimer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <p className="text-white text-center py-4"></p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/investment-plans" element={<InvestmentPlans />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-consultation" element={<Booking />} />
      </Routes>
      <Disclaimer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;