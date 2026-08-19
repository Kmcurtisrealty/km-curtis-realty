/**
 * Lead / form-submission data model shared between client forms, zod
 * validation schemas, API routes, and the Resend email templates.
 */

export interface BaseLeadFields {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  /** The page the lead was submitted from, e.g. "/contact" or a property URL. */
  sourcePage: string;
}

export interface ContactSubmission extends BaseLeadFields {
  kind: "contact";
}

export interface PropertyInquirySubmission extends BaseLeadFields {
  kind: "property-inquiry";
  propertyId: string;
  propertySlug: string;
  propertyAddress: string;
  propertyUrl: string;
  /** "I'm interested in this property." checkbox. */
  interestedInProperty: boolean;
}

export type LeadSubmission = ContactSubmission | PropertyInquirySubmission;
