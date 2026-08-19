import type { Community } from "@/lib/types/community";

/**
 * Community data. Phase 1 ships two fully-built community pages (Annapolis,
 * Severna Park) against the shared CommunityOverview template. Adding the
 * remaining Anne Arundel County communities named in the master spec later
 * is pure data entry — append an entry here, no new component code.
 *
 * Properties can reference a `communitySlug` (e.g. "edgewater",
 * "cape-st-claire") that has no entry here yet; that's intentional and
 * proves the property data layer isn't hard-coded to only built community
 * pages.
 */

const communities: Community[] = [
  {
    slug: "annapolis",
    name: "Annapolis",
    heroImage: {
      src: "/images/communities/annapolis-hero.svg",
      alt: "Sailboats on the water near downtown Annapolis at dusk",
    },
    tagline: "Maryland's sailing capital, where colonial streets meet the Chesapeake Bay.",
    description:
      "Annapolis pairs a walkable, historic downtown — brick sidewalks, City Dock, the Naval Academy — with a genuine working waterfront. Neighborhoods range from in-town rowhomes a few blocks from the harbor to point-lot estates on the Severn and South Rivers, giving buyers an unusually wide range of price points and lifestyles inside one city.",
    lifestyle:
      "Life here revolves around the water: sailing club races on the Severn, farmers markets at City Dock, and a dining scene that punches well above the city's size. It's a city where you can walk to dinner and still keep a boat on a slip five minutes from home.",
    waterfront:
      "Annapolis has some of the region's most sought-after waterfront, from Eastport's deep-water docks to quieter coves along the South River. Availability and permitted dock rights vary block by block, which is where local guidance matters most.",
    schools: "Served primarily by Anne Arundel County Public Schools, including Annapolis High, Annapolis Middle, and a mix of highly-rated elementary schools by neighborhood.",
    commute:
      "About 30 minutes to Washington, D.C. via US-50/US-301, roughly 25 minutes to BWI Airport, and a well-used commuter bus corridor for those working in D.C. or Baltimore.",
    neighborhoods: ["Eastport", "Downtown Annapolis", "Murray Hill", "Bay Ridge", "West Annapolis", "Wardour"],
    localAttractions: [
      "City Dock & the Annapolis waterfront",
      "United States Naval Academy",
      "Historic downtown shops & restaurants",
      "Quiet Waters Park",
      "Annapolis Maritime Museum",
    ],
    relocationInfo:
      "Relocating buyers are typically drawn to Annapolis for a combination of D.C.-commute distance, walkability, and water access that's hard to find elsewhere in the region. We help incoming buyers understand which neighborhoods best match their commute, budget, and boating or waterfront priorities before they ever tour a home.",
    seo: {
      title: "Annapolis MD Real Estate | Homes & Waterfront Properties",
      description:
        "Explore homes for sale in Annapolis, MD, including waterfront properties, downtown condos, and family neighborhoods, with local guidance from KM Curtis Realty.",
    },
  },
  {
    slug: "severna-park",
    name: "Severna Park",
    heroImage: {
      src: "/images/communities/severna-park-hero.svg",
      alt: "Marsh grass and tree-lined shoreline in Severna Park",
    },
    tagline: "Top-rated schools, protected coves, and an easy commute up Ritchie Highway.",
    description:
      "Severna Park sits on a peninsula between the Severn and Magothy Rivers, known for its consistently strong schools, mature tree canopy, and a suburban feel that still keeps water access close at hand. Housing stock ranges from mid-century ranchers to newer colonials, with several neighborhoods offering community-maintained beaches and marinas.",
    lifestyle:
      "Weekends lean toward the community pool, the Baltimore & Annapolis Trail for biking and running, and neighborhood marinas for boaters. It's a family-oriented pace with quick access to both Annapolis and Baltimore when you want it.",
    waterfront:
      "Many Severna Park neighborhoods (Round Bay, Chartridge, Arden on the Severn) offer deeded community water access — beaches, marinas, and boat ramps — even for homes that aren't directly on the water, which broadens the water-lifestyle budget considerably.",
    schools:
      "Severna Park High School and its feeder schools are consistently among the top-performing in Anne Arundel County, a major draw for relocating families.",
    commute:
      "About 20 minutes to Annapolis, 30–40 minutes to Baltimore via I-97, and a manageable ~45-minute drive to Washington, D.C. outside peak traffic.",
    neighborhoods: ["Round Bay", "Chartridge", "Arden on the Severn", "Kinder Farm area", "Woodland Beach", "Beverly Beach"],
    localAttractions: [
      "Kinder Farm Park",
      "B&A Trail",
      "Jones Station Skate Park",
      "Downtown Severna Park shops",
      "Community beaches & marinas",
    ],
    relocationInfo:
      "Families relocating for school quality most often land in Severna Park. We walk incoming buyers through school boundary lines block by block, since they can shift a home's price and fit dramatically even within the same zip code.",
    seo: {
      title: "Severna Park MD Real Estate | Homes for Sale",
      description:
        "Find homes for sale in Severna Park, MD — top-rated schools, community water access, and an easy commute to Annapolis and Baltimore.",
    },
  },
];

// ---------------------------------------------------------------------------
// Accessor functions — the ONLY supported way to read community data.
// ---------------------------------------------------------------------------

export function getAllCommunities(): Community[] {
  return communities;
}

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map((c) => c.slug);
}
