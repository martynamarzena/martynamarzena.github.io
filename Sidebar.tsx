import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Link2,
  Calendar,
  Flag,
} from "lucide-react";
import { PERSONAL, SKILLS, SOFTWARE, INTERESTS } from "../data";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  const content = (
    <div className="flex items-start gap-3 group">
      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-charcoal-lighter/40 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal-lighter">
          {label}
        </p>
        <p className="mt-0.5 break-all text-sm text-paper/85 transition-colors duration-300 group-hover:text-accent-light">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <Reveal delay={delay} x={-20}>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </Reveal>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-y-auto bg-charcoal sidebar-pattern scrollbar-none">
      {/* Profile */}
      <div className="p-6 pb-0">
        <Reveal delay={0.1} x={-20}>
          <div className="relative mx-auto w-36 md:mx-0 md:w-40">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="relative aspect-square overflow-hidden rounded-2xl border-2 border-charcoal-lighter"
            >
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Maya Chen"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </motion.div>
            {/* Status dot */}
            <div className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1.5 rounded-full bg-charcoal-light px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-green-400">
                Open
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} x={-20}>
          <div className="mt-5 text-center md:text-left">
            <h1 className="font-display text-2xl tracking-tight text-paper">
              {PERSONAL.name}
            </h1>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {PERSONAL.title}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Divider */}
      <div className="mx-6 my-5 h-px bg-charcoal-lighter" />

      {/* Contact */}
      <div className="space-y-3.5 px-6">
        <ContactRow
          icon={Mail}
          label="Email"
          value={PERSONAL.email}
          href={`mailto:${PERSONAL.email}`}
          delay={0.25}
        />
        <ContactRow
          icon={Phone}
          label="Phone"
          value={PERSONAL.phone}
          href={`tel:${PERSONAL.phone}`}
          delay={0.3}
        />
        <ContactRow icon={MapPin} label="Location" value={PERSONAL.location} delay={0.35} />
        <ContactRow
          icon={Globe}
          label="Website"
          value={PERSONAL.website}
          href={`https://${PERSONAL.website}`}
          delay={0.4}
        />
        <ContactRow
          icon={Link2}
          label="LinkedIn"
          value={PERSONAL.linkedin}
          href={`https://${PERSONAL.linkedin}`}
          delay={0.45}
        />
        <ContactRow icon={Calendar} label="Born" value={PERSONAL.dob} delay={0.5} />
        <ContactRow icon={Flag} label="Nationality" value={PERSONAL.nationality} delay={0.55} />
      </div>

      {/* Divider */}
      <div className="mx-6 my-5 h-px bg-charcoal-lighter" />

      {/* Languages */}
      <div className="px-6">
        <Reveal delay={0.5} x={-20}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-lighter">
            Languages
          </p>
        </Reveal>
        <div className="space-y-2">
          {PERSONAL.languages.map((l, i) => (
            <Reveal key={l.lang} delay={0.55 + i * 0.05} x={-20}>
              <div className="flex items-center justify-between">
                <span className="text-sm text-paper/80">{l.lang}</span>
                <span className="rounded-full bg-charcoal-lighter/50 px-2.5 py-0.5 font-mono text-[10px] text-paper/60">
                  {l.level}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 my-5 h-px bg-charcoal-lighter" />

      {/* Skills */}
      <div className="px-6">
        <Reveal delay={0.6} x={-20}>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-lighter">
            Core Skills
          </p>
        </Reveal>
        <div className="space-y-4">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={0.65 + i * 0.06} x={-20}>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-xs text-paper/75">{skill.name}</span>
                  <span className="font-mono text-[10px] text-accent">{skill.pct}%</span>
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-charcoal-lighter">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.1,
                      ease: EASE,
                    }}
                    style={{ originX: 0 }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 my-5 h-px bg-charcoal-lighter" />

      {/* Software */}
      <div className="px-6">
        <Reveal delay={0.7} x={-20}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-lighter">
            Software
          </p>
        </Reveal>
        <div className="space-y-2">
          {SOFTWARE.map((sw, i) => (
            <Reveal key={sw.name} delay={0.75 + i * 0.03} x={-20}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-paper/75">{sw.name}</span>
                <span className="rounded-full bg-charcoal-lighter/50 px-2.5 py-0.5 font-mono text-[10px] text-paper/50">
                  {sw.level}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 my-5 h-px bg-charcoal-lighter" />

      {/* Interests */}
      <div className="px-6 pb-8">
        <Reveal delay={0.8} x={-20}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-lighter">
            Interests
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest, i) => (
            <Reveal key={interest} delay={0.85 + i * 0.04} x={-20}>
              <span className="rounded-full border border-charcoal-lighter px-3 py-1 text-[11px] text-paper/60 transition-colors duration-300 hover:border-accent hover:text-accent">
                {interest}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </aside>
  );
}
