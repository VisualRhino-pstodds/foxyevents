// Past events shown in the Gallery. `slug` matches the event's photo folder,
// e.g. src/assets/photos/weddings/2026-08-09-mt-hood-timberline/.
// Venue names here are real local content that helps search rankings.
// Newest first.

export type PastEvent = {
  slug: string;
  title: string;
  label?: string; // short name for the Gallery's jump buttons
  venue?: string;
  location: string;
  date?: string; // display text, e.g. "August 2026"
  summary: string;
  area?: string; // slug of a related /areas page
};

export const events: PastEvent[] = [
  {
    slug: '2026-09-26-oregon-garden-resort',
    title: 'A Garden Gazebo Wedding',
    venue: 'Oregon Garden Resort',
    location: 'Silverton, OR',
    date: 'September 2026',
    summary:
      'An outdoor ceremony at the garden gazebo, framed by tall evergreens, followed by a ballroom reception with lush floral centerpieces and a heartfelt memorial for loved ones.',
  },
  {
    slug: '2026-08-15-edmonds-yacht-club',
    title: 'A Waterfront Yacht Club Wedding',
    venue: 'Edmonds Yacht Club',
    location: 'Edmonds, WA',
    date: 'August 2026',
    summary:
      'Navy, white and hydrangea blue, with the ceremony and reception in one airy waterfront ballroom on Puget Sound, plus a guest book table with instant cameras and a photo wall.',
  },
  {
    slug: '2026-08-09-mt-hood-timberline',
    title: 'A Mountainside Wedding at Timberline',
    venue: 'Timberline Lodge, Mt. Hood',
    location: 'Mt. Hood & Hood River, OR',
    date: 'August 2026',
    summary:
      'A ceremony beneath Mt. Hood with a rustic wooden arch, then a laid-back, candlelit reception in Hood River.',
    area: 'columbia-river-gorge',
  },
  {
    slug: 'fall-pumpkin-baby-shower',
    label: 'Little Pumpkin Shower',
    title: 'A “Little Pumpkin” Baby Shower',
    location: 'Washougal, WA',
    date: '2025',
    summary:
      'A cozy fall celebration for a baby boy, with an “It’s a Boy” pumpkin and hay bale welcome, a white balloon garland, cupcakes, games and prize baskets. A gathering filled with love, laughter and special touches for a growing family.',
    area: 'camas-washougal',
  },
  {
    slug: 'love-is-brewing-bridal-shower',
    label: 'Bridal Shower',
    title: 'A “Love Is Brewing” Bridal Shower',
    location: 'Washougal, WA',
    date: 'June 2025',
    summary:
      'A coffee-themed bridal shower with a latte-toned balloon arch, coffee-cup favors for every guest, sweet bites on heart picks, and a drink station for toasting the bride.',

    area: 'camas-washougal',
  },
  {
    slug: 'skamania-firefighter-taco-feed-2025',
    label: 'Firefighter Taco Feed',
    title: '2025 Annual Firefighter Taco Feed Fundraiser',
    location: 'Washougal, WA',
    date: '2025',
    summary:
      'A packed house for the Skamania County firefighters’ annual taco feed fundraiser: long tables of raffle and auction baskets, fire-engine decorations, and a dining hall full of neighbors supporting their local fire department.',
    area: 'camas-washougal',
  },
  {
    slug: 'skamania-fire-pancake-feed',
    label: 'Fire Dept. Pancake Feed',
    title: 'Skamania County Fire Pancake Feed',
    location: 'Skamania County, WA',
    date: '2024',
    summary:
      'A community pancake breakfast in the fire station bay: long tables dressed in red and white, fire-engine decorations, and a serving line ready for a hungry crowd.',
    area: 'columbia-river-gorge',
  },
  {
    slug: 'skamania-fire-district-4-open-house',
    label: 'Fire District Open House',
    title: 'Skamania County Fire District 4 Open House',
    location: 'Skamania County, WA',
    date: '2024',
    summary:
      'A community open house and fundraiser for the fire district, with Sparky and Smokey Bear greeting guests, fire engine tours, a hands-on hose demo for kids, treats, and fire-safety giveaways.',
    area: 'columbia-river-gorge',
  },
  {
    slug: 'welcome-baby-shower',
    label: 'Welcome Baby Shower',
    title: 'A “Welcome Baby” Shower',
    location: 'Washougal, WA',
    date: '2023',
    summary:
      'A bright, airy celebration with a blue, green and gold balloon arch and rocking chair, a brunch buffet under the “Welcome Baby” banner, a cupcake stand, and a teddy bear keepsake table. A gathering filled with love, laughter and special touches for a growing family.',
    area: 'camas-washougal',
  },
];
