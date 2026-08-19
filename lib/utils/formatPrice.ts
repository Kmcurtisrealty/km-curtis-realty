/** Format a whole-dollar price as "$895,000" (no cents). */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Compact form for stat displays, e.g. "$1.2M" / "$895K". */
export function formatPriceCompact(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `$${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${Math.round(value / 1000)}K`;
  }
  return formatPrice(value);
}

/** Format a whole number with thousands separators, e.g. "2,450". */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
