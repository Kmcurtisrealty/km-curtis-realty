"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}

const hidden: Record<RevealDirection, string> = {
  up: "translate-y-12 opacity-0",
  left: "-translate-x-16 opacity-0",
  right: "translate-x-16 opacity-0",
};

/**
 * Fades + slides a whole block into place once it scrolls into view. Used
 * per homepage section (alternating direction) so the page feels like it's
 * arriving in motion rather than a static, all-at-once render.
 */
export function Reveal({ children, className, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : hidden[direction],
        className,
      )}
    >
      {children}
    </div>
  );
}
