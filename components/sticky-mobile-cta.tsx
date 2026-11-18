"use client"

import React from "react"
import Link from "next/link"
import { Phone, MessageCircle, Sparkles } from "lucide-react"

import { siteConfig } from "@/config/site"

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-border bg-background/95 backdrop-blur-md px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center rounded-lg bg-sky-50 py-1.5 text-center text-xs font-bold text-[#062B67] hover:bg-sky-100 dark:bg-sky-950 dark:text-cyan-300 transition-colors"
        >
          <Phone className="size-4 mb-0.5 text-[#087BDF]" />
          <span className="text-[11px]">Call Now</span>
        </a>

        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-lg bg-[#25D366] py-1.5 text-center text-xs font-bold text-white shadow-xs hover:bg-[#20ba5a] transition-colors"
        >
          <MessageCircle className="size-4 mb-0.5" />
          <span className="text-[11px]">WhatsApp</span>
        </a>

        <Link
          href="/career-counselling"
          className="flex flex-col items-center justify-center rounded-lg bg-[#062B67] py-1.5 text-center text-xs font-black text-[#FFD928] shadow-xs hover:bg-[#031B43] dark:bg-sky-500 dark:text-slate-950 transition-colors"
        >
          <Sparkles className="size-4 mb-0.5 text-[#FFD928] dark:text-slate-950" />
          <span className="text-[11px]">Counselling</span>
        </Link>
      </div>
    </div>
  )
}
