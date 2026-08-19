import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Relocate",
  description: "Relocation resources for buyers moving to Annapolis, Maryland, and the Chesapeake Bay region.",
};

export default function RelocatePage() {
  return (
    <ComingSoonPage
      eyebrow="Moving to Maryland"
      headline="Full Relocation Guides Are Coming Soon"
      blurb="Detailed pages on commuting to D.C. and Baltimore, living near Fort Meade and BWI, and choosing the right neighborhood are in progress. For personalized relocation guidance right now, reach out directly."
      ctaLabel="Explore Communities"
      ctaHref="/communities/annapolis"
    />
  );
}
