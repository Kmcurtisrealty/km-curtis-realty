"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/components/layout/navItems";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-mist/70 bg-shell/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="KM Curtis Realty home">
          <Image src="/images/brand/km-monogram.svg" alt="" width={44} height={44} priority />
          <span className="hidden font-display text-lg text-ink sm:block">
            KM Curtis Realty
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/80 transition-colors hover:text-bay-teal"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div
                  className={cn(
                    "absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 pt-3 transition-opacity duration-150",
                    openDropdown === item.label ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <div className="border border-mist bg-shell shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-xs font-medium uppercase tracking-wide text-ink/80 hover:bg-mist/50 hover:text-bay-teal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Let&rsquo;s Connect
          </Button>
        </div>

        <button
          type="button"
          className="p-2 text-ink lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
