"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Code2,
  FileSpreadsheet,
  GraduationCap,
  Sparkles,
  Calculator,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  MessageCircle,
  Mail,
  Zap,
  Tag,
  DollarSign,
} from "lucide-react";
import { useToast } from "./ToastProvider";

type Currency = "PKR" | "USD";

export default function OrderWizard() {
  const { showToast } = useToast();

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("assignment");
  const [subject, setSubject] = useState("Computer Science & Programming");
  const [gradeGoal, setGradeGoal] = useState("A+ Grade (90%+)");
  const [days, setDays] = useState(5);
  const [currency, setCurrency] = useState<Currency>("PKR");
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  // Conversion rate: 1 USD = 278 PKR
  const USD_RATE = 278;

  // Base Calculation Logic
  const calculateRawPrice = () => {
    let basePrice = 0;
    if (category === "assignment") {
      if (days >= 7) basePrice = 100;
      else if (days >= 3) basePrice = 200;
      else basePrice = 500;
    } else if (category === "webapp") {
      if (days > 7) basePrice = 1500;
      else basePrice = 2500;
    } else if (category === "script") {
      if (days > 7) basePrice = 1000;
      else basePrice = 1800;
    } else {
      // Thesis / Documentation
      if (days > 7) basePrice = 800;
      else basePrice = 1400;
    }

    if (discountApplied) {
      basePrice = Math.round(basePrice * 0.9);
    }

    return basePrice;
  };

  const getPrice = () => {
    const rawPkr = calculateRawPrice();
    if (currency === "USD") {
      return (rawPkr / USD_RATE).toFixed(1);
    }
    return rawPkr.toLocaleString();
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "STUDENT10") {
      setDiscountApplied(true);
      showToast("🎉 Promo code STUDENT10 applied! 10% discount added.", "success");
    } else {
      showToast("⚠️ Invalid promo code. Try 'STUDENT10'", "error");
    }
  };

  const getQuoteText = () => {
    const pkr = calculateRawPrice();
    return `Abdul Azeem Service Quote:
- Category: ${category.toUpperCase()}
- Subject: ${subject}
- Target Grade: ${gradeGoal}
- Deadline: ${days} Day(s) remaining
- Estimated Price: ${pkr} PKR (${(pkr / USD_RATE).toFixed(1)} USD)`;
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(getQuoteText());
    showToast("📋 Quote summary copied to clipboard!", "success");
  };

  const getWhatsAppUrl = () => {
    const text = `Hi Abdul Azeem! I would like to order:\n${getQuoteText()}\nCan we confirm details?`;
    return `https://wa.me/923228535002?text=${encodeURIComponent(text)}`;
  };

  const getGmailUrl = () => {
    const subjectLine = `New Order Request: ${category.toUpperCase()} (${days} Days)`;
    const bodyLine = `Hi Abdul Azeem,\n\nI created an order quote on your portal:\n\n${getQuoteText()}\n\nPlease reply with confirmation details.`;
    return `mailto:abdulazeem7982@gmail.com?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLine)}`;
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="ambient-glow w-96 h-96 bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Interactive 4-Step Project Wizard
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            💰 Calculate Your Price & Requirement Quote
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Customized calculation engine. Select your requirements step-by-step for an instant guaranteed quote.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          
          {/* Step Indicator Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Step {step} of 4</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrency("PKR")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                    currency === "PKR"
                      ? "bg-cyan-500 text-white border-cyan-400"
                      : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}
                >
                  🇵🇰 PKR
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                    currency === "USD"
                      ? "bg-purple-500 text-white border-purple-400"
                      : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}
                >
                  🇺🇸 USD
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1: CATEGORY SELECTION */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Select Work Category
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "assignment",
                    title: "📘 Academic Assignment",
                    desc: "Research papers, essays, problem sets, and lab reports.",
                    tag: "From 100 PKR",
                  },
                  {
                    id: "webapp",
                    title: "💻 Full-Stack Web App",
                    desc: "React, Next.js, HTML/CSS/JS web applications.",
                    tag: "From 1500 PKR",
                  },
                  {
                    id: "script",
                    title: "🐍 Python & Tech Scripts",
                    desc: "Automation scripts, data analysis, and algorithms.",
                    tag: "From 1000 PKR",
                  },
                  {
                    id: "thesis",
                    title: "📄 Documentation & Thesis",
                    desc: "Project reports, IEEE formatting, and slides.",
                    tag: "From 800 PKR",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    className={`p-5 rounded-2xl border text-left transition-all relative group ${
                      category === item.id
                        ? "bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/10 border-cyan-400 text-white shadow-xl shadow-cyan-500/10 scale-[1.02]"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-base text-white">{item.title}</h4>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-300">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  Next: Subject & Requirements <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SUBJECT & GRADE GOAL */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Select Subject & Target Score
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Academic Subject / Domain
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Computer Science & Programming">💻 Computer Science & Programming</option>
                    <option value="Web Development & Software Engineering">🌐 Web Development & Software Eng.</option>
                    <option value="Data Science & Python Scripts">📊 Data Science & Python Scripts</option>
                    <option value="Business Administration & Management">📈 Business & Management</option>
                    <option value="Electrical & Electronics Engineering">⚡ Electrical Engineering</option>
                    <option value="Humanities, History & Literature">📚 Humanities & Literature</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Target Score / Quality Standard
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      "A+ Grade (90%+)",
                      "A Grade (80%+)",
                      "Pass Guarantee (100%)",
                    ].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGradeGoal(g)}
                        className={`p-3.5 rounded-xl text-xs font-bold border transition-all ${
                          gradeGoal === g
                            ? "bg-purple-600 text-white border-purple-400 shadow-md"
                            : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  Next: Deadline & Price <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DEADLINE SLIDER & DISCOUNTS */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-400" />
                Interactive Urgency & Price Engine
              </h3>

              {/* Slider for Days */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Days Remaining Until Deadline:
                  </span>
                  <span className="text-2xl font-black text-cyan-400">
                    {days} {days === 1 ? "Day" : "Days"}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="flex justify-between text-[11px] font-bold text-slate-400">
                  <span>Urgent (1-2 Days)</span>
                  <span>Moderate (3-6 Days)</span>
                  <span>Standard (7+ Days)</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter promo code (e.g. STUDENT10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs uppercase tracking-wider"
                  />
                  <Tag className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs border border-slate-700"
                >
                  Apply Promo
                </button>
              </div>

              {/* Instant Live Price Summary Badge */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Estimated Total</span>
                  <p className="text-3xl font-black text-white">
                    {getPrice()} <span className="text-lg font-bold text-purple-400">{currency}</span>
                  </p>
                </div>
                {discountApplied && (
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    10% Off Applied!
                  </span>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  Generate Quote Summary <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: FINAL QUOTE SUMMARY & ONE-CLICK DISPATCH */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  Your Final Quote Summary
                </h3>
                <button
                  onClick={handleCopyQuote}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Summary
                </button>
              </div>

              {/* Detailed Breakdown Box */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Category:</span>
                    <span className="font-bold text-white capitalize">{category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Subject:</span>
                    <span className="font-bold text-white truncate block">{subject}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Target Grade:</span>
                    <span className="font-bold text-purple-400">{gradeGoal}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Deadline:</span>
                    <span className="font-bold text-cyan-400">{days} Days Remaining</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-300">Final Price Quote:</span>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400">
                    {getPrice()} {currency}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/50 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Quote via WhatsApp
                </a>

                <a
                  href={getGmailUrl()}
                  className="py-4 px-6 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-950/50 hover:scale-105 transition-transform"
                >
                  <Mail className="w-5 h-5" />
                  Launch Gmail Form
                </a>
              </div>

              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Adjust Urgency / Category
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
