"use client";

import React, { useState } from "react";
import { Code2, FileText, CheckCircle2, ShieldCheck, Copy, Sparkles, Terminal, FileCode, Layers } from "lucide-react";
import { useToast } from "./ToastProvider";

export default function DeliverableInspector() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<"code" | "document" | "db">("code");

  const sampleCode = `// Sample Deliverable: Full-Stack React Component with TypeScript
import React, { useState, useEffect } from 'react';

interface StudentProjectProps {
  title: string;
  grade: 'A+' | 'A' | 'B';
  isVerified: boolean;
}

export const ProjectCard: React.FC<StudentProjectProps> = ({ title, grade, isVerified }) => {
  const [status, setStatus] = useState<'Pending' | 'Completed'>('Completed');

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="inline-block px-3 py-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full mt-2">
        Score: {grade} (Verified 0% Plagiarism)
      </span>
    </div>
  );
};`;

  const sampleSql = `-- Sample Database Schema Deliverable
CREATE TABLE StudentAssignments (
    AssignmentID INT PRIMARY KEY AUTO_INCREMENT,
    StudentName VARCHAR(100) NOT NULL,
    SubjectName VARCHAR(100) NOT NULL,
    DeadlineDate DATE NOT NULL,
    PricePKR INT NOT NULL,
    Status ENUM('Quoted', 'In Progress', 'Delivered') DEFAULT 'Delivered',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("📋 Deliverable code snippet copied to clipboard!", "success");
  };

  return (
    <section id="deliverables" className="py-20 relative bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" /> Proof of Quality
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            🔍 Sample Deliverable Inspector
          </h2>
          <p className="text-slate-400 text-base">
            Inspect live code snippets, research paper formats, and database schemas delivered to students.
          </p>
        </div>

        {/* Inspector Card Container */}
        <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Tab Navigation Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 py-4 gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "code"
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-4 h-4" /> React / TypeScript Code
              </button>
              <button
                onClick={() => setActiveTab("document")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "document"
                    ? "bg-purple-500 text-white shadow-md shadow-purple-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" /> Academic Paper Report
              </button>
              <button
                onClick={() => setActiveTab("db")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "db"
                    ? "bg-pink-500 text-white shadow-md shadow-pink-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-4 h-4" /> SQL Database Schema
              </button>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" /> 0% Turnitin Plagiarism
              </span>
              <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified A+ Quality
              </span>
            </div>
          </div>

          {/* TAB CONTENT: CODE */}
          {activeTab === "code" && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4 text-cyan-400" /> StudentProjectCard.tsx
                </span>
                <button
                  onClick={() => handleCopyCode(sampleCode)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Code
                </button>
              </div>

              <pre className="p-6 rounded-2xl bg-[#070a12] border border-slate-800 text-xs sm:text-sm text-cyan-300 font-mono overflow-x-auto leading-relaxed shadow-inner">
                <code>{sampleCode}</code>
              </pre>
            </div>
          )}

          {/* TAB CONTENT: ACADEMIC DOCUMENT */}
          {activeTab === "document" && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">IEEE Research Paper: Neural Networks in Modern Web Apps</h4>
                    <p className="text-xs text-slate-400">Formatted according to IEEE Guidelines | 12 Pages</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/30">
                    Grade: 100/100
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;Abstract— This paper evaluates the performance of client-side web application state management using Next.js 15 App Router. The research includes full literature review, standard citations, and experimental benchmarks...&rdquo;
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Turnitin Score</span>
                    <span className="text-sm font-extrabold text-emerald-400">0% Similarity</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Citations</span>
                    <span className="text-sm font-extrabold text-cyan-300">APA / IEEE 2026</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Grammar Score</span>
                    <span className="text-sm font-extrabold text-purple-300">100/100</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Delivery</span>
                    <span className="text-sm font-extrabold text-pink-400">24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: DATABASE SCHEMA */}
          {activeTab === "db" && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-2 font-mono">
                  <FileCode className="w-4 h-4 text-pink-400" /> schema.sql
                </span>
                <button
                  onClick={() => handleCopyCode(sampleSql)}
                  className="flex items-center gap-1.5 text-xs font-bold text-pink-300 hover:text-pink-200 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy SQL
                </button>
              </div>

              <pre className="p-6 rounded-2xl bg-[#070a12] border border-slate-800 text-xs sm:text-sm text-pink-300 font-mono overflow-x-auto leading-relaxed shadow-inner">
                <code>{sampleSql}</code>
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
