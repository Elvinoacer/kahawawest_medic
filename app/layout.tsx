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

export const metadata: Metadata = {
  title: "Kahawa West Family Medical Centre — Family healthcare in Zimmerman, Nairobi",
  description:
    "A registered Level 3 nursing home in Kahawa West, Nairobi. General outpatient care, maternal & child health, eye clinic, basic orthopaedics, Class C laboratory and emergency stabilisation — open late, 7 days a week. SHA accredited.",
  keywords: [
    "Kahawa West",
    "medical centre",
    "Nairobi",
    "Zimmerman",
    "clinic",
    "SHA accredited",
    "maternal health",
    "laboratory",
    "eye clinic",
    "orthopaedics",
  ],
  openGraph: {
    title: "Kahawa West Family Medical Centre",
    description:
      "Family healthcare, close to home. Level 3 facility in Zimmerman Ward, Nairobi — open late, weekends and public holidays.",
    type: "website",
    locale: "en_KE",
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
