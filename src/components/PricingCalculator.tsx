"use client";

import React, { useState } from "react";
import { Calculator, Calendar, AlertTriangle, CheckCircle, Sparkles, MessageCircle, RefreshCw } from "lucide-react";

type WorkType = "assignment" | "project";

interface CalculationResult {
  price: number;
  diffDays: number;
  typeLabel: string;
  urgencyLabel: string;
  badgeColor: string;
  error?: string;
}

export default function PricingCalculator() {
  const [workType, setWorkType] = useState<WorkType>("assignment");
  const [deadlineDate, setDeadlineDate] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculatePrice = (type: WorkType, dateStr: string) => {
    if (!dateStr) {
      setResult({
        price: 0,
        diffDays: 0,
        typeLabel: "",
        urgencyLabel: "",
        badgeColor: "",
        error: "⚠️ Please select a deadline date.",
      });
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosenDate = new Date(dateStr);
    chosenDate.setHours(0, 0, 0, 0);

    const diffTime = chosenDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      setResult({
        price: 0,
        diffDays: 0,
        typeLabel: "",
        urgencyLabel: "",
        badgeColor: "",
        error: "❌ The deadline cannot be in the past. Please pick a future date.",
      });
      return;
    }

    let price = 0;
    let typeLabel = "";
    let urgencyLabel = "";
    let badgeColor = "";

    if (type === "assignment") {
      typeLabel = "Assignment";
      if (diffDays >= 7) {
        price = 100;
        urgencyLabel = "Standard Rate (7+ Days)";
        badgeColor = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      } else if (diffDays >= 3) {
        price = 200;
        urgencyLabel = "Urgent Rate (3-6 Days)";
        badgeColor = "bg-amber-500/20 text-amber-400 border-amber-500/30";
      } else {
        price = 500;
        urgencyLabel = "Super Urgent (0-2 Days)";
        badgeColor = "bg-rose-500/20 text-rose-400 border-rose-500/30";
      }
    } else {
      typeLabel = "Project";
      if (diffDays > 7) {
        price = 1000;
        urgencyLabel = "Standard Project Rate (>7 Days)";
        badgeColor = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      } else {
        price = 2000;
        urgencyLabel = "Urgent Project Rate (≤7 Days)";
        badgeColor = "bg-rose-500/20 text-rose-400 border-rose-500/30";
      }
    }

    setResult({
      price,
      diffDays,
      typeLabel,
      urgencyLabel,
      badgeColor,
    });
  };

  const handleQuickAddDays = (days: number) => {
    const target = new Date();
    target.setDate(target.getDate() + days);
    const dateFormatted = target.toISOString().split("T")[0];
    setDeadlineDate(dateFormatted);
    calculatePrice(workType, dateFormatted);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePrice(workType, deadlineDate);
  };

  const getWhatsAppOrderLink = () => {
    if (!result || result.error) return "https://wa.me/923228535002";
    const text = `Hi Abdul Azeem! I calculated a price quote on your website for a ${result.typeLabel}.\n- Deadline: ${deadlineDate} (${result.diffDays} days remaining)\n- Estimated Price: ${result.price} PKR\nCan we discuss the details?`;
    return `https://wa.me/923228535002?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="ambient-glow w-96 h-96 bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
            <Sparkles className="w-3.5 h-3.5" /> Instant Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            💰 Calculate Your Price
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Select your work type and deadline date below. Get an accurate price quote based on deadline urgency.
          </p>
        </div>

        {/* Main Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          
          <form onSubmit={handleCalculate} className="space-y-8">
            
            {/* Work Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                1. Select Type of Work
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setWorkType("assignment");
                    if (deadlineDate) calculatePrice("assignment", deadlineDate);
                  }}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    workType === "assignment"
                      ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="text-2xl mb-2">📘</span>
                  <div>
                    <h4 className="font-bold text-base text-white">Assignment</h4>
                    <p className="text-xs text-slate-400 mt-1">Starting from 100 PKR</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setWorkType("project");
                    if (deadlineDate) calculatePrice("project", deadlineDate);
                  }}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    workType === "project"
                      ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400 text-white shadow-lg shadow-purple-500/10"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="text-2xl mb-2">💻</span>
                  <div>
                    <h4 className="font-bold text-base text-white">Tech Project</h4>
                    <p className="text-xs text-slate-400 mt-1">Starting from 1000 PKR</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Deadline Picker & Quick Select */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="deadlineDate" className="text-sm font-semibold text-slate-300">
                  2. Pick Your Deadline Date
                </label>
                <span className="text-xs text-slate-400">Quick selection:</span>
              </div>

              {/* Quick Choice Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { label: "+1 Day", days: 1 },
                  { label: "+3 Days", days: 3 },
                  { label: "+7 Days", days: 7 },
                  { label: "+14 Days", days: 14 },
                ].map((chip) => (
                  <button
                    key={chip.days}
                    type="button"
                    onClick={() => handleQuickAddDays(chip.days)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 hover:bg-purple-600 hover:text-white border border-slate-700 transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="date"
                  id="deadlineDate"
                  value={deadlineDate}
                  onChange={(e) => {
                    setDeadlineDate(e.target.value);
                    calculatePrice(workType, e.target.value);
                  }}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-white text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Submit / Calculate Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 hover:scale-[1.01] transition-transform"
            >
              <Calculator className="w-5 h-5" />
              Calculate Exact Price
            </button>
          </form>

          {/* Results Output Display */}
          {result && (
            <div className="mt-8 pt-8 border-t border-slate-800">
              {result.error ? (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-sm font-medium">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>{result.error}</span>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-slate-200">
                        {result.typeLabel} Quote
                      </span>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${result.badgeColor}`}>
                      {result.urgencyLabel}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 py-2 border-y border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400">Remaining Time</p>
                      <p className="text-lg font-semibold text-cyan-300">
                        {result.diffDays} Day(s) ({result.diffDays * 24} hours)
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-xs text-slate-400">Estimated Total Price</p>
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400">
                        {result.price} <span className="text-2xl font-bold text-white">PKR</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={getWhatsAppOrderLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-transform hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order this via WhatsApp
                    </a>

                    <a
                      href="#contact"
                      className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                    >
                      Send via Gmail Form
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
