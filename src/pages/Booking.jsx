import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

export default function Booking() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [sessionType, setSessionType] = useState("Full Advisory Intro");

    // Premium, predefined time slots optimized for cross-border/domestic time zones
    const timeSlots = [
        "10:00 AM IST",
        "11:30 AM IST",
        "02:00 PM IST",
        "04:30 PM IST",
        "06:00 PM IST"
    ];

    const handleWhatsAppRedirect = () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select a convenient date and time slot first.");
            return;
        }

        const phoneNumber = "919876543210"; // Replace with your verified company phone number
        const message = `Hello Akash S, I would like to book a strategic Consultation slot.
    
• Session Type: ${sessionType}
• Preferred Date: ${selectedDate}
• Preferred Time: ${selectedTime}

Please confirm availability for our core clarity session. Thank you.`;

        // Safe, cross-platform URI encoder for clean browser handoff
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, "_blank");
    };

    // Generate today's date dynamically in YYYY-MM-DD format to disable past dates in the calendar picker
    const getTodayString = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    };

    return (
        <section id="booking" className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
            {/* Structural Ambient Glow Backdrops */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 h-[400px] w-[400px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
                    <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                        Realtime Allocation Slots
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
                        Secure Your Priority Session
                    </h2>
                    <p className="mt-4 text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto">
                        Select your preferred consultation window below. Your request will instantly format into an encrypted handoff straight to our WhatsApp desk.
                    </p>
                </div>

                {/* Calendar and Scheduler Card Layout */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

                    {/* Form / Inputs Panel */}
                    <div
                        className="md:col-span-7 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-xl flex flex-col justify-between space-y-6"
                        data-aos="fade-right"
                    >
                        {/* Step 1: Strategy Focus Selection */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-mono tracking-wider text-zinc-500 block">01. Choose Focus Model</label>
                            <select
                                value={sessionType}
                                onChange={(e) => setSessionType(e.target.value)}
                                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                            >
                                <option value="Full Advisory Intro">Full Advisory Intro (Financial Planning)</option>
                                <option value="Annual Financial Checkup">Annual Financial Review (Existing Clients)</option>
                                <option value="NRI Asset Consultation">NRI Cross-Border Structuring</option>
                                <option value="MFund Course Validation">MFund Course Enrollment Audit</option>
                            </select>
                        </div>

                        {/* Step 2: Custom Native Date Picker */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-mono tracking-wider text-zinc-500 block flex items-center gap-2">
                                <CalendarIcon className="w-3.5 h-3.5 text-emerald-400" /> 02. Select Available Date
                            </label>
                            <input
                                type="date"
                                min={getTodayString()}
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50 transition-all font-light tracking-wide scheme-dark"
                            />
                        </div>

                        {/* Step 3: Interactive Time Segment Chips */}
                        <div className="space-y-3">
                            <label className="text-xs uppercase font-mono tracking-wider text-zinc-500 block flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-emerald-400" /> 03. Pick Time Slot
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {timeSlots.map((time, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 px-2 rounded-xl text-xs font-mono text-center border transition-all duration-200 ${selectedTime === time
                                                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                                                : "border-white/5 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800"
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Direct Hand-off Blueprint Receipt Panel */}
                    <div
                        className="md:col-span-5 relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/90 p-8 flex flex-col justify-between shadow-2xl shadow-black"
                        data-aos="fade-left"
                    >
                        {/* Top Glow bar line */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                        <div className="space-y-6">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 border-b border-white/5 pb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Encryption
                            </h3>

                            <div className="space-y-4 rounded-2xl bg-zinc-950/80 p-5 border border-white/5 font-light">
                                <p className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Appointment Overview</p>

                                <div>
                                    <span className="text-xs text-zinc-500 block">Framework Type:</span>
                                    <span className="text-sm text-zinc-200 font-medium">{sessionType}</span>
                                </div>

                                <div>
                                    <span className="text-xs text-zinc-500 block">Target Date:</span>
                                    <span className="text-sm text-zinc-200 font-mono font-medium">
                                        {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "Not designated"}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-xs text-zinc-500 block">Target Horizon Window:</span>
                                    <span className="text-sm text-emerald-400 font-mono font-bold">
                                        {selectedTime || "No slot selected"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={handleWhatsAppRedirect}
                                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 group transition active:scale-[0.99]"
                            >
                                <MessageSquare className="w-4 h-4 fill-zinc-950" />
                                Confirm via WhatsApp
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                            </button>

                            <p className="text-[10px] text-center text-zinc-600 font-mono mt-4">
                                Instant routing • Secure priority validation protocol
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}