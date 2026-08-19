import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/data/properties";
import { getAllCommunitySlugs } from "@/lib/data/communities";

const SITE_URL = "https://www.kmcurtisrealty.com";

const STATIC_ROUTES = [
  "",
  "/buy",
  "/sell",
  "/relocate",
  "/properties",
  "/lifestyle",
  "/american-dream-tv",
  "/about",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const communityEntries: MetadataRoute.Sitemap = getAllCommunitySlugs().map((slug) => ({
    url: `${SITE_URL}/communities/${slug}`,
    lastModified: new Date(),
  }));

  // Demo listings carry `robots: noindex` and are intentionally excluded
  // here too — this list only grows once real (isDemo: false) MLS data is
  // in place.
  const propertyEntries: MetadataRoute.Sitemap = getAllProperties()
    .filter((property) => !property.isDemo)
    .map((property) => ({
      url: `${SITE_URL}/properties/${property.slug}`,
      lastModified: property.soldAt ?? property.listedAt ?? new Date(),
    }));

  return [...staticEntries, ...communityEntries, ...propertyEntries];
}
