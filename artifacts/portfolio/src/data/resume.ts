export const skills = {
  frontend: [
    'ReactJS',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'TailwindCSS',
    'HTML5',
    'CSS3',
    'SCSS',
    'jQuery',
  ],
  backend: ['NodeJS', 'ExpressJS', 'PHP', 'C++', 'C#', 'MySQL', 'Microsoft SQL'],
  tooling: [
    'React Storybook',
    'React Hook Form',
    'Zod',
    'Jest',
    'GitHub',
    'GitLab',
    'Docker',
    'Kubernetes',
  ],
  other: ['Strapi CMS', 'Firebase', 'WordPress', 'Shopify', 'Squarespace', 'LabView', 'MATLAB'],
};

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Domain Agents',
    period: '05/2026 – Present',
    location: 'Ontario, Canada',
    points: [
      'Building and maintaining the front-end of the DomainAgents domain marketplace and its back-office admin platform, using Angular and TypeScript.',
      'Developing data-heavy admin interfaces for member management, listings, and detail views with filtering, status indicators, and responsive layouts.',
      'Defining typed API contracts with TypeScript interfaces that mirror backend payloads, keeping the front-end and API in sync.',
      "Owning the team's GitHub repositories: managing branching, reviewing pull requests, and keeping the codebase clean and consistent.",
      'Maintaining and shipping changes through containerized CI/CD pipelines (Kubernetes), from build to deployment.'
    ],
  },
  {
    role: 'Mid Level Software Engineer',
    company: 'Four Principles',
    period: '01/2025 – 05/2026',
    location: 'Riyadh, Saudi Arabia',
    points: [
      'Working on the official Riyadh Municipality website, building and maintaining scalable front-end components.',
      'Developing modular UI components using React.js, with thorough testing using Jest.',
      'Creating interactive forms using React Hook Form, ensuring strong validation and accessibility.',
      'Implementing pages and routing using Next.js & TypeScript, with a focus on performance and SEO.',
      'Integrating front-end features with backend and Strapi APIs, also handling data dynamically.',
      'Using GitLab for version control, merge requests, and continuous integration workflows.',
      'Maintaining design consistency and reusability through Storybook documentation.',
    ],
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Interesting Times',
    period: '06/2022 – 01/2025',
    location: 'Beirut, Lebanon',
    points: [
      'Development of innovative progressive web applications, maximizing modern web development capabilities.',
      'Specialized in developing custom WordPress sites and managing content for renowned brands.',
      'Managed content for major clients, including Red Bull MEA, Dolphin Energy, and others on platforms like WooCommerce.',
      'Enhanced user experience through effective UI/UX design practices, ensuring intuitive navigation and accessibility across devices.',
    ],
  },
];

export const education = [
  {
    degree: 'BSc and MSc in Computer Engineering and Telecommunications',
    institution: 'Lebanese University Faculty of Engineering',
    location: 'Roumieh, Lebanon',
    period: '2020 – 2024',
  },
];

export const languages = [
  { flag: 'https://flagcdn.com/gb.svg', language: 'English', proficiency: 'Full Professional Proficiency' },
  { flag: 'https://flagcdn.com/lb.svg', language: 'Arabic', proficiency: 'Native or Bilingual Proficiency' },
  { flag: 'https://flagcdn.com/fr.svg', language: 'French', proficiency: 'Professional Working Proficiency' },
];
