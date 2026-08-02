"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Calculator, MessageSquare, Code2 } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-black/40" : "bg-transparent py-5"
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
            <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider text-pink-400 uppercase">
              <Sparkles className="w-2.5 h-2.5" /> Project Services
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#services"
            className="text-slate-300 hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-slate-300 hover:text-purple-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 hover:after:w-full after:transition-all"
          >
            Pricing Calculator
          </a>
          <a
            href="#why-me"
            className="text-slate-300 hover:text-pink-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all"
          >
            Why Choose Me
          </a>
          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Header Right Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-xl transition-all hover:scale-105 shadow-sm"
          >
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Instant Quote
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all shadow-md shadow-purple-900/30 hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Let&apos;s Chat
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 px-6 py-6 space-y-4 shadow-2xl mt-2 mx-4 rounded-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-2"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-purple-400 font-medium py-2"
          >
            Pricing Calculator
          </a>
          <a
            href="#why-me"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-pink-400 font-medium py-2"
          >
            Why Choose Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium py-2"
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
              Check Prices
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
  );
}
