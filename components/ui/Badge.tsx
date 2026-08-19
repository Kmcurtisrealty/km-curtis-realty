import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "solid" | "outline" | "muted" | "dusty" | "demo";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  solid: "bg-bay-teal text-shell",
  outline: "border border-marsh text-marsh bg-transparent",
  muted: "bg-mist text-ink",
  dusty: "bg-dusty-blue text-shell",
  demo: "bg-shell/90 text-ink/70 border border-ink/15",
};

export function Badge({ children, variant = "solid", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
