#!/usr/bin/env node
/**
 * Placeholder SVG generator — soft blues/greys/whites palette, "coastal-calm"
 * line art (rounded corners, smoothed rooflines, softened dock/window motifs).
 *
 * Regenerates every procedurally-generated placeholder under public/images/
 * (properties, communities, brand) so nothing needs hand-editing hex by hex.
 *
 * Run with: node scripts/generate-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ---------------------------------------------------------------------------
// Palette — soft blues, greys, whites (Phase 2 redesign)
// ---------------------------------------------------------------------------
const PALETTE = {
  bg: "#FAFBFC",
  bgAlt: "#EEF1F4",
  white: "#FFFFFF",
  text: "#333A42",
  muted: "#6B7480",
  accent: "#6C90B0",
  accentHover: "#A9C4D8",
  border: "#DEE3E8",
};

// Background gradient pairs (top -> bottom), all within the soft blue/grey/white family.
const GRADIENTS = [
  ["#DCEAF5", "#EEF1F4"],
  ["#CFE0EC", "#F5F7F9"],
  ["#E4EAF0", "#FAFBFC"],
  ["#D2E1EC", "#EEF1F4"],
  ["#D8E4ED", "#FFFFFF"],
  ["#E8EDF1", "#FAFBFC"],
];

// ---------------------------------------------------------------------------
// Deterministic per-name PRNG (so each named placeholder is stable across runs)
// ---------------------------------------------------------------------------
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeRng(name) {
  return mulberry32(hashSeed(name));
}

function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function round1(n) {
  return Math.round(n * 100) / 100;
}

// ---------------------------------------------------------------------------
// Shared motif builders — softened, rounded, "coastal-calm" rather than
// blueprint/technical. This is the core of the "less industrial" pass applied
// to generated imagery.
// ---------------------------------------------------------------------------

/** Smooth a polyline into rounded peaks/ridges (rooflines, hills) via quadratic curves. */
function smoothRidge(points) {
  if (points.length < 2) return "";
  let d = `M${round1(points[0][0])},${round1(points[0][1])}`;
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    if (i === points.length - 1) {
      d += ` Q${round1(x)},${round1(y)} ${round1(x)},${round1(y)}`;
    } else {
      const [nx, ny] = points[i + 1];
      const mx = (x + nx) / 2;
      const my = (y + ny) / 2;
      d += ` Q${round1(x)},${round1(y)} ${round1(mx)},${round1(my)}`;
    }
  }
  return d;
}

/** Wandering horizon/water lines — already soft in the original; recolored + kept gentle. */
function waterLines(width, baseY, rng, opts = {}) {
  const { count = 3, spread = 40, color = PALETTE.accent, baseOpacity = 0.4 } = opts;
  const segments = 12;
  let out = "";
  for (let i = 0; i < count; i++) {
    const amp = 8 + rng() * 14;
    const phase = rng() * Math.PI * 2;
    const yOff = i * (spread / count) - spread / 2;
    const pts = [];
    for (let s = 0; s <= segments; s++) {
      const x = (width / segments) * s;
      const y = baseY + yOff + Math.sin(phase + (s / segments) * Math.PI * 2.2) * amp;
      pts.push([x, y]);
    }
    let d = `M${round1(pts[0][0])},${round1(pts[0][1])}`;
    for (let s = 1; s < pts.length; s++) d += ` L${round1(pts[s][0])},${round1(pts[s][1])}`;
    const opacity = round1(baseOpacity - i * (baseOpacity / (count + 1)));
    out += `<path d="${d}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="2" stroke-linecap="round"/>`;
  }
  return out;
}

/** Rounded corner-bracket accent (was a sharp right-angle "blueprint" crop mark). */
function roundedCorners(width, height) {
  const margin = 24;
  const arm = 48;
  const r = 16;
  const bl = `<path d="M${margin},${height - arm - margin} L${margin},${height - margin - r} A${r},${r} 0 0 0 ${margin + r},${height - margin} L${margin + arm},${height - margin}" fill="none" stroke="${PALETTE.muted}" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"/>`;
  const tr = `<path d="M${width - arm - margin},${margin} L${width - margin - r},${margin} A${r},${r} 0 0 1 ${width - margin},${margin + r} L${width - margin},${margin + arm}" fill="none" stroke="${PALETTE.muted}" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"/>`;
  return bl + tr;
}

/** Soft rounded-cap dock posts + rail (was a harsh double tick-mark grid). */
function dockPosts(x, y, span, count, opacity = 0.4) {
  let out = `<line x1="${x}" y1="${y}" x2="${x + span}" y2="${y}" stroke="${PALETTE.accent}" stroke-opacity="${opacity}" stroke-width="2.5" stroke-linecap="round"/>`;
  const step = span / (count - 1);
  for (let i = 0; i < count; i++) {
    const px = x + i * step;
    out += `<line x1="${px}" y1="${y}" x2="${px}" y2="${y + 22}" stroke="${PALETTE.accent}" stroke-opacity="${opacity}" stroke-width="2.5" stroke-linecap="round"/>`;
    out += `<circle cx="${px}" cy="${y}" r="3.5" fill="${PALETTE.accent}" fill-opacity="${opacity + 0.1}"/>`;
  }
  return out;
}

/** Rounded window-paned rect (was sharp-cornered rect + cross mullions). */
function windowRect(x, y, w, h, opacity = 0.4, rx = 10) {
  const midX = x + w / 2;
  const midY = y + h / 2;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="${opacity}" stroke-width="2"/>` +
    `<line x1="${midX}" y1="${y + rx * 0.4}" x2="${midX}" y2="${y + h - rx * 0.4}" stroke="${PALETTE.accent}" stroke-opacity="${opacity}" stroke-width="1.5" stroke-linecap="round"/>` +
    `<line x1="${x + rx * 0.4}" y1="${midY}" x2="${x + w - rx * 0.4}" y2="${midY}" stroke="${PALETTE.accent}" stroke-opacity="${opacity}" stroke-width="1.5" stroke-linecap="round"/>`
  );
}

/** Softened lighthouse — rounded dome cap instead of a sharp blueprint peak. */
function lighthouse(cx, cy, scale = 1, opacity = 0.55, color = PALETTE.text) {
  return `<g transform="translate(${cx} ${cy}) scale(${scale})" opacity="${opacity}">
    <rect x="-14" y="-6" width="28" height="46" rx="8" fill="${color}"/>
    <path d="M-11,-6 Q0,-34 11,-6" fill="${color}"/>
    <circle cx="0" cy="-30" r="6" fill="${color}"/>
    <line x1="-18" y1="40" x2="20" y2="40" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
}

// ---------------------------------------------------------------------------
// SVG document wrapper
// ---------------------------------------------------------------------------
function svgDoc({ width, height, label, gradientId, gradientStops, body }) {
  const stops = gradientStops
    .map((s) => `<stop offset="${s.offset}" stop-color="${s.color}" stop-opacity="${s.opacity ?? 1}"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${label}"><defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient></defs><rect width="${width}" height="${height}" fill="url(#${gradientId})"/>${body}${roundedCorners(width, height)}</svg>`;
}

function gradientFor(name, rng) {
  const [top, bottom] = pick(GRADIENTS, rng);
  return [
    { offset: 0, color: top },
    { offset: 1, color: bottom },
  ];
}

// ---------------------------------------------------------------------------
// Property placeholders (1600x1067)
// ---------------------------------------------------------------------------
const PW = 1600;
const PH = 1067;

const propertyRecipes = {
  "lighthouse-point-view": (rng) => {
    let body = waterLines(PW, 685, rng, { count: 3 });
    body += lighthouse(1200, 641, 1.3, 0.6);
    return body;
  },
  "backyard-pool-terrace": (rng) => {
    let body = `<path d="${smoothRidge([[0, 631], [400, 551], [800, 631], [1200, 551], [1600, 631]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.3" stroke-width="2.5" stroke-linecap="round"/>`;
    body += `<rect x="192" y="681.5" width="960" height="128" rx="32" fill="${PALETTE.accentHover}" fill-opacity="0.5" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2"/>`;
    body += waterLines(960, 721, rng, { count: 1, baseOpacity: 0.3 });
    return body;
  },
  "primary-suite-interior": (rng) => {
    let body = windowRect(880, 160, 544, 587, 0.35, 12);
    body += `<rect x="128" y="587" width="480" height="149" rx="20" fill="${PALETTE.accent}" fill-opacity="0.14"/>`;
    return body;
  },
  "dockominium-boat-slips": (rng) => {
    let body = dockPosts(240, 671, 640, 6, 0.45);
    body += dockPosts(168, 731, 448, 5, 0.3);
    body += lighthouse(1120, 631, 0.7, 0.4);
    body += waterLines(PW, 800, rng, { count: 1, baseOpacity: 0.25 });
    return body;
  },
  "downtown-storefront": (rng) => {
    let body = `<rect x="160" y="441.5" width="1280" height="160" rx="16" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.35" stroke-width="2"/>`;
    for (let i = 1; i < 4; i++) {
      const x = 160 + (1280 / 4) * i;
      body += `<line x1="${x}" y1="441.5" x2="${x}" y2="601.5" stroke="${PALETTE.accent}" stroke-opacity="0.3" stroke-width="1.5"/>`;
    }
    body += `<line x1="160" y1="521.5" x2="1440" y2="521.5" stroke="${PALETTE.accent}" stroke-opacity="0.3" stroke-width="1.5"/>`;
    body += `<rect x="160" y="621.5" width="1280" height="70" rx="14" fill="${PALETTE.accentHover}" fill-opacity="0.25"/>`;
    for (let i = 0; i < 4; i++) {
      const x = 224 + i * 320;
      body += `<rect x="${x}" y="631.5" width="${i === 3 ? 192 : 240}" height="50" rx="10" fill="none" stroke="${PALETTE.text}" stroke-opacity="0.35" stroke-width="2"/>`;
    }
    return body;
  },
  "stone-farmhouse-land": (rng) => {
    let body = `<path d="${smoothRidge([[0, 651], [400, 551], [800, 651], [1200, 551], [1600, 651]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>`;
    body += windowRect(192, 561, 192, 70, 0.32, 10);
    body += `<path d="M0,701.5 Q400,671.5 800,711.5 T1600,691.5" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.3" stroke-width="2.5" stroke-linecap="round"/>`;
    return body;
  },
  "open-water-horizon": (rng) => {
    let body = waterLines(PW, 665, rng, { count: 3 });
    body += lighthouse(800, 641, 1.1, 0.5);
    body += lighthouse(1120, 656, 0.65, 0.35);
    return body;
  },
  "townhouse-row-exterior": (rng) => {
    let body = "";
    for (let i = 0; i < 4; i++) {
      const ox = i * 400;
      body += `<path d="${smoothRidge([[ox, 651], [ox + 200, 581], [ox + 400, 651]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.35" stroke-width="2.5" stroke-linecap="round"/>`;
      body += windowRect(ox + 100, 571, 80, 60, 0.3, 10);
      body += windowRect(ox + 220, 571, 80, 60, 0.3, 10);
      body += `<line x1="${ox}" y1="651.5" x2="${ox}" y2="721.5" stroke="${PALETTE.accent}" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round"/>`;
    }
    return body;
  },
  "condo-balcony-skyline": (rng) => {
    let body = "";
    const heights = [180, 233, 286, 339, 392, 225, 278];
    let x = 5;
    const w = 218.6;
    for (const h of heights) {
      const y = 721.5 - h;
      body += `<rect x="${round1(x)}" y="${round1(y)}" width="${round1(w - 6)}" height="${round1(h)}" rx="14" fill="${PALETTE.accent}" fill-opacity="0.18"/>`;
      x += w;
    }
    body += waterLines(PW, 741, rng, { count: 1, baseOpacity: 0.25 });
    return body;
  },
  "marsh-grass-shoreline": (rng) => {
    let body = waterLines(PW, 685, rng, { count: 1, baseOpacity: 0.3 });
    for (let i = 0; i < 28; i++) {
      const x = 30 + i * 55 + rng() * 10;
      const lean = (rng() - 0.5) * 30;
      body += `<path d="M${round1(x)},721.5 Q${round1(x + lean * 0.6)},695 ${round1(x + lean)},672" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"/>`;
    }
    body += `<circle cx="288" cy="561.5" r="60" fill="${PALETTE.accentHover}" fill-opacity="0.35"/>`;
    return body;
  },
  "brick-colonial-facade": (rng) => {
    let body = `<path d="${smoothRidge([[0, 641], [800, 501], [1600, 641]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>`;
    body += `<path d="M755,641.5 L755,536.5 A45,45 0 0 1 845,536.5 L845,641.5" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.45" stroke-width="2.5"/>`;
    body += windowRect(288, 471.5, 256, 100, 0.32, 12);
    body += windowRect(1056, 471.5, 256, 100, 0.32, 12);
    body += `<rect x="288" y="601.5" width="256" height="30" rx="8" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.25" stroke-width="2"/>`;
    body += `<rect x="1056" y="601.5" width="256" height="30" rx="8" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.25" stroke-width="2"/>`;
    return body;
  },
  "harbor-sunset-view": (rng) => {
    let body = `<circle cx="1152" cy="601.5" r="90" fill="${PALETTE.accentHover}" fill-opacity="0.55"/>`;
    body += waterLines(PW, 725, rng, { count: 3 });
    body += lighthouse(448, 646, 0.85, 0.5);
    return body;
  },
  "coastal-kitchen-interior": (rng) => {
    let body = windowRect(96, 128, 544, 533.5, 0.35, 14);
    body += `<rect x="800" y="587" width="672" height="128" rx="20" fill="${PALETTE.accent}" fill-opacity="0.16"/>`;
    body += `<rect x="800" y="448" width="672" height="107" rx="20" fill="${PALETTE.accent}" fill-opacity="0.12"/>`;
    return body;
  },
  "waterfront-manor-exterior": (rng) => {
    let body = `<path d="${smoothRidge([[0, 621], [266.7, 531], [533.3, 621], [800, 531], [1066.7, 621], [1333.3, 531], [1600, 621]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.45" stroke-width="2.5" stroke-linecap="round"/>`;
    body += windowRect(128, 531.5, 224, 90, 0.34, 12);
    body += windowRect(992, 531.5, 224, 90, 0.34, 12);
    body += waterLines(PW, 725, rng, { count: 2, baseOpacity: 0.35 });
    body += dockPosts(240, 691, 640, 6, 0.4);
    body += lighthouse(1312, 651, 1.0, 0.45);
    return body;
  },
};

// ---------------------------------------------------------------------------
// Community hero placeholders (1920x900) — theme-based composition
// ---------------------------------------------------------------------------
const CW = 1920;
const CH = 900;

const communityThemes = {
  "annapolis-hero": "coastal-town",
  "eastport-hero": "coastal-town",
  "hillsmere-hero": "coastal-town",
  "galesville-hero": "coastal-town",
  "severna-park-hero": "wooded-wetland",
  "cape-st-claire-hero": "wooded-wetland",
  "mayo-hero": "wooded-wetland",
  "shady-side-hero": "wooded-wetland",
  "arnold-hero": "river-village",
  "broadneck-hero": "river-village",
  "edgewater-hero": "river-village",
  "pasadena-hero": "river-village",
  "west-annapolis-hero": "historic-district",
  "crofton-hero": "historic-district",
  "davidsonville-hero": "historic-district",
  "millersville-hero": "historic-district",
};

function communityBody(theme, rng) {
  let body = "";
  if (theme === "coastal-town") {
    body += waterLines(CW, 590, rng, { count: 2, baseOpacity: 0.4 });
    body += dockPosts(120, 590, 580, 7, 0.42);
    body += lighthouse(1400, 500, 1.3, 0.55);
    body += lighthouse(1620, 530, 0.9, 0.4);
    for (let i = 0; i < 4; i++) {
      body += windowRect(80 + i * 130, 610, 96, 50, 0.3, 10);
    }
  } else if (theme === "wooded-wetland") {
    for (let i = 0; i < 30; i++) {
      const x = 20 + i * 62 + rng() * 12;
      const lean = (rng() - 0.5) * 26;
      body += `<path d="M${round1(x)},600 Q${round1(x + lean * 0.6)},578 ${round1(x + lean)},556" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>`;
    }
    body += `<path d="${smoothRidge([[0, 530], [160, 440], [320, 530], [480, 440], [640, 530], [800, 440], [960, 530]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>`;
    body += `<circle cx="1574" cy="400" r="70" fill="${PALETTE.accentHover}" fill-opacity="0.4"/>`;
  } else if (theme === "river-village") {
    body += waterLines(CW, 590, rng, { count: 2, baseOpacity: 0.4 });
    body += `<path d="${smoothRidge([[0, 560], [160, 490], [320, 560], [480, 490], [640, 560], [800, 490], [960, 560]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.4" stroke-width="2.5" stroke-linecap="round"/>`;
    for (let i = 0; i < 4; i++) {
      body += windowRect(1150 + i * 130, 560, 100, 56, 0.3, 12);
    }
    body += `<circle cx="300" cy="260" r="70" fill="${PALETTE.accentHover}" fill-opacity="0.3"/>`;
  } else if (theme === "historic-district") {
    body += `<path d="${smoothRidge([[0, 560], [200, 480], [400, 560], [600, 480], [800, 560], [1000, 480], [1200, 560], [1400, 480], [1600, 560], [1800, 480], [1920, 508]])}" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.38" stroke-width="2.5" stroke-linecap="round"/>`;
    for (let i = 0; i < 5; i++) {
      body += windowRect(140 + i * 220, 570, 120, 66, 0.3, 12);
    }
    body += waterLines(CW, 660, rng, { count: 1, baseOpacity: 0.2 });
  }
  return body;
}

// ---------------------------------------------------------------------------
// Brand placeholders
// ---------------------------------------------------------------------------
function buildMonogram() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="KM Curtis Realty monogram">
  <rect width="240" height="240" rx="28" fill="${PALETTE.bgAlt}"/>
  <circle cx="120" cy="120" r="92" fill="none" stroke="${PALETTE.accent}" stroke-width="2"/>
  <text x="120" y="145" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-weight="600" fill="${PALETTE.text}" text-anchor="middle" letter-spacing="2">KM</text>
  <rect x="66" y="160" width="108" height="4" rx="2" fill="${PALETTE.accentHover}"/>
</svg>`;
}

function buildHeadshotPlaceholder() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="480" height="480" role="img" aria-label="Placeholder headshot silhouette for Krissy Curtis">
  <defs><linearGradient id="hs1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${PALETTE.border}" stop-opacity="1"/><stop offset="1" stop-color="${PALETTE.bgAlt}" stop-opacity="1"/></linearGradient></defs>
  <rect width="480" height="480" fill="url(#hs1)"/>
  <circle cx="240" cy="190" r="86" fill="${PALETTE.accent}" fill-opacity="0.75"/>
  <path d="M96,460 C96,360 168,306 240,306 C312,306 384,360 384,460 Z" fill="${PALETTE.accent}" fill-opacity="0.75"/>
  <circle cx="240" cy="240" r="220" fill="none" stroke="${PALETTE.accent}" stroke-opacity="0.22" stroke-width="2"/>
</svg>`;
}

// ---------------------------------------------------------------------------
// Write everything
// ---------------------------------------------------------------------------
function writeSvg(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
  console.log("wrote", path.replace(ROOT, ""));
}

let gid = 0;

for (const [name, recipe] of Object.entries(propertyRecipes)) {
  const rng = makeRng(name);
  const body = recipe(rng);
  const doc = svgDoc({
    width: PW,
    height: PH,
    label: name,
    gradientId: `g${gid++}`,
    gradientStops: gradientFor(name, rng),
    body,
  });
  writeSvg(join(ROOT, "public", "images", "properties", `${name}.svg`), doc);
}

for (const [fileBase, theme] of Object.entries(communityThemes)) {
  const rng = makeRng(fileBase);
  const body = communityBody(theme, rng);
  const doc = svgDoc({
    width: CW,
    height: CH,
    label: fileBase,
    gradientId: `g${gid++}`,
    gradientStops: gradientFor(fileBase, rng),
    body,
  });
  writeSvg(join(ROOT, "public", "images", "communities", `${fileBase}.svg`), doc);
}

writeSvg(join(ROOT, "public", "images", "brand", "km-monogram.svg"), buildMonogram());
writeSvg(join(ROOT, "public", "images", "brand", "headshot-placeholder.svg"), buildHeadshotPlaceholder());

console.log(`\nDone. ${Object.keys(propertyRecipes).length} property, ${Object.keys(communityThemes).length} community, 2 brand SVGs regenerated.`);
