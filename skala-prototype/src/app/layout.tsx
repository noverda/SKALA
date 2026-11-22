import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKALA Phase II (2027–2030) | Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar",
  description:
    "Interactive Next.js (TypeScript) prototype for SKALA Phase II (skala.or.id) — Decoupled Headless Architecture, Native WCAG 2.2 AA Accessibility, Bilingual EN/ID Knowledge Hub & SKALA One / KMC Interoperability.",
  keywords: [
    "SKALA",
    "Australia-Indonesia Partnership",
    "Bappenas",
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
  description:
    "Australia–Indonesia Partnership funded by DFAT and implemented by DT Global supporting basic service acceleration across Indonesia.",
  sameAs: ["https://dt-global.com"],
  areaServed: "ID",
  knowsAbout: [
    "Public Financial Management",
    "Minimum Service Standards (SPM)",
    "GEDSI",
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
