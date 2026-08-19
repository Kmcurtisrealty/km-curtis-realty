"use client";

import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useCallback, useMemo } from "react";
import type { PropertyFilterState } from "@/lib/utils/filterProperties";
import type { PropertyStatus, PropertyTag, PropertyType } from "@/lib/types/property";

const parsers = {
  location: parseAsString.withDefault(""),
  propertyType: parseAsArrayOf(parseAsString).withDefault([]),
  status: parseAsArrayOf(parseAsString).withDefault([]),
  minPrice: parseAsInteger,
  maxPrice: parseAsInteger,
  minBeds: parseAsInteger,
  minBaths: parseAsInteger,
  minSqft: parseAsInteger,
  maxSqft: parseAsInteger,
  tags: parseAsArrayOf(parseAsString).withDefault([]),
};

/**
 * URL-synced property filter state (spec §9/§10): filters live in the query
 * string via nuqs, so results are shareable and survive a page reload / the
 * back button. All /properties and community-scoped searches share this
 * hook.
 */
export function usePropertyFilters() {
  const [state, setState] = useQueryStates(parsers, { history: "push", shallow: true });

  const filters: PropertyFilterState = useMemo(
    () => ({
      location: state.location,
      propertyType: state.propertyType as PropertyType[],
      status: state.status as PropertyStatus[],
      minPrice: state.minPrice ?? undefined,
      maxPrice: state.maxPrice ?? undefined,
      minBeds: state.minBeds ?? undefined,
      minBaths: state.minBaths ?? undefined,
      minSqft: state.minSqft ?? undefined,
      maxSqft: state.maxSqft ?? undefined,
      tags: state.tags as PropertyTag[],
    }),
    [state],
  );

  const setFilters = useCallback(
    (patch: Partial<PropertyFilterState>) => {
      setState({
        location: patch.location !== undefined ? patch.location : undefined,
        propertyType: patch.propertyType !== undefined ? patch.propertyType : undefined,
        status: patch.status !== undefined ? patch.status : undefined,
        minPrice: patch.minPrice !== undefined ? patch.minPrice ?? null : undefined,
        maxPrice: patch.maxPrice !== undefined ? patch.maxPrice ?? null : undefined,
        minBeds: patch.minBeds !== undefined ? patch.minBeds ?? null : undefined,
        minBaths: patch.minBaths !== undefined ? patch.minBaths ?? null : undefined,
        minSqft: patch.minSqft !== undefined ? patch.minSqft ?? null : undefined,
        maxSqft: patch.maxSqft !== undefined ? patch.maxSqft ?? null : undefined,
        tags: patch.tags !== undefined ? patch.tags : undefined,
      });
    },
    [setState],
  );

  const clearFilters = useCallback(() => {
    setState(null);
  }, [setState]);

  return { filters, setFilters, clearFilters };
}
