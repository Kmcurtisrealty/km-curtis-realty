import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "American Dream TV",
  description: "Episodes and stories from American Dream TV, hosted by Krissy Curtis, covering Maryland lifestyle and real estate.",
};

export default function AmericanDreamTVPage() {
  return (
    <ComingSoonPage
      eyebrow="American Dream TV"
      headline="Our Full Episode Hub Is Coming Soon"
      blurb="Krissy hosts American Dream TV, covering Annapolis and Chesapeake Bay communities, local businesses, and real estate stories. The full video library is on its way — check back soon."
      ctaLabel="Search Homes"
      ctaHref="/properties"
    />
  );
}
