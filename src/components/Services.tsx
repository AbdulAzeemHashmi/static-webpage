"use client";

import React from "react";
import { BookOpen, Code2, Headphones, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "assignments",
      icon: BookOpen,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      glowColor: "hover:border-cyan-500/50",
      title: "Academic Assignments",
      badge: "Fast & Accurate",
      description:
        "Comprehensive, original, and well-researched assignments across any subject or topic. Structured according to university guidelines.",
      points: [
        "100% Original content",
        "Proper citations & formatting",
        "Urgent 24-48 hour delivery options",
        "Free revisions & feedback adjustments",
      ],
    },
    {
      id: "projects",
      icon: Code2,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      glowColor: "hover:border-purple-500/50",
      title: "Tech & Programming Projects",
      badge: "Code + Docs",
      description:
        "Web development (HTML, CSS, JS, React, Next.js), scripting, or database projects. Includes readable code and step-by-step setup guides.",
      points: [
        "Clean, well-commented source code",
        "Comprehensive documentation / README",
        "Responsive, modern UI designs",
        "Live deployment assistance",
      ],
    },
    {
      id: "support",
      icon: Headphones,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      glowColor: "hover:border-pink-500/50",
      title: "Direct 1-on-1 Support",
      badge: "Instant Replies",
      description:
        "Message directly on WhatsApp or Email. Get regular progress updates, request modifications, or clarify project concepts.",
      points: [
        "Direct communication on WhatsApp & Email",
        "Regular progress updates",
        "Explanation of project code/concepts",
        "Affordable pricing for students",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Professional Assistance
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
            What I Offer
          </h3>
          <p className="text-slate-400 text-base">
            High quality work delivered on time. Built specifically to help students succeed in their coursework and projects.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`glass-card glass-card-hover p-8 rounded-3xl border ${service.borderColor} ${service.glowColor} relative flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} border ${service.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#pricing"
                  className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                >
                  <span>Check Price for {service.title.split(" ")[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
