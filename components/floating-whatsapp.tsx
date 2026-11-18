"use client"

import React from "react"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp enquiry" className="fixed bottom-20 sm:bottom-6 right-5 z-50 flex items-center">
      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SmartEdge Academy on WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/40 active:scale-95"
      >
        {/* Radar wave ping */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-60" />
        <MessageCircle className="size-7 fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-lg md:block opacity-0 transition-opacity group-hover:opacity-100 dark:bg-slate-800">
          Enquire on WhatsApp
        </span>

        {/* Unread dot */}
        <span className="absolute top-0 right-0 flex size-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-xs">
          1
        </span>
      </a>
    </aside>
  )
}
