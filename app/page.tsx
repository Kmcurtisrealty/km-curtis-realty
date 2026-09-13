import { Hero } from "@/components/home/Hero";
import { WhyKMCurtisSection } from "@/components/home/WhyKMCurtisSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal direction="up">
        <WhyKMCurtisSection />
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
