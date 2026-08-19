import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Buy",
  description: "Guidance for buyers exploring homes in Annapolis and the Chesapeake Bay region.",
};

export default function BuyPage() {
  return (
    <ComingSoonPage
      eyebrow="For Buyers"
      headline="A Buyer's Guide to Annapolis & the Bay Is On the Way"
      blurb="We're building out a full buyer resource covering the search, financing, and closing process. In the meantime, start browsing available homes or reach out directly and we'll walk you through it personally."
      ctaLabel="Search Homes"
      ctaHref="/properties"
    />
  );
}
