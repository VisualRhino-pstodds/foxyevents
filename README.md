# Foxy Events website

Static Astro site, hosted on Vercel.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Updating content
| What | Where |
|---|---|
| Phone, email, hours, socials, travel policy | `src/data/site.ts` |
| Services and what each includes | `src/data/services.ts` |
| Wedding packages, prices and inclusions | `src/data/packages.ts` |
| Bio | `src/pages/about.astro` |
| Domain | `astro.config.mjs` and `public/robots.txt` |

Search for `TODO` to find every placeholder.

## Photos and logo
- **Logos** live in `src/assets/brand/`. They were cut out from her white-background PNGs. If she gets transparent PNG/SVG versions from her designer, replace those files, keeping the same names (`-light` versions have cream lettering for dark backgrounds).
- **Event photos:** drop them into `src/assets/photos/weddings/`, `social/`, `business/` or `fundraising/`. They appear on the Home, Services and Gallery pages. The first photo in each folder (alphabetically) is that service's cover photo.
- **About photo:** `src/assets/photos/about/`.
- Name files descriptively (`garden-ceremony-arch.jpg`), because the file name becomes the alt text.

## Deploy
Push to GitHub → import the repo in Vercel (it detects Astro automatically) → Settings → Domains → add the domain and update DNS at the registrar.
