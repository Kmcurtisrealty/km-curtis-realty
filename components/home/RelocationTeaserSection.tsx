import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Commuting to Washington, D.C. or Baltimore",
  "Living near Fort Meade or BWI",
  "Choosing between waterfront and top school districts",
  "Understanding Annapolis vs. Severna Park vs. the county at large",
];

export function RelocationTeaserSection() {
  return (
    <section className="bg-mist/25 py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
        <SectionHeading
          eyebrow="Moving to Maryland"
          title="A Relocation Resource, Not Just a Listing Search"
          supporting="Relocating buyers deal with more than square footage — commute times, school boundaries, and community fit all matter just as much. We help you sort through it before you ever tour a home."
        />
        <div className="flex flex-col justify-between gap-8">
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Button href="/relocate" variant="primary" size="lg">
              Explore Relocation Resources
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
