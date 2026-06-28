import React, { useState, useEffect } from "react";
import { Calculator, Wallet, Percent, CalendarDays, ArrowUpRight } from "lucide-react";

export default function SipCalculator() {
  // State variables for the inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // Calculated output states
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  // SIP Formula implementation:
  // M = P * [ ({1 + i}^n - 1) / i ] * (1 + i)
  useEffect(() => {
    const P = monthlyInvestment;
    const i = expectedReturn / 12 / 100; // Monthly interest rate
    const n = timePeriod * 12; // Total number of months

    const calculatedInvested = P * n;
    
    let calculatedTotal = 0;
    if (i === 0) {
      calculatedTotal = calculatedInvested;
    } else {
      calculatedTotal = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const calculatedReturns = calculatedTotal - calculatedInvested;

    setTotalInvested(Math.round(calculatedInvested));
    setEstimatedReturns(Math.round(calculatedReturns));
    setTotalValue(Math.round(calculatedTotal));
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  // Helper function to format Indian currency style values cleanly
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-amber-500/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Forecasting Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-zinc-100">
            Systematic Investment Plan Calculator
          </h2>
          <p className="mt-4 text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto">
            Simulate your compounding trajectory to visualize how disciplined monthly allocations build long-term generational wealth.
          </p>
        </div>

        {/* Calculator UI Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Controls Panel (Sliders & Inputs) */}
          <div 
            className="lg:col-span-7 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-xl flex flex-col justify-between space-y-8"
            data-aos="fade-right"
          >
            {/* Input 1: Monthly Investment */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-emerald-400" />
                  Monthly Investment
                </label>
                <div className="relative rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm font-mono text-emerald-400 font-bold focus-within:border-emerald-500/50 transition-colors">
                  <span className="text-zinc-600 mr-1">₹</span>
                  <input 
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Math.max(0, Number(e.target.value)))}
                    className="bg-transparent outline-none w-24 text-right inline-block"
                  />
                </div>
              </div>
              <input 
                type="range" 
                min="500" 
                max="500000" 
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>₹500</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Input 2: Expected Rate of Return */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Percent className="w-4 h-4 text-emerald-400" />
                  Expected Return Rate (p.a)
                </label>
                <div className="relative rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm font-mono text-emerald-400 font-bold focus-within:border-emerald-500/50 transition-colors">
                  <input 
                    type="number"
                    step="0.1"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Math.max(0, Number(e.target.value)))}
                    className="bg-transparent outline-none w-12 text-right inline-block mr-1"
                  />
                  <span className="text-zinc-600">%</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Input 3: Time Horizon */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-emerald-400" />
                  Time Horizon
                </label>
                <div className="relative rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm font-mono text-emerald-400 font-bold focus-within:border-emerald-500/50 transition-colors">
                  <input 
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Math.max(1, Number(e.target.value)))}
                    className="bg-transparent outline-none w-12 text-right inline-block mr-1"
                  />
                  <span className="text-zinc-500 text-xs">Yrs</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                step="1"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>1 Yr</span>
                <span>40 Yrs</span>
              </div>
            </div>
          </div>

          {/* Results Display Panel */}
          <div 
            className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/90 p-8 flex flex-col justify-between shadow-2xl shadow-black"
            data-aos="fade-left"
          >
            {/* Ambient subtle card bar layout decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="space-y-6">
              <h3 className="text-lg font-sans font-semibold text-zinc-300 border-b border-white/5 pb-4">
                Projections Summary
              </h3>

              {/* Metric 1: Invested Capital */}
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Total Capital Invested</p>
                <p className="text-2xl font-sans font-bold text-zinc-100 mt-1">
                  {formatCurrency(totalInvested)}
                </p>
              </div>

              {/* Metric 2: Estimated Compounding Gains */}
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Estimated Wealth Yield</p>
                <p className="text-2xl font-sans font-bold text-emerald-400 mt-1">
                  + {formatCurrency(estimatedReturns)}
                </p>
              </div>

              <hr className="border-white/5" />

              {/* Metric 3: Consolidated Future Asset Value */}
              <div>
                <p className="text-xs font-mono text-amber-400/80 uppercase tracking-wider">Consolidated Asset Value</p>
                <p className="text-3xl md:text-4xl font-sans font-bold text-zinc-50 tracking-tight mt-1">
                  {formatCurrency(totalValue)}
                </p>
              </div>
            </div>

            {/* Explanatory CTA note */}
            <div className="mt-10 pt-4 border-t border-white/5">
              <p className="text-xs text-zinc-500 font-light leading-relaxed mb-4">
                Calculations based on regular localized compound intervals. Actual mutual fund performance variables are subject to direct multi-asset volatility structures.
              </p>
              <a 
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-white/5 hover:border-white/10 text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition duration-300"
              >
                Incorporate Into Roadmap
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}