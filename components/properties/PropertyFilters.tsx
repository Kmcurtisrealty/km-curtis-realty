"use client";

import { FILTER_DEFINITIONS, isFilterStateEmpty, type PropertyFilterState } from "@/lib/utils/filterProperties";
import type { PropertyStatus, PropertyTag, PropertyType } from "@/lib/types/property";
import { cn } from "@/lib/utils/cn";

interface PropertyFiltersProps {
  filters: PropertyFilterState;
  onChange: (patch: Partial<PropertyFilterState>) => void;
  onClear: () => void;
  resultCount?: number;
  className?: string;
}

function toggleInArray<T extends string>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

/**
 * Renders every filter control described by FILTER_DEFINITIONS. Adding a
 * new filter (another tag, another range) means adding one entry to that
 * config array — this component never needs new markup for it.
 */
export function PropertyFilters({ filters, onChange, onClear, resultCount, className }: PropertyFiltersProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {FILTER_DEFINITIONS.map((def) => {
        if (def.kind === "text") {
          return (
            <div key={def.key}>
              <label htmlFor="filter-location" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-marsh">
                {def.label}
              </label>
              <input
                id="filter-location"
                type="text"
                value={filters.location}
                onChange={(e) => onChange({ location: e.target.value })}
                placeholder={def.placeholder}
                className="w-full border border-mist bg-shell px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-bay-teal focus:outline-none"
              />
            </div>
          );
        }

        if (def.kind === "multiSelect" && def.options) {
          const key = def.key as "propertyType" | "status" | "tags";
          const selected = filters[key] as string[];
          return (
            <div key={def.key}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-marsh">{def.label}</p>
              <div className="flex flex-wrap gap-2">
                {def.options.map((opt) => {
                  const active = selected.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        onChange({
                          [key]: toggleInArray(selected as (PropertyType | PropertyStatus | PropertyTag)[], opt.value as PropertyType | PropertyStatus | PropertyTag),
                        } as Partial<PropertyFilterState>)
                      }
                      aria-pressed={active}
                      className={cn(
                        "border px-3 py-2 text-xs font-medium transition-colors",
                        active
                          ? "border-bay-teal bg-bay-teal text-shell"
                          : "border-mist text-ink/70 hover:border-bay-teal/50",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }

        if (def.kind === "priceRange") {
          return (
            <div key={def.key}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-marsh">{def.label}</p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Min"
                  value={filters.minPrice ?? ""}
                  onChange={(e) => onChange({ minPrice: e.target.value ? Number(e.target.value) : undefined })}
                  className="w-full border border-mist bg-shell px-3 py-2.5 text-sm focus:border-bay-teal focus:outline-none"
                />
                <span className="text-ink/40">–</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Max"
                  value={filters.maxPrice ?? ""}
                  onChange={(e) => onChange({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
                  className="w-full border border-mist bg-shell px-3 py-2.5 text-sm focus:border-bay-teal focus:outline-none"
                />
              </div>
            </div>
          );
        }

        if (def.kind === "numberRange") {
          return (
            <div key={def.key}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-marsh">{def.label}</p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Min"
                  value={filters.minSqft ?? ""}
                  onChange={(e) => onChange({ minSqft: e.target.value ? Number(e.target.value) : undefined })}
                  className="w-full border border-mist bg-shell px-3 py-2.5 text-sm focus:border-bay-teal focus:outline-none"
                />
                <span className="text-ink/40">–</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="Max"
                  value={filters.maxSqft ?? ""}
                  onChange={(e) => onChange({ maxSqft: e.target.value ? Number(e.target.value) : undefined })}
                  className="w-full border border-mist bg-shell px-3 py-2.5 text-sm focus:border-bay-teal focus:outline-none"
                />
              </div>
            </div>
          );
        }

        if (def.kind === "minValue" && def.options) {
          const key = def.key as "minBeds" | "minBaths";
          const current = filters[key];
          return (
            <div key={def.key}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-marsh">{def.label}</p>
              <div className="flex flex-wrap gap-2">
                {def.options.map((opt) => {
                  const value = Number(opt.value);
                  const active = current === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => onChange({ [key]: active ? undefined : value } as Partial<PropertyFilterState>)}
                      aria-pressed={active}
                      className={cn(
                        "h-10 w-14 border text-xs font-medium transition-colors",
                        active
                          ? "border-bay-teal bg-bay-teal text-shell"
                          : "border-mist text-ink/70 hover:border-bay-teal/50",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }

        return null;
      })}

      <div className="flex items-center justify-between border-t border-mist pt-6">
        {typeof resultCount === "number" ? (
          <p className="text-xs text-ink/50">
            {resultCount} {resultCount === 1 ? "home" : "homes"}
          </p>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onClear}
          disabled={isFilterStateEmpty(filters)}
          className="text-xs font-semibold uppercase tracking-[0.1em] text-bay-teal underline underline-offset-4 disabled:pointer-events-none disabled:text-ink/30 disabled:no-underline"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
