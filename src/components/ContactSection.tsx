"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle2, User, AtSign, FileText, Github } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectType, setSubjectType] = useState("Assignment Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const emailSubject = `${subjectType} from ${name}`;
    const emailBody = `Hi Abdul Azeem,\n\nMy name is ${name} (${email}).\n\nCategory: ${subjectType}\n\nMessage:\n${message}\n\nSent via Assignment & Project Portal`;

    const mailtoUrl = `mailto:abdulazeem7982@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="ambient-glow w-96 h-96 bg-cyan-500 bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-pink-400">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
            📩 Send Me a Message
          </h3>
          <p className="text-slate-400 text-base">
            Have questions about an assignment or project? Fill in the form below to launch Gmail or connect instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Featured Banner */}
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-extrabold text-white mb-2">
                Instant WhatsApp Chat
              </h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Need a super fast response? Reach out directly on WhatsApp for immediate discussion.
              </p>
              <a
                href="https://wa.me/923228535002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/50 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +92 322 8535002
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Email</h5>
                <a
                  href="mailto:abdulazeem7982@gmail.com"
                  className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  abdulazeem7982@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub Profile</h5>
                <a
                  href="https://github.com/AbdulAzeemHashmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-pink-400 transition-colors"
                >
                  @AbdulAzeemHashmi
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
              
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                Fill Form & Launch Gmail
              </h4>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your email app has been opened with the message pre-filled. Click Send in your email client!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmed Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 pl-11 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 pl-11 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                      <AtSign className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={subjectType}
                    onChange={(e) => setSubjectType(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="Assignment Inquiry">📘 Assignment Inquiry</option>
                    <option value="Project Inquiry">💻 Web/Programming Project Inquiry</option>
                    <option value="Custom Quotation">💰 Custom Price Quotation</option>
                    <option value="General Support">📞 General Question / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Message / Project Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your assignment topic, requirements, or tech stack..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-purple-900/40 hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-5 h-5" />
                  Send via Gmail
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
