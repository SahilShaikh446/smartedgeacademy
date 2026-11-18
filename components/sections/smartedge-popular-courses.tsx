"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code,
  Layers,
  Terminal,
  Cpu,
  Database,
  BarChart,
  Bot,
  Zap,
  Globe,
  Palette,
  Smartphone,
  ExternalLink,
} from "lucide-react"

import { COURSES, type CourseItem } from "@/config/courses"
import { siteConfig } from "@/config/site"
import { BorderBeam } from "@/registry/magicui/border-beam"

export function SmartEdgePopularCourses() {
  const [activeCategory, setActiveCategory] = useState<"All" | "IT & Development" | "AI & Automation">("All")

  const filteredCourses = activeCategory === "All"
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory)

  // Map icons
  const getCourseIcon = (id: string) => {
    switch (id) {
      case "java-developer":
        return <Terminal className="size-5 text-amber-500" />
      case "python-developer":
        return <Code className="size-5 text-blue-500" />
      case "data-science":
        return <Cpu className="size-5 text-indigo-500" />
      case "data-analyst":
        return <BarChart className="size-5 text-emerald-500" />
      case "power-bi":
        return <BarChart className="size-5 text-yellow-500" />
      case "sql-developer":
        return <Database className="size-5 text-cyan-500" />
      case "graphic-designer":
        return <Palette className="size-5 text-purple-500" />
      case "mobile-app-developer":
        return <Smartphone className="size-5 text-pink-500" />
      case "chatgpt-for-professionals":
      case "google-gemini":
        return <Bot className="size-5 text-emerald-500" />
      case "antigravity-ai-development":
        return <Zap className="size-5 text-cyan-400" />
      case "n8n-workflow-automation":
      case "business-automation":
        return <Layers className="size-5 text-rose-500" />
      default:
        return <Code className="size-5 text-sky-500" />
    }
  }

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/40 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-100/70 dark:bg-sky-950 px-4 py-1 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>Comprehensive Job-Oriented Curriculum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
            Learn In-Demand Skills. Build Your Future.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From enterprise backend architectures to cutting-edge generative AI workflows, explore our classroom and lab courses designed for both IT and non-IT students in Bhiwandi.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 shadow-sm">
            {(["All", "IT & Development", "AI & Automation"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#062B67] text-white shadow-sm dark:bg-[#087BDF]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat === "All" ? "All Courses (21)" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => {
            const isFeatured = course.featured

            return (
              <div
                key={course.id}
                className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card overflow-hidden ${
                  isFeatured
                    ? "border-sky-500/50 shadow-md ring-1 ring-sky-500/20"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {isFeatured && (
                  <BorderBeam
                    size={200}
                    duration={8}
                    colorFrom="#087BDF"
                    colorTo="#FFD928"
                  />
                )}

                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      {getCourseIcon(course.id)}
                      <span>{course.category}</span>
                    </span>

                    <span className="inline-flex items-center rounded-full bg-[#FFD928]/20 border border-[#FFD928]/40 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#062B67] dark:text-[#FFD928]">
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                    {course.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#087BDF] dark:text-cyan-400 mb-3">
                    {course.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {course.shortDescription}
                  </p>

                  {/* Duration & Eligibility */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-b border-border/50 py-2.5 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                      <GraduationCap className="size-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span className="truncate">{course.level}</span>
                    </div>
                  </div>

                  {/* Skills Covered Pills */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Key Skills Mastered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.skillsCovered.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/60 px-2 py-0.5 text-[11px] font-medium text-sky-900 dark:text-sky-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skillsCovered.length > 4 && (
                        <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                          +{course.skillsCovered.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* What Students Will Build Preview */}
                  {course.whatYouWillBuild.length > 0 && (
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 p-3 text-xs border border-slate-100 dark:border-slate-800/80">
                      <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1 text-[11px]">
                        🛠️ Portfolio Project:
                      </span>
                      <span className="text-slate-600 dark:text-slate-300 text-[11px] line-clamp-2">
                        {course.whatYouWillBuild[0].title} — {course.whatYouWillBuild[0].description}
                      </span>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062B67] dark:text-cyan-300 hover:text-[#087BDF] dark:hover:text-cyan-200 transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/919820624436?text=Hello%20SmartEdge%20Academy%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      course.title
                    )}%20course.%20Please%20share%20the%20batch%20timings%20and%20fees.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[#087BDF] hover:bg-[#0664b8] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Courses Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#062B67] dark:border-cyan-400 bg-white dark:bg-slate-900 px-8 py-3 text-sm font-bold text-[#062B67] dark:text-cyan-300 shadow-sm hover:bg-[#062B67] hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all"
          >
            <span>Explore All 21 Courses &amp; Detailed Curriculum</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
