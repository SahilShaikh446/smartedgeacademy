import Link from "next/link"
import { Sparkles, ArrowRight, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"

export function SiteBanner() {
  return (
    <div className="relative top-0 bg-gradient-to-r from-[#062B67] via-[#031B43] to-[#087BDF] py-2 px-4 text-white text-xs font-medium z-50">
      <div className="container mx-auto flex items-center justify-between gap-2 max-w-7xl">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD928] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#062B67]">
            <Sparkles className="size-3 text-[#062B67]" />
            ADMISSIONS OPEN
          </span>
          <span className="hidden md:inline font-bold text-[#FFD928]">
            100% Job Assistance*
          </span>
          <span className="hidden lg:inline text-white/50">•</span>
          <span className="text-white/90 text-[11px] sm:text-xs">
            Bhiwandi Campus • 12th Pass, BSc, BCA, BCom, MCom, Engineering — All Streams Eligible
          </span>
        </div>

        <Link
          href="/career-counselling"
          className="shrink-0 inline-flex items-center gap-1 font-bold text-[#FFD928] hover:text-white transition-colors underline decoration-[#FFD928] text-[11px] sm:text-xs"
        >
          <span>Free Career Counselling</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00D5F5]/30" />
    </div>
  )
}
