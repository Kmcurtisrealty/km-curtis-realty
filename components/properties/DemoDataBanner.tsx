import { Info } from "lucide-react";

interface DemoDataBannerProps {
  disclaimer?: string;
}

/**
 * Full-width disclosure strip shown under the gallery on any property
 * detail page where `isDemo` is true (spec §32: fictional demo properties
 * must never read as real listings).
 */
export function DemoDataBanner({ disclaimer }: DemoDataBannerProps) {
  return (
    <div className="w-full border-y border-clay/30 bg-clay/10">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-6 py-4 md:px-10">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-ink/70">
          <span className="font-semibold uppercase tracking-wide text-clay">Demo Listing — Not a Real Property. </span>
          {disclaimer ??
            "This page uses fictional demo content created to preview the KM Curtis Realty website and does not represent an actual property currently or previously for sale."}
        </p>
      </div>
    </div>
  );
}
