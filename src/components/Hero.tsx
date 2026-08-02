"use client";

import React from "react";
import { ArrowRight, Calculator, ShieldCheck, Zap, Clock, Code } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="ambient-glow w-96 h-96 bg-cyan-500 top-10 left-1/4" />
      <div className="ambient-glow w-96 h-96 bg-purple-600 top-20 right-1/4" />
      <div className="ambient-glow w-80 h-80 bg-pink-500 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300 shadow-xl animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            Codoc IT Internship Programme — Assignment 2 Portal
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="gradient-text">Abdul Azeem</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            I build custom assignments and software projects for students. 
            <span className="text-cyan-300 font-medium"> Fast, reliable, well-researched,</span> and tailored to fit student budgets.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              Check Prices Instantly
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base flex items-center justify-center gap-2 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-105 shadow-md"
            >
              Message Me
            </a>
          </div>

          {/* Feature Highlights Grid */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Speed</h4>
                <p className="text-sm font-bold text-white">Fast Turnaround</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pricing</h4>
                <p className="text-sm font-bold text-white">From 100 PKR</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quality</h4>
                <p className="text-sm font-bold text-white">Code + Docs</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Support</h4>
                <p className="text-sm font-bold text-white">100% Guaranteed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
