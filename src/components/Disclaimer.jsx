import React from "react";
import { ArrowRight } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="relative bg-zinc-950 text-white py-16 border-t border-white/5 overflow-hidden">
      {/* Subtle background ambient top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left">
        
        {/* Top regulatory tag */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-8 mb-10 gap-4">
          <p className="text-xs font-mono text-zinc-400 tracking-wide">
            All investment consultation and transactions are facilitated within approved regulatory guidelines.
          </p>
          <span className="text-[10px] font-mono uppercase bg-zinc-900 px-2 py-1 rounded border border-white/5 text-zinc-500 hidden md:inline-block">
            Layout Source Map Ref: image_1509c6.jpg
          </span>
        </div>

        {/* Primary Legal Text Blocks */}
        <div className="space-y-8 text-xs text-zinc-500 font-light leading-relaxed tracking-wide text-justify">
          
          {/* Block 1: Mutual Fund Specifics */}
          <p>
            <strong className="text-zinc-400 font-medium font-mono block mb-1">Mutual Fund Distribution Disclaimer:</strong> 
            Mutual fund investments are subject to market risks. Please read the scheme information document and key information memorandum carefully before investing. Past performance is not indicative of future returns. ASP Financial Services is a mutual fund distributor registered with AMFI. ASP Financial Services does not guarantee or assure any returns on investments.
          </p>

          {/* Block 2: General Advisory Provisions */}
          <p>
            <strong className="text-zinc-400 font-medium font-mono block mb-1">General Disclaimer:</strong> 
            The information provided by ASP Financial Services is for general informational and educational purposes only and should not be construed as personalised investment advice, tax advice, or legal advice. Clients are advised to consult with qualified professionals, including chartered accountants and legal advisors, for advice specific to their individual circumstances.
          </p>
          
        </div>

        {/* Dynamic Comprehensive Link */}
        {/* <div className="mt-10 flex justify-center md:justify-start">
          <a 
            href="#regulatory" 
            className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 font-medium tracking-wide hover:text-amber-300 transition-colors group"
          >
            Read all comprehensive disclaimers & regulatory information 
            <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div> */}

        {/* Footer Brand Credentials & Copyright Details */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs text-zinc-400 font-normal">
              ASP Financial Services is a brand name. Mutual fund distributor operations are properly registered with AMFI.
            </p>
            <p className="text-[10px] text-zinc-600 font-mono mt-1">
              ASP Financial Services | AMFI Registered Mutual Fund Distributor
            </p>
          </div>

          <p className="text-[11px] text-zinc-600 font-mono whitespace-nowrap">
            © 2026 ASP Financial Services. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}