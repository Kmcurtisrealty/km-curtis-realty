import { getAllTestimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatingTestimonials } from "@/components/ui/RotatingTestimonials";

export function TestimonialsSection() {
  const testimonials = getAllTestimonials();

  return (
    <section className="bg-ink py-24 text-shell">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Client Stories"
          title={<span className="text-shell">What Clients Say</span>}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <RotatingTestimonials testimonials={testimonials} variant="dark" />
        </div>
      </Container>
    </section>
  );
}
