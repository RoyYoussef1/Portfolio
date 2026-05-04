import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Terminal, Globe, Smartphone, Palette, Download, MapPin, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import { TechStack } from "@/components/TechStack";

const STATS = [
  { value: '37+', label: 'Projects Shipped' },
  { value: '5+', label: 'Years Building' },
  { value: '12+', label: 'Countries Reached' },
  { value: '100%', label: 'Client Retention' },
];

const MARQUEE_ITEMS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Shopify',
  'React Native', 'Expo', 'Figma', 'Tailwind CSS', 'PostgreSQL', 'Strapi',
  'WooCommerce', 'GraphQL', 'Framer Motion', 'AWS',
];

const SERVICES = [
  {
    Icon: Globe,
    title: 'Websites',
    description:
      'High-performance, scalable web platforms engineered for speed, SEO, and seamless user journeys — from corporate flagships to eCommerce systems.',
    tags: ['Next.js', 'WordPress', 'Shopify', 'Headless CMS'],
    accent: 'from-primary/20 to-transparent',
    border: 'hover:border-primary/50',
    glow: 'rgba(0,240,255,0.15)',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Cross-platform native experiences built for iOS and Android. Fluid interfaces, real-time data, and device-native interactions that feel right.',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    accent: 'from-secondary/20 to-transparent',
    border: 'hover:border-secondary/50',
    glow: 'rgba(180,0,255,0.12)',
  },
  {
    Icon: Palette,
    title: 'UX / UI Design',
    description:
      'Research-led design systems and interfaces that align business goals with user needs — from wireframes and prototypes to production-ready components.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    accent: 'from-white/10 to-transparent',
    border: 'hover:border-white/30',
    glow: 'rgba(255,255,255,0.08)',
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO 
        title="Roy Youssef — Software Engineer" 
        description="Portfolio of Roy Youssef, a Software Engineer based in Beirut, Lebanon specializing in high-performance web applications."
      />
      
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">

          {/* Background grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial glow blobs */}
          <div className="absolute -right-40 top-1/4 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute -right-20 top-1/3 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] pointer-events-none" />

          {/* Rotating rings — tighter to right edge */}
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none hidden lg:block">
            <div className="absolute inset-0 border border-primary/15 rounded-full animate-[spin_80s_linear_infinite]" />
            <div className="absolute inset-[12%] border border-secondary/15 rounded-full animate-[spin_50s_linear_infinite_reverse]" />
            <div className="absolute inset-[24%] border border-primary/10 rounded-full animate-[spin_35s_linear_infinite]" />
            <div className="absolute inset-[38%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            {/* Dot on outer ring */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(0,240,255,0.6)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_2px_rgba(180,0,255,0.5)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full blur-[60px]" />
          </div>

          {/* Content */}
          <div className="max-w-3xl relative z-10">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground text-xs font-mono mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <MapPin className="w-3 h-3" />
              <span>Beirut, Lebanon</span>
              <span className="mx-1 opacity-30">|</span>
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-primary">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1]"
            >
              Roy Youssef.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-10 leading-tight text-muted-foreground/70"
            >
              Software <span className="text-gradient">Engineer</span> &amp; Digital Architect.
            </motion.h2>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-x-8 gap-y-4 mb-10"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-primary font-mono leading-none">{value}</span>
                  <span className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <div className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer group">
                  View Systems
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/10 glass-panel text-foreground font-semibold hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Scrolling marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-10 left-0 right-0 overflow-hidden pointer-events-none"
          >
            <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span key={i} className="text-xs font-mono text-muted-foreground/30 uppercase tracking-widest">
                  {item}
                  <span className="ml-8 text-primary/20">·</span>
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-muted-foreground/80">
              <span className="text-primary">{`>_`}</span>
              <span>services.list()</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What I Build.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(({ Icon, title, description, tags, border, glow }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative glass-panel rounded-xl p-8 border border-white/5 ${border} hover:-translate-y-1 transition-all duration-300`}
                style={{
                  ['--glow' as string]: glow,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 12px 40px -10px var(--glow)` }}
                />
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/8 text-muted-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section className="py-20 border-t border-white/5">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <Link href="/projects">
              <div className="text-primary text-sm font-mono hover:underline cursor-pointer flex items-center gap-2">
                [View All] <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <TechStack />

        <div className="pb-20 -mt-8 flex justify-center">
          <Link href="/about">
            <div
              className="inline-flex items-center gap-2 text-primary font-mono hover:underline cursor-pointer"
              data-testid="link-full-skill-matrix"
            >
              [Explore full skill matrix] <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}
