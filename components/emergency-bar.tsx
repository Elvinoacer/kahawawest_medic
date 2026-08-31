import { site } from "@/lib/site";

export default function EmergencyBar() {
  return (
    <div className="min-h-[50px] bg-forest-deep text-cream">
      <div className="mx-auto flex min-h-[50px] max-w-[1536px] items-center justify-between gap-4 px-6 py-2 text-[13px] sm:px-8 lg:px-14">
        <p className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
          <span>
            <span className="font-medium text-gold">Emergencies don’t wait ahead.</span>{" "}
            <span className="text-cream/90">Call us — we stabilise first, register later.</span>
          </span>
        </p>
        <a
          href={site.phone.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-[13px] font-semibold text-gold transition hover:bg-gold/25"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {site.phone.display}
        </a>
      </div>
    </div>
  );
}
