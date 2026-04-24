import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { skills, experience, education, languages } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <>
      <SEO 
        title="About | Roy Youssef" 
        description="Experience, skills, and background of Roy Youssef, Software Engineer."
      />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me.</h1>
          <div className="w-20 h-1 bg-primary mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">01.</span> Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Driven Software Engineer combining deep technical skills in web technologies with a creative flair for problem-solving, dedicated to delivering exceptional results in dynamic team environments.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">02.</span> Experience
              </h2>
              <div className="space-y-12">
                {experience.map((job, idx) => (
                  <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-white/10">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                        <p className="text-primary font-mono text-sm">{job.company} {job.location && `— ${job.location}`}</p>
                      </div>
                      <span className="text-muted-foreground text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {job.points.map((point, pIdx) => (
                        <li key={pIdx} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">03.</span> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-primary font-mono text-sm mb-2">{edu.institution} — {edu.location}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">04.</span> Skills Matrix
              </h2>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 hover:border-primary/50 border-white/10 font-mono font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary font-mono text-sm">05.</span> Languages
              </h2>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.language} className="glass-panel p-4 rounded-lg border border-white/5 flex justify-between items-center">
                    <span className="font-semibold">{lang.language}</span>
                    <span className="text-xs text-muted-foreground font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
}
