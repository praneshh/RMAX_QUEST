interface FooterLink {
  text: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
      { text: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Business Size',
    links: [
      { text: 'Entrepreneurs', href: '#' },
      { text: 'SMBs', href: '#' },
      { text: 'Enterprise', href: '#' },
    ],
  },
  {
    title: 'Business Type',
    links: [
      { text: 'Health & Wellness', href: '#' },
      { text: 'Sports', href: '#' },
      { text: 'Learning Activities', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms & Conditions', href: '#' },
      { text: 'Return Policy', href: '#' },
    ],
  },
  {
    title: 'Contact us',
    links: [
      { text: 'support@rmax.com' },
      { text: '+91-8459671235' },
    ],
  },
];