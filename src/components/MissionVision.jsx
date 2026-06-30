import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-zinc-950 text-white py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            Our Foundation
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Guided By Purpose,
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-1">
              Driven By Trust
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every financial decision impacts lives, businesses, and futures. Our core values serve as foundational parameters guiding every investment framework we recommend.
          </p>
        </div>

        {/* Dynamic Concept Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-zinc-900/20 backdrop-blur-md p-10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.01]">
            {/* Visual Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-950/40">
              <Target size={26} className="text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              Our Mission
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Our mission is to deliver personalized financial planning solutions that help individuals, families, and organizations achieve their financial goals through smart investments, comprehensive health insurance, tax-efficient strategies, and long-term wealth management.
            </p>

            {/* Corner Ambient Radial */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/[0.06] rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/[0.1] transition-colors" />
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-zinc-900/20 backdrop-blur-md p-10 hover:border-amber-400/20 transition-all duration-300 hover:scale-[1.01]">
            {/* Visual Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-all">
              <Eye size={26} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              Our Vision
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              To become one of India's most highly trusted financial advisory firms by making professional elite wealth management, comprehensive tax layout optimization, and core asset allocation accessible to emerging wealth creators.
            </p>

            {/* Corner Ambient Radial */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-amber-400/[0.04] rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-400/[0.08] transition-colors" />
          </div>

        </div>
      </div>
    </section>
  );
}