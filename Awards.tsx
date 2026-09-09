import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { AWARDS } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Awards() {
  return (
    <section id="awards" className="pt-16">
      <SectionHeading label="Recognition" title="Awards & Features" />

      <div className="mt-8 space-y-0">
        {AWARDS.map((award, i) => (
          <Reveal key={award.title} delay={i * 0.07}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group flex items-center gap-5 border-t border-border py-5 first:border-t-0"
            >
              {/* Icon */}
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-dark text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                <Trophy className="h-[18px] w-[18px]" />
              </div>

              {/* Year */}
              <span className="w-12 shrink-0 font-mono text-sm text-accent">
                {award.year}
              </span>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base text-ink transition-colors duration-300 group-hover:text-accent md:text-lg">
                  {award.title}
                </h3>
                <p className="mt-0.5 font-mono text-[11px] text-muted">
                  {award.org}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
