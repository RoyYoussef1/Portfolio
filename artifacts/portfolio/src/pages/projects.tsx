import React, { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectTag } from "@/data/projects";
import {
  ExternalLink,
  Layers,
  Smartphone,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  Signal,
  Landmark,
  AppWindow,
  LayoutGrid,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TAG_META: Record<ProjectTag, { label: string; Icon: LucideIcon }> = {
  eCommerce: { label: 'eCommerce', Icon: ShoppingBag },
  Corporate: { label: 'Corporate', Icon: Building2 },
  Restaurant: { label: 'Restaurant', Icon: UtensilsCrossed },
  Telecom: { label: 'Telecom', Icon: Signal },
  Government: { label: 'Government', Icon: Landmark },
  'Web App': { label: 'Web App', Icon: AppWindow },
};

export default function Projects() {
  const [filter, setFilter] = useState<'website' | 'app'>('website');
  const [activeTag, setActiveTag] = useState<ProjectTag | 'all'>('all');

  const categoryProjects = useMemo(
    () => projects.filter((p) => p.category === filter),
    [filter],
  );

  const availableTags = useMemo<ProjectTag[]>(() => {
    const set = new Set<ProjectTag>();
    categoryProjects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    const order: ProjectTag[] = [
      'eCommerce',
      'Corporate',
      'Restaurant',
      'Telecom',
      'Government',
      'Web App',
    ];
    return order.filter((t) => set.has(t));
  }, [categoryProjects]);

  const tagCounts = useMemo(() => {
    const counts: Partial<Record<ProjectTag, number>> = {};
    categoryProjects.forEach((p) =>
      p.tags.forEach((t) => {
        counts[t] = (counts[t] ?? 0) + 1;
      }),
    );
    return counts;
  }, [categoryProjects]);

  const visibleProjects = useMemo(() => {
    if (activeTag === 'all') return categoryProjects;
    return categoryProjects.filter((p) => p.tags.includes(activeTag));
  }, [categoryProjects, activeTag]);

  const handleCategoryChange = (next: 'website' | 'app') => {
    setFilter(next);
    setActiveTag('all');
  };

  return (
    <>
      <SEO
        title="Projects | Roy Youssef"
        description="A showcase of websites and applications engineered by Roy Youssef."
      />

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Selected Work</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Projects.
          </h1>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            Digital platforms, e-commerce systems, and applications engineered for clients globally.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <button
            onClick={() => handleCategoryChange('website')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
              filter === 'website'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            }`}
            data-testid="filter-websites"
          >
            <Layers className="w-4 h-4" />
            Websites
          </button>
          <button
            onClick={() => handleCategoryChange('app')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
              filter === 'app'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            }`}
            data-testid="filter-apps"
          >
            <Smartphone className="w-4 h-4" />
            Apps
          </button>
        </div>

        {/* Tag Filter Chips */}
        {availableTags.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-muted-foreground/80">
              <span className="text-primary">{`>_`}</span>
              <span>filter.by(industry)</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="flex flex-wrap gap-2" data-testid="tag-filters">
              <TagChip
                active={activeTag === 'all'}
                onClick={() => setActiveTag('all')}
                Icon={LayoutGrid}
                label="All"
                count={categoryProjects.length}
                testId="tag-filter-all"
              />
              {availableTags.map((tag) => {
                const meta = TAG_META[tag];
                return (
                  <TagChip
                    key={tag}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(tag)}
                    Icon={meta.Icon}
                    label={meta.label}
                    count={tagCounts[tag] ?? 0}
                    testId={`tag-filter-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="min-h-[50vh]">
          <AnimatePresence mode="wait">
            {visibleProjects.length > 0 ? (
              <motion.div
                key={`grid-${filter}-${activeTag}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleProjects.map((project, i) => (
                  <motion.a
                    key={project.slug}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.15)] transition-all duration-300"
                    data-testid={`project-card-${project.slug}`}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-black/50">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 relative">
                      <div className="absolute top-0 left-6 w-12 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((t) => {
                          const meta = TAG_META[t];
                          return (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/90"
                              data-testid={`project-tag-${project.slug}-${t.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <meta.Icon className="w-3 h-3" />
                              {meta.label}
                            </span>
                          );
                        })}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-1">
                        {project.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ) : filter === 'app' ? (
              <motion.div
                key="empty-apps-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-xl border border-white/5 border-dashed"
                data-testid="empty-apps-state"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Systems initializing...
                </h3>
                <p className="text-muted-foreground max-w-md">
                  App architecture is currently in development. Private mobile
                  application projects will be synced to this sector soon.
                </p>
                <div className="mt-8 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Awaiting deployment
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty-tag-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-xl border border-white/5 border-dashed"
                data-testid="empty-tag-state"
              >
                <p className="text-muted-foreground">
                  No projects match this filter yet.
                </p>
                <button
                  onClick={() => setActiveTag('all')}
                  className="mt-4 text-primary text-sm font-mono hover:underline"
                  data-testid="reset-tag-filter"
                >
                  [reset filter]
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

type TagChipProps = {
  active: boolean;
  onClick: () => void;
  Icon: LucideIcon;
  label: string;
  count: number;
  testId: string;
};

function TagChip({ active, onClick, Icon, label, testId }: Omit<TagChipProps, 'count'>) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium border transition-all ${
        active
          ? 'border-primary/60 bg-primary/15 text-primary shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)]'
          : 'border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </button>
  );
}
