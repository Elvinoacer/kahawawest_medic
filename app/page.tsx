import EmergencyBar from "@/components/emergency-bar";
import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import TrustMarquee from "@/components/trust-marquee";
import FirstContact from "@/components/first-contact";
import Services from "@/components/services";
import SymptomGuide from "@/components/symptom-guide";
import About from "@/components/about";
import Booking from "@/components/booking";
import PatientInfo from "@/components/patient-info";
import VisitUs from "@/components/visit-us";
import SiteFooter from "@/components/site-footer";
import Chatbot from "@/components/chatbot";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description:
    "Registered Level 3 nursing home in Kahawa West, Nairobi offering general outpatient care, MCH, eye clinic, basic orthopaedics, Class C laboratory and emergency stabilisation.",
  telephone: site.phone.href,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
    addressRegion: "Nairobi County",
    addressLocalityDetails: site.address.line1,
  },
  medicalSpecialty: ["GeneralPractice", "MaternalFetalMedicine", "Ophthalmologic", "Orthopedic"],
  availableLanguage: ["English", "Swahili", "Kikuyu"],
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EmergencyBar />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <FirstContact />
        <Services />
        <SymptomGuide />
        <About />
        <Booking />
        <PatientInfo />
        <VisitUs />
      </main>
      <footer className="mt-auto">
        <SiteFooter />
      </footer>
      <Chatbot />
    </div>
  );
}
