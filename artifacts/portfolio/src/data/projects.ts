export type Project = {
  slug: string;
  title: string;
  url: string;
  category: 'website' | 'app';
  description: string;
  tech: string[];
  coverImage: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: 'riyadh-municipality',
    title: 'Riyadh Municipality Official Website',
    url: 'https://alriyad.gov.sa/',
    category: 'website',
    description: 'A scalable, high-performance platform for the official Riyadh Municipality, built with modern web standards.',
    tech: ['Next.js', 'React', 'TypeScript', 'Strapi'],
    coverImage: '/projects/riyadh.png',
  },
  {
    slug: 'red-bull-mobile-oman',
    title: 'Red Bull Mobile OMAN',
    url: 'https://redbullmobile.om/',
    category: 'website',
    description: 'An engaging mobile telecommunications portal crafted for Red Bull MEA audience in Oman.',
    tech: ['WordPress', 'WooCommerce', 'Custom Theming'],
    coverImage: '/projects/redbull-oman.png',
  },
  {
    slug: 'red-bull-mobile-ksa',
    title: 'Red Bull Mobile KSA',
    url: 'https://redbullmobile.sa/',
    category: 'website',
    description: 'A seamless, high-energy digital experience for Red Bull Mobile users in Saudi Arabia.',
    tech: ['WordPress', 'WooCommerce', 'Custom Theming'],
    coverImage: '/projects/redbull-ksa.png',
  },
  {
    slug: 'mozart-chahine',
    title: 'Mozart Chahine',
    url: 'https://mozartchahine.com/',
    category: 'website',
    description: 'An elegant showcase and eCommerce platform for a renowned music academy and store.',
    tech: ['WordPress', 'Custom Theme'],
    coverImage: '/projects/mozart.png',
  },
  {
    slug: 'santafoo',
    title: 'Santafoo',
    url: 'https://santafoo.fr/',
    category: 'website',
    description: 'A dynamic eCommerce experience delivering fresh culinary offerings to users in France.',
    tech: ['WordPress', 'eCommerce'],
    coverImage: '/projects/santafoo.png',
  },
  {
    slug: 'interesting-times',
    title: 'Interesting Times',
    url: 'https://interestingtimes.com/',
    category: 'website',
    description: 'A progressive, visually striking agency website maximizing modern web development capabilities.',
    tech: ['WordPress'],
    coverImage: '/projects/interesting.png',
  },
  {
    slug: 'what-the-falafel',
    title: 'What The Falafel',
    url: 'https://wtfalafel.co/',
    category: 'website',
    description: 'A vibrant food brand website with integrated ordering and engaging UI.',
    tech: ['WordPress', 'WooCommerce'],
    coverImage: '/projects/wtfalafel.png',
  },
  {
    slug: 'qinwan-dates',
    title: 'Qinwan Dates',
    url: 'https://www.qinwandates.com/',
    category: 'website',
    description: 'A premium eCommerce store for luxury dates, built for seamless conversions and elegant browsing.',
    tech: ['Shopify'],
    coverImage: '/projects/qinwan.png',
  },
  {
    slug: 'solar-web',
    title: 'Solar Web',
    url: 'https://bit.ly/my-solar-web',
    category: 'website',
    description: 'An interactive university web app project demonstrating fundamental software engineering principles.',
    tech: ['Web App'],
    coverImage: '/projects/solar.png',
  },
];
