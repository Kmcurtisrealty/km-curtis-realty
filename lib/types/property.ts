/**
 * Property data model.
 *
 * This interface is intentionally shaped to be compatible with a future
 * IDX/MLS integration: every field below is something a real MLS feed would
 * plausibly supply. Components and pages should NEVER import demo data
 * directly — always go through the accessor functions in
 * `lib/data/properties.ts` (getAllProperties / getPropertyBySlug / etc.).
 * When a real MLS/IDX provider is wired up, only that data file's internals
 * change; no component or page needs to be touched.
 */

export type PropertyStatus =
  | "for-sale"
  | "coming-soon"
  | "pending"
  | "active-under-contract"
  | "sold";

export type PropertyType =
  | "residential"
  | "townhouse"
  | "condo"
  | "land"
  | "multi-family"
  | "commercial"
  | "other";

/**
 * Extensible tag list. New filterable amenities (pool, dock, new
 * construction, luxury, open house, etc.) are added here — and to
 * FILTER_DEFINITIONS in lib/utils/filterProperties.ts — without new
 * component code.
 */
export type PropertyTag =
  | "waterfront"
  | "pool"
  | "dock"
  | "new-construction"
  | "luxury"
  | "open-house"
  | "garage"
  | "water-view";

export interface PropertyImage {
  src: string;
  alt: string;
  /** Marks the primary hero/gallery-cover image. */
  isPrimary?: boolean;
}

export interface FeatureGroup {
  /** Category label, e.g. "Interior", "Exterior", "Waterfront". */
  category:
    | "Interior"
    | "Exterior"
    | "Property"
    | "Community"
    | "Waterfront"
    | "Appliances"
    | "Parking";
  items: string[];
}

export interface SchoolInfo {
  elementarySchool?: string;
  middleSchool?: string;
  highSchool?: string;
  schoolDistrict?: string;
}

export interface TaxInfo {
  annualTaxAmount?: number;
  taxYear?: number;
  parcelId?: string;
}

export interface HoaInfo {
  hasHoa: boolean;
  fee?: number;
  frequency?: "monthly" | "quarterly" | "annually";
  includes?: string[];
}

export interface ListingAgent {
  name: string;
  phone?: string;
  email?: string;
  licenseNumber?: string;
}

export interface PropertySeoOverrides {
  title?: string;
  description?: string;
}

export interface Property {
  id: string;
  mlsId: string;
  slug: string;

  status: PropertyStatus;

  /** Marks fictional demo content. Drives DEMO LISTING badges and noindex. */
  isDemo: boolean;

  /** Surfaced in curated homepage/community "featured" sections. */
  featured: boolean;

  // Address
  address: string;
  city: string;
  state: string;
  zip: string;
  neighborhood?: string;
  /** Links this property to a community page, e.g. "annapolis". */
  communitySlug?: string;

  // Pricing
  price: number;
  /** Only present once status is "sold". */
  soldPrice?: number;

  // Core stats
  beds: number;
  baths: number;
  halfBaths?: number;
  sqft: number;
  lotSizeAcres?: number;
  yearBuilt?: number;

  propertyType: PropertyType;

  description: string;

  images: PropertyImage[];

  /** Only categories with data are ever rendered. */
  features: FeatureGroup[];

  waterfront: boolean;
  waterfrontDetails?: string;

  garageSpaces?: number;

  tags: PropertyTag[];

  schoolInfo?: SchoolInfo;
  taxInfo?: TaxInfo;
  hoa?: HoaInfo;

  lat?: number;
  lng?: number;
  /**
   * When true, lat/lng (if present) represent only an approximate area,
   * not the parcel's exact location — required for listings where the MLS
   * feed does not permit exposing precise coordinates.
   */
  approximateLocationOnly?: boolean;

  listingAgent?: ListingAgent;
  listingBrokerage?: string;
  mlsDisclaimer?: string;

  listedAt?: string;
  soldAt?: string;

  seo?: PropertySeoOverrides;
}
