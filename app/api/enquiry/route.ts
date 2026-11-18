import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, mobileNumber, email, qualification, interestedCourse, preferredMode, message } = body

    if (!fullName || !mobileNumber) {
      return NextResponse.json(
        { error: "Name and mobile number are required." },
        { status: 400 }
      )
    }

    // In production, this can send an email via Resend, log to a CRM, or send a webhook to n8n / WhatsApp API
    console.log("[SmartEdge Academy Lead Enquiry Received]:", {
      timestamp: new Date().toISOString(),
      fullName,
      mobileNumber,
      email,
      qualification,
      interestedCourse,
      preferredMode,
      message,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. A counsellor will contact you shortly.",
        enquiryId: `SE-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    )
  } catch (err) {
    console.error("[Enquiry API Error]:", err)
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    )
  }
}
