import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-[88vh] min-h-[560px] items-end overflow-hidden bg-ink">
      <Image
        src="/images/properties/waterfront-manor-exterior.svg"
        alt="Waterfront home along the Chesapeake Bay at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <Container className="relative pb-20 text-shell">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-shell/70">
          KM Curtis Realty &middot; Annapolis &amp; the Chesapeake Bay
        </p>
        <h1 className="max-w-3xl text-display-xl font-display leading-[1.05]">
          Real Estate. Maryland Living. Your Next Chapter.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-shell/85 md:text-lg">
          Explore homes, waterfront properties, and distinctive communities throughout Annapolis
          and the Chesapeake Bay region.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/properties" variant="primary" size="lg">
            Search Homes
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="border-shell/40 text-shell hover:bg-shell/10">
            Let&rsquo;s Connect
          </Button>
        </div>
      </Container>
    </section>
  );
}
