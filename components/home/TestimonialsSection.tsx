import Image from "next/image";
import { getAllTestimonials } from "@/lib/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatingTestimonials } from "@/components/ui/RotatingTestimonials";

export function TestimonialsSection() {
  const testimonials = getAllTestimonials();

  return (
    <section className="bg-ink py-24 text-shell">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-card shadow-soft">
            <Image
              src="/images/brand/testimonials-photo.jpg"
              alt="Krissy Curtis"
              fill
              sizes="(min-width: 768px) 30vw, 80vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Client Stories" title={<span className="text-shell">What Clients Say</span>} />
            <div className="mt-10">
              <RotatingTestimonials testimonials={testimonials} variant="dark" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
