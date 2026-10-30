/** Content for the About page — shared by the page itself and the build-time SEO step. */
import { education, experience, skills } from "./resume";

export const ABOUT_HEADLINE = "I build the web platforms that governments, telecoms and marketplaces run on.";

export const ABOUT_INTRO =
  "I'm Roy Youssef, a senior full stack engineer. I started with custom WordPress builds for brands like Red Bull MEA, moved on to the official Riyadh Municipality website in Next.js, and now own the front end, Go services and databases at Domain Agents.";

export type Stop = {
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

/** Career stops in chronological order: education first, then each job (oldest → current). */
export const STOPS: Stop[] = [
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

export const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend & data", items: skills.backend },
  { title: "Tooling & delivery", items: skills.tooling },
  { title: "Platforms", items: skills.other },
];
