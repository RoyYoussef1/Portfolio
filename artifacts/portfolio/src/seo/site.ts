/**
 * Single source of truth for SEO / GEO (AI search) metadata.
 * Used at runtime by <SEO /> and at build time by seo-plugin.ts
 * (which writes per-page HTML, sitemap.xml and llms.txt).
 *
 * Keep this file free of imports from React or node_modules so it can be
 * loaded by vite.config.ts as well as by the app.
 */
import { COUNTRIES, COUNTRY_REGIONS } from "../data/countries";

export const SITE = {
  url: "https://www.royyoussef.com",
  name: "Roy Youssef",
  shortName: "Roy Youssef",
  jobTitle: "Senior Full Stack Engineer",
  tagline: "Software Engineer & Digital Architect",
  locale: "en_US",
  location: { city: "Beirut", country: "Lebanon", countryCode: "LB" },
  email: "roy.b.youssef@gmail.com",
  phone: "+96176348117",
  image: "/roy_compressed.png",
  ogImage: "/og-image.jpg",
  ogImageAlt: "Roy Youssef - Senior Full Stack Engineer",
  resume: "/Roy_Youssef_RESUME_2026.pdf",
  themeColor: "#09090b",
  sameAs: [
    "https://github.com/RoyYoussef1",
    "https://www.linkedin.com/in/roy-youssef-097a47252",
  ],
  worksFor: { name: "Domain Agents", url: "https://domainagents.com" },
  alumniOf: {
    name: "Lebanese University Faculty of Engineering",
    url: "https://www.ul.edu.lb",
  },
  /** One-paragraph factual summary — reused in hero copy, meta, schema and llms.txt. */
  summary:
    "Roy Youssef is a Senior Full Stack Engineer based in Beirut, Lebanon, currently at Domain Agents. He builds fast, SEO-friendly web platforms with React, Next.js, Angular, TypeScript and Go, and has shipped 40+ websites — from the official Riyadh Municipality and Abu Dhabi Early Childhood Authority websites to eCommerce for Red Bull Mobile Oman and KSA.",
} as const;

export type PageKey = "home" | "about" | "projects" | "contact" | "notFound";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Short label used in breadcrumbs and nav. */
  label: string;
  noindex?: boolean;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
};

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    path: "/",
    label: "Home",
    title: "Roy Youssef | Senior Full Stack Engineer & Web Developer",
    description:
      "Roy Youssef is a Senior Full Stack Engineer in Beirut, Lebanon building fast, SEO-friendly websites and web apps with React, Next.js, Angular, TypeScript and Go.",
    changefreq: "monthly",
    priority: 1.0,
  },
  about: {
    path: "/about",
    label: "About",
    title: "About Roy Youssef | Senior Full Stack Engineer",
    description:
      `Roy Youssef's career from Beirut to Riyadh to Domain Agents: experience, skills, education, languages and clients in ${COUNTRIES.length} countries.`,
    changefreq: "monthly",
    priority: 0.9,
  },
  projects: {
    path: "/projects",
    label: "Projects",
    title: "Projects - Websites & Web Apps by Roy Youssef",
    description:
      "40+ websites and web apps built by Roy Youssef, including the Riyadh Municipality website, Abu Dhabi ECA, Red Bull Mobile Oman & KSA, and eCommerce stores.",
    changefreq: "monthly",
    priority: 0.9,
  },
  contact: {
    path: "/contact",
    label: "Contact",
    title: "Contact Roy Youssef - Hire a Full Stack Engineer",
    description:
      "Contact Roy Youssef for full-time engineering roles or freelance web projects. Email roy.b.youssef@gmail.com or send a message through the contact form.",
    changefreq: "yearly",
    priority: 0.7,
  },
  notFound: {
    path: "/404",
    label: "Not found",
    title: "404 - Page Not Found | Roy Youssef",
    description: "The page you were looking for could not be found.",
    noindex: true,
  },
};

/** Question/answer pairs shown on the About page and exposed as FAQPage schema. */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Who is Roy Youssef?",
    a: "Roy Youssef is a Senior Full Stack Engineer based in Beirut, Lebanon. He currently works at Domain Agents, building the front end of its domain marketplace and admin platform in Angular and TypeScript, and its backend services in Go.",
  },
  {
    q: "What does Roy Youssef specialize in?",
    a: "High-performance, SEO-friendly websites and web applications. His core stack is React, Next.js, Angular, TypeScript and Go, alongside Node.js, WordPress, Shopify and Strapi CMS, with Docker and Kubernetes for deployment.",
  },
  {
    q: "What notable projects has Roy Youssef worked on?",
    a: "He has worked on the official Riyadh Municipality website, the Abu Dhabi Early Childhood Authority website, Red Bull Mobile Oman and Red Bull Mobile KSA, and eCommerce sites such as Santafoo — over 40 projects for clients in 17 countries across the Middle East, Africa, Europe, Central Asia and North America.",
  },
  {
    q: "Which countries has Roy Youssef worked with?",
    a: `Roy has delivered work for clients in ${COUNTRIES.length} countries: ${COUNTRY_REGIONS.map(
      (r) => `${r.countries.map((c) => c.name).join(", ")} (${r.region})`,
    ).join("; ")}.`,
  },
  {
    q: "Where did Roy Youssef study?",
    a: "He holds a BSc and MSc in Computer Engineering and Telecommunications from the Lebanese University Faculty of Engineering (2020 – 2024).",
  },
  {
    q: "Is Roy Youssef available for freelance work?",
    a: "Yes. Roy is open to full-time engineering roles and freelance projects. You can reach him at roy.b.youssef@gmail.com or through the contact page on royyoussef.com.",
  },
  {
    q: "What languages does Roy Youssef speak?",
    a: "English (full professional proficiency), Arabic (native) and French (professional working proficiency).",
  },
];

export const absUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE.url}${path === "/" ? "/" : path}`;

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function personSchema(knowsAbout: string[] = []) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    url: SITE.url + "/",
    image: absUrl(SITE.image),
    jobTitle: SITE.jobTitle,
    description: SITE.summary,
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressCountry: SITE.location.countryCode,
    },
    worksFor: { "@type": "Organization", ...SITE.worksFor },
    alumniOf: { "@type": "CollegeOrUniversity", ...SITE.alumniOf },
    knowsLanguage: ["en", "ar", "fr"],
    knowsAbout,
    sameAs: SITE.sameAs,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url + "/",
    name: `${SITE.name} — Portfolio`,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

function breadcrumb(page: PageMeta) {
  if (page.path === "/") return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url + "/" },
      { "@type": "ListItem", position: 2, name: page.label, item: absUrl(page.path) },
    ],
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

type ProjectLike = { title: string; url: string; description: string; coverImage: string; tech: string[] };

/** Full JSON-LD graph for a page. */
export function pageSchema(
  key: PageKey,
  opts: { knowsAbout?: string[]; projects?: ProjectLike[] } = {},
) {
  const page = PAGES[key];
  const url = absUrl(page.path);
  const pageType =
    key === "home" || key === "about" ? "ProfilePage" : key === "contact" ? "ContactPage" : key === "projects" ? "CollectionPage" : "WebPage";

  const graph: Record<string, unknown>[] = [
    personSchema(opts.knowsAbout),
    websiteSchema(),
    {
      "@type": pageType,
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      ...(pageType === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : { about: { "@id": PERSON_ID } }),
      primaryImageOfPage: absUrl(SITE.ogImage),
    },
  ];

  const crumbs = breadcrumb(page);
  if (crumbs && !page.noindex) graph.push(crumbs);
  if (key === "about") graph.push(faqSchema());
  if (key === "projects" && opts.projects) {
    graph.push({
      "@type": "ItemList",
      name: "Projects by Roy Youssef",
      numberOfItems: opts.projects.length,
      itemListElement: opts.projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          url: p.url,
          description: p.description,
          image: absUrl(p.coverImage),
          keywords: p.tech.join(", "),
          creator: { "@id": PERSON_ID },
        },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
