import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

/**
 * POST /api/bookings
 * Persists appointment requests to a local JSON file (data/bookings.json).
 * Intentionally dependency-free so it runs anywhere Next.js runs.
 *
 * NOTE FOR THE OWNER: in production, replace this with your practice
 * management system / database. Records contain personal information and
 * must be handled per the Data Protection Act (2019) — encrypt at rest,
 * restrict access, and define a retention period.
 */

type BookingPayload = {
  name?: string;
  phone?: string;
  idno?: string;
  dept?: string;
  date?: string;
  slot?: string;
  practitioner?: string;
  payment?: string;
  coverno?: string;
  complaint?: string;
  consent?: boolean;
  emergencies?: string[];
  reference?: string;
  createdAt?: string;
};

function str(v: unknown, max = 300): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let payload: BookingPayload;
  try {
    payload = (await req.json()) as BookingPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // Basic server-side validation (mirrors the client)
  const name = str(payload.name, 120);
  const phone = str(payload.phone, 24);
  const dept = str(payload.dept, 60);
  const date = str(payload.date, 20);
  const slot = str(payload.slot, 60);
  const consent = payload.consent === true;

  if (name.length < 3 || !phone || !dept || !date || !slot || !consent) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid required fields." },
      { status: 422 }
    );
  }

  const record = {
    reference: str(payload.reference, 24) || `KWF-${Date.now().toString(36).toUpperCase()}`,
    createdAt: str(payload.createdAt, 40) || new Date().toISOString(),
    patient: {
      name,
      phone,
      idNumber: str(payload.idno, 40),
    },
    visit: {
      department: dept,
      preferredDate: date,
      preferredSlot: slot,
      practitioner: str(payload.practitioner, 80),
      emergencyFlags: Array.isArray(payload.emergencies)
        ? payload.emergencies.slice(0, 10).map((e) => str(e, 60)).filter(Boolean)
        : [],
      chiefComplaint: str(payload.complaint, 1000),
    },
    coverage: {
      method: str(payload.payment, 40),
      number: str(payload.coverno, 40),
    },
    consentGiven: consent,
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "bookings.json");

    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await fs.readFile(file, "utf8"));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    existing.push(record);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
  } catch (err) {
    console.error("[bookings] failed to persist:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save the booking. Please call the clinic." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, reference: record.reference });
}
