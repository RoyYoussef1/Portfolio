/**
 * Build-time SEO / GEO plugin.
 *
 * The site is a client-rendered SPA, so without this every URL would ship an
 * empty <div id="root"> and generic <head>. Most AI crawlers (GPTBot,
 * ClaudeBot, PerplexityBot…) and social previewers don't execute JavaScript,
 * so they would see nothing. After `vite build` this plugin:
 *
 *  - writes one static HTML file per route (index.html, about.html, …, 404.html)
 *    with that page's title, description, canonical, Open Graph / Twitter tags
 *    and JSON-LD structured data, plus a plain-HTML version of the page content
 *    inside #root (React replaces it as soon as the app boots);
 *  - generates sitemap.xml, llms.txt and llms-full.txt from the same data the
 *    UI uses, so they never go stale.
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { FAQ, PAGES, SITE, absUrl, pageSchema, type PageKey } from "./src/seo/site";
import { education, experience, languages, skills } from "./src/data/resume";
import { projects } from "./src/data/projects";
import { SERVICES, STATS } from "./src/data/home";
import { COUNTRY_REGIONS, COUNTRIES } from "./src/data/countries";

const HEAD_START = "<!--seo:start-->";
const HEAD_END = "<!--seo:end-->";
const knowsAbout = Object.values(skills).flat();

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ------------------------------------------------------------------ head -- */

export function headTags(key: PageKey): string {
  const page = PAGES[key];
  const url = absUrl(page.path);
  const image = absUrl(SITE.ogImage);
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const schema = pageSchema(key, {
    knowsAbout,
    projects: key === "projects" ? projects : undefined,
  });

  return [
    HEAD_START,
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    page.noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${key === "home" || key === "about" ? "profile" : "website"}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(SITE.ogImageAlt)}" />`,
    key === "home" || key === "about" ? `<meta property="profile:first_name" content="Roy" />\n<meta property="profile:last_name" content="Youssef" />` : "",
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${esc(SITE.ogImageAlt)}" />`,
    `<script type="application/ld+json" id="ld-json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
    HEAD_END,
  ]
    .filter(Boolean)
    .join("\n    ");
}

/* ------------------------------------------------------------------ body -- */

const link = (href: string, text: string, external = false) =>
  `<a href="${esc(href)}"${external ? ' rel="noopener"' : ""}>${esc(text)}</a>`;

const nav = () =>
  `<header><nav aria-label="Main"><ul>${(["home", "about", "projects", "contact"] as PageKey[])
    .map((k) => `<li>${link(PAGES[k].path, PAGES[k].label)}</li>`)
    .join("")}</ul></nav></header>`;

const footer = () =>
  `<footer><p>${link(SITE.sameAs[0], "GitHub", true)} · ${link(SITE.sameAs[1], "LinkedIn", true)} · ${link(
    `mailto:${SITE.email}`,
    SITE.email,
  )}</p><p>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}. All rights reserved.</p></footer>`;

const projectList = (list = projects) =>
  `<ul>${list
    .map(
      (p) =>
        `<li><h3>${link(p.url, p.title, true)}</h3><p>${esc(p.description)}</p><p>Industry: ${esc(
          p.tags.join(", "),
        )}. Built with: ${esc(p.tech.join(", "))}.</p></li>`,
    )
    .join("")}</ul>`;

const bodies: Record<PageKey, () => string> = {
  home: () => `
<h1>Roy Youssef.</h1>
<h2>${esc(SITE.tagline)}.</h2>
<p>${esc(SITE.summary)}</p>
<ul>${STATS.map((s) => `<li><strong>${s.value}</strong> ${esc(s.label)}</li>`).join("")}</ul>
<p>${link("/projects", "View Projects")} · <a href="${SITE.resume}">Download CV</a></p>
<section><h2>What I Build.</h2>${SERVICES.map(
    (s) => `<h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><p>${esc(s.tags.join(", "))}</p>`,
  ).join("")}</section>
<section><h2>Selected Work</h2>${projectList(projects.slice(0, 3))}<p>${link("/projects", "View all projects")}</p></section>
<section><h2>The toolkit I build with.</h2><p>${esc(knowsAbout.join(", "))}</p><p>${link("/about", "Explore full skill matrix")}</p></section>`,

  about: () => `
<h1>About Me.</h1>
<section><h2>Profile</h2><p>${esc(SITE.summary)}</p></section>
<section><h2>Experience</h2>${experience
    .map(
      (j) =>
        `<article><h3>${esc(j.role)} — ${esc(j.company)}</h3><p>${esc(j.location)} · ${esc(j.period)}</p><ul>${j.points
          .map((pt) => `<li>${esc(pt)}</li>`)
          .join("")}</ul></article>`,
    )
    .join("")}</section>
<section><h2>Education</h2>${education
    .map((e) => `<h3>${esc(e.degree)}</h3><p>${esc(e.institution)} — ${esc(e.location)} · ${esc(e.period)}</p>`)
    .join("")}</section>
<section><h2>Skills Matrix</h2>${Object.entries(skills)
    .map(([cat, items]) => `<h3>${esc(cat)}</h3><p>${esc(items.join(", "))}</p>`)
    .join("")}</section>
<section><h2>Languages</h2><ul>${languages
    .map((l) => `<li>${esc(l.language)} — ${esc(l.proficiency)}</li>`)
    .join("")}</ul></section>
<section><h2>Frequently Asked Questions</h2>${FAQ.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}</section>`,

  about2: () =>
    bodies.about() +
    `
<section><h2>Clients in ${COUNTRIES.length} countries</h2>${COUNTRY_REGIONS.map((r) => `<h3>${esc(r.region)}</h3><p>${esc(r.countries.map((c) => c.name).join(", "))}</p>`).join("")}</section>`,

  projects: () => `
<h1>Projects.</h1>
<p>Digital platforms, e-commerce systems, and applications engineered for clients globally.</p>
${projectList()}`,

  contact: () => `
<h1>Initialize Contact.</h1>
<p>Whether you're looking to fill a senior engineering role or need a high-end application built, my inbox is open.</p>
<ul>
<li>Email: ${link(`mailto:${SITE.email}`, SITE.email)}</li>
<li>Phone: ${link(`tel:${SITE.phone}`, "+961 76 348 117")}</li>
<li>Location: ${SITE.location.city}, ${SITE.location.country}</li>
<li>${link(SITE.sameAs[0], "GitHub", true)}</li>
<li>${link(SITE.sameAs[1], "LinkedIn", true)}</li>
</ul>`,

  notFound: () => `
<h1>404</h1>
<p>System fault. The requested route could not be resolved in the current architecture.</p>
<p>${link("/", "Return to the home page")}</p>`,
};

export function bodyHtml(key: PageKey): string {
  return `<div id="prerender">${nav()}<main>${bodies[key]()}</main>${footer()}</div>`;
}

/* --------------------------------------------------- sitemap / llms.txt -- */

const INDEXABLE: PageKey[] = ["home", "about", "projects", "contact"];

export function sitemapXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = INDEXABLE.map((k) => {
    const p = PAGES[k];
    const img =
      k === "home"
        ? `\n    <image:image><image:loc>${absUrl(SITE.image)}</image:loc></image:image>`
        : k === "projects"
          ? projects.map((pr) => `\n    <image:image><image:loc>${absUrl(pr.coverImage)}</image:loc></image:image>`).join("")
          : "";
    return `  <url>
    <loc>${absUrl(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority?.toFixed(1)}</priority>${img}
  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function llmsTxt(): string {
  return `# ${SITE.name}

> ${SITE.summary}

${SITE.name} is a ${SITE.jobTitle} based in ${SITE.location.city}, ${SITE.location.country}. He is open to full-time engineering roles and freelance web projects. Contact: ${SITE.email}.

## Pages

${INDEXABLE.map((k) => `- [${PAGES[k].label}](${absUrl(PAGES[k].path)}): ${PAGES[k].description}`).join("\n")}

## Key facts

- Current role: ${experience[0].role} at ${experience[0].company} (${experience[0].period})
- Previous roles: ${experience
    .slice(1)
    .map((j) => `${j.role} at ${j.company}, ${j.location} (${j.period})`)
    .join("; ")}
- Education: ${education.map((e) => `${e.degree}, ${e.institution} (${e.period})`).join("; ")}
- Core stack: ${[...skills.frontend.slice(0, 5), "Go", "Node.js"].join(", ")}
- Countries worked with (${COUNTRIES.length}): ${COUNTRIES.map((c) => c.name).join(", ")}
- Languages: ${languages.map((l) => `${l.language} (${l.proficiency})`).join(", ")}
- Notable projects: ${projects
    .slice(0, 6)
    .map((p) => p.title)
    .join(", ")}

## Optional

- [Full profile for LLMs](${absUrl("/llms-full.txt")}): complete experience, skills, FAQ and project list
- [Résumé (PDF)](${absUrl(SITE.resume)})
- [GitHub](${SITE.sameAs[0]})
- [LinkedIn](${SITE.sameAs[1]})
`;
}

export function llmsFullTxt(): string {
  return `# ${SITE.name} — full profile

> ${SITE.summary}

Website: ${SITE.url}/
Email: ${SITE.email}
Location: ${SITE.location.city}, ${SITE.location.country}
GitHub: ${SITE.sameAs[0]}
LinkedIn: ${SITE.sameAs[1]}

## Experience

${experience
  .map((j) => `### ${j.role} — ${j.company}\n${j.location} · ${j.period}\n\n${j.points.map((p) => `- ${p}`).join("\n")}`)
  .join("\n\n")}

## Education

${education.map((e) => `- ${e.degree}, ${e.institution}, ${e.location} (${e.period})`).join("\n")}

## Skills

${Object.entries(skills)
  .map(([cat, items]) => `- ${cat[0].toUpperCase() + cat.slice(1)}: ${items.join(", ")}`)
  .join("\n")}

## Services

${SERVICES.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

## Countries worked with (${COUNTRIES.length})

${COUNTRY_REGIONS.map((r) => `- ${r.region}: ${r.countries.map((c) => c.name).join(", ")}`).join("\n")}

## Languages

${languages.map((l) => `- ${l.language}: ${l.proficiency}`).join("\n")}

## Frequently asked questions

${FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Projects (${projects.length})

${projects.map((p) => `- [${p.title}](${p.url}) — ${p.description} (${p.tags.join(", ")}; ${p.tech.join(", ")})`).join("\n")}
`;
}

/* ---------------------------------------------------------------- plugin -- */

const PRERENDER_STYLE = `<style>#prerender{max-width:72rem;margin:0 auto;padding:6rem 1.5rem 3rem;line-height:1.6;color:hsl(215 20% 75%)}#prerender h1,#prerender h2,#prerender h3{color:hsl(210 40% 98%);line-height:1.2;margin:1.5rem 0 .5rem}#prerender h1{font-size:3rem}#prerender a{color:#00f0ff}#prerender ul{padding-left:1.25rem}#prerender nav ul{display:flex;gap:1.5rem;list-style:none;padding:0}</style>`;

export function seoPlugin(): Plugin {
  let outDir = "dist";
  return {
    name: "portfolio-seo",
    configResolved(config: { build: { outDir: string } }) {
      outDir = config.build.outDir;
    },
    // Dev + build: put the home-page head tags into index.html.
    transformIndexHtml(html: string) {
      return html.replace("<!--seo-->", headTags("home"));
    },
    // Build only: write one HTML file per route + crawler files.
    closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const template = fs.readFileSync(indexPath, "utf8");
      const headRe = new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`);

      const files: Record<PageKey, string> = {
        home: "index.html",
        about: "about.html",
        about2: "about-2.html",
        projects: "projects.html",
        contact: "contact.html",
        notFound: "404.html",
      };

      for (const key of Object.keys(files) as PageKey[]) {
        const html = template
          .replace(headRe, headTags(key))
          .replace("</head>", `  ${PRERENDER_STYLE}\n  </head>`)
          .replace('<div id="root"></div>', `<div id="root">${bodyHtml(key)}</div>`);
        fs.writeFileSync(path.join(outDir, files[key]), html);
      }

      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml());
      fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt());
      fs.writeFileSync(path.join(outDir, "llms-full.txt"), llmsFullTxt());
    },
  };
}
