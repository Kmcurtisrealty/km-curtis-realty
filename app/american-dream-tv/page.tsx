import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export const metadata: Metadata = {
  title: "American Dream TV",
  description: "Episodes and stories from American Dream TV, hosted by Krissy Curtis, covering Maryland lifestyle and real estate.",
};

export default function AmericanDreamTVPage() {
  return (
    <>
      <section className="bg-bay-teal py-24 text-shell">
        <Container className="max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-shell/70">American Dream TV</p>
          <h1 className="text-display-lg font-display">
            Maryland Is More Than a Place to Live. <span className="block">It&rsquo;s a Lifestyle.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/85">
            Krissy Curtis hosts American Dream TV, a nationally broadcast lifestyle and real estate
            series, bringing that same platform home to cover Annapolis and Chesapeake Bay
            communities, businesses, and the stories behind the homes she represents.
          </p>
        </Container>
      </section>

      <section className="bg-shell py-20">
        <Container className="max-w-4xl">
          <YouTubeEmbed videoId="B1ExEUSZ-QY" title="American Dream TV — Krissy Curtis Intro Promo" />
        </Container>
      </section>

      <section className="bg-bg-alt py-20">
        <Container className="max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">More Episodes</p>
          <h2 className="text-display-sm font-display text-ink">The Full Episode Hub Is Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Full episodes, local business features, and community stories are on their way. In the
            meantime, reach out to talk through buying, selling, or relocating to the Annapolis and
            Chesapeake Bay region.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/properties" variant="primary" size="lg">
              Search Homes
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
