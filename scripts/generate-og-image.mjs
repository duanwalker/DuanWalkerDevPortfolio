// One-off generator for public/og.png — rasterizes an SVG built from the
// site's design tokens (app/globals.css) via sharp. Re-run after any token
// changes: `node scripts/generate-og-image.mjs`.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const WIDTH = 1200;
const HEIGHT = 630;

// Tokens from app/globals.css
const COLOR_DEPTH = "#1b1834";
const COLOR_MIST = "#edeaf6";
const COLOR_LILAC = "#a9a0d4";
const COLOR_CONDUIT = "#3a3564";
const COLOR_PULSE = "#6ee0c8";

const DISPLAY_FONT = "Segoe UI, Arial, sans-serif";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLOR_DEPTH}" />

  <!-- rail motif: node + conduit, echoing the featured-work rail -->
  <circle cx="96" cy="255" r="7" fill="${COLOR_PULSE}" />
  <line x1="96" y1="262" x2="96" y2="320" stroke="${COLOR_CONDUIT}" stroke-width="2" />
  <circle cx="96" cy="327" r="4" fill="none" stroke="${COLOR_CONDUIT}" stroke-width="2" />

  <text x="140" y="335" font-family="${DISPLAY_FONT}" font-weight="700" font-size="80" letter-spacing="-2" fill="${COLOR_MIST}">Duan Walker</text>

  <rect x="142" y="359" width="160" height="6" fill="${COLOR_PULSE}" />

  <text x="140" y="425" font-family="${DISPLAY_FONT}" font-size="34" fill="${COLOR_LILAC}">AI systems that run on Azure.</text>
</svg>
`;

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "og.png"
);

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath}`);
