"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import Reveal from "@/components/reveal";
import { IconPlus } from "@/components/icons";

export default function PatientInfo() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="patient-info" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            Patient information
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Before you come, know before you go.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            Clear answers on documents, test preparation, SHA coverage and your
            privacy — so your visit is smooth from the doorstep to the
            dispensary.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/eye-exam.jpg"
              alt="A clinician performing a routine eye examination"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              width={640}
              height={400}
            />
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="space-y-3.5">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <article
                    className={`overflow-hidden rounded-3xl border transition duration-300 ${
                      isOpen ? "border-leaf/40 bg-paper shadow-[0_16px_40px_rgba(12,59,46,0.08)]" : "border-line bg-paper"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-[18px] font-semibold text-forest-deep">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen ? "rotate-45 bg-forest text-gold" : "bg-mint text-forest"
                        }`}
                      >
                        <IconPlus className="h-4.5 w-4.5" />
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-panel-${i}`}
                        role="region"
                        className="animate-rise space-y-3 px-6 pb-6"
                      >
                        {f.body.map((p, j) => (
                          <p key={j} className="text-[14.5px] leading-relaxed text-mute">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
