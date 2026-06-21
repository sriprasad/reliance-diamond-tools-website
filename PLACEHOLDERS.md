# RDT Website — Placeholder & Pending Content Checklist

Items below are **not real production values** or need client/asset updates before launch.
Do not invent replacements in code without client approval — update this list as items are resolved.

---

## Contact information

| Item | Current value | Location |
|------|---------------|----------|
| Phone number | `+91-XXXXXXXXXX` | `components/ContactSection.tsx` |
| Phone number | `+91-XXXXXXXXXX` | `app/contact/ContactForm.tsx` |
| Phone `tel:` link | Not implemented (no `tel:` href anywhere) | Site-wide |

---

## Images & media

| Item | Notes | Location |
|------|-------|----------|
| Hero / banner collages | `image1.png`–`image4.png` — text baked into images; markup uses figcaptions but assets still need clean photography | `public/assert/image/` |
| Product grid images | Generated placeholder items reuse banner images (`placeholders()` helper) | `data/products.ts` |
| Optical Industry photo | Wrong subject (microscopy/biology-adjacent); replace with lenses/optics manufacturing | `data/industries.ts` → `optical.jpg` |
| Homepage product tile images | Reuse banner PNGs as interim assets | `data/homeProductTiles.ts` |
| About section images | `image4.png`, `image1.png` as interim facility/tooling photos | `app/page.tsx` |

---

## Customers page

| Item | Current value | Location |
|------|---------------|----------|
| Customer logos (×6) | Text: "Logo placeholder" | `app/customers/page.tsx` |
| Testimonial authors | "Customer A", "Customer B", "Customer C" | `app/customers/page.tsx` |
| Testimonial quotes | Duplicate generic quote for all three | `app/customers/page.tsx` |

---

## Product catalogue data

| Item | Notes | Location |
|------|-------|----------|
| Product item names | Pattern: `{ChildName} - Type {n}` (9 per child) | `data/products.ts` → `placeholders()` |
| Product descriptions | Generic template string | `data/products.ts` → `placeholders()` |
| Product images per SKU | Cycles `image1`–`image4` banner assets | `data/products.ts` |

---

## Content claims (verify with client)

| Item | Notes | Location |
|------|-------|----------|
| ISO Certified Processes | Listed in Why Choose Us — confirm certification status | `app/page.tsx` → `whyChooseUs` |
| Business hours | Mon–Sat 9–6, Sunday closed — unverified | `components/ContactSection.tsx` |
| Enterprise stats | ₹60 Cr, 130+ professionals, 38,000 sq ft | Multiple pages (hero, footer, about) |

---

## SEO / structured data

| Item | Status |
|------|--------|
| Open Graph tags | Implemented per page via `lib/seo.ts` |
| `sitemap.xml` | Generated at build via `app/sitemap.ts` |
| `robots.txt` | Generated at build via `app/robots.ts` |
| JSON-LD Organization / LocalBusiness | `components/JsonLd.tsx` in root layout |
| `NEXT_PUBLIC_SITE_URL` | Set in production for correct canonical URLs (defaults to `https://www.reliancediamondtools.com`) |
| `NEXT_PUBLIC_BASE_PATH` | Set when deployed under a subpath (matches `next.config.ts`) |
| Phone in JSON-LD | Placeholder — see Contact section above |

---

## Performance / images

| Item | Status |
|------|--------|
| Industry JPG → WebP | Run `node scripts/generate-webp.mjs` after updating JPGs |
| Hero/banner PNG collages | Still PNG; WebP conversion pending when final assets arrive |
| Google Map embed | Lazy-loaded via `LazyMapEmbed` (Intersection Observer) |

---

## Homepage customers strip

| Item | Status |
|------|--------|
| Customer logo placeholders (×6) | `components/HomeCustomersSection.tsx` — replace before launch |

---

## Code TODO markers

| Marker | File |
|--------|------|
| Optical industry image replacement | `data/industries.ts` (inline comment) |

---

## Resolved / not placeholders

| Item | Status |
|------|--------|
| Footer copyright year | Dynamic via `new Date().getFullYear()` in `components/Footer.tsx` |
| Email | `info@reliancediamondtools.com` (used consistently) |
| Address | No 6 & 7, Association Road, Madhavaram, Chennai – 600 060 |

---

*Last scanned during Priority 3 accessibility pass.*
