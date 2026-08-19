import { Resend } from "resend";

/**
 * Singleton Resend client. Reads RESEND_API_KEY from the environment (see
 * .env.example). Do not construct `new Resend(...)` anywhere else — always
 * import `resend` from this module so there is a single configured client.
 *
 * If RESEND_API_KEY is unset (e.g. local dev before the user has created a
 * Resend account), the client is still constructed with an empty string so
 * imports don't crash the app at build time — actual send attempts will
 * fail gracefully and are caught by submitLead().
 */
export const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
export const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL ?? "kmcurtisrealty@gmail.com";
