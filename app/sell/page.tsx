import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Sell",
  description: "Marketing strategy and guidance for sellers listing a home in Annapolis and the Chesapeake Bay region.",
};

export default function SellPage() {
  return (
    <ComingSoonPage
      eyebrow="For Sellers"
      headline="Our Full Seller Strategy Guide Is Coming Soon"
      blurb="We're putting together a complete walkthrough of pricing, staging, and marketing strategy, including how American Dream TV can complement your listing. Ready to talk sooner? Let's connect."
      ctaLabel="Search Homes"
      ctaHref="/properties"
    />
  );
}
