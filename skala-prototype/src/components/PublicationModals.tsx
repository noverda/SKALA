"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Download,
  FileText,
  Play,
  Pause,
  Subtitles,
  BarChart3,
  Copy,
  Check,
  Database,
} from "lucide-react";
import { Locale, PublicationItem } from "@/data/skalaData";

interface PublicationModalProps {
  locale: Locale;
  publication: PublicationItem | null;
  mode: "pdf" | "media" | "chart" | null;
  onClose: () => void;
  onDownload: (id: string) => void;
}

export function PublicationModal({
  locale,
  publication,
  mode,
  onClose,
  onDownload,
}: PublicationModalProps) {
  const [page, setPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [progress, setProgress] = useState(28);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPage(1);
    setIsPlaying(false);
    setCopied(false);
  }, [publication?.id, mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (publication && mode) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [publication, mode, onClose]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 600);
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!publication || !mode) return null;

  const citation = `SKALA (${publication.year}). ${publication.title[locale]}. Canonical ID: ${publication.skalaOneId}. https://skala.or.id/${locale}/publications/${publication.slug}`;

  const handleCopyCitation = () => {
    navigator.clipboard?.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pub-modal-title"
    >
      <div className="bg-white hc-surface rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 px-6 py-4 bg-[#083350] text-white">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-teal-200 font-semibold">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-900/70 border border-teal-500/40">
                <Database className="w-3 h-3" aria-hidden="true" />
                {publication.skalaOneId}
              </span>
              <span>•</span>
              <span>{publication.provinceLabel[locale]}</span>
              <span>•</span>
              <span>{publication.translationStatus}</span>
            </div>
            <h3 id="pub-modal-title" className="text-lg font-bold mt-1 leading-snug">
              {publication.title[locale]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={locale === "en" ? "Close modal" : "Tutup jendela"}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 text-white shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {mode === "pdf" && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-100 hc-surface p-3 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 hc-muted">
                  <FileText className="w-4 h-4 text-[#00797b]" aria-hidden="true" />
                  <span>
                    {locale === "en" ? "In-Browser Document Reader" : "Pembaca Dokumen Dalam Peramban"} •{" "}
                    {publication.fileSize || "2.0 MB"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="min-h-[36px] px-3 rounded-lg border border-slate-300 bg-white text-xs font-semibold disabled:opacity-40 text-slate-800"
                  >
                    {locale === "en" ? "Prev" : "Sblm"}
                  </button>
                  <span className="text-xs font-bold text-slate-700 hc-muted">
                    {page} / {publication.pages || 12}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setPage((p) => Math.min(publication.pages || 12, p + 1))
                    }
                    disabled={page === (publication.pages || 12)}
                    className="min-h-[36px] px-3 rounded-lg border border-slate-300 bg-white text-xs font-semibold disabled:opacity-40 text-slate-800"
                  >
                    {locale === "en" ? "Next" : "Lanjut"}
                  </button>
                </div>
              </div>

              {/* Simulated PDF Page Sheet */}
              <div className="border border-slate-300 rounded-xl p-6 bg-white hc-surface shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00797b]">
                    SKALA KNOWLEDGE PRODUCT • PAGE {page}
                  </span>
                  <span className="text-xs text-slate-500">
                    {publication.publishedDate}
                  </span>
                </div>
                {page === 1 ? (
                  <>
                    <h4 className="text-base font-bold text-[#083350] hc-surface">
                      {locale === "en" ? "Executive Summary" : "Ringkasan Eksekutif"}
                    </h4>
                    <p className="text-sm text-slate-700 hc-muted leading-relaxed">
                      {publication.summary[locale]}
                    </p>
                    <h5 className="text-sm font-bold text-[#083350] hc-surface pt-2">
                      {locale === "en" ? "Key Evidence & Recommendations" : "Temuan Utama & Rekomendasi"}
                    </h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 hc-muted">
                      {publication.keyFindings[locale].map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="space-y-3 text-sm text-slate-700 hc-muted">
                    <h4 className="text-base font-bold text-[#083350] hc-surface">
                      {locale === "en"
                        ? `Section ${page}: Implementation & Sub-National Policy Analysis`
                        : `Bagian ${page}: Implementasi & Analisis Kebijakan Daerah`}
                    </h4>
                    <p>
                      {locale === "en"
                        ? "This page demonstrates native browser PDF/document inspection without external plugins, preserving semantic text selection for screen readers and keyboard navigation."
                        : "Halaman ini mendemonstrasikan pratinjau dokumen/PDF langsung di peramban tanpa plugin tambahan, menjaga teks tetap dapat dibaca oleh pembaca layar."}
                    </p>
                    <div className="p-4 rounded-lg bg-[#e6f4f4] text-[#083350] text-xs font-medium">
                      {locale === "en"
                        ? "Canonical metadata synced from SKALA One and exposed to KMC via /api/v1/publications."
                        : "Metadata kanonik tersinkron dari SKALA One dan tersedia untuk KMC melalui /api/v1/publications."}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {mode === "media" && (
            <>
              <div className="rounded-xl bg-slate-900 text-white p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-teal-300 font-semibold">
                  <span>
                    {locale === "en"
                      ? "Accessible Media Embed (YouTube / Podcast Mirror)"
                      : "Pemutar Media Aksesibel (YouTube / Podcast)"}
                  </span>
                  <span>{publication.mediaDuration || "24:15"}</span>
                </div>

                {/* Simulated Video/Audio Stage */}
                <div className="rounded-lg bg-gradient-to-r from-[#083350] to-[#005e60] p-6 text-center space-y-3 border border-white/10">
                  <p className="text-sm font-semibold text-white">
                    {publication.title[locale]}
                  </p>
                  {captionsOn && (
                    <div
                      className="inline-block bg-black/80 text-yellow-300 text-xs px-3 py-1.5 rounded font-medium"
                      aria-live="polite"
                    >
                      [CC]{" "}
                      {publication.transcript?.[locale]?.[
                        progress < 35 ? 0 : progress < 70 ? 1 : 2
                      ]?.text || publication.summary[locale]}
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((v) => !v)}
                    className="min-w-[44px] min-h-[44px] px-4 rounded-lg bg-[#00797b] hover:bg-[#005e60] text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" aria-hidden="true" />
                        {locale === "en" ? "Pause" : "Jeda"}
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" aria-hidden="true" />
                        {locale === "en" ? "Play" : "Putar"}
                      </>
                    )}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    aria-label={locale === "en" ? "Media timeline" : "Linimasa media"}
                    className="flex-1 accent-teal-400"
                  />
                  <button
                    type="button"
                    onClick={() => setCaptionsOn((c) => !c)}
                    aria-pressed={captionsOn}
                    className={`min-h-[44px] px-3 rounded-lg border text-xs font-bold inline-flex items-center gap-1.5 ${
                      captionsOn
                        ? "bg-yellow-400 text-slate-950 border-yellow-400"
                        : "bg-transparent text-white border-white/30"
                    }`}
                  >
                    <Subtitles className="w-4 h-4" aria-hidden="true" />
                    CC
                  </button>
                </div>
              </div>

              {/* WCAG 2.2 AA Full Transcript */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 hc-surface space-y-3">
                <h4 className="text-sm font-bold text-[#083350] hc-surface">
                  {locale === "en"
                    ? "Accessible Full Transcript (WCAG 2.2 AA)"
                    : "Transkrip Lengkap Aksesibel (WCAG 2.2 AA)"}
                </h4>
                <div className="space-y-3">
                  {(publication.transcript?.[locale] || []).map((line) => (
                    <div
                      key={line.time}
                      className="p-3 rounded-lg bg-white hc-surface border border-slate-200 text-sm"
                    >
                      <div className="text-xs font-bold text-[#00797b] mb-0.5">
                        [{line.time}] {line.speaker}
                      </div>
                      <p className="text-slate-700 hc-muted">{line.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {mode === "chart" && publication.chartData && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#083350] hc-surface">
                <BarChart3 className="w-5 h-5 text-[#00797b]" aria-hidden="true" />
                <h4>{publication.chartData.title[locale]}</h4>
              </div>
              <p className="text-xs text-slate-600 hc-muted">
                {locale === "en"
                  ? "Interactive data visualisation embedded in SKALA article (open-format JSON backed)."
                  : "Visualisasi data interaktif tertanam dalam artikel SKALA (didukung format JSON terbuka)."}
              </p>

              {/* Accessible Bar Chart */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hc-surface space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-slate-400 inline-block" />
                    {locale === "en" ? "2023 Baseline" : "Basis Awal 2023"}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-[#00797b] inline-block" />
                    {locale === "en" ? "Current / Phase II" : "Capaian Terkini / Fase II"}
                  </span>
                </div>
                <div className="space-y-3">
                  {publication.chartData.points.map((pt) => (
                    <div key={pt.label} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-700 hc-muted">
                        <span>{pt.label}</span>
                        <span>
                          {pt.baseline}
                          {publication.chartData?.unit} →{" "}
                          <strong className="text-[#00797b]">
                            {pt.current}
                            {publication.chartData?.unit}
                          </strong>
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-400 rounded-full"
                            style={{ width: `${pt.baseline}%` }}
                          />
                        </div>
                        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#00797b] rounded-full"
                            style={{ width: `${pt.current}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Citation & Metadata Strip */}
          <div className="p-3.5 rounded-xl bg-slate-100 hc-surface border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-slate-600 hc-muted font-mono break-all">
              {citation}
            </p>
            <button
              type="button"
              onClick={handleCopyCitation}
              className="min-h-[38px] px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {locale === "en" ? "Copied" : "Disalin"}
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  {locale === "en" ? "Copy Citation" : "Salin Sitasi"}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 hc-surface border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-600 hc-muted">
            {locale === "en" ? "Tracked downloads:" : "Unduhan tercatat:"}{" "}
            <strong>{publication.downloads.toLocaleString()}</strong>
          </span>
          <div className="flex items-center gap-2">
            {publication.fileSize && (
              <button
                type="button"
                onClick={() => onDownload(publication.id)}
                className="min-h-[44px] px-4 py-2 rounded-lg bg-[#00797b] hover:bg-[#005e60] text-white text-xs font-bold inline-flex items-center gap-1.5 hc-accent"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                {locale === "en"
                  ? `Download PDF (${publication.fileSize})`
                  : `Unduh PDF (${publication.fileSize})`}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-bold"
            >
              {locale === "en" ? "Close" : "Tutup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
