"use client"

import React from "react"
import Link from "next/link"
import {
  Sparkles,
  Bot,
  Zap,
  Workflow,
  Cpu,
  Video,
  FileCode,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react"

import { OrbitingCircles } from "@/registry/magicui/orbiting-circles"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"

export function SmartEdgeAIEcosystem() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-sky-50/40 to-background dark:from-background dark:via-slate-950 dark:to-background border-b border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Sparkles className="size-3.5 text-[#FFD928]" />
            <span>AI &amp; Automation Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
            The Future Belongs to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#062B67] via-[#087BDF] to-[#00D5F5] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-500">
              Those Who Learn AI.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            AI is not here to replace you—it is here to supercharge your career. SmartEdge Academy equips you with mastery over leading generative models, autonomous agent frameworks, and enterprise workflow engines.
          </p>
        </div>

        {/* Orbiting Visual + Tech Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Orbiting Circles Interactive Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative flex h-[420px] sm:h-[480px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xl">
              
              {/* Central Core Emblem */}
              <div className="z-10 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#062B67] to-[#087BDF] p-5 text-white shadow-xl ring-4 ring-[#00D5F5]/30">
                <GraduationCap className="size-8 text-[#00D5F5] mb-1" />
                <span className="text-xs font-black tracking-wider uppercase text-white">
                  SmartEdge
                </span>
                <span className="text-[10px] font-bold text-[#FFD928]">
                  AI Core
                </span>
              </div>

              {/* Inner Orbit (Radius 90) */}
              <OrbitingCircles radius={95} duration={20} iconSize={44}>
                <div className="flex size-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md hover:scale-110 transition-transform" title="ChatGPT">
                  <Bot className="size-6" />
                </div>
                <div className="flex size-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:scale-110 transition-transform" title="Google Gemini">
                  <Sparkles className="size-6 text-[#FFD928]" />
                </div>
                <div className="flex size-11 items-center justify-center rounded-full bg-purple-600 text-white shadow-md hover:scale-110 transition-transform" title="Google Flow Video">
                  <Video className="size-6" />
                </div>
              </OrbitingCircles>

              {/* Outer Orbit (Radius 180, Reverse) */}
              <OrbitingCircles radius={185} duration={30} reverse iconSize={48}>
                <div className="flex size-12 items-center justify-center rounded-full bg-[#031B43] text-cyan-400 border border-cyan-400 shadow-md hover:scale-110 transition-transform" title="Antigravity Development">
                  <Zap className="size-6" />
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-md hover:scale-110 transition-transform" title="n8n Workflow Automation">
                  <Workflow className="size-6" />
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-md hover:scale-110 transition-transform" title="AI Tools & Productivity">
                  <Cpu className="size-6" />
                </div>
              </OrbitingCircles>
            </div>
          </div>

          {/* AI Tools Cards Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-xs hover:border-[#087BDF]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  <Bot className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    ChatGPT &amp; Google Gemini
                  </h3>
                  <p className="text-xs text-slate-500">Prompt Engineering &amp; Million-Token Reasoning</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Learn advanced Few-Shot, Chain-of-Thought, Custom GPT creation, and large-context PDF &amp; video analysis to 5x your research and writing output.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-xs hover:border-[#087BDF]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold">
                  <Zap className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Google Antigravity
                  </h3>
                  <p className="text-xs text-slate-500">AI-Powered Software Development &amp; Coding Agents</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Orchestrate autonomous agent coding frameworks that write, refactor, and test full stack web and backend systems at 10x engineering velocity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-xs hover:border-[#087BDF]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold">
                  <Workflow className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    n8n Workflow Automation
                  </h3>
                  <p className="text-xs text-slate-500">Autonomous Business Pipelines &amp; Integrations</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect 400+ applications, integrate WhatsApp API bots, and deploy self-hosted enterprise automations with zero recurring per-task licensing fees.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-xs hover:border-[#087BDF]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex size-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
                  <Video className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Google Flow &amp; AI Video Creation
                  </h3>
                  <p className="text-xs text-slate-500">Generative Video, Voice Synthesis &amp; Media Production</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Generate broadcast commercials, realistic voiceovers with ElevenLabs, and viral social media assets in minutes for modern brand campaigns.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/courses#ai-courses"
                className="inline-flex items-center gap-2 rounded-full bg-[#062B67] hover:bg-[#087BDF] text-white px-6 py-2.5 text-xs font-bold transition-all shadow-sm"
              >
                <span>Explore All AI &amp; Automation Syllabi</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
