import { NextResponse } from "next/server";
import { propertyInquirySchema } from "@/lib/validation/propertyInquirySchema";
import { submitLead } from "@/lib/email/submitLead";
import type { PropertyInquirySubmission } from "@/lib/types/lead";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = propertyInquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const submission: PropertyInquirySubmission = { kind: "property-inquiry", ...parsed.data };
  const result = await submitLead(submission);

  return NextResponse.json(result);
}
