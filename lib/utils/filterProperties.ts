import type { Property, PropertyStatus, PropertyTag, PropertyType } from "@/lib/types/property";
import { PROPERTY_TYPE_LABELS, STATUS_LABELS, TAG_LABELS } from "@/lib/utils/labels";

/**
 * Flat filter state — this shape is what both PropertyFilters/
 * PropertyFilterDrawer read/write and what nuqs syncs to the URL on
 * /properties, so filters are shareable and back-button-safe.
 */
export interface PropertyFilterState {
  location: string;
  propertyType: PropertyType[];
  status: PropertyStatus[];
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  minBaths?: number;
  minSqft?: number;
  maxSqft?: number;
  tags: PropertyTag[];
}

export const DEFAULT_FILTER_STATE: PropertyFilterState = {
  location: "",
  propertyType: [],
  status: [],
  minPrice: undefined,
  maxPrice: undefined,
  minBeds: undefined,
  minBaths: undefined,
  minSqft: undefined,
  maxSqft: undefined,
  tags: [],
};

type FilterKind = "text" | "multiSelect" | "priceRange" | "numberRange" | "minValue";

export interface FilterOption<T extends string = string> {
  value: T;
  label: string;
}

export interface FilterDefinition {
  key: keyof PropertyFilterState | "price" | "sqft";
  label: string;
  kind: FilterKind;
  placeholder?: string;
  options?: FilterOption[];
}

/**
 * Drives PropertyFilters' rendering. Adding a future filter (another tag,
 * another range, etc.) is a single new entry here, not new component code.
 */
export const FILTER_DEFINITIONS: FilterDefinition[] = [
  {
    key: "location",
    label: "Location",
    kind: "text",
    placeholder: "Address, city, neighborhood, or ZIP",
  },
  {
    key: "propertyType",
    label: "Property Type",
    kind: "multiSelect",
    options: (Object.keys(PROPERTY_TYPE_LABELS) as PropertyType[]).map((value) => ({
      value,
      label: PROPERTY_TYPE_LABELS[value],
    })),
  },
  {
    key: "price",
    label: "Price",
    kind: "priceRange",
  },
  {
    key: "minBeds",
    label: "Bedrooms",
    kind: "minValue",
    options: [1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: `${n}+` })),
  },
  {
    key: "minBaths",
    label: "Bathrooms",
    kind: "minValue",
    options: [1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: `${n}+` })),
  },
  {
    key: "sqft",
    label: "Square Feet",
    kind: "numberRange",
  },
  {
    key: "status",
    label: "Status",
    kind: "multiSelect",
    options: (Object.keys(STATUS_LABELS) as PropertyStatus[]).map((value) => ({
      value,
      label: STATUS_LABELS[value],
    })),
  },
  {
    key: "tags",
    label: "Features",
    kind: "multiSelect",
    options: (Object.keys(TAG_LABELS) as PropertyTag[]).map((value) => ({
      value,
      label: TAG_LABELS[value],
    })),
  },
];

export function isFilterStateEmpty(filters: PropertyFilterState): boolean {
  return (
    filters.location.trim() === "" &&
    filters.propertyType.length === 0 &&
    filters.status.length === 0 &&
    filters.minPrice === undefined &&
    filters.maxPrice === undefined &&
    filters.minBeds === undefined &&
    filters.minBaths === undefined &&
    filters.minSqft === undefined &&
    filters.maxSqft === undefined &&
    filters.tags.length === 0
  );
}

/** Apply a PropertyFilterState to a list of properties. Pure, no side effects. */
export function filterProperties(
  properties: Property[],
  filters: PropertyFilterState,
): Property[] {
  const location = filters.location.trim().toLowerCase();

  return properties.filter((property) => {
    if (location) {
      const haystack = [
        property.address,
        property.city,
        property.neighborhood ?? "",
        property.zip,
        property.state,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(location)) return false;
    }

    if (filters.propertyType.length > 0 && !filters.propertyType.includes(property.propertyType)) {
      return false;
    }

    if (filters.status.length > 0 && !filters.status.includes(property.status)) {
      return false;
    }

    const effectivePrice = property.status === "sold" ? property.soldPrice ?? property.price : property.price;
    if (filters.minPrice !== undefined && effectivePrice < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && effectivePrice > filters.maxPrice) return false;

    if (filters.minBeds !== undefined && property.beds < filters.minBeds) return false;
    if (filters.minBaths !== undefined && property.baths < filters.minBaths) return false;

    if (filters.minSqft !== undefined && property.sqft < filters.minSqft) return false;
    if (filters.maxSqft !== undefined && property.sqft > filters.maxSqft) return false;

    if (filters.tags.length > 0 && !filters.tags.every((tag) => property.tags.includes(tag))) {
      return false;
    }

    return true;
  });
}
