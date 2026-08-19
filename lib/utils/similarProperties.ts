import type { Property } from "@/lib/types/property";

/**
 * Score + rank other properties by similarity to `subject` — matching on
 * location (community/city), price proximity, property type, and
 * beds/baths — returning between `min` and `max` results ("You May Also
 * Like").
 */
export function findSimilarProperties(
  subject: Property,
  candidates: Property[],
  { min = 3, max = 6 }: { min?: number; max?: number } = {},
): Property[] {
  const scored = candidates
    .filter((p) => p.id !== subject.id)
    .map((property) => {
      let score = 0;

      if (property.communitySlug && property.communitySlug === subject.communitySlug) {
        score += 4;
      } else if (property.city === subject.city) {
        score += 2;
      }

      if (property.propertyType === subject.propertyType) {
        score += 3;
      }

      const priceDelta = Math.abs(property.price - subject.price) / subject.price;
      if (priceDelta <= 0.15) score += 3;
      else if (priceDelta <= 0.3) score += 2;
      else if (priceDelta <= 0.5) score += 1;

      if (property.beds === subject.beds) score += 1;
      if (property.baths === subject.baths) score += 1;

      if (property.waterfront === subject.waterfront && subject.waterfront) score += 1;

      return { property, score };
    })
    .sort((a, b) => b.score - a.score);

  const result = scored.slice(0, max).map((s) => s.property);

  // If not enough strong matches, backfill with any other active properties
  // so the section still meets the minimum count called for in the plan.
  if (result.length < min) {
    const usedIds = new Set(result.map((p) => p.id));
    for (const property of candidates) {
      if (result.length >= min) break;
      if (property.id === subject.id || usedIds.has(property.id)) continue;
      result.push(property);
      usedIds.add(property.id);
    }
  }

  return result.slice(0, max);
}
