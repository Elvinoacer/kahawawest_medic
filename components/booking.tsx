"use client";

import { useMemo, useState } from "react";
import { departments, emergencySigns, site } from "@/lib/site";
import Reveal from "@/components/reveal";
import {
  IconAlert,
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconPhone,
  IconPin,
} from "@/components/icons";

/* ── types & helpers ─────────────────────────────────────────────── */

type FormState = {
  name: string;
  phone: string;
  idno: string;
  dept: string;
  date: string;
  slot: string;
  practitioner: string;
  payment: string;
  coverno: string;
  complaint: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  idno: "",
  dept: "",
  date: "",
  slot: "",
  practitioner: "Any available clinician",
  payment: "SHA / SHIF",
  coverno: "",
  complaint: "",
  consent: false,
};

const slots = ["Morning (8:00 – 11:30)", "Midday (11:30 – 14:30)", "Afternoon (14:00 – 17:00)", "Evening (17:00 – late)"];
const practitioners = ["Any available clinician", "Female clinician", "Male clinician", "Visiting consultant (ortho / eye)"];
const payments = ["SHA / SHIF", "Private insurance", "Cash", "M-Pesa"];

const kePhone = /^(?:\+254|0)(?:7|1)\d{8}$/;

function todayISO() {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60_000).toISOString().slice(0, 10);
}

function makeReference() {
  const t = Date.now().toString(36).toUpperCase().slice(-4);
  const r = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `KWF-${t}${r}`;
}

const stepMeta = [
  { n: 1, label: "Your details" },
  { n: 2, label: "The visit" },
  { n: 3, label: "Coverage & concern" },
];

/* ── component ───────────────────────────────────────────────────── */

export default function Booking() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [emergencies, setEmergencies] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ reference: string; saved: boolean } | null>(null);

  const emergencyMode = emergencies.length > 0;
  const minDate = useMemo(() => todayISO(), []);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const toggleEmergency = (sign: string) =>
    setEmergencies((list) =>
      list.includes(sign) ? list.filter((s) => s !== sign) : [...list, sign]
    );

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (form.name.trim().length < 3) e.name = "Please enter the patient’s full name.";
      if (!kePhone.test(form.phone.trim()))
        e.phone = "Enter a valid Kenyan number, e.g. 0712 345 678.";
      if (form.idno && form.idno.trim().length < 5)
        e.idno = "That ID / passport / birth certificate number looks too short.";
    }
    if (s === 2) {
      if (!form.dept) e.dept = "Choose the department you need.";
      if (!form.date) e.date = "Pick a preferred date.";
      else if (form.date < minDate) e.date = "Please pick today or a future date.";
      if (!form.slot) e.slot = "Choose a time slot.";
    }
    if (s === 3) {
      if (!form.consent) e.consent = "We need your consent before we can book.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    const reference = makeReference();
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, emergencies, reference, createdAt: new Date().toISOString() }),
      });
      const data = await res.json().catch(() => ({}));
      setResult({ reference, saved: res.ok && data?.ok === true });
    } catch {
      setResult({ reference, saved: false });
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(initialForm);
    setEmergencies([]);
    setErrors({});
    setResult(null);
    setStep(1);
  };

  const deptName = departments.find((d) => d.id === form.dept)?.name ?? form.dept;

  return (
    <section id="book" className="relative scroll-mt-24 overflow-hidden bg-sand/60 py-20 lg:py-28">
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        {/* Side panel */}
        <Reveal className="lg:col-span-5">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-clay">
            Book a visit
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-deep sm:text-[40px] sm:leading-[1.1]">
            Reserve your slot — skip the waiting-room roulette.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-mute">
            Booked patients are seen in order of arrival within their slot, and
            emergencies always jump the queue — that’s how triage should work.
          </p>

          <ol className="mt-8 space-y-4">
            {[
              "Fill in the form — it takes about a minute.",
              "We prepare your file and confirm by SMS or call.",
              "Arrive 10 minutes early with your ID & SHA details.",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-semibold text-gold">
                  {i + 1}
                </span>
                <p className="pt-1 text-[14.5px] leading-relaxed text-ink/85">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-9 rounded-3xl border border-clay/30 bg-clay-soft p-6">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-clay-deep">
              <IconAlert className="h-5 w-5" />
              Is it an emergency?
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/85">
              Chest pain, heavy bleeding, breathing trouble, serious injury or
              active labour should never wait in a queue — or an inbox. Call us
              straight away and come in.
            </p>
            <a
              href={site.phone.href}
              className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-clay px-6 py-3 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(217,93,57,0.4)] transition hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              <IconPhone className="h-4.5 w-4.5" />
              Call {site.phone.display}
            </a>
          </div>
        </Reveal>

        {/* Form card */}
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="rounded-[32px] border border-line bg-paper p-6 shadow-[0_24px_60px_rgba(12,59,46,0.12)] sm:p-9">
            {/* ── EMERGENCY OVERRIDE ── */}
            {emergencyMode ? (
              <div role="alert" className="animate-pop flex h-full flex-col items-start justify-center rounded-[24px] bg-clay-deep p-7 text-white sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <IconAlert className="h-8 w-8 text-white" />
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
                  Stop — let’s get you seen right now.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">
                  You’ve described something that may need <strong>immediate care</strong>.
                  Online booking is too slow for this. Call the clinic now —
                  our team will stabilise you the moment you walk in. Registration
                  can wait; your health can’t.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={site.phone.href}
                    className="flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-clay-deep shadow-lg transition hover:-translate-y-0.5"
                  >
                    <IconPhone className="h-5 w-5" />
                    Call {site.phone.display}
                  </a>
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 rounded-full border-2 border-white/40 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
                  >
                    <IconPin className="h-5 w-5" />
                    Directions to the clinic
                  </a>
                </div>
                <p className="mt-6 text-[13px] text-white/70">
                  For life-threatening emergencies anywhere in Kenya, also call{" "}
                  <strong>999</strong> or <strong>112</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setEmergencies([])}
                  className="mt-7 text-[13.5px] font-semibold text-white/80 underline underline-offset-4 transition hover:text-white"
                >
                  I ticked this by mistake — take me back to booking
                </button>
              </div>
            ) : result ? (
              /* ── SUCCESS ── */
              <div role="status" className="animate-pop flex h-full flex-col items-center py-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-white">
                  <IconCheck className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold text-forest-deep">
                  You’re in the book, {form.name.trim().split(" ")[0] || "friend"}.
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mute">
                  {result.saved
                    ? "We’ve received your request and will confirm your slot by call or SMS shortly."
                    : "We couldn’t save your request online just now — please call the desk to confirm this slot."}
                </p>
                <div className="mt-6 w-full max-w-md rounded-2xl border border-line bg-cream p-5 text-left">
                  <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.18em] text-mute">
                    Booking reference
                  </p>
                  <p className="mt-1 text-center font-display text-3xl font-semibold tracking-wide text-forest">
                    {result.reference}
                  </p>
                  <dl className="mt-4 space-y-1.5 border-t border-line pt-4 text-[13.5px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Department</dt>
                      <dd className="text-right font-semibold text-ink">{deptName}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Preferred</dt>
                      <dd className="text-right font-semibold text-ink">
                        {form.date} · {form.slot}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Payment</dt>
                      <dd className="text-right font-semibold text-ink">{form.payment}</dd>
                    </div>
                  </dl>
                </div>
                <p className="mt-5 max-w-md text-[13px] leading-relaxed text-mute">
                  Bring a national ID (or birth certificate), your SHA number and
                  any previous results. Arrive 10 minutes early — and if things
                  worsen before your slot, come straight in or call us.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-forest/15 px-6 py-2.5 text-[13.5px] font-semibold text-forest transition hover:border-forest/40"
                >
                  <IconCalendar className="h-4 w-4" />
                  Book another visit
                </button>
              </div>
            ) : (
              /* ── FORM STEPS ── */
              <>
                {/* progress */}
                <ol className="mb-8 flex items-center gap-2" aria-label="Booking progress">
                  {stepMeta.map((m, i) => (
                    <li key={m.n} className="flex flex-1 items-center gap-2">
                      <span
                        aria-current={step === m.n ? "step" : undefined}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition ${
                          step > m.n
                            ? "bg-leaf text-white"
                            : step === m.n
                              ? "bg-forest text-gold"
                              : "bg-sand text-mute"
                        }`}
                      >
                        {step > m.n ? <IconCheck className="h-4 w-4" /> : m.n}
                      </span>
                      <span
                        className={`hidden text-[12.5px] font-semibold sm:block ${
                          step >= m.n ? "text-forest" : "text-mute"
                        }`}
                      >
                        {m.label}
                      </span>
                      {i < stepMeta.length - 1 && (
                        <span className={`h-px flex-1 ${step > m.n ? "bg-leaf" : "bg-line"}`} aria-hidden />
                      )}
                    </li>
                  ))}
                </ol>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step < 3) {
                      if (validateStep(step)) setStep(step + 1);
                    } else submit();
                  }}
                >
                  {/* STEP 1 */}
                  <fieldset className={step === 1 ? "block animate-rise" : "hidden"}>
                    <legend className="font-display text-xl font-semibold text-forest-deep">
                      Who are we seeing?
                    </legend>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="bk-name" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Patient’s full name <span className="text-clay">*</span>
                        </label>
                        <input
                          id="bk-name"
                          className={`field ${errors.name ? "field-error" : ""}`}
                          placeholder="As written on the ID"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          autoComplete="name"
                        />
                        {errors.name && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="bk-phone" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Mobile number <span className="text-clay">*</span>
                        </label>
                        <input
                          id="bk-phone"
                          type="tel"
                          inputMode="tel"
                          className={`field ${errors.phone ? "field-error" : ""}`}
                          placeholder="07XX XXX XXX"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          autoComplete="tel"
                        />
                        {errors.phone && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="bk-id" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          ID / passport / birth cert. no.
                        </label>
                        <input
                          id="bk-id"
                          className={`field ${errors.idno ? "field-error" : ""}`}
                          placeholder="Optional but speeds things up"
                          value={form.idno}
                          onChange={(e) => set("idno", e.target.value)}
                        />
                        {errors.idno && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.idno}</p>}
                      </div>
                    </div>
                  </fieldset>

                  {/* STEP 2 */}
                  <fieldset className={step === 2 ? "block animate-rise" : "hidden"}>
                    <legend className="font-display text-xl font-semibold text-forest-deep">
                      What do you need?
                    </legend>
                    <div className="mt-5 grid gap-4">
                      <div>
                        <label htmlFor="bk-dept" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Department <span className="text-clay">*</span>
                        </label>
                        <select
                          id="bk-dept"
                          className={`field ${errors.dept ? "field-error" : ""}`}
                          value={form.dept}
                          onChange={(e) => set("dept", e.target.value)}
                        >
                          <option value="">Select a department…</option>
                          {departments.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                        {errors.dept && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.dept}</p>}
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="bk-date" className="mb-1.5 block text-[13px] font-semibold text-ink">
                            Preferred date <span className="text-clay">*</span>
                          </label>
                          <input
                            id="bk-date"
                            type="date"
                            min={minDate}
                            className={`field ${errors.date ? "field-error" : ""}`}
                            value={form.date}
                            onChange={(e) => set("date", e.target.value)}
                          />
                          {errors.date && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.date}</p>}
                        </div>
                        <div>
                          <label htmlFor="bk-pract" className="mb-1.5 block text-[13px] font-semibold text-ink">
                            Clinician preference
                          </label>
                          <select
                            id="bk-pract"
                            className="field"
                            value={form.practitioner}
                            onChange={(e) => set("practitioner", e.target.value)}
                          >
                            {practitioners.map((p) => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <fieldset>
                        <legend className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Preferred time <span className="text-clay">*</span>
                        </legend>
                        <div className="flex flex-wrap gap-2">
                          {slots.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => set("slot", s)}
                              aria-pressed={form.slot === s}
                              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
                                form.slot === s
                                  ? "border-forest bg-forest text-gold"
                                  : "border-line bg-paper text-ink/80 hover:border-leaf/50"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                        {errors.slot && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.slot}</p>}
                      </fieldset>

                      {/* urgency triage chips */}
                      <div className="rounded-2xl border-2 border-dashed border-clay/40 bg-clay-soft/50 p-4.5">
                        <p className="text-[13px] font-bold text-clay-deep">
                          Right now, is the patient experiencing any of these?
                        </p>
                        <p className="mt-0.5 text-[12px] text-mute">
                          Tick all that apply — we’ll fast-track you appropriately.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {emergencySigns.map((sign) => {
                            const on = emergencies.includes(sign);
                            return (
                              <button
                                key={sign}
                                type="button"
                                onClick={() => toggleEmergency(sign)}
                                aria-pressed={on}
                                className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition ${
                                  on
                                    ? "border-clay bg-clay text-white shadow-[0_6px_16px_rgba(217,93,57,0.35)]"
                                    : "border-clay/40 bg-paper text-ink/80 hover:border-clay"
                                }`}
                              >
                                {on && <IconAlert className="h-3.5 w-3.5" />}
                                {sign}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  {/* STEP 3 */}
                  <fieldset className={step === 3 ? "block animate-rise" : "hidden"}>
                    <legend className="font-display text-xl font-semibold text-forest-deep">
                      How will you cover the visit?
                    </legend>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="bk-pay" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Payment method
                        </label>
                        <select
                          id="bk-pay"
                          className="field"
                          value={form.payment}
                          onChange={(e) => set("payment", e.target.value)}
                        >
                          {payments.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="bk-cover" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          SHA / policy number
                        </label>
                        <input
                          id="bk-cover"
                          className="field"
                          placeholder={form.payment === "SHA / SHIF" ? "SHA registration number" : "Insurance policy number"}
                          value={form.coverno}
                          onChange={(e) => set("coverno", e.target.value)}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="bk-complaint" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          What’s bothering you? (in your own words)
                        </label>
                        <textarea
                          id="bk-complaint"
                          rows={3}
                          className="field resize-none"
                          placeholder="Describe it however feels natural — our team will translate."
                          value={form.complaint}
                          onChange={(e) => set("complaint", e.target.value)}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-cream p-4">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#14553f]"
                            checked={form.consent}
                            onChange={(e) => set("consent", e.target.checked)}
                          />
                          <span className="text-[12.5px] leading-relaxed text-ink/85">
                            I consent to Kahawa West Family Medical Centre
                            collecting these details to prepare my medical
                            record, as required by the Data Protection Act
                            (2019). My information is never shared for marketing,
                            and I keep my rights to access, correct and port my data.{" "}
                            <span className="text-clay">*</span>
                          </span>
                        </label>
                        {errors.consent && <p role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay-deep">{errors.consent}</p>}
                      </div>
                    </div>
                  </fieldset>

                  {/* nav buttons */}
                  <div className="mt-8 flex items-center justify-between gap-3">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="rounded-full border-2 border-forest/15 px-6 py-3 text-[14px] font-semibold text-forest transition hover:border-forest/40"
                      >
                        Back
                      </button>
                    ) : (
                      <span className="text-[12.5px] text-mute">
                        Prefer talking? Call{" "}
                        <a href={site.phone.href} className="font-bold text-pine underline underline-offset-2">
                          {site.phone.display}
                        </a>
                      </span>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex items-center gap-2.5 rounded-full bg-clay px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(217,93,57,0.35)] transition hover:-translate-y-0.5 hover:bg-clay-deep disabled:cursor-wait disabled:opacity-70"
                    >
                      {submitting ? "Booking…" : step < 3 ? "Continue" : "Confirm booking"}
                      {step < 3 && <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
