import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";
import { projects } from "@/data/projects";
import { TechStack } from "@/components/TechStack";

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
        <section className="min-h-[80vh] flex flex-col justify-center relative">
          <div className="max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono mb-6"
            >
              <Terminal className="w-4 h-4" />
              <span>System initialized.</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Engineering <span className="text-gradient">high-performance</span> digital realities.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              I'm Roy Youssef, a Software Engineer based in Beirut. I combine deep technical precision with creative problem-solving to build scalable web applications and elegant digital experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer group">
                  View Systems
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/contact">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/10 glass-panel text-foreground font-semibold hover:bg-white/5 transition-colors cursor-pointer">
                  Initialize Contact
                </div>
              </Link>
            </motion.div>
          </div>
          
          {/* Abstract Hero Graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block opacity-60">
            <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[10%] border-[1px] border-secondary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[20%] border-[1px] border-primary/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]" />
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
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
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
