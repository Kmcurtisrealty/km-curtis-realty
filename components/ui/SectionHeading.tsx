import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, supporting, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-marsh">{eyebrow}</p>
      ) : null}
      <h2 className="text-display-md font-display text-ink">{title}</h2>
      {supporting ? <p className="mt-4 text-base leading-relaxed text-ink/70">{supporting}</p> : null}
    </div>
  );
}
