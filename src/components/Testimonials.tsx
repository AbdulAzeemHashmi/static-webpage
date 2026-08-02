"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, Award, Users, ThumbsUp, Clock } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed K.",
      university: "FAST NUCES — Computer Science",
      project: "Full-Stack React & Node.js Assignment",
      rating: 5,
      comment:
        "Abdul Azeem saved my semester project! Delivered clean Next.js code with full documentation ahead of the deadline. Passed with A+!",
    },
    {
      name: "Zainab M.",
      university: "COMSATS University — Software Eng.",
      project: "Python Data Analysis & Web Scraping Script",
      rating: 5,
      comment:
        "Fast response on WhatsApp and super reasonable student prices. The Python script worked flawlessly and included step-by-step setup guides.",
    },
    {
      name: "Usman R.",
      university: "NUST — Electrical Engineering",
      project: "IEEE Format Research Paper Assignment",
      rating: 5,
      comment:
        "Got 0% Turnitin plagiarism report and 100/100 marks on my research paper assignment. Highly recommended for urgent deadlines!",
    },
  ];

  return (
    <section id="reviews" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Milestone Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="glass-card p-6 rounded-3xl border border-cyan-500/20 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white">500+</p>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Assignments Done</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-purple-500/20 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white">99.8%</p>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">On-Time Delivery</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-pink-500/20 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white">4.9 / 5.0</p>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Student Rating</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white">20+</p>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Universities</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Student Trust
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white">
            ⭐ Verified Student Reviews
          </h3>
          <p className="text-slate-400 text-base">
            See what students say about code quality, turnaround speed, and grading outcomes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" /> Verified Student
                  </span>
                </div>
                <p className="text-[11px] font-medium text-cyan-400">{rev.university}</p>
                <p className="text-[10px] text-slate-400">{rev.project}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
