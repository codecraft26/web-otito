import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, contact, preferredMode, language, location } = body as {
      name: string;
      email: string;
      contact: string;
      preferredMode: string;
      language?: string;
      location?: string;
    };

    if (!name || !email || !contact || !preferredMode) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL?.trim();
    if (!scriptUrl) {
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
    }

    // Google Apps Script returns a 302 redirect for POST requests.
    // Use redirect:"manual" and treat 302 as success (script already ran).
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, contact, preferredMode, language, location }),
      redirect: "manual",
    });

    // 200 = direct success, 302 = Apps Script redirect (script ran fine)
    if (res.status !== 200 && res.status !== 302) {
      const text = await res.text().catch(() => "");
      console.error("[advertise] unexpected status:", res.status, text.slice(0, 300));
      throw new Error(`Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[advertise] error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
