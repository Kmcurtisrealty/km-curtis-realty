"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}

/**
 * Reveals its children in a left-to-right staggered slide-in once the
 * container scrolls into view. Used for grid sections where items should
 * feel like they're arriving in succession rather than popping in at once.
 */
export function StaggerReveal({ children, className, itemClassName }: StaggerRevealProps) {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={cn(
            "transition-all duration-700 ease-out",
            visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            itemClassName,
          )}
          style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
