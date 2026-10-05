// Wedding packages, taken from her Day-of Coordination and Full Service
// Planning sheets. `highlights` show on the card; `features` is the full list.

export type Package = {
  name: string;
  theme: string;
  price: string;
  hook: string;
  blurb: string;
  highlights: string[];
  features: string[];
  note?: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: 'Day-of Coordination',
    theme: 'Celebrate the Love',
    price: 'Starting at $800',
    hook: 'You’ve done the planning… now let us bring it all together.',
    blurb:
      'We manage timelines, vendors, and behind-the-scenes details so your day unfolds seamlessly and you can stay fully present for every moment.',
    highlights: [
      'Up to 8 hours of support on your wedding day',
      'Wedding day timeline creation and confirmation',
      'Vendor review, coordination, and confirmation',
      '4 hours of rehearsal coordination',
      'Option to include an Assistant Coordinator at no additional cost',
      'Unlimited phone, text or email communication',
    ],
    features: [
      'Pre-event planning consultation',
      'Unlimited phone, text or email communications',
      'Planning check-ins and progress meetings',
      '60–30 day out planning sessions',
      'Detailed questionnaire and checklists',
      'Final details/planning/confirmation consultation (1–2 weeks before the wedding)',
      'Wedding day timeline creation and confirmation',
      'Up to 8 hours of support on the day of the wedding',
      'Coordinating pinning of boutonnieres and ensuring VIPs receive flowers',
      'Setting up personal touches: seating cards, menu, table numbers, place cards, guest book and favors',
      'Option to include an Assistant Coordinator at no additional cost',
      '4 hours of rehearsal coordination (additional hours available for an additional fee)',
      'Vendor review, coordination, and confirmation',
      'Assistance with food/dessert set-up',
      'Event wrap-up: packing up personal items, gifts, and cards',
      'Assistance with set-up and tear-down',
    ],
    note: 'Smaller packages and pricing available.',
    featured: true,
  },
  {
    name: 'Full Service Planning',
    theme: 'Love Story in the Making',
    price: 'Starting at $4,000',
    hook: 'You’ve built the vision… we help perfect it.',
    blurb:
      'Planning a wedding takes countless hours. We handle everything from design to day-of details with all vendors and budget: expert guidance, timeline management, vendor communication, and seamless execution so your celebration unfolds effortlessly.',
    highlights: [
      'Vendor recommendations, bookings, and management',
      'Budget guidance and tracking support',
      'Design input, styling guidance, and décor placement',
      'Save-the-dates, invitations, and RSVP management',
      'Floor plan, layout, and ceremony & reception logistics',
      'Event execution from start to finish',
    ],
    features: [
      'Planning check-ins and progress meetings',
      'Timeline creation and event flow management',
      'Vendor recommendations and referrals',
      'Review of signed vendor contracts',
      'Budget guidance and tracking support',
      'Managing save-the-dates, wedding invitations and RSVPs',
      'Assistance with vendor bookings, communications, and management',
      'Floor plan and layout planning',
      'Ceremony and reception logistics',
      'Design input and styling guidance',
      'Décor placement',
      'Final venue walkthrough',
      'Final confirmation with all vendors (2–4 weeks prior)',
      'Creation of a detailed wedding/event day timeline',
      'Coordinating pinning of boutonnieres and ensuring VIPs receive flowers',
      'Coordination of rehearsal (if applicable)',
      'Day-of setup oversight',
      'Troubleshooting and handling unexpected issues',
      'Point of contact for family, wedding party, and vendors',
      'Event execution from start to finish',
      'Assistance with setup, breakdown & cleanup coordination',
      'Event wrap-up: packing up all personal items, gifts, and cards',
    ],
    note: 'Partial planning pricing available.',
  },
];
