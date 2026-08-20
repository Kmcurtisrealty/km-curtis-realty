import { Check } from "lucide-react";
import type { PropertyStatus } from "@/lib/types/property";
import { STATUS_LABELS } from "@/lib/utils/labels";
import { cn } from "@/lib/utils/cn";

interface StatusBadgeProps {
  status: PropertyStatus;
  className?: string;
}

const styles: Record<PropertyStatus, string> = {
  "for-sale": "bg-bay-teal text-shell",
  "coming-soon": "border border-marsh text-marsh bg-transparent",
  pending: "bg-mist text-ink",
  "active-under-contract": "bg-clay text-ink",
  sold: "bg-ink text-shell",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em]",
        styles[status],
        className,
      )}
    >
      {status === "sold" ? <Check className="h-3 w-3" aria-hidden="true" /> : null}
      {STATUS_LABELS[status]}
    </span>
  );
}
