import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Card Shell */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-12 md:p-20 shadow-2xl shadow-black">
          
          {/* Layered Accent Glows */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500/[0.03] blur-[130px] pointer-events-none" />

          {/* Core Card Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Start Building Your Financial Future
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Let's Create a Smarter
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent mt-1">
                Financial Strategy
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Whether you're growing an enterprise, planning custom investments, or looking for expert structural wealth coaching, our advisors are ready to assist.
            </p>

            {/* Interactive Action Hub */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium px-8 py-4 rounded-2xl flex items-center gap-2 shadow-xl shadow-emerald-950/50 hover:-translate-y-0.5 transition active:translate-y-0">
                Schedule Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border border-white/10 bg-white/5 text-zinc-300 hover:text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}