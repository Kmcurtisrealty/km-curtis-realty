import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SellYourHomeSection() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-marsh">For Sellers</p>
          <h2 className="text-display-md font-display text-ink">Sell Your Home With a Strategy, Not a Sign in the Yard</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            Every listing gets a marketing plan built around professional photography, targeted
            digital exposure, and — when it&rsquo;s the right fit — the storytelling reach of
            American Dream TV. The goal is simple: the right buyer, at the right price, without
            unnecessary time on market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/sell" variant="primary" size="lg">
              Learn About Selling
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Request a Home Value Estimate
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/properties/backyard-pool-terrace.svg"
            alt="Professionally staged home exterior and terrace"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
