import { ArrowRight, TrendingUp, ShieldCheck, Briefcase } from "lucide-react";
import MockChart from "./MockChart";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white pt-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Column */}
          <div className="flex flex-col items-start">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-8"
            >
              <TrendingUp size={16} />
              Trusted Financial Advisory Services
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Make Your
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-1">
                Money Work Smarter
              </span>
              For You
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed"
            >
              Strategic financial planning, investment guidance, tax optimization, and business advisory services designed to help individuals and organizations build long-term wealth.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium px-8 py-4 rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 transition active:translate-y-0">
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl text-zinc-300 hover:text-white hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            {/* Stats Counter Row */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-8 w-full"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">500+</h3>
                <p className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">
                  Clients Advised
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-amber-400 tracking-tight">₹100Cr+</h3>
                <p className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">
                  Assets Guided
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">15+</h3>
                <p className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Glassmorphic Mock Dashboard */}
          <div
            data-aos="fade-up-left"
            data-aos-delay="200"
            className="relative lg:mt-0 mt-12"
          >
            <MockChart />

            {/* Overlapping Absolute Metrics Tag */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="absolute -bottom-6 -left-6 bg-amber-400 text-zinc-950 px-6 py-4 rounded-2xl shadow-2xl border border-amber-300/30"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                Avg. Annual Growth
              </p>
              <h3 className="text-3xl font-black tracking-tight mt-0.5">
                +18.5%
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}