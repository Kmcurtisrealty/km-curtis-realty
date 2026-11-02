"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  thumbnailSrc?: string;
}

export function YouTubeEmbed({ videoId, title, className, thumbnailSrc }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(!thumbnailSrc);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-card shadow-soft-lg ${className ?? ""}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image src={thumbnailSrc!} alt={title} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/30">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-shell/90 shadow-soft-lg transition-transform group-hover:scale-105">
              <Play className="h-7 w-7 translate-x-0.5 text-ink" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
