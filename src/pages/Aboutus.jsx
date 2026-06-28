import React from "react";
import { Users, Globe2, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
    const highlights = [
        {
            icon: Calendar,
            title: "Established 2022",
            description: "Over 4 years of dedicated cross-border wealth management and strategic alignment.",
        },
        {
            icon: Globe2,
            title: "NRI Investment Specialist",
            description: "Tailored portfolio architecture adhering to complex compliance regulations across global borders.",
        },
        {
            icon: Users,
            title: "Massive Insya Community",
            description: "A trusted network of thousands of investors sharing insight, transparency, and collaborative value.",
        },
        {
            icon: GraduationCap,
            title: "MFund Course Provider",
            description: "Educating retail and high-net-worth individuals on systemic asset management frameworks.",
        },
    ];

    return (
        <section className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
            {/* Structural Ambient Glow Backgrounds */}
            <div className="absolute top-1/3 left-0 h-[600px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-[600px] w-[500px] rounded-full bg-amber-500/[0.02] blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Upper Title Section */}
                <div className="max-w-3xl mb-20" data-aos="fade-up">
                    <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                        Behind The Framework
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
                        Pioneering Wealth Clarity For The Global Indian.
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg font-light leading-relaxed">
                        Since 2022, we have dismantled structural financial uncertainty by bridging the gap between rigorous, goal-based planning and data-backed execution.
                    </p>
                </div>

                {/* Main Content Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Highlighting Statistics & Credentials */}
                    <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-xl hover:border-emerald-500/20 transition-all duration-300 group"
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 100}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center mb-4 group-hover:border-emerald-500/30 transition-colors">
                                            <Icon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quote Block */}
                        <div
                            className="p-6 md:p-8 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <p className="text-zinc-300 italic font-light leading-relaxed text-sm md:text-base">
                                "True wealth management is not about chasing volatile trends. It's about designing an engineered financial shield that works continuously across multiple borders while you focus on living your life."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Founder Profile Image Card */}
                  
                    <div
                        className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2"
                        data-aos="fade-left"
                    >
                        <div className="relative w-full max-w-sm group">
                            {/* Outer Decorative Gradient Border Border Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/20 via-transparent to-amber-500/10 blur-sm pointer-events-none transition duration-500 group-hover:opacity-100" />

                            {/* Main Card */}
                            <div className="relative rounded-3xl border border-white/10 bg-zinc-900 p-4 shadow-2xl shadow-black/80">

                                {/* Profile Image Wrapper */}
                                <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-zinc-950">
                                   <img
                                        src="/founder.jpeg"
                                        alt="Akash S - Founder & Lead Advisor"
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-80" />

                                    {/* Subtle Corner Tag */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-white/5 px-2.5 py-1 text-xs text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Active Advisor
                                    </div>
                                </div>

                                {/* Founder Details */}
                                <div className="mt-5 px-2 pb-2 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-zinc-100">Akash S</h3>
                                        <p className="text-xs text-emerald-400 font-mono tracking-wider uppercase mt-0.5">
                                            Founder & Lead Advisor
                                        </p>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-zinc-950 transition-all group/btn"
                                        title="Connect with Akash"
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-zinc-950 transition-colors" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}