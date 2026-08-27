import { site } from "@/lib/site";
import { IconPhone } from "@/components/icons";

export default function EmergencyBar() {
  return (
    <div className="bg-forest-deep text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[13px] sm:justify-between">
        <p className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-clay" aria-hidden />
          <span>
            <span className="font-medium text-gold">Emergencies don’t book ahead.</span>{" "}
            <span className="text-cream/85">
              Call us — we stabilise first, register later.
            </span>
          </span>
        </p>
        <a
          href={site.phone.href}
          className="flex items-center gap-2 rounded-full bg-clay px-4 py-1 font-semibold tracking-wide transition hover:bg-clay-deep"
        >
          <IconPhone className="h-3.5 w-3.5" />
          {site.phone.display}
        </a>
      </div>
    </div>
  );
}
