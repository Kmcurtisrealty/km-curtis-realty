import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { NAV_ITEMS } from "@/components/layout/navItems";
import { Container } from "@/components/ui/Container";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/km_curtis_realty/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/KrissyCurtisRealty", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@KrissyCurtis", Icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/@krissy_curtis", Icon: TikTokIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kristen-curtis-9bb455181/", Icon: Linkedin },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-ink pb-28 pt-16 text-shell md:pb-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/brand/km-logo-white.png" alt="KM Curtis Realty" width={44} height={44} />
              <span className="font-display text-lg">Krissy Curtis Realty</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-shell/70">
              Real estate, Maryland living, and your next chapter — serving Annapolis and the
              Chesapeake Bay region.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-shell/70 transition-colors hover:text-shell"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-shell/50">Explore</p>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-shell/80 hover:text-shell">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-shell/50">More</p>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-shell/80 hover:text-shell">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-shell/50">Contact</p>
            <ul className="space-y-2 text-sm text-shell/80">
              <li>
                <a href="mailto:kmcurtisrealty@gmail.com" className="hover:text-shell">
                  kmcurtisrealty@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14105550148" className="hover:text-shell">
                  (410) 555-0148
                </a>
              </li>
              <li>Annapolis, MD</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-shell/10 pt-8 text-xs text-shell/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Krissy Curtis Realty. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed">
            Equal Housing Opportunity. This website contains fictional demo property listings for
            development purposes and does not represent real properties currently or previously
            for sale. Information is deemed reliable but not guaranteed once live MLS data is in
            place.
          </p>
        </div>
      </Container>
    </footer>
  );
}
