import Link from "next/link"
import { Phone, Mail, MapPin, Globe, Sparkles, MessageCircle, ExternalLink, ShieldCheck, ArrowRight, Bot, GraduationCap, CheckCircle2 } from "lucide-react"

import { siteConfig } from "@/config/site"
import { SmartEdgeLogo } from "@/components/smartedge-logo"
import { popularCourses } from "@/config/courses"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const itCourses = popularCourses.filter((c) => c.category === "IT & Development").slice(0, 7)
  const aiCourses = popularCourses.filter((c) => c.category === "AI & Automation").slice(0, 7)

  return (
    <footer className="border-t border-border bg-[#031B43] text-slate-300 pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <SmartEdgeLogo light={true} />
            
            <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              SmartEdge Academy is Bhiwandi&apos;s premier AI-powered career and job skills institute. We provide industry-aligned practical training in software engineering, data science, and AI workflow automation with dedicated job assistance.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FFD928]/40 bg-[#FFD928]/10 px-3 py-1 text-[11px] font-bold text-[#FFD928]">
              <Sparkles className="size-3 text-[#FFD928]" />
              <span>100% JOB ASSISTANCE*</span>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#00D5F5] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteConfig.contact.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#00D5F5] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white font-bold transition-colors"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition-colors"
                >
                  WhatsApp: +91 98206 24436
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#00D5F5] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* IT & Software Development Courses */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <GraduationCap className="size-4 text-[#00D5F5]" />
              <span>IT &amp; Development</span>
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {itCourses.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-[#FFD928] hover:underline font-bold inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 15+ IT Courses</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* AI & Automation Courses */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Bot className="size-4 text-[#00D5F5]" />
              <span>AI &amp; Automation</span>
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {aiCourses.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-[#FFD928] hover:underline font-bold inline-flex items-center gap-1 mt-1"
                >
                  <span>View All AI Courses</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Local Area */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Academy &amp; Admissions
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About SmartEdge Academy
                </Link>
              </li>
              <li>
                <Link href="/career-assistance" className="text-slate-300 hover:text-white transition-colors">
                  100% Job Assistance Details
                </Link>
              </li>
              <li>
                <Link href="/practical-training" className="text-slate-300 hover:text-white transition-colors">
                  Projects &amp; Lab Practical Training
                </Link>
              </li>
              <li>
                <Link href="/career-counselling" className="text-slate-300 hover:text-white transition-colors">
                  Free Career Counselling Desk
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Career Guides &amp; Tech Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact &amp; Bhiwandi Campus
                </Link>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="text-slate-400 hover:text-slate-200 transition-colors font-mono text-[11px]"
                >
                  llms.txt (AI Knowledge Base)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Promise Ribbon */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-extrabold uppercase">Brand Promise:</span>
            <span className="text-[#00D5F5]">SKILLS</span>
            <span>|</span>
            <span className="text-[#FFD928]">KNOWLEDGE</span>
            <span>|</span>
            <span className="text-sky-300">OPPORTUNITIES</span>
            <span>|</span>
            <span className="text-emerald-300">A BRIGHTER YOU</span>
          </div>

          <div className="text-[11px] text-slate-400">
            Parent Company:{" "}
            <span className="text-white font-semibold">{siteConfig.parentCompany}</span>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] leading-relaxed max-w-2xl text-slate-400">
            *100% Job Assistance Support Disclaimer: SmartEdge Academy provides career guidance, interview preparation, resume creation, mock interviews, and corporate referrals to support students in securing employment. Course completion does not guarantee automatic employment without fulfilling course project standards and interview clearance.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium shrink-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-[11px] text-slate-500">
          © {currentYear} {siteConfig.name} ({siteConfig.parentCompany}). All rights reserved. Bhiwandi, Maharashtra, India.
        </div>
      </div>
    </footer>
  )
}
