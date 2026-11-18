"use client"

import React from "react"
import Link from "next/link"
import {
  Code2,
  BookOpen,
  Briefcase,
  BrainCircuit,
  FileText,
  UserCheck,
  Users,
  Compass,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { NumberTicker } from "@/registry/magicui/number-ticker"
import { BorderBeam } from "@/registry/magicui/border-beam"

export function SmartEdgeWhyUs() {
  const benefits = [
    {
      title: "Practical, Hands-On Training",
      icon: Code2,
      color: "from-blue-600 to-sky-500",
      description:
        "70% of learning happens through live coding in terminal labs. You write, debug, and ship software rather than memorizing slides.",
      valueProp: "Build code muscle memory from day one.",
    },
    {
      title: "Industry-Oriented Curriculum",
      icon: BookOpen,
      color: "from-sky-500 to-cyan-500",
      description:
        "Designed alongside technical hiring leads to match the frameworks and libraries currently demanded in Maharashtra's tech job market.",
      valueProp: "Zero outdated academic fluff.",
    },
    {
      title: "Real-World Projects",
      icon: Briefcase,
      color: "from-cyan-500 to-teal-500",
      description:
        "Build full-stack portals, BI executive dashboards, and autonomous AI agents with public GitHub repositories and live demo URLs.",
      valueProp: "Show real proof of work, not just certificates.",
    },
    {
      title: "AI-Powered Learning",
      icon: BrainCircuit,
      color: "from-indigo-600 to-purple-600",
      description:
        "Integrate ChatGPT, Gemini, Antigravity, and n8n workflows directly into your daily developer tooling for 10x coding productivity.",
      valueProp: "Stay ahead of industry automation trends.",
    },
    {
      title: "Resume Development",
      icon: FileText,
      color: "from-violet-600 to-pink-600",
      description:
        "Craft high-scoring, ATS-optimized resumes that pass automated recruiter screenings and highlight your production code contributions.",
      valueProp: "Get shortlisted for interviews consistently.",
    },
    {
      title: "Interview Preparation",
      icon: UserCheck,
      color: "from-rose-600 to-amber-600",
      description:
        "Comprehensive training in Data Structures, Algorithms, System Architecture, and HR behavioural scenarios with targeted answer frameworks.",
      valueProp: "Walk into technical interviews with total clarity.",
    },
    {
      title: "Mock Interviews",
      icon: Users,
      color: "from-amber-500 to-yellow-500",
      description:
        "1-on-1 simulated interviews with senior software developers providing detailed scorecards, code quality feedback, and communication tips.",
      valueProp: "Identify and fix weaknesses before real company rounds.",
    },
    {
      title: "Career Guidance",
      icon: Compass,
      color: "from-emerald-600 to-teal-600",
      description:
        "Personalized mentoring to help 12th pass, BSc, BCA, BCom, and engineering graduates choose the right role and negotiate fair compensation.",
      valueProp: "Clear long-term roadmap tailored to your strengths.",
    },
    {
      title: "100% Job Assistance*",
      icon: Award,
      color: "from-blue-700 to-[#062B67]",
      description:
        "Dedicated placement coordinators share your verified portfolio with actively hiring tech firms and coordinate direct interview opportunities.",
      valueProp: "End-to-end support until you land your tech role.",
      highlight: true,
    },
  ]

  const metrics = [
    {
      value: 21,
      suffix: "+",
      label: "In-Demand Courses",
      sublabel: "IT & AI specialized programs",
    },
    {
      value: 100,
      suffix: "%",
      label: "Job Assistance Support*",
      sublabel: "Resume, mocks & referrals",
    },
    {
      value: 6,
      suffix: "",
      label: "Live Project Tracks",
      sublabel: "Full stack, BI, AI & workflows",
    },
    {
      value: 1,
      suffix: "-on-1",
      label: "Mock Interviews",
      sublabel: "With senior tech mentors",
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>Why SmartEdge Academy?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062B67] dark:text-white tracking-tight">
            Your Skills. Our Support.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              A Brighter Future.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We don&apos;t just teach syntax—we transform students and degree holders into job-ready software developers, data analysts, and AI automation experts through rigorous hands-on practice.
          </p>
        </div>

        {/* 9 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon
            return (
              <div
                key={idx}
                className={`group relative rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  b.highlight
                    ? "border-2 border-[#FFD928] bg-gradient-to-br from-[#062B67] to-[#031B43] text-white shadow-lg"
                    : "border-slate-200 dark:border-slate-800 bg-card hover:border-[#087BDF]/40 text-slate-900 dark:text-white"
                }`}
              >
                {b.highlight && (
                  <BorderBeam
                    size={160}
                    duration={8}
                    delay={0}
                    colorFrom="#FFD928"
                    colorTo="#00D5F5"
                  />
                )}

                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-md`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      b.highlight
                        ? "bg-[#FFD928] text-[#062B67]"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  className={`text-lg sm:text-xl font-black mb-2 ${
                    b.highlight ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {b.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    b.highlight ? "text-slate-200" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {b.description}
                </p>

                <div
                  className={`pt-3 border-t text-xs font-semibold flex items-center gap-1.5 ${
                    b.highlight
                      ? "border-white/15 text-[#FFD928]"
                      : "border-slate-100 dark:border-slate-800 text-[#087BDF] dark:text-cyan-400"
                  }`}
                >
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>{b.valueProp}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Genuine Metrics Bar with Number Ticker */}
        <div className="mt-14 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-sky-50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            {metrics.map((m, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i !== 0 ? "lg:pl-6" : ""}`}>
                <div className="text-3xl sm:text-5xl font-black text-[#062B67] dark:text-white tracking-tight flex items-center justify-center">
                  <NumberTicker value={m.value} className="text-[#062B67] dark:text-white" />
                  <span className="text-[#087BDF]">{m.suffix}</span>
                </div>
                <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {m.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {m.sublabel}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-center">
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              *100% Job Assistance Support Disclosure: SmartEdge Academy provides complete career guidance, resume development, mock interviews, and active company interview coordination to help students get hired.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
