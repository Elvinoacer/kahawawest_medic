import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://kahawawest-medic.vercel.app";
const previewImage = `${siteUrl}/images/preview_image_url.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kahawa West Family Hospital — Family healthcare in Kahawa West, Nairobi",
  description:
    "Kahawa West Family Hospital provides general outpatient care, maternal and child health, specialist clinics, diagnostics, pharmacy, rehabilitation, physiotherapy, home care, cancer screening and wellness services in Nairobi.",
  keywords: [
    "Kahawa West Family Hospital",
    "Kahawa West",
    "family hospital",
    "Nairobi",
    "Zimmerman",
    "Roysambu",
    "outpatient care",
    "maternal health",
    "paediatric clinic",
    "orthopaedic surgeon",
    "psychiatrist",
    "gynaecologist",
    "ultrasound",
    "laboratory",
    "pharmacy",
    "fertility clinic",
    "urology",
    "drug rehabilitation",
    "physiotherapy",
    "cancer screening",
  ],
  openGraph: {
    title: "Kahawa West Family Hospital",
    description:
      "Family healthcare, specialist clinics, diagnostics and supportive services in Kahawa West, Nairobi.",
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Kahawa West Family Hospital",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Kahawa West Family Hospital — Family healthcare in Kahawa West, Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahawa West Family Hospital",
    description:
      "Family healthcare, specialist clinics, diagnostics and supportive services in Kahawa West, Nairobi.",
    images: [previewImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c3b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
