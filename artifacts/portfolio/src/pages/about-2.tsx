import React, { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { skills, experience, education, languages } from "@/data/resume";
import { FAQ, SITE } from "@/seo/site";

/* ------------------------------------------------------------------ data -- */

type Stop = {
  id: string;
  year: string;
  city: string;
  place: string;
  org: string;
  role: string;
  period: string;
  points: string[];
  current?: boolean;
};

const startYear = (period: string) => period.match(/\d{4}/)?.[0] ?? "";

const STOPS: Stop[] = [
  ...education.map((e, i) => ({
    id: `edu-${i}`,
    year: startYear(e.period),
    city: e.location.split(",")[0],
    place: e.location,
    org: e.institution,
    role: e.degree,
    period: e.period,
    points: [`${e.degree}, ${e.period}.`],
  })),
  ...[...experience].reverse().map((j, i, arr) => ({
    id: `job-${i}`,
    year: startYear(j.period),
    city: j.location.split(",")[0],
    place: j.location,
    org: j.company,
    role: j.role,
    period: j.period,
    points: j.points,
    current: i === arr.length - 1,
  })),
];

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend & data", items: skills.backend },
  { title: "Tooling & delivery", items: skills.tooling },
  { title: "Platforms", items: skills.other },
];

/* Route geometry (desktop). viewBox is 1000 × 180; stops alternate low / high
   and are spread evenly, so adding a job to resume.ts just works. */
const POINTS = STOPS.map((_, i) => ({
  x: STOPS.length === 1 ? 500 : 70 + (860 * i) / (STOPS.length - 1),
  y: i % 2 === 0 ? 122 : 58,
}));
const ROUTE_D = POINTS.reduce((d, p, i) => {
  if (i === 0) return `M ${p.x} ${p.y}`;
  const prev = POINTS[i - 1];
  const mx = (prev.x + p.x) / 2;
  return `${d} C ${mx} ${prev.y}, ${mx} ${p.y}, ${p.x} ${p.y}`;
}, "");

/* ------------------------------------------------------------------ page -- */

export default function AboutTwo() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(STOPS[STOPS.length - 1].id);
  const active = STOPS.find((s) => s.id === activeId) ?? STOPS[STOPS.length - 1];

  return (
    <>
      <SEO page="about2" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero ---------------------------------------------------------- */}
        <section className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-end pt-10 md:pt-16 pb-20 md:pb-28">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.04] max-w-[17ch] text-balance">
              I build the web platforms that governments, telecoms and marketplaces run on.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              I'm Roy, a {SITE.jobTitle.toLowerCase()} based in {SITE.location.city}. I started with custom WordPress
              builds for brands like Red Bull MEA, moved on to the official Riyadh Municipality website in Next.js, and
              now own the front end, Go services and databases at {SITE.worksFor.name}.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.resume}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="w-4 h-4" aria-hidden />
                Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 font-semibold hover:bg-white/5 hover:border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <figure className="relative max-w-sm w-full mx-auto lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/50 via-transparent to-secondary/50"
              aria-hidden
            />
            <img
              src={SITE.image}
              alt="Portrait of Roy Youssef"
              width={1122}
              height={1402}
              fetchPriority="high"
              className="relative w-full aspect-[4/5] object-cover object-top rounded-[2rem] bg-card"
            />
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {SITE.location.city}, {SITE.location.country}
            </figcaption>
          </figure>
        </section>

        {/* Route --------------------------------------------------------- */}
        <section aria-labelledby="route-heading" className="pb-24 md:pb-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 id="route-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
              The route so far
            </h2>
            <p className="text-muted-foreground max-w-sm">Select a stop to see what I did there.</p>
          </div>

          {/* Desktop: drawn route */}
          <div className="hidden md:block pt-20 pb-24">
            <div className="relative">
              <svg viewBox="0 0 1000 180" className="w-full h-auto overflow-visible" aria-hidden>
                <defs>
                  <linearGradient id="route-grad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
                <path d={ROUTE_D} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                <motion.path
                  d={ROUTE_D}
                  fill="none"
                  stroke="url(#route-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: reduceMotion ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
                />
              </svg>

              <ol className="absolute inset-0">
                {STOPS.map((stop, i) => {
                  const p = POINTS[i];
                  const selected = stop.id === activeId;
                  const above = p.y < 90;
                  return (
                    <li
                      key={stop.id}
                      className="absolute -translate-x-1/2"
                      style={{ left: `${p.x / 10}%`, top: `${(p.y / 180) * 100}%` }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveId(stop.id)}
                        aria-pressed={selected}
                        className="group relative flex flex-col items-center focus-visible:outline-none"
                      >
                        <span
                          className={`block -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-background ${
                            selected
                              ? "bg-primary border-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.15),0_0_24px_hsl(var(--primary)/0.6)]"
                              : "bg-background border-white/40 group-hover:border-primary"
                          }`}
                        />
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center ${
                            above ? "bottom-6" : "top-3"
                          }`}
                        >
                          <span
                            className={`block text-3xl lg:text-4xl font-semibold tabular-nums tracking-tight transition-colors ${
                              selected ? "text-foreground" : "text-white/35 group-hover:text-white/70"
                            }`}
                          >
                            {stop.year}
                          </span>
                          <span
                            className={`block text-sm transition-colors ${
                              selected ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {stop.city}
                            {stop.current && " (now)"}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Mobile: vertical route */}
          <ol className="md:hidden relative border-l border-white/10 ml-2 space-y-1">
            {STOPS.map((stop) => {
              const selected = stop.id === activeId;
              return (
                <li key={stop.id} className="relative">
                  <span
                    className={`absolute -left-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 ${
                      selected ? "bg-primary border-primary" : "bg-background border-white/40"
                    }`}
                    aria-hidden
                  />
                  <button
                    type="button"
                    onClick={() => setActiveId(stop.id)}
                    aria-pressed={selected}
                    className="w-full text-left pl-6 py-3 rounded-r-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className={`text-2xl font-semibold tabular-nums mr-3 ${
                        selected ? "text-foreground" : "text-white/40"
                      }`}
                    >
                      {stop.year}
                    </span>
                    <span className={selected ? "text-primary" : "text-muted-foreground"}>
                      {stop.city}
                      {stop.current && " (now)"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail panel */}
          <div className="mt-10 md:mt-0 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md p-6 md:p-10 min-h-[22rem]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14"
                aria-live="polite"
              >
                <header>
                  <p className="text-sm text-primary">{active.period}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                    {active.role}
                  </h3>
                  <p className="mt-3 text-lg text-foreground/80">{active.org}</p>
                  <p className="text-muted-foreground">{active.place}</p>
                </header>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  {active.points.map((point) => (
                    <li key={point} className="flex gap-4">
                      <span className="mt-[0.7em] w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        {/* Skills -------------------------------------------------------- */}
        <section aria-labelledby="skills-heading" className="pb-24 md:pb-32">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            What I work with
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-foreground font-semibold pb-3 mb-4 border-b border-white/10">{group.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Languages + education ----------------------------------------- */}
        <section className="pb-24 md:pb-32 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Languages</h2>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {languages.map((lang) => (
                <li key={lang.language} className="flex items-center gap-4 py-5">
                  <img
                    src={lang.flag}
                    alt=""
                    width={32}
                    height={24}
                    loading="lazy"
                    className="w-8 h-6 object-cover rounded-sm"
                  />
                  <span className="text-lg font-medium">{lang.language}</span>
                  <span className="ml-auto text-sm text-muted-foreground text-right">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Education</h2>
            {education.map((edu) => (
              <div key={edu.degree} className="border-y border-white/10 py-5">
                <p className="text-lg font-medium leading-snug">{edu.degree}</p>
                <p className="mt-2 text-muted-foreground">
                  {edu.institution}, {edu.location}
                </p>
                <p className="mt-1 text-sm text-primary">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ----------------------------------------------------------- */}
        <section aria-labelledby="faq2-heading" className="pb-24 md:pb-32 max-w-3xl">
          <h2 id="faq2-heading" className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Common questions
          </h2>
          <div className="border-t border-white/10">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group border-b border-white/10">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-lg font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary [&::-webkit-details-marker]:hidden">
                  <h3>{q}</h3>
                  <span
                    className="relative w-4 h-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                    aria-hidden
                  />
                </summary>
                <p className="pb-6 -mt-1 text-muted-foreground leading-relaxed max-w-[65ch]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing ------------------------------------------------------- */}
        <section className="pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 px-6 py-14 md:px-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-[18ch]">
              Have a role or a project in mind?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="w-4 h-4" aria-hidden />
                Email me
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 font-semibold hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Use the contact form
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
