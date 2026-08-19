import { MapPin } from "lucide-react";
import type { Property } from "@/lib/types/property";

interface PropertyMapProps {
  property: Property;
}

/**
 * Provider-agnostic map placeholder (spec §13). Deliberately does not embed
 * a specific map SDK yet — a future provider (Mapbox, Google Maps, etc.)
 * can be dropped in here without other components needing to change. Also
 * respects `approximateLocationOnly`: never claims to show a precise pin
 * when the MLS feed doesn't permit it.
 */
export function PropertyMap({ property }: PropertyMapProps) {
  if (property.lat === undefined || property.lng === undefined) return null;

  return (
    <div className="border border-mist bg-mist/30">
      <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,_rgba(46,74,76,0.12),_transparent_65%)] text-center">
        <MapPin className="h-8 w-8 text-bay-teal" aria-hidden="true" />
        <div>
          <p className="font-display text-lg text-ink">
            {property.city}, {property.state}
          </p>
          <p className="text-xs text-ink/50">
            {property.approximateLocationOnly ? "Approximate location shown" : "Exact location shown"}
          </p>
        </div>
      </div>
      <p className="border-t border-mist px-4 py-3 text-xs text-ink/50">
        Map integration coming soon. Coordinates: {property.lat.toFixed(3)}, {property.lng.toFixed(3)}
        {property.approximateLocationOnly ? " (approximate area only)" : ""}.
      </p>
    </div>
  );
}
