// Past events shown in the Gallery. `slug` matches the event's photo folder,
// e.g. src/assets/photos/weddings/2026-08-09-mt-hood-timberline/.
// Venue names here are real local content that helps search rankings.
// Newest first.

export type PastEvent = {
  slug: string;
  title: string;
  venue: string;
  location: string;
  date: string; // display text, e.g. "August 2026"
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
];
