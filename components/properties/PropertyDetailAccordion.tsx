import type { Property } from "@/lib/types/property";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";
import { formatPrice } from "@/lib/utils/formatPrice";

interface PropertyDetailAccordionProps {
  property: Property;
}

function findFeatures(property: Property, category: string): string[] {
  return property.features.find((f) => f.category === category)?.items ?? [];
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-marsh" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function KeyValueList({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="space-y-2">
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-mist/60 pb-2">
          <dt className="text-ink/50">{row.label}</dt>
          <dd className="text-right font-medium text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Expandable "Property Details" sections (spec §12): Interior, Exterior,
 * Area & Lot, Financial, Community, Utilities, Features — each omitted
 * entirely when there's no underlying data.
 */
export function PropertyDetailAccordion({ property }: PropertyDetailAccordionProps) {
  const items: AccordionItemData[] = [];

  const interior = findFeatures(property, "Interior");
  if (interior.length > 0) {
    items.push({ id: "interior", title: "Interior", content: <BulletList items={interior} /> });
  }

  const exterior = findFeatures(property, "Exterior");
  if (exterior.length > 0) {
    items.push({ id: "exterior", title: "Exterior", content: <BulletList items={exterior} /> });
  }

  const areaLotRows = [
    property.lotSizeAcres ? { label: "Lot Size", value: `${property.lotSizeAcres} acres` } : null,
    property.yearBuilt ? { label: "Year Built", value: String(property.yearBuilt) } : null,
    { label: "Property Type", value: property.propertyType.replace(/-/g, " ") },
    property.neighborhood ? { label: "Neighborhood", value: property.neighborhood } : null,
    property.taxInfo?.parcelId ? { label: "Parcel ID", value: property.taxInfo.parcelId } : null,
  ].filter((r): r is { label: string; value: string } => Boolean(r));
  if (areaLotRows.length > 0) {
    items.push({ id: "area-lot", title: "Area & Lot", content: <KeyValueList rows={areaLotRows} /> });
  }

  const financialRows = [
    { label: "List Price", value: formatPrice(property.price) },
    property.soldPrice ? { label: "Sold Price", value: formatPrice(property.soldPrice) } : null,
    property.taxInfo?.annualTaxAmount
      ? { label: `Annual Taxes${property.taxInfo.taxYear ? ` (${property.taxInfo.taxYear})` : ""}`, value: formatPrice(property.taxInfo.annualTaxAmount) }
      : null,
    property.hoa?.hasHoa && property.hoa.fee
      ? { label: `HOA Fee (${property.hoa.frequency ?? "n/a"})`, value: formatPrice(property.hoa.fee) }
      : null,
  ].filter((r): r is { label: string; value: string } => Boolean(r));
  if (financialRows.length > 0) {
    items.push({ id: "financial", title: "Financial", content: <KeyValueList rows={financialRows} /> });
  }

  const communityItems = findFeatures(property, "Community");
  const schoolRows = property.schoolInfo
    ? [
        property.schoolInfo.elementarySchool ? { label: "Elementary School", value: property.schoolInfo.elementarySchool } : null,
        property.schoolInfo.middleSchool ? { label: "Middle School", value: property.schoolInfo.middleSchool } : null,
        property.schoolInfo.highSchool ? { label: "High School", value: property.schoolInfo.highSchool } : null,
        property.schoolInfo.schoolDistrict ? { label: "School District", value: property.schoolInfo.schoolDistrict } : null,
      ].filter((r): r is { label: string; value: string } => Boolean(r))
    : [];
  if (communityItems.length > 0 || schoolRows.length > 0) {
    items.push({
      id: "community",
      title: "Community",
      content: (
        <div className="space-y-4">
          {communityItems.length > 0 ? <BulletList items={communityItems} /> : null}
          {schoolRows.length > 0 ? <KeyValueList rows={schoolRows} /> : null}
        </div>
      ),
    });
  }

  const utilityRows = [
    property.hoa?.hasHoa && property.hoa.includes?.length ? { label: "HOA Includes", value: property.hoa.includes.join(", ") } : null,
    property.garageSpaces ? { label: "Garage Spaces", value: String(property.garageSpaces) } : null,
  ].filter((r): r is { label: string; value: string } => Boolean(r));
  if (utilityRows.length > 0) {
    items.push({ id: "utilities", title: "Utilities", content: <KeyValueList rows={utilityRows} /> });
  }

  const appliances = findFeatures(property, "Appliances");
  const waterfrontFeatures = findFeatures(property, "Waterfront");
  const parking = findFeatures(property, "Parking");
  const remainingFeatures = [...appliances, ...waterfrontFeatures, ...parking];
  if (remainingFeatures.length > 0) {
    items.push({ id: "features", title: "Additional Features", content: <BulletList items={remainingFeatures} /> });
  }

  if (items.length === 0) return null;

  return <Accordion items={items} defaultOpen={[items[0].id]} />;
}
