import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";
import { submitLead } from "@/lib/email/submitLead";
import type { ContactSubmission } from "@/lib/types/lead";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const submission: ContactSubmission = { kind: "contact", ...parsed.data };
  const result = await submitLead(submission);

  return NextResponse.json(result);
}
