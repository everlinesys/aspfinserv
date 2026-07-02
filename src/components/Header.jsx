import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close mobile drawer on clicking outside the container
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md shadow-lg" : "bg-zinc-950"}`}>
      {/* Top Ticker */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 overflow-hidden text-xs md:text-sm tracking-wider font-semibold uppercase">
        <div className="flex items-center gap-12 whitespace-nowrap py-2 animate-marquee">
          <span>✦ Wealth Creation Starts Here</span>
          <span>✦ Plan Your Retirement</span>
          <span>✦ Plan Your Health Insurance</span>
          <span>✦ Walk Towards Your Dream Home</span>
          <span>✦ Plan Your Children's Education</span>
          <span>✦ Plan Your Children's Marriage</span>
          <span>✦ Trusted Mutual Fund Consultant</span>
          <span>✦ Walk the Path to Financial Freedom</span>
          <span>✦ Build Long-Term Financial Security</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`border-b border-white/5 transition-all duration-300 relative ${scrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-black text-lg">
              <img src="/logo.png" alt="ASP Financial Services Logo" className="w-12 h-12" />
            </div>
            <span className="text-white text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
              ASP<span className="text-amber-400 font-light">Financial Services</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-emerald-400 text-sm font-medium transition-colors">Home</a>
            {["Services", "Investment Plans", "SIP Calculator", "About Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-zinc-400 hover:text-white text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://courses.aspfinancialservices.com" target="_blank" rel="noopener noreferrer" className="text-white font-small py-3 rounded-xl shadow-lg text-center">
              courses
            </a>
            <button onClick={() => {
              setMobileOpen(false);
              window.location.href = "https://play.google.com/store/apps/details?id=com.mfcentral.app"
            }} className="text-white font-small py-3 rounded-xl shadow-lg text-center">
              MFCentral App
            </button>
            <button onClick={() => navigate("/contact")} className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-600/20 hover:-translate-y-0.5 transition active:translate-y-0">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Slide-out Container (Fixed Top Alignment via top-full) */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed top-full right-0 h-[calc(100vh-100%)] w-72 max-w-[85vw] transform transition-transform duration-300 ease-in-out z-40 border-l border-white/5
            bg-black ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col p-6 gap-6 text-lg h-full overflow-y-auto">
            <a href="/" onClick={() => setMobileOpen(false)} className="text-emerald-400 font-medium">Home</a>
            {["Services", "Investment Plans", "SIP Calculator", "About Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileOpen(false)}
                className="text-zinc-300 hover:text-white font-medium"
              >
                {item}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a href="https://courses.aspfinancialservices.com" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-neutral-950 font-medium py-3 rounded-xl shadow-lg text-center hover:bg-yellow-400 transition-colors">
              Mutual Fund Courses
            </a>
            <button onClick={() => {
              setMobileOpen(false);
              window.location.href = "https://play.google.com/store/apps/details?id=com.mfcentral.app"
            }} className="bg-yellow-500 text-neutral-950 font-medium py-3 rounded-xl shadow-lg text-center hover:bg-yellow-400 transition-colors">
              Try MF Central App
            </button>
            <button onClick={() => {
              setMobileOpen(false);
              navigate("/contact")
            }} className="bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-lg text-center hover:bg-emerald-500 transition-colors">
              Book Consultation
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}