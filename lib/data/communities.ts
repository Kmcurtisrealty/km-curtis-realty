import type { Community } from "@/lib/types/community";

/**
 * Community data, built out against the shared CommunityOverview template:
 * Annapolis, Severna Park, Broadneck, Arnold, Edgewater, Galesville,
 * Shady Side, Crofton, Davidsonville, Pasadena, Millersville.
 *
 * (Eastport, West Annapolis, Hillsmere Shores, Cape St. Claire, and Mayo
 * were removed as standalone pages at the user's request; Eastport and
 * West Annapolis remain as named neighborhoods within Annapolis's own
 * page copy, and Cape St. Claire remains a named neighborhood within
 * Broadneck's.)
 *
 * Demo properties in lib/data/properties.ts reference several of these
 * slugs (e.g. "edgewater", "broadneck") via `communitySlug` — those
 * cross-references resolve to real community pages.
 */

const communities: Community[] = [
  {
    slug: "annapolis",
    name: "Annapolis",
    heroImage: {
      src: "/images/communities/annapolis-hero.jpg",
      alt: "The Maryland State House dome viewed from a downtown Annapolis street",
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
        "Explore homes for sale in Annapolis, MD, including waterfront properties, downtown condos, and family neighborhoods, with local guidance from Krissy Curtis Realty.",
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
  {
    slug: "broadneck",
    name: "Broadneck",
    heroImage: {
      src: "/images/communities/broadneck-hero.svg",
      alt: "Wooded peninsula shoreline along the Broadneck peninsula between the Severn and Magothy Rivers",
    },
    tagline: "The wooded peninsula between the Severn and Magothy Rivers, anchored by the Broadneck school cluster.",
    description:
      "\"Broadneck\" refers to the broader peninsula between the Severn River and the Magothy River, north of Annapolis and south of Severna Park — an umbrella area that includes Cape St. Claire, Arnold, and a number of smaller waterfront and inland neighborhoods, unified loosely by the Broadneck High School attendance area rather than a single subdivision identity.",
    lifestyle:
      "Life across Broadneck is shaped by its geography: wooded lots, winding roads, and a high concentration of community and private waterfront access. It draws buyers who want a quieter, more suburban pace than downtown Annapolis while staying close to the water and the Baltimore-Annapolis corridor.",
    waterfront:
      "With two rivers as boundaries and the Chesapeake Bay at its tip, Broadneck has an unusually high proportion of waterfront and water-access housing for a mainland peninsula, spread across many distinct communities rather than one HOA.",
    schools: "The Broadneck cluster of Anne Arundel County Public Schools — feeding into Broadneck High School — is a well-regarded draw for the area, though exact elementary and middle school assignments vary significantly by specific neighborhood.",
    commute:
      "About 15–25 minutes to Annapolis depending on location within the peninsula, 30–40 minutes to Baltimore via I-97 or MD-2, and roughly 45 minutes to Washington, D.C.",
    neighborhoods: ["Cape St. Claire", "Arnold", "Whitehall Creek area", "Winchester on the Severn"],
    localAttractions: [
      "Sandy Point State Park",
      "B&A Trail",
      "Broadneck Park",
      "Numerous community marinas & beaches",
    ],
    relocationInfo:
      "Because \"Broadneck\" spans many distinct neighborhoods rather than one community, relocating buyers benefit most from a guided comparison of the specific subdivisions within it. We help buyers translate a general preference for \"the Broadneck area\" into the right street-level match for budget and water-access goals.",
    seo: {
      title: "Broadneck Peninsula MD Real Estate | Homes for Sale",
      description:
        "Explore homes for sale across the Broadneck Peninsula between the Severn and Magothy Rivers, home to Cape St. Claire, Arnold, and the Broadneck school cluster.",
    },
  },
  {
    slug: "arnold",
    name: "Arnold",
    heroImage: {
      src: "/images/communities/arnold-hero.svg",
      alt: "Waterfront marina and shoreline along the Magothy River near Arnold",
    },
    tagline: "A Broadneck Peninsula community on the Severn and Magothy, home to Anne Arundel Community College.",
    description:
      "Arnold sits on the Broadneck Peninsula between the Severn River and the Magothy River, a short drive north of Annapolis. It's a mix of established waterfront enclaves, mid-century subdivisions, and newer construction, with Anne Arundel Community College and a stretch of commercial development along Ritchie Highway giving it more everyday amenities than some of its neighboring communities.",
    lifestyle:
      "Arnold balances easy errands — grocery, retail, and dining along Ritchie Highway and Governor Ritchie Highway — with quieter residential streets and water access nearby. It's a practical, well-located choice for buyers who want proximity to both Annapolis and the AACC/community-college corridor.",
    waterfront:
      "Several Arnold neighborhoods offer direct or deeded waterfront access on the Severn and Magothy Rivers, including private marinas and community piers; availability and dock rights vary considerably by specific subdivision.",
    schools: "Served by Anne Arundel County Public Schools within the Broadneck cluster; specific elementary and middle school assignments should be confirmed by address.",
    commute:
      "About 10–15 minutes to Annapolis, 30 minutes to Baltimore via I-97, and roughly 40–45 minutes to Washington, D.C.",
    neighborhoods: ["College Parkway corridor", "Severn River waterfront", "Whitehall Creek", "Magothy waterfront"],
    localAttractions: [
      "Anne Arundel Community College",
      "Sandy Point State Park (nearby)",
      "Ritchie Highway shopping & dining",
      "Severn & Magothy River marinas",
    ],
    relocationInfo:
      "Arnold is a frequent landing spot for buyers who want Broadneck-area water access with more day-to-day convenience than some quieter peninsula neighborhoods offer. We help relocating buyers weigh specific subdivisions against commute patterns to Annapolis, Baltimore, and BWI.",
    seo: {
      title: "Arnold MD Real Estate | Homes for Sale",
      description:
        "Find homes for sale in Arnold, MD, on the Broadneck Peninsula between the Severn and Magothy Rivers — waterfront and inland options close to Annapolis.",
    },
  },
  {
    slug: "edgewater",
    name: "Edgewater",
    heroImage: {
      src: "/images/communities/edgewater-hero.svg",
      alt: "A single sailboat at dusk near a private dock in Edgewater",
    },
    tagline: "South River waterfront living just across the bridge from downtown Annapolis.",
    description:
      "Edgewater sits directly across the South River Bridge (Route 2) from Annapolis, offering many of the same waterfront lifestyle benefits with generally more land and lower density. Housing spans from established waterfront enclaves along the South and Rhode Rivers to newer subdivisions set back from the water.",
    lifestyle:
      "Edgewater's identity is closely tied to the South River — boating, kayaking, and waterfront dining are part of everyday life — while still being close enough to Annapolis for downtown dinners or Naval Academy events without living inside the city's density.",
    waterfront:
      "The South and Rhode Rivers give Edgewater extensive waterfront and near-waterfront inventory, with numerous private docks, community piers, and marinas; the London Town waterfront area along the South River is a notable historic anchor point.",
    schools: "Served by Anne Arundel County Public Schools; specific elementary, middle, and high school assignments vary by neighborhood within Edgewater.",
    commute:
      "About 10 minutes to downtown Annapolis via the South River Bridge, and roughly 35–40 minutes to Washington, D.C. via Route 2/US-50.",
    neighborhoods: ["South River waterfront", "Beverly Triton area", "Selby-on-the-Bay (adjacent)", "London Town area"],
    localAttractions: [
      "Historic London Town & Gardens",
      "South River sailing & marinas",
      "Beverly Triton Nature Park",
      "Quick access to downtown Annapolis",
    ],
    relocationInfo:
      "Buyers who love the Annapolis waterfront lifestyle but want more land or a lower price point per square foot often cross the bridge to Edgewater. We help relocating buyers compare specific South River communities against comparable Annapolis-side neighborhoods on true door-to-door commute time, not just miles.",
    seo: {
      title: "Edgewater MD Real Estate | South River Homes for Sale",
      description:
        "Discover homes for sale in Edgewater, MD, on the South and Rhode Rivers — waterfront living minutes from downtown Annapolis across the South River Bridge.",
    },
  },
  {
    slug: "galesville",
    name: "Galesville",
    heroImage: {
      src: "/images/communities/galesville-hero.svg",
      alt: "Working waterman's harbor and dock along the West River at Galesville",
    },
    tagline: "A historic working-waterman's village on the West River.",
    description:
      "Galesville is one of the oldest settlements on the West River, with roots as a working watermen's harbor that it has never fully lost even as it's become a quieter boating destination. Its small historic core sits directly on the water, with the surrounding area a mix of modest waterfront cottages and larger newer homes on wooded lots.",
    lifestyle:
      "Galesville trades density and amenities for genuine village character: a working harbor, a couple of long-standing local restaurants, and a slower pace shaped by tides and boat traffic rather than commuter schedules. It's popular with buyers who want an authentic Chesapeake village feel rather than a planned community.",
    waterfront:
      "The West River gives Galesville a genuine deep-water harbor with marinas, boatyards, and private docks; it has long been a stop for cruising sailors on the Chesapeake, which shapes the village's boating-forward character.",
    schools: "Served by Anne Arundel County Public Schools; given Galesville's rural setting, bus routes and school assignments are worth confirming directly for a specific address.",
    commute:
      "About 25–30 minutes to Annapolis and roughly 50 minutes to Washington, D.C.; a longer commute than communities closer to US-50, which is part of why Galesville has retained its slower character.",
    neighborhoods: ["Galesville village core", "West River waterfront", "Rural surrounding lots"],
    localAttractions: [
      "Galesville working harbor & marinas",
      "West River sailing",
      "Local seafood restaurants",
      "Franklin Point State Park (nearby)",
    ],
    relocationInfo:
      "Buyers relocating specifically for an authentic, unhurried Chesapeake boating-village feel — rather than proximity to shopping or a short commute — are Galesville's natural fit. We're upfront with relocating clients about the tradeoff: more character and water, longer drive times.",
    seo: {
      title: "Galesville MD Real Estate | West River Homes for Sale",
      description:
        "Find homes for sale in Galesville, MD, a historic working-waterman's village on the West River south of Annapolis.",
    },
  },
  {
    slug: "shady-side",
    name: "Shady Side",
    heroImage: {
      src: "/images/communities/shady-side-hero.svg",
      alt: "Weathered dock pilings and workboats on Chesapeake Bay at Shady Side",
    },
    tagline: "A watermen's peninsula community on the Chesapeake Bay south of Annapolis.",
    description:
      "Shady Side sits on a peninsula between the West River and the open Chesapeake Bay, with a long history as a working watermen's community that still shows in its harbors and older waterfront cottages. Newer and renovated homes have filled in alongside the traditional housing stock, but the area has kept a distinctly unpolished, water-first character.",
    lifestyle:
      "Life in Shady Side centers on the water — crabbing, fishing, and boating are part of the community's identity, not just recreation. It's one of the more affordable waterfront-adjacent areas near Annapolis precisely because it hasn't been developed into a planned community.",
    waterfront:
      "With the Chesapeake Bay on one side and the West River on the other, Shady Side has extensive waterfront and near-waterfront inventory, including working harbors, marinas, and private docks.",
    schools: "Served by Anne Arundel County Public Schools; given the community's rural, peninsula layout, school assignments and bus routes are worth confirming directly for a specific address.",
    commute:
      "About 30 minutes to Annapolis and roughly 50–55 minutes to Washington, D.C. — one of the longer commutes among Anne Arundel County's waterfront communities.",
    neighborhoods: ["Shady Side village", "Bay shoreline", "West River side"],
    localAttractions: [
      "Shady Side harbors & marinas",
      "Captain Avery Museum",
      "Franklin Point State Park (nearby)",
      "Local seafood & crab houses",
    ],
    relocationInfo:
      "Shady Side draws buyers, including many relocating from more built-up areas, who specifically want Chesapeake Bay water access at a lower price point than Annapolis proper and are comfortable trading commute time for it. We make sure relocating clients understand the drive-time tradeoff before falling in love with a waterfront listing here.",
    seo: {
      title: "Shady Side MD Real Estate | Chesapeake Bay Homes",
      description:
        "Browse homes for sale in Shady Side, MD, a Chesapeake Bay watermen's community on the peninsula south of Annapolis.",
    },
  },
  {
    slug: "crofton",
    name: "Crofton",
    heroImage: {
      src: "/images/communities/crofton-hero.svg",
      alt: "Rolling lawns and suburban tree canopy in the planned community of Crofton",
    },
    tagline: "A planned suburban community between Annapolis, Washington, and Baltimore.",
    description:
      "Crofton is a planned suburban community developed beginning in the 1960s around a country club and golf course, straddling the Anne Arundel–Prince George's County line. It's inland rather than waterfront, offering larger lots, mature landscaping, and a more traditional suburban layout than the Chesapeake-adjacent communities closer to Annapolis.",
    lifestyle:
      "Crofton's identity is built around its golf course and country club, community parks, and a well-established town-center commercial area. It draws families and commuters who prioritize space, schools, and a central location over water access.",
    waterfront: "Crofton is an inland community with no direct waterfront; residents typically drive to South River, West River, or Bay access points for boating.",
    schools:
      "Crofton is generally considered one of the stronger school draws in the corridor between Annapolis and Washington, with several highly-regarded elementary, middle, and high schools serving the area — exact ratings and boundary assignments shift over time and are worth verifying directly for a specific address.",
    commute:
      "Centrally located near Route 3/US-301 and MD-424, Crofton offers a genuinely balanced commute: roughly 20–25 minutes to Annapolis, 30–35 minutes to Washington, D.C., and about 35–40 minutes to Baltimore.",
    neighborhoods: ["Crofton Country Club area", "Crofton Meadows", "Crofton Village", "Waugh Chapel (adjacent)"],
    localAttractions: [
      "Crofton Country Club & golf course",
      "Crofton Community Park",
      "Waugh Chapel Towne Centre shopping",
      "Patuxent Research Refuge (nearby)",
    ],
    relocationInfo:
      "Crofton is a frequent choice for relocating families balancing three commute destinations — Annapolis, D.C., and Baltimore — against strong schools and larger lots. We help incoming buyers weigh Crofton against Davidsonville and Odenton for the space-versus-commute tradeoff specific to their work location.",
    seo: {
      title: "Crofton MD Real Estate | Homes for Sale",
      description:
        "Explore homes for sale in Crofton, MD, a planned suburban community with a central commute to Annapolis, Washington, D.C., and Baltimore.",
    },
  },
  {
    slug: "davidsonville",
    name: "Davidsonville",
    heroImage: {
      src: "/images/communities/davidsonville-hero.svg",
      alt: "Open farmland and mature trees on large lots in rural Davidsonville",
    },
    tagline: "Large-lot, semi-rural living between Annapolis and Washington.",
    description:
      "Davidsonville is an unincorporated, semi-rural community south of Crofton and west of Edgewater, characterized by large residential lots, horse farms, and a lower overall density than most of Anne Arundel County. It appeals to buyers who want space and privacy while staying within commuting range of Annapolis and D.C.",
    lifestyle:
      "Life in Davidsonville tends toward larger properties, some with room for horses or hobby farming, and a quieter, more spread-out feel than the county's suburban subdivisions. It's a favorite of buyers looking for acreage without leaving the Annapolis/D.C. commuter shed entirely.",
    waterfront: "Davidsonville is an inland community with no direct waterfront access; it sits roughly equidistant from South River and West River boating access points, both a short drive away.",
    schools: "Served by Anne Arundel County Public Schools; the area is generally well-regarded for its schools, though exact assignments and current ratings should be confirmed for a specific address.",
    commute:
      "About 20 minutes to Annapolis and roughly 40–45 minutes to Washington, D.C. via Route 424/US-301, with a longer but manageable drive to Baltimore.",
    neighborhoods: ["Davidsonville village area", "Governors Bridge Road corridor", "Central Avenue corridor"],
    localAttractions: [
      "Historic Davidsonville General Store area",
      "Sands Road Park",
      "Nearby horse farms & equestrian facilities",
      "Patuxent River access (short drive)",
    ],
    relocationInfo:
      "Davidsonville suits relocating buyers specifically prioritizing acreage, privacy, or equestrian use who are comfortable trading walkability and amenities for space. We help buyers compare it against Crofton for the lot-size-versus-town-center tradeoff.",
    seo: {
      title: "Davidsonville MD Real Estate | Homes for Sale",
      description:
        "Find homes for sale in Davidsonville, MD — large-lot, semi-rural living between Annapolis and Washington, D.C.",
    },
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    heroImage: {
      src: "/images/communities/pasadena-hero.svg",
      alt: "Suburban rooflines along the Baltimore-Annapolis corridor in Pasadena",
    },
    tagline: "A sprawling waterfront-and-suburban community along the Baltimore-Annapolis corridor.",
    description:
      "Pasadena stretches along the Patapsco Neck and Magothy River area between Annapolis and Baltimore, encompassing a wide range of neighborhoods — from dense mid-century subdivisions along Ritchie Highway to waterfront communities on the Magothy and Chesapeake Bay. Its size and variety mean housing stock and price points differ significantly by specific pocket.",
    lifestyle:
      "Pasadena is more suburban and commercially built-out than the smaller Anne Arundel communities to its south, with easy access to shopping and everyday amenities along Ritchie Highway, balanced by pockets of genuine waterfront neighborhoods tucked along the peninsulas and coves that define its shoreline.",
    waterfront:
      "Several Pasadena neighborhoods — including areas along the Magothy River, Stony Creek, and the Chesapeake Bay — offer direct waterfront or community water access, with marinas and private docks common in the older waterfront enclaves.",
    schools: "Served by Anne Arundel County Public Schools; given Pasadena's size, school assignments vary considerably by neighborhood and should be confirmed by address.",
    commute:
      "About 20–25 minutes to Annapolis, 20–25 minutes to Baltimore via MD-2/I-695, and roughly 45 minutes to BWI Airport and Washington, D.C.",
    neighborhoods: ["Riviera Beach", "Lake Shore", "Chesapeake Terrace", "Stoney Creek waterfront"],
    localAttractions: [
      "Downs Park",
      "Magothy & Stoney Creek marinas",
      "Ritchie Highway shopping corridor",
      "Fort Smallwood Park (nearby)",
    ],
    relocationInfo:
      "Pasadena's size makes it a broad umbrella rather than a single neighborhood, so relocating buyers benefit most from narrowing down to a specific pocket early. We help clients translate general Baltimore-Annapolis-corridor searches into the right Pasadena neighborhood for their budget and water-access priorities.",
    seo: {
      title: "Pasadena MD Real Estate | Homes for Sale",
      description:
        "Browse homes for sale in Pasadena, MD, along the Baltimore-Annapolis corridor — waterfront and suburban neighborhoods on the Magothy River and Chesapeake Bay.",
    },
  },
  {
    slug: "millersville",
    name: "Millersville",
    heroImage: {
      src: "/images/communities/millersville-hero.svg",
      alt: "Wooded suburban neighborhoods along the Baltimore-Annapolis corridor in Millersville",
    },
    tagline: "A wooded, inland suburban community along the Baltimore-Annapolis corridor.",
    description:
      "Millersville sits inland along the Baltimore-Annapolis Boulevard/MD-3 corridor, roughly midway between the two cities. It's a wooded, primarily residential community without direct waterfront, offering a mix of established subdivisions and newer construction on generally larger lots than closer-in Annapolis neighborhoods.",
    lifestyle:
      "Millersville trades water access for space, tree cover, and a central commuting position, with the B&A Trail running through the area for biking and running. It appeals to buyers who want a quieter, more wooded setting within easy reach of both Annapolis and Baltimore.",
    waterfront: "Millersville is an inland community with no direct waterfront; residents typically drive to Severna Park, Arnold, or Annapolis for boating and water access.",
    schools: "Served by Anne Arundel County Public Schools; specific elementary, middle, and high school assignments vary by neighborhood within Millersville.",
    commute:
      "About 20 minutes to Annapolis, 20–25 minutes to Baltimore via MD-3/I-97, and roughly 15–20 minutes to BWI Airport — a genuinely central location for commuters with varied destinations.",
    neighborhoods: ["Millersville proper", "Veterans Highway corridor", "Kinder Farm Park area"],
    localAttractions: [
      "Kinder Farm Park",
      "B&A Trail",
      "Anne Arundel County Fairgrounds",
      "Piney Orchard shopping (nearby)",
    ],
    relocationInfo:
      "Millersville is a common fit for relocating buyers whose commute or travel needs point toward BWI or split between Annapolis and Baltimore, and who are comfortable trading water access for a wooded, inland setting. We help clients weigh it against Severna Park for the space-versus-water-access tradeoff.",
    seo: {
      title: "Millersville MD Real Estate | Homes for Sale",
      description:
        "Find homes for sale in Millersville, MD, a wooded inland community along the Baltimore-Annapolis corridor, close to BWI Airport.",
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
