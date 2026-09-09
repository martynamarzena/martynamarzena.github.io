import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { PORTFOLIO } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

const CATEGORIES = ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PORTFOLIO)[number] | null>(null);

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="pt-16">
      <SectionHeading label="Portfolio" title="Selected Works" />

      {/* Filter tabs */}
      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "border-accent bg-accent text-paper"
                  : "border-border text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-paper-dark">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-paper">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-paper/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  {/* Year badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 font-mono text-[10px] text-ink backdrop-blur">
                    {project.year}
                  </span>
                </div>
                {/* Title below image */}
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg text-ink group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent" />
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-paper shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover"
                style={{ maxHeight: "55vh" }}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                      {selectedProject.category} — {selectedProject.year}
                    </span>
                    <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-light">
                  {selectedProject.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
