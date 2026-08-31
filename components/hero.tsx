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
      className="relative isolate min-h-[760px] overflow-hidden bg-[#edf3ef] lg:min-h-[calc(100svh-48px)]"
    >
      <picture className="absolute inset-0 -z-20 block h-full w-full">
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

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,249,244,0.96)_0%,rgba(250,249,244,0.90)_30%,rgba(250,249,244,0.40)_52%,rgba(250,249,244,0.04)_72%),linear-gradient(180deg,rgba(250,249,244,0.10)_0%,rgba(250,249,244,0)_25%,rgba(8,43,33,0.08)_100%)] lg:bg-[linear-gradient(90deg,rgba(250,249,244,0.98)_0%,rgba(250,249,244,0.90)_30%,rgba(250,249,244,0.38)_53%,rgba(250,249,244,0)_74%),linear-gradient(180deg,rgba(250,249,244,0.06)_0%,rgba(250,249,244,0)_30%,rgba(8,43,33,0.10)_100%)]"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[760px] max-w-[1536px] items-center px-5 pb-10 pt-28 sm:px-8 lg:min-h-[calc(100svh-48px)] lg:px-20 lg:pb-14 lg:pt-24">
        <div className="relative grid w-full gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="max-w-[680px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d7e3da] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-pine shadow-[0_8px_22px_rgba(12,59,46,0.07)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                {site.facility.level} · {site.facility.code}
              </p>

              <h1 className="mt-6 max-w-[680px] font-display text-[48px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#092d23] sm:text-6xl lg:text-[74px] xl:text-[80px]">
                Family care that
                <span className="relative mx-2 inline-block text-[#1a9b6d]">
                  knows
                  <svg
                    viewBox="0 0 120 12"
                    className="absolute -bottom-1 left-0 w-full text-[#e1ad28] sm:-bottom-2"
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

              <p className="mt-7 max-w-[650px] text-[16px] leading-[1.75] text-[#4d5d56] sm:text-[17px]">
                We’re the neighbourhood medical centre behind Kahawa West Market —
                general outpatient care, mother-and-child health, an eye clinic,
                basic orthopaedics and a Class C laboratory. Walk in any day of the
                week, book online, or call us. Whatever works for you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0c5a45] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(12,90,69,0.28)] transition hover:-translate-y-0.5 hover:bg-[#094936]"
                >
                  <IconCalendar className="h-[18px] w-[18px]" />
                  Book an appointment
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={site.phone.href}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/75 px-6 py-[13px] text-[15px] font-semibold text-[#143e33] shadow-[0_8px_22px_rgba(12,59,46,0.07)] backdrop-blur-md transition hover:bg-white"
                >
                  <IconPhone className="h-[18px] w-[18px] text-[#317a60]" />
                  {site.phone.display}
                </a>
              </div>

              <div className="mt-8 flex max-w-[680px] flex-wrap gap-3 sm:mt-9 sm:gap-2.5">
                <div className="flex min-h-[64px] items-center gap-3 rounded-2xl border border-white/75 bg-white/72 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                  <IconShield className="h-5 w-5 shrink-0 text-[#39866a]" />
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#1d302a]">SHA / SHIF</p>
                    <p className="mt-0.5 text-[12px] text-[#5e6d66]">accredited</p>
                  </div>
                </div>
                <div className="flex min-h-[64px] items-center gap-3 rounded-2xl border border-white/75 bg-white/72 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                  <IconClock className="h-5 w-5 shrink-0 text-[#39866a]" />
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#1d302a]">Open late</p>
                    <p className="mt-0.5 text-[12px] text-[#5e6d66]">Weekends · Holidays</p>
                  </div>
                </div>
                <div className="flex min-h-[64px] items-center gap-3 rounded-2xl border border-white/75 bg-white/72 px-4 py-3 shadow-[0_10px_24px_rgba(12,59,46,0.06)] backdrop-blur-md sm:px-5">
                  <IconWalk className="h-5 w-5 shrink-0 text-[#39866a]" />
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#1d302a]">Walk-ins</p>
                    <p className="mt-0.5 text-[12px] text-[#5e6d66]">Always welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-end justify-end lg:col-span-5 lg:min-h-[620px] xl:col-span-5">
            <div className="absolute right-0 top-0 w-[270px] rounded-[26px] border border-white/65 bg-white/68 p-5 shadow-[0_20px_50px_rgba(12,59,46,0.12)] backdrop-blur-xl sm:w-[300px] lg:top-[30px] xl:right-[18px]">
              <p className="flex items-center gap-3 text-[14px] font-semibold text-[#1c302a]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-[#2b8d6a] shadow-sm">
                  <IconClock className="h-[18px] w-[18px]" />
                </span>
                <span>Open 7 days a week</span>
              </p>
              <p className="ml-12 mt-1 text-[12px] leading-relaxed text-[#5f6b65]">
                Weekends &amp; public holidays included
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-[300px] overflow-hidden rounded-[26px] border border-white/70 bg-white/74 shadow-[0_24px_56px_rgba(12,59,46,0.14)] backdrop-blur-xl sm:w-[350px] lg:bottom-[36px] lg:w-[370px] xl:right-[8px]">
              <div className="grid grid-cols-[116px,1fr] items-stretch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mch-newborn.jpg"
                  alt="Newborn baby receiving care"
                  className="h-full min-h-[126px] w-full object-cover"
                  width={480}
                  height={384}
                />
                <div className="flex flex-col justify-center px-4 py-4 sm:px-5">
                  <p className="flex items-center gap-2 text-[14px] font-semibold leading-snug text-[#18382e]">
                    <span className="text-[#2e8f6c]">♡</span>
                    Caring for every stage of life.
                  </p>
                  <p className="mt-2 text-[12px] text-[#68746e]">You&apos;re in good hands.</p>
                  <div className="mt-4 flex items-center gap-1.5" aria-hidden>
                    <span className="h-1.5 w-6 rounded-full bg-[#5ba98a]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7ddd9]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7ddd9]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[38px] left-0 hidden w-[340px] rounded-[26px] border border-white/70 bg-white/74 p-5 shadow-[0_20px_50px_rgba(12,59,46,0.10)] backdrop-blur-xl xl:block">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1b654d]">Our services</p>
              <div className="mt-4 space-y-3.5">
                {heroServices.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-3.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/80 text-[#2d8b69]">
                      <Icon className="h-[17px] w-[17px]" />
                    </span>
                    <span className="text-[12.5px] font-semibold text-[#263731]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-16 w-[82%] -translate-x-1/2 rounded-t-[50%] bg-white/20 blur-2xl lg:block" aria-hidden />
    </section>
  );
}
