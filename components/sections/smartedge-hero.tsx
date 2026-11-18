"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Phone,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Users,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Code2,
  BrainCircuit,
  Award,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { WordRotate } from "@/registry/magicui/word-rotate"
import { BorderBeam } from "@/registry/magicui/border-beam"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { Particles } from "@/registry/magicui/particles"

export function SmartEdgeHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-border/50 bg-gradient-to-b from-[#062B67]/5 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background"
    >
      {/* Background Animated Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={60}
        color="#087BDF"
        size={0.6}
        staticity={25}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill: Institute Identity */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087BDF]/30 bg-sky-50 dark:bg-sky-950/70 px-4 py-1.5 text-xs font-bold text-[#062B67] dark:text-cyan-300 shadow-xs mb-5 backdrop-blur-xs">
              <span className="flex size-2 rounded-full bg-[#087BDF] animate-pulse" />
              <span className="font-extrabold tracking-wide uppercase">
                SmartEdge Academy
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-[#087BDF] dark:text-[#00D5F5] font-semibold">
                AI-Powered Career &amp; Job Skills Academy
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#062B67] dark:text-white leading-[1.12] text-balance">
              DON&apos;T JUST GET A DEGREE.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
                GET JOB-READY WITH AI.
              </span>
            </h1>

            {/* Rotating Words */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-black text-slate-800 dark:text-slate-200">
              <span>SmartEdge Academy helps you:</span>
              <div className="overflow-hidden py-1">
                <WordRotate
                  words={["Learn.", "Build.", "Innovate.", "Get Hired."]}
                  className="font-black text-[#087BDF] dark:text-[#00D5F5] underline decoration-[#FFD928] decoration-4 underline-offset-4"
                />
              </div>
            </div>

            {/* Supporting Text */}
            <div className="mt-5 space-y-2 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Completed your degree but still struggling to get a job?
                </strong>{" "}
                Want to switch your career into high-paying IT &amp; AI fields?
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Upgrade your skills, build real-world projects, prepare for interviews, and become industry-ready with SmartEdge Academy in Bhiwandi.
              </p>
            </div>

            {/* Highlight Banner: 100% Job Assistance */}
            <div className="mt-6 w-full rounded-2xl border-2 border-[#FFD928] bg-gradient-to-r from-[#FFD928]/15 via-white to-sky-50/50 dark:from-[#FFD928]/10 dark:via-slate-900 dark:to-slate-900 p-4 sm:p-5 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#062B67] text-[#FFD928] font-black shadow-xs shrink-0">
                    <Sparkles className="size-6 text-[#FFD928]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-black text-[#062B67] dark:text-[#FFD928] tracking-tight">
                        100% JOB ASSISTANCE*
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      Career guidance and support services to help you get hired.
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 self-end sm:self-center">
                  *Terms &amp; eligibility apply
                </div>
              </div>
            </div>

            {/* Stream Eligibility Callout from Poster */}
            <div className="mt-4 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-sky-100/60 dark:bg-sky-950/40 rounded-xl px-4 py-2 border border-sky-200 dark:border-sky-800">
              <GraduationCap className="size-4 text-[#087BDF] shrink-0" />
              <span>
                <strong>Courses for IT &amp; Non-IT Students:</strong> 12th Pass, BSc, BCA, BCom, MCom, Engineering or Any Stream.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link href="/courses">
                <ShimmerButton
                  shimmerColor="#FFD928"
                  background="linear-gradient(135deg, #062B67 0%, #087BDF 100%)"
                  className="px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#062B67]/25 w-full sm:w-auto"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="size-4 ml-2" />
                </ShimmerButton>
              </Link>

              <Link
                href="/career-counselling"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#062B67] dark:border-cyan-400 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 px-7 py-3 text-base font-bold text-[#062B67] dark:text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="size-4 text-[#087BDF] dark:text-cyan-400" />
                <span>Free Career Counselling</span>
              </Link>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="size-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Brand Promise Ribbon */}
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="text-[#062B67] dark:text-sky-300">SKILLS</span>
              <span>|</span>
              <span className="text-[#087BDF] dark:text-cyan-300">KNOWLEDGE</span>
              <span>|</span>
              <span className="text-indigo-600 dark:text-indigo-400">OPPORTUNITIES</span>
              <span>|</span>
              <span className="text-amber-600 dark:text-amber-400">A BRIGHTER YOU</span>
            </div>

          </div>

          {/* Right Column: Visual Featuring Admission Flex Poster & Animated Cards */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-tr from-[#062B67] via-[#087BDF] to-[#00D5F5] shadow-2xl">
              
              {/* Border Beam Magic UI Component */}
              <BorderBeam
                size={240}
                duration={12}
                delay={0}
                colorFrom="#FFD928"
                colorTo="#00D5F5"
              />

              <div className="relative overflow-hidden rounded-[22px] bg-slate-950">
                <Image
                  src="/smartedge-admission-flex.jpg"
                  alt="SmartEdge Academy Admission Poster - AI Powered Career & Job Skills Academy"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Overlay Badge at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031B43] via-[#031B43]/90 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-[#FFD928]">
                        Now Enrolling in Bhiwandi
                      </div>
                      <div className="text-sm font-black text-white">
                        Classroom &amp; Lab Practical Training
                      </div>
                    </div>
                    <Link
                      href="/career-counselling"
                      className="rounded-full bg-[#FFD928] text-[#031B43] px-3.5 py-1.5 text-xs font-black hover:bg-yellow-300 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badge - Top Left */}
              <div className="absolute -top-4 -left-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="size-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">
                  <BrainCircuit className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">AI-Powered</div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">Practical Curriculum</div>
                </div>
              </div>

              {/* Floating Job Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#062B67] text-white border-2 border-[#FFD928] p-3 shadow-xl flex items-center gap-2.5">
                <div className="size-9 rounded-xl bg-[#FFD928] text-[#062B67] flex items-center justify-center font-black">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#FFD928]">Guaranteed Focus</div>
                  <div className="text-xs font-black text-white">100% Job Assistance*</div>
                </div>
              </div>

            </div>

            {/* Quick Contact Below Visual */}
            <div className="mt-6 flex items-center gap-4 text-xs font-bold text-slate-600 dark:text-slate-400">
              <a
                href={siteConfig.links.phone}
                className="flex items-center gap-1.5 hover:text-[#087BDF] transition-colors"
              >
                <Phone className="size-3.5 text-[#087BDF]" />
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
              <span>•</span>
              <span>1st Floor, Laxmi Ajit Complex, Bhiwandi</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
