import type { ImageMetadata } from 'astro';

// Every image placed in src/assets/photos/<folder>/ is picked up automatically.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export type Photo = { src: ImageMetadata; category: string; alt: string };

export const photos: Photo[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const [, category, file] = path.match(/photos\/([^/]+)\/([^/]+)$/)!;
    // File names double as alt text: "garden-ceremony-arch.jpg" → "garden ceremony arch"
    const alt = file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
    return { src: mod.default, category, alt };
  });

export const photosIn = (category: string) => photos.filter((p) => p.category === category);
