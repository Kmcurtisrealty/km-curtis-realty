import type { Metadata } from "next";
import { getRecentSales } from "@/lib/data/properties";
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
            <Button href="/contact" variant="clay" size="lg">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Track Record" title="Past Transactions" supporting="A selection of recently closed sales representing our work in the market." />
          <div className="mt-12">
            <RotatingPropertySales properties={recentSales} />
          </div>
        </Container>
      </section>
    </div>
  );
}
