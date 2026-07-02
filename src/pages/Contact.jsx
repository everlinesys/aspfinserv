import React, { useState } from "react";
import { Mail, Phone, Globe, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    clientType: "nri", 
    enquiryType: "investment", // New field added
    message: "" 
  });
  const [minInvestConfirmed, setMinInvestConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!minInvestConfirmed) return;

    // Determine target WhatsApp number based on Enquiry Type
    // Investment -> +919847729426 | Insurance -> +919400889426
    const targetPhone = formState.enquiryType === "insurance" ? "919400889426" : "919847729426";
    
    // Construct pre-filled template text
    const textMessage = `Hello, I would like to submit an enquiry.
    
*Type:* ${formState.enquiryType.toUpperCase()}
*Name:* ${formState.name}
*Email:* ${formState.email}
*Phone:* ${formState.phone}
*Classification:* ${formState.clientType === "nri" ? "Non-Resident (NRI)" : "Domestic Indian"}
*Objective:* ${formState.message || "N/A"}`;

    // Encode text for the WhatsApp deep-link
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(textMessage)}`;

    setIsSubmitted(true);
    
    // Open WhatsApp tab
    window.open(whatsappUrl, "_blank");

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative bg-zinc-950 text-white py-28 border-t border-white/5 overflow-hidden">
      {/* Background ambient luxury blurs */}
      <div className="absolute top-1/3 right-0 h-[600px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[500px] rounded-full bg-amber-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="max-w-3xl mb-20" data-aos="fade-up">
          <span className="inline-block mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Secure Consultations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Initiate Your Financial Blueprint Today.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg font-light leading-relaxed">
            Whether you are local or overseas, let's map out your assets with structural clarity.
            <span className="block mt-2 text-amber-400/90 font-medium text-base flex items-center gap-2">
              <AlertCircle size={18} className="shrink-0" />
              Please note: We only initiate advisory setups for clients willing to invest a minimum of 10K.
            </span>
          </p>
        </div>

        {/* Main Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Touchpoints & Document Asset Reference */}
          <div className="lg:col-span-5 space-y-10" data-aos="fade-right">

            {/* Quick Touchpoint Channels */}
            <div className="space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500">// Direct Channels</h3>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">Secure Email</p>
                  <a href="mailto:aspfinancialservices6@gmail.com" className="text-sm md:text-base text-zinc-200 hover:text-emerald-400 font-medium transition-colors">aspfinancialservices6@gmail.com</a>
                </div>
              </div>

              {/* Updated to WhatsApp Link */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">Priority Desk (WhatsApp)</p>
                  <a href="https://wa.me/919847729426" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-zinc-200 hover:text-emerald-400 font-medium transition-colors">+91 98477 29426</a>
                </div>
              </div>

              {/* Updated to WhatsApp Link */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">Health Insurance Services (WhatsApp)</p>
                  <a href="https://wa.me/919400889426" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-zinc-200 hover:text-emerald-400 font-medium transition-colors">+91 94008 89426</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">ASP FinEd Community Support</p>
                  <span className="text-sm text-zinc-300 font-light">Exclusive member portal access</span>
                </div>
              </div>
            </div>

            {/* Note Scan / Visual Framework Attachment Card */}
            <div className="relative rounded-2xl border border-white/5 bg-zinc-900/40 p-5 overflow-hidden group">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">// Structured Assessment Framework</p>
              <div className="relative h-48 rounded-xl overflow-hidden bg-zinc-950 border border-white/5 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Annual Financial Review Assessment Matrix"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded border border-white/5 backdrop-blur-sm flex items-center gap-1">
                  <Globe className="w-3 h-3 text-amber-400" /> Model Map Ref: #0753c4
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-500 font-light leading-relaxed">
                Our onboarding architecture strictly mirrors our standard structured review and volatility-mitigation templates.
              </p>
            </div>

          </div>

          {/* Right Side: Secure Contact Interactive Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black">

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-zinc-100">Consultation Initiated</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto font-light">
                    Your details have been assembled. We have directed you to WhatsApp to securely lock in your core clarity session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-serif font-semibold text-zinc-200 border-b border-white/5 pb-4">
                    Onboarding Registration
                  </h3>

                  {/* Enquiry Type Toggle Selection */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-2">Enquiry Category</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, enquiryType: "investment" })}
                        className={`py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all ${formState.enquiryType === "investment"
                            ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 font-bold"
                            : "border-white/5 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        Investment Desk
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, enquiryType: "insurance" })}
                        className={`py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all ${formState.enquiryType === "insurance"
                            ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 font-bold"
                            : "border-white/5 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        Insurance Desk
                      </button>
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rohan Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light"
                    />
                  </div>

                  {/* Dual Grid: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">Contact Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 or +91..."
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light"
                      />
                    </div>
                  </div>

                  {/* Segment Selection */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-2">Investor Classification</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, clientType: "nri" })}
                        className={`py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all ${formState.clientType === "nri"
                            ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 font-bold"
                            : "border-white/5 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        Non-Resident (NRI)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, clientType: "domestic" })}
                        className={`py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all ${formState.clientType === "domestic"
                            ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400 font-bold"
                            : "border-white/5 bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        Domestic Indian
                      </button>
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-zinc-400">Primary Financial Objective</label>
                    <textarea
                      rows="3"
                      placeholder="Specify goals (e.g., Global Tax Efficiency, Systematic Capital Deployment...)"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light resize-none"
                    />
                  </div>

                  {/* Minimum Budget Qualification Filter Hook */}
                  <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/5 flex items-start gap-3">
                    <input
                      id="min-investment-verify"
                      type="checkbox"
                      required
                      checked={minInvestConfirmed}
                      onChange={(e) => setMinInvestConfirmed(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-emerald-500 accent-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="min-investment-verify" className="text-xs text-zinc-400 leading-relaxed cursor-pointer select-none">
                      I confirm that I am willing and able to allocate a <strong className="text-amber-400 font-semibold">minimum investment of 10K</strong> for deployment. I understand submissions below this threshold will not be processed.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!minInvestConfirmed}
                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl transition flex items-center justify-center gap-2 group active:scale-[0.99] ${minInvestConfirmed
                        ? "bg-emerald-600 hover:bg-emerald-500 text-zinc-950 cursor-pointer shadow-emerald-950/20"
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50"
                      }`}
                  >
                    Submit & Forward to WhatsApp
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-600 font-mono">
                    🔒 Zero-Spam Guarantee • Compliance-Assured Protocols
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}