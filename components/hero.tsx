import { site } from "@/lib/site";
import {
  IconShield,
  IconClock,
  IconPhone,
  IconCalendar,
  IconArrowRight,
} from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pattern-dots absolute inset-x-0 top-0 h-72 opacity-40" aria-hidden />
      <div
        className="absolute -right-40 -top-24 h-[480px] w-[480px] rounded-full bg-mint/70 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-32 top-64 h-72 w-72 rounded-full bg-gold-soft/80 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-16">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.13em] text-pine">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden />
            {site.facility.level} · {site.facility.code}
          </p>

          <h1 className="mt-6 font-display text-[42px] font-semibold leading-[1.05] tracking-tight text-forest-deep sm:text-6xl lg:text-[64px]">
            Family care that
            <span className="relative mx-2 inline-block text-leaf">
              knows
              <svg
                viewBox="0 0 120 12"
                className="absolute -bottom-1 left-0 w-full text-gold"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path
                  d="M3 9C30 3 70 3 117 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            your name.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">
            Kahawa West Family Hospital brings family healthcare, specialist
            clinics and diagnostics closer to home — from outpatient and
            maternal & child care to consultant orthopaedics, psychiatry,
            obstetrics & gynaecology, paediatrics, ultrasound, pharmacy,
            rehabilitation, physiotherapy, home care and wellness screening.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="group flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-[15px] font-semibold text-cream shadow-[0_10px_28px_rgba(12,59,46,0.35)] transition hover:-translate-y-0.5 hover:bg-pine"
            >
              <IconCalendar className="h-4.5 w-4.5" />
              Book an appointment
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.phone.href}
              className="flex items-center gap-2.5 rounded-full border-2 border-forest/15 bg-paper px-6 py-3 text-[15px] font-semibold text-forest transition hover:border-forest/40"
            >
              <IconPhone className="h-4.5 w-4.5 text-clay" />
              {site.phone.display}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[13.5px] font-medium text-ink/75">
            <li className="flex items-center gap-2">
              <IconShield className="h-4.5 w-4.5 text-leaf" />
              {site.facility.accreditation}
            </li>
            <li className="flex items-center gap-2">
              <IconClock className="h-4.5 w-4.5 text-leaf" />
              Open late · weekends · holidays
            </li>
            <li className="flex items-center gap-2">
              <IconPhone className="h-4.5 w-4.5 text-leaf" />
              Walk-ins welcome
            </li>
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[560px]">
            <div className="arch overflow-hidden border-[6px] border-paper shadow-[0_30px_70px_rgba(12,59,46,0.22)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-consult.jpg"
                alt="A smiling doctor consulting a patient at the hospital"
                className="aspect-[4/5] w-full object-cover"
                width={800}
                height={1000}
              />
            </div>

            <figure className="absolute -bottom-8 -left-4 w-[46%] overflow-hidden rounded-3xl border-4 border-paper shadow-[0_18px_44px_rgba(12,59,46,0.25)] sm:-left-10 sm:w-[44%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mch-newborn.jpg"
                alt="A newborn baby resting beside its mother"
                className="aspect-[5/4] w-full object-cover"
                width={480}
                height={384}
              />
            </figure>

            <div className="glass animate-floaty absolute -right-2 top-8 rounded-2xl border border-line px-4 py-3 shadow-[0_14px_36px_rgba(12,59,46,0.16)] sm:-right-6">
              <p className="flex items-center gap-2 text-[13px] font-semibold text-forest">
                <IconClock className="h-4 w-4 text-leaf" />
                Open 7 days a week
              </p>
              <p className="mt-0.5 text-[12px] text-mute">
                Weekends & public holidays included
              </p>
            </div>

            <div className="glass absolute -bottom-5 right-4 flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 shadow-[0_14px_36px_rgba(12,59,46,0.16)]">
              <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-clay" aria-hidden />
              <p className="text-[13px] font-semibold text-forest">
                Walk-ins welcome
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}