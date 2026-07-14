export interface PriceItem {
  service: string;
  cost: string;
}

export interface PriceCategory {
  title: string;
  description: string;
  items: PriceItem[];
}

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: 'Game Development',
    description: 'A fixed hourly rate for all work related to game development and general programming.',
    items: [
      { service: 'Standard Hourly Rate', cost: '$35 / hr' }
    ]
  },
  {
    title: 'Mixing & Mastering',
    description: 'Flat rates for comprehensive dynamic and frequency balancing optimized for modern streaming. These prices estimate an average track with a length between 3-5 minutes.',
    items: [
      { service: 'Mix & Master', cost: '~ $220' },
      { service: 'Full Mix', cost: '~ $200' },
      { service: 'Mastering', cost: '~ $50' }
    ]
  },
  {
    title: 'Composition & Tracking',
    description: 'Ground-up modern metal instrumentals, session tracking, and surgical editing. These prices are estimates for an average song with a standard number of tracks that is 3-5 minutes long.',
    items: [
      { service: 'Full Song', cost: '~ $350' },
      { service: 'Guitar Tracking', cost: '~ $150' },
      { service: 'DI Alignment & Editing', cost: '~ $80' },
      { service: 'Reamp & Tone Matching', cost: '~ $20' }
    ]
  }
];
