import type { Property } from "@/lib/types/property";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

interface PropertyGridProps {
  properties: Property[];
  emptyMessage?: string;
  /** How many leading cards get `priority` image loading. */
  priorityCount?: number;
}

export function PropertyGrid({
  properties,
  emptyMessage = "No properties match your search right now. Try adjusting your filters, or reach out and we'll help you find the right fit.",
  priorityCount = 0,
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-mist bg-bg-alt/60 px-6 py-16 text-center">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-ink/60">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <StaggerReveal className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} priority={index < priorityCount} />
      ))}
    </StaggerReveal>
  );
}
