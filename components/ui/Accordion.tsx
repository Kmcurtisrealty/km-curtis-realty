"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** IDs expanded by default. */
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({ items, defaultOpen = [], className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-mist border-y border-mist", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg text-ink">{item.title}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-marsh transition-transform duration-200", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              className={cn("grid overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0")}
            >
              <div className="min-h-0 text-sm leading-relaxed text-ink/75">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
