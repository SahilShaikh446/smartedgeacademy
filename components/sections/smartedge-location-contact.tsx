"use client"

import React from "react"
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

export function SmartEdgeLocationContact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/40 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-3">
            <Building2 className="size-3.5 text-[#FFD928]" />
            <span>Visit Our Campus in Bhiwandi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
            Location &amp; Admissions Desk
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Conveniently situated in Gauripada, Bhiwandi, with modern computer labs, AC classrooms, high-speed fiber internet, and dedicated project study desks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                SmartEdge Academy
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950 text-[#087BDF]">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Campus Address:
                    </strong>
                    <span className="leading-relaxed">
                      1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Near Shiv Mandir, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi, Maharashtra 421305, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950 text-[#087BDF]">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Admissions Helpline:
                    </strong>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="text-[#087BDF] dark:text-cyan-400 font-bold hover:underline"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600">
                    <MessageCircle className="size-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      WhatsApp Counselling:
                    </strong>
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      +91 98206 24436 (Instant Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Center Hours:
                    </strong>
                    <span>Monday – Sunday: 8:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now | WhatsApp Us | Get Directions */}
              <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex flex-col items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-2.5 text-center text-xs font-bold text-slate-900 dark:text-white transition-colors"
                >
                  <Phone className="size-4 mb-1 text-[#087BDF]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 p-2.5 text-center text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <MessageCircle className="size-4 mb-1" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={siteConfig.contact.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-xl bg-[#062B67] hover:bg-[#087BDF] p-2.5 text-center text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <Navigation className="size-4 mb-1 text-[#FFD928]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Transit Connectivity Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Compass className="size-4 text-[#087BDF]" />
                <span>How to Reach Us:</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <Train className="size-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Kalyan Station:</strong> Direct shared auto / ST Bus to Gauripada (approx. 20-25 mins).
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Train className="size-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Thane Station:</strong> Bus or shared cab via Mumbai-Nashik Expressway directly to Bhiwandi.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Bus className="size-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Local Landmark:</strong> Near Shiv Mandir, directly Opposite Curewell Pharmacy on Mubeen Master Road.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-200 dark:bg-slate-900">
              <iframe
                title="SmartEdge Academy Bhiwandi Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.198083818318!2d73.05608467597148!3d19.273708481971796!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3be7bd1be078ba19%3A0xb245f47a61ba90a2!2sLaxmi%20Ajit%20Complex%2C%20Bhiwandi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-800 text-xs max-w-sm">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Google Business Location</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  Laxmi Ajit Complex, Mubeen Master Rd, Gauripada, Samad Nagar, Bhiwandi 421305
                </p>
                <div className="mt-2">
                  <a
                    href={siteConfig.contact.mapShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#087BDF] dark:text-cyan-400 hover:underline"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
