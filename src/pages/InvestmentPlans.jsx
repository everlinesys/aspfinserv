import React from "react";
import { 
  TrendingUp, 
  Layers, 
  Coins, 
  Percent, 
  ArrowRight 
} from "lucide-react";

export default function InvestmentPlans() {
  const assetTypes = [
    {
      icon: Layers,
      title: "Mutual Funds (MFs)",
      subtitle: "Diversified Asset Vehicles",
      description: "Pools capital from thousands of investors to buy a managed basket of equities or debt securities. Perfect for long-term systematic wealth compounding.",
      tags: ["Equity", "Debt", "Hybrid"],
      accent: "from-emerald-500/20 via-transparent"
    },
    {
      icon: Coins,
      title: "Recurring Deposits (RD)",
      subtitle: "Systematic Capital Security",
      description: "A disciplined banking framework where you invest a fixed sum month-on-month, securing guaranteed interest yield rates completely decoupled from market volatility.",
      tags: ["Guaranteed Return", "Risk-Free"],
      accent: "from-amber-500/20 via-transparent"
    },
    {
      icon: TrendingUp,
      title: "Direct Equities",
      subtitle: "High-Alpha Ownership",
      description: "Purchasing fractional shares of publicly listed corporations directly. Offers premium long-term compounding potential, paired with higher baseline structural volatility.",
      tags: ["High Growth", "Market Linked"],
      accent: "from-teal-500/20 via-transparent"
    },
    {
      icon: Percent,
      title: "Fixed Income & Bonds",
      subtitle: "Predictable Cash Flow",
      description: "Lending capital to corporate or government entities in exchange for structured, periodic coupon payments alongside absolute principal protection upon final maturity.",
      tags: ["Fixed Yield", "Capital Shield"],
      accent: "from-blue-500/20 via-transparent"
    }
  ];

  return (
    <section className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-emerald-500/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Asset Primers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Demystifying Core Asset Classes
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto">
            Before configuring an allocation blueprint, it is critical to understand the primary instruments used to build sustainable generational wealth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {assetTypes.map((asset, idx) => {
            const Icon = asset.icon;
            return (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-xl p-8 md:p-10 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/40 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Micro Ambient Glow inside each individual card corner */}
                <div className={`absolute -top-12 -left-12 w-40 h-40 rounded-full bg-gradient-to-br ${asset.accent} to-transparent blur-2xl opacity-60 pointer-events-none`} />

                <div className="flex items-start justify-between relative z-10 mb-6">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-emerald-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  {/* Mini Meta Labels */}
                  <div className="flex gap-2">
                    {asset.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typography Block */}
                <div className="relative z-10">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{asset.subtitle}</p>
                  <h3 className="text-2xl font-serif font-bold text-zinc-100 mt-1 group-hover:text-white transition-colors">
                    {asset.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                {/* Card CTA/Footer decoration */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors relative z-10">
                  <span>Inquire framework suitability</span>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}