import { z } from "zod";

/**
 * Shared client + server validation for the general ContactForm
 * (/contact). The same schema is used by react-hook-form's zodResolver on
 * the client and by app/api/contact/route.ts on the server, so the two
 * never drift apart.
 */
export const contactSchema = z.object({
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
  sourcePage: z.string().trim().min(1),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
