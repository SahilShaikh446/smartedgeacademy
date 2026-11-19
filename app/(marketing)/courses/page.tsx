import type { Metadata } from "next"
import Link from "next/link"
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  Terminal,
  Code2,
  BarChart,
  Bot,
  Zap,
  Palette,
  Smartphone,
  Database,
  Search,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { COURSES } from "@/config/courses"
import { constructMetadata } from "@/lib/utils"
import { BorderBeam } from "@/registry/magicui/border-beam"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { CoursesDirectoryClient } from "./courses-client"

export const metadata: Metadata = constructMetadata({
  title: "All IT & AI Courses in Bhiwandi | SmartEdge Academy",
  description:
    "Browse 21+ job-oriented software, data, and AI courses in Bhiwandi. Java, Python, Data Science, Data Analyst, Power BI, MERN Stack, React, Cloud & DevOps, ChatGPT, Antigravity, and n8n with 100% Job Assistance.",
  canonicalUrl: "/courses",
  keywords: [
    ...siteConfig.keywords,
    "IT Courses in Bhiwandi",
    "Computer Classes in Bhiwandi",
    "Java Course Bhiwandi",
    "Python Classes Bhiwandi",
    "Data Science Institute Bhiwandi",
  ],
})

export default function CoursesPage() {
  const itCount = COURSES.filter((c) => c.category === "IT & Development").length
  const aiCount = COURSES.filter((c) => c.category === "AI & Automation").length

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <GraduationCap className="size-4 text-[#FFD928]" />
            <span>21+ In-Demand Programs • Classroom &amp; Lab Practical Training</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Learn In-Demand Skills.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              Build Your Future.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From zero coding knowledge to production-grade software development and AI automation. Every course includes hands-on labs, live project building, resume development, and 100% Job Assistance*.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-300">
            <span className="rounded-full bg-sky-100 dark:bg-sky-950 px-3 py-1 text-[#087BDF] dark:text-cyan-400">
              {itCount} IT &amp; Development Tracks
            </span>
            <span>•</span>
            <span className="rounded-full bg-amber-100 dark:bg-amber-950 px-3 py-1 text-amber-700 dark:text-amber-300">
              {aiCount} AI &amp; Automation Tracks
            </span>
            <span>•</span>
            <span className="rounded-full bg-emerald-100 dark:bg-emerald-950 px-3 py-1 text-emerald-700 dark:text-emerald-300">
              Open to All Degrees &amp; 12th Pass
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Courses Directory (Client Component with Search & Filters) */}
      <CoursesDirectoryClient courses={COURSES} />
    </div>
  )
}
