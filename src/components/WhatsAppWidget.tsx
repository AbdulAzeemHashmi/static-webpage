"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Callout Popup */}
      <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card border border-emerald-500/40 text-xs font-semibold text-slate-100 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Need quick help? Chat on WhatsApp</span>
        <button
          onClick={() => setClosed(true)}
          className="text-slate-400 hover:text-white ml-1"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/923228535002"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-[#090d16]" />
      </a>
    </div>
  );
}
