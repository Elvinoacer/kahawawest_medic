import { site, transit } from "@/lib/site";
import Reveal from "@/components/reveal";
import {
  IconClock,
  IconPin,
  IconWalk,
  IconArrowRight,
} from "@/components/icons";

export default function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-24 bg-sand/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            Visit us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Behind Kahawa West Market — you’ve walked past us.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            {site.address.line1}. {site.address.line2}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Hours */}
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[28px] border border-line bg-paper p-7">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-forest-deep">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-forest">
                  <IconClock className="h-5 w-5" />
                </span>
                Opening hours
              </h3>
              <table className="mt-5 w-full text-left text-[13.5px]">
                <tbody>
                  {site.hours.map((h) => (
                    <tr key={h.service} className="border-t border-line/80 align-top">
                      <th scope="row" className="w-[38%] py-3 pr-3 font-semibold text-ink">
                        {h.service}
                      </th>
                      <td className="py-3 text-mute">
                        {h.time}
                        <span className="mt-0.5 block text-[12px] text-mute/80">{h.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 rounded-xl bg-gold-soft/70 px-4 py-3 text-[12.5px] leading-relaxed text-ink/80">
                Hours can shift on busy days. Calling ahead saves you a trip —
                the desk will tell you exactly what’s running.
              </p>
            </div>
          </Reveal>

          {/* Getting here */}
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="grid h-full gap-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {transit.map((t) => (
                  <div key={t.title} className="rounded-3xl border border-line bg-paper p-5">
                    <h3 className="flex items-center gap-2 font-display text-[16px] font-semibold text-forest-deep">
                      {t.title === "On foot" ? (
                        <IconWalk className="h-4.5 w-4.5 text-leaf" />
                      ) : (
                        <IconPin className="h-4.5 w-4.5 text-leaf" />
                      )}
                      {t.title}
                    </h3>
                    {t.lines.map((l, i) => (
                      <p key={i} className="mt-2.5 text-[12.5px] leading-relaxed text-mute">
                        {l}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-line shadow-sm">
                <iframe
                  title="Map showing Kahawa West area, Nairobi"
                  src={site.address.osmEmbed}
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass absolute right-4 top-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-forest shadow-[0_10px_26px_rgba(12,59,46,0.18)] transition hover:-translate-y-0.5"
                >
                  Open directions
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
