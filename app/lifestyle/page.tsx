import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Lifestyle",
  description: "Chesapeake Bay lifestyle content covering local businesses, dining, and things to do around Annapolis.",
};

export default function LifestylePage() {
  return (
    <ComingSoonPage
      eyebrow="Chesapeake Bay Living"
      headline="Our Lifestyle Hub Is Coming Soon"
      blurb="From local businesses to weekend guides, we're building a home for everything that makes Annapolis and the Bay region worth living in. In the meantime, catch a preview on American Dream TV."
      ctaLabel="American Dream TV"
      ctaHref="/american-dream-tv"
    />
  );
}
