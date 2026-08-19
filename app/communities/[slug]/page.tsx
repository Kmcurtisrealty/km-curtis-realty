import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCommunitySlugs, getCommunityBySlug } from "@/lib/data/communities";
import { getPropertiesByCommunity } from "@/lib/data/properties";
import { CommunityOverview } from "@/components/communities/CommunityOverview";

interface CommunityPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCommunitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};

  return {
    title: community.seo?.title ?? `${community.name} MD Real Estate`,
    description: community.seo?.description ?? community.description,
  };
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  // Scoped strictly to this community — properties assigned to other
  // communities (built or not-yet-built) never leak in here.
  const properties = getPropertiesByCommunity(community.slug);

  return <CommunityOverview community={community} properties={properties} />;
}
