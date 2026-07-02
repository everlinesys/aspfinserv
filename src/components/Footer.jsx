import {useNavigate} from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5 relative overflow-hidden">
      {/* Soft Ambient Background Light */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Core Informational Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & About */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center gap-2 group w-max">
              <div className="w-12 h-12 rounded-lg  to-amber-400 flex items-center justify-center font-black text-black text-sm">
                <img src="/logo.png" alt="ASP Financial Services Logo" className="w-12 h-12" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                ASP<span className="text-amber-400 font-light">Financial Services</span>
              </span>
            </a>

            <p className="mt-5 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Trusted, institutional-grade financial advisory solutions helping forward-thinking individuals, families, and organizations realize robust stability and compounded wealth.
            </p>
          </div>

          {/* Services Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {["Financial Planning", "Investment Advisory", "Tax Consulting", "Wealth Management", "Business Advisory"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors duration-200">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-zinc-400 leading-relaxed">
              <p className="hover:text-white transition-colors cursor-pointer">info@ASP Financial Services.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">+91 98477 29426</p>
              <p>
                Kottayam, Kerala, India
                <span className="block text-xs text-zinc-500 mt-0.5">India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Integrated Mid-Footer Banner Callout */}
        <div className="mt-16 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-md p-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:border-emerald-500/10 transition-colors duration-300">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Ready to Secure Your Financial Future?
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Connect with our certified professionals to map out a clear alpha growth target blueprint.
            </p>
          </div>

          <button  onClick={() => {navigate("/contact")}} className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-950/20 hover:-translate-y-0.5 transition active:translate-y-0">
            Book Consultation
          </button>
        </div>

        {/* Bottom Legal Disclaimers Row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500 tracking-wide">
          <p>
            © {new Date().getFullYear()} ASP Financial Services. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}