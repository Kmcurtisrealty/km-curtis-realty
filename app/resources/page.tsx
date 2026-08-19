import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Resources",
  description: "Buyer, seller, and relocation guides for the Annapolis and Chesapeake Bay real estate market.",
};

export default function ResourcesPage() {
  return (
    <ComingSoonPage
      eyebrow="Resources"
      headline="Our Full Resource Library Is Coming Soon"
      blurb="Buyer guides, seller guides, and relocation resources are all in progress. Have a specific question in the meantime? Just reach out."
      ctaLabel="Search Homes"
      ctaHref="/properties"
    />
  );
}
