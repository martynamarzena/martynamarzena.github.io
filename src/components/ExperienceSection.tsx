import { motion } from "framer-motion";
import { EXPERIENCE } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-16">
      <SectionHeading label="Career" title="Work Experience" />

      <div className="mt-8 space-y-0">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.period} delay={i * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="group relative border-t border-border py-7 pl-8 first:border-t-0 sm:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 h-2.5 w-2.5 rounded-full border-2 border-border bg-paper transition-colors duration-300 group-hover:border-accent group-hover:bg-accent sm:left-1.5" />

              {/* Period */}
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {job.period}
              </p>

              {/* Role & Company */}
              <h3 className="mt-2 font-display text-xl text-ink md:text-2xl">
                {job.role}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-ink-light">
                {job.company}{" "}
                <span className="text-muted">· {job.location}</span>
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
