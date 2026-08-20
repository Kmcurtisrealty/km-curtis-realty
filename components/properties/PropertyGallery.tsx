"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Expand } from "lucide-react";
import type { PropertyImage } from "@/lib/types/property";

interface PropertyGalleryProps {
  images: PropertyImage[];
  address: string;
}

/**
 * Hero gallery for the property detail page (spec §11): a large primary
 * image plus a thumbnail strip, opening into a fullscreen, swipeable
 * lightbox with its own thumbnail rail.
 */
export function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [index, setIndex] = useState(-1);

  if (images.length === 0) return null;

  const slides = images.map((image) => ({ src: image.src, alt: image.alt }));
  const primary = images[0];
  const rest = images.slice(1, 5);

  return (
    <div>
      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-4 md:grid-rows-2">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="group relative col-span-1 row-span-2 aspect-[4/3] overflow-hidden rounded-card bg-mist md:col-span-2 md:aspect-auto"
          aria-label={`Open gallery for ${address}`}
        >
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </button>

        {rest.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setIndex(i + 1)}
            className="group relative hidden aspect-[4/3] overflow-hidden rounded-card bg-mist md:block"
            aria-label={`Open gallery for ${address}, image ${i + 2}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {i === rest.length - 1 && images.length > 5 ? (
              <span className="absolute inset-0 flex items-center justify-center bg-ink/50 text-sm font-semibold text-shell">
                +{images.length - 5} more
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIndex(0)}
        className="mt-3 inline-flex items-center gap-2 rounded-full text-xs font-medium uppercase tracking-[0.1em] text-bay-teal md:hidden"
      >
        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
        View all {images.length} photos
      </button>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails, Fullscreen]}
        thumbnails={{ position: "bottom" }}
        carousel={{ finite: false }}
      />
    </div>
  );
}
