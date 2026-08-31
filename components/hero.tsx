import { site } from "@/lib/site";
import {
  IconShield,
  IconClock,
  IconPhone,
  IconCalendar,
  IconArrowRight,
  IconWalk,
  IconStethoscope,
  IconBaby,
  IconEye,
  IconBone,
  IconFlask,
  IconHeart,
} from "@/components/icons";

const heroServices = [
  { label: "General Outpatient Care", Icon: IconStethoscope },
  { label: "Mother & Child Health", Icon: IconBaby },
  { label: "Eye Clinic", Icon: IconEye },
  { label: "Basic Orthopaedics", Icon: IconBone },
  { label: "Class C Laboratory", Icon: IconFlask },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[790px] overflow-hidden bg-[#eef3ef] lg:min-h-[calc(100svh-50px)]"
    >
      {/* Supplied room/background artwork */}
      <picture className="absolute inset-0 -z-30 h-full w-full">
        <source
          media="(max-width: 767px)"
          srcSet="/images/kahawawest_hero_bg_mobile.webp"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kahawawest_hero_bg_pc.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>

      {/* Keep the left side clean for the headline while preserving the room */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(251,250,246,0.97)_0%,rgba(251,250,246,0.92)_32%,rgba(251,250,246,0.52)_52%,rgba(251,250,246,0.06)_74%),linear-gradient(180deg,rgba(251,250,246,0.03)_10%,rgba(251,250,246,0)_55%,rgba(8,43,33,0.10)_100%)]"
      />

      {/* The original doctor photo is intentionally retained as the main person in the composition. */}
      <div
        className="pointer-events-none absolute -z-10 hidden lg:block"
        style={{
          top: "7%",
          right: "22%",
          width: "31vw",
          maxWidth: 515,
          minWidth: 390,
          height: "76%",
        }}
        aria-hidden
      >
        <div className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_94%,transparent_100%)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-consult.jpg"
            alt=""
            className="h-full w-full object-cover object-top"
            width={800}
            height={1200}
          />
        </div>
      </div>

      <div className="mx-auto flex min-h-[790px] max-w-[1536px] items-center px-5 pb-9 pt-28 sm:px-8 lg:min-h-[calc(100svh-50px)] lg:px-20 lg:pb-12 lg:pt-20">
        <div className="relative w-full">
          <div className="max-w-[700px] lg:pt-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d4e1d9] bg-white/78 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-pine shadow-[0_8px_22px_rgba(12,59,46,0.06)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {site.facility.level} · {site.facility.code}
            </p>

            <h1 className="mt-6 max-w-[680px] font-display text-[50px] font-semibold leading-[0.98] tracking-[-0.038em] text-[#082f25] sm:text-[62px] lg:text-[72px] xl:text-[78px]">
              Family care that
              <span className="relative mx-2 inline-block text-[#15996a]">
                knows
                <svg
                  viewBox="0 0 120 12"
                  className="absolute -bottom-2 left-0 w-full text-[#e3b128]"
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
              </span>{" "}
              your name.
            </h1>

            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.75] text-[#53635c] sm:text-[17px]">
              We’re the neighbourhood medical centre behind Kahawa West Market —
              general outpatient care, mother-and-child health, an eye clinic, basic
              orthopaedics and a Class C laboratory. Walk in any day of the week,
              book online, or call us. Whatever works for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0a654c] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(10,101,76,0.26)] transition hover:-translate-y-0.5 hover:bg-[#08543f]"
              >
                <IconCalendar className="h-[18px] w-[18px]" />
                Book an appointment
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/78 px-6 py-[13px] text-[15px] font-semibold text-[#173a30] shadow-[0_8px_22px_rgba(12,59,46,0.07)] backdrop-blur-md transition hover:bg-white"
              >
                <IconPhone className="h-[18px] w-[18px] text-[#2e7b5e]" />
                {site.phone.display}
              </a>
            </div>

            <div className="mt-8 flex max-w-[670px] flex-wrap gap-2.5">
              <div className="flex min-h-[64px] items-center gap-3 rounded-[18px] border border-white/80 bg-white/68 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                <IconShield className="h-5 w-5 shrink-0 text-[#39896b]" />
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-[#21322c]">SHA / SHIF</p>
                  <p className="mt-0.5 text-[12px] text-[#65736d]">accredited</p>
                </div>
              </div>
              <div className="flex min-h-[64px] items-center gap-3 rounded-[18px] border border-white/80 bg-white/68 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                <IconClock className="h-5 w-5 shrink-0 text-[#39896b]" />
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-[#21322c]">Open late</p>
                  <p className="mt-0.5 text-[12px] text-[#65736d]">Weekends · Holidays</p>
                </div>
              </div>
              <div className="flex min-h-[64px] items-center gap-3 rounded-[18px] border border-white/80 bg-white/68 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                <IconWalk className="h-5 w-5 shrink-0 text-[#39896b]" />
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-[#21322c]">Walk-ins</p>
                  <p className="mt-0.5 text-[12px] text-[#65736d]">Always welcome</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop floating information cards — positioned to match the supplied reference. */}
          <div className="absolute right-[4px] top-[44px] hidden w-[292px] rounded-[27px] border border-white/75 bg-white/62 p-5 shadow-[0_20px_50px_rgba(12,59,46,0.12)] backdrop-blur-xl xl:block">
            <p className="flex items-center gap-3 text-[14px] font-semibold text-[#22332d]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-[#26916e] shadow-sm">
                <IconClock className="h-[18px] w-[18px]" />
              </span>
              Open 7 days a week
            </p>
            <p className="ml-12 mt-1 text-[12px] leading-relaxed text-[#5e6c66]">
              Weekends &amp; public holidays included
            </p>
          </div>

          <div className="absolute bottom-[-16px] right-[7px] hidden w-[302px] rounded-[25px] border border-white/75 bg-white/62 p-5 shadow-[0_20px_50px_rgba(12,59,46,0.12)] backdrop-blur-xl xl:block">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#146c51]">Our services</p>
            <div className="mt-4 space-y-3.5">
              {heroServices.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/80 text-[#2b916f] shadow-sm">
                    <Icon className="h-[17px] w-[17px]" />
                  </span>
                  <span className="text-[12.5px] font-semibold text-[#273731]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-center baby card */}
          <div className="absolute bottom-[-18px] left-[51%] hidden w-[450px] -translate-x-1/2 overflow-hidden rounded-[27px] border border-white/80 bg-white/76 shadow-[0_22px_55px_rgba(12,59,46,0.18)] backdrop-blur-xl xl:block">
            <div className="grid grid-cols-[46%,54%] items-stretch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mch-newborn.jpg"
                alt="Newborn baby receiving care"
                className="h-[164px] w-full object-cover"
                width={480}
                height={384}
              />
              <div className="flex flex-col justify-center px-5 py-4">
                <p className="flex items-start gap-2 text-[14px] font-semibold leading-snug text-[#18372e]">
                  <IconHeart className="mt-0.5 h-[19px] w-[19px] shrink-0 text-[#2d9771]" />
                  <span>Caring for every stage of life.</span>
                </p>
                <p className="ml-[27px] mt-2 text-[12px] text-[#68756f]">You&apos;re in good hands.</p>
                <div className="ml-[27px] mt-4 flex items-center gap-1.5" aria-hidden>
                  <span className="h-1.5 w-6 rounded-full bg-[#62a98d]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8dedb]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8dedb]" />
                </div>
              </div>
            </div>
          </div>

          {/* Tablet/mobile stack: preserve the supplied lady image and supporting cards below the copy. */}
          <div className="mt-12 space-y-4 lg:hidden">
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-[0_20px_45px_rgba(12,59,46,0.13)] backdrop-blur-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-consult.jpg"
                alt="Doctor consulting a patient"
                className="h-[380px] w-full object-cover object-top"
                width={800}
                height={1000}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/75 bg-white/68 p-5 shadow-[0_16px_34px_rgba(12,59,46,0.10)] backdrop-blur-xl">
                <p className="flex items-center gap-3 text-sm font-semibold text-[#1d332b]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-[#2b916f]"><IconClock className="h-4 w-4" /></span>
                  Open 7 days a week
                </p>
                <p className="ml-12 mt-1 text-xs text-[#68756f]">Weekends &amp; public holidays included</p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/75 bg-white/68 shadow-[0_16px_34px_rgba(12,59,46,0.10)] backdrop-blur-xl">
                <div className="grid grid-cols-[112px,1fr]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mch-newborn.jpg" alt="Newborn baby receiving care" className="h-full min-h-[118px] w-full object-cover" />
                  <div className="p-4">
                    <p className="flex gap-2 text-xs font-semibold text-[#1d332b]"><IconHeart className="h-4 w-4 shrink-0 text-[#2d9771]" /> Caring for every stage of life.</p>
                    <p className="mt-2 text-[11px] text-[#68756f]">You&apos;re in good hands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
