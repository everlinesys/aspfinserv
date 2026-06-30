import {
  ShieldCheck,
  TrendingUp,
  Landmark,
  Briefcase,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Finance Planner",
      desc: "Completely transparent, conflict-free financial guidance tailored explicitly to your targets.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      desc: "Data-driven strategies engineered intentionally to compound generational wealth.",
    },

    
    {
      icon: Users,
      title: "Client First",
      desc: "Deeply personalized advisory communication loops offering bespoke wealth attention.",
    },
    {
      icon: BadgeCheck,
      title: "Proven Results",
      desc: "Consistently chosen and relied upon by high-net-worth investors and active entrepreneurs.",
    },
  ];

  // Duplicated arrays to ensure flawless, unbroken marquee loop flow
  const slides = [...reasons, ...reasons, ...reasons];

  return (
    <section className="bg-zinc-950 py-28 overflow-hidden border-t border-white/5 relative">
      
      {/* Section Typography Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          Why Choose ASP Financial Services
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Financial Expertise
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-1">
            You Can Depend On
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Helping individuals make highly calculated, smarter financial choices through institutional knowledge and long-term planning.
        </p>
      </div>

      {/* Infinite Rolling Track Container */}
      <div className="relative w-full flex items-center 
        before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 md:before:w-48 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:pointer-events-none
        after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 md:after:w-48 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:pointer-events-none"
      >
        {/* Continuous Slideway Track */}
        <div className="flex gap-6 animate-slide-loop hover:[animation-play-state:paused] py-4 cursor-grab active:cursor-grabbing">
          {slides.map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[360px] shrink-0 rounded-[28px] border border-white/5 bg-zinc-900/20 backdrop-blur-md p-8 group transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/40 hover:border-emerald-500/30"
            >
              {/* Graphic Icon Envelope */}
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 text-zinc-400 flex items-center justify-center mb-6 transition-all group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:shadow-md group-hover:shadow-emerald-500/5">
                <item.icon size={22} />
              </div>

              {/* Reason Identity */}
              <h3 className="text-white text-xl font-bold tracking-tight mb-3 transition-colors group-hover:text-white">
                {item.title}
              </h3>

              {/* Body Text */}
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}