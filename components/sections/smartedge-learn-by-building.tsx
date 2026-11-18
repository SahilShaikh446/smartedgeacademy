"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Globe,
  BarChart3,
  Sparkles,
  Bot,
  Workflow,
  LineChart,
  Megaphone,
  ArrowRight,
  Code2,
  ExternalLink,
  Layers,
  CheckCircle2,
} from "lucide-react"

import { BorderBeam } from "@/registry/magicui/border-beam"

export function SmartEdgeLearnByBuilding() {
  const projects = [
    {
      category: "Web Applications",
      icon: Globe,
      color: "from-blue-600 to-sky-500",
      title: "Multi-Vendor E-Commerce & Marketplace",
      description:
        "Full stack portal with JWT authentication, product catalog, Razorpay payment gateway integration, and real-time inventory management.",
      techStack: ["Java / Spring Boot", "React.js", "MySQL", "Tailwind CSS"],
      outcome: "Deployed live on cloud with automated CI/CD pipeline and GitHub repo for resumes.",
    },
    {
      category: "Business Dashboards",
      icon: BarChart3,
      color: "from-amber-500 to-yellow-500",
      title: "Logistics & Supply Chain Operations BI",
      description:
        "Tailored to Bhiwandi's massive warehousing corridor. Tracks warehouse turnover, truck turnaround times, stock aging, and dispatch metrics.",
      techStack: ["Power BI", "DAX Formulas", "SQL Server", "Advanced Excel"],
      outcome: "Executive reporting dashboard with automated email alerts and dynamic KPI drilldowns.",
    },
    {
      category: "AI-Powered Applications",
      icon: Bot,
      color: "from-purple-600 to-indigo-600",
      title: "Autonomous Customer Support AI Agent",
      description:
        "RAG (Retrieval-Augmented Generation) assistant that reads enterprise product PDFs and answers customer inquiries on WhatsApp 24/7.",
      techStack: ["Antigravity", "ChatGPT API", "FastAPI (Python)", "Vector DB"],
      outcome: "Interactive AI web widget deployed with zero human intervention needed for 80% queries.",
    },
    {
      category: "Automation Workflows",
      icon: Workflow,
      color: "from-rose-600 to-pink-500",
      title: "Zero-Touch Healthcare / Order Intake Pipeline",
      description:
        "Extracts invoice data from incoming emails, validates GST numbers, updates Google Sheets, and triggers instant WhatsApp booking alerts.",
      techStack: ["n8n Automation", "Webhooks", "Google Workspace", "WhatsApp API"],
      outcome: "Saves 15+ hours weekly of manual data entry with 100% error-free execution.",
    },
    {
      category: "Data Analytics Projects",
      icon: LineChart,
      color: "from-emerald-600 to-teal-500",
      title: "Customer Churn & Retention Machine Learning",
      description:
        "Analyzes historical user behavioral data to predict churn probabilities and recommend high-conversion promotional strategies.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Streamlit Dashboard"],
      outcome: "End-to-end interactive prediction tool running live in the browser.",
    },
    {
      category: "Digital Marketing Campaigns",
      icon: Megaphone,
      color: "from-cyan-600 to-blue-600",
      title: "Full-Funnel Local Lead Generation Engine",
      description:
        "Complete AI-assisted SEO content cluster, high-converting landing page, Meta Ads campaign, and automated CRM drip sequence.",
      techStack: ["Google Ads", "Meta Ads Manager", "GA4", "Canva Pro", "ChatGPT"],
      outcome: "Proven client campaign delivering verifiable leads under target CPL benchmarks.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-3">
            <Code2 className="size-3.5 text-[#FFD928]" />
            <span>Practical Project-Based Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Don&apos;t Just Learn Technology.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#FFD928]">
              Build With It.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Employers hire candidates who have proof of work. Every SmartEdge Academy student graduates with live deployed applications, measurable dashboards, and portfolio repositories that stand out to hiring managers.
          </p>
        </div>

        {/* 6 Interactive Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon
            return (
              <div
                key={proj.title}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 group"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                      <Icon className="size-3.5" />
                      <span>{proj.category}</span>
                    </span>

                    <span className="text-[10px] font-mono text-slate-400">
                      Project #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Measurable Project Outcome */}
                <div className="border-t border-white/10 pt-4 mt-2">
                  <div className="flex items-start gap-2 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-emerald-400" />
                    <span className="text-[11px] leading-tight text-slate-300">
                      <strong className="text-emerald-400 font-semibold">Outcome: </strong>
                      {proj.outcome}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-14 text-center">
          <Link
            href="/practical-training"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD928] hover:bg-[#ffe14d] px-8 py-3.5 text-sm font-black text-[#031B43] shadow-lg transition-transform hover:scale-105"
          >
            <span>Explore All Hands-On Training Modules</span>
            <ArrowRight className="size-4 text-[#062B67]" />
          </Link>
        </div>

      </div>
    </section>
  )
}
