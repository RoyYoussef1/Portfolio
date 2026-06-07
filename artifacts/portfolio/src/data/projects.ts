export type ProjectTag =
  | "eCommerce"
  | "Corporate"
  | "Restaurant"
  | "Telecom"
  | "Government"
  | "Web App"
  | "Kids";

export type Project = {
  slug: string;
  title: string;
  url: string;
  category: "website" | "app";
  description: string;
  tech: string[];
  tags: ProjectTag[];
  coverImage: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "riyadh-municipality",
    title: "Riyadh Municipality Official Website",
    url: "https://alriyadh.gov.sa/",
    category: "website",
    description:
      "A scalable, high-performance platform for the official Riyadh Municipality, built with modern web standards.",
    tech: ["Next.js", "React", "TypeScript", "Strapi"],
    tags: ["Government", "Corporate"],
    coverImage: "/projects/riyadh-muni.webp",
  },
  {
    slug: "red-bull-mobile-oman",
    title: "Red Bull Mobile OMAN",
    url: "https://redbullmobile.om/",
    category: "website",
    description:
      "An engaging mobile telecommunications portal crafted for Red Bull MEA audience in Oman.",
    tech: ["WordPress", "WooCommerce", "Custom Theming"],
    tags: ["Telecom", "eCommerce"],
    coverImage: "/projects/rbmOman.jpg",
  },
  {
    slug: "red-bull-mobile-ksa",
    title: "Red Bull Mobile KSA",
    url: "https://redbullmobile.sa/",
    category: "website",
    description:
      "A seamless, high-energy digital experience for Red Bull Mobile users in Saudi Arabia.",
    tech: ["WordPress", "WooCommerce", "Custom Theming"],
    tags: ["Telecom", "eCommerce"],
    coverImage: "/projects/rbmKSA.jpg",
  },
  {
    slug: "santafoo",
    title: "Santafoo",
    url: "https://santafoo.fr/",
    category: "website",
    description:
      "A dynamic eCommerce experience delivering fresh culinary offerings to users in France.",
    tech: ["WordPress", "eCommerce"],
    tags: ["Restaurant", "eCommerce"],
    coverImage: "/projects/stf.png",
  },
  {
    slug: "eca-gov-ae",
    title: "Abu Dhabi Early Childhood Authority",
    url: "https://eca.gov.ae/",
    category: "website",
    description:
      "The Abu Dhabi Early Childhood Authority (ECA) is a government entity, based in Abu Dhabi, that supports holistic early childhood development.",
    tech: ["WordPress", "Custom Theme", "i18n"],
    tags: ["Government", "Corporate"],
    coverImage: "/projects/ECA.webp",
  },
  {
    slug: "interesting-times",
    title: "Interesting Times",
    url: "https://interestingtimes.com/",
    category: "website",
    description:
      "A progressive, visually striking agency website maximizing modern web development capabilities.",
    tech: ["WordPress"],
    tags: ["Corporate"],
    coverImage: "/projects/17.webp",
  },
  {
    slug: "what-the-falafel",
    title: "What The Falafel",
    url: "https://wtfalafel.co/",
    category: "website",
    description:
      "A vibrant food brand website with integrated ordering and engaging UI.",
    tech: ["WordPress", "WooCommerce"],
    tags: ["Restaurant", "eCommerce"],
    coverImage: "/projects/wtf.png",
  },
  {
    slug: "almasa-3d",
    title: "Almasa 3D",
    url: "https://almasa3d.com/",
    category: "website",
    description:
      "A custom Shopify storefront for a 3D crystal engraving brand, blending a refined gifting aesthetic with a seamless photo-upload and customization flow.",
    tech: ["Shopify"],
    tags: ["eCommerce"],
    coverImage: "/projects/almasa3d.png",
  },
  {
    slug: "qinwan-dates",
    title: "Qinwan Dates",
    url: "https://www.qinwandates.com/",
    category: "website",
    description:
      "A premium eCommerce store for luxury dates, built for seamless conversions and elegant browsing.",
    tech: ["Shopify"],
    tags: ["eCommerce"],
    coverImage: "/projects/qinwan.webp",
  },
  {
    slug: "solar-web",
    title: "Solar Web",
    url: "https://bejewelled-boba-431440.netlify.app/",
    category: "website",
    description:
      "An interactive university web app project demonstrating fundamental software engineering principles.",
    tech: ["Web App"],
    tags: ["Web App"],
    coverImage: "/projects/solarweb.jpg",
  },

  {
    slug: "productionlab",
    title: "Production Lab",
    url: "https://productionlab.me/",
    category: "website",
    description:
      "A cinematic showcase for a luxury events and production agency, blending motion design with editorial storytelling.",
    tech: ["WordPress", "GSAP", "Custom Theme"],
    tags: ["Corporate", "Web App"],
    coverImage: "/projects/prodLab.jpeg",
  },
  {
    slug: "cheffedoeuvre",
    title: "Cheffe d'Œuvre",
    url: "https://cheffedoeuvre.com/",
    category: "website",
    description:
      "A refined platform for a premium grazing and catering brand, balancing culinary aesthetics with seamless ordering.",
    tech: ["WordPress", "WooCommerce"],
    tags: ["Restaurant", "Corporate"],
    coverImage: "/projects/cheffe.jpg",
  },
  {
    slug: "flysquid",
    title: "Flysquid",
    url: "https://flysquid.com/",
    category: "website",
    description:
      "A sharp creative agency presence built around motion, type, and a refined visual system.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/FLYSQUID-FINAL-LOGO-02-scaled.png",
  },
  {
    slug: "echahwan-tools",
    title: "Echahwan Tools",
    url: "https://echahwantools.com/",
    category: "website",
    description:
      "A robust catalog and storefront for a professional tools distributor, structured for scale.",
    tech: ["WordPress", "WooCommerce"],
    tags: ["Corporate", "eCommerce"],
    coverImage: "/projects/echahwan.jpg",
  },
  {
    slug: "zephyr-lounge",
    title: "Zephyr Lounge",
    url: "https://zephyr-lounge.com/",
    category: "website",
    description:
      "Zephyr Lounge is a sophisticated lounge and restaurant in Dbayeh, Lebanon, offering international food, signature cocktails, wine, and a vibrant luxury atmosphere.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Restaurant"],
    coverImage: "/projects/zephyr.jpg",
  },
  {
    slug: "freya-jewelry",
    title: "Freya Jewelry",
    url: "https://freyajwlry.com/",
    category: "website",
    description:
      "A delicate, conversion-focused storefront for a contemporary jewelry brand.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/freya.webp",
  },
  {
    slug: "shop-die-cast-lab",
    title: "Die Cast Lab",
    url: "https://shopdiecastlab.com/",
    category: "website",
    description:
      "A collector-focused eCommerce destination for premium die-cast models.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/diecast.webp",
  },
  {
    slug: "ikkiu",
    title: "Ikkiu",
    url: "https://ikkiu.com/",
    category: "website",
    description:
      "A clean, brand-led eCommerce experience designed to scale across product lines.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/ikkiu.webp",
  },
  {
    slug: "unmasked-you",
    title: "Unmasked You",
    url: "https://unmaskedyou.com/",
    category: "website",
    description:
      "A modern beauty brand storefront built for skincare discovery and conversion.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/unmasked.webp",
  },
  {
    slug: "tiny-smiles",
    title: "Shop Tiny Smiles",
    url: "https://www.shoptinysmiles.com/",
    category: "website",
    description:
      "A playful, family-friendly storefront for a children's oral care brand, built around its signature U-shaped toothbrush and designed to make discovery and checkout effortless.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce", "Kids"],
    coverImage: "/projects/tinysmiles.jpg",
  },
  {
    slug: "bare3",
    title: "Bare3",
    url: "https://bare3shop.com/",
    category: "website",
    description:
      "A playful, conversion-focused storefront for a children's educational toy brand, balancing vibrant visuals with a clean bilingual (Arabic/English) RTL buying flow.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce", "Kids"],
    coverImage: "/projects/bare3.jpg",
  },
  {
    slug: "lawenme",
    title: "LawenMe",
    url: "https://shoplawenme.com/",
    category: "website",
    description:
      "A vibrant storefront for a kids' creative brand built around colorable pyjamas and pillowcases, designed to bring its imaginative, color-it-yourself concept to life.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce", "Kids"],
    coverImage: "/projects/lawenme.png",
  },
  {
    slug: "ikarya-sal",
    title: "IKARYA",
    url: "http://ikaryasal.com/",
    category: "website",
    description:
      "Ikarya is a Lebanese real estate developer offering residential and commercial properties, with a focus on energy-efficient, sustainable living.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/ikarya.jpg",
  },
  {
    slug: "givonation",
    title: "Givonation Tennis Academy",
    url: "https://givonation.ae/",
    category: "website",
    description:
      "A dynamic digital home for an elite tennis academy, designed for member engagement and program discovery.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/givo.webp",
  },
  {
    slug: "not-boring",
    title: "Not Boring",
    url: "https://not-boring.com/",
    category: "website",
    description:
      "A bold fashion eCommerce experience built around editorial drops and a distinct, expressive brand voice.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/notBoring.webp",
  },
  {
    slug: "sportsnvision",
    title: "Sports & Vision",
    url: "https://sportsnvision.com/",
    category: "website",
    description:
      "A performance-focused platform for athletic vision training, blending science, content, and conversion-ready flows.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate", "Web App"],
    coverImage: "/projects/sport-vision-hero.jpg",
  },
  {
    slug: "gigzplus",
    title: "Gigz Plus",
    url: "https://gigzplus.com/",
    category: "website",
    description:
      "A modern staffing and gig-matching platform connecting talent with on-demand opportunities.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate", "Web App"],
    coverImage: "/projects/gigz.jpg",
  },
  {
    slug: "music-nest",
    title: "Music Nest",
    url: "https://music-nest.com/",
    category: "website",
    description:
      "A musical instruments eCommerce destination structured for browsing depth and trust.",
    tech: ["WordPress", "WooCommerce"],
    tags: ["eCommerce"],
    coverImage: "/projects/musicnest.png",
  },
  {
    slug: "brewed-shroom",
    title: "Brewed Shroom",
    url: "https://brewedshroom.com/",
    category: "website",
    description:
      "A functional mushroom coffee brand storefront with a calm, modern visual identity.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/brewed.jpg",
  },
  {
    slug: "just-oats",
    title: "Just Oats",
    url: "https://justoats.me/",
    category: "website",
    description:
      "A wholesome food brand storefront with a warm, modern direct-to-consumer experience.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce", "Restaurant"],
    coverImage: "/projects/justoats.webp",
  },
  {
    slug: "sqoon",
    title: "Sqoon",
    url: "https://sqoon.co/",
    category: "website",
    description:
      "A vibrant beverage brand eCommerce experience built around energetic visual storytelling.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/sqooon.png",
  },
  {
    slug: "lynyer",
    title: "Lynyer",
    url: "https://lynyer.com/",
    category: "website",
    description:
      "A modern jewelry eCommerce platform built around clean product storytelling.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/lynyer.webp",
  },

  {
    slug: "shop-letina",
    title: "Letina",
    url: "https://shopletina.com/",
    category: "website",
    description:
      "A polished beauty storefront tuned for retention, bundles, and a strong brand voice.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/letina.webp",
  },
  {
    slug: "woodland-whisper",
    title: "Woodland Whisper",
    url: "https://woodlandwhisper.ae/",
    category: "website",
    description:
      "A serene candle eCommerce brand experience grounded in natural, tactile design.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/woodland.webp",
  },
  {
    slug: "offwhite-laundry",
    title: "Offwhite Laundry",
    url: "https://offwhitelaundry.com/",
    category: "website",
    description:
      "A premium laundry and garment-care service site built for booking flow and brand polish.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/laundry.webp",
  },
  {
    slug: "homefy-dxb",
    title: "Homefy Dubai",
    url: "https://homefydxb.com/",
    category: "website",
    description:
      "A high-end real estate experience for the Dubai market with curated property listings and immersive visuals.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/homefyHero.jpg",
  },
  {
    slug: "hydratech-group",
    title: "Hydratech Group",
    url: "http://hydratechgroup.com/",
    category: "website",
    description:
      "A polished corporate platform for an industrial water solutions group, structured for clarity and global reach.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/hydra.jpg",
  },
  {
    slug: "sconstruction-group",
    title: "Smart Construction Group",
    url: "https://sconstructiongroup.com/",
    category: "website",
    description:
      "Smart Construction Group is a reowned construction company specializing in the construction of residential complexes and temporary construction facilities in Central Asia and the Middle East, as well as comprehensive equipment rental solutions.",
    tech: ["WordPress", "Custom Theme"],
    tags: ["Corporate"],
    coverImage: "/projects/scon.jpg",
  },
  {
    slug: "neds-pizza-ny",
    title: "Ned's Pizza NY",
    url: "https://nedspizzany.com/",
    category: "website",
    description:
      "A New York pizza brand site with appetite-driving visuals and streamlined ordering.",
    tech: ["WordPress", "WooCommerce"],
    tags: ["Restaurant", "eCommerce"],
    coverImage: "/projects/nypizza.jpg",
  },
  {
    slug: "ta-noura",
    title: "Ta Noura",
    url: "https://ta-noura.com/",
    category: "website",
    description:
      "A boutique fashion eCommerce experience with a refined editorial aesthetic.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/tanoura.webp",
  },
  {
    slug: "pistachino",
    title: "Pistachino",
    url: "https://pistachinoshop.com/",
    category: "website",
    description:
      "A bakery and confectionery eCommerce experience tuned for cravings and conversions.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce", "Restaurant"],
    coverImage: "/projects/pistachino.webp",
  },

  {
    slug: "biogham",
    title: "Biogham",
    url: "https://biogham.com/",
    category: "website",
    description:
      "An elegant cosmetics eCommerce experience with rich product storytelling.",
    tech: ["Shopify", "Custom Theme"],
    tags: ["eCommerce"],
    coverImage: "/projects/biogham.webp",
  },
];
