"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  Globe,
  Contrast,
  BookOpen,
  FileText,
  Headphones,
  BarChart3,
  Download,
  Menu,
  X,
  CheckCircle2,
  Shield,
  MessageCircle,
  Mail,
  Briefcase,
  FileSpreadsheet,
  ExternalLink,
  Smartphone,
  Monitor,
  Layers,
  Database,
  Sparkles,
  Cookie,
} from "lucide-react";
import {
  Locale,
  PUBLICATIONS,
  PublicationItem,
  PublicationType,
  PillarId,
  NEWS_ITEMS,
  GLOSSARY_ENTRIES,
  CAREERS,
  PROCUREMENTS,
  PARTNER_LOGOS,
} from "@/data/skalaData";
import { UI_COPY } from "@/data/translations";
import { IndonesiaMap } from "./IndonesiaMap";
import { PublicationModal } from "./PublicationModals";
import { ArchitectureDrawer } from "./ArchitectureDrawer";

const ALL_TYPES: PublicationType[] = [
  "policy-brief",
  "field-story",
  "report-data",
  "provincial-profile",
  "podcast-video",
  "booklet-infographic",
];

const ALL_PILLARS: PillarId[] = ["pillar-1", "pillar-2", "pillar-3"];

export function SkalaPortal({ initialLocale = "en" }: { initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [fontScale, setFontScale] = useState<number>(100);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobilePreviewFrame, setMobilePreviewFrame] = useState<boolean>(false);

  // Search & Faceted Repository state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<PublicationType[]>([]);
  const [selectedPillars, setSelectedPillars] = useState<PillarId[]>([]);
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(PUBLICATIONS.map((p) => [p.id, p.downloads]))
  );

  // Interactive Province Map state
  const [activeProvinceId, setActiveProvinceId] = useState<string>("ntt");

  // Glossary state
  const [glossaryQuery, setGlossaryQuery] = useState<string>("");
  const [glossaryLetter, setGlossaryLetter] = useState<string>("All");

  // Modals & Drawers
  const [activePub, setActivePub] = useState<PublicationItem | null>(null);
  const [modalMode, setModalMode] = useState<"pdf" | "media" | "chart" | null>(null);
  const [archDrawerOpen, setArchDrawerOpen] = useState<boolean>(false);
  const [archInitialTab, setArchInitialTab] = useState<
    "stack" | "api" | "aio" | "compliance"
  >("stack");

  // Newsletter & Contact forms (UU PDP 27/2022)
  const [subEmail, setSubEmail] = useState("");
  const [subConsent, setSubConsent] = useState(false);
  const [subReceipt, setSubReceipt] = useState<string | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [contactHoneypot, setContactHoneypot] = useState("");
  const [contactSent, setContactSent] = useState<string | null>(null);

  // Cookie Banner (UU PDP)
  const [cookieConsentSaved, setCookieConsentSaved] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const t = UI_COPY[locale];

  // Apply font scale & high contrast natively to <html>
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  // Faceted Publication Filtering
  const filteredPublications = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PUBLICATIONS.filter((pub) => {
      if (selectedTypes.length > 0 && !selectedTypes.includes(pub.type)) {
        return false;
      }
      if (selectedPillars.length > 0 && !selectedPillars.includes(pub.pillar)) {
        return false;
      }
      if (
        selectedProvinceFilter !== "All" &&
        !pub.province.toLowerCase().includes(selectedProvinceFilter.toLowerCase()) &&
        !pub.provinceLabel.en.toLowerCase().includes(selectedProvinceFilter.toLowerCase())
      ) {
        return false;
      }
      if (selectedYear !== "All" && String(pub.year) !== selectedYear) {
        return false;
      }
      if (q) {
        const hay = [
          pub.title.en,
          pub.title.id,
          pub.summary.en,
          pub.summary.id,
          pub.skalaOneId,
          pub.province,
          ...pub.tags,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [
    searchQuery,
    selectedTypes,
    selectedPillars,
    selectedProvinceFilter,
    selectedYear,
  ]);

  // Filtered Glossary
  const glossaryLetters = useMemo(
    () => ["All", ...Array.from(new Set(GLOSSARY_ENTRIES.map((g) => g.letter)))],
    []
  );

  const filteredGlossary = useMemo(() => {
    const q = glossaryQuery.trim().toLowerCase();
    return GLOSSARY_ENTRIES.filter((entry) => {
      if (glossaryLetter !== "All" && entry.letter !== glossaryLetter) return false;
      if (q) {
        return (
          entry.term.toLowerCase().includes(q) ||
          entry.definition.en.toLowerCase().includes(q) ||
          entry.definition.id.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [glossaryQuery, glossaryLetter]);

  const toggleType = (type: PublicationType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]
    );
  };

  const togglePillar = (pillar: PillarId) => {
    setSelectedPillars((prev) =>
      prev.includes(pillar) ? prev.filter((x) => x !== pillar) : [...prev, pillar]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTypes([]);
    setSelectedPillars([]);
    setSelectedProvinceFilter("All");
    setSelectedYear("All");
  };

  const handleDownload = (pubId: string) => {
    setDownloadCounts((prev) => ({
      ...prev,
      [pubId]: (prev[pubId] || 0) + 1,
    }));
  };

  const openModal = (pub: PublicationItem, mode: "pdf" | "media" | "chart") => {
    setActivePub({ ...pub, downloads: downloadCounts[pub.id] ?? pub.downloads });
    setModalMode(mode);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail.trim() || !subConsent) return;
    setSubReceipt(
      `${t.stayConnected.subscribedMsg} (ID: PDP-${Date.now().toString().slice(-6)})`
    );
    setSubEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Anti-spam honeypot check
    if (contactHoneypot) return;
    if (!contactName.trim() || !contactEmail.trim() || !contactMsg.trim()) return;
    setContactSent(t.stayConnected.contactSentMsg);
    setContactName("");
    setContactEmail("");
    setContactMsg("");
  };

  const openArchTab = (tab: "stack" | "api" | "aio" | "compliance") => {
    setArchInitialTab(tab);
    setArchDrawerOpen(true);
  };

  return (
    <div
      className={
        mobilePreviewFrame
          ? "min-h-screen bg-slate-200 py-6 flex flex-col items-center"
          : "min-h-screen flex flex-col"
      }
    >
      {/* Proposal Evaluator Viewport Switcher (Desktop vs 390px Mobile-First Annex C) */}
      <div className="w-full bg-slate-900 text-slate-100 text-xs py-2 px-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 z-40">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-600 text-white font-bold text-[11px]">
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            RFT032 PROTOTYPE
          </span>
          <span className="hidden sm:inline text-slate-300">
            Next.js (React / TypeScript) • Native WCAG 2.2 AA • Proposed by PT Inovasi Digital Terdepan
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700"
            role="group"
            aria-label="Viewport preview mode"
          >
            <button
              type="button"
              onClick={() => setMobilePreviewFrame(false)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold inline-flex items-center gap-1 ${
                !mobilePreviewFrame
                  ? "bg-[#00797b] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setMobilePreviewFrame(true)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold inline-flex items-center gap-1 ${
                mobilePreviewFrame
                  ? "bg-[#00797b] text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
              Mobile (390px)
            </button>
          </div>
          <button
            type="button"
            onClick={() => openArchTab("stack")}
            className="px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[11px] inline-flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            Architecture & APIs
          </button>
        </div>
      </div>

      {/* Main Application Frame */}
      <div
        className={
          mobilePreviewFrame
            ? "w-[390px] max-w-full bg-white shadow-2xl rounded-[32px] border-[8px] border-slate-800 overflow-hidden my-4"
            : "w-full flex-1 flex flex-col"
        }
      >
        {/* Skip to main content (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-link">
          {t.skipLink}
        </a>

        {/* Top Utility & Accessibility Bar */}
        <div className="bg-[#083350] text-white text-xs border-b border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-1" role="group" aria-label="Text size controls">
                <button
                  type="button"
                  onClick={() => setFontScale((s) => Math.max(90, s - 10))}
                  aria-label={t.fontDecrease}
                  className="px-2 py-1 rounded hover:bg-white/15 font-bold"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale(100)}
                  aria-label={t.fontReset}
                  className="px-2 py-1 rounded hover:bg-white/15 font-bold"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale((s) => Math.min(120, s + 10))}
                  aria-label={t.fontIncrease}
                  className="px-2 py-1 rounded hover:bg-white/15 font-bold"
                >
                  A+
                </button>
              </div>
              <span className="text-white/30" aria-hidden="true">
                |
              </span>
              <button
                type="button"
                onClick={() => setHighContrast((v) => !v)}
                aria-pressed={highContrast}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-semibold transition-colors ${
                  highContrast
                    ? "bg-yellow-400 text-slate-950"
                    : "hover:bg-white/15 text-slate-100"
                }`}
              >
                <Contrast className="w-3.5 h-3.5" aria-hidden="true" />
                {highContrast ? t.contrastActive : t.contrastToggle}
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Bilingual Switcher (ID / EN) */}
              <div
                className="inline-flex items-center rounded bg-white/10 p-0.5"
                role="group"
                aria-label="Language switcher"
              >
                <button
                  type="button"
                  onClick={() => {
                    setLocale("id");
                    window.history.replaceState(null, "", "/id");
                  }}
                  aria-pressed={locale === "id"}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                    locale === "id"
                      ? "bg-[#00797b] text-white"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLocale("en");
                    window.history.replaceState(null, "", "/en");
                  }}
                  aria-pressed={locale === "en"}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                    locale === "en"
                      ? "bg-[#00797b] text-white"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              <a
                href="#opportunities"
                className="hidden sm:inline hover:underline text-slate-200"
              >
                {t.nav.careers}
              </a>
              <a
                href="#opportunities"
                className="hidden sm:inline hover:underline text-slate-200"
              >
                {t.nav.procurement}
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Primary Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200 hc-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <img
                src="/images/skala-logo.png"
                alt="SKALA — Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar"
                className="h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline-block border-l border-slate-300 pl-3 text-[11px] font-semibold text-[#00797b] leading-tight">
                {t.brandTagline}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav
              aria-label={locale === "en" ? "Primary navigation" : "Navigasi utama"}
              className={
                mobilePreviewFrame
                  ? "hidden"
                  : "hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700"
              }
            >
              <a href="#about" className="hover:text-[#00797b] hc-muted">
                {t.nav.about}
              </a>
              <a href="#our-work" className="hover:text-[#00797b] hc-muted">
                {t.nav.ourWork}
              </a>
              <a href="#publications" className="hover:text-[#00797b] hc-muted">
                {t.nav.publications}
              </a>
              <a href="#provinces" className="hover:text-[#00797b] hc-muted">
                {t.nav.provinces}
              </a>
              <a href="#news" className="hover:text-[#00797b] hc-muted">
                {t.nav.news}
              </a>
              <a href="#glossary" className="hover:text-[#00797b] hc-muted">
                {t.nav.glossary}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  searchInputRef.current?.focus();
                  searchInputRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="min-h-[44px] px-4 rounded-lg bg-[#00797b] hover:bg-[#005e60] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors hc-accent"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span className={mobilePreviewFrame ? "hidden" : "hidden sm:inline"}>
                  {t.nav.searchBtn}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-expanded={mobileMenuOpen}
                aria-label={locale === "en" ? "Toggle menu" : "Buka menu"}
                className={
                  mobilePreviewFrame
                    ? "min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-300 text-[#083350]"
                    : "lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-300 text-[#083350]"
                }
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <nav
              aria-label="Mobile navigation"
              className="border-t border-slate-200 bg-white hc-surface px-4 py-3 grid grid-cols-2 gap-2"
            >
              {[
                { href: "#about", label: t.nav.about },
                { href: "#our-work", label: t.nav.ourWork },
                { href: "#publications", label: t.nav.publications },
                { href: "#provinces", label: t.nav.provinces },
                { href: "#news", label: t.nav.news },
                { href: "#glossary", label: t.nav.glossary },
                { href: "#opportunities", label: t.nav.careers },
                { href: "#opportunities", label: t.nav.procurement },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] px-3 flex items-center rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-[#083350] hc-surface"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-br from-[#083350] via-[#0b4266] to-[#083350] text-white py-10 sm:py-14 border-b-4 border-[#00A9A3]"
          >
            {/* Subtle authentic hero photography backdrop from skala.or.id */}
            <img
              src="/images/hero-banner-en.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none"
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-6"
                    : "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                }
              >
                <div className={mobilePreviewFrame ? "" : "lg:col-span-8 space-y-5"}>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-teal-200 border border-white/15">
                    <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                    {t.hero.eyebrow}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight mt-3">
                    {t.hero.title}
                  </h1>
                  <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed mt-3">
                    {t.hero.subtitle}
                  </p>

                  {/* Prominent Global Search Bar */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("publications")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-2xl"
                    role="search"
                  >
                    <label htmlFor="global-search" className="sr-only">
                      {t.hero.searchPlaceholder}
                    </label>
                    <div className="relative flex-1">
                      <Search
                        className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="global-search"
                        ref={searchInputRef}
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t.hero.searchPlaceholder}
                        className="w-full min-h-[48px] pl-11 pr-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-500 text-sm font-medium border-2 border-transparent focus:border-teal-300 shadow-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="min-h-[48px] px-7 rounded-xl bg-[#00797b] hover:bg-[#009496] text-white font-bold text-sm shadow-lg transition-colors shrink-0 hc-accent"
                    >
                      {t.hero.findBtn}
                    </button>
                  </form>
                </div>

                {/* Phase II Highlight Card */}
                <div className={mobilePreviewFrame ? "" : "lg:col-span-4"}>
                  <div className="rounded-2xl bg-[#00797b]/90 border border-teal-300/40 p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-teal-100">
                          {t.hero.phaseTitle}
                        </div>
                        <div className="text-2xl font-black text-white">
                          {t.hero.phaseSub}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-white/15 text-[11px] font-bold">
                        skala.or.id
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      {t.hero.phaseStats.map((st) => (
                        <div
                          key={st.label}
                          className="rounded-xl bg-[#083350]/55 p-3 border border-white/10"
                        >
                          <div className="text-[11px] text-teal-200 font-medium">
                            {st.label}
                          </div>
                          <div className="text-sm font-extrabold text-white mt-0.5">
                            {st.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Knowledge & Publication Repository (Synced with SKALA One) */}
          <section
            id="publications"
            aria-labelledby="repo-heading"
            className="py-12 bg-slate-50 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00797b]">
                    <Database className="w-3.5 h-3.5" aria-hidden="true" />
                    SKALA ONE SYNC • KMC READY
                  </span>
                  <h2
                    id="repo-heading"
                    className="text-2xl sm:text-3xl font-bold text-[#083350] hc-surface mt-1"
                  >
                    {t.repo.heading}
                  </h2>
                  <p className="text-sm text-slate-600 hc-muted mt-1">
                    {t.repo.subheading}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 bg-white text-xs font-bold text-[#083350] hover:border-[#00797b] self-start sm:self-auto"
                >
                  {t.repo.viewAll} →
                </button>
              </div>

              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-6"
                    : "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                }
              >
                {/* Faceted Sidebar */}
                <aside
                  aria-label={t.repo.filterByFacets}
                  className={`${
                    mobilePreviewFrame ? "" : "lg:col-span-3"
                  } rounded-2xl border border-slate-200 bg-white p-5 space-y-5 hc-surface shadow-xs`}
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#083350] hc-surface">
                      {t.repo.filterByFacets}
                    </h3>
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="text-xs font-semibold text-[#00797b] hover:underline"
                    >
                      {t.repo.clearFilters}
                    </button>
                  </div>

                  {/* Type Checkboxes */}
                  <fieldset className="space-y-2">
                    <legend className="text-xs font-bold text-slate-700 hc-muted mb-1.5">
                      {t.repo.typeLabel}
                    </legend>
                    {ALL_TYPES.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2.5 text-sm text-slate-700 hc-muted cursor-pointer min-h-[32px]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="w-4 h-4 accent-[#00797b] rounded"
                        />
                        <span>{t.repo.types[type]}</span>
                      </label>
                    ))}
                  </fieldset>

                  {/* Pillar Checkboxes */}
                  <fieldset className="space-y-2 pt-2 border-t border-slate-100">
                    <legend className="text-xs font-bold text-slate-700 hc-muted mb-1.5">
                      {t.repo.pillarLabel}
                    </legend>
                    {ALL_PILLARS.map((pillar) => (
                      <label
                        key={pillar}
                        className="flex items-center gap-2.5 text-sm text-slate-700 hc-muted cursor-pointer min-h-[32px]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedPillars.includes(pillar)}
                          onChange={() => togglePillar(pillar)}
                          className="w-4 h-4 accent-[#00797b] rounded"
                        />
                        <span>{t.repo.pillars[pillar]}</span>
                      </label>
                    ))}
                  </fieldset>

                  {/* Province & Year Selects */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div>
                      <label
                        htmlFor="facet-province"
                        className="block text-xs font-bold text-slate-700 hc-muted mb-1"
                      >
                        {t.repo.provinceLabel}
                      </label>
                      <select
                        id="facet-province"
                        value={selectedProvinceFilter}
                        onChange={(e) => setSelectedProvinceFilter(e.target.value)}
                        className="w-full min-h-[44px] px-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-800"
                      >
                        <option value="All">{t.repo.allProvinces}</option>
                        <option value="National">National</option>
                        <option value="NTT">NTT</option>
                        <option value="NTB">NTB</option>
                        <option value="Maluku">Maluku & Kaltara</option>
                        <option value="Gorontalo">Gorontalo & Aceh</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="facet-year"
                        className="block text-xs font-bold text-slate-700 hc-muted mb-1"
                      >
                        {t.repo.yearLabel}
                      </label>
                      <select
                        id="facet-year"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full min-h-[44px] px-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-800"
                      >
                        <option value="All">{t.repo.allYears}</option>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                      </select>
                    </div>
                  </div>
                </aside>

                {/* Results Grid */}
                <div className={mobilePreviewFrame ? "space-y-4" : "lg:col-span-9 space-y-4"}>
                  <div
                    className="flex flex-wrap items-center justify-between gap-2 bg-white hc-surface px-4 py-2.5 rounded-xl border border-slate-200 text-xs"
                    aria-live="polite"
                  >
                    <span className="font-bold text-[#083350] hc-surface">
                      {filteredPublications.length} {t.repo.resultsCount}
                    </span>
                    <span className="font-semibold text-[#00797b]">
                      {t.repo.searchLatency}
                    </span>
                  </div>

                  {filteredPublications.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center space-y-3 hc-surface">
                      <p className="text-sm text-slate-600 hc-muted">{t.repo.noResults}</p>
                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="min-h-[44px] px-4 py-2 rounded-lg bg-[#083350] text-white text-xs font-bold hc-accent"
                      >
                        {t.repo.clearFilters}
                      </button>
                    </div>
                  ) : (
                    <div
                      className={
                        mobilePreviewFrame
                          ? "grid grid-cols-1 gap-4"
                          : "grid grid-cols-1 md:grid-cols-2 gap-4"
                      }
                    >
                      {filteredPublications.map((pub) => {
                        const dlCount = downloadCounts[pub.id] ?? pub.downloads;
                        return (
                          <article
                            key={pub.id}
                            className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs hover:border-[#00A9A3] transition-colors hc-surface"
                          >
                            <div className="flex gap-4">
                              {/* Official Publication Cover Thumbnail */}
                              <div className="w-24 sm:w-28 shrink-0">
                                <div className="aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                                  <img
                                    src={pub.coverImage[locale]}
                                    alt={pub.coverAlt[locale]}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wide bg-[#e6f4f4] text-[#005e60]">
                                    {t.repo.types[pub.type]} • {pub.year}
                                  </span>
                                  <span className="text-[11px] font-mono font-semibold text-slate-500">
                                    {pub.skalaOneId}
                                  </span>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-[#083350] leading-snug hc-surface">
                                  {pub.title[locale]}
                                </h3>
                                <p className="text-xs font-semibold text-[#00797b] mt-1">
                                  {pub.provinceLabel[locale]} • {pub.translationStatus}
                                </p>
                                <p className="text-xs sm:text-sm text-slate-600 hc-muted mt-2 line-clamp-3">
                                  {pub.summary[locale]}
                                </p>
                              </div>
                            </div>

                            <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                              {pub.type === "podcast-video" ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => openModal(pub, "media")}
                                    className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#083350] hover:bg-[#0d4a72] text-white text-xs font-bold inline-flex items-center gap-1.5 hc-accent"
                                  >
                                    <Headphones className="w-3.5 h-3.5" aria-hidden="true" />
                                    {t.repo.playEmbed}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => openModal(pub, "media")}
                                    className="min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-[#083350] hover:bg-slate-50"
                                  >
                                    {t.repo.readTranscript}
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => openModal(pub, "pdf")}
                                    className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#083350] hover:bg-[#0d4a72] text-white text-xs font-bold inline-flex items-center gap-1.5 hc-accent"
                                  >
                                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                                    {t.repo.previewPdf}
                                  </button>
                                  {pub.fileSize && (
                                    <button
                                      type="button"
                                      onClick={() => handleDownload(pub.id)}
                                      className="min-h-[40px] px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-[#083350] hover:bg-slate-50 inline-flex items-center gap-1"
                                    >
                                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                                      {t.repo.downloadPdf} ({pub.fileSize})
                                    </button>
                                  )}
                                </>
                              )}

                              {pub.chartData && (
                                <button
                                  type="button"
                                  onClick={() => openModal(pub, "chart")}
                                  className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#e6f4f4] text-[#005e60] text-xs font-bold inline-flex items-center gap-1"
                                >
                                  <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
                                  {t.repo.viewDataChart}
                                </button>
                              )}

                              <span className="ml-auto text-[11px] font-semibold text-slate-500">
                                ↓ {dlCount.toLocaleString()}
                              </span>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Three Strategic Pillars */}
          <section
            id="our-work"
            aria-labelledby="pillars-heading"
            className="py-12 bg-white border-t border-slate-200 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="pillars-heading"
                className="text-2xl sm:text-3xl font-bold text-[#083350] hc-surface"
              >
                {t.pillarsSection.heading}
              </h2>
              <p className="text-slate-600 hc-muted mt-1 max-w-2xl">
                {t.pillarsSection.subheading}
              </p>

              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-4 mt-7"
                    : "grid grid-cols-1 md:grid-cols-3 gap-5 mt-7"
                }
              >
                {t.pillarsSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between hc-surface"
                  >
                    <div>
                      <span className="inline-block text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded bg-[#083350] text-white">
                        {item.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[#083350] hc-surface mt-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 hc-muted mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPillars([item.id as PillarId]);
                        document
                          .getElementById("publications")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-5 text-xs font-bold text-[#00797b] hover:underline self-start"
                    >
                      {locale === "en"
                        ? "Explore pillar publications →"
                        : "Lihat publikasi pilar ini →"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Provincial Profiles & Map */}
          <IndonesiaMap
            locale={locale}
            selectedProvinceId={activeProvinceId}
            onSelectProvince={setActiveProvinceId}
            onFilterByProvince={(provKey) => setSelectedProvinceFilter(provKey)}
          />

          {/* Latest News & Activities */}
          <section
            id="news"
            aria-labelledby="news-heading"
            className="py-12 bg-slate-50 border-t border-slate-200 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="news-heading"
                className="text-2xl sm:text-3xl font-bold text-[#083350] hc-surface mb-6"
              >
                {t.newsSection.heading}
              </h2>
              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-4"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                }
              >
                {NEWS_ITEMS.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hc-surface shadow-xs hover:border-[#00A9A3] transition-colors"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt[locale]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 pb-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-[#00797b] mb-2">
                          <span>{item.category[locale]}</span>
                          <time dateTime={item.date} className="text-slate-500">
                            {item.date}
                          </time>
                        </div>
                        <h3 className="text-base font-bold text-[#083350] hc-surface leading-snug">
                          {item.title[locale]}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 hc-muted mt-2 line-clamp-3">
                          {item.excerpt[locale]}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{item.province}</span>
                      <a
                        href={item.sourceUrl[locale]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#00797b] hover:underline"
                      >
                        skala.or.id
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Searchable A-Z Glossary */}
          <section
            id="glossary"
            aria-labelledby="glossary-heading"
            className="py-12 bg-white border-t border-slate-200 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <h2
                    id="glossary-heading"
                    className="text-2xl sm:text-3xl font-bold text-[#083350] hc-surface"
                  >
                    {t.glossarySection.heading}
                  </h2>
                  <p className="text-sm text-slate-600 hc-muted mt-1">
                    {t.glossarySection.subheading}
                  </p>
                </div>
                <div className="w-full md:w-80">
                  <label htmlFor="glossary-search" className="sr-only">
                    {t.glossarySection.searchPlaceholder}
                  </label>
                  <input
                    id="glossary-search"
                    type="search"
                    value={glossaryQuery}
                    onChange={(e) => setGlossaryQuery(e.target.value)}
                    placeholder={t.glossarySection.searchPlaceholder}
                    className="w-full min-h-[44px] px-3.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5" role="group" aria-label="Glossary A to Z filter">
                {glossaryLetters.map((ltr) => (
                  <button
                    key={ltr}
                    type="button"
                    onClick={() => setGlossaryLetter(ltr)}
                    aria-pressed={glossaryLetter === ltr}
                    className={`min-w-[40px] min-h-[40px] px-2.5 rounded-lg text-xs font-bold border ${
                      glossaryLetter === ltr
                        ? "bg-[#083350] text-white border-[#083350] hc-accent"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#00797b]"
                    }`}
                  >
                    {ltr}
                  </button>
                ))}
              </div>

              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-3"
                    : "grid grid-cols-1 md:grid-cols-2 gap-4"
                }
              >
                {filteredGlossary.map((entry) => (
                  <div
                    key={entry.term}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hc-surface"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-[#083350] text-sm hc-surface">
                        {entry.term}
                      </h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#e6f4f4] text-[#005e60]">
                        {entry.category[locale]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 hc-muted mt-1.5 leading-relaxed">
                      {entry.definition[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Careers & Procurement (Addendum Sec 14 & 27 compliant) */}
          <section
            id="opportunities"
            aria-label="Careers and Procurement"
            className="py-12 bg-slate-50 border-t border-slate-200 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-6"
                    : "grid grid-cols-1 lg:grid-cols-2 gap-6"
                }
              >
                {/* Careers */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hc-surface">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#00797b]" aria-hidden="true" />
                    <h2 className="text-xl font-bold text-[#083350] hc-surface">
                      {t.opportunitiesSection.careersTitle}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 hc-muted">
                    {t.opportunitiesSection.textOnlyNotice}
                  </p>
                  <div className="space-y-3">
                    {CAREERS.map((job) => (
                      <div
                        key={job.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50 hc-surface space-y-1.5"
                      >
                        <div className="text-xs font-bold text-[#00797b]">
                          {job.type[locale]} • {job.location}
                        </div>
                        <h3 className="font-bold text-[#083350] text-sm hc-surface">
                          {job.title[locale]}
                        </h3>
                        <p className="text-xs text-slate-600 hc-muted">
                          {job.summary[locale]}
                        </p>
                        <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-500">
                          <span>
                            {t.opportunitiesSection.deadlineLabel}: {job.deadline}
                          </span>
                          <span className="text-[#083350]">{job.channel}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Procurement */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hc-surface">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet
                      className="w-5 h-5 text-[#00797b]"
                      aria-hidden="true"
                    />
                    <h2 className="text-xl font-bold text-[#083350] hc-surface">
                      {t.opportunitiesSection.procurementTitle}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {PROCUREMENTS.map((proc) => (
                      <div
                        key={proc.ref}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50 hc-surface space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold text-[#083350]">
                            {proc.ref}
                          </span>
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              proc.status === "Open"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {proc.status}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#083350] text-sm hc-surface">
                          {proc.title[locale]}
                        </h3>
                        <p className="text-xs text-slate-600 hc-muted">
                          {proc.oneDriveNotice[locale]}
                        </p>
                        <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="text-slate-500">
                            {t.opportunitiesSection.deadlineLabel}: {proc.deadline}
                          </span>
                          <a
                            href="https://dt-global.com/proposals/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-[#00797b] hover:underline"
                          >
                            {t.opportunitiesSection.openOneDrive}
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stay Connected & Anti-Spam Contact (UU PDP 27/2022) */}
          <section
            aria-label="Newsletter and Contact"
            className="py-12 bg-white border-t border-slate-200 hc-surface"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={
                  mobilePreviewFrame
                    ? "grid grid-cols-1 gap-6"
                    : "grid grid-cols-1 lg:grid-cols-2 gap-6"
                }
              >
                {/* Newsletter & WhatsApp Channel */}
                <div className="rounded-2xl border-2 border-[#00797b]/30 bg-[#e6f4f4]/60 p-6 space-y-4 hc-surface">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#00797b]" aria-hidden="true" />
                    <h2 className="text-lg font-bold text-[#083350] hc-surface">
                      {t.stayConnected.heading}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-700 hc-muted">
                    {t.stayConnected.subheading}
                  </p>
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div>
                      <label htmlFor="newsletter-email" className="sr-only">
                        {t.stayConnected.emailPlaceholder}
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={subEmail}
                        onChange={(e) => setSubEmail(e.target.value)}
                        placeholder={t.stayConnected.emailPlaceholder}
                        className="w-full min-h-[44px] px-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900"
                      />
                    </div>
                    <label className="flex items-start gap-2.5 text-xs text-slate-700 hc-muted cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={subConsent}
                        onChange={(e) => setSubConsent(e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#00797b]"
                      />
                      <span>{t.stayConnected.consentText}</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <button
                        type="submit"
                        className="min-h-[44px] px-4 py-2 rounded-xl bg-[#083350] hover:bg-[#0d4a72] text-white text-xs font-bold inline-flex items-center gap-1.5 hc-accent"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        {t.stayConnected.subscribeBtn}
                      </button>
                      <a
                        href="#whatsapp-channel"
                        onClick={(e) => {
                          e.preventDefault();
                          setSubReceipt(
                            "WhatsApp Channel Link Verified: https://whatsapp.com/channel/skala-indonesia"
                          );
                        }}
                        className="min-h-[44px] px-4 py-2 rounded-xl bg-[#00797b] hover:bg-[#005e60] text-white text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        {t.stayConnected.whatsappBtn}
                      </a>
                    </div>
                    {subReceipt && (
                      <div
                        role="status"
                        className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{subReceipt}</span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Anti-Spam Contact Form */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4 hc-surface">
                  <h2 className="text-lg font-bold text-[#083350] hc-surface">
                    {t.stayConnected.contactHeading}
                  </h2>
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    {/* Honeypot field hidden from human users */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website-hp">Leave blank</label>
                      <input
                        id="website-hp"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={contactHoneypot}
                        onChange={(e) => setContactHoneypot(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        aria-label={t.stayConnected.namePlaceholder}
                        placeholder={t.stayConnected.namePlaceholder}
                        className="min-h-[44px] px-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900"
                      />
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        aria-label={t.stayConnected.emailPlaceholder}
                        placeholder={t.stayConnected.emailPlaceholder}
                        className="min-h-[44px] px-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900"
                      />
                    </div>
                    <textarea
                      required
                      rows={3}
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      aria-label={t.stayConnected.messagePlaceholder}
                      placeholder={t.stayConnected.messagePlaceholder}
                      className="w-full p-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900"
                    />
                    <button
                      type="submit"
                      className="min-h-[44px] px-5 py-2 rounded-xl bg-[#083350] hover:bg-[#0d4a72] text-white text-xs font-bold hc-accent"
                    >
                      {t.stayConnected.sendContactBtn}
                    </button>
                    {contactSent && (
                      <div
                        role="status"
                        className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{contactSent}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#083350] text-white py-10 border-t-4 border-[#00A9A3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Official Co-Branding Logos Strip (from skala.or.id) */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-6">
              <img
                src="/images/skala-logo.png"
                alt="SKALA"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                {PARTNER_LOGOS.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-teal-200">
                  {t.footer.cobranding}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  IFC Tower 2, Level 17, Jl. Jenderal Sudirman Kav. 22-23, Jakarta 12920 • info@skala.or.id
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{t.footer.implementedBy}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => openArchTab("compliance")}
                  className="hover:underline text-slate-200"
                >
                  {t.footer.privacy}
                </button>
                <span aria-hidden="true" className="text-white/30">
                  •
                </span>
                <button
                  type="button"
                  onClick={() => openArchTab("compliance")}
                  className="hover:underline text-slate-200"
                >
                  {t.footer.accessibility}
                </button>
                <span aria-hidden="true" className="text-white/30">
                  •
                </span>
                <button
                  type="button"
                  onClick={() => openArchTab("api")}
                  className="hover:underline text-teal-300"
                >
                  {t.footer.apiRss}
                </button>
                <span aria-hidden="true" className="text-white/30">
                  •
                </span>
                <button
                  type="button"
                  onClick={() => openArchTab("aio")}
                  className="hover:underline text-teal-300"
                >
                  {t.footer.llmsTxt}
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* UU PDP 27/2022 Cookie Consent Bar */}
        {!cookieConsentSaved && (
          <div
            role="region"
            aria-label="Cookie and data privacy consent"
            className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto z-40 rounded-2xl bg-slate-900 text-white p-4 shadow-2xl border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-2.5 text-xs text-slate-200">
              <Cookie className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                {locale === "en"
                  ? "skala.or.id uses essential privacy-preserving session cookies and Matomo/GA4 consent controls in compliance with Indonesia UU PDP No. 27/2022 and DFAT privacy rules."
                  : "skala.or.id menggunakan cookie esensial dan kendali persetujuan analitik sesuai UU PDP No. 27 Tahun 2022 serta kebijakan privasi DFAT."}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setCookieConsentSaved(true)}
                className="min-h-[38px] px-3 py-1.5 rounded-lg border border-slate-600 text-xs font-bold hover:bg-slate-800"
              >
                {locale === "en" ? "Essential Only" : "Esensial Saja"}
              </button>
              <button
                type="button"
                onClick={() => setCookieConsentSaved(true)}
                className="min-h-[38px] px-3.5 py-1.5 rounded-lg bg-[#00797b] hover:bg-[#005e60] text-xs font-bold text-white"
              >
                {locale === "en" ? "Accept" : "Setuju"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals & Technical Blueprint Drawer */}
      <PublicationModal
        locale={locale}
        publication={activePub}
        mode={modalMode}
        onClose={() => {
          setActivePub(null);
          setModalMode(null);
        }}
        onDownload={handleDownload}
      />

      <ArchitectureDrawer
        open={archDrawerOpen}
        initialTab={archInitialTab}
        locale={locale}
        onClose={() => setArchDrawerOpen(false)}
      />
    </div>
  );
}
