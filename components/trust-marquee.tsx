import { marqueeItems } from "@/lib/site";

export default function TrustMarquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-forest-deep/40 bg-forest py-3.5">
      <div
        className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap"
        aria-hidden={false}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-cream/85"
          >
            {item}
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold" fill="currentColor" aria-hidden>
              <path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.5-6.3 4.5L8 13.8 2 9.2h7.6L12 2z" />
            </svg>
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent"
        aria-hidden
      />
    </div>
  );
}
