import type { Property, PropertyImage } from "@/lib/types/property";

/**
 * DEMO DATA — fictional properties, not real listings. See `isDemo` on
 * every entry below, which drives the "DEMO LISTING" card tag, the
 * disclosure strip on detail pages, and `robots: noindex` metadata.
 *
 * This file is the ONLY place that touches the raw array. Every other
 * module in the app must go through the accessor functions exported below
 * (getAllProperties, getPropertyBySlug, etc.) so a future MLS/IDX
 * integration only requires changes here.
 */

function img(id: string, alt: string, isPrimary = false): PropertyImage {
  return { src: `/images/properties/${id}.svg`, alt, isPrimary };
}

const DEMO_AGENT = {
  name: "Krissy Curtis",
  phone: "(443) 758-3501",
  email: "Krissy@Kmcurtisrealty.com",
  licenseNumber: "MD-DEMO-00000",
};

const DEMO_BROKERAGE = "Krissy Curtis Realty";

const DEMO_DISCLAIMER =
  "This is a fictional demo listing created to showcase the Krissy Curtis Realty website and does not represent a real property currently or previously for sale. Data will be replaced by a licensed MLS/IDX feed prior to launch.";

const properties: Property[] = [
  {
    id: "prop-001",
    mlsId: "DEMO-MD1000001",
    slug: "123-compass-point-road-annapolis",
    status: "for-sale",
    isDemo: true,
    featured: true,
    address: "123 Compass Point Road",
    city: "Annapolis",
    state: "MD",
    zip: "21401",
    neighborhood: "Eastport",
    communitySlug: "annapolis",
    price: 1850000,
    beds: 5,
    baths: 4,
    halfBaths: 1,
    sqft: 4820,
    lotSizeAcres: 0.62,
    yearBuilt: 2016,
    propertyType: "residential",
    description:
      "Set on a quiet point along the Severn, this waterfront residence pairs a light-filled open plan with sweeping water views from nearly every principal room. A private dock, deep-water slip, and stone terrace make the transition from living room to shoreline effortless, while the chef's kitchen, first-floor primary suite, and finished lower level with a media room round out a home built for both everyday living and entertaining.",
    images: [
      img("waterfront-manor-exterior", "Waterfront home exterior at dusk with private dock", true),
      img("harbor-sunset-view", "Sunset view over the water from the property's shoreline"),
      img("coastal-kitchen-interior", "Bright open-concept kitchen with water-facing windows"),
      img("primary-suite-interior", "First-floor primary suite with large windows"),
      img("backyard-pool-terrace", "Stone terrace and pool overlooking the water"),
      img("open-water-horizon", "Open water view from the private dock"),
    ],
    features: [
      {
        category: "Interior",
        items: ["Chef's kitchen with waterfall island", "First-floor primary suite", "Finished lower-level media room", "Hardwood floors throughout", "Gas fireplace in great room"],
      },
      {
        category: "Exterior",
        items: ["Stone terrace", "Private dock with deep-water slip", "Screened porch", "Professionally landscaped grounds"],
      },
      { category: "Waterfront", items: ["Direct Severn River frontage", "Private dock", "Deep-water slip (6' MLW)", "Riprap shoreline"] },
      { category: "Community", items: ["Eastport neighborhood", "Walk to Annapolis City Dock", "Boat-friendly community"] },
      { category: "Parking", items: ["3-car attached garage", "Circular driveway"] },
    ],
    waterfront: true,
    waterfrontDetails: "Direct frontage on the Severn River with a private dock and deep-water slip.",
    garageSpaces: 3,
    tags: ["waterfront", "dock", "luxury", "garage"],
    schoolInfo: {
      elementarySchool: "Eastport Elementary",
      middleSchool: "Annapolis Middle",
      highSchool: "Annapolis High",
      schoolDistrict: "Anne Arundel County Public Schools",
    },
    taxInfo: { annualTaxAmount: 14250, taxYear: 2025, parcelId: "DEMO-01-0001" },
    hoa: { hasHoa: false },
    lat: 38.9636,
    lng: -76.4886,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-06-02",
    seo: {
      title: "123 Compass Point Road, Annapolis MD | Waterfront Home",
      description: "Waterfront 5-bedroom residence on the Severn River with a private dock, offered in Annapolis, MD.",
    },
  },
  {
    id: "prop-002",
    mlsId: "DEMO-MD1000002",
    slug: "45-severn-overlook-court-severna-park",
    status: "for-sale",
    isDemo: true,
    featured: true,
    address: "45 Severn Overlook Court",
    city: "Severna Park",
    state: "MD",
    zip: "21146",
    neighborhood: "Round Bay",
    communitySlug: "severna-park",
    price: 895000,
    beds: 4,
    baths: 3,
    halfBaths: 0,
    sqft: 3180,
    lotSizeAcres: 0.41,
    yearBuilt: 2004,
    propertyType: "residential",
    description:
      "A gracious center-hall colonial on a cul-de-sac in one of Severna Park's most established neighborhoods. Recent updates include a renovated kitchen, refinished hardwoods, and a new roof, while mature landscaping and a level backyard give it easy walkability to the community's marina and schools.",
    images: [
      img("brick-colonial-facade", "Brick colonial home exterior with mature landscaping", true),
      img("coastal-kitchen-interior", "Renovated kitchen with island seating"),
      img("primary-suite-interior", "Spacious primary bedroom with natural light"),
      img("backyard-pool-terrace", "Level backyard with stone patio"),
    ],
    features: [
      { category: "Interior", items: ["Renovated kitchen (2023)", "Refinished hardwood floors", "Formal dining room", "Main-level office"] },
      { category: "Exterior", items: ["Stone patio", "Level fenced backyard", "New roof (2024)"] },
      { category: "Community", items: ["Round Bay neighborhood", "Community marina access", "Cul-de-sac lot"] },
      { category: "Parking", items: ["2-car attached garage"] },
    ],
    waterfront: false,
    garageSpaces: 2,
    tags: ["garage"],
    schoolInfo: {
      elementarySchool: "Oak Hill Elementary",
      middleSchool: "Severna Park Middle",
      highSchool: "Severna Park High",
      schoolDistrict: "Anne Arundel County Public Schools",
    },
    taxInfo: { annualTaxAmount: 6980, taxYear: 2025, parcelId: "DEMO-02-0002" },
    hoa: { hasHoa: true, fee: 145, frequency: "annually", includes: ["Community marina", "Common grounds maintenance"] },
    lat: 39.0723,
    lng: -76.5502,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-07-10",
  },
  {
    id: "prop-003",
    mlsId: "DEMO-MD1000003",
    slug: "210-harbor-watch-lane-annapolis",
    status: "for-sale",
    isDemo: true,
    featured: true,
    address: "210 Harbor Watch Lane, Unit 4B",
    city: "Annapolis",
    state: "MD",
    zip: "21403",
    neighborhood: "Downtown Annapolis",
    communitySlug: "annapolis",
    price: 625000,
    beds: 2,
    baths: 2,
    halfBaths: 0,
    sqft: 1450,
    yearBuilt: 2011,
    propertyType: "condo",
    description:
      "A sleek top-floor condo two blocks from City Dock, with an open living plan, a private balcony, and secure garage parking. Building amenities include a fitness room and rooftop terrace, and the location puts Annapolis's restaurants, harbor, and Naval Academia at an easy walk.",
    images: [
      img("condo-balcony-skyline", "Modern condo balcony overlooking downtown skyline", true),
      img("coastal-kitchen-interior", "Open kitchen and living space"),
      img("primary-suite-interior", "Primary bedroom with large windows"),
    ],
    features: [
      { category: "Interior", items: ["Open living/dining plan", "Private balcony", "In-unit washer/dryer", "Quartz countertops"] },
      { category: "Community", items: ["Rooftop terrace", "Fitness room", "Two blocks to City Dock"] },
      { category: "Parking", items: ["1 assigned garage space"] },
    ],
    waterfront: false,
    garageSpaces: 1,
    tags: ["garage"],
    hoa: { hasHoa: true, fee: 410, frequency: "monthly", includes: ["Building maintenance", "Water", "Trash", "Fitness room", "Rooftop terrace"] },
    lat: 38.9767,
    lng: -76.4922,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-05-21",
  },
  {
    id: "prop-004",
    mlsId: "DEMO-MD1000004",
    slug: "78-marsh-hollow-drive-edgewater",
    status: "for-sale",
    isDemo: true,
    featured: false,
    address: "78 Marsh Hollow Drive",
    city: "Edgewater",
    state: "MD",
    zip: "21037",
    neighborhood: "South River Colony",
    communitySlug: "edgewater",
    price: 549000,
    beds: 3,
    baths: 2,
    halfBaths: 1,
    sqft: 2140,
    lotSizeAcres: 0.09,
    yearBuilt: 2009,
    propertyType: "townhouse",
    description:
      "An end-unit townhome backing to open space in South River Colony, with a two-story family room, a finished walkout lower level, and a low-maintenance composite deck. Community amenities include a pool, clubhouse, and walking trails.",
    images: [
      img("townhouse-row-exterior", "End-unit townhome exterior backing to open space", true),
      img("coastal-kitchen-interior", "Kitchen with breakfast bar"),
      img("primary-suite-interior", "Primary bedroom on upper level"),
    ],
    features: [
      { category: "Interior", items: ["Two-story family room", "Finished walkout lower level", "Gas fireplace"] },
      { category: "Exterior", items: ["Composite deck", "End-unit with extra side yard"] },
      { category: "Community", items: ["Community pool", "Clubhouse", "Walking trails"] },
      { category: "Parking", items: ["2-car garage"] },
    ],
    waterfront: false,
    garageSpaces: 2,
    tags: ["garage", "pool"],
    hoa: { hasHoa: true, fee: 98, frequency: "monthly", includes: ["Pool", "Clubhouse", "Common area maintenance"] },
    lat: 38.9107,
    lng: -76.5502,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-07-28",
  },
  {
    id: "prop-005",
    mlsId: "DEMO-MD1000005",
    slug: "12-osprey-landing-cape-st-claire",
    status: "coming-soon",
    isDemo: true,
    featured: true,
    address: "12 Osprey Landing",
    city: "Annapolis",
    state: "MD",
    zip: "21401",
    neighborhood: "Cape St. Claire",
    communitySlug: "broadneck",
    price: 2350000,
    beds: 6,
    baths: 5,
    halfBaths: 1,
    sqft: 5640,
    lotSizeAcres: 0.88,
    yearBuilt: 2021,
    propertyType: "residential",
    description:
      "A newly built waterfront estate on a point lot with 180-degree Chesapeake Bay views, currently being finished for an early-fall debut. Expect a chef's kitchen open to a two-story great room, a primary wing with a private balcony, a four-slip pier, and a saltwater pool overlooking the Bay. Full marketing and showings begin once construction wraps.",
    images: [
      img("lighthouse-point-view", "Point-lot waterfront property with bay view", true),
      img("waterfront-manor-exterior", "New construction exterior at dusk"),
      img("open-water-horizon", "Open Chesapeake Bay water view"),
      img("marsh-grass-shoreline", "Natural shoreline along the property"),
      img("dockominium-boat-slips", "Private four-slip pier"),
    ],
    features: [
      { category: "Interior", items: ["Two-story great room", "Chef's kitchen with butler's pantry", "Primary suite with private balcony"] },
      { category: "Exterior", items: ["Saltwater pool", "Four-slip private pier", "Bluestone terrace"] },
      { category: "Waterfront", items: ["180-degree Chesapeake Bay views", "Private pier", "Point lot"] },
      { category: "Property", items: ["New construction, 2021", "Point lot, 0.88 acres"] },
    ],
    waterfront: true,
    waterfrontDetails: "Point lot on the Chesapeake Bay with 180-degree views and a private four-slip pier.",
    garageSpaces: 3,
    tags: ["waterfront", "pool", "dock", "new-construction", "luxury"],
    schoolInfo: {
      elementarySchool: "Cape St. Claire Elementary",
      middleSchool: "Magothy River Middle",
      highSchool: "Broadneck High",
      schoolDistrict: "Anne Arundel County Public Schools",
    },
    hoa: { hasHoa: true, fee: 210, frequency: "annually", includes: ["Community beach", "Marina access"] },
    lat: 39.0245,
    lng: -76.4494,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-08-01",
  },
  {
    id: "prop-006",
    mlsId: "DEMO-MD1000006",
    slug: "6-bay-ridge-commons-annapolis",
    status: "pending",
    isDemo: true,
    featured: false,
    address: "6 Bay Ridge Commons",
    city: "Annapolis",
    state: "MD",
    zip: "21403",
    neighborhood: "Bay Ridge",
    communitySlug: "annapolis",
    price: 780000,
    beds: 6,
    baths: 4,
    halfBaths: 0,
    sqft: 3020,
    lotSizeAcres: 0.28,
    yearBuilt: 1987,
    propertyType: "multi-family",
    description:
      "A well-maintained duplex in Bay Ridge with two updated three-bedroom units, separate utilities, and off-street parking for each side. A strong option for an owner-occupant house-hack or an investor adding to a rental portfolio near Annapolis's waterfront.",
    images: [
      img("townhouse-row-exterior", "Duplex exterior with separate entrances", true),
      img("downtown-storefront", "Street-facing view of the property"),
      img("coastal-kitchen-interior", "Updated kitchen in one unit"),
    ],
    features: [
      { category: "Property", items: ["Two 3BR/2BA units", "Separate utility meters", "Updated in 2019"] },
      { category: "Parking", items: ["Off-street parking, 2 spaces per unit"] },
    ],
    waterfront: false,
    tags: [],
    taxInfo: { annualTaxAmount: 6120, taxYear: 2025, parcelId: "DEMO-06-0006" },
    hoa: { hasHoa: false },
    lat: 38.9578,
    lng: -76.4839,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-06-14",
  },
  {
    id: "prop-007",
    mlsId: "DEMO-MD1000007",
    slug: "340-old-mill-bottom-road-severna-park",
    status: "active-under-contract",
    isDemo: true,
    featured: false,
    address: "340 Old Mill Bottom Road",
    city: "Severna Park",
    state: "MD",
    zip: "21146",
    neighborhood: "Millersville Line",
    communitySlug: "severna-park",
    price: 425000,
    beds: 0,
    baths: 0,
    sqft: 0,
    lotSizeAcres: 3.4,
    propertyType: "land",
    description:
      "3.4 wooded acres with a perc-approved building site, road frontage, and public water/sewer available at the street. A rare opportunity to build a custom home close to Severna Park's shops and schools while backing to protected forest conservation land.",
    images: [
      img("stone-farmhouse-land", "Wooded building lot with cleared homesite", true),
      img("marsh-grass-shoreline", "Natural buffer bordering the property"),
    ],
    features: [{ category: "Property", items: ["Perc-approved building site", "Road frontage", "Backs to forest conservation land"] }],
    waterfront: false,
    tags: [],
    taxInfo: { annualTaxAmount: 2140, taxYear: 2025, parcelId: "DEMO-07-0007" },
    hoa: { hasHoa: false },
    lat: 39.0812,
    lng: -76.5698,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-04-30",
  },
  {
    id: "prop-008",
    mlsId: "DEMO-MD1000008",
    slug: "501-main-street-annapolis",
    status: "sold",
    isDemo: true,
    featured: false,
    address: "501 Main Street",
    city: "Annapolis",
    state: "MD",
    zip: "21401",
    neighborhood: "Downtown Annapolis",
    communitySlug: "annapolis",
    price: 1195000,
    soldPrice: 1150000,
    beds: 0,
    baths: 2,
    sqft: 3400,
    yearBuilt: 1948,
    propertyType: "commercial",
    description:
      "A ground-floor retail storefront with two upper-level office suites on Main Street, sold to a local investor. Recent capital improvements included a new HVAC system and storefront windows, with strong pedestrian traffic from Annapolis's waterfront and Naval Academy visitors.",
    images: [
      img("downtown-storefront", "Main Street storefront exterior", true),
      img("condo-balcony-skyline", "View of downtown Annapolis streetscape"),
    ],
    features: [{ category: "Property", items: ["Ground-floor retail + 2 office suites", "New HVAC (2024)", "New storefront windows"] }],
    waterfront: false,
    tags: [],
    taxInfo: { annualTaxAmount: 18700, taxYear: 2025, parcelId: "DEMO-08-0008" },
    hoa: { hasHoa: false },
    lat: 38.9787,
    lng: -76.4922,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-01-12",
    soldAt: "2026-03-05",
  },
  {
    id: "prop-009",
    mlsId: "DEMO-MD1000009",
    slug: "eastport-yacht-basin-dockominium-9",
    status: "sold",
    isDemo: true,
    featured: true,
    address: "1 Yacht Basin Way, Slip 9",
    city: "Annapolis",
    state: "MD",
    zip: "21403",
    neighborhood: "Eastport",
    communitySlug: "annapolis",
    price: 1050000,
    soldPrice: 1025000,
    beds: 0,
    baths: 1,
    sqft: 620,
    yearBuilt: 2015,
    propertyType: "other",
    description:
      "A deeded 60-foot deep-water dockominium slip with a dockside utility building offering a full bath, kitchenette, and lounge — sold to a longtime Annapolis boating family. Includes shore power, water, and a private gated ramp in one of Eastport's premier marina communities.",
    images: [
      img("dockominium-boat-slips", "Private deep-water boat slips at the marina", true),
      img("open-water-horizon", "Open water view from the marina"),
      img("lighthouse-point-view", "Marina entrance with water view"),
    ],
    features: [
      { category: "Waterfront", items: ["Deeded 60' deep-water slip", "Shore power and water", "Private gated ramp"] },
      { category: "Property", items: ["Dockside utility building with bath and kitchenette"] },
    ],
    waterfront: true,
    waterfrontDetails: "Deeded 60-foot deep-water slip with shore power in a gated Eastport marina.",
    tags: ["waterfront", "dock", "luxury"],
    hoa: { hasHoa: true, fee: 3600, frequency: "annually", includes: ["Marina maintenance", "Gate access", "Shore power"] },
    lat: 38.9701,
    lng: -76.4809,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2025-11-03",
    soldAt: "2026-02-18",
  },
  {
    id: "prop-010",
    mlsId: "DEMO-MD1000010",
    slug: "29-chesterfield-road-severna-park",
    status: "sold",
    isDemo: true,
    featured: false,
    address: "29 Chesterfield Road",
    city: "Severna Park",
    state: "MD",
    zip: "21146",
    neighborhood: "Chartridge",
    communitySlug: "severna-park",
    price: 635000,
    soldPrice: 612000,
    beds: 3,
    baths: 2,
    halfBaths: 1,
    sqft: 2280,
    lotSizeAcres: 0.05,
    yearBuilt: 2013,
    propertyType: "townhouse",
    description:
      "A move-in-ready end-unit townhome in Chartridge that sold after eight days on market to a relocating buyer's family, with a two-car garage, an open kitchen/family room plan, and a fenced patio backing to community green space.",
    images: [
      img("townhouse-row-exterior", "End-unit townhome exterior with attached garage", true),
      img("brick-colonial-facade", "Front entrance detail"),
      img("coastal-kitchen-interior", "Open kitchen and family room"),
    ],
    features: [
      { category: "Interior", items: ["Open kitchen/family room", "Upper-level laundry"] },
      { category: "Exterior", items: ["Fenced patio backing to green space"] },
      { category: "Parking", items: ["2-car attached garage"] },
    ],
    waterfront: false,
    garageSpaces: 2,
    tags: ["garage"],
    hoa: { hasHoa: true, fee: 165, frequency: "monthly", includes: ["Lawn care", "Common area maintenance"] },
    lat: 39.0654,
    lng: -76.5443,
    approximateLocationOnly: true,
    listingAgent: DEMO_AGENT,
    listingBrokerage: DEMO_BROKERAGE,
    mlsDisclaimer: DEMO_DISCLAIMER,
    listedAt: "2026-02-01",
    soldAt: "2026-02-19",
  },
];

// ---------------------------------------------------------------------------
// Accessor functions — the ONLY supported way to read property data.
// ---------------------------------------------------------------------------

export function getAllProperties(): Property[] {
  return properties;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}

export function getFeaturedProperties(limit?: number): Property[] {
  const featured = properties.filter((p) => p.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getWaterfrontProperties(limit?: number): Property[] {
  const waterfront = properties.filter((p) => p.waterfront && p.status !== "sold");
  return typeof limit === "number" ? waterfront.slice(0, limit) : waterfront;
}

export function getRecentSales(limit?: number): Property[] {
  const sold = properties
    .filter((p) => p.status === "sold")
    .sort((a, b) => (b.soldAt ?? "").localeCompare(a.soldAt ?? ""));
  return typeof limit === "number" ? sold.slice(0, limit) : sold;
}

export function getActiveProperties(): Property[] {
  return properties.filter((p) => p.status !== "sold");
}

export function getPropertiesByCommunity(communitySlug: string): Property[] {
  return properties.filter((p) => p.communitySlug === communitySlug);
}
