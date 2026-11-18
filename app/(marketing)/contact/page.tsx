import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Compass,
  Navigation,
  ExternalLink,
  Sparkles,
  Building2,
  Train,
  Bus,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { SmartEdgeLocationContact } from "@/components/sections/smartedge-location-contact"

export const metadata: Metadata = constructMetadata({
  title: "Contact & Campus Location in Bhiwandi | SmartEdge Academy",
  description:
    "Visit SmartEdge Academy at Laxmi Ajit Complex, Gauripada, Bhiwandi. Call +91 9820624436 or WhatsApp for admissions, batch schedules, fees, and campus tours.",
})

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <Building2 className="size-4 text-[#FFD928]" />
            <span>Admissions &amp; Campus Counseling Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Visit SmartEdge Academy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              in Bhiwandi.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have questions about course curriculums, batch timings, or our 100% Job Assistance program? Call, WhatsApp, or drop by our campus.
          </p>
        </div>
      </section>

      {/* Campus Details & Google Maps Embed Section */}
      <SmartEdgeLocationContact />
    </div>
  )
}
