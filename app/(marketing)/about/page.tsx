import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Users,
  Building2,
  MapPin,
  ArrowRight,
  BookOpen,
  Code2,
  BrainCircuit,
  ShieldCheck,
  Target,
  Compass,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { NumberTicker } from "@/registry/magicui/number-ticker"
import { BorderBeam } from "@/registry/magicui/border-beam"

export const metadata: Metadata = constructMetadata({
  title: "About SmartEdge Academy | AI-Powered Tech Training Institute in Bhiwandi",
  description:
    "Learn about SmartEdge Academy (SmartEdge Group), Bhiwandi's dedicated AI-powered IT skills institute helping degree holders and 12th pass students become job-ready software developers and data analysts.",
  canonicalUrl: "/about",
})

export default function AboutPage() {
  const values = [
    {
      title: "Skills Over Theory",
      icon: Code2,
      description:
        "We believe technology is learned through the fingers, not the ears. Every session centers on hands-on code and tangible system output.",
    },
    {
      title: "AI-First Curriculum",
      icon: BrainCircuit,
      description:
        "Modern developers must use LLMs and workflow automations to stay productive. We weave AI into every development track.",
    },
    {
      title: "Zero Stream Bias",
      icon: Users,
      description:
        "Whether you are from Arts, Commerce, Science, or Engineering, our structured foundational methodology ensures equal opportunity.",
    },
    {
      title: "Transparent Outcomes",
      icon: ShieldCheck,
      description:
        "No inflated placement promises or fabricated partner badges. Real project portfolios, verified skills, and honest career mentoring.",
    },
  ]

  const milestones = [
    {
      year: "Rooted in Bhiwandi",
      title: "Solving the Graduate Employability Crisis",
      description:
        "Thousands of bright students in Bhiwandi, Thane, and Kalyan graduate each year with degrees, but struggle in recruitment drives due to lack of practical software and data skills. SmartEdge Academy was established by SmartEdge Group to bridge this exact gap.",
    },
    {
      year: "State-of-the-Art Labs",
      title: "Classroom & Terminal Infrastructure",
      description:
        "High-performance workstations, dual-monitor student stations, dedicated high-speed fiber internet, and collaborative open desks for capstone project team sprints.",
    },
    {
      year: "Industry Mentors",
      title: "Learn from Working Practitioners",
      description:
        "Classes and mock interviews are facilitated by engineers actively designing production cloud backends, microservices, and AI workflows.",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
              <GraduationCap className="size-4 text-[#FFD928]" />
              <span>SmartEdge Academy • SmartEdge Group</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
              Empowering Careers with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
                AI &amp; Practical Tech Skills.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              We don&apos;t just teach syntax. We turn ambitious students into job-ready software developers, data analysts, and automation specialists.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/courses">
                <ShimmerButton
                  shimmerColor="#FFD928"
                  background="linear-gradient(135deg, #062B67 0%, #087BDF 100%)"
                  className="px-7 py-3 text-sm font-bold text-white shadow-md"
                >
                  <span>Explore 21+ Courses</span>
                  <ArrowRight className="size-4 ml-2" />
                </ShimmerButton>
              </Link>
              <Link
                href="/career-counselling"
                className="rounded-full border-2 border-[#062B67] dark:border-cyan-400 px-6 py-2.5 text-sm font-bold text-[#062B67] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                Book Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Promise */}
      <section className="py-16 md:py-20 border-b border-border/50 bg-slate-50/50 dark:bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl border-2 border-[#FFD928] bg-white dark:bg-slate-900 p-8 shadow-xl relative overflow-hidden">
                <BorderBeam
                  size={200}
                  duration={10}
                  delay={0}
                  colorFrom="#FFD928"
                  colorTo="#087BDF"
                />

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#062B67] text-[#FFD928] font-black">
                    <Award className="size-6 text-[#FFD928]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#062B67] dark:text-white">
                      The SmartEdge Promise
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#087BDF]">
                      {siteConfig.brandPromise}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every graduate deserves an equal opportunity to build a high-income tech career regardless of past college background or marks. We provide the mentorship, projects, resume engineering, and interview coaching necessary to bridge that gap.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Parent Company: <strong>{siteConfig.parentCompany}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>100% Job Assistance Support Services*</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Open to 12th Pass, BSc, BCA, BCom, MCom, and Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#062B67] dark:text-white">
                  Why We Built SmartEdge Academy
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Traditional degree colleges teach concepts on blackboards using decades-old curriculums. When students step into technical interviews, they are asked to write clean code, use Git, configure databases, call APIs, and leverage AI.
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  SmartEdge Academy was established in Gauripada, Bhiwandi, to provide students with a modern, high-energy technology sanctuary. Here, every learner codes from 9:00 AM, builds full-stack applications, and leaves with a portfolio recruiters actually respect.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                  <div className="text-2xl font-black text-[#062B67] dark:text-white flex items-center">
                    <NumberTicker value={21} />
                    <span className="text-[#087BDF]">+</span>
                  </div>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase">
                    Courses Offered
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                  <div className="text-2xl font-black text-[#062B67] dark:text-white flex items-center">
                    <NumberTicker value={100} />
                    <span className="text-[#087BDF]">%</span>
                  </div>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase">
                    Job Assistance Support*
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Educational Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#062B67] dark:text-white">
              Our Core Educational Values
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              The foundational principles guiding our teaching, curriculum design, and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:border-[#087BDF]/50 transition-colors"
                >
                  <div className="size-11 rounded-xl bg-sky-100 dark:bg-sky-950 text-[#087BDF] dark:text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Campus Location Banner */}
      <section className="py-12 bg-[#062B67] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFD928] text-[#062B67] font-black">
              <MapPin className="size-6 text-[#062B67]" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFD928]">
                Bhiwandi Campus Desk
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">
                {siteConfig.contact.fullAddress}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="rounded-full bg-white text-[#062B67] px-5 py-2.5 text-xs font-black hover:bg-slate-100 transition-colors"
            >
              Call {siteConfig.contact.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 text-white px-5 py-2.5 text-xs font-bold hover:bg-white/10 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
