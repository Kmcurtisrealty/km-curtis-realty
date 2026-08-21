import { getAllTestimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const testimonials = [...getAllTestimonials()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="bg-ink py-24 text-shell">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title={<span className="text-shell">What Clients Say</span>}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="rounded-card border border-shell/15 p-8">
              <blockquote className="font-display text-lg leading-snug text-shell/95">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.1em] text-shell/60">
                {testimonial.name} &middot; {testimonial.location}
                <span className="block normal-case tracking-normal text-shell/40">
                  via {testimonial.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
