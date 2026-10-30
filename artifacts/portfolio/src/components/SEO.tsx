import React from "react";
import { PAGES, SITE, absUrl, pageSchema, type PageKey } from "@/seo/site";
import { skills } from "@/data/resume";
import { projects } from "@/data/projects";

interface SEOProps {
  page: PageKey;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function SEO({ page }: SEOProps) {
  React.useEffect(() => {
    const meta = PAGES[page];
    const url = absUrl(meta.path);
    const image = absUrl(SITE.ogImage);

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta(
      "name",
      "robots",
      meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1",
    );

    if (!meta.noindex) upsertLink("canonical", url);
    else document.head.querySelector('link[rel="canonical"]')?.remove();

    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", image);

    const schema = pageSchema(page, {
      knowsAbout: Object.values(skills).flat(),
      projects: page === "projects" ? projects : undefined,
    });
    let ld = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(schema);
  }, [page]);

  return null;
}
