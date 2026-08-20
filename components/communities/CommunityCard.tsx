import Image from "next/image";
import Link from "next/link";
import type { Community } from "@/lib/types/community";

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Link href={`/communities/${community.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card bg-mist shadow-soft transition-shadow duration-300 group-hover:shadow-soft-lg">
        <Image
          src={community.heroImage.src}
          alt={community.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl text-shell">{community.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-shell/80">{community.tagline}</p>
        </div>
      </div>
    </Link>
  );
}
