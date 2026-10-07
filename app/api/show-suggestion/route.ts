import { NextResponse } from "next/server";
import { showSuggestionSchema } from "@/lib/validation/showSuggestionSchema";
import { submitLead } from "@/lib/email/submitLead";
import type { ShowSuggestionSubmission } from "@/lib/types/lead";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = showSuggestionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const submission: ShowSuggestionSubmission = { kind: "show-suggestion", ...parsed.data };
  const result = await submitLead(submission);

  return NextResponse.json(result);
}
