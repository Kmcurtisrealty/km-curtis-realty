import type { Metadata } from "next";
import Image from "next/image";
import { getRecentSales, getCurrentListings } from "@/lib/data/properties";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatingPropertySales } from "@/components/properties/RotatingPropertySales";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "A record of recently closed sales representing Krissy Curtis's work throughout Annapolis and the Chesapeake Bay region.",
};

export default function PropertiesPage() {
  const recentSales = getRecentSales();
  const currentListings = getCurrentListings();

  return (
    <div>
      <section className="relative flex h-[60vh] min-h-[420px] items-center overflow-hidden bg-ink">
        <Image
          src="/images/brand/properties-hero.jpg"
          alt="Marsh grass along the Chesapeake Bay with waterfront homes across the water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_80%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <Container className="relative max-w-3xl text-center text-shell">
          <h1 className="text-display-lg font-display text-shell">Find Your Place in Maryland</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/85">
            Explore homes, waterfront properties, and distinctive communities throughout Annapolis
            and the Chesapeake Bay region.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="clay" size="lg">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>

      {currentListings.length > 0 ? (
        <section className="bg-bg-alt py-24">
          <Container>
            <SectionHeading
              eyebrow="Current Listings"
              title={<span className="text-clay">Pending &amp; Coming Soon</span>}
              supporting="Homes currently under contract or coming to market soon."
              align="center"
              className="mx-auto max-w-4xl md:whitespace-nowrap"
            />
            <div className="mt-12">
              <RotatingPropertySales properties={currentListings} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Track Record"
            title={<span className="text-clay">Past Transactions</span>}
            supporting="A selection of recently closed sales representing our work in the market."
            align="center"
            className="mx-auto max-w-4xl md:whitespace-nowrap"
          />
          <div className="mt-12">
            <RotatingPropertySales properties={recentSales} />
          </div>
        </Container>
      </section>
    </div>
  );
}
