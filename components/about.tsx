import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { IconCheck, IconHeart, IconLang, IconShield } from "@/components/icons";

const values = [
  {
    icon: IconHeart,
    title: "Patient-first, always",
    body: "Dignified care, empathetic intake and structured follow-up — we treat people, not case numbers.",
  },
  {
    icon: IconShield,
    title: "Transparent fees",
    body: "Costs are disclosed and agreed before any test or procedure. No surprises at the counter.",
  },
  {
    icon: IconLang,
    title: "Care in your language",
    body: "Our team consults fluently in English, Kiswahili and Gikuyu — so nothing gets lost between you and your diagnosis.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-forest py-20 text-cream lg:py-28">
      <div className="pattern-dots-light absolute" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Imagery collage */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <div className="overflow-hidden rounded-[32px] border-4 border-cream/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/community-doctor.jpg"
                alt="A doctor smiling warmly in a consultation room"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={640}
                height={480}
              />
            </div>
            <div className="absolute -bottom-10 -right-4 w-[52%] overflow-hidden rounded-3xl border-4 border-forest shadow-[0_18px_44px_rgba(0,0,0,0.4)] sm:-right-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/outreach-vaccination.jpg"
                alt="A nurse vaccinating a child during an outreach visit"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
                width={480}
                height={384}
              />
            </div>
            <div className="glass-dark absolute -left-3 -top-5 rounded-2xl px-4 py-3 sm:-left-8">
              <p className="font-display text-2xl font-semibold text-gold">Since day one,</p>
              <p className="text-[12.5px] text-cream/85">rooted in this community</p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-gold">
              About the centre
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-[40px] sm:leading-[1.1]">
              A neighbourhood practice, run to hospital standard.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-cream/80">
              Kahawa West Family Medical Centre is a registered Level 3
              facility — privately owned and run by resident general
              practitioners, with visiting consultant sessions in orthopaedics
              and eye care. From Zimmerman and Kahawa West market to Githurai
              44, we’re the closest place to get real answers, real treatment
              and honest referrals when a case needs a bigger hospital.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-cream/80">
              Every practitioner is licensed with the Kenya Medical
              Practitioners and Dentists Council, and our laboratory team holds
              KMLTTB credentials — credentials we display openly at reception,
              because trust should be verifiable.
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="flex gap-4 rounded-2xl bg-forest-deep/60 p-4.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <v.icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-[17px] font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-cream/70">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 lg:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-forest px-4 py-8 text-center">
                <dt className="order-2 mt-1 text-[13px] font-medium text-cream/65">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-semibold text-gold sm:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={100} className="mt-6 flex items-center justify-center gap-2 text-[13px] text-cream/60">
          <IconCheck className="h-4 w-4 text-leaf" />
          Licences & certificates displayed at reception — always feel free to ask to see them.
        </Reveal>
      </div>
    </section>
  );
}
