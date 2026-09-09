import { Reveal, SectionHeading } from "./Reveal";
import { SUMMARY, PERSONAL } from "../data";
import { motion } from "framer-motion";

const STATS = [
  { value: "7", suffix: "+", label: "Years Experience" },
  { value: "80", suffix: "+", label: "Projects Completed" },
  { value: "15", suffix: "", label: "Awards Won" },
  { value: "40", suffix: "+", label: "Happy Clients" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Summary() {
  return (
    <section id="summary" className="pt-10 pb-0">
      <SectionHeading label="Profile" title="About Me" />

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-light">
          {SUMMARY}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          {PERSONAL.tagline}
        </p>
      </Reveal>

      {/* Stats strip */}
      <Reveal delay={0.25}>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: EASE }}
              className="bg-paper p-5 text-center"
            >
              <div className="font-display text-3xl text-ink md:text-4xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
