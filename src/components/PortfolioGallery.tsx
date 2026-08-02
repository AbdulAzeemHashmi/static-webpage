"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Code2, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "python" | "academic" | "db";
  categoryLabel: string;
  image: string;
  grade: string;
  timeframe: string;
  tags: string[];
  description: string;
}

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: "1",
      title: "Student Portal & Assignment Pricing Web App",
      category: "web",
      categoryLabel: "Web Development",
      image: "/images/portfolio_mockup.png",
      grade: "Score: 100/100",
      timeframe: "48 Hours",
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      description: "Full-stack glassmorphic single-page web app with interactive price calculation logic and mailto integration.",
    },
    {
      id: "2",
      title: "IEEE Neural Network Research Paper & Latex Report",
      category: "academic",
      categoryLabel: "Academic Research",
      image: "/images/academic_mockup.png",
      grade: "Grade: A+ (0% Plagiarism)",
      timeframe: "24 Hours",
      tags: ["LaTeX", "IEEE Format", "Python", "BibTeX"],
      description: "12-page research report with full literature review, APA/IEEE citations, and experimental chart analysis.",
    },
    {
      id: "3",
      title: "Python Data Automation & Web Scraper Script",
      category: "python",
      categoryLabel: "Python & Data Science",
      image: "/images/hero_illustration.png",
      grade: "Grade: A+",
      timeframe: "12 Hours",
      tags: ["Python 3.12", "Pandas", "BeautifulSoup", "Asyncio"],
      description: "High-performance data extraction script with automatic Excel exporting and error logging.",
    },
    {
      id: "4",
      title: "University Database Management System & SQL Queries",
      category: "db",
      categoryLabel: "Database Systems",
      image: "/images/portfolio_mockup.png",
      grade: "Score: 98/100",
      timeframe: "36 Hours",
      tags: ["MySQL", "ER Diagrams", "Complex Joins", "Triggers"],
      description: "Normalized relational schema with complex stored procedures, triggers, and comprehensive documentation.",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            📁 Past Student Work & Projects Gallery
          </h2>
          <p className="text-slate-400 text-base">
            Explore recent student assignments and web development projects completed with top grade outcomes.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "💻 Web Apps" },
            { id: "python", label: "🐍 Python & AI" },
            { id: "academic", label: "📘 Academic Papers" },
            { id: "db", label: "🗄️ Databases" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400 shadow-lg shadow-purple-900/30 scale-105"
                  : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-cyan-300 text-[11px] font-bold border border-cyan-500/30 backdrop-blur-md">
                  {project.categoryLabel}
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-extrabold shadow-md">
                  {project.grade}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 sm:px-8 py-4 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between">
                <span className="text-xs text-slate-400">Delivery: {project.timeframe}</span>
                <a
                  href={`https://wa.me/923228535002?text=${encodeURIComponent(
                    `Hi Abdul Azeem! I saw your portfolio project "${project.title}" and want a similar project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Order Similar Project <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
