/**
 * Generates .webp copies for industry JPG assets.
 * Run: node scripts/generate-webp.mjs
 */
import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

const industriesDir = path.join(process.cwd(), "public/assert/image/industries");

const files = await readdir(industriesDir);
const jpgs = files.filter((f) => /\.jpe?g$/i.test(f));

for (const file of jpgs) {
  const input = path.join(industriesDir, file);
  const output = path.join(industriesDir, file.replace(/\.jpe?g$/i, ".webp"));
  await sharp(input).webp({ quality: 82 }).toFile(output);
  console.log(`Wrote ${output}`);
}
