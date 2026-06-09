import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiJest,
  SiGithub,
  SiGitlab,
  SiWordpress,
  SiShopify,
  SiStorybook,
  SiJquery,
  SiSquarespace,
  SiStrapi,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useState } from "react";

type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

const stack: TechItem[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Storybook", Icon: SiStorybook, color: "#FF4785" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Strapi CMS", Icon: SiStrapi, color: "#4945FF" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
  { name: "Squarespace", Icon: SiSquarespace, color: "#2D2D2D" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
];

export function TechStack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="py-20 border-t border-white/5"
      data-testid="section-tech-stack"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            <span>// stack.config</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The toolkit I build with.
          </h2>
        </div>
      </div>

      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/5"
        data-testid="grid-tech-stack"
      >
        {stack.map((tech, i) => {
          const isHovered = hovered === tech.name;
          const slug = tech.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 10) * 0.03 }}
              className="group relative flex flex-col items-center justify-center gap-3 aspect-square bg-background/80 backdrop-blur-sm p-4 transition-colors hover:bg-background/40"
              data-testid={`tech-${slug}`}
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background: `radial-gradient(circle at center, ${tech.color}26, transparent 70%)`,
                }}
              />
              <tech.Icon
                className="w-8 h-8 md:w-9 md:h-9 transition-all duration-300 group-hover:scale-110 relative z-10"
                style={{
                  color: isHovered ? tech.color : undefined,
                  filter: isHovered
                    ? `drop-shadow(0 0 10px ${tech.color}66)`
                    : "none",
                }}
              />
              <span
                className="text-[10px] md:text-xs font-mono tracking-wide relative z-10 transition-colors"
                style={{
                  color: isHovered ? tech.color : undefined,
                }}
              >
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
