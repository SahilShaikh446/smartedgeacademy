import type { Metadata } from "next"
import Link from "next/link"
import {
  Code2,
  Globe,
  BarChart3,
  Bot,
  Workflow,
  LineChart,
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  Database,
  ExternalLink,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { BorderBeam } from "@/registry/magicui/border-beam"

export const metadata: Metadata = constructMetadata({
  title: "Projects & Practical Training | SmartEdge Academy Bhiwandi",
  description:
    "Don't just learn technology. Build with it. Explore SmartEdge Academy's practical project tracks in Full Stack Web Apps, BI Dashboards, AI Agents, and Workflow Automations.",
})

export default function PracticalTrainingPage() {
  const tracks = [
    {
      category: "Track 01 • Web Applications",
      icon: Globe,
      color: "from-blue-600 to-sky-500",
      title: "Multi-Tenant E-Commerce & Inventory SaaS",
      description:
        "Students build an end-to-end full-stack web application with JWT authentication, role-based access control, Razorpay payment gateway integration, and real-time inventory webhooks.",
      techStack: ["Java Spring Boot / Node.js", "React.js / Next.js", "MySQL / PostgreSQL", "Docker & AWS"],
      deliverable: "Live deployed application URL with CI/CD pipeline and GitHub code repository for resumes.",
    },
    {
      category: "Track 02 • Business Dashboards",
      icon: BarChart3,
      color: "from-amber-500 to-yellow-500",
      title: "Bhiwandi Warehousing & Logistics BI Executive Dashboard",
      description:
        "Inspired by Bhiwandi's massive supply chain corridor. Ingests raw shipping and dispatch logs, cleans anomalies with SQL, and outputs executive KPIs.",
      techStack: ["Power BI", "DAX Formulas", "SQL Server", "Advanced Excel Power Query"],
      deliverable: "Interactive dashboard featuring drilldowns, truck turnaround analytics, and automated email KPI reports.",
    },
    {
      category: "Track 03 • AI-Powered Applications",
      icon: Bot,
      color: "from-purple-600 to-indigo-600",
      title: "RAG Knowledge-Retrieval AI Customer Support Bot",
      description:
        "Engineers an autonomous AI assistant capable of digesting product technical manuals, generating vector embeddings, and answering user queries with zero hallucination.",
      techStack: ["Python", "OpenAI / Gemini API", "LangChain / LlamaIndex", "ChromaDB / Pinecone"],
      deliverable: "Interactive conversational widget connected to WhatsApp and Slack channels.",
    },
    {
      category: "Track 04 • Automation Workflows",
      icon: Workflow,
      color: "from-cyan-500 to-teal-500",
      title: "Zero-Code Lead Ingestion & Accounting Sync Pipeline",
      description:
        "Automates client onboarding end-to-end: web form submissions parse invoices, verify GST numbers, update CRM deals, and alert teams via WhatsApp.",
      techStack: ["n8n Workflow Automation", "REST Webhooks", "Google Sheets API", "WhatsApp Business API"],
      deliverable: "Production automation blueprint saving 15+ weekly operational hours.",
    },
    {
      category: "Track 05 • Data Analytics & Forecasting",
      icon: LineChart,
      color: "from-emerald-600 to-teal-600",
      title: "Customer Churn Prediction & Cohort Retention Analysis",
      description:
        "Applies statistical algorithms and exploratory data analysis (EDA) to historical consumer transaction datasets to pinpoint retention drop-off triggers.",
      techStack: ["Python", "Pandas & NumPy", "Matplotlib / Seaborn", "Scikit-Learn Classification"],
      deliverable: "Jupyter Notebook report containing business insights and actionable retention recommendations.",
    },
    {
      category: "Track 06 • Digital Marketing Growth Engines",
      icon: Megaphone,
      color: "from-rose-500 to-pink-600",
      title: "AI-Powered Multi-Channel Lead Acquisition Funnel",
      description:
        "Designs high-converting landing pages, sets up Meta & Google tracking pixels, generates targeted ad copy with LLMs, and tracks cost-per-lead (CPL) metrics.",
      techStack: ["Meta Ads Manager", "Google Analytics 4 (GA4)", "Google Tag Manager", "Canva & Copy AI"],
      deliverable: "Live running campaign report with verified ROI and attribution telemetry.",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 md:py-22 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-100/70 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 mb-4">
            <Code2 className="size-4 text-[#FFD928]" />
            <span>Proof of Work Curriculum</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#062B67] dark:text-white tracking-tight leading-[1.15]">
            Don&apos;t Just Learn Technology.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BDF] via-[#00D5F5] to-[#062B67] dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400">
              Build With It.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Theory without projects gets rejected by recruiters. At SmartEdge Academy, every student leaves with a portfolio of live deployed applications and verified GitHub repositories.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/courses">
              <ShimmerButton
                shimmerColor="#FFD928"
                background="linear-gradient(135deg, #062B67 0%, #087BDF 100%)"
                className="px-8 py-3.5 text-sm font-bold text-white shadow-md"
              >
                <span>Choose a Course Track</span>
                <ArrowRight className="size-4 ml-2" />
              </ShimmerButton>
            </Link>

            <Link
              href="/career-counselling"
              className="rounded-full border-2 border-[#062B67] dark:border-cyan-400 px-6 py-2.5 text-sm font-bold text-[#062B67] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Consult with Project Mentors
            </Link>
          </div>
        </div>
      </section>

      {/* 6 Project Tracks Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, idx) => {
              const Icon = track.icon
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <BorderBeam
                    size={160}
                    duration={10}
                    delay={idx * 2}
                    colorFrom="#FFD928"
                    colorTo="#087BDF"
                  />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${track.color} text-white shadow-md`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                        {track.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#087BDF] transition-colors mb-2">
                      {track.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {track.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mb-4">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1.5">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {track.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-start gap-1.5">
                    <CheckCircle2 className="size-3.5 shrink-0 mt-0.5" />
                    <span>{track.deliverable}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
