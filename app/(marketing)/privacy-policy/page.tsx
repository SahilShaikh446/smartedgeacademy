import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, ArrowLeft } from "lucide-react"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy | SmartEdge Academy",
  description:
    "Privacy Policy for SmartEdge Academy. Learn how we handle student enquiry information, course enrollments, and communications securely.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
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
            <span>Legal Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • SmartEdge Academy (SmartEdge Group)
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Information We Collect
            </h2>
            <p>
              SmartEdge Academy collects information that you provide directly to us when you fill out an admission or career counselling enquiry form, contact us via WhatsApp, call our admissions desk, or enroll in our training programs. This information may include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Mobile Phone Number</li>
              <li>Email Address</li>
              <li>Academic Qualification (e.g. 12th Pass, BSc, BCom, Engineering)</li>
              <li>Course Interests and Preferred Learning Mode</li>
              <li>Messages or questions submitted during enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use the collected information solely for genuine educational purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To contact you regarding course counselling and batch timings</li>
              <li>To provide curriculum details, fee structures, and lab visit schedules</li>
              <li>To provide 1-on-1 career assistance, resume reviews, and placement coordination</li>
              <li>To respond to your inquiries via telephone, email, or WhatsApp</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              3. Data Protection &amp; Non-Sharing Policy
            </h2>
            <p>
              SmartEdge Academy respects your privacy. We never sell, rent, or trade your personal contact details to third-party marketing brokers or unrelated commercial entities. Your information is shared only with prospective hiring companies during recruitment coordination, and only with your explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              4. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to have your contact details updated or removed from our inquiry database, please contact our administrative desk:
            </p>
            <div className="rounded-xl border border-border/60 bg-card p-4 mt-2">
              <div className="font-bold text-slate-900 dark:text-white">SmartEdge Academy</div>
              <div className="text-xs text-slate-500 mt-1">
                1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Gauripada, Bhiwandi, Maharashtra 421305
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Phone: +91 9820624436 | Email: admissions@smartedgegroup.in
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
