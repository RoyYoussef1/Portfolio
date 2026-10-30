/** Countries Roy has delivered work for, grouped by region. `code` is the ISO 3166-1 alpha-2 code (used for flags). */
export const COUNTRY_REGIONS: { region: string; countries: { name: string; code: string }[] }[] = [
  {
    region: "Middle East",
    countries: [
      { name: "Lebanon", code: "lb" },
      { name: "United Arab Emirates", code: "ae" },
      { name: "Saudi Arabia", code: "sa" },
      { name: "Qatar", code: "qa" },
      { name: "Kuwait", code: "kw" },
      { name: "Bahrain", code: "bh" },
      { name: "Oman", code: "om" },
      { name: "Jordan", code: "jo" },
    ],
  },
  {
    region: "Africa",
    countries: [
      { name: "Morocco", code: "ma" },
      { name: "Tunisia", code: "tn" },
      { name: "Nigeria", code: "ng" },
    ],
  },
  {
    region: "Europe & Central Asia",
    countries: [
      { name: "France", code: "fr" },
      { name: "Turkey", code: "tr" },
      { name: "Azerbaijan", code: "az" },
      { name: "Kazakhstan", code: "kz" },
    ],
  },
  {
    region: "North America",
    countries: [
      { name: "United States", code: "us" },
      { name: "Canada", code: "ca" },
    ],
  },
];

export const COUNTRIES = COUNTRY_REGIONS.flatMap((r) => r.countries);
