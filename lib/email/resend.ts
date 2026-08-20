import { Resend } from "resend";

/**
 * Lazily-constructed singleton Resend client. Reads RESEND_API_KEY from the
 * environment (see .env.example). Do not construct `new Resend(...)`
 * anywhere else — always call `getResend()` so there is a single configured
 * client.
 *
 * Construction is deferred to first use (rather than at module load) so
 * that routes importing this module don't crash Next's build-time page
 * data collection when RESEND_API_KEY is unset (e.g. before the user has
 * created a Resend account) — the Resend SDK throws synchronously from its
 * constructor if given an empty key. The actual throw, when it happens, is
 * caught by submitLead()'s try/catch at send time instead.
 */
let cachedClient: Resend | null = null;

export function getResend(): Resend {
  if (!cachedClient) {
    cachedClient = new Resend(process.env.RESEND_API_KEY || "re_missing_api_key");
  }
  return cachedClient;
}

export const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
export const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL ?? "kmcurtisrealty@gmail.com";
