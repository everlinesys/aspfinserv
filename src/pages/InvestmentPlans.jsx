import React from "react";
import { 
  Layers, 
  TrendingUp, 
  ShieldAlert, 
  HeartPulse, 
  ArrowRight 
} from "lucide-react";
export default function InvestmentPlans() {
  const assetTypes = [
    {
      icon: Layers,
      title: "Mutual Funds",
      subtitle: "Smart Diversification",
      description: "Your money is pooled with other investors to buy a balanced mix of top company stocks or safe bonds. Managed by experts, it is perfect for growing your savings steadily over time.",
      tags: ["Easy Growth", "Expert Managed"],
      accent: "from-emerald-500/20 via-transparent"
    },
    {
      icon: TrendingUp,
      title: "Long-Term & Retirement Planning",
      subtitle: "Secure Your Future",
      description: "A customized mix of investments chosen to fund your life goals, buy a home, or support a stress-free retirement. Built to ensure you never run out of money when you stop working.",
      tags: ["Future Wealth", "Retirement Security"],
      accent: "from-amber-500/20 via-transparent"
    },
    {
      icon: HeartPulse,
      title: "Health Insurance",
      subtitle: "Medical & Family Protection",
      description: "Protects your hard-earned wealth from unexpected medical bills and hospital fees. Ensures your family gets top-tier healthcare without breaking your bank account.",
      tags: ["Emergency Shield", "Family Safety"],
      accent: "from-teal-500/20 via-transparent"
    },
    {
      icon: ShieldAlert,
      title: "Full Financial Planning",
      subtitle: "Your Complete Money Blueprint",
      description: "A clear roadmap covering your monthly savings, safety funds, and tax strategies. We connect all the pieces so you know exactly where your money is going.",
      tags: ["All-in-One Plan", "Tax Efficient"],
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
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Simple Solutions for Your Wealth
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto">
            Before we build your plan, it helps to know the main tools we use to protect your health and grow your savings for the long run.
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
                <a href="/contact" className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors relative z-10">
                 
                  <span>Ask about this plan</span>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}