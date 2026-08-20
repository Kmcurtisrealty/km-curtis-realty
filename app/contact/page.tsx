import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { IntroSection } from "@/components/home/IntroSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Krissy Curtis Realty to talk through buying, selling, or relocating to the Annapolis and Chesapeake Bay region.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-marsh">Get in Touch</p>
          <h1 className="text-display-lg font-display text-ink">Let&rsquo;s Connect</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Whether you&rsquo;re buying, selling, or just starting to explore Annapolis and the
            Chesapeake Bay, tell us a bit about what you&rsquo;re looking for and we&rsquo;ll be
            in touch shortly.
          </p>

          <div className="mt-10 space-y-5">
            <a href="mailto:kmcurtisrealty@gmail.com" className="flex items-center gap-3 text-sm text-ink/80 hover:text-bay-teal">
              <Mail className="h-4 w-4 text-bay-teal" aria-hidden="true" />
              kmcurtisrealty@gmail.com
            </a>
            <a href="tel:+14105550148" className="flex items-center gap-3 text-sm text-ink/80 hover:text-bay-teal">
              <Phone className="h-4 w-4 text-bay-teal" aria-hidden="true" />
              (410) 555-0148
            </a>
            <p className="flex items-center gap-3 text-sm text-ink/80">
              <MapPin className="h-4 w-4 text-bay-teal" aria-hidden="true" />
              Annapolis, MD
            </p>
          </div>
        </div>

        <div className="rounded-card border border-mist bg-shell p-8 shadow-soft md:p-10">
          <ContactForm />
        </div>
      </Container>

      <IntroSection />
    </div>
  );
}
