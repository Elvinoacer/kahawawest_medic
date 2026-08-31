"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconMenu, IconClose, IconCalendar } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#symptom-guide", label: "Symptom guide" },
  { href: "#about", label: "About" },
  { href: "#patient-info", label: "Patient info" },
  { href: "#visit", label: "Visit us" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-line shadow-[0_8px_30px_rgba(12,59,46,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Kahawa West Family Medical Centre — home">
          <Image
            src="/images/kahawawest_logo.jpg"
            alt="Kahawa West Family Medical Centre logo"
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-sm"
          />
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold text-forest">
              Kahawa West
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
              Family Medical Centre
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[14.5px] font-medium text-ink/80 transition hover:text-forest">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(217,93,57,0.35)] transition hover:-translate-y-0.5 hover:bg-clay-deep sm:flex"
          >
            <IconCalendar className="h-4 w-4" />
            Book a visit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full border border-line bg-paper p-2.5 text-forest lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-pop glass border-t border-line px-4 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line/60 py-3 text-[15px] font-medium text-ink">
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-3 text-sm font-semibold text-white">
            <IconCalendar className="h-4 w-4" />
            Book a visit
          </a>
        </nav>
      )}
    </header>
  );
}
