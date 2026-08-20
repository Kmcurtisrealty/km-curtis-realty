"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import type { PropertyFilterState } from "@/lib/utils/filterProperties";
import { isFilterStateEmpty } from "@/lib/utils/filterProperties";
import { cn } from "@/lib/utils/cn";

interface PropertyFilterDrawerProps {
  filters: PropertyFilterState;
  onChange: (patch: Partial<PropertyFilterState>) => void;
  onClear: () => void;
  resultCount: number;
}

/**
 * Mobile filter experience (spec §10/§37): a bottom-sheet drawer so the
 * property grid stays full-width and thumb-friendly on small screens
 * instead of cramming the desktop filter panel into the same layout.
 */
export function PropertyFilterDrawer({ filters, onChange, onClear, resultCount }: PropertyFilterDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-3 text-xs font-medium uppercase tracking-[0.1em] text-ink"
      >
        <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
        Filters
        {!isFilterStateEmpty(filters) ? <span className="ml-1 h-1.5 w-1.5 rounded-full bg-clay" /> : null}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter properties"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-[28px] bg-shell px-6 pb-6 pt-5 shadow-soft-lg transition-transform duration-300 ease-in-out",
          open ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-display text-xl text-ink">Filter Properties</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close filters" className="p-2 text-ink/60">
            <X className="h-5 w-5" />
          </button>
        </div>

        <PropertyFilters filters={filters} onChange={onChange} onClear={onClear} resultCount={resultCount} className="pt-4" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-6 w-full rounded-full bg-bay-teal px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-shell shadow-soft"
        >
          Show {resultCount} {resultCount === 1 ? "Home" : "Homes"}
        </button>
      </div>
    </div>
  );
}
