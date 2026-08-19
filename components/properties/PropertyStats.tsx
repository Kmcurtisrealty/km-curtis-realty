import type { Property } from "@/lib/types/property";
import { formatNumber } from "@/lib/utils/formatPrice";

interface PropertyStatsProps {
  property: Property;
}

export function PropertyStats({ property }: PropertyStatsProps) {
  const stats: { label: string; value: string }[] = [];

  if (property.beds) stats.push({ label: "Bedrooms", value: String(property.beds) });
  if (property.baths) {
    stats.push({
      label: "Bathrooms",
      value: property.halfBaths ? `${property.baths}.5` : String(property.baths),
    });
  }
  if (property.sqft) stats.push({ label: "Sq Ft", value: formatNumber(property.sqft) });
  if (property.lotSizeAcres) stats.push({ label: "Lot Size", value: `${property.lotSizeAcres} ac` });
  if (property.yearBuilt) stats.push({ label: "Year Built", value: String(property.yearBuilt) });

  if (stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-6 border-y border-mist py-8 sm:grid-cols-3 md:grid-cols-5">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-3xl text-ink">{stat.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-marsh">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
