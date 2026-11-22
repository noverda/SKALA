import { NextResponse } from "next/server";
import { PUBLICATIONS, PROVINCES } from "@/data/skalaData";

export async function GET() {
  const lines = [
    "# SKALA (Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar)",
    "> Flagship Australia–Indonesia Partnership (DFAT / Bappenas / DT Global) — Phase II (2027–2030)",
    "",
    "## Platform Overview",
    "- Domain: https://skala.or.id (Bilingual: Bahasa Indonesia /id & English /en)",
    "- Architecture: Decoupled Headless CMS (Strapi v5 / Directus) + Next.js (SSR/SSG) + PostgreSQL 16 (pgvector) + Meilisearch",
    "- Accessibility: Native WCAG 2.2 Level AA & DFAT Universal Design",
    "- Interoperability: SKALA One one-way sync + Versioned Read-Only REST API (/api/v1/publications) & RSS (/api/v1/rss.xml)",
    "",
    "## Three Strategic Pillars",
    "1. Stronger national enabling environment for sub-national service delivery",
    "2. Better sub-national governance for basic service delivery",
    "3. Greater participation, representation, and influence for women, people with disabilities, and vulnerable groups (GEDSI)",
    "",
    "## Partner Provinces",
    ...PROVINCES.map((p) => `- ${p.name.en} (${p.code}): ${p.highlight.en}`),
    "",
    "## Canonical Publications (Preserving SKALA One IDs)",
    ...PUBLICATIONS.map(
      (p) =>
        `- [${p.skalaOneId}] ${p.title.en} (${p.year}, ${p.province}) -> https://skala.or.id/en/publications/${p.slug}`
    ),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=300",
    },
  });
}
