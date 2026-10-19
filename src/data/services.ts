// Event types, from her "Services We Offer" sheet. `slug` matches a folder in
// src/assets/photos/. Drop photos into that folder and they appear on the
// Services and Gallery pages.

export type Service = {
  slug: 'weddings' | 'social' | 'business' | 'fundraising';
  title: string;
  short: string;
  intro: string;
  includes: string[];
  link?: { href: string; label: string };
};

export const services: Service[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    short: 'Full service planning, partial planning, or day-of coordination, so your day unfolds seamlessly.',
    intro:
      'Whether you want us beside you from the first venue tour or just need someone to bring it all together on the day, we’ll manage the timelines, vendors and behind-the-scenes details so you can stay fully present for every moment.',
    includes: ['Full Service Planning', 'Partial Planning', 'Day-of Coordination'],
    link: { href: '/packages', label: 'See wedding packages & pricing' },
  },
  {
    slug: 'social',
    title: 'Social Celebrations',
    short: 'Birthdays, showers, graduations, anniversaries and holiday gatherings with personality.',
    intro:
      'Life’s milestones deserve more than a scramble. We design celebrations with a theme, a flow, and moments your guests will talk about long after.',
    includes: ['Birthdays', 'Bridal Showers', 'Baby Showers', 'Graduations', 'Anniversaries', 'Holiday Gatherings'],
  },
  {
    slug: 'business',
    title: 'Business Events',
    short: 'Holiday parties, team events, launches and client appreciation, polished and on schedule.',
    intro:
      'Professional events that reflect your brand and run on time, so your team can focus on your guests instead of the logistics.',
    includes: [
      'Company holiday parties',
      'Team-building and appreciation events',
      'Open houses and launches',
      'Client and customer events',
    ],
  },
  {
    slug: 'fundraising',
    title: 'Community & Fundraising',
    short: 'Open houses, pancake feeds, benefit events and fundraisers that bring a community together.',
    intro:
      'Community events and fundraisers run best when organizers can focus on people, not logistics. We coordinate the setup, flow and details so your team can greet neighbors, thank supporters and celebrate your cause.',
    includes: [
      'Community open houses',
      'Pancake feeds and community breakfasts',
      'Fire department and public agency events',
      'Galas and benefit dinners',
      'Auctions and fundraisers',
      'Charity celebrations',
    ],
  },
];
