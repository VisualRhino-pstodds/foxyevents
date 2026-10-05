// Service-area pages (/areas/<slug>). Each page needs genuinely local content
// to rank, so these are drafts for her to personalize. The best additions are
// venues she has worked at and photos from events in that area.

export type Area = {
  slug: string;
  name: string; // e.g. "Portland, OR"
  title: string; // page <title>
  description: string; // meta description
  headline: string;
  intro: string;
  local: { heading: string; text: string }[];
  nearby: string[];
  travelNote: string;
};

export const areas: Area[] = [
  {
    slug: 'vancouver-wa',
    name: 'Vancouver, WA',
    title: 'Wedding & Event Planner in Vancouver, WA',
    description:
      'Foxy Events is a Vancouver, WA wedding planner and event coordinator. Day-of coordination from $800, full service planning from $4,000, plus birthdays, showers, business events and fundraisers.',
    headline: 'Vancouver’s wedding & event planners',
    intro:
      'Vancouver is home. We plan and coordinate weddings, celebrations, business events and fundraisers across Clark County, and because we’re local, there’s never a travel fee for events here.',
    local: [
      {
        heading: 'Local knowledge, local vendors',
        text: 'Working in our own backyard means we know how the area’s venues flow, how long it really takes to get across the I-5 and I-205 bridges on a Saturday, and which local vendors deliver.',
      },
      {
        heading: 'From the waterfront to wine country',
        text: 'Clark County offers everything from Columbia River waterfront views to barns, vineyards and private estates out toward Battle Ground, Ridgefield and La Center. Whatever setting you choose, we’ll build a plan and timeline around it.',
      },
      {
        heading: 'Every kind of event',
        text: 'Beyond weddings, we coordinate birthdays, bridal and baby showers, graduations, anniversaries, company holiday parties and charity fundraisers throughout the Vancouver area.',
      },
    ],
    nearby: ['Camas', 'Washougal', 'Battle Ground', 'Ridgefield', 'La Center', 'Brush Prairie', 'Orchards', 'Hazel Dell'],
    travelNote: 'No travel fee: Vancouver is our home base.',
  },
  {
    slug: 'portland-or',
    name: 'Portland, OR',
    title: 'Portland Wedding Coordinator & Event Planner',
    description:
      'Portland, OR wedding coordinator and event planner. Foxy Events offers day-of coordination from $800 and full service wedding planning from $4,000, with no travel fees in the Portland metro area.',
    headline: 'Wedding coordination & event planning in Portland',
    intro:
      'Just across the river from our Vancouver home base, Portland is one of our favorite places to celebrate. We coordinate weddings and events throughout the Portland metro area with no travel fees.',
    local: [
      {
        heading: 'Portland weddings, handled',
        text: 'Portland couples have incredible choices: industrial-chic city lofts, rose gardens, historic ballrooms, and wineries a short drive away. We manage the timeline, vendors and every detail so you can enjoy your day.',
      },
      {
        heading: 'Day-of coordination for planners who did it themselves',
        text: 'Many Portland couples love planning their own wedding but want a professional to run the day. Our day-of coordination brings it all together, from the rehearsal to the last dance and wrap-up.',
      },
      {
        heading: 'Business & charity events',
        text: 'We also coordinate company parties, client events and fundraising galas for Portland businesses and nonprofits, keeping everything on schedule so your team can focus on your guests.',
      },
    ],
    nearby: ['Beaverton', 'Lake Oswego', 'Tigard', 'Hillsboro', 'Gresham', 'Milwaukie', 'West Linn', 'Oregon City'],
    travelNote: 'No travel fee: the Portland metro area is well within 100 miles of our home base.',
  },
  {
    slug: 'camas-washougal',
    name: 'Camas & Washougal, WA',
    title: 'Camas & Washougal Wedding and Event Planner',
    description:
      'Wedding planner and event coordinator serving Camas and Washougal, WA. Day-of coordination from $800, full service planning from $4,000. Local to Clark County with no travel fees.',
    headline: 'Weddings & events in Camas and Washougal',
    intro:
      'Camas and Washougal are just minutes from our Vancouver home base, and their small-town charm and Columbia River scenery make for beautiful celebrations.',
    local: [
      {
        heading: 'Small-town charm, big-day details',
        text: 'From downtown Camas to riverside and countryside settings in Washougal, these communities offer intimate, scenic places to celebrate. We take care of the logistics so the day feels effortless.',
      },
      {
        heading: 'Gateway to the Gorge',
        text: 'Washougal sits at the western edge of the Columbia River Gorge, so many couples here enjoy Gorge views without the longer drive. We help plan guest travel, timing and weather backups.',
      },
      {
        heading: 'Celebrations of every size',
        text: 'Showers, milestone birthdays, graduations and community fundraisers: we coordinate events of every kind in Camas and Washougal.',
      },
    ],
    nearby: ['Vancouver', 'Fern Prairie', 'Troutdale', 'Gresham', 'Stevenson'],
    travelNote: 'No travel fee: Camas and Washougal are minutes from our home base.',
  },
  {
    slug: 'columbia-river-gorge',
    name: 'Columbia River Gorge',
    title: 'Columbia River Gorge Wedding Planner & Coordinator',
    description:
      'Columbia River Gorge wedding planner and day-of coordinator. Foxy Events plans Gorge weddings and events from Vancouver, WA, with no travel fees within 100 miles.',
    headline: 'Columbia River Gorge weddings & events',
    intro:
      'Waterfalls, basalt cliffs and river views: the Columbia River Gorge is one of the most breathtaking places in the Northwest to say “I do.” We coordinate Gorge weddings and events on both the Washington and Oregon sides.',
    local: [
      {
        heading: 'Planning for the Gorge',
        text: 'Gorge weddings come with unique details: wind, changing weather, longer guest travel, and vendors coming from different directions. We build timelines and backup plans that account for all of it.',
      },
      {
        heading: 'Guest logistics',
        text: 'With guests often staying in nearby towns, we help coordinate transportation timing, welcome details and day-of communication so everyone arrives where they need to be.',
      },
      {
        heading: 'Within our travel radius',
        text: 'Most of the Gorge, including Hood River, White Salmon and Stevenson, is within 100 miles of our Vancouver home base, so there’s no added travel fee.',
      },
    ],
    nearby: ['Hood River', 'White Salmon', 'Stevenson', 'Cascade Locks', 'Corbett', 'Troutdale', 'The Dalles'],
    travelNote: 'Most Gorge locations are within 100 miles of Vancouver, WA, so there’s no travel fee.',
  },
];
