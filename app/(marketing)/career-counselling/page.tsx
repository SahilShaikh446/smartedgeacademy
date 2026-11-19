import type { Metadata } from "next"
import Link from "next/link"
import {
  Sparkles,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  Briefcase,
  Users,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { SmartEdgeCounsellingForm } from "@/components/sections/smartedge-counselling-form"

export const metadata: Metadata = constructMetadata({
  title: "Free Career Counselling | SmartEdge Academy Bhiwandi",
  description:
    "Not sure which IT or AI course fits your background? Book a 100% free career counselling session with senior software engineers and placement advisors at SmartEdge Academy Bhiwandi.",
  canonicalUrl: "/career-counselling",
})

export default function CareerCounsellingPage() {
  const streamTracks = [
    {
      stream: "12th Pass (Any Stream)",
      bestTracks: ["Front End Web Developer", "Graphic Designer", "Python Developer", "AI Tools & Productivity"],
      outcome: "Build immediate technical skills and take on freelance or junior developer roles without waiting 3-4 years.",
    },
    {
      stream: "BSc IT / BCA / Computer Science",
      bestTracks: ["Java Full Stack", "MERN Stack", "Data Science", "Cloud & DevOps"],
      outcome: "Upgrade theoretical college concepts to production architecture, microservices, and live cloud deployments.",
    },
    {
      stream: "BCom / MCom / BAF / BMS",
      bestTracks: ["Data Analyst", "Power BI & SQL", "Digital Marketing with AI", "Business Automation"],
      outcome: "Leverage your analytical and business intuition into high-paying MIS and business intelligence corporate careers.",
    },
    {
      stream: "Engineering (BE / BTech Any Branch)",
      bestTracks: ["Full Stack Java / Python", "Data Engineering", "Antigravity & AI Development", "Cloud & DevOps"],
      outcome: "Transition from core engineering branches into placement-ready software engineering and product companies.",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <Sparkles className="size-4 text-[#FFD928]" />
            <span>1-on-1 Personalized Session • Zero Obligation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Not Sure Which Course Is Right for You?{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              Get Free Career Counselling.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Speak directly with our senior technical mentors in Bhiwandi. We analyze your academic background, career goals, and recommend the ideal learning roadmap.
          </p>
        </div>
      </section>

      {/* Stream Matching Recommendation Guide */}
      <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-slate-900/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-[#062B67] dark:text-white">
              Which Stream Are You From?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Here is how we map degree backgrounds to high-demand technical careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {streamTracks.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#087BDF] uppercase tracking-wider mb-1">
                    Stream {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {item.stream}
                  </h3>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase mb-1.5">
                    Recommended Tracks:
                  </div>
                  <ul className="space-y-1 mb-4">
                    {item.bestTracks.map((track, tIdx) => (
                      <li key={tIdx} className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        <span>{track}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800 leading-relaxed">
                  {item.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Enquiry Form Component */}
      <SmartEdgeCounsellingForm />
    </div>
  )
}
