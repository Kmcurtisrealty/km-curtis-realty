/**
 * Placeholder testimonials. These are clearly fictional and must be
 * replaced with verified client reviews before launch — the master spec
 * (§28, §40) requires "verified client reviews only."
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  isDemo: true;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-001",
    quote:
      "Krissy knew Eastport block by block — which streets flooded, which docks had deep water, all of it. We closed on our waterfront home in six weeks and never felt out of the loop once.",
    name: "Demo Testimonial — J. & M. Harmon",
    location: "Annapolis, MD",
    isDemo: true,
  },
  {
    id: "testimonial-002",
    quote:
      "We were relocating from out of state with two kids and a tight school-district requirement. She had us in Severna Park in under two months and made the whole process feel manageable.",
    name: "Demo Testimonial — The Alvarez Family",
    location: "Severna Park, MD",
    isDemo: true,
  },
  {
    id: "testimonial-003",
    quote:
      "Selling our condo could have been stressful, but the marketing and staging guidance meant we had an offer above ask within the first week on market.",
    name: "Demo Testimonial — R. Okafor",
    location: "Downtown Annapolis, MD",
    isDemo: true,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
