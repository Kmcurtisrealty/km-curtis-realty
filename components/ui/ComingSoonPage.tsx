import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ComingSoonPageProps {
  eyebrow: string;
  headline: string;
  blurb: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Minimal stub for the nav items not fully built in Phase 1
 * (/buy, /sell, /american-dream-tv, /about, /resources) so the nav is
 * clickable with nothing broken. (/relocate and /lifestyle were removed
 * entirely rather than staying as stubs — see the Phase 2 redesign notes.)
 */
export function ComingSoonPage({
  eyebrow,
  headline,
  blurb,
  ctaLabel = "Search Homes",
  ctaHref = "/properties",
}: ComingSoonPageProps) {
  return (
    <section className="flex min-h-[70vh] items-center bg-shell py-24">
      <Container className="max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">{eyebrow}</p>
        <h1 className="text-display-lg font-display text-ink">{headline}</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70">{blurb}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Let&rsquo;s Connect
          </Button>
        </div>
      </Container>
    </section>
  );
}
