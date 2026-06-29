import React from "react";
import {
  Compass,
  LineChart,
  PieChart,
  BrainCircuit,
  Wallet,
  ShieldCheck,
  RefreshCw,
  Activity,
  FileSpreadsheet,
  CheckCircle2,
  Lock
} from "lucide-react";
import CTA from "../components/CTA";
import {useNavigate} from "react-router-dom";
export default function Services() {
  const navigate = useNavigate();
  const fullAdvisory = [
    { icon: Compass, text: "Financial clarity session – current position & behavior deep-dive" },
    { icon: LineChart, text: "Detailed Goal-Based plan with inflation-adjusted projections" },
    { icon: PieChart, text: "Investment planning & portfolio structuring" },
    { icon: BrainCircuit, text: "Risk profiling & Behavioral Assessment" },
    { icon: Wallet, text: "Cash flow & Budgeting Frameworks" },
    { icon: ShieldCheck, text: "Insurance & Retirement planning" },
    { icon: RefreshCw, text: "Structured Reviews + Behavioral Coaching" },
  ];

  const annualReview = [
    { icon: FileSpreadsheet, text: "Financial Snapshot & net worth assessment update" },
    { icon: Activity, text: "Goal Progress Evaluation" },
    { icon: ShieldCheck, text: "Insurance Re-Evaluation" },
    { icon: LineChart, text: "Retirement Projection Update" },
    { icon: BrainCircuit, text: "Behavioral Coaching during Volatility" },
    { icon: RefreshCw, text: "Market Updates + structured standard reviews" },
  ];

  return (
    <>
      <section className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
        {/* Background ambient decorative blurs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              Our Offerings
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
              Tailored Financial Solutions
            </h2>
            <p className="mt-4 text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-light">
              Choose the level of partnership that fits your current financial milestones.
            </p>
          </div>

          {/* Pricing/Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">

            {/* Program 1: Full Advisory */}
            <div
              className="relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 shadow-2xl shadow-black/60 group"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {/* Ambient accent top glow line */}
              <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Comprehensive Strategy</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-100">Full Advisory</h3>
                    <p className="text-sm font-medium text-zinc-500 mt-1">Financial Planning Program</p>
                  </div>
                  <div className="px-3 py-1 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Most Popular
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-8 font-light">
                  A complete, uncompromised deep dive into restructuring and preserving your lifetime wealth architecture.
                </p>

                <hr className="border-white/5 mb-8" />

                {/* Feature List */}
                <ul className="space-y-5">
                  {fullAdvisory.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <div className="w-6 h-6 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-emerald-500/30 transition-colors">
                          <IconComp className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-sm md:text-base text-zinc-300 group-hover/item:text-zinc-200 transition-colors font-light leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-10">
                <button onClick={() => navigate("/contact")} className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-950/20 transition active:scale-[0.99]">
                  Enroll In Full Advisory
                </button>
              </div>
            </div>

            {/* Program 2: One-Time Review */}
            <div
              className="relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/30 to-zinc-950/40 border border-white/5 hover:border-amber-500/10 transition-all duration-300 shadow-2xl shadow-black/40"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {/* Ambient accent top glow line */}
              <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">One Time Checkup</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-100">Annual Financial Review</h3>
                    <p className="text-sm font-medium text-zinc-500 mt-1">Quick Assessment Program</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-8 font-light">
                  An essential health assessment checkup to keep your pre-existing financial structures properly aligned.
                </p>

                <hr className="border-white/5 mb-8" />

                {/* Feature List */}
                <ul className="space-y-5">
                  {annualReview.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <div className="w-6 h-6 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-amber-500/30 transition-colors">
                          <IconComp className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <span className="text-sm md:text-base text-zinc-300 group-hover/item:text-zinc-200 transition-colors font-light leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                {/* Exclusive Client Badge Note */}
                <div className="mt-8 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-400 text-xs text-center font-medium">
                  <Lock className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                  This option is exclusively available for existing clients
                </div>

                <button onClick={() => navigate("/contact")} className="w-full mt-4 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-white/10 hover:border-white/20 font-semibold text-sm tracking-wide transition active:scale-[0.99]">
                  Request Assessment
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* Moved cleanly outside of the layout boundaries */}
      <CTA />
    </>
  );
}