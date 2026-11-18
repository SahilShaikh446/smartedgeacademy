import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, ArrowLeft } from "lucide-react"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Terms & Conditions | SmartEdge Academy",
  description:
    "Terms & Conditions for SmartEdge Academy students and admissions. Transparent guidelines on enrollment, course conduct, and job assistance support services.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
}

export default function TermsPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDF] hover:underline mb-4"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087BDF] mb-2">
            <ShieldCheck className="size-4" />
            <span>Academy Guidelines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • SmartEdge Academy (SmartEdge Group)
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Academy Admissions &amp; Enrollment
            </h2>
            <p>
              Admission into SmartEdge Academy courses is open to 12th pass students, college graduates, and working professionals regardless of academic stream (IT, Commerce, Science, Arts, or Engineering). Admission is confirmed upon completion of the enrollment registration and seat confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              2. Lab Work &amp; Attendance Policy
            </h2>
            <p>
              SmartEdge Academy is a practical, project-based engineering academy. To receive maximum benefit and qualify for course certificates and placement assistance, students are expected to maintain minimum 80% attendance in scheduled laboratory and classroom sessions.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              3. Transparent Job Assistance Disclosure
            </h2>
            <p>
              SmartEdge Academy is dedicated to student employability. Our <strong>100% Job Assistance</strong> promise refers to continuous support services:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>ATS-optimized resume and LinkedIn profile preparation</li>
              <li>GitHub codebase review and architecture documentation</li>
              <li>1-on-1 technical whiteboard and HR mock interview sessions</li>
              <li>Forwarding student profiles to verified corporate hiring partners</li>
              <li>Ongoing interview scheduling alerts until employment is secured</li>
            </ul>
            <p className="mt-2 text-slate-500 italic">
              Disclaimer: Job Assistance does not constitute an unconditional guarantee of employment without candidate merit. Employment outcomes depend on individual student dedication, milestone project completion, and hiring company evaluation standards.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              4. Code of Conduct &amp; Intellectual Property
            </h2>
            <p>
              Students are provided access to development machines, software tooling, and project repositories. Students agree to maintain ethical standards, respect peer learners and lab hardware, and acknowledge that all proprietary course curriculum remains the intellectual property of SmartEdge Academy and SmartEdge Group.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
