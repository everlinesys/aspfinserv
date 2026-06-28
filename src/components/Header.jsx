import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Add this line to use the navigate function
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
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md shadow-lg" : "bg-zinc-950"
      }`}>
      {/* Top Ticker - Toned down to a luxurious gold/dark layout */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 overflow-hidden text-xs md:text-sm tracking-wider font-semibold uppercase">
        <div className="flex items-center gap-12 whitespace-nowrap py-2 animate-marquee">
          <span>✦ Wealth Creation Starts Here</span>
          <span>✦ Trusted Financial Advisory</span>
          <span>✦ Walk the Path to Financial Freedom</span>
          <span>✦ Build Long-Term Financial Security</span>
          <span>✦ Wealth Creation Starts Here</span>
          <span>✦ Walk Towards Your Dream Home</span>
          <span>✦ Plan Your Children's Education</span>
          <span>✦ Plan Your Children's Marriage</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`border-b border-white/5 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-lg  flex items-center justify-center font-black text-black text-lg">
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
            {/* <button className="bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-xl border border-white/10 transition">
              Log In
            </button> */}
            <button onClick={() => navigate("/book-consultation")} className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-600/20 hover:-translate-y-0.5 transition active:translate-y-0">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-out */}
      <div className={`lg:hidden fixed inset-0 top-[110px] bg-zinc-950/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <nav className="flex flex-col p-6 gap-6 text-lg border-t border-white/5">
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
          <button onClick={() => {
            setMobileOpen(false);
            navigate("/book-consultation")
          }} className="bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-lg text-center">
            Book Consultation
          </button>
          {/* <button onClick={() => setMobileOpen(false)} className="bg-white/5 text-white font-medium py-3 rounded-xl border border-white/10 text-center">
            Log In
          </button> */}
        </nav>
      </div>
    </header>
  );
}