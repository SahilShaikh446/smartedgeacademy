"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  Clock,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code2,
  Terminal,
  BarChart,
  Bot,
  Zap,
  Layers,
  Palette,
  Smartphone,
  Database,
  ExternalLink,
} from "lucide-react"

import type { CourseItem } from "@/config/courses"
import { BorderBeam } from "@/registry/magicui/border-beam"

interface CoursesDirectoryClientProps {
  courses: CourseItem[]
}

export function CoursesDirectoryClient({ courses }: CoursesDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"All" | "IT & Development" | "AI & Automation">("All")

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        query === "" ||
        course.title.toLowerCase().includes(query) ||
        course.subtitle.toLowerCase().includes(query) ||
        course.shortDescription.toLowerCase().includes(query) ||
        course.skillsCovered.some((s) => s.toLowerCase().includes(query)) ||
        course.toolsAndTech.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [courses, activeCategory, searchQuery])

  const getCourseIcon = (id: string) => {
    switch (id) {
      case "java-developer":
        return <Terminal className="size-5 text-amber-500" />
      case "python-developer":
        return <Code2 className="size-5 text-blue-500" />
      case "data-science":
        return <Layers className="size-5 text-indigo-500" />
      case "data-analyst":
      case "power-bi":
        return <BarChart className="size-5 text-emerald-500" />
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
      default:
        return <GraduationCap className="size-5 text-[#087BDF]" />
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === "All"
                  ? "bg-[#062B67] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Courses ({courses.length})
            </button>
            <button
              onClick={() => setActiveCategory("IT & Development")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === "IT & Development"
                  ? "bg-[#062B67] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              IT &amp; Development
            </button>
            <button
              onClick={() => setActiveCategory("AI & Automation")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === "AI & Automation"
                  ? "bg-[#062B67] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI &amp; Automation
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search course, skill, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-card pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
          <span>Showing {filteredCourses.length} programs</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#087BDF] hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center max-w-md mx-auto my-12">
            <GraduationCap className="size-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching courses found
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {c.popular && (
                  <BorderBeam
                    size={160}
                    duration={8}
                    delay={0}
                    colorFrom="#FFD928"
                    colorTo="#087BDF"
                  />
                )}

                <div>
                  {/* Top Bar: Icon + Badge + Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                      {getCourseIcon(c.id)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        <Clock className="size-3 text-slate-400" />
                        <span>{c.duration}</span>
                      </span>
                      <span className="rounded-full bg-amber-100 dark:bg-amber-950 px-2.5 py-1 text-[10px] font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                        {c.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#087BDF] transition-colors leading-tight">
                    {c.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#087BDF] dark:text-cyan-400 mt-1">
                    {c.subtitle}
                  </div>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {c.shortDescription}
                  </p>

                  {/* Skills Covered Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.skillsCovered.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-sky-300 border border-sky-100 dark:border-sky-900"
                      >
                        {skill}
                      </span>
                    ))}
                    {c.skillsCovered.length > 4 && (
                      <span className="text-[10px] font-bold text-slate-400 self-center">
                        +{c.skillsCovered.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* What Students Will Build Preview */}
                  {c.whatYouWillBuild.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                        <CheckCircle2 className="size-3 text-emerald-500" />
                        <span>Capstone Project:</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                        {c.whatYouWillBuild[0].title}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <Link
                    href={`/courses/${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062B67] dark:text-cyan-300 hover:text-[#087BDF] transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/career-counselling?course=${encodeURIComponent(c.title)}`}
                    className="rounded-full bg-[#062B67] hover:bg-[#031B43] text-[#FFD928] text-xs font-black px-4 py-2 transition-all shadow-xs"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
