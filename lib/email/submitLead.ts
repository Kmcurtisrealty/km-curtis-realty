import { createElement } from "react";
import { LEAD_NOTIFICATION_EMAIL, RESEND_FROM_EMAIL, getResend } from "@/lib/email/resend";
import { ContactEmail } from "@/lib/email/templates/ContactEmail";
import { PropertyInquiryEmail } from "@/lib/email/templates/PropertyInquiryEmail";
import type { LeadSubmission } from "@/lib/types/lead";

export interface SubmitLeadResult {
  success: true;
}

/**
 * Single shared handler both /api/contact and /api/property-inquiry call
 * after validating the request body against the matching zod schema. Sends
 * a typed React Email template via Resend.
 *
 * On send failure this logs server-side but still resolves successfully —
 * a Resend/API-provider hiccup should never surface as a broken form to the
 * visitor. (Server logs / the Resend dashboard's Logs tab are the source of
 * truth for delivery issues.)
 */
export async function submitLead(submission: LeadSubmission): Promise<SubmitLeadResult> {
  try {
    const resend = getResend();
    if (submission.kind === "contact") {
      await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: LEAD_NOTIFICATION_EMAIL,
        replyTo: submission.email,
        subject: `New website inquiry — ${submission.firstName} ${submission.lastName}`,
        react: createElement(ContactEmail, { submission }),
      });
    } else {
      await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: LEAD_NOTIFICATION_EMAIL,
        replyTo: submission.email,
        subject: `Property inquiry — ${submission.propertyAddress}`,
        react: createElement(PropertyInquiryEmail, { submission }),
      });
    }
  } catch (error) {
    // Never block the UI on an email-provider hiccup.
    console.error("[submitLead] Resend send failed:", error);
  }

  // TODO Phase 2: also send to CRM.

  return { success: true };
}
