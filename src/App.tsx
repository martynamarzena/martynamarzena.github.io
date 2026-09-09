import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Portfolio } from "./components/Portfolio";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/Education";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen bg-paper text-ink antialiased selection:bg-accent selection:text-paper">
      {/* CV Sidebar — hidden on mobile, shown on desktop */}
      <div className="hidden w-[340px] shrink-0 lg:block xl:w-[380px]">
        <Sidebar />
      </div>

      {/* Mobile header */}
      <div className="lg:hidden">
        <Header />
      </div>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        {/* Mobile profile hero */}
        <MobileHero />

        {/* Content sections */}
        <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 lg:px-14">
          <Summary />
          <Portfolio />
          <ExperienceSection />
          <EducationSection />
          <Awards />
          <Footer />
        </div>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile-only hero when sidebar is hidden                                   */
/* -------------------------------------------------------------------------- */

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL } from "./data";

function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 pt-20 pb-10 lg:hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 sidebar-pattern" />

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-28 w-28 overflow-hidden rounded-2xl border-2 border-charcoal-lighter"
        >
          <img
            src="/images/portrait.jpg"
            alt="Maya Chen portrait"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="mt-5 font-display text-3xl tracking-tight text-paper">
            {PERSONAL.name}
          </h1>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            {PERSONAL.title}
          </p>
        </motion.div>

        {/* Quick contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex flex-wrap justify-center gap-3"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center gap-2 rounded-full border border-charcoal-lighter px-4 py-2 text-xs text-paper/70 transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PERSONAL.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href={`tel:${PERSONAL.phone}`}
            className="flex items-center gap-2 rounded-full border border-charcoal-lighter px-4 py-2 text-xs text-paper/70 transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PERSONAL.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <span className="flex items-center gap-2 rounded-full border border-charcoal-lighter px-4 py-2 text-xs text-paper/70">
            <MapPin className="h-3.5 w-3.5" />
            {PERSONAL.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
