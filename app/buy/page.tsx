import type { Metadata } from "next";
import { Search, ClipboardCheck, Handshake, KeyRound, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CommunityCard } from "@/components/communities/CommunityCard";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { getAllCommunities } from "@/lib/data/communities";

export const metadata: Metadata = {
  title: "Buy",
  description:
    "Buyer guidance from Krissy Curtis, a South County waterfront specialist with 150+ successful transactions across Annapolis and the Chesapeake Bay region.",
};

const expertise = [
  {
    icon: MapPinned,
    title: "Hyperlocal Knowledge",
    body: "A lifelong Anne Arundel County resident and South County waterfront specialist, Krissy knows these communities block by block — not just from the listing sheet.",
  },
  {
    icon: ShieldCheck,
    title: "150+ Transactions",
    body: "A proven track record of successful closings gives buyers a steady, experienced hand through every stage of the process.",
  },
  {
    icon: Handshake,
    title: "Skilled Negotiation",
    body: "From first offer to final walkthrough, strategic negotiation and clear communication protect your interests at every turn.",
  },
  {
    icon: Sparkles,
    title: "Waterfront Specialist",
    body: "Deep expertise in waterfront and water-access properties — dock rights, flood zones, and the details that make or break a coastal purchase.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    body: "We start with what matters to you — commute, schools, water access, lifestyle — and narrow the region's communities down to the right fit.",
  },
  {
    icon: ClipboardCheck,
    title: "Tour & Evaluate",
    body: "Private showings with a straightforward, no-pressure read on every home's real condition, value, and long-term potential.",
  },
  {
    icon: Handshake,
    title: "Offer & Negotiate",
    body: "A strategic offer built on current market data, with skilled negotiation to protect your price and terms.",
  },
  {
    icon: KeyRound,
    title: "Close With Confidence",
    body: "Coordinated inspections, financing, and paperwork, with clear communication from contract to closing day.",
  },
];

export default function BuyPage() {
  const communities = getAllCommunities();

  return (
    <>
      <section className="bg-bay-teal py-14 md:py-16 text-shell">
        <Container className="max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-shell/70">For Buyers</p>
          <h1 className="text-display-lg font-display">Your Guide to Buying in Annapolis &amp; the Bay</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/85">
            With more than 150 successful transactions and a lifetime of local roots, Krissy Curtis
            brings expert guidance, skilled negotiation, and clear communication to every home
            search — making the process feel seamless and stress-free from the first showing to
            closing day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/properties" variant="clay" size="lg">
              Search Homes
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Why Buy With Krissy" title="Expertise You Can Rely On" align="center" className="mx-auto" />
          <StaggerReveal className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <div key={item.title}>
                <item.icon className="h-7 w-7 text-bay-teal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="bg-bg-alt py-24">
        <Container>
          <SectionHeading eyebrow="The Process" title="How We'll Find Your Home" align="center" className="mx-auto" />
          <StaggerReveal className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bay-teal text-sm font-medium text-shell">
                    {i + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-bay-teal" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-marsh">Explore Where to Buy</p>
              <h2 className="text-display-md font-display text-ink">Communities Across Annapolis &amp; the Bay</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                From in-town Annapolis to quiet peninsula villages, every community has its own
                character, commute, and water access. Explore each one to find where you belong.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((community) => (
              <CommunityCard key={community.slug} community={community} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bay-teal py-20 text-shell">
        <Container className="max-w-2xl text-center">
          <h2 className="text-display-sm font-display">Ready to Start Your Search?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-shell/85">
            Let&rsquo;s talk through what you&rsquo;re looking for and find the right home in the
            right community.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/properties" variant="clay" size="lg">
              Search Homes
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
