"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, MessageCircle, Phone, CheckCircle2 } from "lucide-react"

import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { BorderBeam } from "@/registry/magicui/border-beam"
import { siteConfig } from "@/config/site"

export function SmartEdgeFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#031B43] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 size-96 bg-[#087BDF]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-[#00D5F5]/15 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        
        {/* Glow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-6">
          <Sparkles className="size-3.5 text-[#FFD928]" />
          <span>New Batches Starting Soon in Bhiwandi</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase text-balance leading-tight">
          YOUR CAREER DESERVES
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5F5] via-[#FFD928] to-white">
            AN UPGRADE.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-xl font-medium text-slate-200 leading-relaxed text-balance">
          Learn Today&apos;s Skills. Build Tomorrow&apos;s Opportunities.
          <br className="hidden sm:inline" />
          Join SmartEdge Academy Today.
        </p>

        {/* Highlights Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#00D5F5]" />
            <span>100% Job Assistance Support*</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#00D5F5]" />
            <span>IT &amp; Non-IT Students Eligible</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[#00D5F5]" />
            <span>Hands-on Project Portfolio</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/career-counselling">
            <ShimmerButton
              background="#FFD928"
              shimmerColor="#ffffff"
              shimmerDuration="2s"
              className="px-8 py-4 text-base font-black text-[#031B43] shadow-xl hover:scale-105 transition-transform"
            >
              <span>Join SmartEdge Academy Today</span>
              <ArrowRight className="size-4 ml-2 text-[#062B67]" />
            </ShimmerButton>
          </Link>

          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 hover:bg-emerald-500/30 px-7 py-4 text-base font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="size-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Helpline */}
        <div className="mt-8 text-xs text-slate-400">
          Have immediate questions? Call our admissions office directly at{" "}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            className="text-[#00D5F5] font-bold hover:underline"
          >
            {siteConfig.contact.displayPhone}
          </a>
        </div>

      </div>
    </section>
  )
}
