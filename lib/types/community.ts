/**
 * Community / location data model.
 *
 * Community pages are rendered from a single reusable template
 * (components/communities/CommunityOverview.tsx) driven entirely by this
 * data. New communities are added by appending an entry to
 * lib/data/communities.ts — never by hand-building a new page.
 */

export interface CommunitySeoOverrides {
  title?: string;
  description?: string;
}

export interface Community {
  slug: string;
  name: string;
  heroImage: {
    src: string;
    alt: string;
  };
  /** Short one-line positioning shown near the hero. */
  tagline: string;
  description: string;
  lifestyle: string;
  waterfront: string;
  schools: string;
  commute: string;
  neighborhoods: string[];
  localAttractions: string[];
  relocationInfo: string;
  /**
   * Optional explicit override list of property slugs to feature on this
   * community page. When absent, the template falls back to querying
   * properties by communitySlug.
   */
  featuredPropertySlugs?: string[];
  seo?: CommunitySeoOverrides;
}
