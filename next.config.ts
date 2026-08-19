import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Local placeholder imagery is authored as SVG (see public/images/**).
    // These are our own generated files (no untrusted input), so it's safe
    // to let next/image serve them. Swap to real photography (JPG/WebP)
    // later and this can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
