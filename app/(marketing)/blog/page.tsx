import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  User,
  GraduationCap,
  HelpCircle,
  Tag,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"

export const metadata: Metadata = constructMetadata({
  title: "Career Resources & Tech Guides | SmartEdge Academy Bhiwandi",
  description:
    "Expert tech career guides, interview preparation strategies, and learning roadmaps for IT and non-IT graduates in Bhiwandi, Thane, and Mumbai.",
  canonicalUrl: "/blog",
})

export default function BlogPage() {
  const articles = [
    {
      title: "How to Transition from Non-IT (BCom / Plain BSc) into a Data Analyst Career",
      category: "Career Switch",
      readTime: "6 min read",
      date: "March 2026",
      summary:
        "Many commerce and science graduates believe you need a 4-year engineering degree to enter tech. Learn how mastering SQL, Power BI, and practical business dashboards allows you to bypass degree gatekeeping.",
      tags: ["Data Analyst", "Non-IT to Tech", "Power BI", "SQL"],
    },
    {
      title: "Java vs. Python in 2026: Which Language Offers Better Placement Opportunities?",
      category: "Software Engineering",
      readTime: "8 min read",
      date: "March 2026",
      summary:
        "A pragmatic breakdown of enterprise Java Spring Boot backend roles versus Python data engineering and AI automation tracks in Mumbai Metropolitan Region (MMR).",
      tags: ["Java Developer", "Python", "Backend Engineering"],
    },
    {
      title: "Why AI Tools (ChatGPT, Gemini, Antigravity) Are Mandatory for Modern Developers",
      category: "AI & Productivity",
      readTime: "5 min read",
      date: "February 2026",
      summary:
        "Recruiters expect junior developers to code with LLM copilots and workflow automations. Discover how AI transforms junior productivity into senior-level throughput.",
      tags: ["ChatGPT", "Antigravity", "AI Productivity"],
    },
    {
      title: "Top 7 Mistakes Students Make on Their Tech Resumes (And How to Fix Them)",
      category: "Interview Prep",
      readTime: "7 min read",
      date: "February 2026",
      summary:
        "Why your resume gets rejected by ATS algorithms before a human recruiter even sees it. How to showcase live deployed GitHub projects and quantifiable business outcomes.",
      tags: ["Resume Building", "Job Assistance", "ATS Optimization"],
    },
    {
      title: "The Rise of Logistics & Supply Chain Tech Careers in Bhiwandi",
      category: "Local Industry Trends",
      readTime: "5 min read",
      date: "January 2026",
      summary:
        "As India's logistics capital, Bhiwandi's warehouses are rapidly digitizing. Why local companies desperately need Data Analysts, MIS specialists, and n8n workflow developers.",
      tags: ["Bhiwandi Tech", "Logistics", "Business Automation"],
    },
  ]

  const aeoFAQs = [
    {
      q: "Can I get a software job if I completed my degree with low marks or a gap year?",
      a: "Yes. In the private software and technology sector, recruiters prioritize verifiable skills and deployed GitHub projects over college percentages. SmartEdge Academy helps you build demonstrable proof of work that overcomes resume gaps.",
    },
    {
      q: "What is the difference between SmartEdge Academy and typical computer classes in Bhiwandi?",
      a: "Typical computer classes teach basic operational software with rote book learning. SmartEdge Academy is an engineering accelerator: students work in active coding labs, build cloud applications, integrate AI, receive ATS resumes, and participate in 1-on-1 mock interviews with working software engineers.",
    },
    {
      q: "Does SmartEdge Academy offer weekend batches for working professionals?",
      a: "Yes. We offer weekend intensive batches (Saturday and Sunday) as well as morning and evening weekday batches tailored for working professionals and college students.",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <BookOpen className="size-4 text-[#FFD928]" />
            <span>Articles, Career Roadmaps &amp; Interview Tips</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Tech Career Resources{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              &amp; Insights.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Actionable advice written by our senior trainers and software engineering mentors to help you navigate tech careers in Maharashtra.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <article
                key={idx}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3">
                    <span className="rounded-full bg-sky-50 dark:bg-sky-950 px-2.5 py-1 text-[#087BDF] dark:text-cyan-400">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#087BDF] transition-colors leading-snug mb-3">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {art.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {art.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">{art.date}</span>
                  <Link
                    href="/career-counselling"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#087BDF] dark:text-cyan-400 hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Answer Engine Optimization (AEO) FAQs */}
      <section className="py-16 bg-slate-50/70 dark:bg-slate-900/40 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087BDF] mb-2">
              <HelpCircle className="size-4" />
              <span>Direct Answers • AEO Knowledge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062B67] dark:text-white">
              Frequently Asked Career Questions
            </h2>
          </div>

          <div className="space-y-4">
            {aeoFAQs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 sm:p-6 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
