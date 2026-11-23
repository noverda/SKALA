import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKALA — Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar (Phase II Prototype)",
  description:
    "Interactive Next.js (TypeScript) prototype for SKALA Phase II (skala.or.id) — Decoupled Headless Architecture, Native WCAG 2.2 AA Accessibility, Bilingual EN/ID Knowledge Hub & SKALA One / KMC Interoperability.",
  icons: {
    icon: "/images/favicon-skala.png",
  },
  keywords: [
    "SKALA",
    "Australia-Indonesia Partnership",
    "Bappenas",
    "Kemendagri",
    "Kemenkeu",
    "DFAT",
    "DT Global",
    "Basic Services",
    "GEDSI",
    "WCAG 2.2 AA",
  ],
};

const schemaOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SKALA — Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar",
  url: "https://skala.or.id",
  email: "info@skala.or.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "IFC Tower 2, Level 17, Jl. Jenderal Sudirman Kav. 22-23",
    addressLocality: "Jakarta",
    postalCode: "12920",
    addressCountry: "ID",
  },
  description:
    "Australia–Indonesia Partnership funded by DFAT and implemented by DT Global in collaboration with Bappenas, Kemendagri, and Kemenkeu to accelerate basic services across Indonesia.",
  sameAs: ["https://skala.or.id", "https://dt-global.com"],
  areaServed: "ID",
  knowsAbout: [
    "Public Financial Management",
    "Minimum Service Standards (SPM)",
    "GEDSI",
    "SEPAKAT & DTSEN",
    "Decentralised Governance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
