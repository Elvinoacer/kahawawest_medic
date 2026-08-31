import Reveal from "@/components/reveal";
import { departments, otherServices, specialClinics } from "@/lib/site";
import {
  IconStethoscope,
  IconBaby,
  IconBone,
  IconEye,
  IconFlask,
  IconBed,
  IconArrowRight,
  IconCalendar,
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            Services & specialist clinics
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Comprehensive family healthcare, specialist clinics & diagnostics
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            From everyday outpatient care to visiting consultants, scheduled
            specialist clinics, diagnostics, rehabilitation and supportive care,
            Kahawa West Family Hospital brings the services listed by the hospital
            together in one place.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-leaf">
                Core clinical departments
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-forest-deep sm:text-3xl">
                Everyday, maternal, diagnostic & inpatient care
              </h3>
            </div>
            <span className="rounded-full bg-paper px-4 py-2 text-[12px] font-semibold text-pine shadow-sm">
              6 core departments
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        <Reveal className="mt-16" delay={120}>
          <div className="rounded-[30px] border border-line bg-paper p-6 shadow-[0_10px_32px_rgba(12,59,46,0.06)] sm:p-8">
            <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-clay">
                  Special clinics
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-forest-deep sm:text-3xl">
                  Consultant-led & scheduled specialist care
                </h3>
              </div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-semibold text-cream transition hover:bg-pine"
              >
                <IconCalendar className="h-4 w-4" />
                Book a clinic
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {specialClinics.map((clinic) => (
                <a
                  key={clinic.id}
                  href="#book"
                  className="group rounded-2xl border border-line/80 bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:border-leaf/40 hover:bg-mint/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[14px] font-bold leading-snug text-forest-deep">
                      {clinic.name}
                    </h4>
                    <IconArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-leaf transition-transform group-hover:translate-x-1" />
                  </div>
                  {clinic.schedule && (
                    <p className="mt-2 inline-flex rounded-full bg-paper px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-clay">
                      {clinic.schedule}
                    </p>
                  )}
                  {clinic.detail && (
                    <p className="mt-2 text-[12px] leading-relaxed text-mute">
                      {clinic.detail}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={160}>
          <div className="rounded-[30px] border border-line bg-forest-deep p-6 text-cream shadow-[0_18px_44px_rgba(12,59,46,0.14)] sm:p-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">
              Other services
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
              Diagnostics, pharmacy, rehabilitation & preventive care
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <a
                  key={service}
                  href="#book"
                  className="group flex items-start gap-3 rounded-2xl border border-cream/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="mt-1 flex h-2.5 w-2.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span className="text-[13.5px] font-semibold leading-relaxed text-cream/90 group-hover:text-white">
                    {service}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <a
            href="#book"
            className="group inline-flex items-center gap-2.5 rounded-full bg-clay px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-clay-deep"
          >
            Book an appointment
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
