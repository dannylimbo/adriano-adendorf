/**
 * Bereinigt Referenzbilder: schwarze Ränder entfernen, UI-Bereiche aggressiv croppen.
 * Erzeugt saubere WebP-Dateien oder markiert Bilder als unbrauchbar.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir =
  "C:/Users/dlipk/.cursor/projects/c-Users-dlipk-OneDrive-Desktop-Cursor-adriano-adendorf/assets";
const outDir = path.join(__dirname, "../public/images");

fs.mkdirSync(outDir, { recursive: true });

/** Manuelle Crops nach trim() – nur Motiv, keine UI */
const manualCrops = {
  terrasse: {
    file: "adriano-reference-01",
    afterTrim: { left: 0, top: 0, width: 9999, height: 9999 }, // wird unten begrenzt
    crop: { left: 0, top: 0, width: 700, height: 480 },
    maxWidth: 1600,
  },
  eisbecher: {
    file: "adriano-reference-02",
    crop: null, // nur trim
    maxWidth: 1200,
  },
  pizza: {
    file: "adriano-reference-03",
    crop: { left: 180, top: 0, width: 700, height: 520 },
    maxWidth: 1400,
  },
  kaffee: {
    file: "adriano-reference-04",
    crop: { left: 60, top: 80, width: 620, height: 700 },
    maxWidth: 1000,
  },
  "eis-frucht": {
    file: "adriano-reference-05",
    crop: { left: 120, top: 60, width: 780, height: 620 },
    maxWidth: 1200,
  },
  waffel: {
    file: "adriano-reference-06",
    crop: { left: 120, top: 80, width: 780, height: 580 },
    maxWidth: 1200,
  },
  espresso: {
    file: "adriano-reference-07",
    crop: { left: 40, top: 40, width: 670, height: 780 },
    maxWidth: 1000,
  },
};

function findAsset(partial) {
  const match = fs.readdirSync(assetsDir).find((e) => e.includes(partial));
  if (!match) throw new Error(`Asset not found: ${partial}`);
  return path.join(assetsDir, match);
}

async function processImage(name, config) {
  const input = findAsset(config.file);
  let img = sharp(input);
  const meta = await img.metadata();

  // Schwarze Ränder entfernen
  img = img.trim({ threshold: 15 });

  if (config.crop) {
    const trimmed = await img.toBuffer({ resolveWithObject: true });
    const { width, height } = trimmed.info;
    const { left, top, width: cw, height: ch } = config.crop;
    const safe = {
      left: Math.min(left, width - 100),
      top: Math.min(top, height - 100),
      width: Math.min(cw, width - left),
      height: Math.min(ch, height - top),
    };
    img = sharp(trimmed.data).extract(safe);
  }

  if (config.maxWidth) {
    img = img.resize({ width: config.maxWidth, withoutEnlargement: true });
  }

  const outPath = path.join(outDir, `${name}.webp`);
  await img.webp({ quality: 88 }).toFile(outPath);
  const out = await sharp(outPath).metadata();
  console.log(`✓ ${name}.webp → ${out.width}x${out.height}`);
}

for (const [name, config] of Object.entries(manualCrops)) {
  await processImage(name, config);
}
