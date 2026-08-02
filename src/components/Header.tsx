"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Calculator, MessageSquare, Code2, Zap } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white text-[11px] font-bold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Zap className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300 animate-pulse" />
        <span>Need urgent assignment delivery in 24 hours? Chat on WhatsApp: <strong>+92 322 8535002</strong></span>
      </div>

      <header
        className={`fixed top-7 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-2xl shadow-black/60" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Abdul Azeem
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-pink-400 uppercase">
                <Sparkles className="w-2.5 h-2.5" /> Project Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider">
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-purple-400 transition-colors">
              Wizard & Pricing
            </a>
            <a href="#deliverables" className="text-slate-300 hover:text-pink-400 transition-colors">
              Quality Inspector
            </a>
            <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Past Projects
            </a>
            <a href="#reviews" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Student Reviews
            </a>
            <a href="#contact" className="text-slate-300 hover:text-pink-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Header Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all hover:scale-105"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              Price Wizard
            </a>
            <a
              href="https://wa.me/923228535002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/40 hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direct
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-slate-800 px-6 py-6 space-y-4 shadow-2xl mt-2 mx-4 rounded-2xl">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium py-2"
            >
              Services Offered
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-purple-400 font-medium py-2"
            >
              Interactive Price Wizard
            </a>
            <a
              href="#deliverables"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-pink-400 font-medium py-2"
            >
              Deliverable Quality Inspector
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium py-2"
            >
              Past Work Gallery
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 font-medium py-2"
            >
              Student Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-pink-400 font-medium py-2"
            >
              Contact Me
            </a>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-white font-medium text-sm border border-slate-700"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                Launch Price Wizard
              </a>
              <a
                href="https://wa.me/923228535002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-medium text-sm shadow-lg shadow-emerald-900/40"
              >
                💬 WhatsApp Direct (+92 322 8535002)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
