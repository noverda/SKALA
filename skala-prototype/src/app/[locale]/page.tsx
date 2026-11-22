import { notFound } from "next/navigation";
import { SkalaPortal } from "@/components/SkalaPortal";
import { Locale } from "@/data/skalaData";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "id") {
    notFound();
  }

  return <SkalaPortal initialLocale={locale as Locale} />;
}
