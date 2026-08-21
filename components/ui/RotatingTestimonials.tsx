"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

interface RotatingTestimonialsProps {
  testimonials: Testimonial[];
  intervalMs?: number;
}

/**
 * Auto-advancing single-testimonial rotator (distinct from the static grid
 * used in the homepage's TestimonialsSection). Pauses on hover/focus so it
 * doesn't fight a reader mid-quote.
 */
export function RotatingTestimonials({ testimonials, intervalMs = 6000 }: RotatingTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const id = setInterval(() => {
      setIndex((cur) => (cur + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs, testimonials.length]);

  if (testimonials.length === 0) return null;
  const current = testimonials[index];

  return (
    <div
      className="rounded-card border border-mist bg-bg-alt p-8 md:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <blockquote key={current.id} className="animate-fade-in font-display text-xl leading-snug text-ink md:text-2xl">
        &ldquo;{current.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-marsh">
        {current.name} &middot; {current.location}
      </figcaption>

      {testimonials.length > 1 ? (
        <div className="mt-8 flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index ? "bg-bay-teal" : "bg-mist hover:bg-marsh/50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
