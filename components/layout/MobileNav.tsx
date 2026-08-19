"use client";

import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/components/layout/navItems";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-ink text-shell transition-transform duration-300 ease-in-out md:hidden",
        open ? "translate-x-0" : "translate-x-full pointer-events-none",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <Image src="/images/brand/km-monogram.svg" alt="KM Curtis Realty" width={40} height={40} />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-shell hover:text-mist"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-6 py-4 overflow-y-auto max-h-[calc(100vh-96px)]">
        {NAV_ITEMS.map((item) => (
          <div key={item.href} className="border-b border-shell/10 py-2">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="font-display text-2xl py-2"
              >
                {item.label}
              </Link>
              {item.children ? (
                <button
                  type="button"
                  aria-label={`Toggle ${item.label} submenu`}
                  onClick={() => setExpanded((cur) => (cur === item.label ? null : item.label))}
                  className="p-2"
                >
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", expanded === item.label && "rotate-180")}
                  />
                </button>
              ) : null}
            </div>
            {item.children && expanded === item.label ? (
              <div className="flex flex-col gap-1 pb-2 pl-4">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="py-1.5 text-sm text-shell/80 hover:text-shell"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}

        <div className="mt-6">
          <Button href="/contact" variant="clay" size="lg" className="w-full" onClick={onClose}>
            Let&rsquo;s Connect
          </Button>
        </div>
      </nav>
    </div>
  );
}
