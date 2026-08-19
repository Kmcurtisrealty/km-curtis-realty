import { getAllCommunities } from "@/lib/data/communities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CommunityCard } from "@/components/communities/CommunityCard";

export function ExploreCommunitiesSection() {
  const communities = getAllCommunities();

  return (
    <section className="bg-ink py-24 text-shell">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Where to Live"
            title={<span className="text-shell">Explore Communities</span>}
            supporting={
              <span className="text-shell/70">
                From in-town Annapolis to top-rated Severna Park schools, every community has a
                different rhythm. Find the one that fits yours.
              </span>
            }
          />
          <Button href="/communities/annapolis" variant="secondary" className="shrink-0 border-shell/40 text-shell hover:bg-shell/10">
            View All Communities
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {communities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </Container>
    </section>
  );
}
