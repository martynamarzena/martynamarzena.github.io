import { motion } from "framer-motion";
import { GraduationCap, Award, Palette } from "lucide-react";
import { EDUCATION } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = [GraduationCap, Award, Palette];
const EASE = [0.22, 1, 0.36, 1] as const;

export function EducationSection() {
  return (
    <section id="education" className="pt-16">
      <SectionHeading label="Education" title="Qualifications" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EDUCATION.map((edu, i) => {
          const Icon = ICONS[i] || GraduationCap;
          return (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="group relative overflow-hidden rounded-xl border border-border bg-paper p-6 transition-all duration-400 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Icon */}
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-paper-dark text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Period */}
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {edu.period}
                </p>

                {/* Degree */}
                <h3 className="mt-2 font-display text-lg text-ink">
                  {edu.degree}
                </h3>

                {/* School */}
                <p className="mt-1 text-sm font-medium text-ink-light">
                  {edu.school}
                </p>

                {/* Detail */}
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {edu.detail}
                </p>

                {/* Decorative corner */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/10" />
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
