"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calculator, ShieldCheck, Zap, Clock, Code2, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient Radial Background Glow Orbs */}
      <div className="ambient-glow w-96 h-96 bg-cyan-500 top-10 left-1/4" />
      <div className="ambient-glow w-96 h-96 bg-purple-600 top-20 right-1/4" />
      <div className="ambient-glow w-80 h-80 bg-pink-500 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Activity Ticker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-xs font-semibold text-purple-300 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Codoc IT Internship Programme — Assignment 2 Portal
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hi, I&apos;m <span className="gradient-text">Abdul Azeem</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build custom <span className="text-cyan-300 font-bold">Academic Assignments</span> & <span className="text-purple-300 font-bold">Full-Stack Software Projects</span> for university students. Fast, well-researched, and tailored to student budgets.
            </p>

            {/* Quality Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 0% Turnitin Plagiarism
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Source Code + Documentation
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-pink-400" /> Free Unlimited Revisions
              </span>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                Launch 4-Step Price Wizard
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/923228535002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direct
              </a>
            </div>

            {/* Feature Highlights Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Turnaround</p>
                <p className="text-xs font-bold text-cyan-300">24-48 Hours</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Starting Price</p>
                <p className="text-xs font-bold text-purple-300">100 PKR</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Pass Guarantee</p>
                <p className="text-xs font-bold text-pink-300">100% Score</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Direct Support</p>
                <p className="text-xs font-bold text-emerald-300">WhatsApp & Email</p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Visual Graphic Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-3 rounded-3xl border border-slate-800 shadow-2xl relative group overflow-hidden">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero_illustration.png"
                  alt="Student Assignment & Software Project Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Glass Badges on Image */}
              <div className="absolute top-6 left-6 glass-card px-4 py-2 rounded-2xl border border-cyan-500/40 text-xs font-bold text-white shadow-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Next.js & React Full-Stack</span>
              </div>

              <div className="absolute bottom-6 right-6 glass-card px-4 py-2 rounded-2xl border border-purple-500/40 text-xs font-bold text-purple-300 shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>0% Turnitin Verified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
