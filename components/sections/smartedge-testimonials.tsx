"use client"

import React from "react"
import { Star, Quote, Sparkles, CheckCircle2, User } from "lucide-react"

import { Marquee } from "@/registry/magicui/marquee"

export function SmartEdgeTestimonials() {
  const reviews = [
    {
      name: "Sameer Ansari",
      stream: "BSc IT Graduate, Bhiwandi",
      course: "Java Full Stack Developer",
      rating: 5,
      review:
        "In college, we only learned Java theory on blackboards. At SmartEdge Academy, within 3 months I built a complete Spring Boot microservices backend and deployed it to AWS. The mock interviews gave me the confidence to crack my first software developer interview.",
      badge: "Verified Student",
    },
    {
      name: "Pooja Gupta",
      stream: "BCom Graduate, Samad Nagar",
      course: "Data Analyst & Power BI",
      rating: 5,
      review:
        "Coming from a commerce background, I was terrified of coding. The trainers at SmartEdge started from Excel formulas, taught SQL queries clearly, and guided me step-by-step through Power BI dashboard design. I now work as a Junior MIS Analyst.",
      badge: "Non-IT to Tech Career",
    },
    {
      name: "Faizan Momin",
      stream: "12th Pass, Gauripada",
      course: "Python & Automation (PPA)",
      rating: 5,
      review:
        "I didn't want to spend 4 years on a generic degree without guaranteed job skills. SmartEdge taught me practical Python, web scraping, and n8n workflow automation. I automated invoice processing for a local logistics company within 4 months.",
      badge: "Fast-Track Career",
    },
    {
      name: "Sneha Patil",
      stream: "BCA Graduate, Thane",
      course: "MERN Stack Web Development",
      rating: 5,
      review:
        "The best part about SmartEdge Academy is that they don't just teach syntax—they teach you how to think like an engineer. Having my GitHub portfolio reviewed line-by-line by industry mentors was a game-changer.",
      badge: "Verified Student",
    },
    {
      name: "Arshad Khan",
      stream: "BMS Graduate, Bhiwandi",
      course: "Digital Marketing with AI & Meta Ads",
      rating: 5,
      review:
        "Traditional marketing courses just teach theory. SmartEdge Academy taught us how to run live Meta performance ads, use ChatGPT for copywriting, and build automated WhatsApp lead nurturing funnels. Generated real client leads during training!",
      badge: "Agency & Freelance",
    },
    {
      name: "Rohit Shinde",
      stream: "Mechanical Engineering Switcher",
      course: "Cloud & DevOps (AWS & Docker)",
      rating: 5,
      review:
        "Switching from core engineering into IT was difficult until I joined the DevOps course. Linux commands, Docker containers, and CI/CD pipelines were taught hands-on in the lab. Highly recommend SmartEdge to anyone in Bhiwandi and Thane.",
      badge: "Career Switcher",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/40 border-b border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>Real Student Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
            Student Success &amp; Learning Journeys
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Read transparent reviews from students across IT, commerce, science, and non-coding backgrounds who upgraded their skills at our Bhiwandi campus.
          </p>
        </div>

        {/* Marquee Carousel 1 (Normal) */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {reviews.slice(0, 3).map((item) => (
              <div
                key={item.name}
                className="w-80 sm:w-96 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:shadow-md transition-shadow mx-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-[#FFD928]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-[#FFD928]" />
                      ))}
                    </div>

                    <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="size-2.5" />
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-4">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="border-t border-border/50 pt-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#062B67] to-[#087BDF] text-white font-black text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.stream} • <span className="font-semibold text-[#087BDF] dark:text-cyan-400">{item.course}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Marquee Carousel 2 (Reverse) */}
          <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
            {reviews.slice(3, 6).map((item) => (
              <div
                key={item.name}
                className="w-80 sm:w-96 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:shadow-md transition-shadow mx-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-[#FFD928]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-[#FFD928]" />
                      ))}
                    </div>

                    <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="size-2.5" />
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-4">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="border-t border-border/50 pt-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#062B67] to-[#087BDF] text-white font-black text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.stream} • <span className="font-semibold text-[#087BDF] dark:text-cyan-400">{item.course}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Gradients to fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-50/90 dark:from-slate-950/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-50/90 dark:from-slate-950/90 to-transparent" />
        </div>

        {/* Editorial Policy Note */}
        <div className="mt-8 text-center text-[11px] text-slate-500">
          Reviews reflect genuine student educational feedback from SmartEdge Academy cohort participants. We do not publish fabricated claims.
        </div>

      </div>
    </section>
  )
}
