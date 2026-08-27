import Reveal from "@/components/reveal";
import { departments } from "@/lib/site";
import {
  IconStethoscope,
  IconBaby,
  IconBone,
  IconEye,
  IconFlask,
  IconBed,
  IconArrowRight,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  general: IconStethoscope,
  mch: IconBaby,
  ortho: IconBone,
  eye: IconEye,
  lab: IconFlask,
  inpatient: IconBed,
};

const Icon = ({ id, className }: { id: string; className?: string }) => {
  const Cmp = icons[id];
  return Cmp ? <Cmp className={className} /> : null;
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sand/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            Clinical services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Everything a family needs, under one roof
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            Six departments covering the everyday and the urgent — so care
            stays in the neighbourhood instead of a matatu ride across town.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_6px_24px_rgba(12,59,46,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(12,59,46,0.14)]">
                {d.image ? (
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.image}
                      alt={d.alt ?? d.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper/95 text-forest shadow-md">
                      <Icon id={d.id} className="h-5.5 w-5.5" />
                    </span>
                  </div>
                ) : (
                  <div className="pattern-dots relative flex h-44 items-center justify-center bg-mint/50">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest text-gold shadow-lg transition duration-300 group-hover:scale-110">
                      <Icon id={d.id} className="h-8 w-8" />
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[19px] font-semibold leading-snug text-forest-deep">
                    {d.name}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-leaf">
                    {d.short}
                  </p>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mute">
                    {d.blurb}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-mint/70 px-3 py-1 text-[11px] font-semibold text-pine"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-pine"
          >
            Book into any department
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
