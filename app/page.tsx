import { Hero } from "@/components/home/Hero";
import { ExploreCommunitiesSection } from "@/components/home/ExploreCommunitiesSection";
import { WhyKMCurtisSection } from "@/components/home/WhyKMCurtisSection";
import { SellYourHomeSection } from "@/components/home/SellYourHomeSection";
import { AmericanDreamTVSection } from "@/components/home/AmericanDreamTVSection";
import { RelocationTeaserSection } from "@/components/home/RelocationTeaserSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal direction="left">
        <ExploreCommunitiesSection />
      </Reveal>
      <Reveal direction="up">
        <WhyKMCurtisSection />
      </Reveal>
      <Reveal direction="right">
        <SellYourHomeSection />
      </Reveal>
      <Reveal direction="left">
        <AmericanDreamTVSection />
      </Reveal>
      <Reveal direction="right">
        <RelocationTeaserSection />
      </Reveal>
      <Reveal direction="up">
        <TestimonialsSection />
      </Reveal>
      <Reveal direction="up">
        <FinalCTASection />
      </Reveal>
    </>
  );
}
