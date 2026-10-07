import { z } from "zod";

/**
 * Shared client + server validation for the American Dream TV show
 * suggestion box (/american-dream-tv). Mirrors contactSchema's pattern —
 * used by react-hook-form's zodResolver on the client and by
 * app/api/show-suggestion/route.ts on the server.
 */
export const showSuggestionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  suggestion: z.string().trim().min(10, "Tell us a bit more about your idea (at least 10 characters)").max(2000),
  sourcePage: z.string().trim().min(1),
});

export type ShowSuggestionFormValues = z.infer<typeof showSuggestionSchema>;
