"use client";

import { useState } from "react";
import { symptomTerms } from "@/lib/site";
import Reveal from "@/components/reveal";
import { IconArrowRight, IconAlert, IconLang } from "@/components/icons";

export default function SymptomGuide() {
  const [active, setActive] = useState(0);
  const term = symptomTerms[active];

  return (
    <section id="symptom-guide" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            <IconLang className="h-4 w-4" />
            We speak your language
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Say it however you can. We’ll understand.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            Medical words can be intimidating — and they shouldn’t decide how
            fast you get help. Tap how you’d describe it at our front desk, and
            see where it leads.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Term selector */}
          <Reveal className="lg:col-span-5">
            <ul className="flex flex-col gap-2.5" role="tablist" aria-label="Ways patients describe symptoms">
              {symptomTerms.map((t, i) => {
                const selected = i === active;
                return (
                  <li key={t.lay}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(i)}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition duration-200 ${
                        selected
                          ? "border-forest bg-forest text-cream shadow-[0_14px_34px_rgba(12,59,46,0.25)]"
                          : "border-line bg-paper text-ink hover:border-leaf/50 hover:bg-mint/40"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>
                          <span className="block font-display text-[17px] font-semibold">
                            “{t.lay}”
                          </span>
                          <span
                            className={`mt-0.5 block text-[13px] ${
                              selected ? "text-cream/70" : "text-mute"
                            }`}
                          >
                            {t.alt}
                          </span>
                        </span>
                        <IconArrowRight
                          className={`h-5 w-5 shrink-0 transition ${
                            selected ? "text-gold" : "text-line"
                          }`}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Translation panel */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div
              key={active}
              className="animate-pop relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-paper p-7 sm:p-10"
            >
              <div className="pattern-dots absolute right-0 top-0 h-40 w-40 opacity-30" aria-hidden />
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-clay">
                At the desk you might say
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-forest-deep sm:text-3xl">
                “{term.lay}”
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-[auto,1fr] sm:gap-8">
                <div className="sm:border-r sm:border-line sm:pr-8">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-mute">
                    What we call it
                  </p>
                  <p className="mt-2 max-w-xs text-[15px] font-semibold leading-snug text-forest">
                    {term.clinical}
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-gold-soft px-3.5 py-1.5 text-[12px] font-bold text-forest">
                    {term.deptLabel}
                  </span>
                </div>
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-mute">
                    What actually happens
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/85">
                    {term.plain}
                  </p>
                  <a
                    href={`#book`}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13.5px] font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-pine"
                  >
                    Book into {term.deptLabel}
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="flex items-start gap-3 rounded-2xl border border-gold/50 bg-gold-soft/60 px-5 py-4 text-[13.5px] leading-relaxed text-ink/85">
            <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
            <span>
              <strong className="font-semibold">No test before you’re seen.</strong>{" "}
              This guide is for orientation only — our clinicians confirm what’s
              actually going on before any test or treatment. Describe your
              symptoms in English, Kiswahili, Gikuyu or Sheng; whichever comes
              naturally.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
