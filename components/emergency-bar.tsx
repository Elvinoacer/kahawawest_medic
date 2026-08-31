export default function EmergencyBar() {
  return (
    <div className="min-h-[50px] bg-forest-deep text-cream">
      <div className="mx-auto flex min-h-[50px] max-w-[1536px] items-center px-6 py-2 text-[13px] sm:px-8 lg:px-14">
        <p className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
          <span>
            <span className="font-medium text-gold">Emergencies don’t wait ahead.</span>{" "}
            <span className="text-cream/90">Call us — we stabilise first, register later.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
