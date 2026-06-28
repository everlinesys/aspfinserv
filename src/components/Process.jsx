import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Ruler, Zap, BarChart3 } from "lucide-react";

export default function Process() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // Timeline progress
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Individual step progress
    const node1 = useTransform(scrollYProgress, [0.00, 0.18], [0, 1]);
    const node2 = useTransform(scrollYProgress, [0.20, 0.45], [0, 1]);
    const node3 = useTransform(scrollYProgress, [0.48, 0.72], [0, 1]);
    const node4 = useTransform(scrollYProgress, [0.75, 1.00], [0, 1]);

    const steps = [
        {
            number: "1",
            title: "Discover",
            description:
                "Understand your current financial position, responsibilities, and life goals through deep-dive discussion.",
            icon: Search,
            progress: node1,
        },
        {
            number: "2",
            title: "Design",
            description:
                "Build a structured, goal-based financial roadmap aligned with your risk profile and timeline.",
            icon: Ruler,
            progress: node2,
        },
        {
            number: "3",
            title: "Execute",
            description:
                "Implement the strategy with clarity, discipline, and defined asset allocation — no guesswork.",
            icon: Zap,
            progress: node3,
        },
        {
            number: "4",
            title: "Monitor",
            description:
                "Review progress regularly, rebalance when needed, and stay aligned with long-term objectives.",
            icon: BarChart3,
            progress: node4,
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden"
        >
            {/* Ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-emerald-500/[0.03] blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-28"
                    data-aos="fade-up"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                        A Disciplined, Structured Process.
                    </h2>

                    <p className="mt-4 text-zinc-400 text-lg">
                        From financial uncertainty to long-term clarity — in four clear
                        steps.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">

                    {/* Timeline Track with Liquid/Solid Color Fill Progression */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-10 bottom-10 w-[3px] rounded-full bg-zinc-800 overflow-hidden">
                        <motion.div
                            style={{ scaleY }}
                            className="absolute inset-0 origin-top bg-gradient-to-b from-amber-400 via-emerald-400 to-teal-500 shadow-[0_0_18px_rgba(52,211,153,.6)] rounded-full"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            const borderColor = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "rgba(255,255,255,.05)",
                                    "rgba(52,211,153,.35)",
                                ]
                            );

                            const bgColor = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "rgba(24,24,27,.35)",
                                    "rgba(6,95,70,.25)",
                                ]
                            );

                            const titleColor = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "rgb(244 244 245)",
                                    "rgb(52 211 153)",
                                ]
                            );

                            const nodeScale = useTransform(
                                step.progress,
                                [0, 1],
                                [0.9, 1.2]
                            );

                            const nodeBorder = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "rgb(63 63 70)",
                                    "rgb(52 211 153)",
                                ]
                            );

                            const nodeShadow = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "0 0 0 rgba(0,0,0,0)",
                                    "0 0 18px rgba(52,211,153,.6)",
                                ]
                            );

                            const dotColor = useTransform(
                                step.progress,
                                [0, 1],
                                [
                                    "rgb(63 63 70)",
                                    "rgb(251 191 36)",
                                ]
                            );

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-start md:items-center justify-between relative ${isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div
                                        className="w-full md:w-[44%] pl-12 md:pl-0"
                                        data-aos={isEven ? "fade-left" : "fade-right"}
                                    >
                                        <motion.div
                                            style={{
                                                borderColor,
                                                backgroundColor: bgColor,
                                            }}
                                            className="rounded-2xl border backdrop-blur-xl p-8 shadow-xl transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 mb-4">

                                                <motion.div
                                                    style={{
                                                        borderColor,
                                                    }}
                                                    className="w-12 h-12 rounded-xl bg-zinc-950 border flex items-center justify-center"
                                                >
                                                    <Icon className="w-5 h-5 text-emerald-400" />
                                                </motion.div>

                                                <motion.h3
                                                    style={{
                                                        color: titleColor,
                                                    }}
                                                    className="text-2xl font-serif font-bold"
                                                >
                                                    {step.title}
                                                </motion.h3>

                                            </div>

                                            <p className="text-zinc-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Node Ring & Dot Position */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-auto flex items-center justify-center w-0">

                                        <motion.div
                                            style={{
                                                scale: nodeScale,
                                                borderColor: nodeBorder,
                                                boxShadow: nodeShadow,
                                            }}
                                            className="w-5 h-5 rounded-full bg-zinc-950 border-4 flex items-center justify-center shrink-0 z-20"
                                        >
                                            <motion.div
                                                style={{
                                                    backgroundColor: dotColor,
                                                }}
                                                className="w-2 h-2 rounded-full"
                                            />
                                        </motion.div>

                                    </div>

                                    <div className="hidden md:block w-[44%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}