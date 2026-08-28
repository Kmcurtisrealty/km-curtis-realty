import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.kmcurtisrealty.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krissy Curtis Realty | Annapolis & Chesapeake Bay Real Estate",
    template: "%s | Krissy Curtis Realty",
  },
  description:
    "Real estate, Maryland living, and your next chapter. Krissy Curtis helps buyers and sellers navigate Annapolis and the Chesapeake Bay region.",
  openGraph: {
    title: "Krissy Curtis Realty",
    description:
      "Real estate, Maryland living, and your next chapter. Serving Annapolis and the Chesapeake Bay region.",
    url: SITE_URL,
    siteName: "Krissy Curtis Realty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/communities/edgewater-hero.jpg",
        width: 4000,
        height: 2250,
        alt: "Aerial view of the South River Bridge and waterfront homes at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krissy Curtis Realty",
    description:
      "Real estate, Maryland living, and your next chapter. Serving Annapolis and the Chesapeake Bay region.",
    images: ["/images/communities/edgewater-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-shell font-body text-ink pb-16 md:pb-0">
        <NuqsAdapter>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <MobileStickyCTA />
        </NuqsAdapter>
      </body>
    </html>
  );
}
