import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="bg-clay py-24 text-shell">
      <Container className="text-center">
        <h2 className="text-display-lg font-display">Let&rsquo;s Find Your Place in Maryland.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-shell/90">
          Whether you&rsquo;re buying, selling, or just starting to explore the Chesapeake Bay
          region, the conversation starts here.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/properties" variant="primary" size="lg" className="bg-ink hover:bg-ink/90">
            Search Homes
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="border-shell/50 text-shell hover:bg-shell/10">
            Let&rsquo;s Connect
          </Button>
        </div>
      </Container>
    </section>
  );
}
