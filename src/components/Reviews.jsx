import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Star } from "lucide-react";

// Mock Data mimicking a Google Review response structure
const GOOGLE_REVIEWS_MOCK = [
    {
        id: 1,
        author_name: "Midhun CP",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWNKs62d2u2TUQSOvNpdE31shDgjpmxPEGAmHXTpNAaixMUoO_6=s64-c-rp-mo-ba12-br100",
        rating: 5,
        relative_time_description: "2 weeks ago",
        text: "Had a great experience with ASP Financial Services. I booked a personal finance session with Akash, and he thoroughly analyzed my financial profile, retirement planning goals, and calculated all the important financial metrics. He explained everything clearly and suggested some really good mutual funds based on my goals and risk profile. The session was very informative and gave me better clarity about my financial future. Highly recommended for anyone looking for professional financial and retirement planning advice.",
    },
    {
        id: 2,
        author_name: "Rashid AMR",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXl0HVfaaR9j1LpFalOZcK2MtLRzTxXkb0Ja95P3EFWdvFikc7a=s64-c-rp-mo-br100",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "I had a very good experience with this mutual fund assistant company. Their team is knowledgeable and guided me step by step in selecting suitable investment plans. They are transparent, responsive, and always ready to help with queries. Highly recommended for anyone looking for reliable financial guidance. Thanks To Akash ",
    },
    {
        id: 3,
        author_name: "Devika NS C NO 82",
        profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devika",
        rating: 5,
        relative_time_description: "3 days ago",
        text: "My experience with ASP Financial Services has been exceptionally positive. The team provides clear, structured guidance and ensures that every aspect of the process is well understood before taking any steps. I would like to specifically appreciate Mr. Akash for his professionalism, in-depth knowledge, and ability to simplify complex financial concepts. His timely support and transparent approach have made a meaningful difference throughout my investment journey. I am highly satisfied with the services provided and would confidently recommend ASP Financial Services to anyone seeking reliable, well-informed, and client-focused investment advisory support.",
    },
    {
        id: 4,
        author_name: "Eldho",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVS9JHokgYtP4Y7B_DuOh_SlHc5O1roAJNP2jMBoPw3qf05N4HZ=s64-c-rp-mo-br100",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Good customer service and suggestions",
    },{
        id: 5,
        author_name: "Nandakishor MS",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUM-iDigmF-S-W9wq-aM9kDUg3P9kX9LwGXj7AJGcmy18jZops=s64-c-rp-mo-br100",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Very good service from Akash who support and guide well to start a sip and approach any time..well appreciated😍😍😍 keep going and all the best...",
    },
];

export default function Reviews() {
    // We duplicate the list to create a seamless infinite loop effect
    const duplicatedReviews = [...GOOGLE_REVIEWS_MOCK, ...GOOGLE_REVIEWS_MOCK];

    const [mustTransition, setMustTransition] = useState(true);
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const controlsRef = useRef(null);

    // Auto-swipe functionality using framer-motion's animate tracker
    useEffect(() => {
        if (!mustTransition) return;

        const containerWidth = containerRef.current?.scrollWidth / 2 || 1000;

        controlsRef.current = animate(x, -containerWidth, {
            ease: "linear",
            duration: 35, // Adjust this number to change slider speed (higher = slower)
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return () => controlsRef.current?.stop();
    }, [x, mustTransition]);

    // Pause auto-swipe on user interactions (drag/gestures)
    const handleDragStart = () => {
        setMustTransition(false);
        controlsRef.current?.stop();
    };

    const handleDragEnd = () => {
        // Gracefully restart auto-swipe after a brief moment when drag ends
        setMustTransition(true);
    };

    return (
        <section className="relative bg-zinc-950 text-white overflow-hidden py-24 border-t border-white/5">
            {/* Background Amber/Emerald Glow to tie in with Trust.jsx */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-amber-500/[0.02] blur-[130px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-emerald-500/[0.02] blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                <span className="inline-block mb-4 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
                    User Testimonials
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    What Our <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">Investors Say</span>
                </h2>
                <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-base">
                    Real reviews pulled from our Google Business profile. Rated 5/5 stars by over 25000+ community members.
                </p>
            </div>

            {/* Infinite Carousell Track */}
            <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none py-4">
                {/* Left & Right Blurs for modern infinite look */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                <motion.div
                    ref={containerRef}
                    className="flex gap-6 w-max px-6"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -2000, right: 0 }} // Dynamic constraint backup
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[320px] md:w-[400px] shrink-0 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/20 transition-colors duration-300 shadow-xl shadow-black/30"
                        >
                            <div>
                                {/* Header: Avatar & Google Branding */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            className="w-10 h-10 rounded-full bg-zinc-800"
                                        />
                                        <div>
                                            <h4 className="text-sm font-semibold text-zinc-200">
                                                {review.author_name}
                                            </h4>
                                            <p className="text-xs text-zinc-500">
                                                {review.relative_time_description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Google Custom Style 'G' badge */}
                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-white font-bold text-xs">
                                        G
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Copy */}
                                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-4">
                                    "{review.text}"
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}