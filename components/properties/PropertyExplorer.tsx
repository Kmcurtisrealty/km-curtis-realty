"use client";

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

/**
 * Search/filter + results experience shared by /properties and every
 * community page: URL-synced filters (usePropertyFilters/nuqs), a desktop
 * sidebar panel, a mobile bottom-sheet drawer, and the results grid.
 */
export function PropertyExplorer({ properties }: PropertyExplorerProps) {
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
