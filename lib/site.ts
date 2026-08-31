/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  KAHAWA WEST FAMILY HOSPITAL — SITE CONFIGURATION
 *  This is the single file the facility team needs to edit to update phone
 *  numbers, hours, services and patient-facing copy across the whole site.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Kahawa West Family Hospital",
  shortName: "Kahawa West Family Hospital",
  tagline: "Your Family's Health Partner.",
  area: "Zimmerman Ward · Roysambu Constituency · Nairobi",

  phone: {
    display: "0798 319936",
    href: "tel:+254798319936",
  },
  whatsapp: {
    display: "0798 319936",
    href: "https://wa.me/254798319936",
  },
  nationalEmergency: ["999", "112"],

  facility: {
    level: "Level 3 Nursing Home",
    code: "24527",
    regulator: "Ministry of Health",
    accreditation: "SHA / SHIF accredited",
  },

  address: {
    line1: "Kahawa West Market area, off the Northern Bypass feeder roads",
    line2: "Zimmerman Ward, Roysambu Constituency, Nairobi",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kahawa+West+Family+Hospital+Nairobi",
    osmEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=36.8790%2C-1.1780%2C36.9260%2C-1.1340&layer=mapnik&marker=-1.1560%2C36.9025",
  },

  hours: [
    {
      service: "General outpatient",
      time: "Open daily — extended hours till late",
      note: "Including weekends & public holidays",
    },
    {
      service: "Diagnostic laboratory",
      time: "Aligned with outpatient hours",
      note: "Fasting tests advised before 11:00 AM",
    },
    {
      service: "Pharmacy",
      time: "During facility operating hours",
      note: "Essential medicines dispensed on site",
    },
    {
      service: "Emergency & triage",
      time: "Bedside stabilisation during opening hours",
      note: "After hours — call the hospital line first",
    },
  ],

  stats: [
    { value: "6", label: "core clinical departments" },
    { value: "2", label: "inpatient observation beds" },
    { value: "3", label: "languages spoken" },
    { value: "7", label: "days a week, late" },
  ],
};

export type Department = {
  id: string;
  name: string;
  short: string;
  blurb: string;
  tags: string[];
  image?: string;
  alt?: string;
};

export const departments: Department[] = [
  {
    id: "general",
    name: "General Outpatient & Chronic Care",
    short: "Everyday consultations",
    blurb:
      "First-line treatment for the whole family — from fevers and chest infections to skin and tummy troubles — plus structured follow-up for hypertension and Type 2 diabetes.",
    tags: ["Family consultations", "Hypertension clinic", "Diabetes clinic", "Respiratory & skin"],
    image: "/images/chronic-care.jpg",
    alt: "Clinician listening to an elderly patient’s chest with a stethoscope",
  },
  {
    id: "mch",
    name: "Maternal & Child Health",
    short: "MCH & family planning",
    blurb:
      "Focused antenatal care, postnatal reviews, childhood immunisation and family-planning counselling — delivered with dignity.",
    tags: ["Antenatal", "Child immunisation", "Postnatal care", "Family planning"],
    image: "/images/mch-newborn.jpg",
    alt: "A mother lying beside her newborn baby",
  },
  {
    id: "ortho",
    name: "Basic Orthopaedics",
    short: "Bones, joints & injuries",
    blurb:
      "Evaluation and stabilisation of simple fractures, sprains and minor dislocations — with referral support for complex cases.",
    tags: ["Fracture care", "Plaster & splints", "Closed reduction", "Referral support"],
    image: "/images/ortho-cast.jpg",
    alt: "A clinician applying a plaster bandage to a patient’s arm",
  },
  {
    id: "eye",
    name: "Eye Clinic (Ophthalmology)",
    short: "Vision screening",
    blurb:
      "Vision testing and refraction, treatment for infectious and allergic conjunctivitis, foreign-body removal, and early screening for cataract and diabetic eye disease.",
    tags: ["Refraction", "Conjunctivitis", "Foreign body removal", "Cataract screening"],
    image: "/images/eye-exam.jpg",
    alt: "An optometrist examining a patient’s eyes with a slit lamp",
  },
  {
    id: "lab",
    name: "Class C Diagnostic Laboratory",
    short: "Answers, same visit",
    blurb:
      "A KMLTTB-credentialed team provides haemograms, malaria microscopy, typhoid serology, urine & stool analysis, glucose and HbA1c, lipid, renal and liver panels, HIV rapid tests and STI screens.",
    tags: ["Haemogram", "Malaria testing", "HbA1c & lipids", "HIV & STI panels"],
    image: "/images/lab-tech.jpg",
    alt: "A laboratory technologist pipetting blood samples",
  },
  {
    id: "inpatient",
    name: "Inpatient Observation & Emergency Stabilisation",
    short: "Short-stay beds",
    blurb:
      "Short-stay support for IV rehydration, injectable medicines, nebulisation and oxygen, post-procedure recovery, and pre-referral stabilisation.",
    tags: ["IV therapy", "Nebulisation & oxygen", "Recovery monitoring", "Pre-referral care"],
  },
];

export type SpecialClinic = {
  id: string;
  name: string;
  schedule?: string;
  detail?: string;
};

export const specialClinics: SpecialClinic[] = [
  { id: "consultant-ortho", name: "Consultant Orthopaedic Surgeon" },
  { id: "consultant-psychiatrist", name: "Consultant Psychiatrist" },
  { id: "consultant-obgyn", name: "Consultant Obstetrician / Gynaecologist" },
  { id: "paediatric-well-baby", name: "Paediatric & Well Baby Clinic" },
  {
    id: "chronic-pain",
    name: "Chronic Pain Clinic",
    schedule: "Monday",
    detail: "Osteoarthritis, rheumatoid arthritis and related chronic pain conditions",
  },
  { id: "surgery-clinic", name: "Surgery Clinic", schedule: "Monday" },
  { id: "diabetes-clinic", name: "Diabetes Clinic", schedule: "Tuesday" },
  { id: "antenatal-clinic", name: "Antenatal Clinic", schedule: "Wednesday & Saturday" },
  { id: "fertility-clinic", name: "Fertility Clinic", schedule: "Wednesday & Saturday" },
  { id: "hypertension-clinic", name: "Hypertension Clinic", schedule: "Thursday" },
  { id: "urology-clinic", name: "Urology Clinic" },
  {
    id: "rehab-clinic",
    name: "Outpatient Drug & Alcohol Rehabilitation Clinic",
    schedule: "Friday",
  },
];

export const otherServices = [
  "Ultrasound Services",
  "Pathology Biopsies (FNA and Core Biopsies)",
  "Comprehensive Laboratory Services",
  "Well-stocked Pharmacy & Prescriptions",
  "Baby-friendly Vaccines & Travel Vaccinations",
  "Physiotherapy & Occupational Therapy",
  "Home Care Services",
  "Nutritional Counseling",
  "Cancer Screening & Wellness Checks",
];

export const bookableServices = [
  ...departments.map(({ id, name }) => ({ id, name })),
  ...specialClinics.map(({ id, name }) => ({ id, name })),
  ...otherServices.map((name) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
  })),
];

export type SymptomTerm = {
  lay: string;
  alt: string;
  clinical: string;
  deptId: string;
  deptLabel: string;
  plain: string;
};

export const symptomTerms: SymptomTerm[] = [
  {
    lay: "Kupimwa macho",
    alt: "“My eyes are straining / blurry”",
    clinical: "Refractive error assessment & eye screening",
    deptId: "eye",
    deptLabel: "Eye Clinic",
    plain:
      "A comprehensive eye exam to check how clearly you see, the pressure inside your eyes, and the overall health of your eyes.",
  },
  {
    lay: "Kuvunjika mfupa",
    alt: "“I think a bone is broken / joint hurts”",
    clinical: "Orthopaedic evaluation & immobilisation",
    deptId: "ortho",
    deptLabel: "Basic Orthopaedics",
    plain:
      "A physical exam with imaging where needed to check for fractures, dislocations or bad sprains — then casting or splinting to hold everything in place while it heals.",
  },
  {
    lay: "Kupima damu na mkojo",
    alt: "“Test my blood and urine”",
    clinical: "Class C laboratory diagnostic screening",
    deptId: "lab",
    deptLabel: "Laboratory",
    plain:
      "Standard blood tests (full haemogram, blood sugar) and urine analysis to detect infections, anaemia or how well your organs are working.",
  },
  {
    lay: "Kupanga uzazi",
    alt: "“Family planning”",
    clinical: "Family planning & reproductive health",
    deptId: "mch",
    deptLabel: "MCH Department",
    plain:
      "A private consultation on contraceptive options so you can choose what fits your life.",
  },
  {
    lay: "Kupima shingo ya uzazi",
    alt: "“Cervical check”",
    clinical: "Cervical cancer screening",
    deptId: "mch",
    deptLabel: "Preventive Care",
    plain:
      "A quick screening test that checks for early abnormal cell changes on the cervix.",
  },
  {
    lay: "Kupumua kwa shida",
    alt: "“I’m wheezing / chest is tight”",
    clinical: "Acute respiratory distress & nebulisation",
    deptId: "inpatient",
    deptLabel: "Emergency / Outpatient Nursing",
    plain:
      "Breathing support with oxygen or nebulisation while the team finds and treats the cause. Severe cases are seen immediately.",
  },
];

export const emergencySigns = [
  "Severe chest pain",
  "Heavy, uncontrollable bleeding",
  "Difficulty breathing",
  "Serious injury or road accident",
  "Active labour contractions",
  "Fainted or unresponsive",
];

export const faqs = [
  {
    q: "What should I bring on my first visit?",
    body: [
      "A valid national ID, passport — or a birth certificate for children — plus your active SHA registration number. If you were referred from another facility, carry the referral letter and any previous results or scans.",
      "For children, bring the immunisation booklet so growth and vaccine records stay up to date. Keep a list of any medicines you currently take.",
    ],
  },
  {
    q: "How do I prepare for laboratory tests?",
    body: [
      "For fasting blood sugar or a lipid panel, take nothing but water for 8–12 hours before your blood is drawn — morning slots are easiest.",
      "For a urine test, collect a clean-catch midstream sample. Before pelvic exams or a Pap smear, avoid intra-vaginal treatments for 48 hours. For pelvic or obstetric ultrasound, drink 1–1.5 litres of water about an hour before and keep a full bladder.",
    ],
  },
  {
    q: "How does SHA cover my care here?",
    body: [
      "We are an accredited Level 3 provider under the Social Health Authority (SHIF). Registered members access primary outpatient care through the Primary Care Fund capitation — covering consultations, routine lab work, preventive counselling and essential medicines without point-of-care cash payments.",
      "Short admissions are reimbursed at KES 2,400 per day (up to 50 days per household a year). Normal delivery is covered under a fixed KES 11,200 package including a 48-hour stay, and caesarean sections at KES 32,600 for up to 72 hours.",
      "We also accept cash, M-Pesa and most major private covers — including Britam, Jubilee and AAR. Whatever you’re paying with, our team discloses fees transparently before any test or procedure.",
    ],
  },
  {
    q: "How is my medical information protected?",
    body: [
      "Your records are classified as sensitive personal data under the Data Protection Act, 2019. Transmissions are encrypted in transit and records are encrypted at rest, with access restricted by role — front-desk staff see only basic demographics, while full histories remain with your clinician.",
      "We never share your details for marketing. You keep statutory rights to access, correct and port your records, and every access or edit is logged. Ask at the desk for our data protection summary.",
    ],
  },
];

export const transit = [
  {
    title: "By matatu",
    lines: [
      "Route 44 boards in the CBD along Ronald Ngala & Tom Mboya streets, runs Thika Road through Pangani, Muthaiga, Ruaraka and Roysambu, then turns onto Kamiti Road for Zimmerman, Githurai 44 and Kahawa West.",
      "Also serving the area: 107D (Ruiru), 44G and 44K.",
    ],
  },
  {
    title: "On foot",
    lines: [
      "Kahawa Railways Roundabout stop — 153 m from the market centre, about a 2-minute walk.",
      "Kahawa West Main Stage — 374 m, roughly 5 minutes on foot.",
    ],
  },
  {
    title: "Landmarks",
    lines: [
      "Look for the Kahawa West Market area behind Farmers Choice, near the Northern Bypass feeder roads.",
      "Locals also know the area by Karura Stage and Mahiga Primary School — ask any boda rider for the Family Hospital.",
    ],
  },
];

export const marqueeItems = [
  "Kahawa West Family Hospital",
  "Level 3 registered nursing home",
  "SHA / SHIF accredited",
  "Class C laboratory",
  "KMPDC-licensed practitioners",
  "English · Kiswahili · Gikuyu",
  "Open weekends & holidays",
  "Walk-ins welcome",
];
