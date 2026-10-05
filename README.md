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
| FAQ questions and answers (also shown on Packages) | `src/data/faq.ts` |
| Service-area pages (Vancouver, Portland, Camas, Gorge) | `src/data/areas.ts` |
| Client testimonials (section hides until one is added) | `src/data/testimonials.ts` |
| Bio | `src/pages/about.astro` |
| Domain, and `launched: true` to allow search engines | `src/data/site.ts` |

Search for `TODO` to find every placeholder.

## Photos and logo
- **Logos** live in `src/assets/brand/`. They were cut out from her white-background PNGs. If she gets transparent PNG/SVG versions from her designer, replace those files, keeping the same names (`-light` versions have cream lettering for dark backgrounds).
- **Event photos:** drop them into `src/assets/photos/weddings/`, `social/`, `business/` or `fundraising/`. They appear on the Home, Services and Gallery pages. The first photo in each folder (alphabetically) is that service's cover photo.
- **About photo:** `src/assets/photos/about/`.
- Name files descriptively (`garden-ceremony-arch.jpg`), because the file name becomes the alt text.

## Launch checklist (when foxyeventsco.com is connected in Vercel)
1. In `src/data/site.ts`, set `url: 'https://foxyeventsco.com'` and `launched: true`, then push. This removes the "noindex" tag and opens `robots.txt` to search engines.
2. In Google Search Console, add a **Domain** property for `foxyeventsco.com` (verify with the TXT record it gives you, added in Porkbun DNS), then submit `https://foxyeventsco.com/sitemap-index.xml`.
3. Check the structured data at https://search.google.com/test/rich-results for `/`, `/faq` and `/packages`.
4. Make sure her Google Business Profile links to `https://foxyeventsco.com` and uses the same name, phone and email.

## Deploy
Push to GitHub → import the repo in Vercel (it detects Astro automatically) → Settings → Domains → add the domain and update DNS at the registrar.
