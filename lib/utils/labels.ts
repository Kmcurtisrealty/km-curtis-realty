import type { PropertyStatus, PropertyTag, PropertyType } from "@/lib/types/property";

export const STATUS_LABELS: Record<PropertyStatus, string> = {
  "for-sale": "For Sale",
  "coming-soon": "Coming Soon",
  pending: "Pending",
  "active-under-contract": "Active Under Contract",
  sold: "Sold",
};

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  residential: "Residential",
  townhouse: "Townhouse",
  condo: "Condo",
  land: "Land",
  "multi-family": "Multi-Family",
  commercial: "Commercial",
  other: "Other",
};

export const TAG_LABELS: Record<PropertyTag, string> = {
  waterfront: "Waterfront",
  pool: "Pool",
  dock: "Dock",
  "new-construction": "New Construction",
  luxury: "Luxury",
  "open-house": "Open House",
  garage: "Garage",
  "water-view": "Water View",
};
