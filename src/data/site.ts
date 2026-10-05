// Business info used across the whole site. Edit here; every page updates.

export const site = {
  name: 'Foxy Events',
  tagline: 'Making Your Events Effortless & Memorable',
  description:
    'Foxy Events is an event planning and coordination team based in Vancouver, WA, offering wedding planning, day-of coordination, social celebrations, business events and fundraisers.',
  // Switch to her real domain and set `launched: true` when the domain is connected.
  // While false, search engines are asked not to index the temporary vercel.app address.
  url: 'https://foxyeventsco.vercel.app',
  launched: false,
  phone: '(360) 921-2352',
  phoneHref: 'tel:+13609212352',
  email: 'foxyevents360@gmail.com',
  responseTime: 'We reply to every call, text and email within one business day.', // TODO: confirm
  homeBase: { city: 'Vancouver', region: 'WA', lat: 45.6387, lng: -122.6615 },
  socials: [
    // TODO: add her Instagram / Facebook links, e.g. { label: 'Instagram', href: 'https://instagram.com/...' }
  ] as { label: string; href: string }[],
};

export const travel = {
  freeRadiusMiles: 100,
  headline: 'Home base: Vancouver, WA',
  summary: 'No travel fees within 100 miles. Beyond that, mileage and hotel are added to your quote.',
  detail:
    'Foxy Events has no set service area. Events within 100 miles of Vancouver, WA, which covers Portland, Salem, Longview and the Columbia Gorge, include travel at no charge. For events beyond 100 miles, mileage and hotel accommodations are added to your quote, and you’ll see them itemized before you book.',
};
