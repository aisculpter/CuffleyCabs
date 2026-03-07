export interface RouteData {
  slug: string;
  origin: string;
  destination: string;
  distanceMiles: number;
  durationMins: number;
  priceFrom: number;
  faqs: Array<{ question: string; answer: string }>;
}

const airports = [
  { name: 'Heathrow Airport', slug: 'heathrow', baseMiles: 24, baseMins: 45, basePrice: 65 },
  { name: 'Gatwick Airport', slug: 'gatwick', baseMiles: 45, baseMins: 75, basePrice: 85 },
  { name: 'Stansted Airport', slug: 'stansted', baseMiles: 30, baseMins: 50, basePrice: 55 },
  { name: 'Luton Airport', slug: 'luton', baseMiles: 15, baseMins: 30, basePrice: 40 },
  { name: 'London City Airport', slug: 'london-city', baseMiles: 22, baseMins: 55, basePrice: 60 },
];

// offset = approximate extra miles from Cuffley base distances
const origins = [
  { name: 'Cuffley', slug: 'cuffley', offset: 0 },
  { name: 'Potters Bar', slug: 'potters-bar', offset: 2 },
  { name: 'Brookmans Park', slug: 'brookmans-park', offset: 3 },
  { name: 'Goffs Oak', slug: 'goffs-oak', offset: 2 },
  { name: 'Northaw', slug: 'northaw', offset: 1 },
  { name: 'Cheshunt', slug: 'cheshunt', offset: 5 },
  { name: 'Enfield', slug: 'enfield', offset: 8 },
  { name: 'Waltham Cross', slug: 'waltham-cross', offset: 6 },
  { name: 'Welwyn Garden City', slug: 'welwyn-garden-city', offset: 6 },
];

function formatDuration(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m} minutes`;
  return m === 0 ? `${h} hour${h > 1 ? 's' : ''}` : `${h} hr ${m} min`;
}

function makeFaqs(
  origin: string,
  airport: string,
  durationMins: number,
  priceFrom: number,
): RouteData['faqs'] {
  const duration = formatDuration(durationMins);
  return [
    {
      question: `How long does a taxi from ${origin} to ${airport} take?`,
      answer: `The journey from ${origin} to ${airport} takes approximately ${duration} in normal traffic conditions. We recommend allowing extra time during rush hours or on busy travel days.`,
    },
    {
      question: `How much does a taxi from ${origin} to ${airport} cost?`,
      answer: `Our fixed-price taxi from ${origin} to ${airport} starts from £${priceFrom}. The price is agreed upfront before your journey — no meter, no surge pricing, no surprises.`,
    },
    {
      question: `Do you track flights for ${airport} pickups?`,
      answer: `Yes. For all airport collection journeys, we monitor your flight in real time. If your flight is delayed, your driver will adjust the pick-up time accordingly at no extra cost.`,
    },
    {
      question: `How do I book a taxi from ${origin} to ${airport}?`,
      answer: `You can book online using the form below, or contact us via WhatsApp. We recommend booking at least 24 hours in advance, though we also accept last-minute requests subject to availability.`,
    },
    {
      question: `Is the price from ${origin} to ${airport} fixed?`,
      answer: `Yes — all our airport transfer prices are fixed and confirmed before your journey begins. The price you see is the price you pay, with no hidden charges.`,
    },
  ];
}

export const routes: RouteData[] = origins.flatMap((origin) =>
  airports.map((airport) => {
    const distanceMiles = airport.baseMiles + origin.offset;
    const durationMins = airport.baseMins + Math.round(origin.offset * 1.5);
    const priceFrom = Math.ceil((airport.basePrice + origin.offset * 1.8) / 5) * 5;

    return {
      slug: `${origin.slug}-to-${airport.slug}-taxi`,
      origin: origin.name,
      destination: airport.name,
      distanceMiles,
      durationMins,
      priceFrom,
      faqs: makeFaqs(origin.name, airport.name, durationMins, priceFrom),
    };
  }),
);
