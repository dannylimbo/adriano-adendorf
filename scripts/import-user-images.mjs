/**
 * Importiert die aktuellen manuell gecroppten Adriano-Bilder (feste Hash-Zuordnung).
 * Löscht zuerst alle alten Dateien in public/images/.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir =
  "C:/Users/dlipk/.cursor/projects/c-Users-dlipk-OneDrive-Desktop-Cursor-adriano-adendorf/assets";
const outDir = path.join(__dirname, "../public/images");

/** Referenz → Ausgabedatei(en) – Hash der neuesten User-Crops */
const IMPORTS = [
  {
    hash: "1f811e20-f38b-477a-bde3-67329ed0639a",
    outputs: [
      { file: "hero.webp", maxWidth: 1920 },
      { file: "terrasse.webp", maxWidth: 1400 },
    ],
  },
  {
    hash: "e6bc2353-1b0b-4873-968f-334b5ecde2fc",
    outputs: [{ file: "eisbecher.webp", maxWidth: 1400 }],
  },
  {
    hash: "8fdb20d7-56fb-447d-ba7e-24381a7f1807",
    outputs: [{ file: "pizza.webp", maxWidth: 1400 }],
  },
  {
    hash: "f1d08ebf-2b6a-4f4b-85db-9edc80521a44",
    outputs: [{ file: "kaffee.webp", maxWidth: 1200 }],
  },
  {
    hash: "c83f5339-7c2e-475c-8fb1-521bcf55feb5",
    outputs: [{ file: "eis-frucht.webp", maxWidth: 1200 }],
  },
  {
    hash: "7f7e52d4-a524-4912-aecb-6d708fd7f31c",
    outputs: [{ file: "waffel.webp", maxWidth: 1200 }],
  },
  {
    hash: "3fd75c8b-2e8b-4d76-86e3-237a8b0d34a9",
    outputs: [{ file: "about.webp", maxWidth: 1200 }],
  },
];

function findByHash(hash) {
  const match = fs.readdirSync(assetsDir).find((f) => f.includes(hash));
  if (!match) throw new Error(`Asset mit Hash nicht gefunden: ${hash}`);
  return path.join(assetsDir, match);
}

// Alte Bilder entfernen
if (fs.existsSync(outDir)) {
  for (const file of fs.readdirSync(outDir)) {
    fs.unlinkSync(path.join(outDir, file));
  }
} else {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const item of IMPORTS) {
  const input = findByHash(item.hash);
  for (const { file, maxWidth } of item.outputs) {
    const outPath = path.join(outDir, file);
    await sharp(input)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 92 })
      .toFile(outPath);
    const meta = await sharp(outPath).metadata();
    console.log(`✓ ${file} ← ${item.hash.slice(0, 8)}… (${meta.width}x${meta.height})`);
  }
}

console.log("\nFertig –", fs.readdirSync(outDir).length, "Dateien in public/images/");
