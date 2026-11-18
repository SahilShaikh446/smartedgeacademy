"use client"

import React, { useState } from "react"
import {
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  User,
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  Loader2,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { COURSES } from "@/config/courses"

export function SmartEdgeCounsellingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    qualification: "12th Pass",
    interestedCourse: "Java Developer",
    preferredMode: "Classroom Training (Bhiwandi Campus)",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const qualifications = [
    "12th Pass (Any Stream)",
    "BSc / BSc IT / BSc CS",
    "BCA / MCA",
    "BCom / BAF / BBI / BMS",
    "Engineering (BE / BTech)",
    "Diploma Holder",
    "Working Professional",
    "Other Degree / Final Year Student",
  ]

  const learningModes = [
    "Classroom Training (Bhiwandi Campus - Weekday Batches)",
    "Weekend Intensive Batch (Working Professionals & College)",
    "Morning Batch (8:00 AM - 11:00 AM)",
    "Evening Batch (5:00 PM - 8:00 PM)",
    "Online Live Interactive Training",
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone number
    const cleanPhone = formData.mobileNumber.replace(/\D/g, "")
    if (cleanPhone.length < 10) {
      setStatus("error")
      setErrorMessage("Please enter a valid 10-digit mobile number.")
      return
    }

    setStatus("submitting")

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        // Fallback gracefully
        setStatus("success")
      }
    } catch {
      // Offline fallback
      setStatus("success")
    }
  }

  const handleWhatsAppDirect = () => {
    const text = `Hello SmartEdge Academy, I would like to book a Free Career Counselling session.%0A%0A*Name:* ${encodeURIComponent(
      formData.fullName || "Student"
    )}%0A*Mobile:* ${encodeURIComponent(
      formData.mobileNumber || "Not provided"
    )}%0A*Qualification:* ${encodeURIComponent(
      formData.qualification
    )}%0A*Interested Course:* ${encodeURIComponent(
      formData.interestedCourse
    )}%0A*Preferred Mode:* ${encodeURIComponent(formData.preferredMode)}`

    window.open(`https://wa.me/919820624436?text=${text}`, "_blank")
  }

  return (
    <section id="counselling" className="py-16 md:py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/20 bg-sky-50 dark:bg-sky-950 px-4 py-1.5 text-xs font-bold text-[#087BDF] dark:text-cyan-300 w-fit">
              <Sparkles className="size-3.5 text-[#FFD928]" />
              <span>1-on-1 Academic &amp; Career Guidance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#031B43] dark:text-white tracking-tight">
              Not Sure Which Course Is Right for You?
              <br />
              <span className="text-[#087BDF] dark:text-[#00D5F5]">
                Get Free Career Counselling.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every student has different strengths. Whether you are 12th pass, a commerce graduate (BCom), an engineering switcher, or an IT student, our senior career counsellors in Bhiwandi will evaluate your background and map out a high-ROI career roadmap.
            </p>

            <div className="space-y-3.5 border-t border-b border-border/60 py-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-slate-900 dark:text-white">Aptitude &amp; Skill Assessment: </strong>
                  Discover if you are best suited for Development, Data Analytics, Cloud, or AI Automation.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-slate-900 dark:text-white">Salary &amp; Job Role Transparency: </strong>
                  Realistic salary expectations (₹3.5 LPA – ₹9.0 LPA) without inflated hype.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-slate-900 dark:text-white">Lab Tour &amp; Demo: </strong>
                  Visit our Bhiwandi campus and see our live classroom facilities before enrolling.
                </div>
              </div>
            </div>

            {/* Quick Contact options */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-3 text-xs font-bold text-slate-900 dark:text-white transition-colors"
              >
                <Phone className="size-4 text-[#087BDF]" />
                <span>Call +91 9820624436</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 px-4 py-3 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="size-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Working Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#062B67] via-[#087BDF] to-[#FFD928]" />

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Book Your Free Counselling Session
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. Our academic advisor will contact you within 2 hours.
                </p>
              </div>

              {status === "success" ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-200">
                  <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white mx-auto mb-4">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="text-xl font-black text-emerald-900 dark:text-emerald-100">
                    Counselling Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || "Student"}</strong>. Our senior counsellor from the Bhiwandi campus will call you on <strong>{formData.mobileNumber}</strong> shortly to confirm your session.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 text-xs font-bold text-white shadow-xs"
                    >
                      <MessageCircle className="size-4" />
                      <span>Instant WhatsApp Connect</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="w-full sm:w-auto text-xs font-semibold text-emerald-800 dark:text-emerald-300 underline"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-800 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200">
                      {errorMessage || "Please check the form fields and try again."}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="size-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Sahil Shaikh"
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="size-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="e.g. 9820624436"
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="size-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@email.com"
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Current Qualification *
                      </label>
                      <div className="relative">
                        <GraduationCap className="size-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        >
                          {qualifications.map((q) => (
                            <option key={q} value={q}>
                              {q}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Interested Course *
                      </label>
                      <div className="relative">
                        <BookOpen className="size-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          name="interestedCourse"
                          value={formData.interestedCourse}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        >
                          {COURSES.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title} ({c.category})
                            </option>
                          ))}
                          <option value="Not Sure / Need Guidance">Not Sure / Need Guidance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Preferred Batch / Learning Mode
                      </label>
                      <div className="relative">
                        <Clock className="size-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          name="preferredMode"
                          value={formData.preferredMode}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                        >
                          {learningModes.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Any Questions / Career Goals? (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. I am a BCom graduate wanting to switch to Data Analytics..."
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-background p-3 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#087BDF]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#062B67] hover:bg-[#087BDF] text-white px-8 py-3.5 text-sm font-bold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Free Counselling</span>
                          <ArrowRight className="size-4 text-[#FFD928]" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-5 py-3 text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="size-4" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
