import type { Metadata } from "next";
import { getActiveProperties, getFeaturedProperties, getRecentSales } from "@/lib/data/properties";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyExplorer } from "@/components/properties/PropertyExplorer";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Explore homes, waterfront properties, and distinctive communities throughout Annapolis and the Chesapeake Bay region.",
};

export default function PropertiesPage() {
  const featured = getFeaturedProperties(6);
  const active = getActiveProperties();
  const recentSales = getRecentSales();

  return (
    <div>
      <section className="bg-bay-teal py-24 text-shell">
        <Container className="max-w-3xl text-center">
          <h1 className="text-display-lg font-display">Find Your Place in Maryland</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/85">
            Explore homes, waterfront properties, and distinctive communities throughout Annapolis
            and the Chesapeake Bay region.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#search" variant="clay" size="lg">
              Search Homes
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-shell/40 text-shell hover:bg-shell/10">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Current Listings" title="Featured Listings" />
          <div className="mt-12">
            <PropertyGrid properties={featured} priorityCount={3} />
          </div>
        </Container>
      </section>

      <section id="search" className="scroll-mt-24 border-t border-mist bg-mist/15 py-24">
        <Container>
          <SectionHeading
            eyebrow="Property Search"
            title="Search All Properties"
            supporting="Filter by location, property type, price, beds, baths, square footage, and status to find the right fit."
          />
          <div className="mt-12">
            <PropertyExplorer properties={active} />
          </div>
        </Container>
      </section>

      <section className="border-t border-mist py-24">
        <Container>
          <SectionHeading eyebrow="Track Record" title="Past Transactions" supporting="A selection of recently closed sales representing our work in the market." />
          <div className="mt-12">
            <PropertyGrid properties={recentSales} />
          </div>
        </Container>
      </section>
    </div>
  );
}
