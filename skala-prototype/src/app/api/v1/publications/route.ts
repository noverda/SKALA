import { NextRequest, NextResponse } from "next/server";
import { PUBLICATIONS } from "@/data/skalaData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const pillar = searchParams.get("pillar");
  const province = searchParams.get("province");
  const q = searchParams.get("q")?.toLowerCase().trim();

  let items = PUBLICATIONS;

  if (type) {
    items = items.filter((item) => item.type === type);
  }
  if (pillar) {
    items = items.filter((item) => item.pillar === pillar);
  }
  if (province && province !== "All") {
    items = items.filter((item) =>
      item.province.toLowerCase().includes(province.toLowerCase())
    );
  }
  if (q) {
    items = items.filter(
      (item) =>
        item.title.en.toLowerCase().includes(q) ||
        item.title.id.toLowerCase().includes(q) ||
        item.summary.en.toLowerCase().includes(q) ||
        item.summary.id.toLowerCase().includes(q) ||
        item.skalaOneId.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json(
    {
      apiVersion: "v1",
      source: "skala.or.id",
      syncOrigin: "SKALA One (Canonical ID Preserved for KMC De-duplication)",
      generatedAt: new Date().toISOString(),
      total: items.length,
      data: items.map((p) => ({
        skalaOneId: p.skalaOneId,
        id: p.id,
        slug: p.slug,
        type: p.type,
        pillar: p.pillar,
        province: p.province,
        year: p.year,
        publishedDate: p.publishedDate,
        translationStatus: p.translationStatus,
        title: p.title,
        summary: p.summary,
        tags: p.tags,
        downloads: p.downloads,
        coverImage: p.coverImage,
        sourceUrl: p.sourceUrl,
        canonicalUrlEn: `https://skala.or.id/en/publications/${p.slug}`,
        canonicalUrlId: `https://skala.or.id/publikasi/${p.slug}`,
      })),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        "X-SKALA-Interoperability": "KMC-ReadOnly-v1",
      },
    }
  );
}
