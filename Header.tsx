import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { PERSONAL } from "../data";
import { cn } from "../utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.01);
  });

  const navItems = [
    { label: "Summary", href: "#summary" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 md:hidden",
          scrolled
            ? "border-b border-border bg-paper/90 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="flex h-14 items-center justify-between px-5">
          <a href="#" className="font-display text-lg text-ink">
            {PERSONAL.name}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Progress bar */}
        <motion.div
          className="h-0.5 origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-b border-border bg-paper px-5 py-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-light transition-colors hover:bg-paper-dark hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Desktop floating nav */}
      <nav className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 gap-1 rounded-2xl border border-border bg-paper/90 px-2 py-2 shadow-xl shadow-ink/5 backdrop-blur-xl md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-xl px-4 py-2 text-xs font-medium text-muted transition-all duration-300 hover:bg-ink hover:text-paper"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-accent-light"
        >
          <Download className="h-3 w-3" />
          CV
        </a>
      </nav>
    </>
  );
}
