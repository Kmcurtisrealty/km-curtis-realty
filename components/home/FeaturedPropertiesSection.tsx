import type { Property } from "@/lib/types/property";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

interface FeaturedPropertiesSectionProps {
  eyebrow?: string;
  title: string;
  supporting?: string;
  properties: Property[];
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "shell" | "mist";
}

/**
 * Generic property-grid homepage section. Reused as-is for "Featured
 * Properties," "Waterfront Opportunities," and "Recent Sales" (spec §21) —
 * each just passes a differently-filtered property list rather than
 * becoming its own one-off component.
 */
export function FeaturedPropertiesSection({
  eyebrow,
  title,
  supporting,
  properties,
  ctaLabel = "View All Properties",
  ctaHref = "/properties",
  tone = "shell",
}: FeaturedPropertiesSectionProps) {
  if (properties.length === 0) return null;

  return (
    <section className={tone === "mist" ? "bg-mist/20 py-24" : "bg-shell py-24"}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} supporting={supporting} />
          <Button href={ctaHref} variant="secondary" className="shrink-0">
            {ctaLabel}
          </Button>
        </div>
        <div className="mt-12">
          <PropertyGrid properties={properties} priorityCount={3} />
        </div>
      </Container>
    </section>
  );
}
