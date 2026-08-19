import { Compass, Handshake, MapPinned, Video } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: MapPinned,
    title: "Local, Block by Block",
    body: "From dock rights in Eastport to school lines in Severna Park, the details that actually affect your decision come from knowing the area, not just the listing sheet.",
  },
  {
    icon: Handshake,
    title: "Client-First Guidance",
    body: "Straightforward advice, whether that means telling you to wait, to walk away, or to move fast on the right home.",
  },
  {
    icon: Video,
    title: "Modern Storytelling",
    body: "Video and digital marketing, through American Dream TV and beyond, that helps your home and your search stand out.",
  },
  {
    icon: Compass,
    title: "A True Relocation Resource",
    body: "For buyers moving to Maryland from anywhere, a guide to communities, commutes, and the market itself — not just properties.",
  },
];

export function WhyKMCurtisSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Why KM Curtis Realty" title="Local Expertise, Genuinely Applied" align="center" className="mx-auto" />
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <pillar.icon className="h-7 w-7 text-bay-teal" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
