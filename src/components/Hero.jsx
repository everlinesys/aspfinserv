import { ArrowRight, TrendingUp } from "lucide-react";
import MockChart from "./MockChart";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white pt-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-5"
            >
              <TrendingUp size={14} />
              Your Trusted Mutual Fund Partner
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]"
            >
              Make Your{" "}
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-0.5">
                Money Work Smarter
              </span>
              For You
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed font-light"
            >
              Strategic financial planning for investments, health insurance, and tax optimization—helping individuals, families, and businesses worldwide build, protect, and preserve long-term wealth.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 flex flex-wrap gap-3"
            >
              <button
                className="group bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-medium px-6 py-3 rounded-xl flex items-center gap-2 shadow-md shadow-emerald-950/40 hover:-translate-y-0.5 transition active:translate-y-0"
                onClick={() => navigate('/contact')}
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                className="border border-white/10 bg-white/5 text-sm px-6 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition"
                onClick={() => navigate('/services')}
              >
                Services
              </button>
            </div>

            {/* Stats Counter Row */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-6 w-full max-w-md"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">1500+</h3>
                <p className="text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                  Clients Advised
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400 tracking-tight">100+</h3>
                <p className="text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">5+</h3>
                <p className="text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Glassmorphic Mock Dashboard */}
          <div
            data-aos="fade-up-left"
            data-aos-delay="200"
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-2xl rounded-full" />

              {/* Founder Profile Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl">
                <img
                  src="/founder.jpeg"
                  alt="Founder"
                  className="w-full h-[320px] md:h-[450px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-4 -left-4 bg-zinc-900/90 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-xl">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Founder</p>
                <h3 className="text-base font-bold mt-0.5">Akash S</h3>
                <p className="text-emerald-400 text-xs mt-0.5">Financial Consultant</p>
              </div>

              {/* Overlapping Absolute Metrics Tag */}
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="absolute -bottom-4 -right-4 bg-amber-400 text-zinc-950 px-4 py-3 rounded-xl shadow-xl border border-amber-300/30 text-right"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-800 leading-none">
                  Global NRI/HNI
                </p>
                <h3 className="text-sm font-black tracking-tight mt-1 leading-none">
                  Wealth Advisory
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
      <p className="mt-4 p-6 text-zinc-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
        Please note: We are currently onboarding select clients who can allocate a <span className="text-amber-400 font-medium">minimum of 10K per month as a SIP</span> (Systematic Investment Plan) to initiate their custom deployment.
      </p>
      <MockChart />


    </section>
  );
}