import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-shell py-24">
      <Container className="max-w-xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">404</p>
        <h1 className="text-display-lg font-display text-ink">We Couldn&rsquo;t Find That Page</h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          The page you&rsquo;re looking for may have moved. Try searching our current listings, or
          get in touch and we&rsquo;ll point you in the right direction.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/properties" variant="primary" size="lg">
            Search Homes
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
