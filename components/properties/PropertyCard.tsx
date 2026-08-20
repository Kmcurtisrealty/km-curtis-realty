import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Ruler } from "lucide-react";
import type { Property } from "@/lib/types/property";
import { StatusBadge } from "@/components/properties/StatusBadge";
import { formatPrice, formatNumber } from "@/lib/utils/formatPrice";
import { PROPERTY_TYPE_LABELS } from "@/lib/utils/labels";

interface PropertyCardProps {
  property: Property;
  /** Set true for the first few above-the-fold cards to skip lazy loading. */
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const primaryImage = property.images.find((img) => img.isPrimary) ?? property.images[0];
  const displayPrice = property.status === "sold" ? property.soldPrice ?? property.price : property.price;

  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-mist shadow-soft transition-shadow duration-300 group-hover:shadow-soft-lg">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : null}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <StatusBadge status={property.status} />
          {property.isDemo ? (
            <span className="inline-flex items-center rounded-full bg-shell/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/60 border border-ink/10">
              Demo Listing
            </span>
          ) : null}
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-display text-xl text-ink">{formatPrice(displayPrice)}</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-marsh">
            {PROPERTY_TYPE_LABELS[property.propertyType]}
          </p>
        </div>
        <p className="mt-1 text-sm text-ink/80">{property.address}</p>
        <p className="text-sm text-ink/60">
          {property.city}, {property.state} {property.zip}
        </p>

        {property.beds || property.baths || property.sqft ? (
          <div className="mt-3 flex items-center gap-4 text-xs text-ink/70">
            {property.beds ? (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="h-3.5 w-3.5" aria-hidden="true" /> {property.beds} Beds
              </span>
            ) : null}
            {property.baths ? (
              <span className="inline-flex items-center gap-1.5">
                <Bath className="h-3.5 w-3.5" aria-hidden="true" />
                {property.baths}
                {property.halfBaths ? `.5` : ""} Baths
              </span>
            ) : null}
            {property.sqft ? (
              <span className="inline-flex items-center gap-1.5">
                <Ruler className="h-3.5 w-3.5" aria-hidden="true" /> {formatNumber(property.sqft)} Sq Ft
              </span>
            ) : null}
          </div>
        ) : null}

        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.12em] text-bay-teal underline underline-offset-4 decoration-bay-teal/40 group-hover:decoration-bay-teal">
          View Property
        </span>
      </div>
    </Link>
  );
}
