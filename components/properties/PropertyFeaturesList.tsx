import type { FeatureGroup } from "@/lib/types/property";

interface PropertyFeaturesListProps {
  features: FeatureGroup[];
}

/**
 * Features & Amenities (spec §11): categories are only rendered when they
 * have data — an empty category is omitted entirely, never shown empty.
 */
export function PropertyFeaturesList({ features }: PropertyFeaturesListProps) {
  const groups = features.filter((group) => group.items.length > 0);
  if (groups.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="mb-3 font-display text-lg text-ink">{group.category}</h3>
          <ul className="space-y-1.5">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-marsh" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
