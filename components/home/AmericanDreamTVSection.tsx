import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const thumbnails = [
  { src: "/images/communities/annapolis-hero.jpg", alt: "Episode preview: exploring downtown Annapolis" },
  { src: "/images/communities/severna-park-hero.svg", alt: "Episode preview: life in Severna Park" },
  { src: "/images/properties/harbor-sunset-view.svg", alt: "Episode preview: Chesapeake Bay lifestyle" },
];

export function AmericanDreamTVSection() {
  return (
    <section className="bg-bay-teal py-24 text-shell">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-shell/70">American Dream TV</p>
            <h2 className="text-display-md font-display">
              Maryland Is More Than a Place to Live. <span className="block">It&rsquo;s a Lifestyle.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-shell/85">
              Krissy hosts American Dream TV, a local lifestyle and real estate series covering
              Annapolis and Chesapeake Bay communities, businesses, and the stories behind the
              homes she represents.
            </p>
            <div className="mt-8">
              <Button href="/american-dream-tv" variant="clay" size="lg">
                Watch the Latest Episodes
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {thumbnails.map((thumb) => (
              <div key={thumb.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={thumb.src} alt={thumb.alt} fill sizes="20vw" className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
                  <Play className="h-8 w-8 text-shell" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
