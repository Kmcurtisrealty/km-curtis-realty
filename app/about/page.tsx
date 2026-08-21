import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RotatingTestimonials } from "@/components/ui/RotatingTestimonials";
import { getAllTestimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Krissy Curtis, serving Annapolis and the Chesapeake Bay region.",
};

export default function AboutPage() {
  const testimonials = getAllTestimonials();

  return (
    <>
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-card shadow-soft md:order-1">
            <Image
              src="/images/brand/krissy-agent-photo.png"
              alt="Krissy Curtis"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">About</p>
            <h1 className="text-display-lg font-display text-ink">Krissy Curtis</h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
              <p>
                As a lifelong Anne Arundel County resident and South County waterfront specialist,
                Krissy Curtis combines local expertise with a passion for helping clients achieve
                their real estate goals. With more than 150 successful transactions, she provides
                expert guidance, skilled negotiation, and clear communication to make every buying
                or selling experience seamless and stress-free.
              </p>
              <p>
                Krissy is also the host of the award-winning television show American Dream TV,
                where she showcases the best of Annapolis, South County, waterfront living, local
                businesses, and the lifestyle that makes the Chesapeake Bay region such a special
                place to call home.
              </p>
              <p>
                Whether you&rsquo;re buying your dream waterfront home, relocating to the Annapolis
                area, or selling your property, Krissy delivers personalized service, strategic
                marketing, and trusted advice every step of the way.
              </p>
              <p>
                Proudly based in Shady Side, Krissy is dedicated to serving the community she calls
                home.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Let&rsquo;s Connect
              </Button>
              <Button href="/properties" variant="secondary" size="lg">
                Search Homes
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {testimonials.length > 0 ? (
        <section className="bg-bg-alt py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Client Stories" title="What Clients Say" align="center" className="mx-auto" />
            <div className="mt-10">
              <RotatingTestimonials testimonials={testimonials} />
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
