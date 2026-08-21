import { getAllCommunities } from "@/lib/data/communities";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

/**
 * The primary nav from the spec (§3), minus /relocate and /lifestyle
 * (removed) and the redundant "Let's Connect" text link — the header and
 * mobile nav each already surface a dedicated "Let's Connect" button, so it
 * isn't duplicated here as a plain nav item.
 *
 * The Communities dropdown is generated from lib/data/communities.ts so
 * every community automatically appears in the nav without hand-maintaining
 * a second list.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Properties", href: "/properties" },
  {
    label: "Communities",
    href: "/communities/annapolis",
    children: getAllCommunities().map((c) => ({
      label: c.name,
      href: `/communities/${c.slug}`,
    })),
  },
  { label: "American Dream TV", href: "/american-dream-tv" },
  { label: "About", href: "/about" },
];
