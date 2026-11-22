import { NextResponse } from "next/server";
import { PUBLICATIONS } from "@/data/skalaData";

export async function GET() {
  const itemsXml = PUBLICATIONS.map(
    (p) => `
    <item>
      <guid isPermaLink="false">${p.skalaOneId}</guid>
      <title><![CDATA[${p.title.en} / ${p.title.id}]]></title>
      <link>https://skala.or.id/en/publications/${p.slug}</link>
      <pubDate>${new Date(p.publishedDate).toUTCString()}</pubDate>
      <category>${p.type}</category>
      <description><![CDATA[${p.summary.en}]]></description>
    </item>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SKALA Knowledge &amp; Publication Feed (skala.or.id)</title>
    <link>https://skala.or.id</link>
    <description>Bilingual (EN/ID) public knowledge products synced from SKALA One for KMC &amp; GoI interoperability.</description>
    <language>en-id</language>
    <atom:link href="https://skala.or.id/api/v1/rss.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=300",
    },
  });
}
