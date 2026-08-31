import Image from "next/image";
import { site } from "@/lib/site";
import {
  IconPhone,
  IconWhatsapp,
  IconCalendar,
  IconPin,
} from "@/components/icons";

const quickLinks = [
  { href: "#services", label: "Clinical services" },
  { href: "#symptom-guide", label: "Symptom guide" },
  { href: "#book", label: "Book a visit" },
  { href: "#patient-info", label: "Patient information" },
  { href: "#visit", label: "Find us" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Care for your family is one{" "}
            <span className="text-gold">tap</span> away.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="#book" className="flex items-center gap-2.5 rounded-full bg-clay px-7 py-3.5 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-clay-deep">
              <IconCalendar className="h-4.5 w-4.5" />
              Book a visit
            </a>
            <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 rounded-full border-2 border-cream/25 px-6 py-3 text-[15px] font-semibold text-cream transition hover:bg-cream/10">
              <IconWhatsapp className="h-5 w-5" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/kahawawest_logo.jpg"
              alt="Kahawa West Family Medical Centre logo"
              width={52}
              height={52}
              className="h-11 w-11 rounded-xl object-cover"
            />
            <div className="leading-tight">
              <p className="font-display text-[17px] font-semibold">Kahawa West</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream/60">Family Medical Centre</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-cream/65">
            {site.tagline} A community-rooted Level 3 practice serving Kahawa West, Zimmerman and the greater Roysambu constituency.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-wider text-gold">
            {site.facility.accreditation}
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/50">Quick links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[14px] text-cream/80 transition hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-[14px] text-cream/80">
            <li>
              <a href={site.phone.href} className="flex items-center gap-2.5 transition hover:text-gold">
                <IconPhone className="h-4.5 w-4.5 text-gold" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 transition hover:text-gold">
                <IconWhatsapp className="h-4.5 w-4.5 text-gold" />
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
              <span>{site.address.line1}<br />{site.address.line2}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/50">Hours at a glance</h3>
          <ul className="mt-4 space-y-2.5 text-[13.5px] text-cream/75">
            <li className="flex justify-between gap-3 border-b border-cream/10 pb-2"><span>Monday – Sunday</span><span className="text-right font-medium text-cream">Extended hours, till late</span></li>
            <li className="flex justify-between gap-3 border-b border-cream/10 pb-2"><span>Weekends & holidays</span><span className="text-right font-medium text-cream">Open</span></li>
            <li className="flex justify-between gap-3"><span>Emergency triage</span><span className="text-right font-medium text-clay">Call first</span></li>
          </ul>
          <p className="mt-5 rounded-2xl bg-clay/15 p-4 text-[12.5px] leading-relaxed text-cream/85">
            In a life-threatening emergency anywhere in Kenya, call <strong className="text-gold">999</strong> or <strong className="text-gold">112</strong> — then call us.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 lg:flex-row lg:text-left">
          <p className="text-[12px] leading-relaxed text-cream/55">
            © {new Date().getFullYear()} {site.name} · Registered Level 3 Nursing Home · MOH facility code {site.facility.code} · KMPDC-licensed practitioners · KMLTTB-credentialed laboratory staff · Compliant with the Data Protection Act (2019)
          </p>
          <p className="shrink-0 text-[12px] text-cream/55">Kwa afya ya familia — karibu sana.</p>
        </div>
      </div>
    </footer>
  );
}
