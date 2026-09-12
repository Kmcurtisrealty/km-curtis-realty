"use client";

import { useEffect, useState } from "react";
import type { Property } from "@/lib/types/property";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { cn } from "@/lib/utils/cn";

interface RotatingPropertySalesProps {
  properties: Property[];
  pageSize?: number;
  intervalMs?: number;
}

/**
 * Shows `pageSize` sold properties at a time and auto-advances through the
 * full list in pages, so a larger track record can rotate through without
 * turning "Recent Sales" into an ever-growing static grid. Pauses on
 * hover/focus. Mirrors the pacing of RotatingTestimonials.
 */
export function RotatingPropertySales({ properties, pageSize = 3, intervalMs = 6000 }: RotatingPropertySalesProps) {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pageCount = Math.ceil(properties.length / pageSize);

  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pageCount), intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs, pageCount]);

  if (properties.length === 0) return null;

  const visible = properties.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div key={page} className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {visible.map((property, i) => (
          <PropertyCard key={property.id} property={property} priority={i === 0} />
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show recent sales page ${i + 1}`}
              onClick={() => setPage(i)}
              className={cn("h-2 w-2 rounded-full transition-colors", i === page ? "bg-bay-teal" : "bg-mist hover:bg-marsh/50")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
