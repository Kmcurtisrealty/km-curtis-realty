import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Krissy Curtis of KM Curtis Realty, serving Annapolis and the Chesapeake Bay region.",
};

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-card shadow-soft md:order-1">
          <Image
            src="/images/brand/headshot-placeholder.svg"
            alt="Placeholder portrait of Krissy Curtis, to be replaced with a real photo"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">About</p>
          <h1 className="text-display-lg font-display text-ink">Krissy Curtis</h1>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            A full biography, credentials, and press page for Krissy Curtis and KM Curtis Realty
            is on its way. In short: Krissy is a local Annapolis-area agent and host of American
            Dream TV, focused on genuinely helping buyers and sellers make the right real estate
            decision — not just close a transaction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Let&rsquo;s Connect
            </Button>
            <Button href="/properties" variant="secondary" size="lg">
              Search Homes
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
