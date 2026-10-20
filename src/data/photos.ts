import type { ImageMetadata } from 'astro';

// Every image in src/assets/photos/<category>/ (or one level deeper, in an
// event folder such as weddings/2026-08-09-mt-hood-timberline/) is picked up
// automatically. A leading "01-" in a file name sets its order and is dropped
// from the alt text.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  ['../assets/photos/*/*.{jpg,jpeg,png,webp,avif}', '../assets/photos/*/*/*.{jpg,jpeg,png,webp,avif}'],
  { eager: true },
);

export type Photo = { src: ImageMetadata; category: string; event?: string; alt: string };

export const photos: Photo[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const parts = path.split('/photos/')[1].split('/');
    const file = parts.at(-1)!;
    const [category, event] = parts.length === 3 ? [parts[0], parts[1]] : [parts[0], undefined];
    // "03-couple-exchanging-vows.jpg" → "couple exchanging vows"
    const alt = file
      .replace(/\.[^.]+$/, '')
      .replace(/^\d+[-_]/, '')
      .replace(/[-_]+/g, ' ');
    return { src: mod.default, category, event, alt };
  });

export const photosIn = (category: string) => photos.filter((p) => p.category === category);
export const photosOfEvent = (event: string) => photos.filter((p) => p.event === event);

/** Photos alternating between events, so a short strip isn't all one wedding. */
export function mixedPhotos(count: number): Photo[] {
  const groups = Object.values(
    Object.groupBy(
      photos.filter((p) => p.category !== 'about'),
      (p) => p.event ?? p.category,
    ),
  ) as Photo[][];
  const out: Photo[] = [];
  for (let i = 0; out.length < count && groups.some((g) => g[i]); i++) {
    for (const g of groups) if (g[i] && out.length < count) out.push(g[i]);
  }
  return out;
}

// Stock fallbacks (src/assets/stock/<category>.jpg), used only as a service's
// cover photo until real photos exist for it. Never shown in the Gallery.
const stockModules = import.meta.glob<{ default: ImageMetadata }>('../assets/stock/*.{jpg,jpeg,png,webp}', {
  eager: true,
});
const stockAlt: Record<string, string> = {
  business: 'evening banquet room with round tables set for a company dinner',
};

/** A service's cover: its first real photo, else a stock fallback. */
export function coverFor(category: string): Photo | undefined {
  const real = photosIn(category)[0];
  if (real) return real;
  const entry = Object.entries(stockModules).find(([path]) => path.match(/stock\/([^/.]+)\./)?.[1] === category);
  return entry && { src: entry[1].default, category, alt: stockAlt[category] ?? `${category} event` };
}
