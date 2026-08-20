import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProperties, getAllPropertySlugs, getPropertyBySlug } from "@/lib/data/properties";
import { findSimilarProperties } from "@/lib/utils/similarProperties";
import { formatPrice } from "@/lib/utils/formatPrice";
import { STATUS_LABELS } from "@/lib/utils/labels";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/properties/StatusBadge";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { DemoDataBanner } from "@/components/properties/DemoDataBanner";
import { PropertyStats } from "@/components/properties/PropertyStats";
import { PropertyFeaturesList } from "@/components/properties/PropertyFeaturesList";
import { PropertyDetailAccordion } from "@/components/properties/PropertyDetailAccordion";
import { PropertyMap } from "@/components/properties/PropertyMap";
import { SimilarProperties } from "@/components/properties/SimilarProperties";
import { PropertyInquiryForm } from "@/components/forms/PropertyInquiryForm";

const SITE_URL = "https://www.kmcurtisrealty.com";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  const title = property.seo?.title ?? `${property.address}, ${property.city} ${property.state} | KM Curtis Realty`;
  const description =
    property.seo?.description ??
    `${STATUS_LABELS[property.status]} in ${property.city}, ${property.state} — ${property.beds || "—"} bed, ${
      property.baths || "—"
    } bath, ${property.sqft ? `${property.sqft.toLocaleString()} sq ft` : "custom lot"}, offered at ${formatPrice(
      property.status === "sold" ? property.soldPrice ?? property.price : property.price,
    )}.`;
  const ogImage = property.images[0]?.src;
  const url = `${SITE_URL}/properties/${property.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    // Demo listings must never be indexed — this automatically flips off
    // once real MLS data (isDemo: false) replaces the demo dataset.
    robots: property.isDemo ? { index: false, follow: false } : undefined,
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const allProperties = getAllProperties();
  const similar = findSimilarProperties(property, allProperties);
  const propertyUrl = `${SITE_URL}/properties/${property.slug}`;
  const displayPrice = property.status === "sold" ? property.soldPrice ?? property.price : property.price;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zip,
    },
    numberOfRooms: property.beds || undefined,
    floorSize: property.sqft ? { "@type": "QuantitativeValue", value: property.sqft, unitCode: "FTK" } : undefined,
  };

  return (
    <div>
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-xs text-ink/50">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/properties" className="hover:text-ink">Properties</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink/70">{property.address}</li>
          </ol>
        </nav>
      </Container>

      <Container className="mt-4">
        <PropertyGallery images={property.images} address={property.address} />
      </Container>

      {property.isDemo ? (
        <div className="mt-6">
          <DemoDataBanner disclaimer={property.mlsDisclaimer} />
        </div>
      ) : null}

      <Container className="py-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={property.status} />
              {property.tags.includes("waterfront") ? (
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-bay-teal">Waterfront</span>
              ) : null}
            </div>
            <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">{formatPrice(displayPrice)}</h1>
            <p className="mt-2 text-lg text-ink/80">{property.address}</p>
            <p className="text-sm text-ink/55">
              {property.city}, {property.state} {property.zip}
            </p>

            <div className="mt-8">
              <PropertyStats property={property} />
            </div>

            <div className="mt-10">
              <h2 className="mb-4 font-display text-2xl text-ink">Description</h2>
              <p className="max-w-2xl text-base leading-relaxed text-ink/75">{property.description}</p>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 font-display text-2xl text-ink">Features &amp; Amenities</h2>
              <PropertyFeaturesList features={property.features} />
            </div>

            <div className="mt-12">
              <h2 className="mb-4 font-display text-2xl text-ink">Property Details</h2>
              <PropertyDetailAccordion property={property} />
            </div>

            <div className="mt-12">
              <h2 className="mb-4 font-display text-2xl text-ink">Location</h2>
              <PropertyMap property={property} />
            </div>

            {property.mlsDisclaimer ? (
              <p className="mt-8 text-xs leading-relaxed text-ink/40">{property.mlsDisclaimer}</p>
            ) : null}
          </div>

          <aside>
            <div className="sticky top-28 rounded-card border border-mist bg-shell p-6 shadow-soft">
              <h2 className="font-display text-xl text-ink">Interested in This Property?</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Let&rsquo;s schedule a private showing or talk through whether this home is the
                right fit for you.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="tel:+14105550148" variant="primary" className="w-full">
                  Schedule a Showing
                </Button>
              </div>
              <div className="mt-8 border-t border-mist pt-6">
                <PropertyInquiryForm
                  propertyId={property.id}
                  propertySlug={property.slug}
                  propertyAddress={`${property.address}, ${property.city}, ${property.state} ${property.zip}`}
                  propertyUrl={propertyUrl}
                />
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-mist bg-mist/15 py-20">
        <Container>
          <SimilarProperties properties={similar} />
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
