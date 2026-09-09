import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 28, x = 0, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ label, title, dark = false }: { label: string; title: string; dark?: boolean }) {
  return (
    <Reveal>
      <div className="mb-2 flex items-center gap-3">
        <span className={`font-mono text-[11px] uppercase tracking-[0.3em] ${dark ? "text-charcoal-lighter" : "text-muted"}`}>
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className={`font-display text-3xl leading-tight tracking-tight md:text-4xl ${dark ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
    </Reveal>
  );
}
