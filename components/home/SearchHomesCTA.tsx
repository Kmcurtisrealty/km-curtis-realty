import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SearchHomesCTA() {
  return (
    <section className="bg-marsh py-20 text-shell">
      <Container className="text-center">
        <h2 className="text-display-md font-display">Find Your Next Home</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-shell/90">
          Search homes throughout Annapolis and the surrounding Chesapeake Bay communities.
        </p>
        <div className="mt-8">
          <Button href="/properties" variant="clay" size="lg">
            Search Homes
          </Button>
        </div>
      </Container>
    </section>
  );
}
