"use client";

import React from "react";
import { MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Locale, PROVINCES, ProvinceProfile } from "@/data/skalaData";
import { UI_COPY } from "@/data/translations";

interface IndonesiaMapProps {
  locale: Locale;
  selectedProvinceId: string;
  onSelectProvince: (id: string) => void;
  onFilterByProvince: (provinceName: string) => void;
}

export function IndonesiaMap({
  locale,
  selectedProvinceId,
  onSelectProvince,
  onFilterByProvince,
}: IndonesiaMapProps) {
  const t = UI_COPY[locale].provincesSection;
  const active: ProvinceProfile =
    PROVINCES.find((p) => p.id === selectedProvinceId) ?? PROVINCES[0];

  const getRepoFilterKey = (prov: ProvinceProfile) => {
    if (prov.id === "kaltara") return "Maluku";
    if (prov.id === "ntb") return "NTB";
    if (prov.id === "ntt") return "NTT";
    if (prov.id === "maluku") return "Maluku";
    if (prov.id === "gorontalo") return "Gorontalo";
    return prov.name.en;
  };

  return (
    <section
      id="provinces"
      aria-labelledby="provinces-heading"
      className="py-12 border-t border-slate-200 bg-white hc-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#00797b] mb-1">
              {locale === "en" ? "SUB-NATIONAL IMPACT" : "DAMPAK DAERAH"}
            </span>
            <h2
              id="provinces-heading"
              className="text-2xl sm:text-3xl font-bold text-[#083350] hc-surface"
            >
              {t.heading}
            </h2>
            <p className="text-slate-600 hc-muted mt-1 max-w-2xl">
              {t.subheading}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Map Canvas */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#eef6fa] via-[#f4faf9] to-[#e7f1f7] p-5 flex flex-col justify-between hc-surface">
            <div className="flex items-center justify-between gap-2 mb-3">
              <p className="text-xs font-medium text-slate-600 hc-muted flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#00797b]" aria-hidden="true" />
                {t.mapHint}
              </p>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#083350] border border-slate-200">
                7+ Partner Provinces
              </span>
            </div>

            {/* Stylized Accessible Archipelago Map */}
            <div className="relative w-full aspect-[16/9] rounded-xl bg-[#083350] overflow-hidden border border-[#0d4a72] shadow-inner">
              {/* Subtle latitude/longitude grid */}
              <svg
                viewBox="0 0 100 56"
                className="w-full h-full"
                role="img"
                aria-label={
                  locale === "en"
                    ? "Interactive map of SKALA partner provinces across Indonesia"
                    : "Peta interaktif provinsi mitra SKALA di Indonesia"
                }
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="0.25"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="56" fill="url(#grid)" />

                {/* Simplified Indonesian Archipelago silhouettes */}
                {/* Sumatra */}
                <path
                  d="M6,11 L11,10 L17,19 L25,29 L23,33 L14,24 L7,15 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Java & Bali */}
                <path
                  d="M25,35 L39,36 L41,39 L26,38 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Kalimantan */}
                <path
                  d="M34,15 L45,12 L48,20 L44,29 L34,27 L32,20 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Sulawesi */}
                <path
                  d="M51,18 L58,19 L60,23 L55,24 L57,31 L52,32 L50,24 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Nusa Tenggara (NTB & NTT) */}
                <path
                  d="M42,39 L48,39 L50,42 L43,41 Z M51,40 L59,41 L57,44 L51,43 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Maluku */}
                <path
                  d="M65,22 L70,21 L72,28 L68,34 L65,29 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />
                {/* Papua */}
                <path
                  d="M77,23 L84,22 L94,27 L94,37 L84,34 L79,29 Z"
                  fill="#135782"
                  stroke="#3b82a6"
                  strokeWidth="0.3"
                />

                {/* Province Interactive Nodes */}
                {PROVINCES.map((prov) => {
                  const isSelected = prov.id === active.id;
                  const cx = prov.x;
                  const cy = (prov.y / 100) * 56;
                  return (
                    <g key={prov.id}>
                      {isSelected && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="3.8"
                          fill="rgba(20, 184, 166, 0.35)"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 2.1 : 1.5}
                        fill={isSelected ? "#facc15" : "#14b8a6"}
                        stroke="#ffffff"
                        strokeWidth="0.5"
                        className="cursor-pointer transition-all"
                        onClick={() => onSelectProvince(prov.id)}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Accessible Interactive Overlay Pins */}
              {PROVINCES.map((prov) => {
                const isSelected = prov.id === active.id;
                return (
                  <button
                    key={prov.id}
                    type="button"
                    onClick={() => onSelectProvince(prov.id)}
                    aria-pressed={isSelected}
                    style={{
                      left: `${prov.x}%`,
                      top: `${prov.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full focus-visible:outline-yellow-300 group`}
                    aria-label={`${prov.name[locale]} — ${prov.publicationsCount} publications`}
                  >
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap shadow transition-transform translate-y-4 ${
                        isSelected
                          ? "bg-yellow-400 text-slate-950 scale-105"
                          : "bg-slate-900/85 text-white group-hover:bg-[#00797b]"
                      }`}
                    >
                      {prov.id === "papua"
                        ? "Papua"
                        : prov.id === "kaltara"
                        ? "Kaltara"
                        : prov.id === "ntb"
                        ? "NTB"
                        : prov.id === "ntt"
                        ? "NTT"
                        : prov.name[locale]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Province Selector Pills (Keyboard-friendly 44px targets) */}
            <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label="Province selector">
              {PROVINCES.map((prov) => {
                const isSelected = prov.id === active.id;
                return (
                  <button
                    key={prov.id}
                    type="button"
                    onClick={() => onSelectProvince(prov.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                      isSelected
                        ? "bg-[#083350] text-white border-[#083350] hc-accent"
                        : "bg-white text-slate-700 border-slate-300 hover:border-[#00797b] hover:text-[#00797b] hc-surface"
                    }`}
                  >
                    {prov.name[locale]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Provincial Profile Dossier */}
          <div
            className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between hc-surface"
            aria-live="polite"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#e6f4f4] text-[#005e60]">
                    {active.code} • {active.region[locale]}
                  </span>
                  <h3 className="text-2xl font-bold text-[#083350] mt-2 hc-surface">
                    {active.name[locale]}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 hc-muted">
                    {locale === "en" ? "Population" : "Populasi"}
                  </div>
                  <div className="text-lg font-bold text-[#083350] hc-surface">
                    {active.population}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-700 hc-muted bg-white p-3.5 rounded-xl border border-slate-200 hc-surface">
                {active.highlight[locale]}
              </p>

              {/* Quantitative Indicators */}
              <div className="mt-5 space-y-3">
                {[
                  { label: t.basicServiceLabel, val: active.basicServiceIndex },
                  { label: t.healthLabel, val: active.healthCoverage },
                  { label: t.gedsiLabel, val: active.gedsiParticipation },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-700 hc-muted">{metric.label}</span>
                      <span className="text-[#083350] hc-surface">{metric.val}/100</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#00797b] transition-all duration-500"
                        style={{ width: `${metric.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Priority Focus Areas */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 hc-muted mb-2">
                  {t.focusLabel}
                </h4>
                <ul className="space-y-1.5">
                  {active.focusAreas[locale].map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-sm text-slate-700 hc-muted"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#00797b] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-600 hc-muted">
                {active.publicationsCount}{" "}
                {locale === "en" ? "regional knowledge products" : "produk pengetahuan daerah"}
              </span>
              <button
                type="button"
                onClick={() => {
                  onFilterByProvince(getRepoFilterKey(active));
                  document
                    .getElementById("publications")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00797b] hover:bg-[#005e60] text-white text-xs font-bold transition-colors hc-accent"
              >
                {t.filterPubsBtn}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
