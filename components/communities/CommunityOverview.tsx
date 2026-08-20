import Image from "next/image";
import type { Community } from "@/lib/types/community";
import type { Property } from "@/lib/types/property";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PropertyExplorer } from "@/components/properties/PropertyExplorer";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

interface CommunityOverviewProps {
  community: Community;
  properties: Property[];
}

/**
 * Single reusable template every community page renders through (spec §17
 * /§19): adding a new community later is pure data entry in
 * lib/data/communities.ts against this component — no new page code.
 */
export function CommunityOverview({ community, properties }: CommunityOverviewProps) {
  const forSale = properties.filter((p) => p.status !== "sold");
  const recentSales = properties.filter((p) => p.status === "sold");

  return (
    <div>
      <section className="relative flex h-[60vh] min-h-[420px] items-end">
        <Image
          src={community.heroImage.src}
          alt={community.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <Container className="relative pb-14 text-shell">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-shell/70">Community Guide</p>
          <h1 className="mt-3 text-display-lg font-display">{community.name}, Maryland</h1>
          <p className="mt-4 max-w-xl text-base text-shell/85">{community.tagline}</p>
        </Container>
      </section>

      <Container className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl text-ink">About {community.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">{community.description}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Lifestyle</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">{community.lifestyle}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Waterfront</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">{community.waterfront}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Relocating to {community.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">{community.relocationInfo}</p>
          </div>
        </div>

        <aside className="space-y-10">
          <div className="rounded-card border border-mist bg-shell p-6 shadow-soft">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-marsh">Schools</h3>
            <p className="text-sm leading-relaxed text-ink/75">{community.schools}</p>
          </div>
          <div className="rounded-card border border-mist bg-shell p-6 shadow-soft">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-marsh">Commute</h3>
            <p className="text-sm leading-relaxed text-ink/75">{community.commute}</p>
          </div>
          <div className="rounded-card border border-mist bg-shell p-6 shadow-soft">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-marsh">Neighborhoods</h3>
            <ul className="space-y-1.5 text-sm text-ink/75">
              {community.neighborhoods.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-mist bg-shell p-6 shadow-soft">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-marsh">Local Attractions</h3>
            <ul className="space-y-1.5 text-sm text-ink/75">
              {community.localAttractions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>

      <section className="border-t border-mist bg-shell py-20">
        <Container>
          <SectionHeading
            eyebrow="Property Search"
            title={`Homes for Sale in ${community.name}`}
            supporting={`Every current listing tied to ${community.name} in our system, searchable and filterable right here.`}
          />
          <div className="mt-10">
            <PropertyExplorer properties={forSale} />
          </div>
        </Container>
      </section>

      {recentSales.length > 0 ? (
        <section className="border-t border-mist bg-mist/20 py-20">
          <Container>
            <SectionHeading eyebrow="Track Record" title={`Recent Sales in ${community.name}`} />
            <div className="mt-10">
              <PropertyGrid properties={recentSales} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-bay-teal py-20 text-shell">
        <Container className="text-center">
          <h2 className="text-display-sm font-display">Ready to explore {community.name}?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-shell/85">
            Let&rsquo;s talk through what life in {community.name} looks like and find the right home for your
            next chapter.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="clay" size="lg">
              Let&rsquo;s Connect
            </Button>
            <Button href="/properties" variant="secondary" size="lg" className="border-shell/40 text-shell hover:bg-shell/10">
              Search All Properties
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
