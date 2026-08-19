import type { Property } from "@/lib/types/property";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

interface SimilarPropertiesProps {
  properties: Property[];
}

export function SimilarProperties({ properties }: SimilarPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <section>
      <SectionHeading eyebrow="Keep Exploring" title="You May Also Like" />
      <div className="mt-10">
        <PropertyGrid properties={properties} />
      </div>
    </section>
  );
}
