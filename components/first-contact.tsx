import Reveal from "@/components/reveal";
import {
  IconCalendar,
  IconPhone,
  IconWalk,
  IconShield,
  IconArrowRight,
} from "@/components/icons";
import { site } from "@/lib/site";

const paths = [
  {
    icon: IconCalendar,
    step: "01",
    title: "Book online",
    body: "Pick a department, a day and a time slot. We confirm your slot and have your file ready when you arrive — no queue-jumping anxiety.",
    cta: { label: "Start booking", href: "#book" },
  },
  {
    icon: IconWalk,
    step: "02",
    title: "Walk in & triage",
    body: "Feeling off? Just come. Our triage nurse takes vitals and routes you to the right clinician — acute cases are always seen first.",
    cta: { label: "See our hours", href: "#visit" },
  },
  {
    icon: IconPhone,
    step: "03",
    title: "Call or WhatsApp",
    body: "Prefer to talk first? Call the desk — our team answers in English, Kiswahili or Gikuyu, and tells you honestly whether you need to come in.",
    cta: { label: `Call ${site.phone.display}`, href: site.phone.href },
  },
  {
    icon: IconShield,
    step: "04",
    title: "SHA & payments",
    body: "We’re an accredited SHA provider. Bring your SHA number — or pay by cash, M-Pesa or private cover. Fees are disclosed before any test.",
    cta: { label: "How coverage works", href: "#patient-info" },
  },
];

export default function FirstContact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
          Your first contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
          Four ways in. Pick whichever feels easiest.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-mute">
          There’s no wrong door at our clinic. Whether you plan ahead or wake up
          unwell, you’ll reach a person — not a portal — and get seen without
          the runaround.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((p, i) => (
          <Reveal key={p.step} delay={i * 90}>
            <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_20px_44px_rgba(12,59,46,0.12)]">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-forest transition group-hover:bg-forest group-hover:text-gold">
                  <p.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-semibold text-line">
                  {p.step}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest-deep">
                {p.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mute">
                {p.body}
              </p>
              <a
                href={p.cta.href}
                className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-pine transition group-hover:gap-2.5 hover:text-leaf"
              >
                {p.cta.label}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
