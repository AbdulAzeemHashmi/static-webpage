"use client";

import React from "react";
import { Heart, Github, Mail, MessageCircle, ExternalLink, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/60 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-pink-500 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">Abdul Azeem</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Fast, reliable, and budget-friendly assignment and web development project services for students. Built for Codoc IT Internship Programme Assignment 2.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services Offered</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-400 transition-colors">Instant Price Calculator</a>
              </li>
              <li>
                <a href="#why-me" className="hover:text-pink-400 transition-colors">Why Choose Me</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Direct Connect</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://wa.me/923228535002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  +92 322 8535002
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdulazeem7982@gmail.com"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  abdulazeem7982@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AbdulAzeemHashmi/static-webpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2026 Abdul Azeem. Built for Codoc IT Internship Assignment 2.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
