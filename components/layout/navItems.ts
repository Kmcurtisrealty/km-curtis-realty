export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

/** The full 11-item primary nav from the spec (§3). */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Properties", href: "/properties" },
  {
    label: "Communities",
    href: "/communities/annapolis",
    children: [
      { label: "Annapolis", href: "/communities/annapolis" },
      { label: "Severna Park", href: "/communities/severna-park" },
    ],
  },
  { label: "American Dream TV", href: "/american-dream-tv" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Let's Connect", href: "/contact" },
];
