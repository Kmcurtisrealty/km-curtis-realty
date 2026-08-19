import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function IntroSection() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] overflow-hidden md:order-1">
          <Image
            src="/images/brand/headshot-placeholder.svg"
            alt="Placeholder portrait of Krissy Curtis, to be replaced with a real photo"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-marsh">Meet Your Agent</p>
          <h2 className="text-display-md font-display text-ink">
            KM Curtis Realty is Krissy Curtis &mdash; local, hands-on, and genuinely invested in
            where you land.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            Krissy pairs deep Annapolis and Chesapeake Bay market knowledge with a straightforward,
            client-first approach. Whether you&rsquo;re buying your first home, selling a
            waterfront property, or relocating to Maryland from out of state, the goal is the
            same: help you understand where to live, what life is like there, and how to make the
            right real estate decision.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="lg">
              About Krissy
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
