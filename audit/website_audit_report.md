# 360° Comprehensive Technical SEO, Local Authority & Growth Audit
**Target Property:** [https://academy.smartedgegroup.in/](https://academy.smartedgegroup.in/)  
**Entity:** SmartEdge Academy (SmartEdge Group)  
**Location:** Bhiwandi, Maharashtra, India  
**Audit Date:** November 19, 2026  
**Auditor:** Principal Technical SEO Architect, Local Authority & Conversion Strategist  

---

## Executive Summary

### Business & Property Overview
SmartEdge Academy is an engineering accelerator and career transition academy based in Bhiwandi, Maharashtra. Operating under its parent company, **SmartEdge Group**, the academy specializes in practical, job-oriented training across two core divisions:
1. **IT & Software Development:** Java 21 / Spring Boot 3, Modern Python (Django/FastAPI), Full-Stack MERN, React JS & React Native, Data Science & Machine Learning, Data Analytics & Power BI, SQL Engineering, and Cloud & DevOps.
2. **AI & Workflow Automation:** Google Antigravity AI Coding Agents, n8n Workflow Automation, ChatGPT for Professionals, Google Gemini Multimodal Workflows, and Generative AI Video.

The institution explicitly targets 12th pass students, non-IT graduates (BCom, MCom, BSc, BA), and engineering freshers struggling with employability in the Mumbai Metropolitan Region (MMR). Its flagship differentiator is a structured **100% Job Assistance** program incorporating technical drills, ATS resume optimization, simulated 1-on-1 mock interviews with working software engineers, and corporate referral pipelines.

---

### Key Findings Snapshot

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AUDIT SCORECARD SUMMARY                         │
├──────────────────────────────┬───────────────┬─────────────────────────┤
│ Category                     │ Current Score │ Status                  │
├──────────────────────────────┼───────────────┼─────────────────────────┤
│ Technical SEO & Architecture │     58 / 100  │ Needs Immediate Fix     │
│ On-Page SEO & Hierarchy      │     74 / 100  │ Good                    │
│ Local SEO & Google Business  │     42 / 100  │ Critical Gap (Unclaimed)│
│ AEO (Answer Engine Opt.)     │     85 / 100  │ Very Strong             │
│ GEO (Generative Engine Opt.) │     88 / 100  │ Industry Leading        │
│ Content Quality & E-E-A-T    │     72 / 100  │ Strong                  │
│ Structured Data & Schema     │     60 / 100  │ High Dilution/Bleed     │
│ Performance & Core Web Vitals│     52 / 100  │ Needs CSS Unbundling    │
│ UX, CRO & Lead Capture       │     65 / 100  │ Lead Leakage in API     │
│ Off-Page & Local Authority   │     45 / 100  │ Unclaimed Citations     │
├──────────────────────────────┼───────────────┼─────────────────────────┤
│ OVERALL COMPOSITE SCORE      │     68 / 100  │ Strong Core, 3 Killers  │
└──────────────────────────────┴───────────────┴─────────────────────────┘
```

### The Three Critical Blockers
1. **Critical Blocker 1 (SEO Killer): Global Canonical URL Misconfiguration**
   * **Finding:** Line 133 of `lib/utils.ts` hardcodes `alternates: { canonical: siteConfig.url }`.
   * **Impact:** Every single page on the site (`/courses`, `/about`, `/contact`, `/career-counselling`, and all 21 `/courses/[slug]` pages) renders `<link rel="canonical" href="https://academy.smartedgegroup.in" />`.
   * **Consequence:** Search engines are instructed to treat every subpage as a duplicate of the homepage, severely restricting the indexation and ranking potential of all course pages.
2. **Critical Blocker 2 (Revenue Killer): Silent Lead Capture API**
   * **Finding:** In `app/api/enquiry/route.ts`, form submissions execute only `console.log` on the Vercel serverless runtime without persistence, email delivery, or webhook triggers.
   * **Impact:** When prospective students submit admissions enquiries, the frontend shows "Enquiry submitted successfully," but admissions counsellors receive zero notifications, resulting in lost student leads.
3. **Critical Blocker 3 (Local Pack Killer): Unclaimed Google Business Profile**
   * **Finding:** The website's Google Maps embed links to the general building (`Laxmi Ajit Complex`) rather than a verified business listing for `SmartEdge Academy`.
   * **Impact:** The academy forfeits up to 60% of high-intent local mobile search traffic from Google Maps and the Local 3-Pack ("computer classes in Bhiwandi", "coding institute near me").

---

## Audit Scorecard & Rubric

### Scoring Methodology & Rubric
Scores are calculated on an absolute 0–100 scale using verifiable evidence collected from source code inspection and live HTTP network requests:
* **90–100 (Exceptional):** Full compliance with industry standards, verified rich results, error-free architecture.
* **75–89 (Good):** Strong fundamentals with minor optimization opportunities.
* **50–74 (Needs Work):** Significant structural defects that suppress organic visibility or user conversion.
* **0–49 (Critical Failure):** Blocker preventing indexation, local presence, or business lead generation.

| Discipline | Score | Key Driver / Rationale |
| :--- | :---: | :--- |
| **Technical SEO** | **58** | Deductions for global canonical loop pointing subpages to homepage, hardcoded `og:url`, and missing security headers. |
| **On-Page SEO** | **74** | Well-crafted metadata and titles; deductions for heading hierarchy jumps on course pages and lack of individual slug pages for blog articles. |
| **Local SEO & GBP** | **42** | Deductions for absence of a verified Google Business Profile, lack of primary/secondary categories, and minimal local directory footprint. |
| **AEO (Answer Engine)** | **85** | High-quality FAQ schema and concise answer-first copy; deductions for lack of a visible accordion component on the homepage. |
| **GEO (Generative Engine)** | **88** | Exceptional `/llms.txt` implementation and comprehensive bot allowances for GPTBot, ClaudeBot, PerplexityBot, ChatGPT-User, and Meta-ExternalAgent. |
| **Content & E-E-A-T** | **72** | Thorough 21-course curriculum; deductions for anonymous mentor credits ("SmartEdge Group Leadership") and lack of standalone blog posts. |
| **Structured Data** | **60** | Global injection of `FAQPage` and 8 `Course` schemas across non-relevant pages (e.g. `/privacy-policy`) causing schema dilution. Missing `BreadcrumbList`. |
| **Performance & CWV** | **52** | Initial HTML document size is 1.23 MB due to `inlineCss: true` in `next.config.mjs`, delaying mobile TTFB. |
| **UX & CRO** | **65** | Clean modern UI; deductions for silent lead form submissions, lack of fee calculators, and missing form analytics events. |
| **Off-Page & Authority** | **45** | Lack of structured local citations (Justdial, Sulekha, IndiaMART) and regional educational backlinks. |
| **OVERALL COMPOSITE** | **68** | **Weighted Average across all 10 operational disciplines.** |

---

## Detailed Findings Table

| Issue ID | Category | Severity | Affected URL | Verified Evidence | Why It Matters | Recommended Solution | Impact | Effort | Confidence | Verification Method |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **TECH-001** | Technical SEO | **Critical** | `https://academy.smartedgegroup.in/*` | Inspected live HTML of `/courses`, `/about`, `/contact`, `/courses/[slug]`. All output `<link rel="canonical" href="https://academy.smartedgegroup.in"/>`. | Causes Google to treat all 21 course landing pages as duplicate copies of the homepage, dropping them from course-specific SERPs. | Refactor `constructMetadata` in `lib/utils.ts` to compute self-referential canonicals based on current route path. | High | Low | 100% | Live HTML & Codebase Inspection |
| **TECH-002** | Technical SEO | **High** | `https://academy.smartedgegroup.in/*` | `<meta property="og:url" content="https://academy.smartedgegroup.in"/>` on all subpages. | Shared links on WhatsApp/LinkedIn send visitors to the homepage instead of the shared course. | Update `constructMetadata` to set `openGraph.url` dynamically. | Medium | Low | 100% | Live HTML Inspection |
| **TECH-003** | Performance | **High** | `https://academy.smartedgegroup.in/` | Live curl headers: `Content-Length: 1236184` bytes (~1.23 MB HTML). `next.config.mjs` has `experimental: { inlineCss: true }`. | Massive initial HTML document slows mobile TTFB, FCP, and burns student mobile data plans in Bhiwandi. | Remove `experimental.inlineCss` in `next.config.mjs` to allow external CSS chunk caching. | High | Low | 100% | Live curl Response & Config Inspection |
| **TECH-004** | Security | **High** | `https://academy.smartedgegroup.in/` | Missing `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` headers. | Leaves site open to clickjacking and MIME-type sniffing; lowers trust scores. | Add `headers()` block in `next.config.mjs` to inject standard security headers. | Medium | Low | 100% | Live Header Analysis |
| **TECH-005** | PWA / Metadata | **Medium** | `/site.webmanifest` | `public/site.webmanifest` contains `"name": "Magic UI"`. | Mobile users adding the site to their homescreen see "Magic UI" rather than SmartEdge Academy. | Update `site.webmanifest` with SmartEdge Academy name, icons, and theme colors. | Low | Low | 100% | Source Code Inspection |
| **CRO-001** | Conversion & CRO | **Critical** | `/api/enquiry` | `app/api/enquiry/route.ts` only logs to `console.log`. No email or CRM webhook integrated. | Admissions team never receives student leads submitted via the online counselling form. | Integrate Resend / Nodemailer email notifications and webhook push to CRM / Google Sheets. | High | Medium | 100% | Route Handler Source Code Inspection |
| **CRO-002** | Analytics | **High** | `/career-counselling`, Home | Form submit and WhatsApp button clicks trigger zero `gtag` or PostHog custom events. | Marketing has no visibility into lead acquisition costs or conversion bottlenecks. | Add `gtag('event', 'generate_lead')` and PostHog event captures on form success and WhatsApp clicks. | High | Low | 100% | Component Code Inspection |
| **LOCAL-001** | Local SEO | **Critical** | `/contact`, GBP | Google Maps embed points to building CID (`Laxmi Ajit Complex`). No verified GBP panel for SmartEdge Academy. | Loses up to 60% of local student searches from Google Maps and Local 3-Pack. | Claim and verify Google Business Profile under "SmartEdge Academy - IT & AI Training Institute"; update embed CID. | High | Medium | 100% | Google Maps & SERP Crawl |
| **LOCAL-002** | Local SEO | **High** | Regional Directories | Zero verified business listings on Justdial, Sulekha, IndiaMART for the academy. | Low local prominence compared to competitors like Kala Computer Class and IT Gurukul. | Build 25+ verified local directory citations with consistent NAP. | High | Medium | 100% | Public Web Search & Directory Query |
| **SCHEMA-001** | Structured Data | **High** | Global Layout | `StructuredData` in `app/layout.tsx` injects `FAQPage` and 8 `Course` schemas across every page. | Violates Google's relevance guidelines; dilutes entity signals on non-course pages. | Move `FAQPage` to pages with visible FAQs; inject `Course` schemas only on specific course URLs. | High | Low | 100% | Codebase & DOM Inspection |
| **SCHEMA-002** | Structured Data | **Medium** | `/courses/[slug]` | Course pages display visual breadcrumb navigation but omit JSON-LD `BreadcrumbList`. | Search engine snippets miss breadcrumb trail hierarchy in search results. | Inject `BreadcrumbList` JSON-LD schema into `app/(marketing)/courses/[slug]/page.tsx`. | Medium | Low | 100% | Course Page JSON-LD Inspection |
| **ONPAGE-002** | Content SEO | **High** | `/blog` | Blog displays 5 high-value article cards with no click-through URLs or slug pages. | Misses organic search traffic for high-intent long-tail career transition keywords. | Build dynamic `app/(marketing)/blog/[slug]/page.tsx` and publish full 1,500+ word guides. | High | Medium | 100% | Route Tree Inspection |

---

## URL-by-URL Audit for Critical Pages

### 1. Homepage (`https://academy.smartedgegroup.in/`)
* **Primary Search Intent:** Brand navigation & primary local IT training discovery ("IT Training Institute in Bhiwandi").
* **Current Meta Title:** `SmartEdge Academy | AI-Powered Career & Job Skills Academy in Bhiwandi` (Length: 69 chars — Optimal).
* **Current Meta Description:** Well structured, highlighting Java, Python, Data Science, and 100% Job Assistance.
* **Heading Structure:** H1 is clear. Visual sections transition well.
* **Defects Identified:**
  1. Initial HTML payload is 1.23 MB due to inlined CSS.
  2. FAQ schema is injected in `<head>`, but no visible accordion FAQ component exists on the page.
  3. Counselling form logs leads to server console only.
* **Fixes Required:** Remove `inlineCss: true`, add visible FAQ accordion component, connect email delivery to `/api/enquiry`.

### 2. Course Hub (`https://academy.smartedgegroup.in/courses`)
* **Primary Search Intent:** Commercial investigation ("IT courses in Bhiwandi", "software classes Bhiwandi").
* **Current Meta Title:** `All IT & AI Courses in Bhiwandi | SmartEdge Academy`
* **Defects Identified:**
  1. **Canonical Tag points to homepage** (`https://academy.smartedgegroup.in`) instead of `/courses`.
  2. Course cards link to `/courses/[slug]`, which is excellent, but filtering requires full JavaScript execution.
* **Fixes Required:** Correct canonical tag to `https://academy.smartedgegroup.in/courses`.

### 3. Java Developer Course Page (`https://academy.smartedgegroup.in/courses/java-developer`)
* **Primary Search Intent:** Local commercial investigation ("Java classes in Bhiwandi", "Spring Boot course Thane").
* **Current Meta Title:** `Java Developer Course in Bhiwandi | SmartEdge Academy`
* **Content Quality:** Comprehensive curriculum covering Core Java 17/21, Spring Boot 3, Hibernate, and Microservices.
* **Defects Identified:**
  1. **Canonical Tag points to homepage**, preventing Google from ranking this page for "Java training in Bhiwandi".
  2. Missing `BreadcrumbList` structured data.
  3. Curriculum sections jump from H1 directly to H3.
* **Fixes Required:** Fix canonical, add JSON-LD `BreadcrumbList`, restructure heading levels.

### 4. Free Career Counselling Page (`https://academy.smartedgegroup.in/career-counselling`)
* **Primary Search Intent:** High-intent student conversion ("Free career counselling Bhiwandi", "IT guidance after BCom").
* **Defects Identified:**
  1. Canonical tag points to homepage.
  2. Lead form submissions do not trigger email notifications or CRM updates.
  3. No conversion tracking events fired on successful lead submission.
* **Fixes Required:** Fix canonical, integrate email alerts via Resend/SMTP, fire GA4 `generate_lead` event on form completion.

---

## Local SEO & Google Business Profile (GBP) Strategy

### Competitive Landscape in Bhiwandi
A market scan reveals that existing computer institutes in Bhiwandi (such as Kala Computer Class near Anjurphata, IT Gurukul at Dhamankar Naka, and Sharp Computers in Amane) primarily offer basic desktop publishing, Tally, and entry-level programming. None offer enterprise full-stack development, cloud infrastructure, or AI automation.

However, these competitors outrank SmartEdge Academy in Google Maps because they possess verified Google Business Profiles with accumulated reviews and local citations.

### GBP Setup & Optimization Plan
1. **Profile Creation & Verification:**
   * **Exact Business Name:** `SmartEdge Academy - IT & AI Training Institute`
   * **Primary Category:** `Computer Training School`
   * **Secondary Categories:** `Software Training Institute`, `Educational Institution`, `Training Centre`, `Vocational Training School`
   * **Exact Physical Address:** `1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Near Shiv Mandir, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi, Maharashtra 421305`
   * **Operating Hours:** Monday–Sunday, 09:00 AM – 08:00 PM
2. **Media Assets:**
   * Upload 20+ authentic photos: exterior building signage, computer lab workstations, lecture room, faculty mentoring, and student mock interview sessions.
3. **Products & Services Module:**
   * Add all 21 courses under GBP Products with pricing indicators, duration, and direct links to `/courses/[slug]`.
4. **Student Review Engine:**
   * Generate an official Google review shortlink (`g.page/r/.../review`).
   * Display a QR code standee at the campus front desk.
   * Send an automated WhatsApp review request to students after their first successful project deployment. Target: 30+ 5-star reviews within 60 days.

---

## AEO (Answer Engine) & GEO (Generative Engine) Roadmap

SmartEdge Academy already demonstrates forward-thinking technical readiness with its `/llms.txt` implementation and permissive `robots.txt` configuration for AI crawlers. To capitalize on conversational AI search (ChatGPT Search, Google AI Overviews, Perplexity):

### 1. Direct-Answer Content Formatting
Add an **"At a Glance"** Quick-Facts callout box at the top of every course page answering core user questions in direct natural language:
* **Duration:** e.g., "4 to 6 months (10 hours/week practical lab training)."
* **Eligibility:** "12th Pass, BSc, BCA, BCom, Engineering, or any graduate. No prior coding experience required."
* **Job Roles:** "Junior Java Developer, Backend Engineer, Spring Boot Developer."
* **Placement Support:** "100% Job Assistance including ATS resume building and 1-on-1 mock interviews."

### 2. Standalone Career Guides (Blog Engine)
Transform the 5 blog topics currently shown on `/blog` into full 1,500+ word guides on dedicated URLs:
* `/blog/non-it-to-data-analyst`: Complete roadmap for BCom/BSc graduates transitioning to data analytics.
* `/blog/java-vs-python-2026`: Practical comparison of enterprise hiring trends in Mumbai/Thane.
* `/blog/top-tech-resume-mistakes`: Actionable guide to passing ATS filters with GitHub project proof.

---

## UX, CRO & Business Conversion Improvements

### 1. Fix the Broken Lead Pipeline
In `app/api/enquiry/route.ts`, replace the placeholder `console.log` with an active email dispatch service (such as Resend or Nodemailer) to instantly notify `admissions@smartedgegroup.in` and forward leads to a Google Sheet / CRM webhook.

```typescript
// Production Email Dispatch in app/api/enquiry/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "SmartEdge Admissions <admissions@smartedgegroup.in>",
  to: ["admissions@smartedgegroup.in"],
  subject: `New Admission Lead: ${fullName} (${interestedCourse})`,
  html: `
    <h3>New Career Counselling Request</h3>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Mobile:</strong> ${mobileNumber}</p>
    <p><strong>Email:</strong> ${email || "Not provided"}</p>
    <p><strong>Qualification:</strong> ${qualification}</p>
    <p><strong>Course:</strong> ${interestedCourse}</p>
    <p><strong>Mode:</strong> ${preferredMode}</p>
    <p><strong>Message:</strong> ${message || "N/A"}</p>
  `,
});
```

### 2. Event Tracking Instrumentation
Add client-side event tracking in `components/sections/smartedge-counselling-form.tsx`:
```typescript
if (typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", "generate_lead", {
    event_category: "Admissions",
    event_label: formData.interestedCourse,
    value: 1,
  });
}
```

---

## 7-Day Quick Wins Action Plan

| Day | Action Item | File / Target | Expected Impact |
| :---: | :--- | :--- | :--- |
| **Day 1** | **Fix Canonical URL Bug:** Modify `lib/utils.ts` so `constructMetadata` generates self-referential canonical tags for all routes. | `lib/utils.ts` | Allows Google to index and rank all 21 course subpages independently. |
| **Day 2** | **Connect Email Notifications:** Update `app/api/enquiry/route.ts` with Resend/Nodemailer to alert admissions staff on new leads. | `app/api/enquiry/route.ts` | Stops 100% lead leakage; delivers student leads in real time. |
| **Day 3** | **Unbundle Inlined CSS:** Remove `experimental: { inlineCss: true }` in `next.config.mjs`. | `next.config.mjs` | Reduces initial HTML payload from 1.23 MB to <100 KB; improves mobile TTFB. |
| **Day 4** | **Add Security Headers:** Add `X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy` to `next.config.mjs`. | `next.config.mjs` | Eliminates clickjacking vulnerabilities; secures A-grade header rating. |
| **Day 5** | **Claim Google Business Profile:** Submit verification for `SmartEdge Academy - IT & AI Training Institute` at Laxmi Ajit Complex. | Google Business Profile | Starts local verification process for Google Maps & Local 3-Pack. |
| **Day 6** | **Instrument Conversion Tracking:** Add `gtag` and PostHog custom events for form submits, WhatsApp clicks, and phone calls. | Counselling Form & Header | Restores visibility into lead sources and conversion rates. |
| **Day 7** | **Fix Web App Manifest:** Update `public/site.webmanifest` to reflect SmartEdge Academy branding instead of "Magic UI". | `public/site.webmanifest` | Ensures mobile PWA installations display correct academy branding. |

---

## Data Limitations & Access Requirements

This audit was conducted using non-intrusive public inspection, live HTTP response telemetry, and static codebase analysis. To unlock further optimization phases, the following access is required:
1. **Google Search Console (GSC):** Required to inspect real search impressions, click-through rates (CTR), crawl error logs, and keyword queries.
2. **Google Analytics 4 (GA4):** Required to analyze funnel drop-offs, user session paths, and device-level engagement.
3. **Google Business Profile Manager:** Required to verify profile attributes, respond to reviews, and monitor direct map calls and direction requests.
4. **Transactional Email Service API Keys (Resend / SendGrid / SMTP):** Required to connect production lead routing from `/api/enquiry`.
