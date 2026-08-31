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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-[50px] z-50 px-4 pt-1 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-[1536px] rounded-full border transition-all duration-300 ${
          scrolled || open
            ? "border-white/85 bg-white/88 shadow-[0_12px_35px_rgba(12,59,46,0.12)] backdrop-blur-xl"
            : "border-white/70 bg-white/68 shadow-[0_8px_30px_rgba(12,59,46,0.08)] backdrop-blur-xl"
        }`}
      >
        <div className="flex min-h-[76px] items-center justify-between gap-4 px-5 py-2.5 sm:px-7 lg:min-h-[86px] lg:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Kahawa West Family Medical Centre — home">
            <Image src="/images/kahawawest_logo.jpg" alt="Kahawa West Family Hospital logo" width={52} height={52} priority className="h-11 w-11 rounded-[14px] object-cover shadow-sm lg:h-[50px] lg:w-[50px]" />
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-semibold text-[#102f26] lg:text-[19px]">Kahawa West</span>
              <span className="block text-[9.5px] font-medium uppercase tracking-[0.18em] text-[#4e625a] lg:text-[10px]">Family Medical Centre</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {links.map((l) => <a key={l.href} href={l.href} className="text-[14px] font-medium text-[#263c35] transition hover:text-[#0b7657]">{l.label}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#book" className="hidden items-center gap-2 rounded-full bg-[#0b614b] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_22px_rgba(11,97,75,0.25)] transition hover:-translate-y-0.5 hover:bg-[#084c3b] sm:flex">
              <IconCalendar className="h-4 w-4" /> Book a visit
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="rounded-full border border-[#d8e2dc] bg-white/75 p-2.5 text-[#0c3b2e] xl:hidden">
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="animate-pop rounded-b-[28px] border-t border-[#dce5df] px-5 pb-5 pt-2 xl:hidden">
            {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#dce5df] py-3 text-[15px] font-medium text-[#243b33]">{l.label}</a>)}
            <a href="#book" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0b614b] px-5 py-3 text-sm font-semibold text-white"><IconCalendar className="h-4 w-4" /> Book a visit</a>
          </nav>
        )}
      </div>
    </header>
  );
}
