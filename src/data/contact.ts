export interface ContactInquiry {
  title: string;
  glowClass: string;
  accentColor: string;
  items: string[];
}

export const CONTACT_INQUIRIES: ContactInquiry[] = [
  {
    title: 'Engineering Inquiries',
    glowClass: 'dev-glow',
    accentColor: 'var(--accent-dev)',
    items: [
      'Provide a brief overview of your project.',
      'Describe the features, systems, or architecture you need built.',
      'Give an estimated timeline.'
    ]
  },
  {
    title: 'Audio Inquiries',
    glowClass: 'prod-glow',
    accentColor: 'var(--accent-prod)',
    items: [
      'Links to your current demos or rough mixes.',
      '2-3 reference tracks capturing your target sound.',
      'Your preferred delivery date.'
    ]
  }
];
