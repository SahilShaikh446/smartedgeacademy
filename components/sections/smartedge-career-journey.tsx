"use client"

import React from "react"
import Link from "next/link"
import {
  BookOpen,
  Terminal,
  Layers,
  FileText,
  UserCheck,
  Briefcase,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react"

export function SmartEdgeCareerJourney() {
  const steps = [
    {
      step: "01",
      title: "Learn Core Concepts",
      subtitle: "Solid Theoretical & Conceptual Clarity",
      icon: BookOpen,
      color: "from-blue-600 to-sky-500",
      description:
        "Understand why systems work the way they do. Break down syntax, memory models, algorithms, and design patterns step-by-step with experienced trainers.",
    },
    {
      step: "02",
      title: "Practice Daily in Lab",
      subtitle: "Hands-On Coding & Muscle Memory",
      icon: Terminal,
      color: "from-sky-500 to-cyan-500",
      description:
        "Spend majority of class time in active terminal labs. Solve targeted coding challenges, debug runtime exceptions, and practice clean architectural code.",
    },
    {
      step: "03",
      title: "Build Real-World Projects",
      subtitle: "Proof of Work on GitHub",
      icon: Layers,
      color: "from-cyan-500 to-teal-500",
      description:
        "Develop enterprise-style client applications—full stack web portals, BI dashboards, or autonomous automation pipelines with live cloud deployment URLs.",
    },
    {
      step: "04",
      title: "Build ATS-Scoring Resume",
      subtitle: "Get Noticed by Tech Recruiters",
      icon: FileText,
      color: "from-indigo-600 to-blue-500",
      description:
        "Transform raw qualifications into an ATS-optimized software resume featuring verified technical stacks, GitHub codebases, and measurable outcomes.",
    },
    {
      step: "05",
      title: "1-on-1 Mock Interviews",
      subtitle: "Sharpen Code & Behavioral Poise",
      icon: UserCheck,
      color: "from-amber-500 to-yellow-500",
      description:
        "Face realistic technical whiteboard questions, live problem solving, system design inquiries, and HR questions with actionable scorecards.",
    },
    {
      step: "06",
      title: "100% Job Assistance*",
      subtitle: "Ongoing Placement Guidance",
      icon: Briefcase,
      color: "from-emerald-600 to-green-500",
      description:
        "Receive verified job alerts, interview referrals, hiring partner coordination, and continuous application guidance until you sign your offer letter.",
    },
  ]

  return (
    <section id="career-journey" className="py-16 md:py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-50 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>The Proven Roadmap to Placement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
            Learn Skills. Build Confidence.
            <br />
            <span className="text-[#087BDF] dark:text-[#00D5F5]">
              Prepare for Your Career.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Our structured 6-phase journey takes you from your current academic qualification or non-tech background to a job-ready professional armed with proof of competence.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#087BDF] dark:text-cyan-400 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40 flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Phase {item.step} Milestone</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Support Transparency Box */}
        <div className="mt-14 rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#062B67] text-[#00D5F5]">
              <ShieldCheck className="size-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#062B67] dark:text-white">
                Transparent Job Assistance Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                We believe in genuine skill development over false promises. Every student who completes our projects and mock interviews receives active interview opportunity updates, hiring partner referrals, and ongoing recruiter support.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/career-assistance"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#087BDF] hover:bg-[#0664b8] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all"
            >
              <span>Explore Career Assistance Program</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
