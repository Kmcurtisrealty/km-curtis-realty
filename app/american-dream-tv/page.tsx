import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="flex min-h-[420px] items-center border-b border-mist bg-shell py-20 text-ink">
        <Container className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <Image
            src="/images/brand/american-dream-logo.png"
            alt="The American Dream logo"
            width={480}
            height={121}
            priority
            className="h-auto w-80 sm:w-[28rem]"
          />
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">American Dream TV</p>
            <h1 className="text-display-lg font-display text-ink">Lifestyle, Culture &amp; Real Estate</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/75">
              Krissy Curtis hosts American Dream TV, a nationally broadcast lifestyle and real estate
              series, bringing that same platform home to cover Annapolis and Chesapeake Bay
              communities, businesses, and the stories behind the homes she represents.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-shell py-20">
        <Container className="max-w-4xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">Latest Episode</p>
          <h2 className="mb-6 font-display text-2xl text-ink">Annapolis Sails</h2>
          <YouTubeEmbed videoId="cSpMDEqz_H4" title="American Dream TV — Annapolis Sails" />
          <p className="mt-4 text-sm text-ink/60">Featuring SailTime Annapolis and Framed to Finish.</p>
        </Container>
      </section>

      <section className="bg-bg-alt py-20">
        <Container className="max-w-4xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">Intro</p>
          <YouTubeEmbed videoId="B1ExEUSZ-QY" title="American Dream TV — Krissy Curtis Intro Promo" />
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">More Episodes</p>
          <h2 className="text-display-sm font-display text-ink">More Episodes Are on the Way</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Full episodes, local business features, and community stories are on their way. Check
            back soon as more episodes are filmed.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://www.youtube.com/@KrissyCurtis" variant="primary" size="lg">
              Watch All Videos on YouTube
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
