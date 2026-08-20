import { BookOpen, Home, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const guides = [
  { icon: Home, title: "Buyer's Guide", body: "What to expect from search to settlement in today's Annapolis-area market." },
  { icon: BookOpen, title: "Seller's Guide", body: "How to prepare, price, and market your home for the strongest result." },
  { icon: MapPin, title: "Relocation Guide", body: "A first look at Maryland communities, commutes, and where to start." },
];

export function GuidesTeaserSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Resources" title="Guides for Every Step" align="center" className="mx-auto" />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {guides.map((guide) => (
            <div key={guide.title} className="rounded-card border border-mist bg-shell p-8 text-center shadow-soft">
              <guide.icon className="mx-auto h-7 w-7 text-bay-teal" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{guide.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{guide.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/resources" variant="secondary" size="lg">
            Browse All Resources
          </Button>
        </div>
      </Container>
    </section>
  );
}
