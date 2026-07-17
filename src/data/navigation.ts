export interface NavItem {
  label: string;
  target: string;
  href: string;
}

export interface SocialLink {
  url: string;
  title: string;
  svg: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', target: 'home', href: '#panel-home' },
  { label: 'Game Development', target: 'dev', href: '#panel-dev' },
  { label: 'Audio Production', target: 'prod', href: '#panel-prod' },
  { label: 'Pricing & Rates', target: 'pricing', href: '#panel-pricing' },
  { label: 'Contact', target: 'contact', href: '#panel-contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://www.youtube.com/@interlvper',
    title: 'YouTube',
    svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>'
  },
  {
    url: 'https://github.com/Interlvper',
    title: 'GitHub',
    svg: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>'
  },
  {
    url: 'https://www.instagram.com/tylerjmyles/',
    title: 'Instagram',
    svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>'
  }
];
