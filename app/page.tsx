import { getFeaturedProperties } from "@/lib/data/properties";
import { Hero } from "@/components/home/Hero";
import { SearchHomesCTA } from "@/components/home/SearchHomesCTA";
import { FeaturedPropertiesSection } from "@/components/home/FeaturedPropertiesSection";
import { ExploreCommunitiesSection } from "@/components/home/ExploreCommunitiesSection";
import { WhyKMCurtisSection } from "@/components/home/WhyKMCurtisSection";
import { SellYourHomeSection } from "@/components/home/SellYourHomeSection";
import { AmericanDreamTVSection } from "@/components/home/AmericanDreamTVSection";
import { RelocationTeaserSection } from "@/components/home/RelocationTeaserSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  const featured = getFeaturedProperties(6);

  return (
    <>
      <Hero />
      <SearchHomesCTA />
      <FeaturedPropertiesSection
        eyebrow="Current Listings"
        title="Featured Properties"
        supporting="Explore a selection of homes currently available throughout Annapolis and the surrounding Chesapeake Bay communities."
        properties={featured}
        ctaLabel="View All Properties"
      />
      <ExploreCommunitiesSection />
      <WhyKMCurtisSection />
      <SellYourHomeSection />
      <AmericanDreamTVSection />
      <RelocationTeaserSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
