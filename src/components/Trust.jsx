import {
  BadgeCheck,
  IndianRupee,
  Star,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Trust() {
  const navigate = useNavigate();
  const stats = [
    {
      icon: "/sebi.png",
      value: "SEBI",
      label: "Regulated Services",
      isPrimary: true, // Highlights regulatory alignment
    },
    {
      icon: "/amfi.png",
      value: "AMFI",
      label: "Registered ",
      isPrimary: false,
    },
    {
      icon: "/irdai.png",
      value: "IRDI",
      label: "Licensed",
      isPrimary: false,
    },
    {
      icon: "/users.png",
      value: "25K+",
      label: "Investor\nCommunity",
      isPrimary: false,
    },
  ];

  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      {/* Background Gradient Blends */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-emerald-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Trusted Financial Partner
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building Wealth With
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-1">
              Trust & Transparency
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-zinc-400 leading-relaxed">
            Empowering individuals and businesses with strategic financial planning, investment solutions, health insurance, and tax optimization to build, protect, and grow long-term wealth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/20 backdrop-blur-md shadow-2xl shadow-black/50">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-10 group hover:bg-white/[0.02] transition-colors duration-300 ${index !== stats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/5"
                  : ""
                }`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${item.isPrimary
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-900 border border-white/10 text-zinc-300 group-hover:text-amber-400 group-hover:border-amber-400/30"
                }`}>
                <img src={item.icon} alt={`${item.value} Icon`} className="w-12 h-12" />
              </div>

              {/* Metric Figure */}
              <h3 className={`text-4xl font-extrabold tracking-tight ${item.isPrimary ? "text-emerald-400" : "text-white"
                }`}>
                {item.value}
              </h3>

              {/* Label Description */}
              <p className="mt-3 text-sm md:text-base font-medium whitespace-pre-line text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button CTA */}
        <div className="flex justify-center mt-16">
          <button onClick={() => navigate("/contact")} className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium text-base shadow-xl shadow-emerald-950/40 hover:-translate-y-0.5 transition active:translate-y-0">
            Start Your Financial Journey
          </button>
        </div>

      </div>
    </section>
  );
}