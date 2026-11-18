import type { Metadata } from "next"
import Link from "next/link"
import {
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  UserCheck,
  Users,
  Award,
  ShieldCheck,
  Target,
  Compass,
  MessageCircle,
  Clock,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { BorderBeam } from "@/registry/magicui/border-beam"

export const metadata: Metadata = constructMetadata({
  title: "100% Job Assistance & Career Support | SmartEdge Academy Bhiwandi",
  description:
    "Learn how SmartEdge Academy's 100% Job Assistance program prepares students with ATS resumes, mock technical interviews, GitHub project portfolios, and direct hiring referrals.",
})

export default function CareerAssistancePage() {
  const roadmap = [
    {
      step: "01",
      title: "Foundational & Advanced Skills Mastery",
      description:
        "Develop rock-solid understanding of object-oriented design, algorithms, databases, API architectures, and AI tooling with daily coding labs.",
    },
    {
      step: "02",
      title: "Daily Lab Practice & Code Reviews",
      description:
        "Every assignment is reviewed line-by-line for clean coding conventions, error handling, performance bottlenecks, and architectural clarity.",
    },
    {
      step: "03",
      title: "Production Capstone Project Building",
      description:
        "Build enterprise-scale applications, executive analytics dashboards, or AI agents deployed live to cloud platforms with public GitHub documentation.",
    },
    {
      step: "04",
      title: "ATS-Optimized Resume Engineering",
      description:
        "Our mentors craft your professional resume to pass Applicant Tracking Systems (ATS) used by major IT recruiters and highlight demonstrable proof of work.",
    },
    {
      step: "05",
      title: "Simulated 1-on-1 Mock Technical Interviews",
      description:
        "Simulate real-world hiring rounds with seasoned software engineers. Practice live whiteboard coding, system explanations, and behavioral questions.",
    },
    {
      step: "06",
      title: "Company Interview Referrals & Placement Support",
      description:
        "Our placement cell connects your verified profile to hiring tech partners, coordinates interview slots, and supports you through offer negotiation.",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-22 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <Sparkles className="size-4 text-[#FFD928]" />
            <span>Dedicated Placement Cell &amp; Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Learn Skills. Build Confidence.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              Prepare for Your Career.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            SmartEdge Academy provides 100% Job Assistance support services. We do not just teach courses—we guide students through the entire recruitment pipeline until they are placed.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/career-counselling">
              <ShimmerButton
                shimmerColor="#FFD928"
                background="linear-gradient(135deg, #062B67 0%, #087BDF 100%)"
                className="px-8 py-3.5 text-sm font-bold text-white shadow-md"
              >
                <span>Book Free Career Counselling</span>
                <ArrowRight className="size-4 ml-2" />
              </ShimmerButton>
            </Link>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[#062B67] dark:border-cyan-400 px-6 py-2.5 text-sm font-bold text-[#062B67] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Transparent Disclosure Banner */}
      <section className="py-8 bg-sky-50 dark:bg-sky-950/40 border-b border-sky-100 dark:border-sky-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-slate-900 p-5 shadow-xs flex items-start gap-4">
            <ShieldCheck className="size-6 text-[#087BDF] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Our 100% Job Assistance Transparency Commitment:</strong> We do not sell fraudulent &quot;guaranteed degrees&quot; or fake certifications. We provide comprehensive, dedicated career assistance services: resume building, technical mock rounds, soft-skills grooming, and employer referrals. Employment offers are earned when candidates complete required course capstone projects and pass recruiter evaluations.
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Career Journey Roadmap */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-[#062B67] dark:text-white">
              The 6-Step Career Transformation Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              How we take you from zero coding experience to corporate interview readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmap.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:border-[#087BDF]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="size-10 rounded-2xl bg-[#062B67] text-[#FFD928] font-black text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
