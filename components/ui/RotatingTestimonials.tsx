"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

interface RotatingTestimonialsProps {
  testimonials: Testimonial[];
  intervalMs?: number;
  variant?: "light" | "dark";
}

/** How many cards show faded on each side of the active one before fully hiding. */
const VISIBLE_RANGE = 2;

/**
 * Auto-advancing testimonial carousel. The active quote sits centered and
 * full-strength; neighboring quotes fan out behind it — shifted, scaled
 * down, rotated, and faded — so the next ones in line feel like they're
 * orbiting into place rather than just swapping. Pauses on hover/focus.
 */
export function RotatingTestimonials({ testimonials, intervalMs = 6000, variant = "light" }: RotatingTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused || n <= 1) return;
    const id = setInterval(() => setIndex((cur) => (cur + 1) % n), intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs, n]);

  if (n === 0) return null;
  const isDark = variant === "dark";

  function delta(i: number) {
    let d = i - index;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  return (
    <div>
      <div
        className="relative min-h-[340px] sm:min-h-[300px] md:min-h-[260px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {testimonials.map((t, i) => {
          const d = delta(i);
          const abs = Math.abs(d);
          if (abs > VISIBLE_RANGE) return null;
          const isFront = d === 0;
          const translateXPct = d * 22;
          const translateY = abs * 16;
          const scale = 1 - abs * 0.14;
          const rotate = d * 5;
          const opacity = isFront ? 1 : Math.max(0, 0.32 - abs * 0.1);

          return (
            <div
              key={t.id}
              aria-hidden={!isFront}
              className={cn(
                "absolute inset-x-0 top-1/2 rounded-card border p-8 shadow-soft-lg transition-all duration-700 ease-out md:p-10",
                isDark
                  ? isFront
                    ? "border-shell/20 bg-shell"
                    : "border-shell/15 bg-shell/5"
                  : "border-mist bg-bg-alt",
              )}
              style={{
                transform: `translate(${translateXPct}%, calc(-50% + ${translateY}px)) scale(${scale}) rotate(${rotate}deg)`,
                opacity,
                zIndex: 10 - abs,
                pointerEvents: isFront ? "auto" : "none",
              }}
            >
              <blockquote
                className={cn(
                  "line-clamp-6 font-display text-xl leading-snug md:text-2xl",
                  isDark ? (isFront ? "text-ink" : "text-shell/95") : "text-ink",
                )}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                className={cn(
                  "mt-6 text-xs font-medium uppercase tracking-[0.12em]",
                  isDark ? (isFront ? "text-marsh" : "text-shell/60") : "text-marsh",
                )}
              >
                {t.name} &middot; {t.location}
                <span
                  className={cn(
                    "block normal-case tracking-normal",
                    isDark ? (isFront ? "text-ink/40" : "text-shell/40") : "text-ink/40",
                  )}
                >
                  via {t.source}
                </span>
              </figcaption>
            </div>
          );
        })}
      </div>

      {n > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index
                  ? "bg-bay-teal"
                  : isDark
                    ? "bg-shell/25 hover:bg-shell/50"
                    : "bg-mist hover:bg-marsh/50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
