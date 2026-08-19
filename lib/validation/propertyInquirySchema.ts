import { z } from "zod";

/**
 * Shared client + server validation for PropertyInquiryForm, used on every
 * property detail page. Mirrors contactSchema's base fields and adds the
 * property context that's auto-captured (not user-entered) so it can be
 * forwarded to a future CRM integration.
 */
export const propertyInquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)").max(2000),
  interestedInProperty: z.boolean(),
  sourcePage: z.string().trim().min(1),
  propertyId: z.string().trim().min(1),
  propertySlug: z.string().trim().min(1),
  propertyAddress: z.string().trim().min(1),
  propertyUrl: z.string().trim().min(1),
});

export type PropertyInquiryFormValues = z.infer<typeof propertyInquirySchema>;
