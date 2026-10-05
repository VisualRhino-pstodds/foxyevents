// Frequently asked questions. Answers marked REVIEW are drafts based on her
// package sheets; have her confirm the wording before launch.

export type Faq = { q: string; a: string; group: 'Weddings' | 'Booking & Pricing' | 'Travel' | 'Other Events' };

export const faqs: Faq[] = [
  {
    group: 'Weddings',
    q: 'What’s the difference between day-of coordination and full service planning?',
    a: 'Day-of coordination is for couples who have planned their wedding and want a professional to bring it all together: we confirm vendors, build the timeline, run the rehearsal, and manage up to 8 hours on the wedding day. Full service planning starts much earlier. We help with vendor selection and contracts, budget tracking, design and styling, invitations and RSVPs, floor plans, and then run the whole day.',
  },
  {
    group: 'Weddings',
    q: 'Does day-of coordination really mean you only show up on the wedding day?',
    // REVIEW
    a: 'No. Our day-of coordination includes a pre-event planning consultation, unlimited phone, text and email communication, planning check-ins, 60–30 day out planning sessions, and a final confirmation meeting 1–2 weeks before the wedding. By the day itself, we know every detail.',
  },
  {
    group: 'Weddings',
    q: 'Do you coordinate the wedding rehearsal?',
    a: 'Yes. Day-of coordination includes 4 hours of rehearsal coordination (additional hours are available for an additional fee), and full service planning includes rehearsal coordination when applicable.',
  },
  {
    group: 'Weddings',
    q: 'Will there be more than one coordinator at our wedding?',
    a: 'Our day-of coordination package includes the option of an assistant coordinator at no additional cost, so there are two of us looking after your day.',
  },
  {
    group: 'Weddings',
    q: 'Do you offer partial planning?',
    a: 'Yes. Partial planning is for couples who have some of the planning done and want help finishing it. Call or email us with what you’ve already handled and we’ll put together a custom quote.',
  },
  {
    group: 'Booking & Pricing',
    q: 'How much does a wedding coordinator cost?',
    a: 'Our day-of coordination starts at $800 and full service planning starts at $4,000. Smaller packages and partial planning are also available. The final price depends on your date, guest count, and how much support you’d like.',
  },
  {
    group: 'Booking & Pricing',
    q: 'How far in advance should we book?',
    // REVIEW
    a: 'As early as you can, especially for summer and fall weekends. For full service planning, we recommend reaching out as soon as you’ve set your date. For day-of coordination, many couples book 3–6 months ahead, but contact us even if your date is closer; we’ll do our best to help.',
  },
  {
    group: 'Booking & Pricing',
    q: 'How do we get started?',
    a: 'Call or text us at (360) 921-2352 or email foxyevents360@gmail.com with your date, location, and estimated guest count. We’ll set up a consultation to talk through your event and recommend the right package.',
  },
  {
    group: 'Travel',
    q: 'What areas do you serve?',
    a: 'We’re based in Vancouver, WA, and there’s no set service area. We regularly work throughout Clark County, the Portland metro area, and the Columbia River Gorge, and we travel for events anywhere.',
  },
  {
    group: 'Travel',
    q: 'Do you charge for travel?',
    a: 'There is no travel fee for events within 100 miles of Vancouver, WA. For events beyond 100 miles, mileage and hotel accommodations are added to your quote, itemized before you book.',
  },
  {
    group: 'Other Events',
    q: 'Do you plan events other than weddings?',
    a: 'Absolutely. We plan birthdays, bridal and baby showers, graduations, anniversaries, holiday gatherings, business events, and fundraising and charity events. If your event isn’t listed, reach out; we can probably plan it!',
  },
  {
    group: 'Other Events',
    q: 'Can you help with a corporate or company event?',
    a: 'Yes. We coordinate company holiday parties, team events, client appreciation events, open houses and more, handling vendors, timelines and on-site management so your team can focus on your guests.',
  },
];
