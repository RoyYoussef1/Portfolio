import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Smartphone, Palette, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { TechStack } from "@/components/TechStack";

const STATS = [
  { value: '40+', label: 'Projects Shipped' },
  { value: '5+', label: 'Years Building' },
  { value: '12+', label: 'Countries Reached' },
];

const SERVICES = [
  {
    Icon: Globe,
    title: 'Websites',
    description:
      'High-performance, scalable web platforms engineered for speed, SEO, and seamless user journeys from corporate flagships to eCommerce systems.',
    tags: ['Next.js', 'React.js', 'Angular', 'WordPress', 'Shopify', 'Headless CMS'],
    accent: 'from-primary/20 to-transparent',
    border: 'hover:border-primary/50',
    glow: 'rgba(0,240,255,0.15)',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Cross-platform native experiences built for iOS and Android. Fluid interfaces, real-time data, and device-native interactions that feel right.',
    tags: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android'],
    accent: 'from-secondary/20 to-transparent',
    border: 'hover:border-secondary/50',
    glow: 'rgba(180,0,255,0.12)', 
  },
  {
    Icon: Palette,
    title: 'UX / UI Design',
    description:
      'Research-led design systems and interfaces that align business goals with user needs from wireframes and prototypes to production-ready components.',
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
        title="Roy Youssef - Software Engineer" 
        description="Portfolio of Roy Youssef, a Software Engineer based in Beirut, Lebanon specializing in high-performance web applications."
      />
      
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-8 md:pt-0">

          {/* Smooth ambient glow — centered, bleeds into page seamlessly */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,180,200,0.07) 0%, rgba(0,100,140,0.04) 40%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 50% 50% at 75% 55%, rgba(140,0,220,0.05) 0%, transparent 60%)',
            }}
          />

          {/* Two-column layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1]"
              >
                Roy Youssef.
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="text-2xl md:text-4xl font-bold tracking-tight mb-10 leading-tight text-muted-foreground/70"
              >
                Software <span className="text-gradient">Engineer</span> &amp; Digital Architect.
              </motion.h2>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
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
                transition={{ duration: 0.5, delay: 0.34 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/projects">
                  <div className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer group w-full">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                <a
                  href="/Roy_Youssef_RESUME.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/10 glass-panel text-foreground font-semibold hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Right — avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative flex-shrink-0 w-72 h-72 md:w-96 md:h-96"
            >
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_3px_rgba(0,240,255,0.7)]" />
              </div>
              {/* Inner counter-rotating ring */}
              <div className="absolute inset-4 rounded-full border border-secondary/15 animate-[spin_14s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_2px_rgba(160,0,255,0.6)]" />
              </div>

              {/* Glow behind image */}
              <div className="absolute inset-8 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute inset-12 rounded-full bg-secondary/10 blur-2xl" />

              {/* Image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden border border-white/10"
                style={{
                  boxShadow: '0 0 40px -8px rgba(0,240,255,0.3), 0 0 80px -20px rgba(140,0,220,0.2)',
                }}
              >
                <img
                  src="/roy.png"
                  alt="Roy Youssef"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle inner gradient overlay */}
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(0,0,0,0.3) 0%, transparent 60%)',
                  }}
                />
              </div>
            </motion.div>

          </div>

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
