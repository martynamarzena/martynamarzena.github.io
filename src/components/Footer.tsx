import { Reveal } from "./Reveal";
import { PERSONAL } from "../data";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10">
      <Reveal>
        <div className="rounded-2xl border border-border bg-ink p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Get In Touch
            </p>
            <h2 className="mt-4 font-display text-3xl text-paper md:text-5xl">
              Let&apos;s create something{" "}
              <span className="italic text-accent">together</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-charcoal-lighter">
              I&apos;m always open to freelance projects, collaborations, and new creative challenges. Drop me a line — I usually reply within 24 hours.
            </p>

            <a
              href={`mailto:${PERSONAL.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-paper transition-all duration-300 hover:scale-[1.03] hover:bg-accent-light"
            >
              <Mail className="h-4 w-4" />
              {PERSONAL.email}
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-charcoal-lighter">
              <a href={`tel:${PERSONAL.phone}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="h-3.5 w-3.5" />
                {PERSONAL.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                {PERSONAL.location}
              </span>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-charcoal-lighter px-5 py-2 text-xs text-charcoal-lighter transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
        <p className="font-mono text-[11px] text-muted">
          © 2026 {PERSONAL.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-muted">
            Designed & developed with React + Tailwind CSS
          </span>
          <a
            href="#"
            className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
