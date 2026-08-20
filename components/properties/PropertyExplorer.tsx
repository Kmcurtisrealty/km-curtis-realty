"use client";

import { Suspense } from "react";
import type { Property } from "@/lib/types/property";
import { filterProperties } from "@/lib/utils/filterProperties";
import { usePropertyFilters } from "@/components/properties/usePropertyFilters";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyFilterDrawer } from "@/components/properties/PropertyFilterDrawer";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

interface PropertyExplorerProps {
  /** Already-scoped candidate list — e.g. all properties, or one community's. */
  properties: Property[];
}

function PropertyExplorerSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/3] w-full rounded-card bg-mist" />
          <div className="mt-4 h-4 w-2/3 rounded-full bg-mist" />
          <div className="mt-2 h-3 w-1/2 rounded-full bg-mist" />
        </div>
      ))}
    </div>
  );
}

/**
 * Search/filter + results experience shared by /properties and every
 * community page: URL-synced filters (usePropertyFilters/nuqs), a desktop
 * sidebar panel, a mobile bottom-sheet drawer, and the results grid.
 *
 * usePropertyFilters reads the URL via nuqs (useSearchParams under the
 * hood), which Next.js requires to be wrapped in a Suspense boundary
 * during static generation — hence the inner/outer split below.
 */
export function PropertyExplorer(props: PropertyExplorerProps) {
  return (
    <Suspense fallback={<PropertyExplorerSkeleton />}>
      <PropertyExplorerInner {...props} />
    </Suspense>
  );
}

function PropertyExplorerInner({ properties }: PropertyExplorerProps) {
  const { filters, setFilters, clearFilters } = usePropertyFilters();
  const results = filterProperties(properties, filters);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <h2 className="mb-6 font-display text-xl text-ink">Refine Your Search</h2>
          <PropertyFilters filters={filters} onChange={setFilters} onClear={clearFilters} resultCount={results.length} />
        </div>
      </aside>

      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-ink/60">
            {results.length} {results.length === 1 ? "property" : "properties"}
          </p>
          <PropertyFilterDrawer filters={filters} onChange={setFilters} onClear={clearFilters} resultCount={results.length} />
        </div>
        <PropertyGrid properties={results} priorityCount={3} />
      </div>
    </div>
  );
}
