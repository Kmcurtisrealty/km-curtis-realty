import { getAllTestimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const testimonials = getAllTestimonials();

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
            <figure key={testimonial.id} className="border border-shell/15 p-8">
              <blockquote className="font-display text-lg leading-snug text-shell/95">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.1em] text-shell/60">
                {testimonial.name} &middot; {testimonial.location}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.15em] text-shell/40">
          Placeholder testimonials shown for development — to be replaced with verified client
          reviews.
        </p>
      </Container>
    </section>
  );
}
