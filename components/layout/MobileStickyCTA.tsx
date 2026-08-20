import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Thumb-friendly sticky bottom CTA bar, mobile-only (spec §37). Sits above
 * the safe area so it never overlaps content on notch devices.
 */
export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-stretch gap-2 border-t border-mist bg-shell/95 p-3 backdrop-blur pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href="tel:+14105550148"
        aria-label="Call KM Curtis Realty"
        className="flex items-center justify-center rounded-full border border-ink/20 px-4 text-ink"
      >
        <Phone className="h-5 w-5" />
      </a>
      <Button href="/contact" variant="clay" className="flex-1">
        Let&rsquo;s Connect
      </Button>
    </div>
  );
}
