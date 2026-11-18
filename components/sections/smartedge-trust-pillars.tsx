"use client"

import React from "react"
import {
  UserCheck,
  FileText,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { BorderBeam } from "@/registry/magicui/border-beam"

export function SmartEdgeTrustPillars() {
  const pillars = [
    {
      title: "Interview Preparation",
      icon: UserCheck,
      color: "from-blue-600 to-sky-500",
      accent: "text-sky-500",
      description:
        "Comprehensive preparation covering core coding data structures, OOPs architecture, system design, and common behavioral HR rounds.",
      highlights: [
        "Company-specific question banks",
        "Framework for explaining projects",
        "Salary negotiation techniques",
      ],
    },
    {
      title: "Resume Building",
      icon: FileText,
      color: "from-indigo-600 to-blue-500",
      accent: "text-indigo-500",
      description:
        "We craft high-scoring ATS-friendly resumes that highlight your live deployed GitHub repositories, tech stack mastery, and practical business impact.",
      highlights: [
        "ATS keyword optimization",
        "Clean single-page format",
        "Verified GitHub project links",
      ],
    },
    {
      title: "Mock Interviews",
      icon: Users,
      color: "from-cyan-600 to-blue-600",
      accent: "text-cyan-500",
      description:
        "Realistic 1-on-1 mock interviews conducted by working software developers with line-by-line feedback on code quality and technical clarity.",
      highlights: [
        "Live coding & whiteboard rounds",
        "Stress & confidence handling",
        "Detailed performance scorecards",
      ],
    },
    {
      title: "Certified Courses",
      icon: Award,
      color: "from-amber-500 to-yellow-500",
      accent: "text-amber-500",
      description:
        "Earn verifiable course completion credentials validating hands-on project milestones, code reviews, and practical lab competence.",
      highlights: [
        "Verifiable certificate credential",
        "Portfolio validation badge",
        "Project defense evaluation",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-600/20 bg-sky-50 dark:bg-sky-950 px-3 py-1 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>4 Pillars of Career Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#031B43] dark:text-white tracking-tight">
            How We Get You Job-Ready
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A degree teaches you theory. SmartEdge Academy equips you with the confidence, practical portfolio, and interview sharpness demanded by modern tech employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-sm mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 border-t border-border/60 pt-4 mb-4">
                    {pillar.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/career-assistance"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#087BDF] dark:text-cyan-400 group-hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#062B67] via-[#087BDF] to-[#062B67] p-6 text-center text-white shadow-md">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FFD928] mb-1">
            Our Commitment to Every Learner
          </div>
          <p className="text-lg sm:text-2xl font-black">
            &ldquo;Your Skills. Our Support. A Brighter Future.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
