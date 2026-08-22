import type { Metadata } from "next";
import { Megaphone, Handshake, Tv, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { getRecentSales } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Sell",
  description:
    "Seller strategy from Krissy Curtis — an expert in marketing, negotiating, and getting results, with selected homes featured on the nationally broadcast American Dream TV.",
};

const points = [
  {
    icon: Megaphone,
    title: "Expert Marketing",
    body: "A strategic, professional marketing plan built around your home — photography, positioning, and reach that gets it in front of the right buyers.",
  },
  {
    icon: Handshake,
    title: "Skilled Negotiation",
    body: "Every offer is negotiated with your bottom line in mind, protecting your price and terms from first offer to closing table.",
  },
  {
    icon: Tv,
    title: "National TV Exposure",
    body: "Select homes are featured on American Dream TV, a nationally broadcast series — a level of home exposure most sellers never get.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    body: "With more than 150 successful transactions, sellers get a steady, experienced hand from listing day to closing day.",
  },
];

export default function SellPage() {
  const recentSales = getRecentSales(6);

  return (
    <>
      <section className="bg-bay-teal py-14 text-shell md:py-16">
        <Container className="max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-shell/70">For Sellers</p>
          <h1 className="text-display-lg font-display">Sell With an Expert Who Gets Results</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/85">
            Krissy is an expert in marketing, pricing, and negotiating your home with ease —
            bringing steady, experienced guidance to every step of your sale. Selected homes are
            even featured on American Dream TV, a nationally broadcast series, giving your home
            exposure most sellers never get.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="clay" size="lg">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Why Sell With Krissy" title="Marketing, Negotiation, and National Reach" align="center" className="mx-auto" />
          <StaggerReveal className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <div key={point.title}>
                <point.icon className="h-7 w-7 text-bay-teal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{point.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="bg-bg-alt py-24">
        <Container>
          <SectionHeading eyebrow="Track Record" title="Recent Sales" align="center" className="mx-auto" />
          <div className="mt-14">
            <PropertyGrid properties={recentSales} />
          </div>
        </Container>
      </section>

      <section className="bg-bay-teal py-20 text-shell">
        <Container className="max-w-2xl text-center">
          <h2 className="text-display-sm font-display">Ready to List Your Home?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-shell/85">
            Let&rsquo;s talk through your home&rsquo;s value, timeline, and the marketing strategy
            that will get it sold.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="clay" size="lg">
              Let&rsquo;s Connect
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
