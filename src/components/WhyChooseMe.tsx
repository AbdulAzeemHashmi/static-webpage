"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, Award, HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function WhyChooseMe() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the pricing calculator determine the price?",
      answer:
        "Prices are calculated dynamically based on work type (Assignment vs Project) and how many days remain until your deadline. Assignments start from 100 PKR for 7+ days, 200 PKR for 3-6 days, and 500 PKR for urgent (0-2 days). Projects start at 1000 PKR (>7 days) or 2000 PKR (≤7 days).",
    },
    {
      question: "What format will I receive for my assignment or project?",
      answer:
        "For assignments, you receive formatted Word documents / PDFs formatted according to your guidelines. For projects, you receive the full source code (ZIP or GitHub repo) plus setup instructions and documentation.",
    },
    {
      question: "Can I request changes or edits after delivery?",
      answer:
        "Yes! Free revisions are included to ensure your assignment or project strictly meets your instructions.",
    },
    {
      question: "How do I pay and get started?",
      answer:
        "Simply calculate your price on the site and contact me on WhatsApp or Gmail. Once we confirm the requirements, work begins immediately.",
    },
  ];

  return (
    <section id="why-me" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Me Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Quality Assurance
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Students Choose My Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Strict Deadline Discipline</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Never worry about late submissions. Your assignments and projects are delivered before your specified deadline.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Transparent Student Rates</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Clear, upfront pricing with no hidden charges. Use the online price calculator anytime for an instant quote.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Original & Documented Work</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every assignment is crafted from scratch. Every tech project comes with documented code and step-by-step setup guides.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h4 className="text-xl font-bold text-white">Frequently Asked Questions</h4>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-semibold text-white flex items-center justify-between gap-4 hover:text-cyan-300"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
