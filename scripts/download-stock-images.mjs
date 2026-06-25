/**
 * Lädt hochwertige Stock-Fotos herunter und speichert sie als WebP in public/images/
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");
fs.mkdirSync(outDir, { recursive: true });

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; AdrianoWebsite/1.0)",
  Accept: "image/*",
};

const STOCK = [
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format&fit=crop",
    file: "hero-terrasse.webp",
    width: 1920,
  },
  {
    url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1400&q=85&auto=format&fit=crop",
    file: "eis-sundae.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1400&q=85&auto=format&fit=crop",
    file: "eis-glaeser.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1400&q=85&auto=format&fit=crop",
    file: "pizza.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=85&auto=format&fit=crop",
    file: "terrasse.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=85&auto=format&fit=crop",
    file: "cafe-interior.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=1400&q=85&auto=format&fit=crop",
    file: "cappuccino.webp",
    width: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1400&q=85&auto=format&fit=crop",
    file: "espresso-beans.webp",
    width: 1400,
  },
];

for (const config of STOCK) {
  const outPath = path.join(outDir, config.file);
  if (fs.existsSync(outPath)) {
    console.log(`↷ ${config.file} (bereits vorhanden)`);
    continue;
  }

  const res = await fetch(config.url, { headers: HEADERS });
  if (!res.ok) {
    console.error(`✗ ${config.file} – Download fehlgeschlagen (${res.status})`);
    continue;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await sharp(buffer)
    .resize({ width: config.width, withoutEnlargement: true })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .webp({ quality: 88 })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log(`✓ ${config.file} (${meta.width}x${meta.height})`);
}
