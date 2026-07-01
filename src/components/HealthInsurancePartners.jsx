import React from "react";
import { ShieldAlert, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HealthInsurancePartners() {
    const navigate = useNavigate();
    // Configured precisely for your 3 health insurance partners
    const insurancePartners = [
        { name: "ADITHYA BIRLA CAPITAL", src: "/icons/abc.png", tier: "Comprehensive Coverage" },
        { name: "HDFC Ergo", src: "/icons/ergo.png", tier: "Global Health Shield" },
        { name: "Manipal Cigna", src: "/icons/cigna.png", tier: "Premium Risk Protection" },
    ];

    const handleConsultationRedirect = () => {
        const targetSection = document.getElementById("booking") || document.getElementById("contact");
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative bg-zinc-950 text-white py-24 border-t border-white/5 overflow-hidden">
            {/* Soft structural ambient luxury blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.015] blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                        Health Insurance Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-zinc-100">
                        Health Insurance Execution Ecosystem
                    </h2>
                    <p className="mt-3 text-zinc-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
                        Insulating your primary capital blocks. Integrated directly with India's absolute premier medical risk underwriters.
                    </p>

                    {/* Institutional Gatekeeper Notice */}
                    {/* <div className="inline-flex items-center gap-2 mt-5 p-2 px-4 rounded-full border border-amber-500/10 bg-amber-500/5 text-amber-400/90 text-xs font-mono">
                        <ShieldAlert size={14} className="text-amber-400" />
                        Advisory & execution restricted to portfolios with a 10K minimum investment setup.
                    </div> */}
                </div>

                {/* Structured 3-Column Display */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {insurancePartners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900/30 to-zinc-950/80 p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-black/40"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Subtle top highlights on hover */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-emerald-500/20 transition-all duration-500" />

                            {/* Logo Box container */}
                            <div className="h-20 w-full bg-white border border-zinc-200/90 rounded-xl px-6 py-4 flex items-center justify-center shadow-md shadow-black/10 group-hover:scale-[1.02] transition duration-300">
                                <img
                                    src={partner.src}
                                    alt={`${partner.name} Network Partner`}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text metadata parameters */}
                            <div className="mt-5 space-y-1 w-full">
                                <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500">// Corporate Entity</h3>
                                <p className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                                    {partner.name}
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 rounded-full px-2.5 py-0.5 mt-2 font-light">
                                    <CheckCircle2 size={11} /> {partner.tier}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Hand-off to Booking Anchor */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                    <button
                        onClick={() => {
                            navigate('/contact');
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors group cursor-pointer"
                    >
                        Structure Your Asset Protection Framework
                        <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>

            </div>
        </section>
    );
}